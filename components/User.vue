<template>
  <div class="user">
    <svg v-if="isLogin" class="user__image">
      <use xlink:href="./icons/sprite.svg#icon-user"></use>
    </svg>
    <svg v-if="isLogin" class="user__login">
      <use xlink:href="./icons/sprite.svg#icon-lock-open"></use>
    </svg>
    <span v-if="isLogin" class="user__login--name">{{ name }}</span>
    <svg v-if="!isLogin" class="user__image">
      <use xlink:href="./icons/sprite.svg#icon-user"></use>
    </svg>
    <svg v-if="!isLogin" class="user__logout">
      <use xlink:href="./icons/sprite.svg#icon-lock"></use>
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
}
</script>
