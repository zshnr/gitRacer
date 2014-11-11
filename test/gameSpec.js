var chai = require('chai'),
expect = chai.expect,
Browser = require('zombie'),
assert = require('assert'),
browser = new Browser;
Browser.localhost('gitracer.com', 3000)



describe ('The game', function(){
  it('should see the homepage', function(){
    browser.visit('/');
    assert.text('title', 'Git Racer');
  });
});