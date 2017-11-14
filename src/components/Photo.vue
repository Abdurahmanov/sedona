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

      <div class="multimedia">
        <div class="multimedia__header">
          <h1 class="multimedia__title">Оставьте свой отзыв</h1>
          <p class="multimedia__text">Помогите нашим отелям стать лучше!
            оставьте отзыв о них, а также о посещенных вами достопримечательностях</p>
        </div>

        <div class="multimedia__container-wrapper">
          <div class="multimedia__content">
            <div class="multimedia__img-wrapper">
              <img src="">
            </div>
            <p class="multimedia__title text-small">Неродные просторы</p>
            <p class="multimedia__text text-small">Автор фото: Борис</p>
            <div class="multimedia__likes">
              <p class="multimedia__like">1350</p>
            </div>
          </div>

          <div class="multimedia__content">
            <div class="multimedia__img-wrapper">
              <img src="">
            </div>
            <p class="multimedia__title text-small">Местная растительность</p>
            <p class="multimedia__text text-small">Автор фото: Сергей</p>
            <div class="multimedia__likes">
              <p class="multimedia__like">143</p>
            </div>
          </div>

          <div class="multimedia__content">
            <div class="multimedia__img-wrapper">
              <img src="">
            </div>
            <p class="multimedia__title text-small">Дорога на север</p>
            <p class="multimedia__text text-small">Автор фото: Петр</p>
            <div class="multimedia__likes">
              <p class="multimedia__like">96</p>
            </div>
          </div>

          <div class="multimedia__content">
            <div class="multimedia__img-wrapper">
              <img src="">
            </div>
            <p class="multimedia__title text-small">Мост Дьявола</p>
            <p class="multimedia__text text-small">Автор фото: Антон</p>
            <div class="multimedia__likes">
              <p class="multimedia__like">254</p>
            </div>
          </div>
        </div>
      </div>

      <div class="presentation">
        <div class="presentation__container">
          <h2 class="presentation__title">Все еще сомневаетесь?</h2>
          <p class="presentation__text">Смотрите видеопрезентацию и скорее за билетами, пока они не подорожали в очередной раз!</p>
          <div class="presentation__img-wrapper">
            <img src="">
          </div>
          <div class="presentation__play-video">
            <div class="presentation__range-video">
              <input type="range" value="15"/>
            </div>
            <div class="presentation__settings-video">
              <div class="presentantion__settings-replay">
                <img src="">
              </div>
              <div class="presentantion__creative-commons">
                <img src="">
              </div>
              <div class="presentation__fullscreen">
                <img src="">
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

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

