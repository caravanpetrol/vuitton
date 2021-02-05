<template>
  <div class="product-features">
    <h2 class="list-label-xl">Détails</h2>
    <div class="expandable-panel">
      <div
        id="read-more"
        aria-hidden="false"
        :class="[expanded ? 'expanded' : 'minimal', 'expandable-panel__content']"
      >
        <div>
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
        class="expandable-panel__button"
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
