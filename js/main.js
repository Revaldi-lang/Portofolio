(() => {
  const themeToggle = document.getElementById("theme-toggle");
  const metaTheme = document.querySelector('meta[name="theme-color"]');

  const applyTheme = (theme) => {
    document.documentElement.setAttribute("data-theme", theme);
    if (themeToggle) {
      themeToggle.checked = theme !== "dark";
    }
    if (metaTheme) {
      metaTheme.setAttribute(
        "content",
        theme === "dark" ? "#0f1115" : "#f8f9fa"
      );
    }
  };

  applyTheme(localStorage.getItem("theme") === "dark" ? "dark" : "light");

  if (themeToggle) {
    themeToggle.addEventListener("change", () => {
      const theme = themeToggle.checked ? "light" : "dark";
      applyTheme(theme);
      localStorage.setItem("theme", theme);
    });
  }

  const header = document.getElementById("site-header");
  const navToggle = document.getElementById("nav-toggle");
  const navLinks = document.getElementById("nav-links");
  const sections = document.querySelectorAll("main section[id]");
  const navItems = document.querySelectorAll(".nav__link");

  const onScroll = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 8);

    let currentId = "";
    const offset = window.innerHeight * 0.35;

    sections.forEach((section) => {
      const top = section.offsetTop - offset;
      if (window.scrollY >= top) {
        currentId = section.id;
      }
    });

    navItems.forEach((link) => {
      const isActive = link.getAttribute("href") === `#${currentId}`;
      link.classList.toggle("is-active", isActive);
    });
  };

  const closeMenu = () => {
    navToggle.setAttribute("aria-expanded", "false");
    navLinks.classList.remove("is-open");
  };

  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });
  onScroll();

  const projectGrid = document.getElementById("project-grid");
  if (projectGrid) {
    const prevBtn = document.getElementById("project-prev");
    const nextBtn = document.getElementById("project-next");

    const step = () => {
      const card = projectGrid.querySelector(".project-card");
      return card ? card.offsetWidth + 24 : projectGrid.clientWidth;
    };

    const updateControls = () => {
      const maxScroll = projectGrid.scrollWidth - projectGrid.clientWidth - 1;
      prevBtn.disabled = projectGrid.scrollLeft <= 0;
      nextBtn.disabled = projectGrid.scrollLeft >= maxScroll;
    };

    prevBtn.addEventListener("click", () => {
      projectGrid.scrollBy({ left: -step(), behavior: "smooth" });
    });

    nextBtn.addEventListener("click", () => {
      projectGrid.scrollBy({ left: step(), behavior: "smooth" });
    });

    projectGrid.addEventListener("scroll", updateControls, { passive: true });
    window.addEventListener("resize", updateControls);
    updateControls();
  }

  document.querySelectorAll(".project-slider").forEach((slider) => {
    const screen = slider.querySelector(".project-card__screen");
    const track = slider.querySelector(".project-slider__track");
    const slides = slider.querySelectorAll(".project-slider__slide");
    const dots = slider.querySelectorAll(".project-slider__dot");
    const prevBtn = slider.querySelector(".project-slider__btn--prev");
    const nextBtn = slider.querySelector(".project-slider__btn--next");
    const slideWidth = () => slides[0].offsetWidth;
    let index = 0;
    let startX = 0;
    let currentX = 0;
    let isDragging = false;

    const update = () => {
      track.style.transform = `translateX(${-index * slideWidth()}px)`;
      dots.forEach((dot, i) => {
        const active = i === index;
        dot.classList.toggle("is-active", active);
        if (active) {
          dot.setAttribute("aria-current", "true");
        } else {
          dot.removeAttribute("aria-current");
        }
      });
      prevBtn.disabled = index === 0;
      nextBtn.disabled = index === slides.length - 1;
    };

    prevBtn.addEventListener("click", () => {
      index = Math.max(0, index - 1);
      update();
    });

    nextBtn.addEventListener("click", () => {
      index = Math.min(slides.length - 1, index + 1);
      update();
    });

    dots.forEach((dot, i) => {
      dot.addEventListener("click", () => {
        index = i;
        update();
      });
    });

    const onStart = (event) => {
      if (event.target.closest("button")) return;
      isDragging = true;
      startX = currentX = event.touches ? event.touches[0].clientX : event.clientX;
      slider.classList.add("is-dragging");
    };

    const onMove = (event) => {
      if (!isDragging) return;
      currentX = event.touches ? event.touches[0].clientX : event.clientX;
      const dx = currentX - startX;
      track.style.transition = "none";
      track.style.transform = `translateX(${-index * slideWidth() + dx}px)`;
    };

    const onEnd = () => {
      if (!isDragging) return;
      isDragging = false;
      slider.classList.remove("is-dragging");
      const dx = currentX - startX;
      const threshold = slideWidth() * 0.2;
      if (dx > threshold && index > 0) {
        index -= 1;
      } else if (dx < -threshold && index < slides.length - 1) {
        index += 1;
      }
      track.style.transition = "";
      update();
    };

    screen.addEventListener("mousedown", onStart);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onEnd);
    screen.addEventListener("mouseleave", onEnd);
    screen.addEventListener("touchstart", onStart, { passive: true });
    window.addEventListener("touchmove", onMove, { passive: true });
    window.addEventListener("touchend", onEnd);
    window.addEventListener("touchcancel", onEnd);
  });
})();
