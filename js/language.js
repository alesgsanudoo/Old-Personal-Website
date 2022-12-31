function toggleEmoji(language) {
    let txt = language.innerText;
    if (txt === "🇺🇸 EN") {
        toggleLanguage("Spanish")
    } else {
        toggleLanguage("English")
    }
    language.innerText = txt === '🇺🇸 EN' ? '🇪🇸 ES' : '🇺🇸 EN';
}

function toggleLanguage(language) {
    let nav_contact = document.getElementById("nav-contact")
    let about_title = document.getElementById("about-title")
    let about_status = document.getElementById("about-status")
    let description = document.getElementById("about-description")
    let bt_resume = document.getElementById("about-resume")
    let project_title = document.getElementById("project-title")
    let project1_description = document.getElementById("project1-description")
    let footer = document.getElementById("footer")
    if (language === "Spanish") {
        nav_contact.innerHTML = "Contactar <i class=\"fa-regular fa-envelope\"></i>"
        about_title.innerHTML = "Sobre mí"
        about_status.innerHTML = " Estudiante de Ingeniería Informática | Purdue University"
        description.innerHTML = "(ES)Anited hipaid outte phrolo. Hisour the lignea thow anetwo by somplat ins this hadmin vels.\n" +
            "            Mactis of unizon wordia let selso any; any. The pre othe the hannes,\n" +
            "            whal for oreive the th ementre. In twe alsk ofte of wall obbill avelto wen:\n" +
            "            Edwedbou Mod Only bects pare qualas thateir shisto dicup theitin brom the offeci.e."
        bt_resume.innerHTML = "Currículum"
        project_title.innerHTML = "Mis projectos"
        footer.innerHTML = "&copy; Derechos de Autor 2022, Alejandro Griffith"
    } else {
        nav_contact.innerHTML = "Contact <i class=\"fa-regular fa-envelope\"></i>"
        about_title.innerHTML = "About Me"
        about_status.innerHTML = " CS Student | Purdue University"
        description.innerHTML = "(EN)Anited hipaid outte phrolo. Hisour the lignea thow anetwo by somplat ins this hadmin vels.\n" +
            "            Mactis of unizon wordia let selso any; any. The pre othe the hannes,\n" +
            "            whal for oreive the th ementre. In twe alsk ofte of wall obbill avelto wen:\n" +
            "            Edwedbou Mod Only bects pare qualas thateir shisto dicup theitin brom the offeci.e."
        bt_resume.innerHTML = "resume"
        project_title.innerHTML = "My projects"
        footer.innerHTML = "&copy; Copyright 2022, Alejandro Griffith"
    }
}