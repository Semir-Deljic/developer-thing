// Get and display Other info data

const OTHER_INFO_URL = './data/other-info.json';

const getOtherInfo = async () => {
    const response = await fetch(OTHER_INFO_URL)
    const data = await response.json();

    for (const key of Object.keys(data)) {
        generateOtherInfoTemplate(key, data[key]);
    }
}

const generateOtherInfoTemplate = (section, paragraphs) => {

    const template = paragraphs.reduce((prev, current) => {
        return prev += `<p>${current}</p><br>`
    }, '');

    const element = document.getElementsByClassName(section)[0];

    element.innerHTML += template;
}

getOtherInfo();