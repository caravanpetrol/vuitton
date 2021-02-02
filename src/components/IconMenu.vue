<template>
  <div data-lock="">
    <button
      id="mobile-menu-toggler"
      class="mobile-menu-toggler"
      title="Barre de menu"
      aria-label="Barre de menu"
      :aria-expanded="String(expanded)"
      @click="toggleMenu"
    >
      <div class="mobile-menu-toggler__icon">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </button>
  </div>
</template>
<script>
export default {
  name: 'IconMenu',
  data() {
    return {
      expanded: false,
    };
  },
  methods: {
    toggleMenu() {
      this.expanded = !this.expanded;
    },
  },
};
</script>
