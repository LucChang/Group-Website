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
    const photoContainer = document.querySelector('.activity-photos');
    
    if (photoContainer) {
        // 添加左右滑動按鈕
        const leftBtn = document.createElement('button');
        leftBtn.className = 'scroll-btn scroll-left';
        leftBtn.innerHTML = '&larr;';
        
        const rightBtn = document.createElement('button');
        rightBtn.className = 'scroll-btn scroll-right';
        rightBtn.innerHTML = '&rarr;';
        
        const container = document.querySelector('.activity-photos-container');
        container.appendChild(leftBtn);
        container.appendChild(rightBtn);
        
        // 按鈕點擊事件
        leftBtn.addEventListener('click', function() {
            photoContainer.scrollBy({ left: -300, behavior: 'smooth' });
        });
        
        rightBtn.addEventListener('click', function() {
            photoContainer.scrollBy({ left: 300, behavior: 'smooth' });
        });
        
        // 檢查是否需要顯示按鈕
        function checkScrollButtons() {
            const isScrollable = photoContainer.scrollWidth > photoContainer.clientWidth;
            const atStart = photoContainer.scrollLeft <= 10;
            const atEnd = photoContainer.scrollLeft >= photoContainer.scrollWidth - photoContainer.clientWidth - 10;
            
            leftBtn.style.display = isScrollable && !atStart ? 'block' : 'none';
            rightBtn.style.display = isScrollable && !atEnd ? 'block' : 'none';
        }
        
        // 初始檢查和滾動時檢查
        checkScrollButtons();
        photoContainer.addEventListener('scroll', checkScrollButtons);
        window.addEventListener('resize', checkScrollButtons);
    }
});

// 活動照片區域的滑動控制
document.addEventListener('DOMContentLoaded', function() {
    const photoList = document.querySelector('.activity-photos .nft-list');
    const nextBtn = document.querySelector('.scroll-next-btn');
    const prevBtn = document.querySelector('.scroll-prev-btn');
    
    if (photoList && nextBtn && prevBtn) {
        let currentPage = 0;
        const totalItems = photoList.children.length;
        const itemsPerPage = 4; // 每頁顯示4張照片
        const totalPages = Math.ceil(totalItems / itemsPerPage);
        
        // 如果照片數量不足以滾動，隱藏下一頁按鈕
        if (totalItems <= itemsPerPage) {
            nextBtn.style.display = 'none';
        }
        
        // 下一頁按鈕點擊事件
        nextBtn.addEventListener('click', function() {
            if (currentPage < totalPages - 1) {
                currentPage++;
                updateGallery();
            }
        });
        
        // 上一頁按鈕點擊事件
        prevBtn.addEventListener('click', function() {
            if (currentPage > 0) {
                currentPage--;
                updateGallery();
            }
        });
        
        // 更新畫廊顯示
        function updateGallery() {
            const offset = -currentPage * 100; // 100%寬度的偏移
            photoList.style.transform = `translateX(${offset}%)`;
            
            // 顯示/隱藏按鈕
            prevBtn.style.display = currentPage > 0 ? 'flex' : 'none';
            nextBtn.style.display = currentPage < totalPages - 1 ? 'flex' : 'none';
        }
    }
});

