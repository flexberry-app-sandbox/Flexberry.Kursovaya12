import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  изображение: DS.attr('string'),
  наименование: DS.attr('string'),
  свойства: DS.attr('string'),
  поставщик: DS.belongsTo('i-i-s-kursovaya-поставщик', { inverse: null, async: false }),
  производитель: DS.belongsTo('i-i-s-kursovaya-производитель', { inverse: null, async: false })
});

export let ValidationRules = {
  изображение: {
    descriptionKey: 'models.i-i-s-kursovaya-товар.validations.изображение.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-kursovaya-товар.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  свойства: {
    descriptionKey: 'models.i-i-s-kursovaya-товар.validations.свойства.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  поставщик: {
    descriptionKey: 'models.i-i-s-kursovaya-товар.validations.поставщик.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  производитель: {
    descriptionKey: 'models.i-i-s-kursovaya-товар.validations.производитель.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТоварE', 'i-i-s-kursovaya-товар', {
    наименование: attr('Наименование', { index: 0 }),
    изображение: attr('Изображение', { index: 1 }),
    свойства: attr('Свойства', { index: 2 }),
    поставщик: belongsTo('i-i-s-kursovaya-поставщик', 'Поставщик', {
      поставщик: attr('Поставщик', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'поставщик' }),
    производитель: belongsTo('i-i-s-kursovaya-производитель', 'Производитель', {
      производитель: attr('Производитель', { index: 6, hidden: true })
    }, { index: 5, displayMemberPath: 'производитель' })
  });

  modelClass.defineProjection('ТоварL', 'i-i-s-kursovaya-товар', {
    наименование: attr('Наименование', { index: 0 }),
    изображение: attr('Изображение', { index: 1 }),
    свойства: attr('Свойства', { index: 2 }),
    поставщик: belongsTo('i-i-s-kursovaya-поставщик', 'Поставщик', {
      поставщик: attr('Поставщик', { index: 3 })
    }, { index: -1, hidden: true }),
    производитель: belongsTo('i-i-s-kursovaya-производитель', 'Производитель', {
      производитель: attr('Производитель', { index: 4 })
    }, { index: -1, hidden: true })
  });
};
