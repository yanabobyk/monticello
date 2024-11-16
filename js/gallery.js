'use strict'

const images = document.querySelectorAll(".gallery__item img");
let imgSrc;
let currentIndex;

// get images src onclick
images.forEach((img, index) => {
    img.addEventListener("click", (e) => {
        imgSrc = e.target.src;
        console.log(imgSrc);
        currentIndex = index;
        imgModal(imgSrc);
    });
});

//creating the modal
let imgModal = (src) => {
    const modal = document.createElement("div");
    modal.setAttribute("class", "modal");
    //add the modal to the main section or the parent element
    document.querySelector(".main").append(modal);

    const prevBtn = document.createElement("i");
    // prevBtn.textContent = "<";
    prevBtn.setAttribute("class", "fas fa-angle-left prevBtn");
    prevBtn.addEventListener("click", () => {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = images.length - 1;
        }
        const newSrc = images[currentIndex].src;
        newImage.setAttribute("src", newSrc);
    });
    modal.append(prevBtn);

    const newImage = document.createElement("img");
    newImage.setAttribute("src", src);
    modal.append(newImage);

    

    const nextBtn = document.createElement("i");
    nextBtn.setAttribute("class", "fas fa-angle-right nextBtn");
    nextBtn.addEventListener("click", () => {
        currentIndex++;
        if (currentIndex >= images.length) {
            currentIndex = 0;
        }
        const newSrc = images[currentIndex].src;
        newImage.setAttribute("src", newSrc);
    });
    modal.append(nextBtn);

    const closeBtn = document.createElement("i");
    closeBtn.setAttribute("class", "fas fa-times closeBtn");
    //close function
    closeBtn.onclick = () => {
        modal.remove();
    };
    modal.append(closeBtn);

    return modal;
};

let touchStartX = null;
let touchStartY = null;

modal.addEventListener("touchstart", (event) => {
    touchStartX = event.touches[0].clientX;
    touchStartY = event.touches[0].clientY;
});

modal.addEventListener("touchmove", (event) => {
    if (touchStartX === null || touchStartY === null) {
        return;
    }

    const touchEndX = event.touches[0].clientX;
    const touchEndY = event.touches[0].clientY;
    const diffX = touchStartX - touchEndX;
    const diffY = touchStartY - touchEndY;

    if (Math.abs(diffX) > Math.abs(diffY)) {
        if (diffX > 0) {
            nextBtn.click();
        } else {
            prevBtn.click();
        }
    }

    touchStartX = null;
    touchStartY = null;
});

imgModal();


