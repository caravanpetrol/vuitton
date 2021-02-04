<!-- eslint-disable max-len -->
<template>
  <div class="w-1/3 pt-12 px-vw-sm pb-vw-sm">
    <div class="flex items-center justify-end mb-2">
      <span class="flex-1 text-sm font-medium leading-none tracking-wider"> 1A8AH5 </span>
      <div>
        <button aria-label="product_page_add_to_wishlist" aria-disabled="false" tabindex="0">
          <svg focusable="false" aria-hidden="true" class="icon">
            <use xlink:href="../assets/images/icons.svg#sprite-navigation-wishlist-off"></use>
          </svg>
        </button>
      </div>
    </div>
    <h1 class="mb-10 font-bold leading-10 tracking-normal uppercase text-title">
      Sneaker montante Tattoo
    </h1>

    <ProductVariations />

    <div class="text-right">
      <button class="py-4 pl-6 button-flex">
        <svg focusable="false" aria-hidden="true" class="icon">
          <use xlink:href="../assets/images/icons.svg#sprite-informations-size-guide"></use>
        </svg>
        <span
          class="ml-2 text-base font-normal leading-5 tracking-wide animate shadow-underline hover:text-grey-bokara hover:text-opacity-60"
          >Correspondances de taille</span
        >
      </button>
      <!---->
    </div>
    <div class="flex items-center pt-10">
      <div class="flex-auto text-lg font-bold leading-5 tracking-normal">750,00€</div>
      <span aria-hidden="true" class="flex-auto block px-2 text-3xl text-right text-green-600"
        >•</span
      >
      <span class="list-label"> Disponible </span>
    </div>

    <ProductPurchase />

    <div>
      <button>
        <svg focusable="false" aria-hidden="true">
          <use xlink:href="../assets/images/icons.svg#sprite-navigation-geolocalisation"></use>
        </svg>
        <span>Trouver ce produit en magasin</span>
      </button>
      <!---->
    </div>
    <div>
      <p>
        Cette sneaker montante Tattoo s'habille de toile Monogram Clouds bleue, l'un des éléments
        phares du défilé Automne-Hiver 2020 de Louis Vuitton. Ce soulier se distingue par sa
        silhouette épurée sublimée par une garniture en cuir blanc et une semelle extérieure en
        gomme blanche. Il s'agrémente d'une étiquette LV Initiales en gomme.
      </p>
    </div>

    <ProductFeatures />

    <div>
      <button>
        <span>Matières et entretien</span>
        <svg focusable="false" aria-hidden="true">
          <use xlink:href="../assets/images/icons.svg#sprite-controls-chevron-right"></use>
        </svg>
      </button>
      <!---->
    </div>

    <ProductReinsurance />
  </div>
</template>

<script>
import ProductVariations from '@/components/ProductVariations.vue';
import ProductPurchase from '@/components/ProductPurchase.vue';
import ProductFeatures from '@/components/ProductFeatures.vue';
import ProductReinsurance from '@/components/ProductReinsurance.vue';

export default {
  components: {
    ProductVariations,
    ProductPurchase,
    ProductFeatures,
    ProductReinsurance,
  },
  name: 'ProductDetails',
};
</script>
