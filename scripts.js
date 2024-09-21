// Functionality for slideshow (remains the same)
let slideIndex = 0;
showSlides();

function showSlides() {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");

        for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
        }

        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1; }

        for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
        }

        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
        setTimeout(showSlides, 5000); // Change every 5 seconds
}

// Function to go to a specific slide when the user clicks a dot
function currentSlide(n) {
        slideIndex = n;
        showSlides();
}

// Gallery Filter
function filterGallery(category) {
        let items = document.getElementsByClassName("mockup-item");

        for (let i = 0; i < items.length; i++) {
                if (category === 'all' || items[i].getAttribute('data-category') === category) {
                        items[i].style.display = 'block'; // Show matching items
                } else {
                        items[i].style.display = 'none'; // Hide non-matching items
                }
        }

        // Remove active class from all buttons
        let buttons = document.getElementsByClassName("filter-button");
        for (let i = 0; i < buttons.length; i++) {
                buttons[i].classList.remove("active");
        }

        // Add active class to the clicked button
        document.querySelector(`[data-category="${category}"]`).classList.add("active");
}