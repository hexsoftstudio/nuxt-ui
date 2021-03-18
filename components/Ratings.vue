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
      type: Array,
      required: false,
      default: () => [],
    },
  },
}
</script>

<style scoped>
.ratings__star {
  --rating-star-size: 1.75rem;
  --rating-star-color: orange;

  width: var(--rating-star-size);
  height: var(--rating-star-size);
  fill: var(--rating-star-color);
}
</style>
