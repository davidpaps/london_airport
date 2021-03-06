"use strict";

class Airport {
  constructor(capacity = 20) {
    this.hanger = [];
    this.capacity = capacity;
    this.weather = new Weather();
  }

  land = (plane) => {
    if (this._isStormy()) {
      throw new Error("Stormy Weather, Can Not Land!");
    } else {
      if (this._spaceAvaliable()) {
        this._dockInHanger(plane);
        this._deFuel(plane);
        return "Plane Successfully Landed!";
      } else {
        throw new Error("Hanger Full, Plane Can Not Land!");
      }
    }
  };

  takeOff = () => {
    if (!this._planeAvaliable()) {
      throw new Error("No Plane Avaliable!");
    }

    if (!this.hanger.slice(-1)[0].fuel) {
      throw new Error("Please Refuel Before Take Off!");
    }

    if (!this._isStormy()) {
      this._releaseFromHanger();
      return "Plane Successfully Taken Off!";
    } else {
      throw new Error("Stormy Weather, Can Not Take Off!");
    }
  };

  _isStormy = () => {
    return this.weather.generateWeather();
  };

  _deFuel = (plane) => {
    return plane._defuel;
  };

  _planeAvaliable = () => {
    return this.hanger.length > 0;
  };

  _spaceAvaliable = () => {
    return this.hanger.length < this.capacity;
  };

  _releaseFromHanger = () => {
    this.hanger.pop();
  };

  _dockInHanger = (plane) => {
    this.hanger.push(plane);
  };
}
