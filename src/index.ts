export const Result: (a: number, b: number) => number = (a, b) => a + b;

export function multiplicaArgs(...args: number[]): number {
  return args.reduce((ac, valor) => ac * valor, 1);
}

export function concatenaString(...args: Array<string>): string {
  return args.reduce((ac, valor) => ac + valor);
}

const result = multiplicaArgs(1, 2, 3);
const concatena = concatenaString('Ola', 'Tudo', 'Bem');

console.log(result);
console.log(concatena);
