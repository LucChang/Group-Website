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

