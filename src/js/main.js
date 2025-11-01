import { getParkData } from "./parkService.mjs";

const parkData = getParkData();

const disclaimer = document.querySelector(".disclaimer > a");
disclaimer.href = parkData.url;
disclaimer.innerHTML = parkData.fullName;

document.title = parkData.fullName;

const heroBanner = document.querySelector("#park-header .hero-banner");
if (heroBanner) {
  const heroImage = heroBanner.querySelector("img");
  if (heroImage) {
    heroImage.src = parkData.images[0].url;
    heroImage.alt = parkData.images[0].altText || parkData.fullName;
  }
}

const heroContent = document.querySelector("#park-header .hero-banner__content");
if (heroContent) {
  heroContent.innerHTML = `
    <a href="${parkData.url}" class="hero-banner__title">${parkData.fullName}</a>
    <p class="hero-banner__subtitle">
      <span>${parkData.designation}</span>
      <span>${parkData.states}</span>
    </p>
  `;
}

const parkNav = document.querySelector(".park-nav ul");
if (parkNav) {
  parkNav.innerHTML = `
    <li>
      <a href="#">
        <span>Info</span>
        <svg class="icon" role="presentation" focusable="false">
          <use xlink:href="/images/sprite.symbol.svg#info"></use>
        </svg>
      </a>
    </li>
    <li>
      <a href="#">
        <span>Alerts</span>
        <svg class="icon" role="presentation" focusable="false">
          <use xlink:href="/images/sprite.symbol.svg#alert"></use>
        </svg>
      </a>
    </li>
    <li>
      <a href="#">
        <span>Maps</span>
        <svg class="icon" role="presentation" focusable="false">
          <use xlink:href="/images/sprite.symbol.svg#location"></use>
        </svg>
      </a>
    </li>
    <li>
      <a href="#">
        <span>Calendar</span>
        <svg class="icon" role="presentation" focusable="false">
          <use xlink:href="/images/sprite.symbol.svg#calendar"></use>
        </svg>
      </a>
    </li>
  `;
}

function enableNavigation() {
  const menuButton = document.querySelector("#global-nav-toggle");
  const globalNav = document.querySelector(".global-nav");
  
  if (!menuButton || !globalNav) {
    console.error("Menu button or navigation not found");
    return;
  }
  
  menuButton.addEventListener("click", (ev) => {
    let target = ev.target;
    
    if (target.tagName !== "BUTTON") {
      target = target.closest("button");
    }
    
    globalNav.classList.toggle("show");
    
    const isExpanded = globalNav.classList.contains("show");
    
    if (isExpanded) {
      target.setAttribute("aria-expanded", "true");
      target.setAttribute("aria-label", "Close Menu");
    } else {
      target.setAttribute("aria-expanded", "false");
      target.setAttribute("aria-label", "Open Menu");
    }
  });
}

enableNavigation();