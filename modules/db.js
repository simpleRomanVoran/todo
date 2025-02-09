// SYNC
let token = localStorage.getItem('token'); // Берёт токен если есть

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
        if (token == null) {
            return [
                JSON.parse(localStorage.getItem('program')),
                JSON.parse(localStorage.getItem('scheme_category')),
                JSON.parse(localStorage.getItem('themeList'))
            ];
        }
        else {
            // аккаунт есть, берём с сервера
            loadUserData()
            return [
                JSON.parse(localStorage.getItem('program')),
                JSON.parse(localStorage.getItem('scheme_category')),
                JSON.parse(localStorage.getItem('themeList'))
            ];
        }
    },

    // Сохранение базы данных
    setData() {
        if (token == null) {
            // аккаунта нет, берём из localStoragee
            localStorage.setItem('program', JSON.stringify(program));
            localStorage.setItem('scheme_category', JSON.stringify(scheme['category']));
            localStorage.setItem('themeList', JSON.stringify(module.theme.themeList));
        }
        else {
            // аккаунт есть, берём с сервера
            updateData()
        }
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
