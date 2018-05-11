<template lang="html">
  <div class="coverLetter visible-print-block">
    <div class="centerContainer">
      <div class="container">
        <h1 class="name">
          Michael Minor
        </h1>
        <h2 class="title">
          Creative Technologist
        </h2>
        <div class="qrCode"></div>
      </div>
    </div>
  </div>
</template>

<script>
const NAME = 'coverLetter'

export default {
  name: NAME
}
</script>

<style lang="scss" scoped>
@import "../components";

.coverLetter {
  @extend .app-component;
  background: url("/static/symphony.png");
  height: 100vh;
  width: 100vw;

  .centerContainer {
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);

    .container {
      text-align: center;
    }
  }

  .name {
    color: black;
    font-size: 3em;
    margin-bottom: 0;
  }

  .title {
    color: darken(blue, 23);
    font-size: 1.33em;
  }


  .qrCode {
    content: url(https://chart.googleapis.com/chart?cht=qr&chs=150x150&chl=https://linkedin.com/in/whydoyouwork&choe=UTF-8);
    width: 100px;
    height: 100px;
    margin: 0 auto;
  }
}

</style>
