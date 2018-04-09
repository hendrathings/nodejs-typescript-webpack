import { Fibonacci } from './fibonacci';
import { Sloth } from './sloth';
import Templating from './templating';

export default class App {
  run() {
    console.log("hello world");

    new Sloth().run();

    Fibonacci.calculate(10);

    console.log(new Templating().parse({ name: "hendra", company: "<b>GitHub</b>" }));
  }
}