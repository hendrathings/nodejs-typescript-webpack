export class Fibonacci {
  static calculate(num) {
    if(num <= 1) {
      return 1;
    }

    const result = Fibonacci.calculate(num - 1) + Fibonacci.calculate(num - 2);

    console.log(`Fibonacci.calculate(${num}): ${result}`)

    return result;
  }
}