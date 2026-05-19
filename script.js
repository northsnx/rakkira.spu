document.addEventListener("DOMContentLoaded", () => {
  // --- 🚀 Site Moved Modal (Run this first to ensure it shows) ---
  const modalHTML = `
    <div id="new-site-modal" class="modal-overlay">
        <div class="modal-content">
            <div class="modal-icon">
                <i class="fa-solid fa-rocket"></i>
            </div>
            <h2>ย้ายเว็บไซต์แล้ว!</h2>
            <p>เราได้ย้ายไปยังบ้านใหม่ที่ไฉไลกว่าเดิม คลิกที่ปุ่มด้านล่างเพื่อไปยังเว็บไซต์ใหม่ได้เลย https://rakkiraspu.vercel.app/</p>
            <a href="https://rakkiraspu.vercel.app/" class="modal-btn">ไปยังเว็บไซต์ใหม่</a>
            <button id="close-modal" class="modal-close-text">ปิดหน้านี้</button>
        </div>
    </div>
  `;

  if (!document.getElementById("new-site-modal")) {
    document.body.insertAdjacentHTML('beforeend', modalHTML);
  }

  const modal = document.getElementById("new-site-modal");
  const closeModal = document.getElementById("close-modal");

  if (modal && closeModal) {
    modal.style.display = "flex";
    closeModal.addEventListener("click", () => {
      modal.style.display = "none";
    });
    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.style.display = "none";
    });
  }

  // โหลด Header
  fetch("./src/components/header.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("header").innerHTML = data;

      const menuToggle = document.getElementById("menu-toggle");
      const menu = document.getElementById("menu");

      if (menuToggle && menu) {
        menuToggle.addEventListener("click", () => {
          menu.classList.toggle("active");
        });
      }
    })
    .catch(err => console.error("❌ โหลด header ไม่ได้:", err));

  // โหลด Footer
  fetch("./src/components/footer.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("Footer").innerHTML = data;

      // ใส่ปุ่ม Back to Top หลัง Footer โหลดเสร็จ
      const backToTopButton = document.getElementById("back-to-top");
      if (backToTopButton) {
        window.addEventListener("scroll", () => {
          if (window.scrollY > 100) {
            backToTopButton.style.display = "block";
          } else {
            backToTopButton.style.display = "none";
          }
        });

        backToTopButton.addEventListener("click", () => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        });
      }
    })
    .catch(err => console.error("❌ โหลด Footer ไม่ได้:", err));

  // Swiper JS (Add safety check)
  if (typeof Swiper !== 'undefined' && document.querySelector('.swiper')) {
    new Swiper('.swiper', {
      loop: true,
      slidesPerView: 3,
      spaceBetween: 10,
      grabCursor: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        768: { slidesPerView: 4 },
        1024: { slidesPerView: 5 }
      }
    });
  }
});

