<template lang="pug">
  v-container(fill-height fluid).notFound
    v-layout(fill-height align-center)
      v-flex.notFound__content
        h1 Lost?
        p We all get lost sometimes, no worries. But uh... Go back <router-link to="/">home</router-link>.
</template>

<style lang="stylus" scoped>
+b('notFound')
  background: url('../assets/backgrounds/max-bender-770110-unsplash.jpg') center center
  background-size cover

  +e('content')
    background rgba(white, 1)
    box-shadow 0 0 3em rgba(black, 0.5), 0 0 50vh rgba(black, 0.5)
    padding 1em
</style>
