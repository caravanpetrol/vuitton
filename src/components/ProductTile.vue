<template>
  <div>
    <picture>
      <img :sizes="imageSizes" :alt="imageAlt" :srcset="imageSrcset" :src="imageSrc" />
    </picture>
  </div>
</template>

<script>
export default {
  name: 'ProductTile',
  props: {
    imageSizes: {
      type: String,
      required: false,
      default: '(min-width: 48rem) 33.333vw',
    },
    imageAlt: {
      type: String,
      required: false,
      default: 'Sneaker montante Tattoo  Homme Souliers Tous les souliers | LOUIS VUITTON',
    },
    imageSrcset: {
      type: String,
      required: true,
    },
    imageSrc: {
      type: String,
      required: false,
      default: 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==',
    },
  },
};
</script>

<style scoped></style>
