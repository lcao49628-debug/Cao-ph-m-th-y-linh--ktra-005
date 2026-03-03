let employees = [
    { id: 1, name: "Phạm Thị A", age: 22, salary: 120000, position: "Developer" },
    { id: 2, name: "Phạm Thị C", age: 25, salary: 190000, position: "Developer" },
    { id: 3, name: "Phạm Thị D", age: 30, salary: 170000, position: "Manager" },
    { id: 4, name: "Trần Thị A", age: 28, salary: 180000, position: "Developer" },
    { id: 5, name: "Tạ Thị A", age: 21, salary: 100000, position: "Intern" },
];

const validPositions = ["Developer", "Tester", "Manager", "Intern"];


const displayEmployees = () => {
    if (employees.length === 0) {
        console.log("Danh sách nhân viên trống!");
        return;
    }

    employees.forEach(emp => {
        console.log(
            `ID: ${emp.id} | Name: ${emp.name} | Age: ${emp.age} | Salary: ${emp.salary} | Position: ${emp.position}`
        );
    });
};


const addEmployee = () => {

    let id = +prompt("Nhập ID:");
    if (employees.some(emp => emp.id === id)) {
        alert("ID đã tồn tại, vui lòng chọn ID khác.");
        return;
    }

    let name = prompt("Nhập tên:");
    if (employees.some(emp => emp.name === name)) {
        alert("Tên nhân viên đã tồn tại.");
        return;
    }

    let age = +prompt("Nhập tuổi:");
    let salary = +prompt("Nhập lương:");

    if (age <= 18 || salary <= 0) {
        alert("Tuổi phải lớn hơn 18 và Lương phải là số lớn hơn 0.");
        return;
    }

    let position = prompt("Nhập chức vụ (Developer, Tester, Manager, Intern)");

    if (!validPositions.includes(position)) {
        alert("Chức vụ không hợp lệ. Phải là: Developer, Tester, Manager, Intern");
        return;
    }

    employees.push({ id, name, age, salary, position });
    alert(`Đã thêm nhân viên: ${name}`);
};


const deleteEmployee = () => {
    let name = prompt("Nhập tên nhân viên cần xóa:");

    let index = employees.findIndex(emp => emp.name === name);

    if (index === -1) {
        alert("Tên nhân viên không tồn tại");
        return;
    }

    let confirmDelete = prompt("Bạn có chắc muốn xóa? (yes/no)");

    if (confirmDelete === "yes") {
        employees.splice(index, 1);
        alert("Xóa nhân viên thành công!");
    } else {
        alert("Nhân viên không bị xóa.");
    }
};


const updateEmployee = () => {

    let name = prompt("Nhập tên nhân viên cần cập nhật:");

    let emp = employees.find(e => e.name === name);

    if (!emp) {
        alert("Tên nhân viên không tồn tại!");
        return;
    }

    let newSalary = +prompt("Nhập lương mới:");
    if (newSalary <= 0) {
        alert("Lương phải là số và lớn hơn 0");
        return;
    }

    let newPosition = prompt("Nhập chức vụ mới (Developer, Tester, Manager, Intern)");

    if (!validPositions.includes(newPosition)) {
        alert("Chức vụ không hợp lệ!");
        return;
    }

    emp.salary = newSalary;
    emp.position = newPosition;

    alert(`Đã cập nhật nhân viên: ${emp.name}`);
};


const findEmployee = () => {

    let type = prompt("Tìm theo (1: Tên | 2: Chức vụ)");

    if (type === "1") {

        let name = prompt("Nhập tên:");
        let emp = employees.find(e => e.name === name);

        if (!emp) {
            alert("Không tìm thấy nhân viên!");
        } else {
            console.log(`Nhân viên tìm thấy: ${emp.name}, Lương: ${emp.salary}, Chức vụ: ${emp.position}`);
        }

    } else if (type === "2") {

        let position = prompt("Nhập chức vụ:");

        let list = employees.filter(e => e.position === position);

        if (list.length === 0) {
            alert("Không có nhân viên thuộc chức vụ này");
        } else {
            list.forEach(emp => console.log(emp));
        }
    }
};



const filterByPosition = () => {

    let position = prompt("Nhập chức vụ cần lọc:");

    if (!validPositions.includes(position)) {
        alert("Chức vụ không hợp lệ!");
        return;
    }

    let result = employees.filter(emp => emp.position === position);

    result.forEach(emp => console.log(emp));
};


const calculateTotalSalary = () => {

    let total = employees.reduce((sum, emp) => sum + emp.salary, 0);

    alert(`Tổng lương của công ty hiện tại là: ${total} VND`);
};


const sortBySalary = () => {

    let type = prompt("1: Tăng dần | 2: Giảm dần");

    if (type === "1") {
        employees.sort((a, b) => a.salary - b.salary);
    } else {
        employees.sort((a, b) => b.salary - a.salary);
    }

    displayEmployees();
};


const findBySalaryRange = () => {

    let min = +prompt("Nhập lương thấp:");
    let max = +prompt("Nhập lương cao:");

    if (min < 0 || max < 0 || min >= max) {
        alert("Khoảng lương không hợp lệ!");
        return;
    }

    let result = employees.filter(emp => emp.salary >= min && emp.salary <= max);

    if (result.length === 0) {
        alert("Không có nhân viên trong khoảng lương này");
    } else {
        result.forEach(emp => console.log(emp));
    }
};


let choice;

while (true) {

    choice = prompt(`
     MENU 
    1. Hiển thị danh sách
    2. Thêm nhân viên
    3. Xóa nhân viên
    4. Cập nhật nhân viên
    5. Tìm nhân viên
    6. Lọc theo chức vụ
    7. Tính tổng lương
    8. Sắp xếp lương
    9. Tìm theo khoảng lương
    0. Thoát
    `);

    switch (choice) {
        case "1":
            displayEmployees();
            break;
        case "2":
            addEmployee();
            break;
        case "3":
            deleteEmployee();
            break;
        case "4":
            updateEmployee();
            break;
        case "5":
            findEmployee();
            break;
        case "6":
            filterByPosition();
            break;
        case "7":
            calculateTotalSalary();
            break;
        case "8":
            sortBySalary();
            break;
        case "9":
            findBySalaryRange();
            break;
        case "0":
            alert("Thoát chương trình!");
            break;
        default:
            alert("Lựa chọn không hợp lệ!");
    }

    if (choice === "0") break;
}