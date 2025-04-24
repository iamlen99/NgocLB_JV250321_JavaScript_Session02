let a = +prompt("Nhập a:");
let b = +prompt("Nhập b:");
let c = +prompt("Nhập c:");

if (a === 0) {
  if (b === 0) {
    if (c === 0) {
      console.log("Phương trình có vô số nghiệm");
    } else {
      console.log("Phương trình vô nghiệm");
    }
  } else {
    const x0 = -c / b;
    console.log(`Phương trình có 1 nghiệm duy nhất x = ${x0}`);
  }
} else {
  const denta = b ** 2 - 4 * a * c;
  if (denta < 0) {
    console.log("Phương trình vô nghiệm");
  } else if (denta === 0) {
    const x = -b / (2 * a);
    console.log(`Phương trình có nghiệm kép x1 = x2 = ${x}`);
  } else {
    const x1 = (-b - Math.sqrt(denta)) / (2 * a);
    const x2 = (-b + Math.sqrt(denta)) / (2 * a);
    console.log(`Phương trình có 2 nghiệm phân biệt: x1 = ${x1}; x2 = ${x2}`);
  }
}
