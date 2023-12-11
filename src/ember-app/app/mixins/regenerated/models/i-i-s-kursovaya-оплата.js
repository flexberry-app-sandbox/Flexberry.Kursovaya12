import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  способ: DS.attr('i-i-s-kursovaya-способ1'),
  статус: DS.attr('i-i-s-kursovaya-статус-оплаты'),
  сумма: DS.attr('decimal'),
  заказ: DS.belongsTo('i-i-s-kursovaya-заказ', { inverse: null, async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-kursovaya-оплата.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  способ: {
    descriptionKey: 'models.i-i-s-kursovaya-оплата.validations.способ.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  статус: {
    descriptionKey: 'models.i-i-s-kursovaya-оплата.validations.статус.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  сумма: {
    descriptionKey: 'models.i-i-s-kursovaya-оплата.validations.сумма.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  заказ: {
    descriptionKey: 'models.i-i-s-kursovaya-оплата.validations.заказ.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОплатаE', 'i-i-s-kursovaya-оплата', {
    способ: attr('Способ', { index: 0 }),
    сумма: attr('Сумма', { index: 1 }),
    статус: attr('Статус', { index: 2 }),
    дата: attr('Дата', { index: 3 }),
    заказ: belongsTo('i-i-s-kursovaya-заказ', 'Заказ', {
      номерЗаказа: attr('Номер заказа', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'номерЗаказа' })
  });

  modelClass.defineProjection('ОплатаL', 'i-i-s-kursovaya-оплата', {
    способ: attr('Способ', { index: 0 }),
    сумма: attr('Сумма', { index: 1 }),
    статус: attr('Статус', { index: 2 }),
    дата: attr('Дата', { index: 3 }),
    заказ: belongsTo('i-i-s-kursovaya-заказ', 'Номер заказа', {
      номерЗаказа: attr('Номер заказа', { index: 4 })
    }, { index: -1, hidden: true })
  });
};
