// スムーススクロール
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    });
});

// フェードインアニメーション
function handleScrollAnimation() {
    const elements = document.querySelectorAll(".fade-in");
    elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight * 0.8) {
            element.classList.add("visible");
        }
    });
}

window.addEventListener("scroll", handleScrollAnimation);
window.addEventListener("load", handleScrollAnimation);

// ヘッダーの背景色変更（スクロール時）
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.style.background = "rgba(244, 229, 211, 0.95)";
        header.style.backdropFilter = "blur(10px)";
    } else {
        header.style.background = "linear-gradient(135deg, #f4e5d3 0%, #f9f2e7 100%)";
        header.style.backdropFilter = "none";
    }
});

// モバイルメニュー（簡易版）
function toggleMobileMenu() {
    const navLinks = document.querySelector(".nav-links");
    navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
}

// ページ読み込み時のアニメーション開始
window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});

// ハンバーガーメニュー開閉処理
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    hamburger.classList.toggle("open"); // ← これを追加！
});

// モバイルメニューのリンクをクリックしたらメニューを閉じる
document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
        const navLinks = document.querySelector(".nav-links");
        const hamburger = document.querySelector(".hamburger");

        navLinks.classList.remove("open");
        hamburger.classList.remove("open");
    });
});

// トップへ戻るボタンの表示・非表示制御
const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 800) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }
});

// クリックでトップにスクロール
backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});
