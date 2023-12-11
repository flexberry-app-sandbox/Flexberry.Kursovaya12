import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  код: DS.attr('number'),
  количество: DS.attr('number'),
  наименование: DS.attr('string'),
  сумма: DS.attr('decimal'),
  цена: DS.attr('decimal'),
  заказ: DS.belongsTo('i-i-s-kursovaya-заказ', { inverse: 'товары', async: false })
});

export let ValidationRules = {
  код: {
    descriptionKey: 'models.i-i-s-kursovaya-товары.validations.код.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  количество: {
    descriptionKey: 'models.i-i-s-kursovaya-товары.validations.количество.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-kursovaya-товары.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  сумма: {
    descriptionKey: 'models.i-i-s-kursovaya-товары.validations.сумма.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  цена: {
    descriptionKey: 'models.i-i-s-kursovaya-товары.validations.цена.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  заказ: {
    descriptionKey: 'models.i-i-s-kursovaya-товары.validations.заказ.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТоварыE', 'i-i-s-kursovaya-товары', {
    код: attr('Код', { index: 0 }),
    наименование: attr('Наименование', { index: 1 }),
    количество: attr('Количество', { index: 2 }),
    цена: attr('Цена', { index: 3 }),
    сумма: attr('Сумма', { index: 4 })
  });
};
