<template>
  <nav aria-label="Utilitaire" role="navigation">
    <ul>
      <li>
        <div>
          <div tabindex="-1"></div>
          <div tabindex="-1"></div>
          <div data-lock="">
            <button
              id="mobile-menu-toggler"
              title="Barre de menu"
              aria-label="Barre de menu"
              aria-expanded="false"
            >
              <span><span></span></span>
            </button>
            <!---->
          </div>
          <div tabindex="-1"></div>
        </div>
      </li>
    </ul>
    <ul>
      <li>
        <a
          href="https://www.louisvuitton.com/dispatch/?noDRP=true"
          title="Pays de livraison : France - Changer de Pays/Région"
          ><div>
            <img src="../assets/images/fr.svg" alt="" width="16" height="12" />
            <span>Pays de livraison :&nbsp;</span><span>France </span>
          </div>
          <svg focusable="false" aria-hidden="true">
            <use xlink:href="../assets/images/icons.svg#sprite-controls-chevron-right"></use></svg
        ></a>
      </li>
      <!---->
      <li>
        <a href="/fra-fr/start-the-journey" title="Service Clients"
          ><svg focusable="false" aria-hidden="true">
            <use xlink:href="../assets/images/icons.svg#sprite-navigation-help"></use>
          </svg>
          <span>Besoin d'aide ?</span></a
        >
      </li>
      <li>
        <div>
          <svg focusable="false" aria-hidden="true">
            <use xlink:href="../assets/images/icons.svg#sprite-controls-contact"></use>
          </svg>
          <bdo dir="ltr">+33 9 77 40 40 77</bdo>
        </div>
      </li>
      <li>
        <a href="/fra-fr/magazine/developpement-durable" title="Développement Durable"
          ><span> Développement Durable </span></a
        >
      </li>
    </ul>
    <ul>
      <li title="Magasins">
        <a href="https://fr.louisvuitton.com/fra-fr/magasins" aria-label="Magasins"
          ><svg focusable="false" aria-hidden="true">
            <use xlink:href="../assets/images/icons.svg#sprite-navigation-geolocalisation"></use>
          </svg>
          <!----></a
        >
      </li>
      <li title="Wishlist">
        <a href="https://secure.louisvuitton.com/fra-fr/mylv/wishlist" aria-label="Wishlist"
          ><div>
            <svg focusable="false" aria-hidden="true">
              <use xlink:href="../assets/images/icons.svg#sprite-navigation-wishlist-off"></use>
            </svg>
            <!---->
          </div></a
        >
      </li>
      <li title="My LV">
        <button aria-label="My LV" aria-expanded="false">
          <svg focusable="false" aria-hidden="true">
            <use xlink:href="../assets/images/icons.svg#sprite-navigation-account"></use>
          </svg>
        </button>
      </li>
      <li title="MON PANIER">
        <div aria-label="MON PANIER">
          <div>
            <svg focusable="false" aria-hidden="true">
              <use xlink:href="../assets/images/icons.svg#sprite-navigation-cart"></use>
            </svg>
            <span aria-hidden="true">0</span>
          </div>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'HeaderTools',
};
</script>
