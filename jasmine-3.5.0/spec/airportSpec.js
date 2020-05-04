"use strict";

describe("Airport", function () {
  let airport;

  beforeEach(function () {
    airport = new Airport();
  });

  describe("land plane", function () {
    it("allows a plane to land", function () {
      airport.land("plane");
      expect(airport.hanger.length).toEqual(1);
    });
  });

  describe("take off plane", function () {
    it("allows a plane to take off", function () {
      airport.land("plane");
      airport.land("plane2");
      airport.takeOff();
      expect(airport.hanger.length).toEqual(1);
    });
  });
});
