"use strict";

describe("Airport", function () {
  let airport;
  let plane;
  let planeTwo;

  beforeEach(function () {
    airport = new Airport();
    plane = jasmine.createSpyObj("plane", ["fuel"]);
    planeTwo = jasmine.createSpy("planeTwo");
  });

  describe("land plane", function () {
    it("allows a plane to land", function () {
      spyOn(airport, "_isStormy").and.returnValue(false);
      airport.land(plane);
      expect(airport.hanger.length).toEqual(1);
    });
  });

  describe("take off plane", function () {
    it("allows a plane to take off", function () {
      spyOn(airport, "_isStormy").and.returnValue(false);
      airport.land(planeTwo);
      airport.land(plane);
      airport.takeOff();
      expect(airport.hanger.length).toEqual(1);
    });

    it("confirms a plane has taken off", function () {
      spyOn(airport, "_isStormy").and.returnValue(false);
      airport.land(plane);
      expect(airport.takeOff()).toBe("Plane Successfully Taken Off!");
    });

    it("needs a plane in the hanger to take off", function () {
      spyOn(airport, "_isStormy").and.returnValue(false);
      expect(airport.takeOff()).toEqual("No Plane Avaliable!");
    });
  });

  describe("hanger capacity", function () {
    it("can have default capacity of 20", function () {
      expect(airport.capacity).toEqual(20);
    });

    it("error raised when capacity is full", function () {
      spyOn(airport, "_isStormy").and.returnValue(false);
      for (let land = 0; land < 20; land++) {
        airport.land(plane);
      }
      expect(airport.land(planeTwo)).toEqual(
        "Hanger Full, Plane Can Not Land!"
      );
    });

    it("can have a different capacity if specified", function () {
      let largeAirport = new Airport(30);
      expect(largeAirport.capacity).toEqual(30);
    });

    it("error raised when capacity is full for largeAirport", function () {
      let largeAirport = new Airport(30);
      spyOn(largeAirport, "_isStormy").and.returnValue(false);
      for (let land = 0; land < 30; land++) {
        largeAirport.land(plane);
      }
      expect(largeAirport.land(planeTwo)).toEqual(
        "Hanger Full, Plane Can Not Land!"
      );
    });
  });

  describe("stormy weather", function () {
    it("raises an error when the weather is stormy and plane tries to take off", function () {
      spyOn(Math, "random").and.returnValue(1);
      airport.land(plane);
      spyOn(airport, "_isStormy").and.returnValue(true);
      expect(function () {
        airport.takeOff();
      }).toThrowError("Stormy Weather, Can Not Take Off!");
    });

    it("raises an error when the weather is stormy and a plane tries to land", function () {
      spyOn(airport, "_isStormy").and.returnValue(true);
      expect(function () {
        airport.land(plane);
      }).toThrowError("Stormy Weather, Can Not Land!");
    });
  });
});
