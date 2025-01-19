// Модуль-блоки (на будущее)
let module = {
    // Модуль тем
    'theme': {
        // Основные переменные модуля
        'title': 'темы',
        'description': 'Работа с дизайнами программы',
        'author': 'slavik',
        'version': 13,

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
            // 'miniLight': {
            //     'title': 'Более тёмная светлая тема',
            //     'description': 'Светлая тема',
            //     'author': 'slavik',
            //     'version': 1,
            //     'style': `
            //          .popup__input {
            //             border: 1px solid rgb(73, 175, 55);
            //          }
                     
            //          .popup__button {
            //             background: rgb(75, 182, 56);
            //          }

            //          .popup__button_default {
            //             background: rgb(46, 146, 177);
            //          }

            //          .todo-app {
            //             background: rgb(104,44,145);
            //             background: linear-gradient(164deg, rgba(104,44,145,1) 0%, rgba(166,71,71,1) 33%, rgba(189,136,68,1) 77%, rgba(166,153,48,1) 100%); 
            //          }

            //          .todo-list__progress-line__inline {
            //             background: linear-gradient(125deg, rgb(61, 148, 41) 0%, rgb(88, 156, 51) 100%);
            //         }

            //         .todo-list__progress-line, .todo-list__value, .todo-footer__setting, .todo-footer__line, .todo-footer__information, .todo-footer__category, .todo-footer__category-select, .popup__inner, .popup_data__textarea, .popup__input {
            //             background: rgb(176, 179, 173);
            //         }
            //         `
            // },
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
        'version': 13,

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
                            if (document.querySelector(".task_amount_1").value && document.querySelector(".task_amount_2").value) {
                                amountAll = document.querySelector(".task_amount_1").value;
                                amountDone = document.querySelector(".task_amount_2").value;

                                result = (amountDone / amountAll) * 100;
                                console.log (result)
                                scheme['category'][i]['task'][d]['value'] = result;
                                view['task_value'].value = result;
                            }
                            else {
                                scheme['category'][i]['task'][d]['value'] = parseInt(view['task_value'].value);
                            }
                            // scheme['category'][i]['task'][d]['index'] = parseInt(view['task_index'].value);
                            // view['popup_task'].id = `popup_inner_task_inner_${parseInt(view['task_index'].value)}`
                        }
                    }
                }
            }
            
            document.querySelector("#popup_status_task").innerHTML = "Статус задачи: <span class='text_green'>изменили</span>"
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