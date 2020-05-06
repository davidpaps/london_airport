"use strict";

class Airport {
  constructor(capacity = 20) {
    this.hanger = [];
    this.capacity = capacity;
    this.weather = new Weather();
  }

  land = (plane) => {
    if (this.isStormy()) {
      throw new Error("Stormy Weather, Can Not Land!");
    } else {
      if (this.hanger.length < this.capacity) {
        this.hanger.push("plane");
      } else {
        return "Hanger Full, Plane Can Not Land!";
      }
    }
  };

  takeOff = () => {
    if (this.isStormy()) {
      throw new Error("Stormy Weather, Can Not Take Off!");
    } else {
      if (this.hanger.length > 0) {
        this.hanger.pop();
        return "Plane Successfully Taken Off!";
      } else {
        return "No Plane Avaliable!";
      }
    }
  };

  isStormy = () => {
    return this.weather.generateWeather();
  };
}
