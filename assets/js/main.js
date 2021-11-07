import { data } from "../../config/data.js";

document.addEventListener("DOMContentLoaded", () => {
    addExperineces();
    addEducation();
    addLanguages();
})

function addExperineces() {

    let { experiences } = data

    let experiencesContainer = document.querySelector("#cv-professional-experience");

    experiences.forEach(({ period, duration, company, job, tasks }) => {
        
        let experienceContainer = document.createElement("div");
        experienceContainer.classList.add("section-content", "section-content-grid");
        
        // Period
        let periodParentContainer = document.createElement("div");
        periodParentContainer.classList.add("period-box");

        let durationContainer = document.createElement("div");
        durationContainer.innerHTML = duration;

        let periodContainer = document.createElement("div");
        periodContainer.innerHTML = period;

        periodParentContainer.append(durationContainer, periodContainer);
        
        //Job
        let jobParentContainer = document.createElement("div");
        jobParentContainer.classList.add("job-box");
        jobParentContainer.innerHTML = job + " on " + company;         

        //Tasks
        let someTasksParentContainer = document.createElement("div");
        someTasksParentContainer.classList.add("some-task-box");

        tasks.forEach((task) => {
            let taskItem  = document.createElement("div");
            taskItem.innerText = task;
            someTasksParentContainer.append(taskItem);
        });

        experienceContainer.append(periodParentContainer, jobParentContainer, someTasksParentContainer);
        experiencesContainer.append(experienceContainer);     
    });
}

function addEducation() {

    let { education } = data;

    let educationParentContainer = document.querySelector("#cv-professional-education");

    education.forEach(({period, titleName, schoolName}) => {

        let educationContainer = document.createElement("div");
        educationContainer.classList.add("section-content", "section-content-grid");

        let periodParentContainer = document.createElement("div");
        periodParentContainer.classList.add("period-box");
        periodParentContainer.innerHTML = period;

        let titleParent = document.createElement("div");
        titleParent.classList.add("job-box");

        let educationTitleNameContainer = document.createElement("div");
        educationTitleNameContainer.innerHTML = titleName;

        let educationSchooldNameContainer = document.createElement("div");
        educationSchooldNameContainer.innerHTML = schoolName;

        titleParent.append(educationTitleNameContainer, educationSchooldNameContainer)

        educationContainer.append(periodParentContainer, titleParent);

        educationParentContainer.append(educationContainer);
    });

}

function addLanguages() {
    let { languages } = data;

    let languagesParentContainer = document.querySelector("#languages-container");
    
    languages.forEach(({languageName, level, flagLink, percent}) => {

        let languageContainer = document.createElement("div");

        languageContainer.classList.add("cv-language-item-container");

        let languageItem = document.createElement("div");
        languageItem.classList.add("languageItem");
        languageItem.innerHTML = languageName + " " + "<span>" + level + "</span>";
        
        // Language IMG
        let languageFlagContainer = document.createElement("div");
        languageFlagContainer.classList.add("language-img-container");
        let languageFlagItem = document.createElement("img");
        languageFlagItem.classList.add("img-language");
        languageFlagItem.src = flagLink;
        languageFlagContainer.append(languageFlagItem);

        //Level bar
        let levelBarItemContainer = document.createElement("div");
        levelBarItemContainer.classList.add("level-bar-container");

        let levelBarProgres = document.createElement("div");
        levelBarProgres.classList.add("level-bar-progres");
        levelBarProgres.style.width = percent;

        levelBarItemContainer.append(levelBarProgres);

        languageContainer.append(languageFlagContainer, languageItem, levelBarItemContainer);

        languagesParentContainer.append(languageContainer);
    });
}