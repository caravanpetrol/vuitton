<template>
  <div class="product__details">
    <div class="product__details-head">
      <span class="product__details-sku"> 1A8AH5 </span>
      <div>
        <button
          aria-label="product_page_add_to_wishlist__button"
          aria-disabled="false"
          tabindex="0"
        >
          <svg focusable="false" aria-hidden="true" class="icon">
            <use xlink:href="../assets/images/icons.svg#sprite-navigation-wishlist-off"></use>
          </svg>
        </button>
      </div>
    </div>
    <h1 class="product__title">Sneaker montante Tattoo</h1>

    <div class="product-variations">
      <button aria-expanded="false" class="button-selector">
        <span class="button-selector__title"> Taille </span>
        <span class="button-selector__value"> 8 </span>
        <span class="sr-only">Actuellement sélectionné </span>
        <svg focusable="false" aria-hidden="true" class="button-selector__icon icon--sm">
          <use xlink:href="../assets/images/icons.svg#sprite-controls-chevron-right"></use>
        </svg>
      </button>
    </div>

    <div class="product-size-guide">
      <button class="product-size-guide__button">
        <svg focusable="false" aria-hidden="true" class="icon">
          <use xlink:href="../assets/images/icons.svg#sprite-informations-size-guide"></use>
        </svg>
        <span class="product-size-guide__button-text">Correspondances de taille</span>
      </button>
    </div>

    <div class="product__price-stock">
      <div class="product__price">750,00€</div>
      <span class="product-stock-indicator"> Disponible </span>
    </div>

    <ProductPurchase />

    <div>
      <button class="product-locate-in-store">
        <svg focusable="false" aria-hidden="true" class="icon">
          <use xlink:href="../assets/images/icons.svg#sprite-navigation-geolocalisation"></use>
        </svg>
        <span>Trouver ce produit en magasin</span>
      </button>
    </div>
    <div class="product-description">
      <p>
        Cette sneaker montante Tattoo s'habille de toile Monogram Clouds bleue, l'un des éléments
        phares du défilé Automne-Hiver 2020 de Louis Vuitton. Ce soulier se distingue par sa
        silhouette épurée sublimée par une garniture en cuir blanc et une semelle extérieure en
        gomme blanche. Il s'agrémente d'une étiquette LV Initiales en gomme.
      </p>
    </div>

    <ProductFeatures />

    <div class="product-care">
      <button class="button-selector">
        <span class="button-selector__title">Matières et entretien</span>
        <svg focusable="false" aria-hidden="true" class="button-selector__icon icon--sm">
          <use xlink:href="../assets/images/icons.svg#sprite-controls-chevron-right"></use>
        </svg>
      </button>
    </div>

    <ProductReinsurance />
  </div>
</template>

<script>
import ProductPurchase from '@/components/ProductPurchase.vue';
import ProductFeatures from '@/components/ProductFeatures.vue';
import ProductReinsurance from '@/components/ProductReinsurance.vue';

export default {
  components: {
    ProductPurchase,
    ProductFeatures,
    ProductReinsurance,
  },
  name: 'ProductDetails',
};
</script>
