class Popup {
    constructor(ID, TYPE, OPTION) {
        this.ID = ID;
        this.TYPE = TYPE; // class,  display
        this.OPTION = OPTION;
        if (document.getElementById(ID)) {
            this.popupElement = document.getElementById(ID)
        } else {
            console.log ("popuper.js: Ошибка! Попап не существует!")
        }
    }

    show () {
        if (this.TYPE == "class") {
                this.popupElement.classList.remove("popup_hide");
        } else if (this.TYPE == "display") {
            switch(this.OPTION) {
                case "block": this.popupElement.style.display = "block"; break;
                case "grid": this.popupElement.style.display = "grid"; break;
                case "inline": this.popupElement.style.display = "inline"; break;
                case "inline-block": this.popupElement.style.display = "inline-block"; break;
                default:  this.popupElement.style.display = "block";
            }
            // this.popupElement.style.display = "block";
        } else {
            // ошибка типа
            console.log ("popuper.js: Неверный тип: class/display")
        }
    }

    hide () {
        if (this.TYPE == "class") {
            this.popupElement.classList.add("popup_hide");
        } else if (this.TYPE == "display") {
            this.popupElement.style.display = "none";
        } else {
            // ошибка типа
            console.log ("popuper.js: Неверный тип: class/display")
        }
    }

    toggle () {
        if (this.TYPE == "class") {
            // тип класса
            if (this.popupElement.classList.contains("popup_hide")) {
                // убрать popup_hide
                this.popupElement.classList.remove("popup_hide");
            } else {
                // добавить popup_hide
                this.popupElement.classList.add("popup_hide");
            }
        } else if (this.TYPE == "display") {
            // тип display
            if (this.popupElement.style.display == "none") {
                // показать popup
                switch(this.OPTION) {
                    case "block": this.popupElement.style.display = "block"; break;
                    case "grid": this.popupElement.style.display = "grid"; break;
                    case "inline": this.popupElement.style.display = "inline"; break;
                    case "inline-block": this.popupElement.style.display = "inline-block"; break;
                    default:  this.popupElement.style.display = "block";
                }
                // this.popupElement.style.display = "block";
            } else {
                // скрыть popup
                this.popupElement.style.display = "none";
            }
        } else {
            // ошибка типа
            console.log ("popuper.js: Неверный тип: class/display")
        }
    }
}

class Popuper {
    constructor () {
        this.arrayPopups = [];
    }

    // регистрация попапов
    reg (arrayID, type, option) {
        for (let i in arrayID) {
            let popup = new Popup(arrayID[i], type, option);
            this.arrayPopups.push(popup);
        }
    }

    find (ID) {
        for (let i in this.arrayPopups) {
            if (this.arrayPopups[i].ID == ID) {
                return this.arrayPopups[i]
            }
        }
    }
    
    regPopup (popup) {
        this.arrayPopups.push (popup);
    }

    hideAll () {
        for (let i in this.arrayPopups) {
            this.arrayPopups[i].hide();
        }
    }

    showAll () {
        for (let i in this.arrayPopups) {
            this.arrayPopups[i].show();
        }
    }

    toggleAll () {
        for (let i in this.arrayPopups) {
            this.arrayPopups[i].toggle();
        }
    }

    hide (ID) {
        let popup = this.find(ID);
        popup.hide();
    }

    show (ID) {
        let popup = this.find(ID);
        popup.show();
    }

    toggle (ID) {
        let popup = this.find(ID);
        popup.toggle();
    }

    info (ID) {
        let popup = this.find(ID);
        return popup
    }

    localShowForID (ID) {
        this.hideAll();
        let popup = this.find(ID);
        if (popup) {
            popup.show();
        } else {
            console.log ("popuper.js: Ошибка! Попап с ID: " + ID + " не найден!")
        }
    }

    localShowForPopup (popup) {
        this.hideAll();
        popup.show();
    }
}