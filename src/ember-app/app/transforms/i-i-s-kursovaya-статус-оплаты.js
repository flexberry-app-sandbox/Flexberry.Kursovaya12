import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import СтатусОплатыEnum from '../enums/i-i-s-kursovaya-статус-оплаты';

export default FlexberryEnum.extend({
  enum: СтатусОплатыEnum,
  sourceType: 'IIS.Kursovaya.СтатусОплаты'
});
