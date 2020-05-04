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

    it("needs a plane in the hanger to take off", function () {
      expect(airport.takeOff()).toEqual("No Plane Avaliable!");
    });
  });

  describe("hanger capacity", function () {
    it("can have default capacity of 20", function () {
      expect(airport.capacity).toEqual(20);
    });

    it("error raised when capacity is full", function () {
      for (let land = 0; land < 20; land++) {
        airport.land("plane");
      }
      expect(airport.land("plane21")).toEqual(
        "Hanger Full, Plane Can Not Land!"
      );
    });

    it("can have a different capacity if specified", function () {
      let largeAirport = new Airport(30);
      expect(largeAirport.capacity).toEqual(30);
    });

    it("error raised when capacity is full for largeAirport", function () {
      let largeAirport = new Airport(30);
      for (let land = 0; land < 30; land++) {
        largeAirport.land("plane");
      }
      expect(largeAirport.land("plane31")).toEqual(
        "Hanger Full, Plane Can Not Land!"
      );
    });
  });
});
