function toggleLanBt(len) {
    if (len === "default" || len == null || len.length === 0) {
        if (localStorage.length === 0) {
            localStorage.setItem("lan", "english")
            toggleEmoji(true)
        } else {
            let lan = localStorage.getItem("lan")
            if (lan === "english") {
                localStorage.removeItem("lan")
                localStorage.setItem("lan", "english")
                toggleEmoji(true)
            } else if (lan === "spanish") {
                localStorage.removeItem("lan")
                localStorage.setItem("lan", "spanish")
                toggleEmoji(true)
            }
        }
    }
}

window.onload = toggleLanBt("default")

function toggleEmoji(option) {
    let language = document.getElementById("language")
    if (!option) {
        if (language.innerText === "🇺🇸 EN") {
            toggleLanguage("Spanish")
            localStorage.removeItem("lan")
            localStorage.setItem("lan", "spanish")
            language.innerText = "🇪🇸 ES"
        } else if (language.innerText === "🇪🇸 ES") {
            toggleLanguage("English")
            localStorage.removeItem("lan")
            localStorage.setItem("lan", "english")
            language.innerText = "🇺🇸 EN"
        }
    } else {
        if (localStorage.getItem("lan") === "spanish") {
            toggleLanguage("Spanish")
            language.innerText = "🇪🇸 ES"
        } else if (localStorage.getItem("lan") === "english") {
            toggleLanguage("English")
            language.innerText = "🇺🇸 EN"
        }
    }
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
    let notfound = document.getElementById("tittle-not-found")
    if (language === "Spanish") {
        nav_contact.innerHTML = "Contactar <i class=\"fa-regular fa-envelope\"></i>"
        about_title.innerHTML = "Sobre mí"
        if (screen.width < 600) {
            about_status.innerHTML = " Ingeniería Informática | Purdue University"
        } else {
            about_status.innerHTML = " Ingeniería Informática | Purdue University"
        }
        description.innerHTML = "(ES)Anited hipaid outte phrolo. Hisour the lignea thow anetwo by somplat ins this hadmin vels.\n" +
            "            Mactis of unizon wordia let selso any; any. The pre othe the hannes,\n" +
            "            whal for oreive the th ementre. In twe alsk ofte of wall obbill avelto wen:\n" +
            "            Edwedbou Mod Only bects pare qualas thateir shisto dicup theitin brom the offeci.e."
        bt_resume.innerHTML = "Currículum"
        project_title.innerHTML = "Mis projectos"
        footer.innerHTML = "&copy; Derechos de Autor 2022, Alejandro Griffith"
        notfound.innerHTML = " Página no encontrada"
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
        notfound.innerHTML = "Page not found"
    }
}