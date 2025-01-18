// Я короче, это...
// Буду некоторые объекты называть блоками,
// смиритесь с этим.

// Блок отвечающий за самую основную информацию программы
let program = {
    'version': 12,
    'full-version': "12 Выпуск",
    'index-category': 1,
    'current-category': '',
    // Блок отвечающий за сохранение опций программы
    'setting': {
        'title': 'TODO-List :D',
        'main-category': 'основная',
        'theme-current': 'light',
    }
};

let updater = {
    articles: [
        {
            title: "Текущий выпуск: ",
            content: program["full-version"],
            date: "",
            version: "",
        },
        {
            title: "Страница обновлений",
            content: `
<ul class="updater_list">
    <li>Добавлена страница: обновлений</li>
    <li>Улучшен адаптив под телефоны</li>
    <li>Теперь фокус работает на задачах, категориях и в настройках</li>
</ul>
            `,
            date: "17.01.2025",
            version: "11 Выпуск",
        },
        {
            title: "Создание нескольких задач",
            content: `
<ul class="updater_list">
    <li>Добавлена страница: "Многозадачность" (shift+R)</li>
    <li>Возможность создать много задач</li>
</ul>
            `,
            date: "18.01.2025",
            version: "12 Выпуск",
        }
    ],

    
}

// Блок отвечающий за "схему". Она работает с категориями и задачами.
let scheme = {
    // Основная переменная, отвечаем за категории
    'category': [
        // в будущем здесь будут блоки для каждой категории,
        // А внутри них задачи.
    ],

    // Создание категории
    createCategory(title) {
        if (title != undefined) {
            index = program['index-category'];
            this['category'].push({ 'title': title, 'task': {}, 'index': index, 'index-task': 1, });
            program['index-category'] += 1;
        }
    },

    // Удаление категории
    deleteCategory(title) {
        for (i in scheme['category']) {
            if (scheme['category'][i].title == title) {
                scheme['category'].splice(i, 1);
            }
        }
    },

    // Создания задачи
    createTask(title, category) {
        elementTask = ''
        scheme['category'].forEach(element => {
            if (element.title == category) {
                index = element['index-task'];
                element['task'][index] = { 'title': title, 'checked': false, 'important': false, 'value': 0, 'index': index };
                element['index-task'] += 1;
                elementTask = element
            }
        });
    },

    // Удаление задачи
    deleteTask(titleCategory, titleTask) {
        for (i in scheme['category']) {
            if (scheme['category'][i].title == titleCategory) {
                for (d in scheme['category'][i]['task']) {
                    if (scheme['category'][i]['task'][d]['title'] == titleTask) {
                        delete scheme['category'][i]['task'][d];
                    }
                }
            }
        }
    },

    // Получение категории
    getCategory(title) {
        if (title == null) {
            return this['category']
        } else {
            for (i in scheme['category']) {
                if (scheme['category'][i].title == title) {
                    return scheme['category'][i]
                }
            }
        }
    },

    // Получение всех задач
    getAllTask(title) {
        schemeTask = [];
        if (title != null) {
            scheme['category'].forEach(element => {
                if (element.title == title) {
                    schemeTask = element['task'];
                }
            });
        } else {
            scheme['category'].forEach(element => {
                schemeTask.push(element['task'])
            });
        }
        return schemeTask
    },

    // Получение категории
    getTask(titleCategory, titleTask) {
        for (i in scheme['category']) {
            if (scheme['category'][i].title == titleCategory) {
                for (d in scheme['category'][i]['task']) {
                    if (scheme['category'][i]['task'][d]['title'] == titleTask) {
                        return scheme['category'][i]['task'][d];
                    }
                }
            }
        }
    }
};

// Работа с базой данных
let db = {
    // Проверяет существование базы данных, возращает список: [true/false, база данных]
    checkData() {
        if (this.getData()[1] != null || this.getData()[2] != null) {
            return [true, this.getData()];
        } else {
            this.setData();
            return [false, this.getData()];
        }
    },

    // Получение базы данных
    getData() {
        return [
            JSON.parse(localStorage.getItem('program')),
            JSON.parse(localStorage.getItem('scheme_category')),
            JSON.parse(localStorage.getItem('themeList'))
        ];
    },

    // Сохранение базы данных
    setData() {
        localStorage.setItem('program', JSON.stringify(program));
        localStorage.setItem('scheme_category', JSON.stringify(scheme['category']));
        localStorage.setItem('themeList', JSON.stringify(module.theme.themeList));
    },

    // Очистка базы данных
    clearData() {
        delete localStorage['program'];
        delete localStorage['scheme_category']
    },

    // сохраняет базу данных, по аргументу
    importData(data) {
        localStorage.setItem('program', JSON.stringify(data[0]));
        localStorage.setItem('scheme_category', JSON.stringify(data[1]));
    },
}

// Работа над внешностью программы
let view = {
    // переменные для работы со внешностью
    'title': document.querySelector('#title'),

    'todo-header__line': document.querySelector('.todo-header__line'),
    'todo-header__line-input': document.querySelector('.todo-header__line-input'),
    'todo-header__line-button': document.querySelector('.todo-header__line-button'),
    'todo-header__console': document.querySelector('.todo-header__console'),
    'todo-header__console-text': document.querySelector('.todo-header__console-text'),

    'todo-list': document.querySelector('.todo-list'),
    'todo-list__button_value': document.querySelectorAll('.todo-list__button_value'),
    'todo-list__minus-button': document.querySelectorAll('.todo-list__minus-button'),
    'todo-list__plus-button': document.querySelectorAll('.todo-list__plus-button'),

    'popup__button_exit': document.querySelectorAll('.popup__button_exit'),
    'popup__button_data': document.querySelector('.popup__button_data'),
    'popup__button_theme': document.querySelector('.popup__button_theme'),

    'todo-footer__setting-button': document.querySelector('.todo-footer__setting-button'),
    'todo-footer__line-input': document.querySelector('.todo-footer__line-input'),
    'todo-footer__information': document.querySelector('.todo-footer__information'),
    'todo-footer__category-select': document.querySelector('.todo-footer__category-select'),
    'todo-footer__category-button': document.querySelector('.todo-footer__category-button'),
    'todo-footer__delete-button': document.querySelector('.todo-footer__delete-button'),
    'todo-footer__done-button': document.querySelector('.todo-footer__done-button'),

    'popup_data__checkbox_stopcran': document.querySelector('.popup_data__checkbox_stopcran'),
    'popup__button_getter': document.querySelector('.popup__button_getter'),
    'popup__button_setter': document.querySelector('.popup__button_setter'),
    'popup_data__textarea_input': document.querySelector('.popup_data__textarea_input'),
    'todo-footer__category-button': document.querySelector('.todo-footer__category-button'),
    // 'popup_data__textarea_output': document.querySelector('.popup_data__textarea_output'),

    'task_title_view': document.querySelector('.task_title_view'),
    'task_title': document.querySelector('.task_title'),
    'task_value': document.querySelector('.task_value'),
    'task_index': document.querySelector('.task_index'),
    'category_title': document.querySelector('.category_title'),
    'category_title_view': document.querySelector('.category_title_view'),
    'popup_task__checkbox_important': document.querySelector('.popup_task__checkbox_important'),
    'popup_task__checkbox_checked': document.querySelector('.popup_task__checkbox_checked'),

    'popup': document.querySelectorAll('.popup'),
    'popup_setting': document.querySelector('.popup_setting'),
    'popup_task': document.querySelector('.popup_task'),
    'popup_category': document.querySelector('.popup_category'),
    'popup_data': document.querySelector('.popup_data'),
    'popup_theme': document.querySelector('.popup_theme'),

    // Скрывает все попапы
    popupAll() {
        this.popup.forEach(element => {
            element.style.display = "none";
        });
    },

    // Скрыть/открыть попапы
    togglePopup(element) {
        if (element.style.display == "none") {
            this.show(element)
        } else {
            this.hide(element)
        }
    },

    // Скрыть попапы
    hide(element) {
        element.style.display = "none";
    },

    // Открыть попап
    show(element) {
        element.style.display = "block";
    },

    // Показать задачи категории
    showAllTask(titleCategory = program['current-category']) {
        innerTask = '';
        for (i in scheme['category']) {
            if (scheme['category'][i].title == titleCategory) {
                for (d in scheme['category'][i]['task']) {
                    textChecked = '';
                    textImportant = '';
                    if (scheme['category'][i]['task'][d]['checked']) {
                        textChecked = 'checked';
                        scheme['category'][i]['task'][d].value = 100;
                        db.setData();
                    } else {
                        textChecked = 'nochecked';
                    }
                    if (scheme['category'][i]['task'][d]['important']) {
                        textImportant = 'important';
                    } else {
                        textImportant = '';
                    }
                    innerTask += `
                    <div class="todo-list__element" id="task_${scheme['category'][i]['task'][d].index}">
                    <div class="todo-list__inner" id="task_inner_${scheme['category'][i]['task'][d].index}">
                        <div class="todo-list__checkbox">
                            <img src="image/icon_${textChecked}.png" alt="" class="image todo-list__checkbox-image">
                        </div>
                        <p class="text todo-list__title ${textChecked} ${textImportant}">${scheme['category'][i]['task'][d].title}</p>
                        <div class="todo-list__delete">
                            <button class="button todo-list__delete-button">
                                <img src="image/icon_delete.png" alt="" class="image todo-list__delete-image">
                            </button>
                        </div>
                        <div class="todo-list__change">
                            <button class="button todo-list__change-button">
                                <img src="image/icon_change.png" alt="" class="image todo-list__change-image">
                            </button>
                        </div>
                        <div class="todo-list__important">
                            <button class="button todo-list__important-button">
                                <img src="image/icon_important.png" alt="" class="image todo-list__important-image">
                            </button>
                        </div>
                    </div>
                    <div class="todo-list__progress">
                        <div class="line todo-list__progress-line">
                            <div class="todo-list__progress-line__inline" style="width: ${scheme['category'][i]['task'][d].value}%;">
                                <p class="text todo-list__progress-line__text" title="${scheme['category'][i]['task'][d].value}">${scheme['category'][i]['task'][d].value}%</p>
                            </div>
                        </div>
                        <div class="todo-list__value">
                            <input class="input to-do-list__input" maxlength="3"></input>
                            <button class="button todo-list__button_value" id="button_value_${scheme['category'][i]['task'][d].index}">задать</button>
                        </div>
                        <div class="todo-list__minus">
                            <button class="button todo-list__minus-button" id="button_minus_${scheme['category'][i]['task'][d].index}">-</button>
                        </div>
                        <div class="todo-list__plus">
                            <button class="button todo-list__plus-button" id="button_plus_${scheme['category'][i]['task'][d].index}">+</button>
                        </div>
                    </div>
                </div>
                `
                }
            }
        }
        this['todo-list'].innerHTML = innerTask;
    },
}

// Модуль-блоки (на будущее)
let module = {
    // Модуль тем
    'theme': {
        // Основные переменные модуля
        'title': 'темы',
        'description': 'Работа с дизайнами программы',
        'author': 'slavik',
        'version': 12,

        'themeList': {
            'dark': {
                'title': 'тёмная',
                'description': 'Тёмная тема',
                'author': 'slavik',
                'version': 1,
                'style': `
                    .text {
                        color: rgb(245, 245, 245);
                    }

                    .body {
                        background: rgb(15, 15, 25);
                        color: rgb(245, 245, 245);
                    }

                    .todo-app {
                        background: rgb(10,13,13);
                        background: linear-gradient(312deg, rgba(10,13,13,1) 0%, rgba(10,10,10,1) 100%); 
                        color: rgb(245, 245, 245);
                    }

                    .todo-header__line {
                        background: none;
                    }

                    .todo-header__line-input {
                        background: rgb(30, 30, 30);
                        color: rgb(245, 245, 245);
                    }

                    .todo-header__line-button {
                        background: rgb(120, 45, 45);
                        color: rgb(245, 245, 245);
                    }

                    .todo-header__line-button:hover {
                        background: rgb(140, 55, 55);
                    }

                    .todo-list__progress-line {
                        background: rgb(30, 30, 30);
                    }

                    .todo-list__progress-line__text {
                        color: rgb(245, 245, 245);
                    }

                    .todo-list__progress-line__inline {
                        background: rgb(19,93,43);
                        background: linear-gradient(159deg, rgba(19,93,43,1) 0%, rgba(29,122,7,1) 100%);
                    }

                    .todo-list__value {
                        background: none;
                    }

                    .to-do-list__input {
                        background: rgb(30, 30, 30);
                        color: rgb(245, 245, 245);
                    }

                    .todo-list__button_value {
                        background: rgb(45, 45, 45);
                        color: rgb(245, 245, 245);
                    }

                    .todo-list__minus {
                        background: rgb(45, 45, 45);
                        color: rgb(245, 245, 245);
                    }

                    .todo-list__plus {
                        background: rgb(45, 45, 45);
                    }

                    .todo-list__minus-button {
                        color: rgb(245, 245, 245);
                    }

                    .todo-list__plus-button {
                        color: rgb(245, 245, 245);
                    }

                    .todo-footer__done {
                        background: rgb(120, 45, 45);
                    }

                    .todo-footer__done-button {
                        color: rgb(245, 245, 245);
                    }

                    .todo-footer__category-button {
                        background: rgb(120, 45, 45);
                        color: rgb(245, 245, 245);
                    }

                    .todo-footer__category {
                        background: none;
                    }

                    .todo-footer__delete {
                        background: rgb(120, 45, 45);
                    }

                    .todo-footer__delete-button {
                        color: rgb(240, 240, 240);
                    }

                    .todo-footer__setting {
                        background: none;
                    }

                    .todo-footer__setting-button {
                        color: rgb(245, 245, 245);
                        border-radius: 12px;
                        background: rgb(120, 45, 45);
                    }

                    .todo-footer__line {
                        background: none;
                    }

                    .todo-footer__line-input {
                        background: rgb(30, 30, 30);
                        color: rgb(245, 245, 245);
                    }

                    .todo-footer__information {
                        background: rgb(30, 30, 30);
                        color: rgb(245, 245, 245);
                    }

                    .todo-footer__category-select {
                        background: rgb(30, 30, 30);
                        color: rgb(245, 245, 245);
                        padding: 12px;
                    }

                    .option {
                        color: rgb(245, 245, 245);
                    }

                    .popup__inner {
                        background: rgb(35, 35, 35);
                        color: rgb(245, 245, 245);
                    }

                    .popup__input {
                        background: rgb(35, 35, 35);
                        color: rgb(245, 245, 245);
                    }

                    .popup__button {
                        background: linear-gradient(159deg, rgba(19,93,43,1) 0%, rgba(29,122,7,1) 100%);
                    }

                    .popup__button_default {
                        background: rgb(19,91,93);
                        background: linear-gradient(159deg, rgba(19,91,93,1) 0%, rgba(7,85,122,1) 100%);
                    }

                    .popup_data__textarea {
                        background: rgb(40, 40, 40);
                        color: rgb(245, 245, 245);
                    }

                    .updater_list {
                        background-color: #141f1d;
                    }
                `
            },
            'light': {
                'title': 'светлая',
                'description': 'Светлая тема',
                'author': 'slavik',
                'version': 1,
                'style': ``
            },
            'minimalism': {
                'title': 'минимализм',
                'description': 'Минималистичная тема',
                'author': 'slavik',
                'version': 1,
                'style': `
                    .todo-app {
                        background: rgb(240, 240, 240);
                    }
                  
                    .text {
                        color: rgb(20, 20, 20);
                    }

                    .todo-header__line {
                        box-shadow: none;
                `,
            },
        },

        changeFullStyle(newStyle) {
            style = document.querySelector('#style');
            style.innerHTML = newStyle;
        },

        viewThemeList() {
            varText = '';
            keys = Object.keys(module.theme.themeList)

            for (i in keys) {
                varText += `${keys[i]} / ${module.theme.themeList[keys[i]]['title']}
                / ${module.theme.themeList[keys[i]]['description']}
                / ${module.theme.themeList[keys[i]]['author']}
                / Версия: ${module.theme.themeList[keys[i]]['version']}   <br>`
            }

            document.querySelector('#theme-list').innerHTML = varText;
        },

        // getter
        createTheme() {
            themeID = document.querySelector('#theme_id').value;
            themeTitle = document.querySelector('#theme_title').value;
            themeDescription = document.querySelector('#theme_description').value;
            themeAuthor = document.querySelector('#theme_author').value;
            themeVersion = document.querySelector('#theme_version').value;
            themeStyle = document.querySelector('#theme_style').value;

            this.themeList[themeID] = {
                'title': themeTitle,
                'description': themeDescription,
                'author': themeAuthor,
                'version': themeVersion,
                'style': themeStyle,
            }

            module.app.tick()
            db.setData()
            this.viewThemeList()
        },

        // delete
        deleteTheme() {
            themeID = document.querySelector('#theme_id').value;
            delete this.themeList[themeID];

            module.app.tick()
            db.setData()
            this.viewThemeList()
        },

        // setter

    },

    // Основной модуль
    'app': {
        // Основные переменные модуля
        'title': 'основной',
        'description': 'Общий функционал приложения',
        'author': 'slavik',
        'version': 12,

        // После запуска программы
        fistStartProgram() {
            scheme.createCategory(program['setting']['main-category']);
            program['current-category'] = program['setting']['main-category'];
            module.theme.changeFullStyle(module.theme.themeList[program['setting']['theme-current']].style);
            db.setData();
        },

        // Вывод для пользователя
        console(text) {
            view['todo-header__console'].innerHTML = `<p class="text todo-header__console-text">${text}</p>`
        },

        // Создание задачи
        createTask() {
            if (view['todo-header__line-input'].value) {
                this.console('');
                scheme.createTask(view['todo-header__line-input'].value, program['current-category'])
                getVarCategory = scheme.getCategory(program['current-category']);
                view.showAllTask(program['current-category'])
                db.setData();
                view['todo-header__line-input'].value = ''
            } else {
                this.console('Введите текст в поле: "Текст вашей задачи"!');
            };
        },

        // Создание задач (для многозадачности) // ***!!!
        createMultitasks(taskText) {
            scheme.createTask(taskText, program['current-category'])
            getVarCategory = scheme.getCategory(program['current-category']);
            view.showAllTask(program['current-category'])
            db.setData();
        },

        // Удаление задачи
        deleteTask(element) {
            parentElement = element.target.parentElement.parentElement.parentElement;
            PEI = parentElement.id
            delElement = PEI.replace('task_inner_', '');

            for (i in scheme['category']) {
                if (scheme['category'][i].title == program['current-category']) {
                    for (d in scheme['category'][i]['task']) {
                        if (d == delElement) {
                            delete scheme['category'][i]['task'][d]     // или можно использовать deleteTask () 
                        }
                    }
                }
            }
            view.showAllTask(program['current-category'])
            db.setData();
        },

        // выводит информацию задачи в попапе
        changeTaskView(element) {
            parentElement = element.target.parentElement.parentElement.parentElement;
            PEI = parentElement.id
            view['popup_task'].id = `popup_inner_${PEI}`
            changeElement = PEI.replace('task_inner_', '');

            for (i in scheme['category']) {
                if (scheme['category'][i].title == program['current-category']) {
                    for (d in scheme['category'][i]['task']) {
                        if (d == changeElement) {
                            elementScheme = scheme['category'][i]['task'][d];
                            view['task_title_view'].innerText = `"${elementScheme['title']}"`;
                            view['task_title'].value = elementScheme['title'];
                            view['popup_task__checkbox_checked'].checked = elementScheme['checked'];
                            view['popup_task__checkbox_important'].checked = elementScheme['important'];
                            view['task_value'].value = elementScheme['value'];
                            // view['task_index'].value = elementScheme['index'];
                        }
                    }
                }
            }

            view.show(view['popup_task']);
        },

        // изменяет задачу, через попап
        changeTask() {
            PEI = view['popup_task'].id
            changeElement = PEI.replace('popup_inner_task_inner_', '');

            for (i in scheme['category']) {
                if (scheme['category'][i].title == program['current-category']) {
                    for (d in scheme['category'][i]['task']) {
                        if (d == changeElement) {
                            scheme['category'][i]['task'][d]['title'] = view['task_title'].value;
                            scheme['category'][i]['task'][d]['checked'] = view['popup_task__checkbox_checked'].checked;
                            scheme['category'][i]['task'][d]['important'] = view['popup_task__checkbox_important'].checked;
                            scheme['category'][i]['task'][d]['value'] = parseInt(view['task_value'].value);
                            // scheme['category'][i]['task'][d]['index'] = parseInt(view['task_index'].value);
                            // view['popup_task'].id = `popup_inner_task_inner_${parseInt(view['task_index'].value)}`
                        }
                    }
                }
            }
            db.setData()
            view.showAllTask(program['current-category']);
            this.tick()
        },

        // Выбор категории (вызывает функцию updateArticle)
        selectCategory() {
            if (view['todo-footer__line-input'] == null) {
                this.console("ERROR: view['input todo-footer__line-input'] в changeCategory ()")
            } else {
                text = view['todo-footer__line-input'].value;
                if (!!text == "" || text == program['current-category']) {
                    altText = view['todo-footer__category-select'].value;
                    scheme['category'].forEach(element => {
                        if (element.title == altText) {
                            program['current-category'] = altText;
                            this.console(`Выбрана категория (по списку): ${altText}`)
                        }
                    });

                } else {
                    isCategory = false;
                    scheme['category'].forEach(element => {
                        if (element.title == text) {
                            program['current-category'] = text;
                            isCategory = true
                            this.console(`Выбрана категория: ${text}`)
                        }
                    });
                    if (isCategory == false) {
                        scheme.createCategory(text)
                        program['current-category'] = text;
                        this.console(`Выбрана и создана категория: ${text}`)
                    };
                };
                db.setData()
                view.showAllTask(program['current-category']);
                this.tick()
            };
        },

        // Выводит список категорий (частично view)
        updateArticle() {
            element = view['todo-footer__category-select'];
            articleHTML = '';

            scheme['category'].forEach(element => {
                articleHTML += `<option value="${element.title}" class="option">${element.title}</option>`;
            });

            element.innerHTML = articleHTML;
        },

        // Удаление категории (доделать data)
        deleteCategory() {
            scheme.category.forEach(element => {
                if (element.title == program['current-category']) {
                    scheme.deleteCategory(program['current-category']);
                }
            });
            view['todo-footer__line-input'].value = program['setting']['main-category'];
            this.selectCategory()
            view.showAllTask();
            db.setData();
            this.tick();
            this.console("Категория удалена!");
        },

        // Очистка контента выбранной категории
        clearCategoryContent() {
            scheme.category.forEach(element => {
                if (element.title == program['current-category']) {
                    element['task'] = {};
                    element['index-task'] = 1;
                    this.console("Категория очищена!");
                }
            });
            view.showAllTask();
            db.setData();
        },

        // Вывод информации категории
        infoCategory() {
            allTask = 0;
            doneTask = 0;
            scheme.category.forEach(categoryElement => {
                if (categoryElement.title == program['current-category']) {
                    for (i in categoryElement['task']) {
                        if (categoryElement['task'][i]['checked'] == true) {
                            doneTask += 1
                        }
                        allTask += 1
                    }
                }
            });
            view['todo-footer__information'].innerHTML = `<p class="text todo-footer__information-text">${doneTask} из ${allTask}</p>`
        },

        // Обработчик выполненных задач
        doneTask(element) {
            if (element.target.classList == "text todo-list__title nochecked "
                || element.target.classList == "text todo-list__title checked "
                || element.target.classList == "text todo-list__title nochecked important"
                || element.target.classList == "text todo-list__title checked important"
                || element.target.classList == "todo-list__checkbox") {
                parentElement = element.target.parentElement.parentElement;
            }
            else if (element.target.classList == "image todo-list__checkbox-image") {
                parentElement = element.target.parentElement.parentElement.parentElement;
            }
            else if (element.target.classList == "todo-list__inner") {
                parentElement = element.target.parentElement;
            }
            else {
                this.console("ERROR: Пустота");
            }
            PEI = parentElement.id
            doneElement = PEI.replace('task_', '');

            for (i in scheme['category']) {
                if (scheme['category'][i].title == program['current-category']) {
                    for (d in scheme['category'][i]['task']) {
                        if (d == doneElement) {
                            if (scheme['category'][i]['task'][d]['checked']) {
                                scheme['category'][i]['task'][d]['checked'] = false;
                            } else {
                                scheme['category'][i]['task'][d]['checked'] = true;
                            }
                        }
                    }
                }
            }
            view.showAllTask();
            db.setData();
            this.tick()
        },

        // Изменение уровня прогресса (доделать без view)
        eventProgress(element) {
            if (element.target.classList == "button todo-list__button_value") {
                parentElement = element.target.parentElement.parentElement;
                progressElement = element.target.id.replace('button_value_', "");

                for (i in scheme['category']) {
                    if (scheme['category'][i].title == program['current-category']) {
                        for (d in scheme['category'][i]['task']) {
                            if (scheme['category'][i]['task'][d]['index'] == progressElement) {
                                if (Number.isInteger(parseInt(parentElement.querySelector(".to-do-list__input").value)) == true && parseInt(parentElement.querySelector(".to-do-list__input").value) <= 100 && parseInt(parentElement.querySelector(".to-do-list__input").value) >= 0) {
                                    scheme['category'][i]['task'][d]['value'] = parseInt(parentElement.querySelector(".to-do-list__input").value);
                                }
                                else {
                                    this.console('Неправильное число!');
                                }
                            }
                        }
                    }
                }
                view.showAllTask();
                db.setData();
            }
            else if (element.target.classList == "button todo-list__plus-button") {
                parentElement = element.target.parentElement.parentElement;
                progressElement = element.target.id.replace('button_plus_', "");

                for (i in scheme['category']) {
                    if (scheme['category'][i].title == program['current-category']) {
                        for (d in scheme['category'][i]['task']) {
                            if (scheme['category'][i]['task'][d]['index'] == progressElement) {
                                if (Number.isInteger(parseInt(parentElement.querySelector(".to-do-list__input").value)) == true && parseInt(parentElement.querySelector(".to-do-list__input").value) <= 100 && parseInt(parentElement.querySelector(".to-do-list__input").value) >= 0) {
                                    scheme['category'][i]['task'][d]['value'] = parseInt(parentElement.querySelector(".to-do-list__input").value) + parseInt(scheme['category'][i]['task'][d]['value']);
                                }
                                else {
                                    this.console('Неправильное число!');
                                }
                            }
                        }
                    }
                }
                view.showAllTask();
                db.setData();
            }
            else if (element.target.classList == "button todo-list__minus-button") {
                parentElement = element.target.parentElement.parentElement;
                progressElement = element.target.id.replace('button_minus_', "");

                for (i in scheme['category']) {
                    if (scheme['category'][i].title == program['current-category']) {
                        for (d in scheme['category'][i]['task']) {
                            if (scheme['category'][i]['task'][d]['index'] == progressElement) {
                                if (Number.isInteger(parseInt(parentElement.querySelector(".to-do-list__input").value)) == true && parseInt(parentElement.querySelector(".to-do-list__input").value) <= 100 && parseInt(parentElement.querySelector(".to-do-list__input").value) >= 0) {
                                    scheme['category'][i]['task'][d]['value'] = parseInt(scheme['category'][i]['task'][d]['value']) - parseInt(parentElement.querySelector(".to-do-list__input").value);
                                }
                                else {
                                    this.console('Неправильное число!');
                                }
                            }
                        }
                    }
                }
                view.showAllTask();
                db.setData();
            }
            else { }
            this.tick();
        },

        // Изменение настроек
        changeSettingReload() {
            view['title'].innerText = program['setting']['title']
        },

        // Изменение настроек
        changeSetting() {
            view['title'].innerText = document.querySelector('#program_title').value;
            program['setting']['title'] = document.querySelector('#program_title').value;
            program['setting']['main-category'] = document.querySelector('#program_main-category').value;
            program['setting']['theme-current'] = document.querySelector('#program_theme').value;

            db.setData();
            this.tick();
        },

        // Откат настроек
        defaultChangeSetting() {
            defaultSetting = {
                'title': 'TODO-List :D',
                'main-category': 'основная',
                'theme-current': 'light',
            };

            document.querySelector('#program_title').value = defaultSetting['title'];
            document.querySelector('#program_main-category').value = defaultSetting['main-category'];
            document.querySelector('#program_theme').value = defaultSetting['theme-current'];

            db.setData();
            this.tick();
        },

        // Просмотр настроек
        viewSetting() {
            document.querySelector('#program_title').value = view['title'].innerText;
        },

        // После каждого действия пользователя, использует module.app
        tick() {
            this.changeSettingReload();
            this.updateArticle();
            this.infoCategory();
            module.theme.changeFullStyle(module.theme.themeList[program['setting']['theme-current']].style);
        },

        // Изменения важности
        importantChange(element) {
            parentElement2 = element.target.parentElement.parentElement.parentElement;
            PEId = parentElement2.id
            importantElement = PEId.replace('task_inner_', '');

            for (i in scheme['category']) {
                if (scheme['category'][i].title == program['current-category']) {
                    for (d in scheme['category'][i]['task']) {
                        if (d == importantElement) {
                            if (scheme['category'][i]['task'][d]['important']) {
                                scheme['category'][i]['task'][d]['important'] = false;
                            } else {
                                scheme['category'][i]['task'][d]['important'] = true;
                            }
                        }
                    }
                }
            }
            view.showAllTask(program['current-category'])
            db.setData();
            this.tick()
        },

        // импорт данных, db/scheme
        importInnerData(data) {
            db.clearData();
            db.importData(data);
            program = db.getData()[0];
            scheme.category = db.getData()[1];
            module.theme.themeList = db.getData()[2];
        },

        // импорт данных, через попап
        importData(data, stopcran = true) {
            if (data[0]['version'] == program['version']) {
                this.importInnerData(data);
                this.console('Можно, версия подходит!');
            }
            else if (data[0]['version'] > program['version']) {
                if (stopcran == false) {
                    this.importInnerData(data);
                    this.console('Можно, но версия выше нужной!');
                }
                else {
                    this.console('Нельзя версия выше нужной!');
                }
            }
            else {
                if (stopcran == false) {
                    this.importInnerData(data);
                    this.console('Нельзя версия ниже нужной!');
                }
                else {
                    this.console('Нельзя версия ниже нужной!');
                }
            }
        },

        // экспорт данных, db/scheme
        exportData() {
            data = db.getData();
            return data
        },

        // выводит информацию о категории в попап
        changeCategoryView() {
            for (i in scheme['category']) {
                if (scheme['category'][i].title == program['current-category']) {
                    elementScheme = scheme['category'][i];
                    view['category_title_view'].innerText = `"${elementScheme['title']}"`;
                }
            }
        },

        // изменяет категорию, через попап
        changeCategory() {
            for (i in scheme['category']) {
                if (scheme['category'][i].title == program['current-category']) {
                    scheme['category'][i]['title'] = view['category_title'].value;
                    program['current-category'] = view['category_title'].value;

                    view['category_title_view'].innerText = `"${view['category_title'].value}"`;
                }
            }
            db.setData()
            view.showAllTask(program['current-category']);
            this.tick()
        },
    }
}

// Начало работы программы
function startProgram() {
    view.popupAll()
    module.theme.changeFullStyle(module.theme.themeList[program['setting']['theme-current']].style);

    module.app.console(`Добро пожаловать! Запущена программа TODO-List, начинайте день с нового списка задач!`)
    if (db.checkData()[0] == false) {
        module.app.fistStartProgram()
    } else {
        program = db.getData()[0];
        scheme['category'] = db.getData()[1];
        module.theme.themeList = db.getData()[2];
    }
    view.showAllTask(program['current-category'])
    module.app.changeSettingReload();
    module.app.tick();
};

// Перезагрузка программы
function restartProgram() {
    db.clearData();
    program['version'] = 12;
    program['full-version'] = "12 Выпуск DEV";
    program['index-category'] = 1;
    program['current-category'] = '';
}

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