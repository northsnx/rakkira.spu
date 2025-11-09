document.addEventListener("DOMContentLoaded", () => {
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

  // Swiper JS
  const swiper = new Swiper('.swiper', {
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
});
