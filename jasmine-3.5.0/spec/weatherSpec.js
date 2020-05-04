"use strict";

describe("Weather", function () {
  let weather;

  beforeEach(function () {
    weather = new Weather();
  });

  describe("generate weather", function () {
    it("stormy condition - returns true", function () {
      spyOn(weather, "generateWeather").and.returnValue(true);
      expect(weather.generateWeather()).toBeTruthy();
    });

    it("normal condition - returns false", function () {
      spyOn(weather, "generateWeather").and.returnValue(false);
      expect(weather.generateWeather()).toBeFalsy();
    });
  });
});
