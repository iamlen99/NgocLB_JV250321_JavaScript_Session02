let year = +prompt("Nhập 1 năm bất kì:");
if (year % 4 === 0) {
  if (year % 100 === 0) {
    if (year % 400 === 0) {
      console.log("Đây là năm nhuận!");
    } else {
      console.log("Đây không phải là năm nhuận!");
    }
  } else {
    console.log("Đây là năm nhuận!");
  }
} else {
  console.log("Đây không phải là năm nhuận!");
}
