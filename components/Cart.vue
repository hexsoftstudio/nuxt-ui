<template>
  <div class="cart">
    <div class="cart__image">
      <svg class="cart__image--shopping-cart">
        <use xlink:href="./icons/sprite.svg#icon-shopping-cart"></use>
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
}
</script>

<style scoped>
.cart {
  --color-primary: #2b9fd8;
  --shopping-cart-size: 3rem;
  --shopping-cart-color: green;

  display: grid;
  grid-template-rows: min-content;
  grid-template-columns: min-content;
  grid-template-areas: 'cart';

  align-items: center;
  justify-content: center;
}
.cart__image {
  grid-row-start: 1;
  grid-column-start: 1;
}
.cart__image--shopping-cart {
  width: var(--shopping-cart-size);
  height: var(--shopping-cart-size);
  fill: var(--shopping-cart-color);
}
.cart__label {
  grid-row: 1;
  grid-column: 1;
  z-index: 2;

  width: min-content;
  justify-self: center;
  align-self: start;
  margin-top: calc(var(--shopping-cart-size) / 6);
}
.cart__label--count {
  font-size: calc(0.42rem + (var(--shopping-cart-size) / 10) * 0.6);
  height: calc(var(--shopping-cart-size) / 3);
  width: calc(var(--shopping-cart-size) / 3);
  border-radius: 50%;
  background-color: var(--color-primary);
  color: #fff;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
