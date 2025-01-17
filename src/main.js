const buttons = document.querySelectorAll(".btn-tabs");

// Thêm Class Active
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        buttons.forEach((btn) => {
            btn.classList.remove("active");
        });
        button.classList.add("active");
    });
});

// Bài 1
document.querySelector("#btnSalary").addEventListener("click", () => {
    const salaryPerDay = document.getElementById("salaryInput-1").value;
    const workingDays = document.getElementById("salaryInput-2").value;
    const totalSalary = salaryPerDay * workingDays;
    if (!isNaN(totalSalary)) {
        document.getElementById(
            "txtSalary"
        ).innerHTML = `Lương: ${totalSalary} VND`;
    } else {
        document.getElementById("txtSalary").innerHTML =
            "Vui lòng nhập giá trị là số hợp lệ!";
    }
});

// Bài 2
document.querySelector("#btnTB").addEventListener("click", () => {
    let temp = 0;
    let n = document.querySelectorAll(".form-input");
    for (let i = 0; i < n.length; i++) {
        temp += Number(n[i].value);
    }
    if (!isNaN(temp)) {
        document.getElementById(
            "txtTB"
        ).innerHTML = `Trung Bình Của Năm Số Trên Là: ${temp} `;
    } else {
        document.getElementById("txtTB").innerHTML =
            "Vui lòng nhập giá trị là số hợp lệ!";
    }
});

// Bài 3
document.querySelector("#btnCurrency").addEventListener("click", () => {
    const money = document.getElementById("money").value;
    const conversion = new Intl.NumberFormat("vn-VN").format(23500 * money);

    document.getElementById(
        "txtCurrency"
    ).innerHTML = `Tiền Sau Quy Đổi: ${conversion} VND`;
});

// Bài 4
document.querySelector("#btnCal").addEventListener("click", () => {
    const width = document.getElementById("width").value;
    const height = document.getElementById("height").value;
    const perimeter = width * height;
    const area = (width + height) * 2;
    if (!isNaN(perimeter) && !isNaN(area)) {
        document.getElementById(
            "txtCal"
        ).innerHTML = `Chu Vi Là: ${perimeter}, Diên Tích là: ${area}`;
    } else {
        document.getElementById("txtCal").innerHTML =
            "Vui lòng nhập giá trị là số hợp lệ!";
    }
});
