<!-- eslint-disable max-len -->
<template>
  <nav aria-label="Utilitaire" role="navigation" class="header-tools">
    <ul class="header-tools__group">
      <li class="header-tools__group-item">
        <div class="header-tools__lock">
          <IconMenu />
        </div>
      </li>
    </ul>

    <!-- SERVICES -->

    <ul class="header-tools__services">
      <li class="header-tools__services-item hidden@md">
        <a
          href="https://www.louisvuitton.com/dispatch/?noDRP=true"
          title="Pays de livraison : France - Changer de Pays/Région"
          class="header-service-shipping"
          ><div class="header-service-shipping__wrapper">
            <img src="../assets/images/fr.svg" alt="" width="16" height="12" class="flag" />
            <span class="header-service-shipping__label">Pays de livraison : </span
            ><span class="header-service-shipping__label"> France</span>
          </div>
          <svg focusable="false" aria-hidden="true" class="hidden icon icon--sm">
            <use xlink:href="../assets/images/icons.svg#sprite-controls-chevron-right"></use></svg
        ></a>
      </li>

      <li class="header-tools__services-item hidden@lg">
        <a href="/fra-fr/start-the-journey" title="Service Clients" class="header-service-help"
          ><svg focusable="false" aria-hidden="true" class="icon">
            <use xlink:href="../assets/images/icons.svg#sprite-navigation-help"></use>
          </svg>
          <span class="header-service-help__label">Besoin d'aide ?</span></a
        >
      </li>

      <li class="header-tools__services-item hidden@md">
        <div class="header-service-call">
          <svg focusable="false" aria-hidden="true" class="icon">
            <use xlink:href="../assets/images/icons.svg#sprite-controls-contact"></use>
          </svg>
          <bdo class="header-service-call__label" dir="ltr">+33 9 77 40 40 77</bdo>
        </div>
      </li>

      <li class="header-tools__services-item hidden@md">
        <a
          href="/fra-fr/magazine/developpement-durable"
          title="Développement Durable"
          class="header-service-sustainability"
        >
          <span class="header-service-sustainability__label"> Développement Durable </span></a
        >
      </li>
    </ul>

    <!-- TOOLS -->

    <ul class="header-tools__tools">
      <li title="Magasins" class="header-tools__tools-item hidden@md">
        <a
          href="https://fr.louisvuitton.com/fra-fr/magasins"
          aria-label="Magasins"
          class="flex items-center justify-center h-full px-2 tool-icon md:px-4"
          ><svg focusable="false" aria-hidden="true" class="icon">
            <use xlink:href="../assets/images/icons.svg#sprite-navigation-geolocalisation"></use>
          </svg>
        </a>
      </li>

      <li
        title="Wishlist"
        class="justify-start flex-grow mr-2 header-tools__tools-item -wishlist md:flex-grow-0 md:mr-0"
      >
        <a
          href="https://secure.louisvuitton.com/fra-fr/mylv/wishlist"
          aria-label="Wishlist"
          class="flex items-center justify-center h-full px-2 tool-icon md:px-4"
          ><div class="icon-with-count">
            <svg focusable="false" aria-hidden="true" class="icon">
              <use xlink:href="../assets/images/icons.svg#sprite-navigation-wishlist-off"></use>
            </svg></div
        ></a>
      </li>

      <li title="My LV" class="mr-2 header-tools__tools-item md:mr-0">
        <button
          aria-label="My LV"
          aria-expanded="false"
          class="flex items-center justify-center h-full px-2 tool-icon md:px-4"
        >
          <svg focusable="false" aria-hidden="true" class="icon">
            <use xlink:href="../assets/images/icons.svg#sprite-navigation-account"></use>
          </svg>
        </button>
      </li>

      <li title="MON PANIER" class="header-tools__tools-item">
        <div
          aria-label="MON PANIER"
          class="flex items-center justify-center h-full px-2 tool-icon md:px-4"
        >
          <div class="icon-with-count">
            <svg focusable="false" aria-hidden="true" class="icon">
              <use xlink:href="../assets/images/icons.svg#sprite-navigation-cart"></use>
            </svg>
            <span aria-hidden="true" class="icon-with-count__count">0</span>
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
