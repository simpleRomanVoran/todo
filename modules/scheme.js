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