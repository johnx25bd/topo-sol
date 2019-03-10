const {
  BN,
  expectEvent,
  shouldFail,
  constants,
  balance,
  send,
  ether
} = require("openzeppelin-test-helpers");

const turf = require('@turf/turf');


const Geo = artifacts.require("Geo");

const geometries = require('geometries.json');

console.log(geometries);

contract('Geo', (accounts) => {
  let geoInstance;

  beforeEach(async function () { // need async here?
    geoInstance = await Geo.deployed();
  });

  it('first test', async () => {

  });

});
