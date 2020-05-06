class Plane {
  constructor() {
    this.fuel = false;
  }

  refuel = () => {
    this.fuel = true;
  };

  defuel = () => {
    this.fuel = false;
  };
}
