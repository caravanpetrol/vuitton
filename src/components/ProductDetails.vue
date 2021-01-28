<template>
  <div>
    <div>
      <span> 1A8AH5 </span>
      <div>
        <button aria-label="product_page_add_to_wishlist" aria-disabled="false" tabindex="0">
          <svg focusable="false" aria-hidden="true">
            <use xlink:href="../assets/images/icons.svg#sprite-navigation-wishlist-off"></use>
          </svg>
        </button>
      </div>
    </div>
    <h1>Sneaker montante Tattoo</h1>

    <div>
      <button aria-expanded="false">
        <span> Taille </span>
        <span> 8 </span>
        <span class="sr-only">Actuellement sélectionné </span>
        <svg focusable="false" aria-hidden="true">
          <use xlink:href="../assets/images/icons.svg#sprite-controls-chevron-right"></use>
        </svg>
      </button>
    </div>

    <div>
      <button>
        <svg focusable="false" aria-hidden="true">
          <use xlink:href="../assets/images/icons.svg#sprite-informations-size-guide"></use>
        </svg>
        <span>Correspondances de taille</span>
      </button>
    </div>
    <div>
      <div>750,00€</div>
      <span> Disponible </span>
    </div>

    <ProductPurchase />

    <div>
      <button>
        <svg focusable="false" aria-hidden="true">
          <use xlink:href="../assets/images/icons.svg#sprite-navigation-geolocalisation"></use>
        </svg>
        <span>Trouver ce produit en magasin</span>
      </button>
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
