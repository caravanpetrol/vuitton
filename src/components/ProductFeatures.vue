<!-- eslint-disable max-len -->
<template>
  <div class="pt-10">
    <h2 class="list-label text-base my-3.75">Détails</h2>
    <div class="relative expandable-panel">
      <div
        id="read-more"
        aria-hidden="false"
        :class="[expanded ? 'expanded' : 'minimal', 'expandable-panel__content animate']"
      >
        <div ref="panel">
          <ul>
            <li>Bleu Azur</li>
            <li>Toile Monogram Clouds</li>
            <li>Semelle extérieure en gomme</li>
            <li>Étiquette LV Initiales</li>
            <li>Signature Louis Vuitton sur la languette et la semelle extérieure</li>
            <li>Fabriquée en Italie</li>
          </ul>
        </div>
      </div>
      <button
        @click="expanded = !expanded"
        aria-controls="read-more"
        :aria-expanded="String(expanded)"
        class="expandable-panel__button animate"
      >
        Voir plus
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductFeatures',
  data() {
    return {
      expanded: false,
    };
  },
  /*   mounted() {
    this.matchHeight();
  }, */
  /*   methods: {
    matchHeight() {
      const height = this.$refs.panel.clientHeight;
    },
  }, */
};
</script>
<style scoped>
li {
  @apply list-disc list-inside;
}

.expandable-panel__content {
  @apply block relative overflow-hidden max-h-32.5 mb-6;
  /* display: block;
  position: relative;
  overflow: hidden;
  max-height: 8.125rem;
  margin-bottom: 1.5rem;
  transition: max-height 0.4s linear; */
}
.minimal::after {
  content: '';
  /* background: linear-gradient(0deg, #fff, hsla(0, 0%, 100%, 0)); */
  @apply absolute right-0 bottom-0 left-0 h-16 from-white to-transparent
  bg-gradient-to-t transition duration-300 ease-sine;
  /*   position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  height: 4rem;
  content: '';
  background: linear-gradient(0deg, #fff, hsla(0, 0%, 100%, 0));
  transition: opacity 0.3s cubic-bezier(0.39, 0.575, 0.565, 1); */
}
.expanded {
  @apply max-h-60;
}

.expandable-panel__button {
  @apply shadow-underline text-base leading-5 tracking-wide font-normal;
}
.expandable-panel__button:hover {
  @apply text-grey-bokara text-opacity-60;
}
</style>
