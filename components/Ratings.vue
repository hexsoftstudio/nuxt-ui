<template>
  <div id="ratings">
    <svg v-for="(star, index) in stars" :key="index" class="ratings__star">
      <use xlink:href="./icons/sprite.svg#icon-star"></use>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'Ratings',
  props: {
    stars: {
      type: Number,
      required: false,
      default: 5,
    },
  },
}
</script>
