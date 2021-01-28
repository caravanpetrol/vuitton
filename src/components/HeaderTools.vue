<!-- eslint-disable max-len -->
<template>
  <nav
    aria-label="Utilitaire"
    role="navigation"
    class="relative flex justify-between h-10 shadow-tools px-navsm md:px-navlg"
  >
    <ul class="flex items-center -ml-2 md:hidden">
      <li class="flex h-full mr-2">
        <IconMenu />
      </li>
    </ul>
    <ul class="items-center hidden md:flex">
      <li class="hidden h-full md:block whitespace-nowrap">
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
      <li class="hidden h-full ml-6 md:block whitespace-nowrap">
        <div class="flex items-center h-full whitespace-nowrap">
          <svg focusable="false" aria-hidden="true" class="w-4 h-4">
            <use xlink:href="../assets/images/icons.svg#sprite-controls-contact"></use>
          </svg>
          <bdo class="ml-2 text-sm font-normal" dir="ltr">+33 9 77 40 40 77</bdo>
        </div>
      </li>
      <li class="hidden h-full ml-6 md:block whitespace-nowrap">
        <a
          href="/fra-fr/magazine/developpement-durable"
          title="Développement Durable"
          class="flex items-center h-full"
        >
          <span class="text-sm font-normal"> Développement Durable </span></a
        >
      </li>
    </ul>
    <ul class="flex flex-1 -mr-4 md:flex-none">
      <li title="Magasins" class="relative justify-center hidden h-full md:flex whitespace-nowrap">
        <a
          href="https://fr.louisvuitton.com/fra-fr/magasins"
          aria-label="Magasins"
          class="flex items-center justify-center h-full px-2 md:px-4"
          ><svg focusable="false" aria-hidden="true" class="w-4 h-4">
            <use xlink:href="../assets/images/icons.svg#sprite-navigation-geolocalisation"></use>
          </svg>
        </a>
      </li>
      <li
        title="Wishlist"
        class="relative flex justify-start flex-grow h-full mr-2 md:flex-grow-0 whitespace-nowrap md:mr-0"
      >
        <a
          href="https://secure.louisvuitton.com/fra-fr/mylv/wishlist"
          aria-label="Wishlist"
          class="flex items-center justify-center h-full px-2 md:px-4"
          ><div>
            <svg focusable="false" aria-hidden="true" class="w-4 h-4">
              <use xlink:href="../assets/images/icons.svg#sprite-navigation-wishlist-off"></use>
            </svg></div
        ></a>
      </li>
      <li title="My LV" class="relative flex justify-center h-full mr-2 whitespace-nowrap md:mr-0">
        <button
          aria-label="My LV"
          aria-expanded="false"
          class="flex items-center justify-center h-full px-2 md:px-4"
        >
          <svg focusable="false" aria-hidden="true" class="w-4 h-4">
            <use xlink:href="../assets/images/icons.svg#sprite-navigation-account"></use>
          </svg>
        </button>
      </li>
      <li title="MON PANIER" class="relative flex justify-center h-full whitespace-nowrap">
        <div aria-label="MON PANIER" class="flex items-center justify-center h-full px-2 md:px-4">
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
import IconMenu from '@/components/IconMenu.vue';

export default {
  components: {
    IconMenu,
  },
  name: 'HeaderTools',
};
</script>
