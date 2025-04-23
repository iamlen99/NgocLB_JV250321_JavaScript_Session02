let userName = prompt("Nhập tên tài khoản:");

if (userName === "ADMIN") {
  let password = prompt("Nhập mật khẩu:");
  if (password === "TheMaster") {
    console.log("Welcome");
  } else if (password === null) {
    console.log("Cancelled");
  } else {
    console.log("Wrong password");
  }
} else if (userName === null) {
  console.log("Cancelled");
} else {
  console.log("I Don't know you");
}
