<template>
  <div class="relative flex items-stretch justify-start shadow-sm h-18">
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
