"use strict";

describe("Airport", function () {
  let airport;

  beforeEach(function () {
    airport = new Airport();
  });

  describe("land plane", function () {
    it("allows a plane to land", function () {
      airport.landPlane("plane");
      expect(airport.hanger.length).toEqual(1);
    });
  });
});
