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

// Add separator animation
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2  // 當元素進入視窗 80% 時觸發
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // 動畫只觸發一次
            }
        });
    }, observerOptions);

    // 選擇所有 separator 元素
    const separators = document.querySelectorAll('.separator');
    separators.forEach(separator => observer.observe(separator));
});

// 照片區域的按鈕控制
document.addEventListener('DOMContentLoaded', function() {
    const nftList = document.querySelector('.activity-photos .nft-list');
    const leftArrow = document.querySelector('.scroll-arrow.scroll-left');
    const rightArrow = document.querySelector('.scroll-arrow.scroll-right');
    
    if (nftList && leftArrow && rightArrow) {
        const items = nftList.children;
        const visibleItems = 4;
        let currentIndex = 0;
        
        // 初始顯示前4張照片
        for (let i = 0; i < Math.min(visibleItems, items.length); i++) {
            items[i].classList.add('active');
        }
        
        // 初始隱藏左箭頭
        leftArrow.style.display = 'none';
        
        // 如果項目數量不超過可見數量，隱藏右箭頭
        if (items.length <= visibleItems) {
            rightArrow.style.display = 'none';
        }
        
        // 向右切換
        rightArrow.addEventListener('click', function() {
            if (currentIndex + visibleItems < items.length) {
                // 隱藏當前顯示的照片
                for (let i = currentIndex; i < currentIndex + visibleItems; i++) {
                    items[i].classList.remove('active');
                }
                
                currentIndex++;
                
                // 顯示新的照片
                for (let i = currentIndex; i < currentIndex + visibleItems; i++) {
                    items[i].classList.add('active');
                }
                
                // 顯示左箭頭
                leftArrow.style.display = 'flex';
                
                // 如果到達最右側，隱藏右箭頭
                if (currentIndex + visibleItems >= items.length) {
                    rightArrow.style.display = 'none';
                }
            }
        });
        
        // 向左切換
        leftArrow.addEventListener('click', function() {
            if (currentIndex > 0) {
                // 隱藏當前顯示的照片
                for (let i = currentIndex; i < currentIndex + visibleItems; i++) {
                    items[i].classList.remove('active');
                }
                
                currentIndex--;
                
                // 顯示新的照片
                for (let i = currentIndex; i < currentIndex + visibleItems; i++) {
                    items[i].classList.add('active');
                }
                
                // 如果回到最左側，隱藏左箭頭
                if (currentIndex === 0) {
                    leftArrow.style.display = 'none';
                }
                
                // 顯示右箭頭
                rightArrow.style.display = 'flex';
            }
        });
    }
});

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault(); // 阻止默認的錨點行為
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth' // 平滑滾動
        });
    });
});

// Add scroll animation
document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll('.item');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = "easeInUp 1s forwards";
            }
        });
    });

    items.forEach(item => observer.observe(item));
});

