<template>
  <div id="app">
    <div>
      <Banner />
      <header id="header" class="relative shadow-header">
        <div>
          <HeaderTools />
          <HeaderNavigation />
        </div>
      </header>
    </div>
    <div class="flex flex-wrap border-b border-wild-sand">
      <ProductImages />
      <ProductDetails />
    </div>
    <!-- <ProductCrossSell /> -->
    <!-- <footer role="contentinfo">
      <FooterBreadcrumb />
      <FooterNavigation />
    </footer> -->
  </div>
</template>

<script>
// import ModalContainer from './components/ModalContainer.vue';
import Banner from './components/Banner.vue';
import HeaderTools from './components/HeaderTools.vue';
import HeaderNavigation from './components/HeaderNavigation.vue';
import ProductImages from './components/ProductImages.vue';
import ProductDetails from './components/ProductDetails.vue';
// import ProductCrossSell from './components/ProductCrossSell.vue';
// import FooterBreadcrumb from './components/FooterBreadcrumb.vue';
// import FooterNavigation from './components/FooterNavigation.vue';

export default {
  name: 'App',
  components: {
    // ModalContainer,
    Banner,
    HeaderTools,
    HeaderNavigation,
    ProductImages,
    ProductDetails,
    // ProductCrossSell,
    // FooterBreadcrumb,
    // FooterNavigation,
  },
};
</script>
