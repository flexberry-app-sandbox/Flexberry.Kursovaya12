import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-kursovaya-заказ-l');
  this.route('i-i-s-kursovaya-заказ-e',
  { path: 'i-i-s-kursovaya-заказ-e/:id' });
  this.route('i-i-s-kursovaya-заказ-e.new',
  { path: 'i-i-s-kursovaya-заказ-e/new' });
  this.route('i-i-s-kursovaya-клиент-l');
  this.route('i-i-s-kursovaya-клиент-e',
  { path: 'i-i-s-kursovaya-клиент-e/:id' });
  this.route('i-i-s-kursovaya-клиент-e.new',
  { path: 'i-i-s-kursovaya-клиент-e/new' });
  this.route('i-i-s-kursovaya-менеджер-l');
  this.route('i-i-s-kursovaya-менеджер-e',
  { path: 'i-i-s-kursovaya-менеджер-e/:id' });
  this.route('i-i-s-kursovaya-менеджер-e.new',
  { path: 'i-i-s-kursovaya-менеджер-e/new' });
  this.route('i-i-s-kursovaya-оплата-l');
  this.route('i-i-s-kursovaya-оплата-e',
  { path: 'i-i-s-kursovaya-оплата-e/:id' });
  this.route('i-i-s-kursovaya-оплата-e.new',
  { path: 'i-i-s-kursovaya-оплата-e/new' });
  this.route('i-i-s-kursovaya-поставщик-l');
  this.route('i-i-s-kursovaya-поставщик-e',
  { path: 'i-i-s-kursovaya-поставщик-e/:id' });
  this.route('i-i-s-kursovaya-поставщик-e.new',
  { path: 'i-i-s-kursovaya-поставщик-e/new' });
  this.route('i-i-s-kursovaya-производитель-l');
  this.route('i-i-s-kursovaya-производитель-e',
  { path: 'i-i-s-kursovaya-производитель-e/:id' });
  this.route('i-i-s-kursovaya-производитель-e.new',
  { path: 'i-i-s-kursovaya-производитель-e/new' });
  this.route('i-i-s-kursovaya-товар-l');
  this.route('i-i-s-kursovaya-товар-e',
  { path: 'i-i-s-kursovaya-товар-e/:id' });
  this.route('i-i-s-kursovaya-товар-e.new',
  { path: 'i-i-s-kursovaya-товар-e/new' });
});

export default Router;
