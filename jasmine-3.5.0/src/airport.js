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
        this._releaseFromHanger(plane);
      } else {
        return "Hanger Full, Plane Can Not Land!";
      }
    }
  };

  takeOff = () => {
    if (this._isStormy()) {
      throw new Error("Stormy Weather, Can Not Take Off!");
    } else {
      if (this._planeAvaliable()) {
        this._dockInHanger();
        return "Plane Successfully Taken Off!";
      } else {
        return "No Plane Avaliable!";
      }
    }
  };

  _isStormy = () => {
    return this.weather.generateWeather();
  };

  _planeAvaliable = () => {
    return this.hanger.length > 0;
  };

  _spaceAvaliable = () => {
    return this.hanger.length < this.capacity;
  };

  _dockInHanger = () => {
    this.hanger.pop();
  };

  _releaseFromHanger = (plane) => {
    this.hanger.push(plane);
  };
}
