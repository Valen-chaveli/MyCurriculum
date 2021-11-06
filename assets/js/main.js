import { data } from "../../config/data.js";

document.addEventListener("DOMContentLoaded", () => {
    let arrIdItems = getIdForExperiences();
    setDataForExperience(arrIdItems);
})


function setDataForExperience(arrExperiencesIdFromDOM) {

    let { experiences } = data;

    experiences.forEach(({ id , period, company, job, tasks}) => {
        arrExperiencesIdFromDOM.forEach((idFromDOM) =>{
            if(idFromDOM == id) {
               let element = document.getElementById(id);

               element.querySelector(".period-box").innerHTML = period
               element.querySelector(".job-box").innerHTML = `<p>${job}<p>`

               tasks.forEach((task) => {
                element.querySelector(".some-task-box ul").innerHTML += `<li>${task}</li>
                `
               })

              
               console.log(element);
            }
        }) 
    })
}


function getIdForExperiences() {
    let arrExperienceItems = document.querySelectorAll("#cv-profesional-experience .section-content-grid");
    
    let arrIds = [];

    arrExperienceItems.forEach((experienceItem) => {
        arrIds.push(experienceItem.id)
    });

    return arrIds;
}