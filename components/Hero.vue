<template>
  <section class="hero-container">
      <img
        v-if="isImage"
        class="hero__image"
        :src="hero.img"
      />
      <video
        v-else
        class="hero__video"
        :poster="hero.poster"
        playsinline
        autoplay
        muted
        loop
      >
        <source :src="hero.webm" type="video/webm">
        <source :src="hero.mp4" type="video/mp4">
      </video>
      <div
        v-if="hero.detail"
        class="hero__detail"
        :class="{ 'hero__detail--right': hero.detail.positionRight }"
      >
        <h1>{{ hero.detail.title }}</h1>
        <div class="hero__detail--text">
          <p><a :href="hero.detail.kicker.link">{{ hero.detail.kicker.text }}</a></p>
          <p>{{ hero.detail.text }}</p>
          <button>{{ hero.detail.button.text }}</button>
        </div>
      </div>
    </section>
</template>

<script>
export default {
  name: 'Hero',
  props: {
    isImage: {
      type: Boolean,
      required: false,
      default: false,
    },
    hero: {
      type: Object,
      required: false,
      default: '',
    },
  },
}
</script>
