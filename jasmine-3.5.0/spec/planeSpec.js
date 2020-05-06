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
});
