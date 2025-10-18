// Import the park data from parkService.mjs
import { getParkData } from "./parkService.mjs";

// Get the data
const parkData = getParkData();

// 1️⃣ Update the disclaimer link
const disclaimer = document.querySelector(".disclaimer > a");
disclaimer.href = parkData.url;
disclaimer.innerHTML = parkData.fullName;

// 2️⃣ Update the page title
document.title = parkData.fullName;

// 3️⃣ Update the hero image
const heroBanner = document.querySelector("#park-header .hero-banner");
if (heroBanner) {
  const heroImage = heroBanner.querySelector("img");
  if (heroImage) {
    heroImage.src = parkData.images[0].url;
    heroImage.alt = parkData.images[0].altText || parkData.fullName;
  }
}

// 4️⃣ Update the park name, designation, and states
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

// 5️⃣ Dynamically fill park navigation icons
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
        <span>Calendar</sp
