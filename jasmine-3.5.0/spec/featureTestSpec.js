describe("Feature", function () {
  let airport;
  let plane;
  let planeTwo;

  beforeEach(function () {
    airport = new Airport();
    plane = new Plane();
    planeTwo = new Plane();
  });

  describe("lands", function () {
    it("lands a plane, and the fuel is empty", function () {
      spyOn(airport, "_isStormy").and.returnValue(false);
      airport.land(plane);
      expect(plane.fuel).toEqual(false);
      expect(airport.hanger.length).toEqual(1);
    });
  });

  describe("take off", function () {
    it("fuel is full and plane takes off", function () {
      spyOn(airport, "_isStormy").and.returnValue(false);
      airport.land(plane);
      plane.refuel();
      airport.land(planeTwo);
      planeTwo.refuel();
      airport.takeOff();
      expect(plane.fuel).toEqual(true);
      expect(airport.hanger.length).toEqual(1);
    });
  });

  describe("lands and takes off", function () {
    it("lands a plane, refuels, and then takes off", function () {
      spyOn(airport, "_isStormy").and.returnValue(false);
      airport.land(plane);
      airport.land(planeTwo);
      planeTwo.refuel();
      airport.takeOff();
      expect(airport.hanger[0]).toBe(plane);
      expect(airport.hanger.length).toEqual(1);
    });
  });
});
