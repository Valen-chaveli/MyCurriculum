import { data } from "../../config/data.js";

document.addEventListener("DOMContentLoaded", () => {

    addExperineces();
    addEducation();
    addLanguages();
    addSkills();
    configDarkMode();
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

function addSkills() {
    let { skills } = data;
    
    let skillsContainerMobile = document.querySelector("#skills-container-mobile");
    let skillsContainerDesktop = document.querySelector("#skills-container-desktop");
    
    skills.forEach((skill) => {
        let skillItemContainer = document.createElement("div");
        skillsContainerMobile.classList.add("section-content", "skills-container");
        skillsContainerDesktop.classList.add("section-content", "skills-container");

        skillItemContainer.innerHTML = skill;

        if(window.matchMedia('screen and (max-width : 768px)').matches) 
            skillsContainerMobile.append(skillItemContainer);
        else 
            skillsContainerDesktop.append(skillItemContainer);
    });
}

function configDarkMode() {
    
    const btnSwitch = document.querySelector("#switch");
    const header = document.querySelector("header");
    const titleSections = document.querySelectorAll("h2#title");
    const sectionsContent = document.querySelectorAll(".section-content");
    const sectionsTextContent = document.querySelectorAll(".section-content-grid > div");
    const personalCompetencesTitles = document.querySelectorAll("main section#cv-personal-competences h3");
    
    const languegeItem = document.querySelectorAll(".languageItem");
    const levelBarContainer = document.querySelectorAll(".level-bar-container");
    const levelBarProgress = document.querySelectorAll(".level-bar-progres");

    btnSwitch.addEventListener('click', () => {

        document.body.classList.toggle("dark"); 
        header.classList.toggle("dark");

        if(document.body.classList.contains("dark")) localStorage.setItem("dark-mode", "true");
        else localStorage.setItem("dark-mode", "false");
        
        languegeItem.forEach((language) => {
            language.classList.toggle("dark")
        })

        levelBarContainer.forEach((barContainer) => {
            barContainer.classList.toggle("dark");
        })

        levelBarProgress.forEach((barProgrses) => {
            barProgrses.classList.toggle("dark");
        })

        titleSections.forEach((titleSection) => {
            titleSection.classList.toggle("dark");
        });

        sectionsContent.forEach((sectionContent) => {
            sectionContent.classList.toggle("dark")
        })

        sectionsTextContent.forEach((section) => {
            section.classList.toggle("dark");
        })

        personalCompetencesTitles.forEach((personalCompetence) => {
            personalCompetence.classList.toggle("dark")
        })

        btnSwitch.classList.toggle("active");
    });

    //Save dark-mode
    if(localStorage.getItem("dark-mode") == "true") {
        document.body.classList.add("dark");
        header.classList.add("dark");

        languegeItem.forEach((language) => {
            language.classList.add("dark")
        })

        levelBarContainer.forEach((barContainer) => {
            barContainer.classList.add("dark");
        })

        levelBarProgress.forEach((barProgrses) => {
            barProgrses.classList.add("dark");
        })

        titleSections.forEach((titleSection) => {
            titleSection.classList.add("dark");
        });

        sectionsContent.forEach((sectionContent) => {
            sectionContent.classList.add("dark")
        })

        sectionsTextContent.forEach((section) => {
            section.classList.add("dark");
        })

        personalCompetencesTitles.forEach((personalCompetence) => {
            personalCompetence.classList.add("dark")
        })

        btnSwitch.classList.add("active");

    } else {
        document.body.classList.remove("dark"); 
        header.classList.remove("dark");

        languegeItem.forEach((language) => {
            language.classList.remove("dark")
        })

        levelBarContainer.forEach((barContainer) => {
            barContainer.classList.remove("dark");
        })

        levelBarProgress.forEach((barProgrses) => {
            barProgrses.classList.remove("dark");
        })

        titleSections.forEach((titleSection) => {
            titleSection.classList.remove("dark");
        });

        sectionsContent.forEach((sectionContent) => {
            sectionContent.classList.remove("dark")
        })

        sectionsTextContent.forEach((section) => {
            section.classList.remove("dark");
        })

        personalCompetencesTitles.forEach((personalCompetence) => {
            personalCompetence.classList.remove("dark")
        })

        btnSwitch.classList.remove("active");

    }

}