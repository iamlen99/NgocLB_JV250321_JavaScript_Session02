let numberA = +prompt("Mời bạn nhập vào số a");
let numberB = +prompt("Mời bạn nhập vào số b");
let operation = prompt("Mời bạn nhập các phép tính (+, -, *, /)");

switch (operation) {
  case "+":
    alert("Kết quả của phép tính trên: " + "a + b = " + (numberA + numberB));
    break;
  case "-":
    alert("Kết quả của phép tính trên: " + "a - b = " + (numberA - numberB));
    break;
  case "*":
    alert("Kết quả của phép tính trên: " + "a * b = " + numberA * numberB);
    break;
  case "/":
    alert("Kết quả của phép tính trên: " + "a / b = " + numberA / numberB);
    break;
    1;
  default:
    alert("Phép tính không hợp lệ!");
}
