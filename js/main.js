(() => {
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

  document.querySelectorAll(".project-slider").forEach((slider) => {
    const track = slider.querySelector(".project-slider__track");
    const slides = slider.querySelectorAll(".project-slider__slide");
    const dots = slider.querySelectorAll(".project-slider__dot");
    const prevBtn = slider.querySelector(".project-slider__btn--prev");
    const nextBtn = slider.querySelector(".project-slider__btn--next");
    let index = 0;
    let startX = 0;
    let currentX = 0;
    let isDragging = false;

    const update = () => {
      track.style.transform = `translateX(-${index * 100}%)`;
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
      track.style.transform = `translateX(${-index * slider.offsetWidth + dx}px)`;
    };

    const onEnd = () => {
      if (!isDragging) return;
      isDragging = false;
      slider.classList.remove("is-dragging");
      const dx = currentX - startX;
      const threshold = slider.offsetWidth * 0.2;
      if (dx > threshold && index > 0) {
        index -= 1;
      } else if (dx < -threshold && index < slides.length - 1) {
        index += 1;
      }
      track.style.transition = "";
      update();
    };

    slider.addEventListener("mousedown", onStart);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onEnd);
    slider.addEventListener("mouseleave", onEnd);
    slider.addEventListener("touchstart", onStart, { passive: true });
    window.addEventListener("touchmove", onMove, { passive: true });
    window.addEventListener("touchend", onEnd);
    window.addEventListener("touchcancel", onEnd);
  });
})();
