var gitRacer = require("../gitracer.js")

describe('gitRacer', function() {

  describe('Api', function() {

    it('Pulls github Usernames', function() {
      expect(gitRacer.username()).toEqual("Scully87")
    });

  });

});