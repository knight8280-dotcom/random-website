// Red Stitch Card Co. — progressive enhancements. The site works without this file.
(() => {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  /* Scroll progress bar + header state */
  const bar = document.querySelector("[data-progress]");
  const header = document.querySelector("[data-header]");
  let ticking = false;
  const onScroll = () => {
    ticking = false;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const p = max > 0 ? Math.min(1, window.scrollY / max) : 0;
    if (bar) bar.style.transform = `scaleX(${p})`;
    if (header) header.classList.toggle("is-scrolled", window.scrollY > 40);
  };
  window.addEventListener("scroll", () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(onScroll);
    }
  }, { passive: true });
  onScroll();

  /* Mobile menu */
  const menuBtn = document.querySelector("[data-menu]");
  if (menuBtn && header) {
    const setOpen = (open) => {
      header.classList.toggle("is-open", open);
      menuBtn.setAttribute("aria-expanded", String(open));
    };
    menuBtn.addEventListener("click", () => setOpen(menuBtn.getAttribute("aria-expanded") !== "true"));
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && header.classList.contains("is-open")) {
        setOpen(false);
        menuBtn.focus();
      }
    });
    document.querySelectorAll("[data-mnav] a").forEach((a) => a.addEventListener("click", () => setOpen(false)));
    window.matchMedia("(min-width: 961px)").addEventListener("change", (e) => e.matches && setOpen(false));
  }

  /* Staggered reveals */
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !reduced) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-in"));
  }

  /* Count-up numbers (career stat line) */
  const counters = document.querySelectorAll("[data-count]");
  const runCount = (el) => {
    const target = Number(el.dataset.count);
    if (reduced) return;
    const dur = 1600;
    const start = performance.now();
    const step = (now) => {
      const t = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - t, 3);
      el.textContent = Math.round(target * eased).toLocaleString("en-US");
      if (t < 1) requestAnimationFrame(step);
    };
    el.textContent = "0";
    requestAnimationFrame(step);
  };
  if (counters.length && "IntersectionObserver" in window) {
    const co = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          runCount(entry.target);
          co.unobserve(entry.target);
        }
      });
    }, { threshold: 0.6 });
    counters.forEach((el) => co.observe(el));
  }

  /* Card fan: tilt toward the pointer and move the holo sheen */
  if (finePointer && !reduced) {
    document.querySelectorAll("[data-fan]").forEach((zone) => {
      const fan = zone.querySelector(".fan") || zone;
      let raf = 0;
      zone.addEventListener("pointermove", (e) => {
        const r = zone.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width;
        const y = (e.clientY - r.top) / r.height;
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => {
          fan.style.setProperty("--rx", `${(x - 0.5) * 16}deg`);
          fan.style.setProperty("--ry", `${(0.5 - y) * 12}deg`);
          zone.querySelectorAll(".tc").forEach((card) => {
            const cr = card.getBoundingClientRect();
            card.style.setProperty("--mx", ((e.clientX - cr.left) / cr.width).toFixed(3));
            card.style.setProperty("--my", ((e.clientY - cr.top) / cr.height).toFixed(3));
          });
          fan.classList.add("is-tracking");
        });
      });
      zone.addEventListener("pointerleave", () => {
        cancelAnimationFrame(raf);
        fan.style.setProperty("--rx", "0deg");
        fan.style.setProperty("--ry", "0deg");
        fan.classList.remove("is-tracking");
      });
    });
  }

  /* Open / closed status from the shop's local time */
  const status = document.querySelector("[data-hours]");
  if (status) {
    try {
      const { tz, hours } = JSON.parse(status.dataset.hours);
      const parts = new Intl.DateTimeFormat("en-US", { timeZone: tz, weekday: "short", hour: "numeric", minute: "numeric", hourCycle: "h23" }).formatToParts(new Date());
      const get = (type) => parts.find((p) => p.type === type).value;
      const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(get("weekday"));
      const mins = Number(get("hour")) * 60 + Number(get("minute"));
      const toMin = (t) => { const [h, m] = t.split(":").map(Number); return h * 60 + m; };
      const label = (t) => { const [h, m] = t.split(":").map(Number); const hh = ((h + 11) % 12) + 1; return `${hh}${m ? ":" + String(m).padStart(2, "0") : ""} ${h >= 12 ? "PM" : "AM"}`; };
      const [open, close] = hours[day];
      const text = status.querySelector("[data-status]");
      if (open && mins >= toMin(open) && mins < toMin(close)) {
        status.classList.add("is-open");
        text.textContent = `Open now · until ${label(close)} today`;
      } else {
        // Find the next opening.
        let next = null;
        for (let i = 0; i < 8 && !next; i++) {
          const d = (day + i) % 7;
          const [o] = hours[d];
          if (o && (i > 0 || mins < toMin(o))) next = { d, o, i };
        }
        const names = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        text.textContent = next
          ? `Closed now · opens ${next.i === 0 ? "today" : next.i === 1 ? "tomorrow" : names[next.d]} at ${label(next.o)}`
          : "Closed now";
      }
      document.querySelectorAll(`.hours tr[data-day="${day}"]`).forEach((tr) => tr.classList.add("is-today"));
    } catch (_) {
      /* keep the static fallback text */
    }
  }

  /* Contact topic from ?topic= */
  const topic = document.querySelector("[data-topic]");
  if (topic) {
    const wanted = new URLSearchParams(location.search).get("topic");
    if (wanted && topic.querySelector(`option[value="${CSS.escape(wanted)}"]`)) topic.value = wanted;
  }

  /* Demo forms: the browser validates, then we show the thank-you panel. */
  document.querySelectorAll("form[data-demo-form]").forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const done = form.querySelector("[data-done]");
      const nameField = form.querySelector('input[autocomplete="name"]');
      const first = nameField && nameField.value.trim().split(/\s+/)[0];
      const nameSlot = form.querySelector("[data-done-name]");
      if (nameSlot) nameSlot.textContent = first ? `, ${first}` : "";
      if (done) {
        done.hidden = false;
        done.focus();
      }
    });
  });

  /* FAQ page: highlight the group in view */
  const faqLinks = document.querySelectorAll(".faq-nav a");
  if (faqLinks.length && "IntersectionObserver" in window) {
    const map = new Map([...faqLinks].map((a) => [a.getAttribute("href").slice(1), a]));
    const fo = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          faqLinks.forEach((a) => a.classList.remove("is-active"));
          const link = map.get(entry.target.id);
          if (link) link.classList.add("is-active");
        }
      });
    }, { rootMargin: "-40% 0px -55% 0px" });
    document.querySelectorAll(".faq-group").forEach((g) => fo.observe(g));
  }
})();
