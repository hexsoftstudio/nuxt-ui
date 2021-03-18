<template>
  <div class="user">
      <svg class="user__image">
        <use xlink:href="./icons/sprite.svg#icon-user"></use>
      </svg>
      <svg v-if="!isLogin" class="user__logout">
        <use xlink:href="./icons/sprite.svg#icon-lock"></use>
      </svg>
      <span v-if="!isLogin" class="user__logout--register">Register</span>
      <svg v-if="isLogin" class="user__login">
        <use xlink:href="./icons/sprite.svg#icon-lock-open"></use>
      </svg>
      <span v-if="isLogin" class="user__login--name">John S.</span>
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
  },
}
</script>

<style scoped>
.user {
    --user-size-default: 3rem;
    --user-lock-size: 1rem;
    --user-color-default: #000;
    --user-color-fill: #2b9fd8;
  
    display: grid;
    grid-template-rows: minmax(var(--shopping-cart-size), min-content);
    grid-template-columns: repeat(2, minmax(var(--shopping-cart-size), min-content));
    grid-template-areas: 'user';

    align-items: center;
    justify-content: center;
    cursor: pointer;
}

.user__image {
    grid-row-start: 1;
    grid-column-start: 1;

    width: var(--user-size-default);
    height: var(--user-size-default);
    fill: var(--user-color-default);

    box-sizing: content-box;
    border-radius: 50%;
    transition: all .2s;
}

.user__image--bordered {
    border: 2px solid #fff;
}

.user__image:link,
.user__image:visited {
    outline: none;
}

.user__image:hover {
    transform: scale(1.05);
    fill: var(--user-color-fill);
}

.user__logout {
    grid-row: 1;
    grid-column: 1;
    z-index: 2;

    width: var(--user-lock-size);
    height: var(--user-lock-size);
    fill:red;
    border: 1px solid red;

    box-sizing: content-box;
    align-self: flex-end;
    border-radius: 50%;
    position: relative;
    left: 65%;
}

.user__logout--register {
    grid-row: 1;
    grid-column: 2;

    font-size: 0.8rem;
    font-family: inherit;
    font-weight: 400;
}

.user__login {
    grid-row: 1;
    grid-column: 1;
    z-index: 2;

    width: var(--user-lock-size);
    height: var(--user-lock-size);
    fill: green;
    border: 1px solid green;
    background-color: white;

    box-sizing: content-box;
    align-self: flex-end;
    border-radius: 50%;
    position: relative;
    left: 65%;
}

.user__login--name {
    grid-row: 1;
    grid-column: 2;

    font-size: 0.8rem;
    font-family: inherit;
    font-weight: 400;
}
</style>
