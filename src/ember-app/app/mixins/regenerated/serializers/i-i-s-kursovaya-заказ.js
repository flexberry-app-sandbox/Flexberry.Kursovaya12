import Mixin from '@ember/object/mixin';
import $ from 'jquery';

export let Serializer = Mixin.create({
  getAttrs: function () {
    let parentAttrs = this._super();
    let attrs = {
      клиент: { serialize: 'odata-id', deserialize: 'records' },
      менеджер: { serialize: 'odata-id', deserialize: 'records' },
      товар: { serialize: 'odata-id', deserialize: 'records' },
      товары: { serialize: false, deserialize: 'records' }
    };

    return $.extend(true, {}, parentAttrs, attrs);
  },
  init: function () {
    this.set('attrs', this.getAttrs());
    this._super(...arguments);
  }
});
