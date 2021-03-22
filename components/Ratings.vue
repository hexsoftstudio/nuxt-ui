<template>
  <div id="ratings">
    <svg v-for="(star, index) in stars" :key="index" class="ratings__star">
      <use v-bind="{ 'xlink:href': showSVGStar() }"></use>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'Ratings',
  props: {
    ratings: {
      type: [String, Number],
      required: false,
      default: '0',
    },
  },
  data() {
    return {
      stars: [],
    }
  },
  mounted() {
    for (let $x = 0; $x < parseInt(this.ratings); $x++) {
      this.stars.push('star')
    }
  },
  methods: {
    showSVGStar() {
      return require('./icons/sprite.svg') + '#icon-star'
    },
  },
}
</script>
