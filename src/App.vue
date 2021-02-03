<template>
  <div id="app">
    <div>
      <Banner />
      <header class="header">
        <div class="header__container">
          <HeaderTools />
          <HeaderNavigation />
        </div>
      </header>
    </div>
    <div class="product__wrap">
      <ProductImages />
      <ProductDetails />
    </div>
    <!-- <ProductCrossSell />
    <footer role="contentinfo">
      <FooterBreadcrumb />
      <FooterNavigation />
    </footer> -->
  </div>
</template>

<script>
import Banner from './components/Banner.vue';
import HeaderTools from './components/HeaderTools.vue';
import HeaderNavigation from './components/HeaderNavigation.vue';
import ProductImages from './components/ProductImages.vue';
import ProductDetails from './components/ProductDetails.vue';
/* import ProductCrossSell from './components/ProductCrossSell.vue';
import FooterBreadcrumb from './components/FooterBreadcrumb.vue';
import FooterNavigation from './components/FooterNavigation.vue'; */

export default {
  name: 'App',
  components: {
    Banner,
    HeaderTools,
    HeaderNavigation,
    ProductImages,
    ProductDetails,
    /* ProductCrossSell,
    FooterBreadcrumb,
    FooterNavigation, */
  },
};
</script>
