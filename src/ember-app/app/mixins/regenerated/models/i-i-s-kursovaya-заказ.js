import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  доставка: DS.attr('i-i-s-kursovaya-тип-доставки'),
  номерЗаказа: DS.attr('number'),
  клиент: DS.belongsTo('i-i-s-kursovaya-клиент', { inverse: null, async: false }),
  менеджер: DS.belongsTo('i-i-s-kursovaya-менеджер', { inverse: null, async: false }),
  товар: DS.belongsTo('i-i-s-kursovaya-товар', { inverse: null, async: false }),
  товары: DS.hasMany('i-i-s-kursovaya-товары', { inverse: 'заказ', async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-kursovaya-заказ.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  доставка: {
    descriptionKey: 'models.i-i-s-kursovaya-заказ.validations.доставка.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номерЗаказа: {
    descriptionKey: 'models.i-i-s-kursovaya-заказ.validations.номерЗаказа.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  клиент: {
    descriptionKey: 'models.i-i-s-kursovaya-заказ.validations.клиент.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  менеджер: {
    descriptionKey: 'models.i-i-s-kursovaya-заказ.validations.менеджер.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  товар: {
    descriptionKey: 'models.i-i-s-kursovaya-заказ.validations.товар.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  товары: {
    descriptionKey: 'models.i-i-s-kursovaya-заказ.validations.товары.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗаказE', 'i-i-s-kursovaya-заказ', {
    номерЗаказа: attr('Номер заказа', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    доставка: attr('Доставка', { index: 2 }),
    клиент: belongsTo('i-i-s-kursovaya-клиент', 'Клиент', {
      фамилия: attr('Фамилия', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'фамилия' }),
    менеджер: belongsTo('i-i-s-kursovaya-менеджер', 'Менеджер', {
      фамилия: attr('Фамилия', { index: 6, hidden: true })
    }, { index: 5, displayMemberPath: 'фамилия' }),
    товар: belongsTo('i-i-s-kursovaya-товар', 'Товар', {
      наименование: attr('Наименование', { index: 8, hidden: true })
    }, { index: 7, displayMemberPath: 'наименование' }),
    товары: hasMany('i-i-s-kursovaya-товары', 'Товары', {
      код: attr('Код', { index: 0 }),
      наименование: attr('Наименование', { index: 1 }),
      количество: attr('Количество', { index: 2 }),
      цена: attr('Цена', { index: 3 }),
      сумма: attr('Сумма', { index: 4 })
    })
  });

  modelClass.defineProjection('ЗаказL', 'i-i-s-kursovaya-заказ', {
    номерЗаказа: attr('Номер заказа', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    доставка: attr('Доставка', { index: 2 }),
    клиент: belongsTo('i-i-s-kursovaya-клиент', 'Фамилия', {
      фамилия: attr('Фамилия', { index: 3 })
    }, { index: -1, hidden: true }),
    менеджер: belongsTo('i-i-s-kursovaya-менеджер', 'Фамилия', {
      фамилия: attr('Фамилия', { index: 4 })
    }, { index: -1, hidden: true }),
    товар: belongsTo('i-i-s-kursovaya-товар', 'Наименование', {
      наименование: attr('Наименование', { index: 5 })
    }, { index: -1, hidden: true })
  });
};
