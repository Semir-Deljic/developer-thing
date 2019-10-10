// Get and display Basic info data

const INFO = 'info';
const infoSection = document.getElementsByClassName(INFO)[0];
const INFO_URL = './data/info.json';

const getInfo = async () => {
    const response = await fetch(INFO_URL)
    const data = await response.json();

    for (const key of Object.keys(data)) {
        generateInfoTemplate(key, data[key]);
    }
}

const generateInfoTemplate = (label, value) => {
    const template = `
        <label>${label}</label>
        <span class="info-section">
            <span>${value}</span>
        </span>
    `;

    infoSection.innerHTML += template;
}

getInfo();