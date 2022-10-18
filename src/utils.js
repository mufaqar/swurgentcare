export const animation = () => {
  if (typeof window !== "undefined") {
    window.WOW = require("wowjs");
  }
  new WOW.WOW().init();
};

const progressBar_ = () => {
  const progressBarLists = document.querySelectorAll(".progress-bar-wrapper");
  const triggerBottom = (window.innerHeight / 5) * 5;
  if (progressBarLists) {
    progressBarLists.forEach((element) => {
      let percentage = element.getAttribute("data-percentage"),
        progressLineWrap = element.getElementsByClassName("progress-line-wrap"),
        progressLine = element.getElementsByClassName("progress-line"),
        progressLineWidth = percentage + "%",
        progressLineBg = element.getAttribute("data-line-bg"),
        progressLineColor = element.getAttribute("data-line-color");
      progressLineWrap[0].style.backgroundColor = progressLineBg;
      progressLine[0].style.backgroundColor = progressLineColor;

      const progressTop = element.getBoundingClientRect().top;
      if (progressTop < triggerBottom) {
        progressLine[0].style.width = progressLineWidth;
      } else {
        progressLine[0].style.width = 0;
      }
    });
  }
};

export const progressBar = () =>
  window.addEventListener("scroll", progressBar_);

export const pagination = (listClass, sort, active) => {
  let list = document.querySelectorAll(listClass);
  for (let i = 0; i < list.length; i++) {
    const element = list[i];
    if (active === 1) {
      if (i < sort) {
        element.classList.remove("d-none");
      } else {
        element.classList.add("d-none");
      }
    } else {
      if (i >= (active - 1) * sort && i < active * sort) {
        element.classList.remove("d-none");
      } else {
        element.classList.add("d-none");
      }
    }
  }
};

export const getPagination = (totalNumber, sort) => {
  let arr = new Array(Math.ceil(totalNumber / sort))
    .fill()
    .map((_, idx) => idx + 1);
  return arr;
};

export const niceSelect = () => {
  const select = document.querySelectorAll("select");
  select.forEach((element) => {
    let option = element.querySelectorAll("option");

    function insertAfter(referenceNode, newNode) {
      referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    }
    element.style.display = "none";
    var el = document.createElement("div");
    insertAfter(element, el);
    el.className = "nice-select wide";
    let ul = document.createElement("ul"),
      span = document.createElement("span");
    ul.classList.add("list");
    span.classList.add("current");
    el.appendChild(ul);
    el.appendChild(span);
    el.addEventListener("click", () => {
      el.classList.toggle("open");
    });
    document.addEventListener("click", (e) => {
      if (!el.contains(e.target)) {
        el.classList.remove("open");
      }
    });
    option.forEach((opt) => {
      var li = document.createElement("li");
      ul.appendChild(li);
      li.innerHTML = opt.innerText;
      li.className = "option";
      let defultValue = opt.getAttribute("data-dsplay");
      let selected = opt.getAttribute("selected");
      let disabled = opt.getAttribute("disabled");
      if (defultValue || selected !== null || disabled !== null) {
        li.className = "option focus";
        span.innerText = opt.innerText;
      } else {
        span.innerText = option[0].innerText;
      }
      li.addEventListener("click", () => {
        if (disabled == null) {
          span.innerHTML = opt.innerText;
        }
      });
    });
  });
};

const stickyNav_ = () => {
  let offset = window.scrollY;
  const stickys = document.querySelectorAll("header");
  for (let i = 0; i < stickys.length; i++) {
    const sticky = stickys[i];
    if (sticky) {
      if (offset > 60) {
        sticky.classList.add("sticky-on");
      } else {
        sticky.classList.remove("sticky-on");
      }
    }
  }
};

export const stickyNav = () => window.addEventListener("scroll", stickyNav_);

export const scrollTopFun = () => {
  let scrollUp = document.getElementById("scroll-top"),
    lastScrollTop = 0;

  window.addEventListener("scroll", () => {
    let st = window.scrollY;
    if (st > 110) {
      scrollUp.classList.add("active");
    } else {
      scrollUp.classList.remove("active");
    }
  });
};
