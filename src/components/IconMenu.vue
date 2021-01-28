<template>
  <div>
    <button
      id="mobile-menu-toggler"
      title="Barre de menu"
      aria-label="Barre de menu"
      :aria-expanded="String(expanded)"
      @click="toggleMenu"
    >
      <div class="w-4 h-3.5">
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
