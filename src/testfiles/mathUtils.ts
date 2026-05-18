export const PI = 3.14159;

export function add(a: number, b: number): number {
  return a + b;
}

export function subtract(a: number, b: number): number {
  return a - b;
}

export function multiply(a: number, b: number): number {
  return a * b;
}

export function checkOut(abc: number | string | boolean): string {
  let output: string = "No result";
  if (typeof abc === "number") {
    output = `The number is ${abc}`;
  } else if (typeof abc === "string") {
    output = `The string is "${abc}"`;
  } else if (typeof abc === "boolean") {
    output = `The boolean is ${abc}`;
  }

  return output;
}

export function checkIntersection(): string {
  interface Person {
    name: string;
  }
  interface Employee {
    salary: number;
  }
  type StaffMember = Person & Employee;

  const staff: StaffMember = { name: "Reza", salary: 200000 };

  return `Staff Member: ${staff.name}, Salary: ${staff.salary}`;
}

export function checkGeneric<T>(inp: T[]): T {
  return inp[0];
}
