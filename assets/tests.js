'use strict';

define('ember-app/tests/acceptance/flexberry/i-i-s-kursovaya-\u0437\u0430\u043A\u0430\u0437-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s kursovaya заказ l');

  (0, _qunit.test)('testing i-i-s-kursovaya-заказ-l', function (assert) {
    var _this = this;

    visit('/i-i-s-kursovaya-заказ-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-kursovaya-\u043A\u043B\u0438\u0435\u043D\u0442-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s kursovaya клиент l');

  (0, _qunit.test)('testing i-i-s-kursovaya-клиент-l', function (assert) {
    var _this = this;

    visit('/i-i-s-kursovaya-клиент-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-kursovaya-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s kursovaya менеджер l');

  (0, _qunit.test)('testing i-i-s-kursovaya-менеджер-l', function (assert) {
    var _this = this;

    visit('/i-i-s-kursovaya-менеджер-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-kursovaya-\u043E\u043F\u043B\u0430\u0442\u0430-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s kursovaya оплата l');

  (0, _qunit.test)('testing i-i-s-kursovaya-оплата-l', function (assert) {
    var _this = this;

    visit('/i-i-s-kursovaya-оплата-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-kursovaya-\u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s kursovaya поставщик l');

  (0, _qunit.test)('testing i-i-s-kursovaya-поставщик-l', function (assert) {
    var _this = this;

    visit('/i-i-s-kursovaya-поставщик-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-kursovaya-\u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s kursovaya производитель l');

  (0, _qunit.test)('testing i-i-s-kursovaya-производитель-l', function (assert) {
    var _this = this;

    visit('/i-i-s-kursovaya-производитель-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-kursovaya-\u0442\u043E\u0432\u0430\u0440-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s kursovaya товар l');

  (0, _qunit.test)('testing i-i-s-kursovaya-товар-l', function (assert) {
    var _this = this;

    visit('/i-i-s-kursovaya-товар-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('adapters/application-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application-offline.js should pass ESLint\n\n');
  });

  QUnit.test('adapters/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass ESLint\n\n');
  });

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/application.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-kursovaya-\u0437\u0430\u043A\u0430\u0437-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-kursovaya-\u0437\u0430\u043A\u0430\u0437-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-kursovaya-\u0437\u0430\u043A\u0430\u0437-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-kursovaya-\u0437\u0430\u043A\u0430\u0437-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-kursovaya-\u0437\u0430\u043A\u0430\u0437-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-kursovaya-\u0437\u0430\u043A\u0430\u0437-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-kursovaya-\u043A\u043B\u0438\u0435\u043D\u0442-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-kursovaya-\u043A\u043B\u0438\u0435\u043D\u0442-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-kursovaya-\u043A\u043B\u0438\u0435\u043D\u0442-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-kursovaya-\u043A\u043B\u0438\u0435\u043D\u0442-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-kursovaya-\u043A\u043B\u0438\u0435\u043D\u0442-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-kursovaya-\u043A\u043B\u0438\u0435\u043D\u0442-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-kursovaya-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-kursovaya-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-kursovaya-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-kursovaya-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-kursovaya-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-kursovaya-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-kursovaya-\u043E\u043F\u043B\u0430\u0442\u0430-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-kursovaya-\u043E\u043F\u043B\u0430\u0442\u0430-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-kursovaya-\u043E\u043F\u043B\u0430\u0442\u0430-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-kursovaya-\u043E\u043F\u043B\u0430\u0442\u0430-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-kursovaya-\u043E\u043F\u043B\u0430\u0442\u0430-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-kursovaya-\u043E\u043F\u043B\u0430\u0442\u0430-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-kursovaya-\u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-kursovaya-\u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-kursovaya-\u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-kursovaya-\u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-kursovaya-\u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-kursovaya-\u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-kursovaya-\u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-kursovaya-\u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-kursovaya-\u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-kursovaya-\u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-kursovaya-\u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-kursovaya-\u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-kursovaya-\u0442\u043E\u0432\u0430\u0440-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-kursovaya-\u0442\u043E\u0432\u0430\u0440-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-kursovaya-\u0442\u043E\u0432\u0430\u0440-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-kursovaya-\u0442\u043E\u0432\u0430\u0440-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-kursovaya-\u0442\u043E\u0432\u0430\u0440-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-kursovaya-\u0442\u043E\u0432\u0430\u0440-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/index.js should pass ESLint\n\n');
  });

  QUnit.test('enums/i-i-s-kursovaya-\u0441\u043F\u043E\u0441\u043E\u04311.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'enums/i-i-s-kursovaya-\u0441\u043F\u043E\u0441\u043E\u04311.js should pass ESLint\n\n');
  });

  QUnit.test('enums/i-i-s-kursovaya-\u0441\u0442\u0430\u0442\u0443\u0441-\u043E\u043F\u043B\u0430\u0442\u044B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'enums/i-i-s-kursovaya-\u0441\u0442\u0430\u0442\u0443\u0441-\u043E\u043F\u043B\u0430\u0442\u044B.js should pass ESLint\n\n');
  });

  QUnit.test('enums/i-i-s-kursovaya-\u0442\u0438\u043F-\u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'enums/i-i-s-kursovaya-\u0442\u0438\u043F-\u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-kursovaya-\u0437\u0430\u043A\u0430\u0437-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-kursovaya-\u0437\u0430\u043A\u0430\u0437-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-kursovaya-\u0437\u0430\u043A\u0430\u0437-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-kursovaya-\u0437\u0430\u043A\u0430\u0437-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-kursovaya-\u043A\u043B\u0438\u0435\u043D\u0442-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-kursovaya-\u043A\u043B\u0438\u0435\u043D\u0442-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-kursovaya-\u043A\u043B\u0438\u0435\u043D\u0442-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-kursovaya-\u043A\u043B\u0438\u0435\u043D\u0442-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-kursovaya-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-kursovaya-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-kursovaya-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-kursovaya-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-kursovaya-\u043E\u043F\u043B\u0430\u0442\u0430-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-kursovaya-\u043E\u043F\u043B\u0430\u0442\u0430-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-kursovaya-\u043E\u043F\u043B\u0430\u0442\u0430-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-kursovaya-\u043E\u043F\u043B\u0430\u0442\u0430-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-kursovaya-\u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-kursovaya-\u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-kursovaya-\u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-kursovaya-\u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-kursovaya-\u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-kursovaya-\u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-kursovaya-\u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-kursovaya-\u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-kursovaya-\u0442\u043E\u0432\u0430\u0440-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-kursovaya-\u0442\u043E\u0432\u0430\u0440-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-kursovaya-\u0442\u043E\u0432\u0430\u0440-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-kursovaya-\u0442\u043E\u0432\u0430\u0440-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-kursovaya-\u0437\u0430\u043A\u0430\u0437.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-kursovaya-\u0437\u0430\u043A\u0430\u0437.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-kursovaya-\u043A\u043B\u0438\u0435\u043D\u0442.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-kursovaya-\u043A\u043B\u0438\u0435\u043D\u0442.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-kursovaya-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-kursovaya-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-kursovaya-\u043E\u043F\u043B\u0430\u0442\u0430.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-kursovaya-\u043E\u043F\u043B\u0430\u0442\u0430.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-kursovaya-\u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-kursovaya-\u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-kursovaya-\u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-kursovaya-\u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-kursovaya-\u0442\u043E\u0432\u0430\u0440.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-kursovaya-\u0442\u043E\u0432\u0430\u0440.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-kursovaya-\u0442\u043E\u0432\u0430\u0440\u044B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-kursovaya-\u0442\u043E\u0432\u0430\u0440\u044B.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/translations.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/translations.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-kursovaya-\u0437\u0430\u043A\u0430\u0437-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-kursovaya-\u0437\u0430\u043A\u0430\u0437-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-kursovaya-\u0437\u0430\u043A\u0430\u0437-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-kursovaya-\u0437\u0430\u043A\u0430\u0437-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-kursovaya-\u043A\u043B\u0438\u0435\u043D\u0442-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-kursovaya-\u043A\u043B\u0438\u0435\u043D\u0442-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-kursovaya-\u043A\u043B\u0438\u0435\u043D\u0442-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-kursovaya-\u043A\u043B\u0438\u0435\u043D\u0442-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-kursovaya-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-kursovaya-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-kursovaya-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-kursovaya-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-kursovaya-\u043E\u043F\u043B\u0430\u0442\u0430-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-kursovaya-\u043E\u043F\u043B\u0430\u0442\u0430-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-kursovaya-\u043E\u043F\u043B\u0430\u0442\u0430-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-kursovaya-\u043E\u043F\u043B\u0430\u0442\u0430-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-kursovaya-\u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-kursovaya-\u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-kursovaya-\u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-kursovaya-\u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-kursovaya-\u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-kursovaya-\u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-kursovaya-\u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-kursovaya-\u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-kursovaya-\u0442\u043E\u0432\u0430\u0440-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-kursovaya-\u0442\u043E\u0432\u0430\u0440-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-kursovaya-\u0442\u043E\u0432\u0430\u0440-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-kursovaya-\u0442\u043E\u0432\u0430\u0440-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-kursovaya-\u0437\u0430\u043A\u0430\u0437.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-kursovaya-\u0437\u0430\u043A\u0430\u0437.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-kursovaya-\u043A\u043B\u0438\u0435\u043D\u0442.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-kursovaya-\u043A\u043B\u0438\u0435\u043D\u0442.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-kursovaya-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-kursovaya-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-kursovaya-\u043E\u043F\u043B\u0430\u0442\u0430.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-kursovaya-\u043E\u043F\u043B\u0430\u0442\u0430.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-kursovaya-\u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-kursovaya-\u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-kursovaya-\u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-kursovaya-\u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-kursovaya-\u0442\u043E\u0432\u0430\u0440.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-kursovaya-\u0442\u043E\u0432\u0430\u0440.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-kursovaya-\u0442\u043E\u0432\u0430\u0440\u044B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-kursovaya-\u0442\u043E\u0432\u0430\u0440\u044B.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/translations.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/translations.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-kursovaya-\u0437\u0430\u043A\u0430\u0437.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-kursovaya-\u0437\u0430\u043A\u0430\u0437.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-kursovaya-\u043A\u043B\u0438\u0435\u043D\u0442.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-kursovaya-\u043A\u043B\u0438\u0435\u043D\u0442.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-kursovaya-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-kursovaya-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-kursovaya-\u043E\u043F\u043B\u0430\u0442\u0430.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-kursovaya-\u043E\u043F\u043B\u0430\u0442\u0430.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-kursovaya-\u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-kursovaya-\u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-kursovaya-\u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-kursovaya-\u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-kursovaya-\u0442\u043E\u0432\u0430\u0440.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-kursovaya-\u0442\u043E\u0432\u0430\u0440.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-kursovaya-\u0442\u043E\u0432\u0430\u0440\u044B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-kursovaya-\u0442\u043E\u0432\u0430\u0440\u044B.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-kursovaya-\u0437\u0430\u043A\u0430\u0437-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-kursovaya-\u0437\u0430\u043A\u0430\u0437-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-kursovaya-\u0437\u0430\u043A\u0430\u0437.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-kursovaya-\u0437\u0430\u043A\u0430\u0437.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-kursovaya-\u043A\u043B\u0438\u0435\u043D\u0442-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-kursovaya-\u043A\u043B\u0438\u0435\u043D\u0442-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-kursovaya-\u043A\u043B\u0438\u0435\u043D\u0442.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-kursovaya-\u043A\u043B\u0438\u0435\u043D\u0442.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-kursovaya-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-kursovaya-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-kursovaya-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-kursovaya-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-kursovaya-\u043E\u043F\u043B\u0430\u0442\u0430-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-kursovaya-\u043E\u043F\u043B\u0430\u0442\u0430-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-kursovaya-\u043E\u043F\u043B\u0430\u0442\u0430.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-kursovaya-\u043E\u043F\u043B\u0430\u0442\u0430.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-kursovaya-\u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-kursovaya-\u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-kursovaya-\u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-kursovaya-\u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-kursovaya-\u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-kursovaya-\u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-kursovaya-\u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-kursovaya-\u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-kursovaya-\u0442\u043E\u0432\u0430\u0440-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-kursovaya-\u0442\u043E\u0432\u0430\u0440-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-kursovaya-\u0442\u043E\u0432\u0430\u0440.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-kursovaya-\u0442\u043E\u0432\u0430\u0440.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-kursovaya-\u0442\u043E\u0432\u0430\u0440\u044B-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-kursovaya-\u0442\u043E\u0432\u0430\u0440\u044B-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-kursovaya-\u0442\u043E\u0432\u0430\u0440\u044B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-kursovaya-\u0442\u043E\u0432\u0430\u0440\u044B.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-kursovaya-\u0437\u0430\u043A\u0430\u0437.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-kursovaya-\u0437\u0430\u043A\u0430\u0437.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-kursovaya-\u043A\u043B\u0438\u0435\u043D\u0442.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-kursovaya-\u043A\u043B\u0438\u0435\u043D\u0442.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-kursovaya-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-kursovaya-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-kursovaya-\u043E\u043F\u043B\u0430\u0442\u0430.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-kursovaya-\u043E\u043F\u043B\u0430\u0442\u0430.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-kursovaya-\u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-kursovaya-\u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-kursovaya-\u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-kursovaya-\u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-kursovaya-\u0442\u043E\u0432\u0430\u0440.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-kursovaya-\u0442\u043E\u0432\u0430\u0440.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-kursovaya-\u0442\u043E\u0432\u0430\u0440\u044B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-kursovaya-\u0442\u043E\u0432\u0430\u0440\u044B.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/application.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-kursovaya-\u0437\u0430\u043A\u0430\u0437-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-kursovaya-\u0437\u0430\u043A\u0430\u0437-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-kursovaya-\u0437\u0430\u043A\u0430\u0437-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-kursovaya-\u0437\u0430\u043A\u0430\u0437-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-kursovaya-\u0437\u0430\u043A\u0430\u0437-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-kursovaya-\u0437\u0430\u043A\u0430\u0437-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-kursovaya-\u043A\u043B\u0438\u0435\u043D\u0442-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-kursovaya-\u043A\u043B\u0438\u0435\u043D\u0442-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-kursovaya-\u043A\u043B\u0438\u0435\u043D\u0442-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-kursovaya-\u043A\u043B\u0438\u0435\u043D\u0442-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-kursovaya-\u043A\u043B\u0438\u0435\u043D\u0442-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-kursovaya-\u043A\u043B\u0438\u0435\u043D\u0442-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-kursovaya-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-kursovaya-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-kursovaya-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-kursovaya-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-kursovaya-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-kursovaya-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-kursovaya-\u043E\u043F\u043B\u0430\u0442\u0430-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-kursovaya-\u043E\u043F\u043B\u0430\u0442\u0430-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-kursovaya-\u043E\u043F\u043B\u0430\u0442\u0430-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-kursovaya-\u043E\u043F\u043B\u0430\u0442\u0430-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-kursovaya-\u043E\u043F\u043B\u0430\u0442\u0430-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-kursovaya-\u043E\u043F\u043B\u0430\u0442\u0430-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-kursovaya-\u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-kursovaya-\u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-kursovaya-\u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-kursovaya-\u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-kursovaya-\u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-kursovaya-\u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-kursovaya-\u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-kursovaya-\u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-kursovaya-\u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-kursovaya-\u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-kursovaya-\u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-kursovaya-\u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-kursovaya-\u0442\u043E\u0432\u0430\u0440-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-kursovaya-\u0442\u043E\u0432\u0430\u0440-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-kursovaya-\u0442\u043E\u0432\u0430\u0440-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-kursovaya-\u0442\u043E\u0432\u0430\u0440-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-kursovaya-\u0442\u043E\u0432\u0430\u0440-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-kursovaya-\u0442\u043E\u0432\u0430\u0440-l.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/application-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/application-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/application.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-kursovaya-\u0437\u0430\u043A\u0430\u0437-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-kursovaya-\u0437\u0430\u043A\u0430\u0437-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-kursovaya-\u0437\u0430\u043A\u0430\u0437.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-kursovaya-\u0437\u0430\u043A\u0430\u0437.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-kursovaya-\u043A\u043B\u0438\u0435\u043D\u0442-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-kursovaya-\u043A\u043B\u0438\u0435\u043D\u0442-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-kursovaya-\u043A\u043B\u0438\u0435\u043D\u0442.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-kursovaya-\u043A\u043B\u0438\u0435\u043D\u0442.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-kursovaya-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-kursovaya-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-kursovaya-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-kursovaya-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-kursovaya-\u043E\u043F\u043B\u0430\u0442\u0430-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-kursovaya-\u043E\u043F\u043B\u0430\u0442\u0430-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-kursovaya-\u043E\u043F\u043B\u0430\u0442\u0430.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-kursovaya-\u043E\u043F\u043B\u0430\u0442\u0430.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-kursovaya-\u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-kursovaya-\u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-kursovaya-\u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-kursovaya-\u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-kursovaya-\u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-kursovaya-\u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-kursovaya-\u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-kursovaya-\u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-kursovaya-\u0442\u043E\u0432\u0430\u0440-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-kursovaya-\u0442\u043E\u0432\u0430\u0440-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-kursovaya-\u0442\u043E\u0432\u0430\u0440.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-kursovaya-\u0442\u043E\u0432\u0430\u0440.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-kursovaya-\u0442\u043E\u0432\u0430\u0440\u044B-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-kursovaya-\u0442\u043E\u0432\u0430\u0440\u044B-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-kursovaya-\u0442\u043E\u0432\u0430\u0440\u044B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-kursovaya-\u0442\u043E\u0432\u0430\u0440\u044B.js should pass ESLint\n\n');
  });

  QUnit.test('services/offline-globals.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/offline-globals.js should pass ESLint\n\n');
  });

  QUnit.test('services/store.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/store.js should pass ESLint\n\n');
  });

  QUnit.test('transforms/i-i-s-kursovaya-\u0441\u043F\u043E\u0441\u043E\u04311.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'transforms/i-i-s-kursovaya-\u0441\u043F\u043E\u0441\u043E\u04311.js should pass ESLint\n\n');
  });

  QUnit.test('transforms/i-i-s-kursovaya-\u0441\u0442\u0430\u0442\u0443\u0441-\u043E\u043F\u043B\u0430\u0442\u044B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'transforms/i-i-s-kursovaya-\u0441\u0442\u0430\u0442\u0443\u0441-\u043E\u043F\u043B\u0430\u0442\u044B.js should pass ESLint\n\n');
  });

  QUnit.test('transforms/i-i-s-kursovaya-\u0442\u0438\u043F-\u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'transforms/i-i-s-kursovaya-\u0442\u0438\u043F-\u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438.js should pass ESLint\n\n');
  });
});
define('ember-app/tests/helpers/destroy-app', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = destroyApp;
  function destroyApp(application) {
    Ember.run(application, 'destroy');
  }
});
define('ember-app/tests/helpers/ember-i18n/test-helpers', ['ember-i18n/test-support/-private/t', 'ember-i18n/test-support/-private/assert-translation'], function (_t2, _assertTranslation2) {
  'use strict';

  // example usage: find(`.header:contains(${t('welcome_message')})`)
  Ember.Test.registerHelper('t', function (app, key, interpolations) {
    return (0, _t2.default)(app.__container__, key, interpolations);
  });

  // example usage: expectTranslation('.header', 'welcome_message');
  Ember.Test.registerHelper('expectTranslation', function (app, element, key, interpolations) {
    var text = (0, _t2.default)(app.__container__, key, interpolations);

    (0, _assertTranslation2.default)(element, key, text);
  });
});
define('ember-app/tests/helpers/ember-prop-types', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.createComponent = createComponent;

  var _slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();

  var VERSION = Ember.VERSION;


  /**
   * Determine if we are on a version of Ember that includes Glimmer 2
   * @returns {Boolean} whether or not we are on Glimmer 2
   */
  function isGlimmer2() {
    var _VERSION$split = VERSION.split('.'),
        _VERSION$split2 = _slicedToArray(_VERSION$split, 2),
        major = _VERSION$split2[0],
        minor = _VERSION$split2[1];

    return parseInt(major) > 1 && parseInt(minor) > 9;
  }

  /**
   * Programitcally instantiate instance of component class
   * @param {Ember.Component} component - component class to instantiate
   * @returns {Ember.Component} instance of component class
   */
  function createComponent(component) {
    if (isGlimmer2()) {
      return component.create({ renderer: {} });
    }

    return component.create();
  }
});
define('ember-app/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember-app/tests/helpers/start-app', 'ember-app/tests/helpers/destroy-app'], function (exports, _qunit, _startApp, _destroyApp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (name) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _startApp.default)();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },
      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Ember.RSVP.resolve(afterEach).then(function () {
          return (0, _destroyApp.default)(_this.application);
        });
      }
    });
  };
});
define('ember-app/tests/helpers/start-app', ['exports', 'ember-app/app', 'ember-app/config/environment', 'ember-flexberry/test-support'], function (exports, _app, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = startApp;
  function startApp(attrs) {
    var attributes = Ember.merge({}, _environment.default.APP);
    attributes.autoboot = true;
    attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;

    return Ember.run(function () {
      var application = _app.default.create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define('ember-app/tests/test-helper', ['ember-app/app', 'ember-app/config/environment', '@ember/test-helpers', 'ember-qunit'], function (_app, _environment, _testHelpers, _emberQunit) {
  'use strict';

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));

  (0, _emberQunit.start)();
});
define('ember-app/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('acceptance/flexberry/i-i-s-kursovaya-\u0437\u0430\u043A\u0430\u0437-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-kursovaya-\u0437\u0430\u043A\u0430\u0437-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-kursovaya-\u043A\u043B\u0438\u0435\u043D\u0442-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-kursovaya-\u043A\u043B\u0438\u0435\u043D\u0442-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-kursovaya-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-kursovaya-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-kursovaya-\u043E\u043F\u043B\u0430\u0442\u0430-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-kursovaya-\u043E\u043F\u043B\u0430\u0442\u0430-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-kursovaya-\u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-kursovaya-\u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-kursovaya-\u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-kursovaya-\u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-kursovaya-\u0442\u043E\u0432\u0430\u0440-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-kursovaya-\u0442\u043E\u0432\u0430\u0440-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-kursovaya-\u0437\u0430\u043A\u0430\u0437-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-kursovaya-\u0437\u0430\u043A\u0430\u0437-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-kursovaya-\u0437\u0430\u043A\u0430\u0437-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-kursovaya-\u0437\u0430\u043A\u0430\u0437-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-kursovaya-\u043A\u043B\u0438\u0435\u043D\u0442-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-kursovaya-\u043A\u043B\u0438\u0435\u043D\u0442-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-kursovaya-\u043A\u043B\u0438\u0435\u043D\u0442-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-kursovaya-\u043A\u043B\u0438\u0435\u043D\u0442-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-kursovaya-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-kursovaya-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-kursovaya-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-kursovaya-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-kursovaya-\u043E\u043F\u043B\u0430\u0442\u0430-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-kursovaya-\u043E\u043F\u043B\u0430\u0442\u0430-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-kursovaya-\u043E\u043F\u043B\u0430\u0442\u0430-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-kursovaya-\u043E\u043F\u043B\u0430\u0442\u0430-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-kursovaya-\u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-kursovaya-\u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-kursovaya-\u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-kursovaya-\u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-kursovaya-\u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-kursovaya-\u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-kursovaya-\u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-kursovaya-\u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-kursovaya-\u0442\u043E\u0432\u0430\u0440-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-kursovaya-\u0442\u043E\u0432\u0430\u0440-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-kursovaya-\u0442\u043E\u0432\u0430\u0440-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-kursovaya-\u0442\u043E\u0432\u0430\u0440-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-kursovaya-\u0437\u0430\u043A\u0430\u0437-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-kursovaya-\u0437\u0430\u043A\u0430\u0437-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-kursovaya-\u043A\u043B\u0438\u0435\u043D\u0442-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-kursovaya-\u043A\u043B\u0438\u0435\u043D\u0442-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-kursovaya-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-kursovaya-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-kursovaya-\u043E\u043F\u043B\u0430\u0442\u0430-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-kursovaya-\u043E\u043F\u043B\u0430\u0442\u0430-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-kursovaya-\u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-kursovaya-\u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-kursovaya-\u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-kursovaya-\u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-kursovaya-\u0442\u043E\u0432\u0430\u0440-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-kursovaya-\u0442\u043E\u0432\u0430\u0440-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-kursovaya-\u0442\u043E\u0432\u0430\u0440\u044B-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-kursovaya-\u0442\u043E\u0432\u0430\u0440\u044B-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-kursovaya-\u0437\u0430\u043A\u0430\u0437-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-kursovaya-\u0437\u0430\u043A\u0430\u0437-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-kursovaya-\u0437\u0430\u043A\u0430\u0437-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-kursovaya-\u0437\u0430\u043A\u0430\u0437-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-kursovaya-\u043A\u043B\u0438\u0435\u043D\u0442-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-kursovaya-\u043A\u043B\u0438\u0435\u043D\u0442-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-kursovaya-\u043A\u043B\u0438\u0435\u043D\u0442-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-kursovaya-\u043A\u043B\u0438\u0435\u043D\u0442-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-kursovaya-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-kursovaya-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-kursovaya-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-kursovaya-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-kursovaya-\u043E\u043F\u043B\u0430\u0442\u0430-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-kursovaya-\u043E\u043F\u043B\u0430\u0442\u0430-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-kursovaya-\u043E\u043F\u043B\u0430\u0442\u0430-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-kursovaya-\u043E\u043F\u043B\u0430\u0442\u0430-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-kursovaya-\u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-kursovaya-\u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-kursovaya-\u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-kursovaya-\u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-kursovaya-\u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-kursovaya-\u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-kursovaya-\u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-kursovaya-\u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-kursovaya-\u0442\u043E\u0432\u0430\u0440-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-kursovaya-\u0442\u043E\u0432\u0430\u0440-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-kursovaya-\u0442\u043E\u0432\u0430\u0440-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-kursovaya-\u0442\u043E\u0432\u0430\u0440-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-kursovaya-\u0437\u0430\u043A\u0430\u0437-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-kursovaya-\u0437\u0430\u043A\u0430\u0437-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-kursovaya-\u043A\u043B\u0438\u0435\u043D\u0442-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-kursovaya-\u043A\u043B\u0438\u0435\u043D\u0442-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-kursovaya-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-kursovaya-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-kursovaya-\u043E\u043F\u043B\u0430\u0442\u0430-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-kursovaya-\u043E\u043F\u043B\u0430\u0442\u0430-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-kursovaya-\u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-kursovaya-\u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-kursovaya-\u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-kursovaya-\u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-kursovaya-\u0442\u043E\u0432\u0430\u0440-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-kursovaya-\u0442\u043E\u0432\u0430\u0440-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-kursovaya-\u0442\u043E\u0432\u0430\u0440\u044B-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-kursovaya-\u0442\u043E\u0432\u0430\u0440\u044B-test.js should pass ESLint\n\n');
  });
});
define('ember-app/tests/unit/controllers/i-i-s-kursovaya-\u0437\u0430\u043A\u0430\u0437-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-kursovaya-заказ-e', 'Unit | Controller | i-i-s-kursovaya-заказ-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-kursovaya-\u0437\u0430\u043A\u0430\u0437-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-kursovaya-заказ-l', 'Unit | Controller | i-i-s-kursovaya-заказ-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-kursovaya-\u043A\u043B\u0438\u0435\u043D\u0442-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-kursovaya-клиент-e', 'Unit | Controller | i-i-s-kursovaya-клиент-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-kursovaya-\u043A\u043B\u0438\u0435\u043D\u0442-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-kursovaya-клиент-l', 'Unit | Controller | i-i-s-kursovaya-клиент-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-kursovaya-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-kursovaya-менеджер-e', 'Unit | Controller | i-i-s-kursovaya-менеджер-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-kursovaya-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-kursovaya-менеджер-l', 'Unit | Controller | i-i-s-kursovaya-менеджер-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-kursovaya-\u043E\u043F\u043B\u0430\u0442\u0430-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-kursovaya-оплата-e', 'Unit | Controller | i-i-s-kursovaya-оплата-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-kursovaya-\u043E\u043F\u043B\u0430\u0442\u0430-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-kursovaya-оплата-l', 'Unit | Controller | i-i-s-kursovaya-оплата-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-kursovaya-\u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-kursovaya-поставщик-e', 'Unit | Controller | i-i-s-kursovaya-поставщик-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-kursovaya-\u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-kursovaya-поставщик-l', 'Unit | Controller | i-i-s-kursovaya-поставщик-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-kursovaya-\u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-kursovaya-производитель-e', 'Unit | Controller | i-i-s-kursovaya-производитель-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-kursovaya-\u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-kursovaya-производитель-l', 'Unit | Controller | i-i-s-kursovaya-производитель-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-kursovaya-\u0442\u043E\u0432\u0430\u0440-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-kursovaya-товар-e', 'Unit | Controller | i-i-s-kursovaya-товар-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-kursovaya-\u0442\u043E\u0432\u0430\u0440-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-kursovaya-товар-l', 'Unit | Controller | i-i-s-kursovaya-товар-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/models/i-i-s-kursovaya-\u0437\u0430\u043A\u0430\u0437-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-kursovaya-заказ', 'Unit | Model | i-i-s-kursovaya-заказ', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-kursovaya-заказ', 'model:i-i-s-kursovaya-клиент', 'model:i-i-s-kursovaya-менеджер', 'model:i-i-s-kursovaya-оплата', 'model:i-i-s-kursovaya-поставщик', 'model:i-i-s-kursovaya-производитель', 'model:i-i-s-kursovaya-товар', 'model:i-i-s-kursovaya-товары', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-kursovaya-\u043A\u043B\u0438\u0435\u043D\u0442-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-kursovaya-клиент', 'Unit | Model | i-i-s-kursovaya-клиент', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-kursovaya-заказ', 'model:i-i-s-kursovaya-клиент', 'model:i-i-s-kursovaya-менеджер', 'model:i-i-s-kursovaya-оплата', 'model:i-i-s-kursovaya-поставщик', 'model:i-i-s-kursovaya-производитель', 'model:i-i-s-kursovaya-товар', 'model:i-i-s-kursovaya-товары', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-kursovaya-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-kursovaya-менеджер', 'Unit | Model | i-i-s-kursovaya-менеджер', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-kursovaya-заказ', 'model:i-i-s-kursovaya-клиент', 'model:i-i-s-kursovaya-менеджер', 'model:i-i-s-kursovaya-оплата', 'model:i-i-s-kursovaya-поставщик', 'model:i-i-s-kursovaya-производитель', 'model:i-i-s-kursovaya-товар', 'model:i-i-s-kursovaya-товары', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-kursovaya-\u043E\u043F\u043B\u0430\u0442\u0430-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-kursovaya-оплата', 'Unit | Model | i-i-s-kursovaya-оплата', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-kursovaya-заказ', 'model:i-i-s-kursovaya-клиент', 'model:i-i-s-kursovaya-менеджер', 'model:i-i-s-kursovaya-оплата', 'model:i-i-s-kursovaya-поставщик', 'model:i-i-s-kursovaya-производитель', 'model:i-i-s-kursovaya-товар', 'model:i-i-s-kursovaya-товары', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-kursovaya-\u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-kursovaya-поставщик', 'Unit | Model | i-i-s-kursovaya-поставщик', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-kursovaya-заказ', 'model:i-i-s-kursovaya-клиент', 'model:i-i-s-kursovaya-менеджер', 'model:i-i-s-kursovaya-оплата', 'model:i-i-s-kursovaya-поставщик', 'model:i-i-s-kursovaya-производитель', 'model:i-i-s-kursovaya-товар', 'model:i-i-s-kursovaya-товары', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-kursovaya-\u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-kursovaya-производитель', 'Unit | Model | i-i-s-kursovaya-производитель', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-kursovaya-заказ', 'model:i-i-s-kursovaya-клиент', 'model:i-i-s-kursovaya-менеджер', 'model:i-i-s-kursovaya-оплата', 'model:i-i-s-kursovaya-поставщик', 'model:i-i-s-kursovaya-производитель', 'model:i-i-s-kursovaya-товар', 'model:i-i-s-kursovaya-товары', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-kursovaya-\u0442\u043E\u0432\u0430\u0440-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-kursovaya-товар', 'Unit | Model | i-i-s-kursovaya-товар', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-kursovaya-заказ', 'model:i-i-s-kursovaya-клиент', 'model:i-i-s-kursovaya-менеджер', 'model:i-i-s-kursovaya-оплата', 'model:i-i-s-kursovaya-поставщик', 'model:i-i-s-kursovaya-производитель', 'model:i-i-s-kursovaya-товар', 'model:i-i-s-kursovaya-товары', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-kursovaya-\u0442\u043E\u0432\u0430\u0440\u044B-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-kursovaya-товары', 'Unit | Model | i-i-s-kursovaya-товары', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-kursovaya-заказ', 'model:i-i-s-kursovaya-клиент', 'model:i-i-s-kursovaya-менеджер', 'model:i-i-s-kursovaya-оплата', 'model:i-i-s-kursovaya-поставщик', 'model:i-i-s-kursovaya-производитель', 'model:i-i-s-kursovaya-товар', 'model:i-i-s-kursovaya-товары', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/routes/i-i-s-kursovaya-\u0437\u0430\u043A\u0430\u0437-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-kursovaya-заказ-e', 'Unit | Route | i-i-s-kursovaya-заказ-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-kursovaya-\u0437\u0430\u043A\u0430\u0437-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-kursovaya-заказ-l', 'Unit | Route | i-i-s-kursovaya-заказ-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-kursovaya-\u043A\u043B\u0438\u0435\u043D\u0442-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-kursovaya-клиент-e', 'Unit | Route | i-i-s-kursovaya-клиент-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-kursovaya-\u043A\u043B\u0438\u0435\u043D\u0442-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-kursovaya-клиент-l', 'Unit | Route | i-i-s-kursovaya-клиент-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-kursovaya-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-kursovaya-менеджер-e', 'Unit | Route | i-i-s-kursovaya-менеджер-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-kursovaya-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-kursovaya-менеджер-l', 'Unit | Route | i-i-s-kursovaya-менеджер-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-kursovaya-\u043E\u043F\u043B\u0430\u0442\u0430-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-kursovaya-оплата-e', 'Unit | Route | i-i-s-kursovaya-оплата-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-kursovaya-\u043E\u043F\u043B\u0430\u0442\u0430-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-kursovaya-оплата-l', 'Unit | Route | i-i-s-kursovaya-оплата-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-kursovaya-\u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-kursovaya-поставщик-e', 'Unit | Route | i-i-s-kursovaya-поставщик-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-kursovaya-\u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-kursovaya-поставщик-l', 'Unit | Route | i-i-s-kursovaya-поставщик-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-kursovaya-\u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-kursovaya-производитель-e', 'Unit | Route | i-i-s-kursovaya-производитель-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-kursovaya-\u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-kursovaya-производитель-l', 'Unit | Route | i-i-s-kursovaya-производитель-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-kursovaya-\u0442\u043E\u0432\u0430\u0440-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-kursovaya-товар-e', 'Unit | Route | i-i-s-kursovaya-товар-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-kursovaya-\u0442\u043E\u0432\u0430\u0440-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-kursovaya-товар-l', 'Unit | Route | i-i-s-kursovaya-товар-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-kursovaya-\u0437\u0430\u043A\u0430\u0437-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-kursovaya-заказ', 'Unit | Serializer | i-i-s-kursovaya-заказ', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-kursovaya-заказ', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:i-i-s-kursovaya-способ1', 'transform:i-i-s-kursovaya-статус-оплаты', 'transform:i-i-s-kursovaya-тип-доставки', 'model:i-i-s-kursovaya-заказ', 'model:i-i-s-kursovaya-клиент', 'model:i-i-s-kursovaya-менеджер', 'model:i-i-s-kursovaya-оплата', 'model:i-i-s-kursovaya-поставщик', 'model:i-i-s-kursovaya-производитель', 'model:i-i-s-kursovaya-товар', 'model:i-i-s-kursovaya-товары', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-kursovaya-\u043A\u043B\u0438\u0435\u043D\u0442-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-kursovaya-клиент', 'Unit | Serializer | i-i-s-kursovaya-клиент', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-kursovaya-клиент', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:i-i-s-kursovaya-способ1', 'transform:i-i-s-kursovaya-статус-оплаты', 'transform:i-i-s-kursovaya-тип-доставки', 'model:i-i-s-kursovaya-заказ', 'model:i-i-s-kursovaya-клиент', 'model:i-i-s-kursovaya-менеджер', 'model:i-i-s-kursovaya-оплата', 'model:i-i-s-kursovaya-поставщик', 'model:i-i-s-kursovaya-производитель', 'model:i-i-s-kursovaya-товар', 'model:i-i-s-kursovaya-товары', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-kursovaya-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-kursovaya-менеджер', 'Unit | Serializer | i-i-s-kursovaya-менеджер', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-kursovaya-менеджер', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:i-i-s-kursovaya-способ1', 'transform:i-i-s-kursovaya-статус-оплаты', 'transform:i-i-s-kursovaya-тип-доставки', 'model:i-i-s-kursovaya-заказ', 'model:i-i-s-kursovaya-клиент', 'model:i-i-s-kursovaya-менеджер', 'model:i-i-s-kursovaya-оплата', 'model:i-i-s-kursovaya-поставщик', 'model:i-i-s-kursovaya-производитель', 'model:i-i-s-kursovaya-товар', 'model:i-i-s-kursovaya-товары', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-kursovaya-\u043E\u043F\u043B\u0430\u0442\u0430-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-kursovaya-оплата', 'Unit | Serializer | i-i-s-kursovaya-оплата', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-kursovaya-оплата', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:i-i-s-kursovaya-способ1', 'transform:i-i-s-kursovaya-статус-оплаты', 'transform:i-i-s-kursovaya-тип-доставки', 'model:i-i-s-kursovaya-заказ', 'model:i-i-s-kursovaya-клиент', 'model:i-i-s-kursovaya-менеджер', 'model:i-i-s-kursovaya-оплата', 'model:i-i-s-kursovaya-поставщик', 'model:i-i-s-kursovaya-производитель', 'model:i-i-s-kursovaya-товар', 'model:i-i-s-kursovaya-товары', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-kursovaya-\u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-kursovaya-поставщик', 'Unit | Serializer | i-i-s-kursovaya-поставщик', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-kursovaya-поставщик', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:i-i-s-kursovaya-способ1', 'transform:i-i-s-kursovaya-статус-оплаты', 'transform:i-i-s-kursovaya-тип-доставки', 'model:i-i-s-kursovaya-заказ', 'model:i-i-s-kursovaya-клиент', 'model:i-i-s-kursovaya-менеджер', 'model:i-i-s-kursovaya-оплата', 'model:i-i-s-kursovaya-поставщик', 'model:i-i-s-kursovaya-производитель', 'model:i-i-s-kursovaya-товар', 'model:i-i-s-kursovaya-товары', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-kursovaya-\u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-kursovaya-производитель', 'Unit | Serializer | i-i-s-kursovaya-производитель', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-kursovaya-производитель', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:i-i-s-kursovaya-способ1', 'transform:i-i-s-kursovaya-статус-оплаты', 'transform:i-i-s-kursovaya-тип-доставки', 'model:i-i-s-kursovaya-заказ', 'model:i-i-s-kursovaya-клиент', 'model:i-i-s-kursovaya-менеджер', 'model:i-i-s-kursovaya-оплата', 'model:i-i-s-kursovaya-поставщик', 'model:i-i-s-kursovaya-производитель', 'model:i-i-s-kursovaya-товар', 'model:i-i-s-kursovaya-товары', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-kursovaya-\u0442\u043E\u0432\u0430\u0440-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-kursovaya-товар', 'Unit | Serializer | i-i-s-kursovaya-товар', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-kursovaya-товар', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:i-i-s-kursovaya-способ1', 'transform:i-i-s-kursovaya-статус-оплаты', 'transform:i-i-s-kursovaya-тип-доставки', 'model:i-i-s-kursovaya-заказ', 'model:i-i-s-kursovaya-клиент', 'model:i-i-s-kursovaya-менеджер', 'model:i-i-s-kursovaya-оплата', 'model:i-i-s-kursovaya-поставщик', 'model:i-i-s-kursovaya-производитель', 'model:i-i-s-kursovaya-товар', 'model:i-i-s-kursovaya-товары', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-kursovaya-\u0442\u043E\u0432\u0430\u0440\u044B-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-kursovaya-товары', 'Unit | Serializer | i-i-s-kursovaya-товары', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-kursovaya-товары', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:i-i-s-kursovaya-способ1', 'transform:i-i-s-kursovaya-статус-оплаты', 'transform:i-i-s-kursovaya-тип-доставки', 'model:i-i-s-kursovaya-заказ', 'model:i-i-s-kursovaya-клиент', 'model:i-i-s-kursovaya-менеджер', 'model:i-i-s-kursovaya-оплата', 'model:i-i-s-kursovaya-поставщик', 'model:i-i-s-kursovaya-производитель', 'model:i-i-s-kursovaya-товар', 'model:i-i-s-kursovaya-товары', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/config/environment', [], function() {
  var prefix = 'ember-app';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('ember-app/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
