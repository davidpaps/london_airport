"use strict";

class Airport {
  constructor(capacity = 20) {
    this.hanger = [];
    this.capacity = capacity;
  }

  land = () => {
    if (this.hanger.length < this.capacity) {
      this.hanger.push("plane");
    } else {
      return "Hanger Full, Plane Can Not Land!";
    }
  };

  takeOff = () => {
    this.hanger.pop();
    return "Plane Successfully Taken Off!";
  };
}
