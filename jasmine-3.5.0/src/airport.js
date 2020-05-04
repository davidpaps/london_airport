"use strict";

class Airport {
  constructor() {
    this.hanger = [];
  }

  land = () => {
    this.hanger.push("plane");
  };

  takeOff = () => {
    this.hanger.pop();
  };
}
