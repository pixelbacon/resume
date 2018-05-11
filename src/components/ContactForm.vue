<template lang="html">
  <div class="contactForm screen-only">
    <h2>Contact Me</h2>
    <p>
      I would love to hear from you, whether it's a new opportunity, seeking advice, anything that comes to mind.
    </p>
    <form class="container-fluid form" action="https://formspree.io/me@pixelbacon.com" method="post">
      <div class="row">
        <div class="col-sm">
          <input class="form-control" type="text" name="name" value="" placeholder="Name" required>
        </div>
        <div class="col-sm">
          <input class="form-control" type="email" name="_replyTo" value="" placeholder="Email" required>
        </div>
        <div class="col-sm">
          <input class="form-control" type="text" name="phone" value="" placeholder="Phone Number" required>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <textarea class="form-control" name="message" rows="8" cols="80" placeholder="Message"></textarea>
        </div>
      </div>
      <div class="row text-center">
        <input class="btn btn-primary" type="submit" name="submit" value="Send">
      </div>
    </form>
  </div>
</template>

<script>
const NAME = 'contactForm'

export default {
  name: NAME
}
</script>

<style lang="scss">
.contactForm {
  .form {
    margin-bottom: 2em;
    padding: 0;

    input,
    textarea {
      margin-bottom: 2em;

      &[type="submit"] {
        margin: 0 auto;
      }
    }
  }
}
</style>
