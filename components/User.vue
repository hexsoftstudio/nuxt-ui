<template>
  <div class="user">
    <svg v-if="isLogin" class="user__image">
      <use v-bind="{ 'xlink:href': showSVG('user') }"></use>
    </svg>
    <svg v-if="isLogin" class="user__login">
      <use v-bind="{ 'xlink:href': showSVG('lock-open') }"></use>
    </svg>
    <span v-if="isLogin" class="user__login--name">{{ name }}</span>
    <svg v-if="!isLogin" class="user__image">
      <use v-bind="{ 'xlink:href': showSVG('user') }"></use>
    </svg>
    <svg v-if="!isLogin" class="user__logout">
      <use v-bind="{ 'xlink:href': showSVG('lock') }"></use>
    </svg>
    <span v-if="!isLogin" class="user__logout--register">Register</span>
  </div>
</template>

<script>
export default {
  name: 'User',
  props: {
    isLogin: {
      type: Boolean,
      required: false,
      default: false,
    },
    name: {
      type: String,
      required: false,
      default: '',
    },
  },
  methods: {
    showClass(media) {
      return "socialmedia__" + media
    },
    showSVG(icon) {
      return require('./icons/sprite.svg') + "#icon-" + icon
    },
  },
}
</script>
