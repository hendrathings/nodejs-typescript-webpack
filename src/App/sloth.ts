export class Sloth {

  state: { name: string[]; speed: number; };
  name: string[];

  constructor() {
    this.name = ["sloth 1", "sloth 2"];
    this.state = {
      name: this.name,
      speed: 0.2
    }
  }

  run() {
    // spread
    const nameArr = [...this.name, "hendra added"];
    console.log("from sloth", nameArr);

    // destruction
    const {speed, name} = this.state;
    console.log("speed", speed);
    console.log("name", name);
  }
}