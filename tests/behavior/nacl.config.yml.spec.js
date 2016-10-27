(function() {
  'use strict';
  var assert = require('assert');
  var acl = require('../../');

  describe('Yaml testing', function() {
    var rules;
    beforeEach(function(done) {
      rules = acl.config({
        path: 'tests/config',
        baseUrl: 'api',
        yml: true
      });
      done();
    });

    it('should read the yaml file and convert to json', function() {
      var expectedRule = [{
        resource: 'users',
        methods: ['GET', 'POST', 'DELETE'],
        action: 'allow'
      }];

      assert(rules, true);
      assert(rules.has('user'));
      assert.deepEqual(rules.get('user'), expectedRule);

    });
  });
})();
