document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM is ready!'); // Проверяем, что DOM загрузился

    const sliderContainer = document.querySelector('.slider-container');
    console.log('sliderContainer:', sliderContainer); // Проверяем, нашли ли контейнер
    const slider = sliderContainer.querySelector('.slider');
     console.log('slider:', slider); // Проверяем, нашли ли слайдер
    const slides = slider.querySelectorAll('.slide');
     console.log('slides:', slides); // Проверяем, нашли ли слайды
    const prevButton = sliderContainer.querySelector('.prev');
     console.log('prevButton:', prevButton); // Проверяем, нашли ли кнопку "prev"
    const nextButton = sliderContainer.querySelector('.next');
     console.log('nextButton:', nextButton); // Проверяем, нашли ли кнопку "next"
    let currentSlide = 0;

    function updateSlider() {
        const translateX = `translateX(-${currentSlide * 25}%)`;
        console.log('translateX:', translateX); // Проверяем, какое смещение вычисляется
        slider.style.transform = translateX;
         console.log('slider.style.transform:', slider.style.transform); // Проверяем, какое смещение применено
    }

    prevButton.addEventListener('click', () => {
        console.log('Prev button clicked'); // Проверяем, что клик отслеживается
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
         console.log('currentSlide:', currentSlide); // Проверяем, какое значение currentSlide
        updateSlider();
    });

    nextButton.addEventListener('click', () => {
        console.log('Next button clicked'); // Проверяем, что клик отслеживается
        currentSlide = (currentSlide + 1) % slides.length;
         console.log('currentSlide:', currentSlide); // Проверяем, какое значение currentSlide
        updateSlider();
    });
});

