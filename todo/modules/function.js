// Начало работы программы
function startProgram() {
    view.popupAll()
    module.theme.changeFullStyle(module.theme.themeList[program['setting']['theme-current']].style);

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
    program['version'] = 14;
    program['full-version'] = "14 Выпуск DEV";
    program['index-category'] = 1;
    program['current-category'] = '';
}