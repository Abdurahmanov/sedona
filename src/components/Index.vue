<template>
  <div class="container">

    <!-- header -->
    <header class="header">
      <nav class="menu">
        <ul class="menu__list">
          <li class="menu__item"><a href="#">Главная</a></li>
          <li class="menu__item"><a href="#">Фото и видео</a></li>
          <li class="menu__item"><a href="#">Форма отзыва</a></li>
          <li class="menu__item"><a href="#">Html Academy</a></li>
        </ul>
        <div class="logo">
          <img src="" alt="logotype">
        </div>
        <div class="menu__toogle"></div>
      </nav>
    </header>

    <!-- main -->
    <main class="main">
      <div class="welcome">
        <div class="welcome__text"></div>
        <div class="welcome__banner"><img class="small" src="http://placehold.it/320x389" alt="welcome banner"></div>
      </div>

      <section class="advantages">
        <div class="advantages__header">
          <h2 class="advantages__header-title">Седона - небольшой городок в Аризоне, заслуживающий большего!</h2>
          <p class="advantages__header-text">Рассмотрим 5 причин, по которым сегодня Седона круче чем Гранд Каньон!</p>
        </div>

        <div class="row">
          <div class="column column_one">
            <div class="feature big">
              <h3 class="advantages__title">Настоящий городок</h3>
              <span class="advantages__number">— №1 — </span>
              <p class="advantages__text">Седона не аттракцион для туристов, там течет своя жизнь</p>
            </div>
          </div>
          <div class="column column_two">
            <div class="advantages__image-wrapper">
              <img class="small" src="http://placehold.it/320x260" alt="Седона"/>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="column column_one">
            <div class="feature small">
              <h3 class="advantages__title icon icon__home"><strong>Жилье</strong></h3>
              <p class="advantages__text">Рекомендуем пожить в настоящем мотеле, всё как в кино!</p>
            </div>
          </div>

          <div class="column column_one">
            <div class="feature small">
              <h3 class="advantages__title icon icon__souvenirs"><strong>Сувениры</strong></h3>
              <p class="advantages__text">Не только китайского, но и местного производства!</p>
            </div>
          </div>

          <div class="column column_one">
            <div class="feature small">
              <h3 class="advantages__title icon icon__food"><strong>Еда</strong></h3>
              <p class="advantages__text">Всегда заказывай фирменный бургер, вы не разочаруетесь!</p>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="column column_one">
            <div class="feature big">
              <h2 class="advantages__title">Там есть мост дьявола</h2>
              <span class="advantages__number">— №2 — </span>
              <p class="advantages__text">Да, по нему можно пройти! Если конечно вы осмелитесь</p>
            </div>
          </div>
          <div class="column column_two">
            <div class="advantages__image-wrapper">
              <img src="http://placehold.it/800x400"/>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="column column_one">
            <div class="feature color_gray">
              <h2 class="advantages__title">Небольшая площадь</h2>
              <span class="advantages__number">— №3 — </span>
              <p class="advantages__text">Все достопримеча-тельности находятся очень близко</p>
            </div>
          </div>

          <div class="column column_one">
            <div class="feature color_gray">
              <h2 class="advantages__title">Красивая дорога</h2>
              <span class="advantages__number">— №4 — </span>
              <p class="advantages__text">Ехать в седону из Лас-Вегаса совсем не скучно!</p>
            </div>
          </div>

          <div class="column column_one">
            <div class="feature color_gray">
              <h3 class="advantages__title">Мало туристов</h3>
              <span class="advantages__number">— №5 — </span>
              <p class="advantages__title">Большинство едет в Гранд Каньон и толпится там</p>
            </div>
          </div>
        </div>

        <section class="search">
          <h1 class="search__title">Заинтересовались?</h1>
          <p class="search__text">Укажите предполагаемые даты поездки и мы покажем вам лучшие предложения гостиниц в седоне</p>
          <div class="search__btn-find">
            <button class="btn btn_blue">Найти гостиницу</button>
          </div>
        </section>
      </section>

      <div class="state-map__wrapper">
        <div class="state-map">
          <img src="http://placehold.it/1200x350">
        </div>
      </div>
    </main>

    <!-- footer -->
    <footer class="footer">
      <div class="footer_hashtag-text">
        <h2><strong>#visitdona</strong></h2>
      </div>
      <div class="footer__social">
        <div class="social_tweet"></div>
        <div class="social_fb"></div>
        <div class="social_vk"></div>
      </div>
      <div class="footer__htmlacademy">
        <p>разработано</p>
      </div>
    </footer>
  </div>
</template>

<script>
  export default {
    data () {
      return {

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

