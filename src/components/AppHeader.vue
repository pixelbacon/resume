<template lang="html">
  <div class="header">
    <a class="linkedInIcon" alt="View Michael Minor's LinkedIn profile" :href="$root.$data.linkedIn">
      <icon name="linkedin-square" scale="2"></icon>
    </a>
    <div class="container">
      <div class="row justify-content-center">
        <div class=" col-10 col-sm-5 col-md-4 col-print-5">
          <div class="me">
            <img src="../assets/me.jpg" alt="">
          </div>
        </div>
      </div>
      <h1 class="name">
        Michael Minor
      </h1>
      <div class="ct">
        Creative Technologist
      </div>
      <hr class="hidden-xs-down">
      <div class="summaryHead row justify-content-center">
        <div class="col-12 col-md-11 col-lg-9">
          <p>
            Creative Brand Technologist using vast amounts of energy to pursue new business ventures. The fields have varied greatly to which I have been involved, strongly sustaining enthusiasm and passion in my work.
          </p>
        </div>
      </div>
      <div class="summaryDetail row justify-content-center">
        <div class="col-11 col-sm-10 col-lg-7">
          <p>
            From guerrilla marketing to big budget ad campaigns I have helped in one way major or another. Planning, designing, developing, pitching, and brand analysis/improvement have all been major requirements within my pursuits that started when I was 16 years old; {{yearsIn}} years.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-12 screen-only text-center">
          <a class="pdfLink" :href="$root.$data.pdf">Download PDF</a>
        </div>
      </div>
      <div class="printFooter">
        <hr />
        <a href="tel:3125766767">312.576.6767</a>
        ◦ <a :href="('mailto:' + $root.$data.email)">{{$root.$data.email}}</a>
        ◦ <a :href="$root.$data.linkedIn">{{$root.$data.linkedInLiteral}}</a>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
const _name = 'appHeader'

export default {
  name: _name,
  data: () => ({
    yearsIn: moment().diff(moment('19981001'), 'years')
  })
}
</script>

<style lang="scss" scoped>
@import "../components";

.header {
  @extend .app-component;
  background: linear-gradient(0deg, rgba(black, 1), rgba(black, 0.33)), url("../assets/patterns/footer_lodyas.png");
  color: white;
  padding: 4em 0em;
  text-align: center;

  .me {
    border-radius: 999px;
    overflow: hidden;
    box-shadow: 0 0 2em rgba(black, 0.66);
    content: ' ';
    margin-bottom: 1em;

    img {
      width: 100%;
      height: auto;
    }
  }

  .name {
    color: white;
    font-size: 2.2em;
    margin: 0;
  }

  .ct {
    color: lighten(blue, 30);
    font-size: 1.33em;
    margin-bottom: 1em;
  }

  .linkedInIcon {
    @include screen-only();
    position: absolute;
    top: 1em;
    right: 1em;
    color: #0077B5;
  }

  .summaryDetail {
    font-size: 0.9em;
  }

  .pdfLink {
    border: 1px solid $link-color;
    margin: 0 auto;
    padding: 0.4em 0.6em;
    font-size: 0.75em;
    font-weight: bold;
    letter-spacing: 0.1em;
    transition: all 0.25s;

    &:hover {
      color: white;
      background: $link-color;
      border-color: rgba(black, 0.15);
      box-shadow: 0 0 1em rgba(white, 0.25);
      letter-spacing: 0.2em;
      text-decoration: none;
      text-shadow: 0 0 0.33em rgba(black, 0.25), 0 0 1em rgba(white, 0.5);
    }
  }

  .printFooter {
    @include print-only();
  }

  @include print(){
    border: 1px solid lighten(black, 80);
    color: black;
    height: 100vh;
    width: 100vw;
    padding: 0;
    margin: 0;

    .container {
      width: 76vw;
      height: auto;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    .name {
      color: black;
    }

    .summaryDetail {
      color: lighten(black, 20);
    }
  }
}
</style>
