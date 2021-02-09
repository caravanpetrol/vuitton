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
};
</script>
<style scoped>
li {
  @apply list-disc list-inside;
}
</style>
