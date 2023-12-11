import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  поставщик: DS.attr('string'),
  телефон: DS.attr('number')
});

export let ValidationRules = {
  поставщик: {
    descriptionKey: 'models.i-i-s-kursovaya-поставщик.validations.поставщик.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  телефон: {
    descriptionKey: 'models.i-i-s-kursovaya-поставщик.validations.телефон.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПоставщикE', 'i-i-s-kursovaya-поставщик', {
    поставщик: attr('Поставщик', { index: 0 }),
    телефон: attr('Телефон', { index: 1 })
  });

  modelClass.defineProjection('ПоставщикL', 'i-i-s-kursovaya-поставщик', {
    поставщик: attr('Поставщик', { index: 0 }),
    телефон: attr('Телефон', { index: 1 })
  });
};
