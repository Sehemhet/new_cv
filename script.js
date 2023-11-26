// добавление тени к навигации при скроле
window.addEventListener('scroll', function() {
  if (pageYOffset > 255) {
    document.querySelector('header').classList.add('act_shadow')
  } else {
    document.querySelector('header').classList.remove('act_shadow')
  }
});

// BURGER MENU
function burgerMenu() {
    var header = document.querySelector('header');
    var burger = document.querySelector('.burger');

    if (header) {
        header.classList.toggle('burger_menu');

        setTimeout(function() {
            // Этот код выполнится через одну секунду
            if (header.classList.contains('burger_menu')) {
                burger.classList.add('burger_cross');
            } else {
                burger.classList.remove('burger_cross');
            }
        }, 500);
    }
}
// Обработчик изменения размера окна
window.addEventListener('resize', function() {
    var header = document.querySelector('header');

    if (window.innerWidth > 1280 && header && header.classList.contains('burger_menu')) {
        header.classList.remove('burger_menu');
    }
});
// Обработчик клика на элементы меню
document.querySelectorAll('.burger_nav a').forEach(item => {
    item.addEventListener('click', burgerMenu);
});


    document.addEventListener("DOMContentLoaded", function () {
        // Получаем все элементы article
        const articles = document.querySelectorAll("article");

        // Добавляем обработчик события click для каждого элемента article
        articles.forEach(function (article) {
            article.addEventListener("click", function () {
                // Сначала возвращаем все элементы в исходное положение
                articles.forEach(function (otherArticle) {
                    otherArticle.style.flex = "1 1 5%";
                });

                // Затем устанавливаем текущему элементу новое значение flex
                this.style.flex = "1 1 100%";
            });
        });
    });
