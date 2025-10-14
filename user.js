let data = [];
let count = 0;

function addData() {
  const name = prompt("กรอกชื่อข้อมูล:");
  const detail = prompt("กรอกรายละเอียด:");
  if (name && detail) {
    data.push({ id: ++count, name, detail });
    renderTable();
  }
}

function editData() {
  const id = parseInt(prompt("กรอกลำดับที่ต้องการแก้ไข:"));
  const item = data.find((d) => d.id === id);
  if (item) {
    item.name = prompt("ชื่อใหม่:", item.name) || item.name;
    item.detail = prompt("รายละเอียดใหม่:", item.detail) || item.detail;
    renderTable();
  } else {
    alert("❌ ไม่พบข้อมูลที่ระบุ");
  }
}

function deleteData() {
  const id = parseInt(prompt("กรอกลำดับที่ต้องการลบ:"));
  data = data.filter((d) => d.id !== id);
  renderTable();
}

function viewData() {
  alert(
    data.length
      ? data.map((d) => `${d.id}. ${d.name} - ${d.detail}`).join("\n")
      : "ยังไม่มีข้อมูล"
  );
}

function renderTable() {
  const tbody = document.querySelector("#dataTable tbody");
  tbody.innerHTML = "";
  data.forEach((d) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${d.id}</td>
      <td>${d.name}</td>
      <td>${d.detail}</td>
      <td><button onclick="deleteSingle(${d.id})">ลบ</button></td>
    `;
    tbody.appendChild(row);
  });
}

function deleteSingle(id) {
  data = data.filter((d) => d.id !== id);
  renderTable();
}

function logout() {
  window.location.href = "login.html";
}
