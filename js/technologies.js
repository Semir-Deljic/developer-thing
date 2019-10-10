// Get and display Technologies data
const TECHNOLOGIES = 'technologies';
const TECHNOLOGIES_URL = './data/technologies.json';

const technologiesSection = document.getElementsByClassName(TECHNOLOGIES)[0];

const getTechnologies = async () => {
    const response = await fetch(TECHNOLOGIES_URL)
    const data = await response.json();

    data.forEach(group => {
        generateTechnologyTemplate(group.topic, group.technologies);
    })
}

const generateTechnologyTemplate = (topic, technologies) => {

    const listItemsTemplate = technologies.reduce((prev, current) => {
        return prev += `<li>${current}</li>`
    }, '');

    const template = `
        <h4>${topic}</h4>
        <ul>
            ${listItemsTemplate}
        </ul>
    `;

    technologiesSection.innerHTML += template;
}

getTechnologies();