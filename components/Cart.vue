<template>
  <div class="cart">
    <div class="cart__image">
      <svg class="cart__image--shopping-cart">
        <use v-bind="{ 'xlink:href': showSVGCart() }"></use>
      </svg>
    </div>
    <div v-if="count" class="cart__label">
      <span class="cart__label--count">
        {{ count }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cart',
  props: {
    count: {
      type: String,
      required: false,
      default: '',
    },
  },
  methods: {
    showSVGCart() {
      return require('./icons/sprite.svg') + '#icon-shopping-cart'
    },
  },
}
</script>
