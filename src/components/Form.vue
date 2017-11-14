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

      <div class="feedback">
        <div class="feedback__header">
          <h1 class="feedback__title">Оставьте свой отзыв</h1>
          <p class="feedback__text">Помогите нашим отелям стать лучше!
            оставьте отзыв о них, а также о посещенных вами достопримечательностях</p>
        </div>

        <div class="feedback__form">
          <div class="feedback__form-FIO">
            <div class="feedback_form-FIO-description">
              <h2 class="feedback__title">Представьтесь, пожалуйста</h2>
              <p class="feedback__text">Имя:</p>
              <input class="input input_hvr input_active" type="text" name="FIO" value="Петр" required>
            </div>
            <div class="feedback__form-description">
              <p class="feedback__text">Фамилия:</p>
              <input class="input_hvr input_active" type="text" name="FIO" value="Иванов" required>
            </div>
            <div class="feedback__form-description">
              <p class="feedback__text">Отчество:</p>
              <input class="input_hvr input_active" type="text" name="FIO" value="Александрович">
            </div>
          </div>

          <div class="feedback__form-contacts">
            <div class="feedback__form-contacts-description">
              <h2 class="feedback__title">Контактная информация:</h2>
              <p class="feedback__text">Контактный телефон:</p>
              <input class="input_hvr input_active" type="text" required name="Введите телефон">
              <p class="phone-error">Ошибка, перепроверьте номер</p>
              <div class="feedback__form-img-wrapper">
                <img src="" alt="phone">
              </div>
              <p class="feedback__text">Электронная почта</p>
              <input class="input_hvr input_active" type="text" required name="Введите e-mail">
              <div class="feedback__form-img-wrapper">
                <img src="" alt="email">
              </div>
            </div>
          </div>

          <div class="feedback__form-inputs">
            <h2 class="feedback__title">Ваше общее впечатление:</h2>
            <div class="feedback__input">
              <input class="feedback-input-btn radio-btn" type="radio">Скорее положительное
              <input class="feedback-input-btn radio-btn" type="radio">Скорее отрицательное
              <input class="feedback-input-btn radio-btn" type="radio">Затрудняюсь ответить
            </div>
          </div>

          <div class="feedback__form-visit-place">
            <h2 class="feedback__title">Посещенные достопримечательности:</h2>
            <div class="feedback__input">
              <input class="feedback-input-btn radio-btn" checked type="checkbox">Мост Дьявола
              <input class="feedback-input-btn radio-btn" checked type="checkbox">Слайд-парк
              <input class="feedback-input-btn radio-btn" type="checkbox">Гора-Колокол
              <input class="feedback-input-btn radio-btn" checked type="checkbox">Красные скалы
            </div>
          </div>
        </div>

        <div class="feedback__emotions">
          <h2 class="feedback__title">Опишите свои эмоции:</h2>
          <textarea rows="5" cols="25" placeholder="Опишите подробно все свои восторги"></textarea>
          <div class="feedback__emotions-btn">
            <button class="btn btn_blue">Отправить отзыв</button>
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

