# London Airport

A simple Object Orientated app, simulating an airport - functions via the console on a web browser. Test driven in JavaScript ES6 with the Jasmine library, this showcases good coding prncipals: Encapsulation, DRY, SRP, TDD. Built on the a set of user stories. The 'spyOn' feature of Jasmine was also used to seperate the concerns of the spec files.

---

## User Stories

```
As an air traffic controller
So I can get passengers to a destination
I want to instruct a plane to land at an airport

As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct a plane to take off from an airport and confirm that it is no longer in the airport

As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full

As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate

As an air traffic controller
To ensure safety
I want to prevent takeoff when weather is stormy

As an air traffic controller
To ensure safety
I want to prevent landing when weather is stormy
```

---

## How to Run

Clone this repo, and from the command line navigate to the [_London Airport_](london_airport).

Right click on the `SpecRunner.html` file and select `Copy Path`. Paste this into the Google Chrome Web Browser.

Right click, and open the chrome Developer Tools by selecting `Inspect`. Clcik the `Console` tab at the top. You can then type in the following:

```
let plane = new Plane()
let airport = new Airport()

```

This will instantiate the object needed for the app. You can then type in the following to action the objects accordingly:

```
airport.land(plane)
```

---

To run the test suite (Jasmine), follow the instructions above to open the SpecRunner. The Jasmine test suite will appear with \_ passing tests.
