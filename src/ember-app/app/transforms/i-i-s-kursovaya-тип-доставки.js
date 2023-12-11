import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ТипДоставкиEnum from '../enums/i-i-s-kursovaya-тип-доставки';

export default FlexberryEnum.extend({
  enum: ТипДоставкиEnum,
  sourceType: 'IIS.Kursovaya.ТипДоставки'
});
