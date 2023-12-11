import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.заказ.caption'),
          title: i18n.t('forms.application.sitemap.заказ.title'),
          children: [{
            link: 'i-i-s-kursovaya-заказ-l',
            caption: i18n.t('forms.application.sitemap.заказ.i-i-s-kursovaya-заказ-l.caption'),
            title: i18n.t('forms.application.sitemap.заказ.i-i-s-kursovaya-заказ-l.title'),
            icon: 'suitcase',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.справочник-по-товарам.caption'),
          title: i18n.t('forms.application.sitemap.справочник-по-товарам.title'),
          children: [{
            link: 'i-i-s-kursovaya-производитель-l',
            caption: i18n.t('forms.application.sitemap.справочник-по-товарам.i-i-s-kursovaya-производитель-l.caption'),
            title: i18n.t('forms.application.sitemap.справочник-по-товарам.i-i-s-kursovaya-производитель-l.title'),
            icon: 'briefcase',
            children: null
          }, {
            link: 'i-i-s-kursovaya-поставщик-l',
            caption: i18n.t('forms.application.sitemap.справочник-по-товарам.i-i-s-kursovaya-поставщик-l.caption'),
            title: i18n.t('forms.application.sitemap.справочник-по-товарам.i-i-s-kursovaya-поставщик-l.title'),
            icon: 'paperclip',
            children: null
          }, {
            link: 'i-i-s-kursovaya-товар-l',
            caption: i18n.t('forms.application.sitemap.справочник-по-товарам.i-i-s-kursovaya-товар-l.caption'),
            title: i18n.t('forms.application.sitemap.справочник-по-товарам.i-i-s-kursovaya-товар-l.title'),
            icon: 'file',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.клиенты.caption'),
          title: i18n.t('forms.application.sitemap.клиенты.title'),
          children: [{
            link: 'i-i-s-kursovaya-клиент-l',
            caption: i18n.t('forms.application.sitemap.клиенты.i-i-s-kursovaya-клиент-l.caption'),
            title: i18n.t('forms.application.sitemap.клиенты.i-i-s-kursovaya-клиент-l.title'),
            icon: 'paperclip',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.менеджеры.caption'),
          title: i18n.t('forms.application.sitemap.менеджеры.title'),
          children: [{
            link: 'i-i-s-kursovaya-менеджер-l',
            caption: i18n.t('forms.application.sitemap.менеджеры.i-i-s-kursovaya-менеджер-l.caption'),
            title: i18n.t('forms.application.sitemap.менеджеры.i-i-s-kursovaya-менеджер-l.title'),
            icon: 'edit',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.оплата.caption'),
          title: i18n.t('forms.application.sitemap.оплата.title'),
          children: [{
            link: 'i-i-s-kursovaya-оплата-l',
            caption: i18n.t('forms.application.sitemap.оплата.i-i-s-kursovaya-оплата-l.caption'),
            title: i18n.t('forms.application.sitemap.оплата.i-i-s-kursovaya-оплата-l.title'),
            icon: 'calendar',
            children: null
          }]
        }
      ]
    };
  }),
})