// header go round
window.addEventListener("scroll", function () {
  const nav = document.querySelector("nav");
  if (window.scrollY > 20) {
    nav.classList.add("shrink");
  } else {
    nav.classList.remove("shrink");
  }
});

// nav hamburger
const toggleBtn = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

toggleBtn.addEventListener("click", () => {
  toggleBtn.classList.toggle("collapsed");
  navMenu.classList.toggle("open");
});

// scroll stuff
history.scrollRestoration = "manual";
window.onbeforeload = function () {
  window.scrollTo(0, 0);
};

document.addEventListener("DOMContentLoaded", () => {
  const stepsData = [
    {
      title: "Install SafePal",
      body: [
        {
          type: "content",
          html: `<a href="https://play.google.com/store/apps/details?id=io.safepal.wallet" target="_blank">
    <img class="store-badge" src="img/playstore-badge.png" alt="Play Store Badge">
  </a><a href="https://apps.apple.com/app/id1548297139" target="_blank">
    <img class="store-badge" src="img/appstore-badge.svg" alt="App Store Badge">
  </a>`,
        },
      ],
    },
    {
      title: "Create Account",
      body: [
        { type: "img", src: "img/screenshots/crops/start.jpg" },
        {
          type: "content",
          html: `Click <span class="highlight-text">create new wallet</span> button`,
        },
        { type: "img", src: "img/screenshots/crops/password.jpg" },
        {
          type: "content",
          html: `Enter a <span class="highlight-text">6 digit password</span> and remember it. This will be used to verify you. It may also ask if you want to add a <span class="highlight-text">fingerprint</span> for easier verification.`,
        },
        { type: "img", src: "img/screenshots/crops/ready-to-backup.jpg" },
        {
          type: "content",
          html: `Click <span class="highlight-text">Back up now</span>`,
        },
      ],
    },
    {
      title: "Backup mnemonic phrase",
      body: [
        { type: "img", src: "img/screenshots/crops/backup.jpg" },
        {
          type: "content",
          html: `Select <span class="highlight-text">back up manually</span>`,
        },
        { type: "img", src: "img/screenshots/crops/backup-manual.jpg" },
        {
          type: "content",
          html: `Check the <span class="highlight-text">three checkboxes</span> and click <span class="highlight-text">'Understood'</span>. Then it will give you a <span class="highlight-text">12-word mnemonic phrase</span>. You can write it down or take a photo using another phone. After that, you will be asked to <span class="highlight-text">verify the phrase</span> by entering it.`,
        },
      ],
    },
    {
      title: "Setup your wallet",
      body: [
        { type: "img", src: "img/screenshots/crops/wallet.jpg" },
        {
          type: "content",
          html: `Right now your wallet will show many coins. Click the <span class="highlight-text">three dots</span> as highlighted in the image.`,
        },
        { type: "img", src: "img/screenshots/crops/dropdown.jpg" },
        {
          type: "content",
          html: `In the dropdown, click <span class="highlight-text">'Manage coins'</span>. It will take you to a new screen.`,
        },
        { type: "img", src: "img/screenshots/crops/manage-coin.jpg" },
        {
          type: "content",
          html: `Deselect <span class="highlight-text">every coin</span> from this list that is selected and then go to <span class="highlight-text">search</span>.`,
        },
        { type: "img", src: "img/screenshots/crops/manage-coin-search.jpg" },
        {
          type: "content",
          html: `Search <span class="highlight-text">'opbnb'</span> here.`,
        },
        { type: "img", src: "img/screenshots/crops/search-opbnb-coin.jpg" },
        {
          type: "content",
          html: `Select the first one from the list that says <span class="highlight-text">BNB (opBNB)</span>.`,
        },
        { type: "img", src: "img/screenshots/crops/wallet-ready.jpg" },
        { type: "content", html: `Your wallet will now look like this.` },
      ],
    },
    {
      title: "Add Assets",
      body: [
        {
          type: "content",
          html: `Add <span class="highlight-text">BNB (opBNB)</span> worth a minimum of <span class="highlight-text">35 USDT</span>. You can buy it through our WhatsApp helpline number: <span class="highlight-text">+1234567890</span>.`,
        },
      ],
    },
    {
      title: "Go to DApp",
      body: [
        { type: "img", src: "img/screenshots/crops/explore-popup.jpg" },
        {
          type: "content",
          html: `Go to the <span class="highlight-text">Explore</span> tab using bottom navigation. You will see this popup — checkmark <span class="highlight-text">"I know how to use DApps very well, skip this guide."</span> Then the <span class="highlight-text">"View DApp Store"</span> button will be enabled — click it.`,
        },
        { type: "img", src: "img/screenshots/crops/explore.jpg" },
        {
          type: "content",
          html: `Click on the <span class="highlight-text">search bar</span> and it will take you to a new page.`,
        },
        { type: "img", src: "img/screenshots/crops/explore-url.jpg" },
        {
          type: "content",
          html: `Type or paste this URL in the top address bar: <span class="highlight-text">getrise.pro</span>`,
        },
        { type: "img", src: "img/screenshots/crops/explore-netwrok-opbnb.jpg" },
        {
          type: "content",
          html: `In the second search bar, type <span class="highlight-text">'opBNB'</span> and select the <span class="highlight-text">opBNB network</span>. Then click <span class="highlight-text">'Go'</span> in the top-right corner next to the address bar.`,
        },
        { type: "img", src: "img/screenshots/crops/explore-warning.jpg" },
        {
          type: "content",
          html: `You'll see a warning — checkmark <span class="highlight-text">'Don't remind me next time'</span> if you don't want to receive it again, then click <span class="highlight-text">'Confirm'</span>. You'll be redirected to the DApp.`,
        },
      ],
    },
    {
      title: "Register on RainBNB",
      body: [
        { type: "img", src: "img/screenshots/crops/dapp-error.jpg" },
        {
          type: "content",
          html: `You may see this error — it's normal. Close it from the <span class="highlight-text">lower close button</span> (not the upper one, as that exits the DApp).`,
        },
        { type: "img", src: "img/screenshots/crops/dapp-register.jpg" },
        {
          type: "content",
          html: `You will be redirected to the registration screen. Click the <span class="highlight-text">'Register'</span> button to pay the registration fee.`,
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
        window.addEventListener("wheel", onStepZeroWheel, { passive: false });
      }, 100);

      setTimeout(() => {
        window.addEventListener("touchstart", onTouchStart, { passive: false });
        window.addEventListener("touchend", onTouchEnd, { passive: false });
      }, 300);
    }

    if (scrollAnimationFrame) {
      cancelAnimationFrame(scrollAnimationFrame);
      scrollAnimationFrame = null;
    }

    const stepElement = steps[step];
    const targetTop = stepElement.offsetTop;
    const start = container.scrollTop;
    const change = targetTop - start;
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
    // console.log(`stepContent.scrollHeight: ${stepContent.scrollHeight}`);
    // console.log(`window.innerHeight: ${window.innerHeight}`);
    // console.log(`stepContent.scrollTop: ${stepContent.scrollTop}`);
    // console.log(`atBottom value1: ${Math.ceil(stepContent.scrollTop + window.innerHeight)}`);
    // console.log(`atBottom value2: ${Math.floor(stepContent.scrollHeight - 1)}`);
    if (stepContent && stepContent.scrollHeight > window.innerHeight) {
      const atTop = stepContent.scrollTop === 0;
      const atBottom =
        Math.ceil(stepContent.scrollTop + window.innerHeight) >=
        Math.floor(stepContent.scrollHeight - 1);

      // console.log(`atTop: ${atTop}`);
      // console.log(`atBottom: ${atBottom}`);
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
    const isScrollable = content.scrollHeight > window.innerHeight * threshold;

    const atTop = content.scrollTop <= 0;
    const atBottom =
      Math.ceil(content.scrollTop + window.innerHeight) >=
      Math.floor(content.scrollHeight - 1);

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
    const nav = document.querySelector("nav");
    nav.classList.add("hidden");
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
    const nav = document.querySelector("nav");
    nav.classList.remove("hidden");
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
