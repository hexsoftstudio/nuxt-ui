<template>
  <div class="avatar-container">
    <div
      v-for="(avatar, index) in avatars"
      :key="index"
      class="avatar"
      :class="{ 'avatar--squeeze-right': isSqueeze }"
    >
      <img
        :src="avatar.imagesrc"
        :alt="avatar.alt"
        class="avatar__photo"
        :class="{
          'avatar__photo--border': isBorder,
        }"
      />
      <span v-if="avatar.notification" class="avatar__notification">
        {{ avatar.notification }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Avatar',
  props: {
    avatars: {
      type: Array,
      required: false,
      default: () => [],
    },
    isSqueeze: {
      type: Boolean,
      required: false,
      default: false,
    },
    isBorder: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
}
</script>

<style scoped>
.avatar-container {
  --color-primary: #2b9fd8;
  --photo-squeeze-default: 1.75rem;
  --photo-size-default: 6rem;

  display: flex;
  align-items: center;
  justify-content: center;
}
.avatar__flow--vertical {
  flex-direction: column;
}
.avatar--squeeze-right {
  margin-right: var(--photo-squeeze-default);
}
.avatar--squeeze-bottom {
  margin-bottom: var(--photo-squeeze-default);
}
.avatar__photo {
  width: var(--photo-size-default);
  height: var(--photo-size-default);
  border-radius: 50%;
  margin-right: 0.6rem;
  margin-bottom: -2rem;
  cursor: pointer;
}
.avatar__photo--border {
  border: 0.2rem solid #fff;
}
.avatar__photo:hover {
  transform: scale(1.25);
}
.avatar__name {
  font-weight: 600;
}
.avatar__notification {
  font-size: calc(0.5rem + (var(--photo-size-default) / 10) * 0.5);
  height: calc(var(--photo-size-default) / 3.6);
  width: calc(var(--photo-size-default) / 3.6);
  border-radius: 50%;
  background-color: var(--color-primary);
  color: #fff;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  left: calc((var(--photo-size-default) / 3) * 2.1);
}
</style>
