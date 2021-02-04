<!-- eslint-disable max-len -->
<template>
  <div>
    <button
      aria-expanded="false"
      class="flex items-center justify-between w-full text-base font-normal leading-5 tracking-wide border-t border-b border-wild-sand h-18"
    >
      <span class="mr-4 font-medium"> Taille </span>
      <span class="flex-1 text-right"> 8 </span>
      <span class="sr-only">Actuellement sélectionné </span>
      <svg focusable="false" aria-hidden="true" class="ml-4 icon-sm">
        <use xlink:href="../assets/images/icons.svg#sprite-controls-chevron-right"></use>
      </svg>
    </button>
  </div>
</template>
<script>
export default {
  name: 'ProductVariations',
};
</script>
