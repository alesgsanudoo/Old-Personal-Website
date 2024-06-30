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
    let about_status = document.getElementById("about-status")
    let description = document.getElementById("about-description")
    let bt_resume = document.getElementById("about-resume")
    let project_title = document.getElementById("project-title")
    let project1_description = document.getElementById("project__description1")
    let footer = document.getElementById("footer")
    if (language === "Spanish") {
        nav_contact.innerHTML = "Contactar <i class=\"fa-regular fa-envelope\"></i>"
        if (screen.width < 600) {
            about_status.innerHTML = " Ingeniería Informática | Purdue University"
        } else {
            about_status.innerHTML = " Ingeniería Informática | Purdue University"
        }
        description.innerHTML = "(ES)Soy un estudiante estudiando Ingeniería Informática en Purdue University. Tengo una profunda pasión por la ingeniería de software y la resolución de problemas, especialmente en el desarrollo de aplicaciones y la programación. Siempre estoy listo para aplicar mis habilidades a nuevos desafíos y busco constantemente oportunidades para mejorar mis capacidades."
        bt_resume.innerHTML = "Currículum (Pronto)"
        project_title.innerHTML = "Mis projectos"
        project1_description.innerHTML = "He desarrollado mutliples servidores de juego\n" +
            "                    con mas de 1.000.000 usuarios registrados."
        footer.innerHTML = "&copy; Derechos de Autor 2022, Alejandro Griffith"
    } else {
        nav_contact.innerHTML = "Contact <i class=\"fa-regular fa-envelope\"></i>"
        about_status.innerHTML = " CS Student | Purdue University"
        description.innerHTML = "(EN)I’m an undergraduate student at Purdue University, majoring in Computer Science. I am deeply passionate about software engineering and problem-solving, particularly in application development and coding. I’m always ready to apply my skills to new challenges and constantly seek opportunities to enhance my abilities further."
        bt_resume.innerHTML = "resume (Soon)"
        project_title.innerHTML = "My projects"
        project1_description.innerHTML = "I help building several gaming communities servers \n" +
            "                    with more than 1.000.000 registered users."
        footer.innerHTML = "&copy; Copyright 2022, Alejandro Griffith"
    }
}
