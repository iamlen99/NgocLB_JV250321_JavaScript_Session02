let mathScore = +prompt("Nhập điểm môn Toán:");
let literatureScore = +prompt("Nhập điểm môn Văn:");
let englishScore = +prompt("Nhập điểm môn Tiếng Anh:");
let averageScore = (mathScore + literatureScore + englishScore) / 3;

if (
  mathScore >= 0 &&
  mathScore <= 10 &&
  literatureScore >= 0 &&
  literatureScore <= 10 &&
  englishScore >= 0 &&
  englishScore <= 10
) {
  if (averageScore < 5) {
    console.log("Học lực Yếu");
  } else if (averageScore >= 5 && averageScore < 6.4) {
    console.log("Học lực Trung Bình");
  } else if (averageScore >= 6.5 && averageScore < 7.9) {
    console.log("Học lực Khá");
  } else {
    console.log("Học lực Giỏi");
  }
} else {
  console.log("Điểm nhập vào không hợp lệ!");
}
