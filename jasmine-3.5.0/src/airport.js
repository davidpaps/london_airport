"use strict";

class Airport {
  constructor() {
    this.hanger = [];
  }

  landPlane = () => {
    this.hanger.push("plane");
  };
}
