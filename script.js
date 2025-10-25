document.addEventListener("DOMContentLoaded", () => {
  // โหลด Header
  fetch("./src/components/header.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("header").innerHTML = data;

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


  // Swiper JS
  const swiper = new Swiper('.swiper', {
    loop: true, // วนไม่รู้จบ
    slidesPerView: 3, // แสดงทีละ 3 รูป
    spaceBetween: 10,
    grabCursor: true, // เปลี่ยนเคอร์เซอร์เป็นมือ
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



