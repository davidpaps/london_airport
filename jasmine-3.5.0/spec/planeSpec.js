"use strict";

describe("Plane", function () {
  let plane;
  let airport;

  beforeEach(function () {
    plane = new Plane();
    airport = jasmine.createSpyObj("airport", ["land"]);
  });

  describe("land", function () {
    it("can land at an airport", function () {
      airport.land(plane);
      expect(airport.land).toHaveBeenCalledWith(plane);
    });
  });

  describe("fuel", function () {
    it("can be refueled", function () {
      plane.refuel();
      expect(plane.fuel).toEqual(true);
    });

    it(" has no fuel after landing", function () {
      airport.land(plane);
      expect(plane.fuel).toEqual(false);
    });
  });
});
