

export const LEVELS = [
  { id: 1, label: "Addition", operation: "+" },
  { id: 2, label: "Subtraction", operation: "-" },
  { id: 3, label: "Multiplication", operation: "*" },
  { id: 4, label: "Division", operation: "/" }
];

export function generateQuestion(operation) {
  const a = Math.floor(Math.random() * 10) + 1;
  const b = Math.floor(Math.random() * 10) + 1;
  let answer;
  switch (operation) {
    case "+":
      answer = a + b;
      break;
    case "-":
      answer = a - b;
      break;
    case "*":
      answer = a * b;
      break;
    case "/":
      answer = a / b;
      break;
  }
  return { a, b, answer };
}