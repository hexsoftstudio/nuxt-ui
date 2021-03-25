<template>
  <div class="progress-bar">
    <div class="progress-bar__left">{{ ltext}}</div>
    <div class="progress-bar__bar">
      <div
        class="progress-bar__bar--width"
        v-bind:style="styleObject"
      ></div>
    </div>
    <div class="progress-bar__right">{{ rtext }}</div>
  </div>
</template>

<script>
export default {
  name: 'ProgressBar',
  props: {
    ltext: {
      type: [String, Number],
      required: false,
      default: '0',
    },
    barwidth: {
      type: String,
      required: false,
      default: '0',
    },
    rtext: {
      type: [String, Number],
      required: false,
      default: '0',
    },
  },
	data() {
		return {
			styleObject: {
				'--progress-bar-width': this.barwidth,
				width: 'var(--progress-bar-width)'
			},
		}
	}
}
</script>
