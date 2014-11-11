process.env.NODE_ENV = 'test';
var server = require('../server.js');
var chai = require('chai');
var expect = chai.expect;
var Browser = require('zombie')

describe('the homepage', function(){
  var browser;

  before(function(){
    this.server = server.listen(3000)
    browser = new Browser({ site: 'http://localhost:3000' });
  });

  beforeEach(function(done){
    browser.visit('/', done);
  });

  it("should visit the page", function() {
    expect(browser.success).to.be.true;
  });

    it("should have content 'Git Racer'", function(){
      expect(browser.text('h1')).to.equal('Welcome to Git Racer');
    });
});