
const tabLinks = document.querySelectorAll('.tab-links');
const tabContents = document.querySelectorAll('.tab-contents');

function opentab(elementId) {
    for (let i = 0; i < tabLinks.length; i++) {
        tabLinks[i].classList.remove("active-link");
        tabContents[i].classList.remove("active-tab");
    }

    const element = document.getElementById(elementId);
    const link = document.querySelector(`[onclick="opentab('${elementId}')"]`);

    element.classList.add("active-tab");
    link.classList.add("active-link");
}