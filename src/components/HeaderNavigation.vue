<!-- eslint-disable max-len -->
<template>
  <div
    class="relative flex items-stretch justify-center md:justify-start h-18 shadow-navigation px-navxs md:px-0"
  >
    <Logo />
    <HeaderNavigationMain />
    <HeaderNavigationSearch />
  </div>
</template>

<script>
import Logo from '@/components/Logo.vue';
import HeaderNavigationMain from '@/components/HeaderNavigationMain.vue';
import HeaderNavigationSearch from '@/components/HeaderNavigationSearch.vue';

export default {
  name: 'HeaderNavigation',
  components: {
    Logo,
    HeaderNavigationMain,
    HeaderNavigationSearch,
  },
};
</script>
