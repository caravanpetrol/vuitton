<!-- eslint-disable max-len -->
<template>
  <nav
    aria-label="Utilitaire"
    role="navigation"
    class="relative flex justify-between h-10 shadow-sm px-navlg"
  >
    <ul class="flex items-center -ml-2 md:hidden">
      <li class="mr-2">
        <div class="flex items-center justify-center h-full">
          <div data-lock="" class="h-full">
            <button
              id="mobile-menu-toggler"
              title="Barre de menu"
              aria-label="Barre de menu"
              :aria-expanded="String(expanded)"
              class="tool-icon"
              @click="toggleMenu"
            >
              <span class="icon-burger__bars"><span class="icon-burger__bars"></span></span>
            </button>
            <!---->
          </div>
          <div tabindex="-1"></div>
        </div>
      </li>
    </ul>
    <ul class="flex items-center">
      <li class="h-full whitespace-nowrap">
        <a
          href="https://www.louisvuitton.com/dispatch/?noDRP=true"
          title="Pays de livraison : France - Changer de Pays/Région"
          class="flex items-center justify-between h-full"
          ><div class="flex items-center whitespace-nowrap">
            <img src="../assets/images/fr.svg" alt="" width="16" height="12" class="mr-2" />
            <span class="text-sm font-normal">Pays de livraison : </span
            ><span class="text-sm font-normal">France</span>
          </div>
          <svg focusable="false" aria-hidden="true" class="w-3 h-3 md:hidden">
            <use xlink:href="../assets/images/icons.svg#sprite-controls-chevron-right"></use></svg
        ></a>
      </li>
      <!---->
      <li class="hidden h-full ml-6 whitespace-nowrap lg:block">
        <a
          href="/fra-fr/start-the-journey"
          title="Service Clients"
          class="flex items-center h-full whitespace-nowrap"
          ><svg focusable="false" aria-hidden="true" class="w-4 h-4">
            <use xlink:href="../assets/images/icons.svg#sprite-navigation-help"></use>
          </svg>
          <span class="ml-2 text-sm font-normal">Besoin d'aide ?</span></a
        >
      </li>
      <li class="h-full ml-6 whitespace-nowrap">
        <div class="flex items-center h-full whitespace-nowrap">
          <svg focusable="false" aria-hidden="true" class="w-4 h-4">
            <use xlink:href="../assets/images/icons.svg#sprite-controls-contact"></use>
          </svg>
          <bdo class="ml-2 text-sm font-normal" dir="ltr">+33 9 77 40 40 77</bdo>
        </div>
      </li>
      <li class="h-full ml-6 whitespace-nowrap">
        <a
          href="/fra-fr/magazine/developpement-durable"
          title="Développement Durable"
          class="flex items-center h-full"
        >
          <span class="text-sm font-normal"> Développement Durable </span></a
        >
      </li>
    </ul>
    <ul class="flex -mr-4">
      <li title="Magasins" class="relative flex justify-center h-full whitespace-nowrap">
        <a
          href="https://fr.louisvuitton.com/fra-fr/magasins"
          aria-label="Magasins"
          class="flex items-center justify-center h-full px-4"
          ><svg focusable="false" aria-hidden="true" class="w-4 h-4">
            <use xlink:href="../assets/images/icons.svg#sprite-navigation-geolocalisation"></use>
          </svg>
          <!----></a
        >
      </li>
      <li title="Wishlist" class="relative flex justify-start h-full whitespace-nowrap">
        <a
          href="https://secure.louisvuitton.com/fra-fr/mylv/wishlist"
          aria-label="Wishlist"
          class="flex items-center justify-center h-full px-4"
          ><div>
            <svg focusable="false" aria-hidden="true" class="w-4 h-4">
              <use xlink:href="../assets/images/icons.svg#sprite-navigation-wishlist-off"></use>
            </svg>
            <!---->
          </div></a
        >
      </li>
      <li title="My LV" class="relative flex justify-center h-full whitespace-nowrap">
        <button
          aria-label="My LV"
          aria-expanded="false"
          class="flex items-center justify-center h-full px-4"
        >
          <svg focusable="false" aria-hidden="true" class="w-4 h-4">
            <use xlink:href="../assets/images/icons.svg#sprite-navigation-account"></use>
          </svg>
        </button>
      </li>
      <li title="MON PANIER" class="relative flex justify-center h-full whitespace-nowrap">
        <div aria-label="MON PANIER" class="flex items-center justify-center h-full px-4 bag-icon">
          <div class="relative inline-flex items-center justify-center whitespace-nowrap">
            <svg focusable="false" aria-hidden="true" class="w-4 h-4">
              <use xlink:href="../assets/images/icons.svg#sprite-navigation-cart"></use>
            </svg>
            <span
              aria-hidden="true"
              class="left-4 -mt-3.5 bg-cola border-0 rounded-full text-center block absolute top-1/2 h-3 w-3 leading-2 text-white text-xxs font-semibold tracking-normal"
              >0</span
            >
          </div>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'HeaderTools',
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
<style scoped>
.icon-burger__bars {
  @apply relative inline-block w-4 h-4;
}
.icon-burger__bars::after,
.icon-burger__bars::before,
.icon-burger__bars span::after,
.icon-burger__bars span::before {
  left: 50%;
  transform: translateX(-50%);
  background: currentColor;
  transform-origin: 50% 50%;
  top: 0.0625rem;
  content: '';
  display: block;
  height: 0.125rem;
  position: absolute;
  transition: all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  width: 100%;
  opacity: 1;
}
.tool-icon {
  @apply flex justify-center items-center h-full px-2 py-0;
}
[aria-expanded='true'] .icon-burger__bars::before {
  transform: translateX(-50%) scale(0);
  top: 0.4375rem;
  opacity: 0;
}
[aria-expanded='true'] .lv-header-icon-burger__bars span::after {
  transform: translateX(-50%) rotate(45deg);
  top: 0.4375rem;
  opacity: 0;
}
.bag-icon::before {
  @apply left-0 right-0 m-auto absolute block w-6 bottom-0 h-0.5;
  content: '';
  transition: box-shadow 0.3s cubic-bezier(0.39, 0.575, 0.565, 1);
}
</style>
