import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as МенеджерMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya-менеджер';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(МенеджерMixin, Validations, {
});

defineProjections(Model);

export default Model;
