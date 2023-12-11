import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ПоставщикMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya-поставщик';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ПоставщикMixin, Validations, {
});

defineProjections(Model);

export default Model;
