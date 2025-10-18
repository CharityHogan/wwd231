import spritePath from '../images/sprite.symbol.svg';

export function alertTemplate(alert) {
  let alertType = "";
  
  switch (alert.category) {
    case "Park Closure":
      alertType = "closure";
      break;
    default:
      alertType = alert.category.toLowerCase();
  }
  
  return `<li class="alert">
    <svg class="icon" focusable="false" aria-hidden="true">
      <use xlink:href="${spritePath}#alert-${alertType}"></use>  
    </svg>
    <div>
      <h3 class="alert-${alertType}">${alert.title}</h3>
      <p>${alert.description}</p>
    </div>
  </li>`;
}

export function visitorCenterTemplate(center) {
  return `<details name="visitor-centers">
    <summary>${center.name}</summary>
    <div>
      <p>${center.description}</p>
      <p><strong>Directions:</strong> ${center.directionsInfo}</p>
    </div>
  </details>`;
}

export function activityTemplate(activity) {
  return `<details name="activities">
    <summary>${activity.name}</summary>
  </details>`;
}