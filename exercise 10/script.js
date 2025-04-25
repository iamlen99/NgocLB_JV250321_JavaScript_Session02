let hour = parseInt(prompt("Nhập giờ (0-23):"));
let minute = parseInt(prompt("Nhập phút (0-59):"));
let second = parseInt(prompt("Nhập giây (0-59):"));

if (
  hour < 0 ||
  hour > 23 ||
  minute < 0 ||
  minute > 59 ||
  second < 0 ||
  second > 59
) {
  console.log("Thời gian nhập không hợp lệ!");
} else {
  let hour12 = hour % 12;
  hour12 = hour12 === 0 ? 12 : hour12;
  let period = hour < 12 ? "AM" : "PM";
  let num0h = hour12 < 10 ? 0 : "";
  let num0m = minute < 10 ? 0 : "";
  let num0s = second < 10 ? 0 : "";

  console.log(
    `${num0h}${hour12}:${num0m}${minute}:${num0s}${second} ${period}`
  );
}
