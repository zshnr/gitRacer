process.env.NODE_ENV = 'test';
var connector = require('../src/ghApiConnector');
var chai = require('chai');
var expect = chai.expect;
var Browser = require('zombie');
var ghapiconnector = new connector();

describe('GitHub API Connector', function(){
  var server;

  beforeEach(function() {
    server = sinon.fakeServer.create();
  });

  afterEach(function(){
    server.restore();
  });

  it('Returns success for a valid GitHub Username', function(){
    var callback = sinon.spy();
    ghapiconnector.checkUserName("zrasool88", callback);

    server.requests[0].respond(
      200,
      {"Content-Type": "application/json" },
      JSON.stringify([{id: 1, text: "Provide examples", done: true}])
      );

    assert(callback.calledOnce);

  });

});