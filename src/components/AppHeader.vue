<template lang="html">
  <div class="header hidden-print">
    <div class="">
      <div class="row justify-content-center">
        <div class=" col-8 col-sm-4 col-md-3">
          <div class="me">
            <img src="static/me.jpg" alt="">
          </div>
        </div>
      </div>

      <h1 class="name">
        Michael Minor
      </h1>
      <div class="ct">
        Creative Technologist
      </div>
      <hr>
    </div>
    <div class="summary">
      <div class="row justify-content-center">
        <p class="col-12 col-md-10 col-lg-9">
          Creative Brand Technologist using vast amounts of energy to pursue new business ventures. The fields have varied greatly to which I have been involved and that alone has been a strong reason for such an enthusiasm and passion in my work.
        </p>
      </div>
      <div class="row justify-content-center">
        <p class="col-12 col-sm-10 col-lg-7">
          <small>
            From guerrilla marketing to big budget ad campaigns I have helped in one way major or another. Planning, designing, developing, pitching, and brand analysis/improvement have all been major requirements within my pursuits that started when I was 15 years old.
          </small>
        </p>
      </div>
    </div>
    <a class="linkedIn" :href="$root.$data.linkedIn">
      <icon name="linkedin-square" scale="2"></icon>
    </a>
  </div>
</template>

<script>
const _name = 'appHeader'

export default {
  name: _name
}
</script>

<style lang="scss" scoped>
@import "../components";

.header {
  @extend .app-component;

  background: linear-gradient(0deg, rgba(black, 1), rgba(black, 0.33)), url("static/patterns/footer_lodyas.png");
  color: white;
  padding: 4em 1em;
  text-align: center;

  .me {
    border-radius: 999px;
    overflow: hidden;
    box-shadow: 0 0 2em rgba(black, 0.66);
    content: ' ';
    margin-bottom: 2em;

    img {
      width: 100%;
      height: auto;
    }
  }

  .name {
    color: white;
    margin: 0;
  }

  .ct {
    color: lighten(blue, 30);
    font-size: 1.33em;
    margin-bottom: 1em;
  }

  .linkedIn {
    position: absolute;
    top: 1em;
    right: 1em;
    color: #0077B5;
  }
}
</style>
