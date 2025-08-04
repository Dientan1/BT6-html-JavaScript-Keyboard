// 1. Kiểm tra năm nhuận
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
console.log("Năm 2024 có phải năm nhuận?", isLeapYear(2024));
  
// 2. Tính Can Chi theo năm
function getCanChi(year) {
  const can = ['Giáp', 'Ất', 'Bính', 'Đinh', 'Mậu', 'Kỷ', 'Canh', 'Tân', 'Nhâm', 'Quý'];
  const chi = ['Tý', 'Sửu', 'Dần', 'Mão', 'Thìn', 'Tỵ', 'Ngọ', 'Mùi', 'Thân', 'Dậu', 'Tuất', 'Hợi'];
  const canIndex = year % 10;
  const chiIndex = year % 12;
  return `${can[canIndex]} ${chi[chiIndex]}`;
}

// 3. Tìm thứ trong tuần từ ngày/tháng/năm
function getDayOfWeek(day, month, year) {
  const date = new Date(year, month - 1, day);
  const weekdays = ['Chủ nhật', 'Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy'];
  return weekdays[date.getDay()];
}

// 4. Tìm ước chung lớn nhất (ƯCLN)
function gcd(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

// 5. Tìm bội chung nhỏ nhất (BCNN)
function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

// 6. In ra dãy số nguyên tố <= n
function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function listPrimesUpTo(n) {
  const primes = [];
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  return primes;
}
