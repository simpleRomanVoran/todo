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
