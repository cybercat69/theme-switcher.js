class ThemeSwitcher {
    constructor (){
        this.default = {
            theme: "ligth",
            targetMark: "data-theme-switcher-target"
        }

        this.theme = this.default.theme;

        this.html = {
            trigger: document.getElementById("theme-switcher_trigger")
        }

        this.init = () => {
            this.html.trigger.addEventListener('click',() => {
                this.toggle();
            });
        }

        this.init();
    }

    
    getTarget(){
        return document.querySelectorAll('['+ this.default.targetMark +']')[0]
    }


    getTargets(){
        return document.querySelectorAll('['+ this.default.targetMark +']')
    }


    getOldPath(styleTag){
        return styleTag.getAttribute('href')
    }


    toggleThemeState(){
        this.theme == "ligth" ? 
            this.theme = "dark" : this.theme = "ligth";
    }

    toggle(){
        this.toggleThemeState();

        let target = this.getTarget(),
            path = this.getOldPath(target),
            newPath = path.split(".")[0].split("-")[0] + "-" + this.theme + ".css";

            target.setAttribute("href", newPath)
    }
}