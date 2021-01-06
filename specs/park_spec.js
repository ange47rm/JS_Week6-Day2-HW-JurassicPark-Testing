const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');
const { isObject } = require('util');

describe('Park', function() {

  let dinosaur1;
  let dinosaur2;
  let dinosaur3;
  let dinosaur4;

  let park;

  beforeEach(function () {

    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('triceratops', 'herbivore', 30);
    dinosaur3 = new Dinosaur('stegosaurus', 'carnivore', 70);
    dinosaur4 = new Dinosaur('velociraptor', 'carnivore', 25);
    
    park = new Park ("Jurassic Park", 30, [dinosaur1, dinosaur2, dinosaur3])

  })

  it('should have a name', function (){
    assert.strictEqual ('Jurassic Park', park.name)
  });

  it('should have a ticket price', function (){
    assert.strictEqual (30, park.entryFee)
  });

  it('should have a collection of dinosaurs', function (){
    assert.strictEqual ('object', (typeof park.dinosaurs))
  });
    

  it('should be able to add a dinosaur to its collection', function (){
    park.addDinosaur(dinosaur4)
    const expected = (park.dinosaurs.lenght + 1)
    assert.strictEqual (expected, park.dinosaurs.lenght)
  });


  it('should be able to remove a dinosaur from its collection');

  it('should be able to find the dinosaur that attracts the most visitors');

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
