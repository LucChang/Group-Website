document.getElementById('view-more-btn').addEventListener('click', function() {
    const hiddenItems = document.querySelectorAll('.sellers .item.hidden');
    
    if (this.textContent === 'View More') {
        hiddenItems.forEach(item => {
            item.classList.add('show');
        });
        this.textContent = 'View Less';
    } else {
        hiddenItems.forEach(item => {
            item.classList.remove('show');
        });
        this.textContent = 'View More';
    }
});


let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 5000); // Change image every 5 seconds
}

// Split Text Animation
document.addEventListener('DOMContentLoaded', function() {
  // 當頁面載入時觸發動畫
  setTimeout(function() {
    const splitHeading = document.querySelector('.split-heading');
    if (splitHeading) {
      splitHeading.classList.add('animate');
    }
  }, 500); // 延遲 500ms 開始動畫
  
  // 當滾動到標題位置時也可以觸發動畫（可選）
  function checkVisibility() {
    const splitHeading = document.querySelector('.split-heading');
    if (!splitHeading) return;
    
    const rect = splitHeading.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    
    if (rect.top <= windowHeight * 0.75) {
      splitHeading.classList.add('animate');
    } else {
      splitHeading.classList.remove('animate');
    }
  }
  
  // 監聽滾動事件
  window.addEventListener('scroll', checkVisibility);
  // 初始檢查
  checkVisibility();
});

