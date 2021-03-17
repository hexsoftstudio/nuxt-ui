<template>
  <div class="cart">
    <div class="cart__image">
      <svg class="cart__image--shopping-cart">
        <use xlink:href="./icons/sprite.svg#icon-shopping-cart"></use>
      </svg>
    </div>
    <div class="cart__label">
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
      default: '5',
    },
  },
}
</script>
