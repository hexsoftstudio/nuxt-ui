<template>
  <div class="socialmedia">
      <h1 v-if="title" class="socialmedia__title">{{ title }}</h1>
      <svg
        v-for="(media, index) in socialmedia"
        :key="index"
        :class="showClass(media)"
      >
        <use v-bind:xlink:href="showSVG(media)"></use>
        <use
          v-bind="{ 'xlink:href': require('./icons/sprite.svg') + showSVG(media) }">
        </use>
      </svg>
    </div>
</template>

<script>
export default {
  name: 'SocialMedia',
  props: {
    title: {
      type: String,
      required: false,
      default: '',
    },
    socialmedia: {
      type: Array,
      required: false,
      default: () => [],
    },
  },
  methods: {
    showClass(media) {
      return "socialmedia__" + media
    },
    showSVG(media) {
      // return "./icons/sprite.svg#icon-" + media
      return "#icon-" + media
    }
  }
}
</script>
