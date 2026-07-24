// Original Interface
interface Car {
  brand: string;
  start(): void;
}

// Declaration merging (interface extension)
interface Car {
  model: string;
  stop(): void;
}

const myVehicle: Car = {
  brand: "VW GTI",
  model: "S1",
  start() {
    console.log("Start");
  },

  stop() {
    console.log("Stop");
  },
};

myVehicle.start();
myVehicle.stop();
