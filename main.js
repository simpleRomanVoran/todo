view['popup_sync'].addEventListener("click", function (element) {
    if (element.target.classList == "button popup__button_exit") {
        view.hide(view['popup_sync']);
    }
});

view['popup__button_sync'].addEventListener("click", function () {
    view.hide(view['popup_setting']);
    view.show(view['popup_sync']);
});

// Повторяющиеся действия (события)
view['popup__button_getter'].addEventListener("click", function () {
    // document.querySelector("#outputData").value = JSON.stringify(module.app.exportData(), 1, 4);
    document.querySelector("#outputData").value = JSON.stringify(module.app.exportData(), 1, 4);
    console.log ("Данные получены");
});

view['popup__button_setter'].addEventListener("click", function () {
    stopcran = view['popup_data__checkbox_stopcran'].checked;
    value = document.querySelector('.popup_data__textarea_output').value
    module.app.importData(JSON.parse(value), !stopcran)
    console.log ("Данные приняты");
});

view['todo-footer__category-button'].addEventListener("click", function (element) {
    view.show(view['popup_category']);
    module.app.changeCategoryView(program['current-category']);
});

view['popup_setting'].addEventListener("click", function (element) {
    if (element.target.classList == "button popup__button_exit") {
        view.hide(view['popup_setting']);
    }
});

view['popup_task'].addEventListener("click", function (element) {
    if (element.target.classList == "button popup__button_exit") {
        view.hide(view['popup_task']);
    }
});

view['popup_category'].addEventListener("click", function (element) {
    if (element.target.classList == "button popup__button_exit") {
        view.hide(view['popup_category']);
    }
});

view['popup_data'].addEventListener("click", function (element) {
    if (element.target.classList == "button popup__button_exit") {
        view.hide(view['popup_data']);
    }
});

view['popup_theme'].addEventListener("click", function (element) {
    if (element.target.classList == "button popup__button_exit") {
        view.hide(view['popup_theme']);
    }
});

view['popup__button_data'].addEventListener("click", function () {
    view.hide(view['popup_setting']);
    view.show(view['popup_data']);
});

view['popup__button_theme'].addEventListener("click", function () {
    view.hide(view['popup_setting']);
    view.show(view['popup_theme']);
    module.theme.viewThemeList();
});

view['todo-footer__setting-button'].addEventListener("click", function () {
    view.togglePopup(view['popup_setting'])
    module.app.viewSetting()
});

view['todo-header__line-button'].addEventListener("click", function () {
    module.app.createTask();
});

view['todo-list'].addEventListener('click', function (element) {
    if (element.target.classList == "container todo-list") { }
    else if (element.target.classList == "image todo-list__delete-image") {
        module.app.deleteTask(element);
    }
    else if (element.target.classList == "image todo-list__change-image") {
        module.app.changeTaskView(element);
        // module.app.changeTask(element);
    }
    else if (element.target.classList == "image todo-list__important-image") {
        module.app.importantChange(element);
    }
    else if (element.target.classList == "todo-list__element") {
        module.app.doneTask(element);
    }

    else if (element.target.classList == "line todo-list__progress-line" ||
        element.target.classList == "input to-do-list__input" ||
        element.target.classList == "button todo-list__button_value" ||
        element.target.classList == "button todo-list__minus-button" ||
        element.target.classList == "button todo-list__plus-button") {
        module.app.eventProgress(element);
    }

    else {
        module.app.doneTask(element);
    }
});

let focused = false;
let lastFocused = false;
document.addEventListener("focusin", (e) => {focused = e; lastFocused = focused;});
document.addEventListener("focusout", () => focused = false);

document.addEventListener('keyup', (event) => {
    if (event.code === 'Enter') {
        eClassList = [...focused.originalTarget.classList]
        eID = [focused.originalTarget.id];
        console.log (eID);
        if (focused) {
            if (eClassList.includes ("todo-header__line-input")) {
                module.app.createTask();
            }
            else if (eClassList.includes ("todo-footer__line-input")) {
                module.app.selectCategory();
            }
            else if (eClassList.includes ("todo-footer__category-select")) {
                module.app.selectCategory();
            }

            else if (eID.includes ("program_title")) {
                module.app.changeSetting ();
            }
            else if (eID.includes ("program_main-category")) {
                module.app.changeSetting ();
            }
            else if (eID.includes ("program_theme")) {
                module.app.changeSetting ();
            }
        }


    }
    else if (event.code === 'KeyZ' && event.shiftKey) view.show(view['popup_setting']);
    else if (event.code === 'KeyX' && event.shiftKey) view.show(view['popup_data']);
    else if (event.code === 'KeyC' && event.shiftKey) view.show(view['popup_category']);
    else if (event.code === 'KeyV' && event.shiftKey) { module.theme.viewThemeList(); view.show(view['popup_theme']); }
    else if (event.code === 'KeyR' && event.shiftKey) { view.show(document.querySelector(".popup_multitasks")) }
});

document.querySelector(".popup__button_clearData").addEventListener("click", function () {
    if (confirm ("Вы хотите удалить все данные?")) {
        localStorage.clear();
        document.location.reload();
    } else {
        console.log ("Вы отказались!");
    }
});

document.addEventListener ("click", function (e) {

    // console.log (e);

    eClassList = [...e.target.classList];
    eID = [focused.originalTarget.id];
    // console.log (eClassList);
    
    if (eClassList.includes ("popup__button_update")) {
        view.show(document.querySelector(".popup_setting"));
        view.show(document.querySelector(".popup_update"));
    
        document.querySelector("#articles").innerHTML = "";
        updater.articles.reverse().forEach((e) => {
            console.log (e);
            console.log (e.version);
            document.querySelector("#articles").innerHTML += `
                <h2 class="heading popup__heading">${e.title}</h2>
                <p class="text popup__text">${e.content}</p>
                <p class="text popup__text">${e.date} ${e.version ? '•' : ''} <span style="color: #0088ff;">${e.version}</span></p>
                <hr>
            `
        });
    }

    else if (eClassList.includes ("popup__button_exit")) {
        view.hide(document.querySelector(".popup_update"));
        view.hide(document.querySelector(".popup_multitasks"));

        document.querySelector("#popup_status_task").innerHTML = "Статус задачи: <span class='text_red'>нет изменений</span>"
    }

    else if (eClassList.includes ("popup__button_multitasks")) {
        view.show(document.querySelector(".popup_setting"));
        view.show(document.querySelector(".popup_multitasks"));
    }

    else if (eID.includes ("multitasks_button")) {
        console.log ("multi")
        separator = "\n";
        text = multitasks_input.value;
        tasks = text.split(separator);
        tasks.forEach((element) => {
            module.app.createMultitasks(element);
        })
        console.log (tasks)
    }

})

startProgram();

// SYNC
const API_URL = 'https://api.slavik00.ru/api';
let token = localStorage.getItem('token'); // Берёт токен если есть

function register() {
    const username = document.getElementById('regUsername').value;
    const com = document.getElementById('regCom').value; // МЕТОД СВЯЗИ
    const password = document.getElementById('regPassword').value;

    fetch(`${API_URL}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password, com })
    })
        .then(res => res.json())
        .then(data => alert(data.message), updateData()) // Обновление данных (при регистрации)
        .catch(console.error);
}

function login() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    })
        .then(res => res.json())
        .then(data => {
            if (data.token) {
                localStorage.setItem('token', data.token);
                token = data.token;
                loadUserData();

                // Получение данных при авторизации
                program = data.program;
                scheme.scheme_category = data.scheme_category;
                module.theme.themeList = data.themeList;
                localStorage.setItem("program", data.program);
                localStorage.setItem("scheme_category", data.scheme_category);
                localStorage.setItem("themeList", data.themeList);
            } else {
                alert(data.message);
            }
        })
        .catch(console.error);
}

function loadUserData() {
    if (!token) return;

    fetch(`${API_URL}/user/data`, {
        headers: { 'Authorization': token }
    })
        .then(res => res.json())
        .then(data => {
            document.getElementById('dataField').value = data.data;
            document.getElementById('auth').style.display = 'none';
            document.getElementById('userData').style.display = 'block';

            program = data.program;
            scheme.scheme_category = data.scheme_category;
            module.theme.themeList = data.themeList;
            localStorage.setItem("program", data.program);
            localStorage.setItem("scheme_category", data.scheme_category);
            localStorage.setItem("themeList", data.themeList);
            // document.getElementById('dataField').value = data.data;

        })
        .catch(console.error);
}

function getDataForSync () {
    if (document.getElementById('dataField').value) {
        data = JSON.stringify(document.getElementById('dataField').value);
        return data;
    }
    else {
        data = {program, "scheme_category": scheme.scheme_category, "themeList": module.theme.themeList}
        return data;
    }
}

function updateData() {
    // const data = JSON.stringify(document.getElementById('dataField').value);

    fetch(`${API_URL}/user/data`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        },
        body: JSON.stringify({ data: JSON.parse(getDataForSync ()) })
    })
        .then(res => res.json())
        .then(data => alert(data.message))
        .catch(console.error);
}

function logout() {
    localStorage.removeItem('token');
    token = null;
    document.getElementById('auth').style.display = 'block';
    document.getElementById('userData').style.display = 'none';
}

if (token) {
    loadUserData();
}