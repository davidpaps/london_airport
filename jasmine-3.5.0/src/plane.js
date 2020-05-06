class Plane {
  constructor() {
    this.fuel = false;
  }

  refuel = () => {
    this.fuel = true;
  };

  _defuel = () => {
    this.fuel = false;
  };

  _fuel = () => {
    return this.fuel;
  };
}
