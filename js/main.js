kiemTraDiem = (diem) => !(diem <= 0);
ketQuaTuyenSinh = () => {
  let diemChuan = document.getElementById('diemChuan').value,
    diemKhuVuc = Number(document.getElementById('diemKhuVuc').value),
    diemDoiTuong = Number(document.getElementById('diemDoiTuong').value),
    diem1 = Number(document.getElementById('diem1').value),
    diem2 = Number(document.getElementById('diem2').value),
    diem3 = Number(document.getElementById('diem3').value);

  if (kiemTraDiem(diem1) && kiemTraDiem(diem2) && kiemTraDiem(diem3)) {
    let tongDiem = diem1 + diem2 + diem3 + diemKhuVuc + diemDoiTuong;
    document.getElementById('tongDiem').innerHTML =
      tongDiem >= diemChuan
        ? `Bạn đã đậu. Tổng điểm: ${tongDiem}`
        : `Bạn đã rớt. Tổng điểm: ${tongDiem}`;
  } else
    document.getElementById('tongDiem').innerHTML =
      'Bạn đã rớt. Do có điểm nhỏ hơn hoặc bằng 0';
};

tinhTienDien = () => {
  const price1 = 500,
    price2 = 650,
    price3 = 850,
    price4 = 1100,
    price5 = 1300;

  let name = document.getElementById('inputName').value,
    soDien = Number(document.getElementById('inputKW').value),
    tienDien = 0;
  0 < soDien && soDien <= 50
    ? (tienDien = soDien * price1)
    : soDien > 50 && soDien <= 100
    ? (tienDien = 50 * price1 + (soDien - 50) * price2)
    : soDien > 100 && soDien <= 200
    ? (tienDien = 50 * price1 + 50 * price2 + (soDien - 100) * price3)
    : soDien > 200 && soDien <= 350
    ? (tienDien =
        50 * price1 + 50 * price2 + 100 * price3 + (soDien - 200) * price4)
    : soDien > 350
    ? (tienDien =
        50 * price1 +
        50 * price2 +
        100 * price3 +
        150 * price4 +
        (soDien - 350) * price5)
    : alert('Số kw phải lớn hơn 0!');
  tienDien = new Intl.NumberFormat('vn-VN').format(tienDien);
  document.getElementById(
    'tienDien'
  ).innerHTML = `Họ tên: ${name}; Tiền điện: ${tienDien} VND`;
};

document.getElementById('btnKetqua').onclick = ketQuaTuyenSinh;
document.getElementById('btnTinhTien').onclick = tinhTienDien;
