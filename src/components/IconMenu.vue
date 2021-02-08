<!-- eslint-disable max-len -->
<template>
  <div class="flex">
    <button
      id="mobile-menu-toggler"
      class="p-2"
      title="Barre de menu"
      aria-label="Barre de menu"
      :aria-expanded="String(expanded)"
      @click="expanded = !expanded"
    >
      <div class="w-4 h-3.5">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </button>
    <!-- <nav
        aria-label="Principale"
        role="navigation"

        style="display: none"
      >
        <div >
          <ul >
            <li role="presentation" >
              <button
                aria-expanded="false"
                aria-hidden="false"
                tabindex="0"
                type="button"

              >
                <span>Nouveautés</span>
                <svg focusable="false" aria-hidden="true" >
                  <use xlink:href="/_nuxt/icons.svg#sprite-controls-chevron-right"></use>
                </svg>
              </button>
              <div></div>
            </li>
            <li role="presentation" >
              <button
                aria-expanded="false"
                aria-hidden="false"
                tabindex="0"
                type="button"

              >
                <span>FEMME</span>
                <svg focusable="false" aria-hidden="true" >
                  <use xlink:href="/_nuxt/icons.svg#sprite-controls-chevron-right"></use>
                </svg>
              </button>
              <div></div>
            </li>
            <li role="presentation" >
              <button
                aria-expanded="false"
                aria-hidden="false"
                tabindex="0"
                type="button"

              >
                <span>HOMME</span>
                <svg focusable="false" aria-hidden="true" >
                  <use xlink:href="/_nuxt/icons.svg#sprite-controls-chevron-right"></use>
                </svg>
              </button>
              <div></div>
            </li>
            <li role="presentation" >
              <button
                aria-expanded="false"
                aria-hidden="false"
                tabindex="0"
                type="button"

              >
                <span>Art de vivre</span>
                <svg focusable="false" aria-hidden="true" >
                  <use xlink:href="/_nuxt/icons.svg#sprite-controls-chevron-right"></use>
                </svg>
              </button>
              <div></div>
            </li>
            <li role="presentation" >
              <a
                href="/fra-fr/magazine"

                aria-hidden="false"
                tabindex="0"
                >Magazine</a
              >
            </li>
          </ul>
          <ul >
            <li >
              <a
                href="/fra-fr/magazine/developpement-durable"

                title="Développement Durable"
                aria-hidden="false"
                tabindex="0"
                ><span >
                  Développement Durable
                </span></a
              >
            </li>
            <li >
              <a
                href="https://fr.louisvuitton.com/fra-fr/magasins"

                aria-label="Magasins"
                aria-hidden="false"
                tabindex="0"
                ><svg focusable="false" aria-hidden="true" >
                  <use xlink:href="/_nuxt/icons.svg#sprite-navigation-geolocalisation"></use>
                </svg>
                <span >Magasins</span></a
              >
            </li>
            <li >
              <a
                href="https://www.louisvuitton.com/dispatch/?noDRP=true"

                title="Pays de livraison : France - Changer de Pays/Région"
                aria-hidden="false"
                tabindex="0"
                ><div >
                  <img src="/flags/fr.svg" alt=""  width="16" height="12" />
                  <span >Pays de livraison :&nbsp;</span
                  ><span >France </span>
                </div>
                <svg focusable="false" aria-hidden="true" >
                  <use xlink:href="/_nuxt/icons.svg#sprite-controls-chevron-right"></use></svg
              ></a>
            </li>

            <li >
              <a
                href="/fra-fr/start-the-journey"

                title="Service Clients"
                aria-hidden="false"
                tabindex="0"
                ><svg focusable="false" aria-hidden="true" >
                  <use xlink:href="/_nuxt/icons.svg#sprite-navigation-help"></use>
                </svg>
                <span >Besoin d'aide ?</span></a
              >
            </li>
            <li >
              <a
                href="tel:+33 9 77 40 40 77"

                title="Service clients"
                aria-hidden="false"
                tabindex="0"
                ><svg focusable="false" aria-hidden="true" >
                  <use xlink:href="/_nuxt/icons.svg#sprite-controls-contact"></use>
                </svg>
                <bdo dir="ltr" >+33 9 77 40 40 77</bdo></a
              >
            </li>
          </ul>
        </div>
      </nav> -->
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
};
</script>
