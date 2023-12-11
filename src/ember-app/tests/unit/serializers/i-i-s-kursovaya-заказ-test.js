import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-kursovaya-заказ', 'Unit | Serializer | i-i-s-kursovaya-заказ', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-kursovaya-заказ',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-kursovaya-способ1',
    'transform:i-i-s-kursovaya-статус-оплаты',
    'transform:i-i-s-kursovaya-тип-доставки',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
