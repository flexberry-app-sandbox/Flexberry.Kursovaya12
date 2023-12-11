import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-kursovaya-оплата', 'Unit | Model | i-i-s-kursovaya-оплата', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-kursovaya-заказ',
    'model:i-i-s-kursovaya-клиент',
    'model:i-i-s-kursovaya-менеджер',
    'model:i-i-s-kursovaya-оплата',
    'model:i-i-s-kursovaya-поставщик',
    'model:i-i-s-kursovaya-производитель',
    'model:i-i-s-kursovaya-товар',
    'model:i-i-s-kursovaya-товары',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
