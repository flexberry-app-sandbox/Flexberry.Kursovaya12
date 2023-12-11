import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISKursovayaЗаказLForm from './forms/i-i-s-kursovaya-заказ-l';
import IISKursovayaКлиентLForm from './forms/i-i-s-kursovaya-клиент-l';
import IISKursovayaМенеджерLForm from './forms/i-i-s-kursovaya-менеджер-l';
import IISKursovayaОплатаLForm from './forms/i-i-s-kursovaya-оплата-l';
import IISKursovayaПоставщикLForm from './forms/i-i-s-kursovaya-поставщик-l';
import IISKursovayaПроизводительLForm from './forms/i-i-s-kursovaya-производитель-l';
import IISKursovayaТоварLForm from './forms/i-i-s-kursovaya-товар-l';
import IISKursovayaЗаказEForm from './forms/i-i-s-kursovaya-заказ-e';
import IISKursovayaКлиентEForm from './forms/i-i-s-kursovaya-клиент-e';
import IISKursovayaМенеджерEForm from './forms/i-i-s-kursovaya-менеджер-e';
import IISKursovayaОплатаEForm from './forms/i-i-s-kursovaya-оплата-e';
import IISKursovayaПоставщикEForm from './forms/i-i-s-kursovaya-поставщик-e';
import IISKursovayaПроизводительEForm from './forms/i-i-s-kursovaya-производитель-e';
import IISKursovayaТоварEForm from './forms/i-i-s-kursovaya-товар-e';
import IISKursovayaЗаказModel from './models/i-i-s-kursovaya-заказ';
import IISKursovayaКлиентModel from './models/i-i-s-kursovaya-клиент';
import IISKursovayaМенеджерModel from './models/i-i-s-kursovaya-менеджер';
import IISKursovayaОплатаModel from './models/i-i-s-kursovaya-оплата';
import IISKursovayaПоставщикModel from './models/i-i-s-kursovaya-поставщик';
import IISKursovayaПроизводительModel from './models/i-i-s-kursovaya-производитель';
import IISKursovayaТоварModel from './models/i-i-s-kursovaya-товар';
import IISKursovayaТоварыModel from './models/i-i-s-kursovaya-товары';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-kursovaya-заказ': IISKursovayaЗаказModel,
    'i-i-s-kursovaya-клиент': IISKursovayaКлиентModel,
    'i-i-s-kursovaya-менеджер': IISKursovayaМенеджерModel,
    'i-i-s-kursovaya-оплата': IISKursovayaОплатаModel,
    'i-i-s-kursovaya-поставщик': IISKursovayaПоставщикModel,
    'i-i-s-kursovaya-производитель': IISKursovayaПроизводительModel,
    'i-i-s-kursovaya-товар': IISKursovayaТоварModel,
    'i-i-s-kursovaya-товары': IISKursovayaТоварыModel
  },

  'application-name': 'Kursovaya',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Kursovaya',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Kursovaya',
          title: 'Kursovaya'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        заказ: {
          caption: 'Заказ',
          title: 'Заказ',
          'i-i-s-kursovaya-заказ-l': {
            caption: 'Заказ',
            title: ''
          }
        },
        'справочник-по-товарам': {
          caption: 'Справочник по товарам',
          title: 'Справочник по товарам',
          'i-i-s-kursovaya-производитель-l': {
            caption: 'Производитель',
            title: ''
          },
          'i-i-s-kursovaya-поставщик-l': {
            caption: 'Поставщик',
            title: ''
          },
          'i-i-s-kursovaya-товар-l': {
            caption: 'Товар',
            title: ''
          }
        },
        клиенты: {
          caption: 'Клиенты',
          title: 'Клиенты',
          'i-i-s-kursovaya-клиент-l': {
            caption: 'Клиент',
            title: ''
          }
        },
        менеджеры: {
          caption: 'Менеджеры',
          title: 'Менеджеры',
          'i-i-s-kursovaya-менеджер-l': {
            caption: 'Менеджер',
            title: ''
          }
        },
        оплата: {
          caption: 'Оплата',
          title: 'Оплата',
          'i-i-s-kursovaya-оплата-l': {
            caption: 'Оплата',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-kursovaya-заказ-l': IISKursovayaЗаказLForm,
    'i-i-s-kursovaya-клиент-l': IISKursovayaКлиентLForm,
    'i-i-s-kursovaya-менеджер-l': IISKursovayaМенеджерLForm,
    'i-i-s-kursovaya-оплата-l': IISKursovayaОплатаLForm,
    'i-i-s-kursovaya-поставщик-l': IISKursovayaПоставщикLForm,
    'i-i-s-kursovaya-производитель-l': IISKursovayaПроизводительLForm,
    'i-i-s-kursovaya-товар-l': IISKursovayaТоварLForm,
    'i-i-s-kursovaya-заказ-e': IISKursovayaЗаказEForm,
    'i-i-s-kursovaya-клиент-e': IISKursovayaКлиентEForm,
    'i-i-s-kursovaya-менеджер-e': IISKursovayaМенеджерEForm,
    'i-i-s-kursovaya-оплата-e': IISKursovayaОплатаEForm,
    'i-i-s-kursovaya-поставщик-e': IISKursovayaПоставщикEForm,
    'i-i-s-kursovaya-производитель-e': IISKursovayaПроизводительEForm,
    'i-i-s-kursovaya-товар-e': IISKursovayaТоварEForm
  },

});

export default translations;
