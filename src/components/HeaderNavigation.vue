<!-- eslint-disable max-len -->
<template>
  <div>
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
