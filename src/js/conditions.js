import "../css/style.css";
import "../css/conditions.css";

import { alertTemplate, visitorTemplate, activityTemplate } from "./templates.mjs";
import { getAlerts, getVisitorCenterData, getParkData } from "./parkService.mjs";

const parkData = getParkData();

`<h1>${parkData.fullName}</h1>`;
document.getElementById("footer").innerHTML = `<p>&copy; 2025 ${parkData.name} National Park</p>`;

async function setAlerts(parkCode) {
    const alertList = document.querySelector(".alerts-list");
    
    try {
        const alerts = await getAlerts(parkCode);
        
        if (alerts.length === 0) {
            alertList.innerHTML = '<li>No current alerts for this park.</li>';
            return;
        }
        
        alertList.innerHTML = alerts.map(alert => alertTemplate(alert)).join("");
    } catch (error) {
        console.error('Error loading alerts:', error);
        alertList.innerHTML = '<li>Unable to load alerts at this time.</li>';
    }
}

async function setVisitorCenters(parkCode) {
    const visitorList = document.querySelector(".visitor-centers");
    
    try {
        const centers = await getVisitorCenterData(parkCode);
        
        if (centers.length === 0) {
            visitorList.innerHTML = '<p>No visitor center information available.</p>';
            return;
        }
        
        visitorList.innerHTML = centers.map(center => visitorTemplate(center)).join("");
    } catch (error) {
        console.error('Error loading visitor centers:', error);
        visitorList.innerHTML = '<p>Unable to load visitor center information at this time.</p>';
    }
}

function setActivities(activities) {
    const activitiesList = document.querySelector(".activities-list");
    
    if (!activities || activities.length === 0) {
        activitiesList.innerHTML = '<p>No activities information available.</p>';
        return;
    }
    
    activitiesList.innerHTML = activities.map(activity => activityTemplate(activity)).join("");
}

function init() {
    setAlerts(parkData.parkCode);
    setVisitorCenters(parkData.parkCode);
    setActivities(parkData.activities);
}

init();