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

// 水平滑動照片區域的按鈕控制
document.addEventListener('DOMContentLoaded', function() {
    const nftList = document.querySelector('.activity-photos .nft-list');
    const leftArrow = document.querySelector('.scroll-arrow.scroll-left');
    const rightArrow = document.querySelector('.scroll-arrow.scroll-right');
    
    if (nftList && leftArrow && rightArrow) {
        let scrollPosition = 0;
        const itemWidth = 398; // 項目寬度 + 間距
        const visibleItems = 3; // 可見項目數量
        const totalItems = nftList.children.length;
        const maxScroll = (totalItems - visibleItems) * itemWidth;
        
        // 如果項目數量不超過可見數量，隱藏右箭頭
        if (totalItems <= visibleItems) {
            rightArrow.style.display = 'none';
        }
        
        // 向右滾動
        rightArrow.addEventListener('click', function() {
            if (scrollPosition < maxScroll) {
                scrollPosition += itemWidth;
                nftList.style.transform = `translateX(-${scrollPosition}px)`;
                
                // 顯示左箭頭
                leftArrow.style.display = 'flex';
                
                // 如果到達最右側，隱藏右箭頭
                if (scrollPosition >= maxScroll) {
                    rightArrow.style.display = 'none';
                }
            }
        });
        
        // 向左滾動
        leftArrow.addEventListener('click', function() {
            if (scrollPosition > 0) {
                scrollPosition -= itemWidth;
                nftList.style.transform = `translateX(-${scrollPosition}px)`;
                
                // 如果回到最左側，隱藏左箭頭
                if (scrollPosition === 0) {
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

