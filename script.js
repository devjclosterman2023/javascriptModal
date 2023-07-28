const galleryContainer = document.querySelector('.gallery-container');
const modal = document.getElementById('modal');
const modalImage = modal.querySelector('img');
const closeBtn = modal.querySelector('.close');
const prevBtn = modal.querySelector('.prev');
const nextBtn = modal.querySelector('.next');
const pictures = galleryContainer.querySelectorAll('.picture');

let currentIndex = 0;

// Show modal with clicked image
function showModal(imageSrc) {
    modalImage.src = imageSrc;
    modal.style.display = 'block';
}

// Hide modal
function closeModal() {
    modal.style.display = 'none';
}

// Show previous image in the modal
function showPrevImage() {
    currentIndex = (currentIndex - 1 + pictures.length) % pictures.length;
    showModal(pictures[currentIndex].dataset.image);
}

// Show next image in the modal
function showNextImage() {
    currentIndex = (currentIndex + 1) % pictures.length;
    showModal(pictures[currentIndex].dataset.image);
}

// Add click event listeners to each picture
pictures.forEach((picture, index) => {
    picture.addEventListener('click', () => {
        currentIndex = index;
        showModal(picture.dataset.image);
    });
});

// Close modal when clicking on the close button
closeBtn.addEventListener('click', closeModal);

// Navigate to the previous image when clicking the previous arrow
prevBtn.addEventListener('click', showPrevImage);

// Navigate to the next image when clicking the next arrow
nextBtn.addEventListener('click', showNextImage);

// Close modal when clicking outside the modal content
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

// Close modal when pressing the "Escape" key
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeModal();
    }
});









































// const galleryContainer = document.querySelector('.gallery-container');
// const modal = document.getElementById('modal');
// const modalImage = modal.querySelector('img');
// const closeBtn = modal.querySelector('.close');
// const prevBtn = modal.querySelector('.prev');
// const nextBtn = modal.querySelector('.next');
// const pictures = galleryContainer.querySelectorAll('.picture');

// let currentIndex = 0;

// // Show modal with clicked image
// function showModal(imageSrc) {
//     modalImage.src = imageSrc;
//     modal.style.display = 'block';
// }

// // Hide modal
// function closeModal() {
//     modal.style.display = 'none';
// }

// // Show previous image in the modal
// function showPrevImage() {
//     currentIndex = (currentIndex - 1 + pictures.length) % pictures.length;
//     showModal(pictures[currentIndex].dataset.image);
// }

// // Show next image in the modal
// function showNextImage() {
//     currentIndex = (currentIndex + 1) % pictures.length;
//     showModal(pictures[currentIndex].dataset.image);
// }

// // Add click event listeners to each picture
// pictures.forEach((picture, index) => {
//     picture.addEventListener('click', () => {
//         currentIndex = index;
//         showModal(picture.dataset.image);
//     });
// });

// // Close modal when clicking on the close button
// closeBtn.addEventListener('click', closeModal);

// // Navigate to the previous image when clicking the previous arrow
// prevBtn.addEventListener('click', showPrevImage);

// // Navigate to the next image when clicking the next arrow
// nextBtn.addEventListener('click', showNextImage);

// // Close modal when clicking outside the modal content
// modal.addEventListener('click', (event) => {
//     if (event.target === modal) {
//         closeModal();
//     }
// });

// // Close modal when pressing the "Escape" key
// document.addEventListener('keydown', (event) => {
//     if (event.key === 'Escape') {
//         closeModal();
//     }
// });