document.addEventListener("DOMContentLoaded", () => {
    const yearButtons = document.querySelectorAll(".committee-btn, .committee-btn-active");
    const committeeContainer = document.querySelector(".committee-card-grid-student");

    const committeeData = {
        "8/2568": {
            type: "grid",
            images: [
                "../public/assets/images/committee/8.png",
                "../public/assets/images/committee/9.png",
                "../public/assets/images/committee/10.png",
                "../public/assets/images/committee/11.png",
                "../public/assets/images/committee/12.png",
                "../public/assets/images/committee/13.png",
                "../public/assets/images/committee/14.png",
                "../public/assets/images/committee/15.png",
                "../public/assets/images/committee/16.png",
                "../public/assets/images/committee/17.png",
                "../public/assets/images/committee/18.png",
                "../public/assets/images/committee/19.png",
                "../public/assets/images/committee/20.png",
                "../public/assets/images/committee/21.png",
                "../public/assets/images/committee/22.png",
                "../public/assets/images/committee/23.png",
                "../public/assets/images/committee/24.png",
                "../public/assets/images/committee/25.png",
                "../public/assets/images/committee/26.png",
            ],
        },
        "7/2567": {
            type: "poster",
            images: ["./public/assets/images/archive/committee/committee7.png"],
        },
        "6/2566": {
            type: "poster",
            images: ["./public/assets/images/archive/committee/committee6.png"],
        },
        "5/2565": {
            type: "poster",
            images: ["./public/assets/images/archive/committee/committee5.jpg"],
        },
        "4/2563": {
            type: "poster",
            images: ["./public/assets/images/archive/committee/committee4.jpg"],
        },
        "3/2562": {
            type: "poster",
            images: ["./public/assets/images/archive/committee/committee3.jpg"],
        },
        "2/2561": {
            type: "poster",
            images: ["./public/assets/images/archive/committee/committee2.png"],
        },
        "1/2560": {
            type: "poster",
            images: ["./public/assets/images/archive/committee/committee1.png"],
        },
    };

    function loadCommittee(year) {
        const data = committeeData[year];
        committeeContainer.innerHTML = "";

        committeeContainer.className = data.type === "poster"
            ? "committee-poster-container"
            : "committee-card-grid-student";

        if (data && data.images.length > 0) {
            data.images.forEach(src => {
                const img = document.createElement("img");
                img.src = src;
                img.alt = `กรรมการปี ${year}`;
                committeeContainer.appendChild(img);
            });
        } else {
            committeeContainer.innerHTML = `<p>ไม่มีข้อมูลกรรมการปี ${year}</p>`;
        }

        yearButtons.forEach(b => b.classList.remove("committee-btn-active"));
        yearButtons.forEach(b => {
            if (b.textContent.trim() === year) {
                b.classList.add("committee-btn-active");
            }
        });
    }

    yearButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            const year = btn.textContent.trim();
            loadCommittee(year);
        });
    });

    loadCommittee("8/2568");
});