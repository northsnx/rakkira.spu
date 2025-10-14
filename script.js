document.addEventListener("DOMContentLoaded", () => {
  // โหลด Header
  fetch("./src/components/header.html")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("header").innerHTML = data;

      // ✅ toggle menu หลังจาก header โหลดเสร็จ
      const menuToggle = document.getElementById("menu-toggle");
      const menu = document.getElementById("menu");
      if (menuToggle && menu) {
        menuToggle.addEventListener("click", () => {
          menu.classList.toggle("active");
        });
      }
    })
    .catch((err) => console.error("❌ โหลด header ไม่ได้:", err));

  // โหลด Footer
  fetch("./src/components/footer.html")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("Footer").innerHTML = data;
    })
    .catch((err) => console.error("❌ โหลด Footer ไม่ได้:", err));

  // โหลด 404 page
  fetch("./src/components/404.html")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("404").innerHTML = data;
    })
    .catch((err) => console.error("❌ โหลด 404 ไม่ได้:", err));
});


fetch('data-doc.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('link-container');
    data.links.forEach(link => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
          <h3>${link.title}</h3>
          <p class="small">${link.subTitle}</p>
          <div class="actions">
            <a class="btn primary" href="${link.url}" target="_blank" rel="noopener">เปิดลิงก์</a>
            <a class="btn ghost" href="#" onclick="copyLink(event,'${link.url}')">คัดลอก</a>
          </div>
      `;
      container.appendChild(card);
    });
  })
  .catch(error => {
    console.error('ไม่สามารถโหลดข้อมูลได้:', error);
  });

// ฟังก์ชันคัดลอกลิงก์
function copyLink(event, url) {
  event.preventDefault();
  navigator.clipboard.writeText(url)
    .then(() => {
      alert('คัดลอกลิงก์เรียบร้อย ✅');
    })
    .catch(err => {
      console.error('คัดลอกไม่สำเร็จ:', err);
    });
}