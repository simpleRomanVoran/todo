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
