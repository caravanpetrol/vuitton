<!-- eslint-disable max-len -->
<template>
  <div class="bg-white-floral">
    <div class="relative py-4 px-vw-lg md:px-vw-sm md:py-1">
      <div class="font-light text-center md:relative">
        <span class="text-base">
          Livraison offerte en 2 à 4 jours ouvrés en France et dès ce soir ou demain à Paris et dans
          les Hauts-de-Seine.
        </span>
        <button
          aria-label="Fermer"
          class="absolute flex items-center justify-center transform top-2 right-2 md:right-0 md:-translate-y-1/2 md:top-1/2"
        >
          <svg focusable="false" aria-hidden="true" class="icon">
            <use xlink:href="../assets/images/icons.svg#sprite-controls-close"></use>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Banner',
};
</script>
