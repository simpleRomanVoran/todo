// Блок отвечающий за "схему". Она работает с категориями и задачами.
let scheme = {
    // Основная переменная, отвечаем за категории
    'category': [
        // в будущем здесь будут блоки для каждой категории,
        // А внутри них задачи.
    ],

    'auto': [
        // {
        //     id: 'auto',
        //     index: 1,
        //     mode: "repeat",
        //     options: [],
        //     date: "20.02.2025",
        //     time: "20:43",
        //     save: {},
        // },
    ],

    // Создание категории
    createCategory(title) {
        if (title != undefined) {
            index = program['index-category'];
            this['category'].push({ 'title': title, 'task': {}, 'index': index, 'index-task': 1, });
            program['index-category'] += 1;
        }
    },

    dublicateCategory(category, dublicateCategoryName) {
        for (i in scheme['category']) {
            if (scheme['category'][i].title == category) {
                scheme['category'].push({ 'title': dublicateCategoryName, 'task': scheme['category'][i]['task'], 'index': program['index-category'], 'index-task': scheme['category'][i]['index-task'] });
                program['index-category'] += 1;
            }
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
        return false;
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
    },

    // Создание автоматизации
    createAuto (id, mode, options, save) {
        if (this.getAuto (id)) {}
        else {
            currentDate = moment().format("DD.MM.YYYY");
            currentTime = moment().format("hh:mm:ss");
            console.log(currentDate, currentTime)
            scheme['auto'].push({
                id: id,
                index: program['index-auto'],
                mode,
                options,
                date: currentDate,
                time: currentTime,
                save,
            });
            program['index-auto'] += 1;
        }
    },
    // удалить автоматизацию
    deleteAuto (id) {
        scheme['auto'] = scheme['auto'].filter(auto => auto.id!== id);
    },
    // получить автоматизацию
    getAuto (id) {
        for (i in scheme['auto']) {
            console.log (scheme['auto'][i].id);
            if (scheme['auto'][i].id == id) {
                return scheme['auto'][i];
            }
        }
        return false
    },
    // получить все автоматизации
    getAllAuto () {
        return scheme['auto'];
    },
    // обновить/проверить автоматизацию 
    tickAuto () {
        scheme['auto'].forEach(auto => {
            currentDate = moment().format("DD.MM.YYYY");
            currentTime = moment().format("hh:mm:ss");

            // Режимы
            if (auto.mode == "repeat") {
                autoTitle = `${currentDate}`;
                if (currentDate < auto.date && this.getCategory(autoTitle)) {
                    console.log("Запуск автоматизации:", auto.id);
                    console.log (autoTitle);
                }
                else {
                    console.log("Остановка автоматизации:", auto.id);
                }
            }

        });
    },
};