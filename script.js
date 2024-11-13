const images = [
    'certificate1.png',
    'certificate2.png',
    'certificate3.png',
    'certificate4.png',
    'certificate5.png',
    'certificate6.png'
];

let isSingleView = false;

function displayImages() {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = '';

    if (isSingleView) {
        // نمایش تمام تصاویر در حالت تکی
        images.forEach(image => {
            const imgElement = document.createElement('a');
            imgElement.href = image;  // برای فعال شدن Fancybox
            imgElement.setAttribute('data-fancybox', 'gallery'); // برای گروه‌بندی تصاویر
            imgElement.setAttribute('data-caption', 'Certificate'); // توضیح تصویر

            const img = document.createElement('img');
            img.src = image;
            img.alt = 'Certificate';
            imgElement.appendChild(img);
            gallery.appendChild(imgElement);
        });

        gallery.className = 'single-view';
    } else {
        // نمایش تصاویر به صورت گرید
        images.forEach(image => {
            const imgElement = document.createElement('a');
            imgElement.href = image;  // برای فعال شدن Fancybox
            imgElement.setAttribute('data-fancybox', 'gallery');
            imgElement.setAttribute('data-caption', '');

            const img = document.createElement('img');
            img.src = image;
            img.alt = 'Certificate';
            imgElement.appendChild(img);
            gallery.appendChild(imgElement);
        });

        gallery.className = 'grid-view';
    }
}

document.getElementById('gridViewIcon').addEventListener('click', () => {
    isSingleView = false;
    toggleActiveView();
    displayImages();
});

document.getElementById('singleViewIcon').addEventListener('click', () => {
    isSingleView = true;
    toggleActiveView();
    displayImages();
});

function toggleActiveView() {
    document.getElementById('gridViewIcon').classList.toggle('active', !isSingleView);
    document.getElementById('singleViewIcon').classList.toggle('active', isSingleView);
}

displayImages();
