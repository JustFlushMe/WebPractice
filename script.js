// Картинка об онлайн занятиях
var image = document.getElementById('myimage');

// Самый первый заголовок
var text = document.getElementById('main_header')

// Начальное значение отступа самого первого заголовка
let currentPadding = parseFloat(getComputedStyle(text).paddingLeft);

// Абзац под самым первым заголовком
var text2 = document.getElementById('main_abz')

// Переменная, которая изначальное задает значение "видимый" для абзаца выше
let isVisible = true;

// Анимация
function blinkText() {
    isVisible = !isVisible;
    text2.style.visibility = isVisible ? 'visible' : 'hidden';

    setTimeout(blinkText, 500);
}
blinkText();


// Анимация на картинку (Совместные онлайн занятия)
image.addEventListener('mouseover', function() {
  image.classList.add("dark")
});

image.addEventListener('mouseout', function() {
  image.classList.remove('dark');
});


// Анимация на текст. При наведении на "Языковая академия LANGTIME" - она смещается на 20 пикселей. Убираем курсор - задается изначальное положение
text.addEventListener('mouseover', function() {
    
    let newPadding = currentPadding + 20;
    text.style.paddingLeft = newPadding + 'px';
  });

  text.addEventListener('mouseout', function() {
    let newPadding = currentPadding;
    text.style.paddingLeft = newPadding;
  });

