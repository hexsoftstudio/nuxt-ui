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

<style scoped>
.socialmedia {
  --socialmedia-size-default: 1.5rem;
  --socialmedia-color-default: #000;
  --socialmedia-color-fill: #2b9fd8;

  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(8, minmax(var(--socialmedia-size-default), min-content));
  grid-template-areas: 'socialmedia';
  grid-gap: 0.2rem;

  align-items: center;
  justify-content: center;
}

.socialmedia--vertical {
  grid-template-rows: repeat(8, minmax(var(--socialmedia-size-default), min-content));
  grid-template-columns: 1fr;
}

.socialmedia__title {
  grid-row: 1 / 1;
  grid-column: 1 / -1;

  font-size: 0.8rem;
  font-weight: bold;
  color: var(--socialmedia-color-fill);
  text-transform: uppercase;
  margin-top: auto;
}

.socialmedia__facebook,
.socialmedia__google,
.socialmedia__instagram,
.socialmedia__linkedin,
.socialmedia__pinterest,
.socialmedia__twitter,
.socialmedia__vimeo,
.socialmedia__youtube {
  width: var(--socialmedia-size-default);
  height: var(--socialmedia-size-default);
  fill: var(--socialmedia-color-default);
  cursor: pointer;
  transition: all .2s;
}

.socialmedia__facebook:link,
.socialmedia__google:link,
.socialmedia__instagram:link,
.socialmedia__linkedin:link,
.socialmedia__pinterest:link,
.socialmedia__twitter:link,
.socialmedia__vimeo:link,
.socialmedia__youtube:link,
.socialmedia__facebook:visited,
.socialmedia__google:visited,
.socialmedia__instagram:visited,
.socialmedia__linkedin:visited,
.socialmedia__pinterest:visited,
.socialmedia__twitter:visited,
.socialmedia__vimeo:visited,
.socialmedia__youtube:visited {
  outline: none;
}

.socialmedia__facebook:hover,
.socialmedia__google:hover,
.socialmedia__instagram:hover,
.socialmedia__linkedin:hover,
.socialmedia__pinterest:hover,
.socialmedia__twitter:hover,
.socialmedia__vimeo:hover,
.socialmedia__youtube:hover {
  transform: scale(1.25);
  fill: var(--socialmedia-color-fill);
}
</style>
