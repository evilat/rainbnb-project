// Particles and first step of scroll section

const PARTICLE_CONFIG = {
  maxParticles: 20,
  spawnRate: 500,
  size: { min: 1, max: 3 },
  speed: { min: 4, max: 8 },
  direction: { startX: 0, endX: 100, startY: 100, endY: -10 },
  opacity: { start: 0, peak: 1, end: 0 },
  lifetime: 8000,
  color: "rgba(255, 193, 7, 0.6)",
};

let particleInterval = null;

function startParticleSpawning(container) {
  if (particleInterval) return;

  particleInterval = setInterval(() => {
    if (container.children.length < PARTICLE_CONFIG.maxParticles) {
      const particle = document.createElement("div");
      particle.className = "particle";

      const size =
        Math.random() *
          (PARTICLE_CONFIG.size.max - PARTICLE_CONFIG.size.min) +
        PARTICLE_CONFIG.size.min;
      particle.style.width = size + "px";
      particle.style.height = size + "px";
      particle.style.background = PARTICLE_CONFIG.color;

      const startX =
        Math.random() *
          (PARTICLE_CONFIG.direction.endX -
            PARTICLE_CONFIG.direction.startX) +
        PARTICLE_CONFIG.direction.startX;
      particle.style.left = startX + "%";

      const duration =
        Math.random() *
          (PARTICLE_CONFIG.speed.max - PARTICLE_CONFIG.speed.min) +
        PARTICLE_CONFIG.speed.min;
      particle.style.animationDuration = duration + "s";

      const endX = startX + (Math.random() * 20 - 10);
      const animationName =
        "float-" +
        Date.now() +
        "-" +
        Math.random().toString(36).substr(2, 9);

      const keyframes = `
        @keyframes ${animationName} {
          0% {
            transform: translateY(${PARTICLE_CONFIG.direction.startY}vh) translateX(0px);
            opacity: ${PARTICLE_CONFIG.opacity.start};
          }
          10%, 90% {
            opacity: ${PARTICLE_CONFIG.opacity.peak};
          }
          100% {
            transform: translateY(${PARTICLE_CONFIG.direction.endY}vh) translateX(${endX - startX}vw);
            opacity: ${PARTICLE_CONFIG.opacity.end};
          }
        }
      `;

      const style = document.createElement("style");
      style.textContent = keyframes;
      document.head.appendChild(style);

      particle.style.animation = `${animationName} ${duration}s linear infinite`;
      container.appendChild(particle);

      setTimeout(() => {
        if (particle.parentNode) particle.parentNode.removeChild(particle);
        if (style.parentNode) style.parentNode.removeChild(style);
      }, PARTICLE_CONFIG.lifetime);
    }
  }, PARTICLE_CONFIG.spawnRate);
}

function stopParticleSpawning() {
  clearInterval(particleInterval);
  particleInterval = null;
}

function observeParticlesVisibility() {
  const container = document.getElementById("particles");

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        startParticleSpawning(container);
      } else {
        stopParticleSpawning();
      }
    },
    { threshold: 0.3 }
  );

  observer.observe(container);
}

history.scrollRestoration = "manual";
window.onbeforeload = function () {
  window.scrollTo(0, 0);
};

document.addEventListener("DOMContentLoaded", () => {
  observeParticlesVisibility();      

  const stepsData = [
    {
      title: "Install SafePal",
      body: [
        {
          type: "content",
          html: `Download SafePal from the 
  <a href="https://play.google.com/store/apps/details?id=io.safepal.wallet" style="text-decoration: none; " target="_blank">
    <img class="store-badge" src="img/playstore-badge.png" alt="Play Store Badge">
  </a> or 
  <a href="https://apps.apple.com/app/id1548297139" style="text-decoration: none; " target="_blank">
    <img class="store-badge" src="img/appstore-badge.svg" alt="App Store Badge">
  </a>`,
        },
      ],
    },
    {
      title: "Create Account",
      body: [
        { type: "img", src: "img/screenshots/start.jpg" },
        { type: "content", html: "Click create new wallet button" },
        { type: "img", src: "img/screenshots/password.jpg" },
        {
          type: "content",
          html: "Enter a 6 digit password and remember it, this will be used to verify you. It may also ask if you want to add a fingerprint for easier verification.",
        },
        { type: "img", src: "img/screenshots/ready-to-backup.jpg" },
        { type: "content", html: "Click Back up now" },
      ],
    },
    {
      title: "Backup mnemonic phrase",
      body: [
        { type: "img", src: "img/screenshots/backup.jpg" },
        { type: "content", html: "Select back up manually" },
        { type: "img", src: "img/screenshots/backup-manual.jpg" },
        {
          type: "content",
          html: `Check the three checkboxes and click 'Understood'. Then it will give you a 12-word mnemonic phrase. You can write it down or take a photo of it using another phone. After that, you will be asked to verify the phrase by entering it.`,
        },
      ],
    },
    {
      title: "Setup your wallet",
      body: [
        { type: "img", src: "img/screenshots/wallet.jpg" },
        {
          type: "content",
          html: "Right now your wallet will show many coins. Click the three dots as highlighted in the image.",
        },
        { type: "img", src: "img/screenshots/dropdown.jpg" },
        {
          type: "content",
          html: "In the dropdown, click 'Manage coins'. It will take you to a new screen.",
        },
        { type: "img", src: "img/screenshots/manage-coin.jpg" },
        {
          type: "content",
          html: "Deselect every coin from this list that is selected and then go to search.",
        },
        { type: "img", src: "img/screenshots/manage-coin-search.jpg" },
        { type: "content", html: "Search 'opbnb' here." },
        { type: "img", src: "img/screenshots/search-opbnb-coin.jpg" },
        {
          type: "content",
          html: "Select the first one from the list that says BNB (opBNB).",
        },
        { type: "img", src: "img/screenshots/wallet-ready.jpg" },
        { type: "content", html: "Your wallet will now look like this." },
      ],
    },
    {
      title: "Add Assets",
      body: [
        {
          type: "content",
          html: "Add BNB (opBNB) worth a minimum of 35 USDT. You can buy it through our WhatsApp helpline number: +1234567890.",
        },
      ],
    },
    {
      title: "Go to DApp",
      body: [
        { type: "img", src: "img/screenshots/explore-popup.jpg" },
        {
          type: "content",
          html: `Go to the Explore tab using bottom navigation. You will see this popup — checkmark "I know how to use DApps very well, skip this guide." Then the "View DApp Store" button will be enabled — click it.`,
        },
        { type: "img", src: "img/screenshots/explore.jpg" },
        {
          type: "content",
          html: "Click on the search bar and it will take you to a new page.",
        },
        { type: "img", src: "img/screenshots/explore-url.jpg" },
        {
          type: "content",
          html: "Type or paste this URL in the top address bar: <strong>getrise.pro</strong>",
        },
        { type: "img", src: "img/screenshots/explore-netwrok-opbnb.jpg" },
        {
          type: "content",
          html: "In the second search bar, type 'opBNB' and select the opBNB network. Then click 'Go' in the top-right corner next to the address bar.",
        },
        { type: "img", src: "img/screenshots/explore-warning.jpg" },
        {
          type: "content",
          html: "You'll see a warning — checkmark 'Don't remind me next time' if you don't want to receive it again, then click 'Confirm'. You'll be redirected to the DApp.",
        },
      ],
    },
    {
      title: "Register on RainBNB",
      body: [
        { type: "img", src: "img/screenshots/dapp-error.jpg" },
        {
          type: "content",
          html: "You may see this error — it's normal. Close it from the lower close button (not the upper one, as that exits the DApp).",
        },
        { type: "img", src: "img/screenshots/dapp-register.jpg" },
        {
          type: "content",
          html: "You will be redirected to the registration screen. Click the 'Register' button to pay the registration fee.",
        },
      ],
    },
  ];

  const scrollContainer = document.getElementById("scrollContainer");
  scrollContainer.innerHTML = "";

  stepsData.forEach((step, index) => {
    const card = document.createElement("div");
    card.className = "card step-card";

    const contentDiv = document.createElement("div");
    contentDiv.className = "step-content overflow-hidden";

    const title = document.createElement("h3");
    title.textContent = `Step ${index + 1}: ${step.title}`;
    contentDiv.appendChild(title);

    step.body.forEach((block) => {
      if (block.type === "content") {
        const p = document.createElement("p");
        p.innerHTML = block.html;
        contentDiv.appendChild(p);
      } else if (block.type === "img") {
        const img = document.createElement("img");
        img.src = block.src;
        img.alt = step.title;
        img.className = "step-img";
        contentDiv.appendChild(img);
      }
    });

    card.appendChild(contentDiv);
    scrollContainer.appendChild(card);
  });

  const nav = document.getElementById("stepNav");
  nav.innerHTML = "";

  stepsData.forEach((_, index) => {
    const btn = document.createElement("button");
    btn.setAttribute("data-step", index);
    btn.textContent = index + 1;
    if (index === 0) btn.classList.add("active");
    nav.appendChild(btn);
  });
});

let stepScrollInitialized = false;
let lastScrollTop = 0;
let scrollDownStartTime = null;
let initTimeout = null;

window.addEventListener("scroll", () => {
  const section = document.getElementById("stepSection");
  const sectionTop = section.offsetTop;
  const scrollY = window.scrollY || window.pageYOffset;
  const scrollingDown = scrollY > lastScrollTop;
  lastScrollTop = scrollY;

  if (stepScrollInitialized || scrollY < sectionTop) {
    scrollDownStartTime = null;
    clearTimeout(initTimeout);
    return;
  }

  if (scrollingDown) {
    if (!scrollDownStartTime) {
      scrollDownStartTime = Date.now();

      initTimeout = setTimeout(() => {
        if (!stepScrollInitialized) {
          stepScroll.init();
          stepScrollInitialized = true;
          setupInitialInputHandlers();
        }
      }, 100);
    }
  } else {
    scrollDownStartTime = null;
    clearTimeout(initTimeout);
  }
});

function setupInitialInputHandlers() {
  const onInitialStepWheel = (e) => {
    e.preventDefault();
    const direction = e.deltaY;

    removeInitialListeners();

    if (direction > 0) {
      stepScroll.scrollToStep(1);
    } else {
      window.scrollBy({ top: -94, left: 0, behavior: "smooth" });
      destroyStepScroll();
    }
  };

  let touchStartY = 0;

  const onTouchStart = (e) => {
    touchStartY = e.changedTouches[0].screenY;
  };

  const onTouchEnd = (e) => {
    const touchEndY = e.changedTouches[0].screenY;
    const deltaY = touchStartY - touchEndY;

    removeInitialListeners();

    if (deltaY > 50) {
      stepScroll.scrollToStep(1);
    } else if (deltaY < -50) {
      window.scrollBy({ top: -94, left: 0, behavior: "smooth" });
      destroyStepScroll();
    }
  };

  function removeInitialListeners() {
    window.removeEventListener("wheel", onInitialStepWheel);
    window.removeEventListener("touchstart", onTouchStart);
    window.removeEventListener("touchend", onTouchEnd);
  }

  setTimeout(() => {
    window.addEventListener("wheel", onInitialStepWheel, {
      passive: false,
    });
  }, 100);

  setTimeout(() => {
    window.addEventListener("touchstart", onTouchStart, {
      passive: false,
    });
    window.addEventListener("touchend", onTouchEnd, { passive: false });
  }, 300);
}

// Step section related (scrolling, side-nav, arrow-nav)
function destroyStepScroll() {
  if (typeof stepScroll !== "undefined" && stepScroll.destroy) {
    document
      .getElementById("scrollContainer")
      .scrollTo({ top: 0, behavior: "smooth" });
    stepScroll.destroy();
  }
  stepScrollInitialized = false;
}

let stepScroll = (() => {
  let container, steps, navButtons, stepHeight;
  let currentStep = 0;
  let scrollAnimationFrame = null;
  let lastWheelTime = 0;
  let touchStartY = 0;
  let touchEndY = 0;
  let stepTimeout;

  const listeners = [];

  const easeOutExpo = (t) => 1 - Math.pow(2, -10 * t) * (t < 1 ? 1 : 0);

  const scrollToStep = (step) => {
    if (step === currentStep || step < 0 || step >= steps.length) return;

    if (stepTimeout) {
      clearTimeout(stepTimeout);
    }

    if (step === 0) {
      const onStepZeroWheel = (e) => {
        e.preventDefault();
        const direction = e.deltaY;

        if (direction < 0) {
          cleanupListeners();
          window.scrollBy({ top: -94, left: 0, behavior: "smooth" });
          destroyStepScroll();
        } else if (direction > 0) {
          cleanupListeners();
          scrollToStep(1);
        }
      };

      let touchStartY = 0;

      const onTouchStart = (e) => {
        touchStartY = e.changedTouches[0].screenY;
      };

      const onTouchEnd = (e) => {
        const touchEndY = e.changedTouches[0].screenY;
        const deltaY = touchStartY - touchEndY;

        if (deltaY > 50) {
          cleanupListeners();
        } else if (deltaY < -50) {
          cleanupListeners();
          window.scrollBy({ top: -94, left: 0, behavior: "smooth" });
          destroyStepScroll();
        }
      };

      const cleanupListeners = () => {
        window.removeEventListener("wheel", onStepZeroWheel);
        window.removeEventListener("touchstart", onTouchStart);
        window.removeEventListener("touchend", onTouchEnd);
      };

      setTimeout(() => {
        window.addEventListener("wheel", onStepZeroWheel, {
          passive: false,
        });
      }, 100);

      setTimeout(() => {
        window.addEventListener("touchstart", onTouchStart, {
          passive: false,
        });
        window.addEventListener("touchend", onTouchEnd, {
          passive: false,
        });
      }, 300);
    }

    if (scrollAnimationFrame) {
      cancelAnimationFrame(scrollAnimationFrame);
      scrollAnimationFrame = null;
    }

    const start = container.scrollTop;
    const end = step * window.innerHeight;
    const change = end - start;
    const duration = 500;
    let startTime = null;

    const animateScroll = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const time = timestamp - startTime;
      const progress = Math.min(time / duration, 1);
      const ease = easeOutExpo(progress);

      container.scrollTop = start + change * ease;

      if (
        window.scrollY + window.innerHeight <
        document.body.scrollHeight - 1
      ) {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: "auto",
        });
      }

      if (progress < 1) {
        scrollAnimationFrame = requestAnimationFrame(animateScroll);
      } else {
        scrollAnimationFrame = null;
      }
    };

    scrollAnimationFrame = requestAnimationFrame(animateScroll);
    currentStep = step;

    updateNavUI(step);
  };

  const showNavs = () => {
    document.querySelector(".side-nav")?.classList.remove("hidden-nav-left");
    document.querySelector(".arrow-nav")?.classList.remove("hidden-nav-right");
  };

  const hideNavs = () => {
    document.querySelector(".side-nav")?.classList.add("hidden-nav-left");
    document.querySelector(".arrow-nav")?.classList.add("hidden-nav-right");
  };

  const updateNavUI = (step) => {
    navButtons.forEach((btn) => btn.classList.remove("active"));
    navButtons[step].classList.add("active");

    document.getElementById("arrowUp").disabled = step === 0;
    document.getElementById("arrowDown").disabled = step === steps.length - 1;
  };

  const handleWheel = (e) => {
    const now = Date.now();
    if (now - lastWheelTime < 200) return;
    lastWheelTime = now;

    const direction = e.deltaY;

    const stepContent = steps[currentStep].querySelector(".step-content");
    if (stepContent && stepContent.scrollHeight > stepContent.clientHeight) {
      const atTop = stepContent.scrollTop === 0;
      const atBottom =
        stepContent.scrollTop + stepContent.clientHeight >=
        stepContent.scrollHeight - 1;

      if ((direction > 0 && !atBottom) || (direction < 0 && !atTop)) {
        return;
      }
    }

    if (direction > 0 && currentStep < steps.length - 1) {
      e.preventDefault();
      scrollToStep(currentStep + 1);
    } else if (direction < 0 && currentStep > 0) {
      e.preventDefault();
      scrollToStep(currentStep - 1);
    }
  };

  const handleKey = (e) => {
    if (e.key === "ArrowDown" && currentStep < steps.length - 1) {
      scrollToStep(currentStep + 1);
    } else if (e.key === "ArrowUp" && currentStep > 0) {
      scrollToStep(currentStep - 1);
    }
  };

  const handleTouchStart = (e) => {
    touchStartY = e.changedTouches[0].screenY;
  };

  let edgeSwipeDetected = true;

  const handleTouchEnd = (e) => {
    const touchEndY = e.changedTouches[0].screenY;
    const deltaY = touchStartY - touchEndY;

    const currentCard = steps[currentStep];
    const content = currentCard.querySelector(".step-content");
    if (!content) return;

    const threshold = 0.9;
    const isScrollable =
      content.scrollHeight > content.clientHeight * threshold;

    const atTop = content.scrollTop <= 0;
    const atBottom =
      content.scrollTop + content.clientHeight >= content.scrollHeight - 2;

    const swipingDown = deltaY > 50;
    const swipingUp = deltaY < -50;

    const wantsNext = swipingDown && currentStep < steps.length - 1;
    const wantsPrev = swipingUp && currentStep > 0;

    if (!isScrollable) {
      if (wantsNext) scrollToStep(currentStep + 1);
      else if (wantsPrev) scrollToStep(currentStep - 1);
      return;
    }

    const reachedEdgeAndWantsNext = swipingDown && atBottom && wantsNext;
    const reachedEdgeAndWantsPrev = swipingUp && atTop && wantsPrev;

    if (reachedEdgeAndWantsNext || reachedEdgeAndWantsPrev) {
      if (edgeSwipeDetected) {
        scrollToStep(currentStep + (reachedEdgeAndWantsNext ? 1 : -1));
        edgeSwipeDetected = true;
      } else {
        edgeSwipeDetected = true;
        clearTimeout(handleTouchEnd._resetTimeout);
        handleTouchEnd._resetTimeout = setTimeout(() => {
          edgeSwipeDetected = true;
        }, 1000);
      }
    } else {
      edgeSwipeDetected = true;
    }
  };

  let isTouchScrollingContent = false;

  const handleTouchMove = (e) => {
    const currentCard = steps[currentStep];
    const content = currentCard.querySelector(".step-content");

    if (!content) return;

    const touchY = e.changedTouches
      ? e.changedTouches[0].screenY
      : e.touches[0].screenY;
    const deltaY = touchStartY - touchY;

    const maxScroll = content.scrollHeight - content.clientHeight;

    if (content.scrollHeight > content.clientHeight) {
      const scrollTop = content.scrollTop;

      if (
        (deltaY > 0 && scrollTop >= maxScroll) ||
        (deltaY < 0 && scrollTop <= 0)
      ) {
        isTouchScrollingContent = false;
      } else {
        isTouchScrollingContent = true;
      }
    }

    if (isTouchScrollingContent) {
      if (e.cancelable) e.stopPropagation();
    } else {
      if (e.cancelable) e.preventDefault();
    }
  };

  const addListener = (target, event, handler, opts = false) => {
    target.addEventListener(event, handler, opts);
    listeners.push(() => target.removeEventListener(event, handler, opts));
  };

  const setupNavButtons = () => {
    navButtons.forEach((btn, i) => {
      addListener(btn, "click", () => scrollToStep(i));
    });
  };

  const setupEventListeners = () => {
    addListener(window, "wheel", handleWheel, { passive: false });
    addListener(window, "keydown", handleKey);
    addListener(container, "touchstart", handleTouchStart, {
      passive: false,
    });
    addListener(container, "touchend", handleTouchEnd, {
      passive: false,
    });
  };

  const setupArrowControls = () => {
    addListener(document.getElementById("arrowUp"), "click", () => {
      if (currentStep > 0) scrollToStep(currentStep - 1);
    });

    addListener(document.getElementById("arrowDown"), "click", () => {
      if (currentStep < steps.length - 1) scrollToStep(currentStep + 1);
    });
  };

  const init = () => {
    document.body.classList.add("no-scroll");
    document
      .querySelectorAll(".step-content")
      .forEach((el) => el.classList.remove("overflow-hidden"));
    container = document.getElementById("scrollContainer");
    steps = document.querySelectorAll(".step-card");
    navButtons = document.querySelectorAll("#stepNav button");

    setupNavButtons();
    setupEventListeners();
    setupArrowControls();
    updateNavUI(0);
    showNavs();
  };

  const destroy = () => {
    document.body.classList.remove("no-scroll");
    document
      .querySelectorAll(".step-content")
      .forEach((el) => el.classList.add("overflow-hidden"));
    listeners.forEach((remove) => remove());
    listeners.length = 0;
    scrollAnimationFrame && cancelAnimationFrame(scrollAnimationFrame);
    scrollAnimationFrame = null;
    currentStep = 0;
    hideNavs();
  };

  return {
    init,
    destroy,
    scrollToStep,
  };
})();
