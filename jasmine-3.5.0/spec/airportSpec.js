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

    it("confirms a plane has taken off", function () {
      airport.land("plane");
      expect(airport.takeOff()).toBe("Plane Successfully Taken Off!");
    });
  });

  describe("hanger capacity", function () {
    it("error raised when capacity is full", function () {
      for (let land = 0; land < 20; land++) {
        airport.land("plane");
      }
      console.log(airport.hanger);
      expect(airport.land("plane21")).toEqual(
        "Hanger Full, Plane Can Not Land!"
      );
    });
  });
});
