<!-- eslint-disable max-len -->
<template>
  <nav aria-label="Principale" role="navigation" aria-describedby="nav-instructions">
    <div id="nav-instructions" class="sr-only">
      Appuyer sur Entrée pour ouvrir les éléments du menu. Appuyer sur la flèche bas pour se
      déplacer dans le menu et appuyer sur la touche tabulation dans le menu pour aller dans les
      sous-menus.
    </div>
    <ul>
      <li role="presentation">
        <button aria-expanded="false" aria-hidden="false" tabindex="0" type="button">
          <span>Nouveautés</span>
          <svg focusable="false" aria-hidden="true">
            <use xlink:href="../assets/images/icons.svg#sprite-controls-chevron-right"></use>
          </svg>
        </button>
      </li>
      <li role="presentation">
        <button aria-expanded="false" aria-hidden="false" tabindex="0" type="button">
          <span>Femme</span>
          <svg focusable="false" aria-hidden="true">
            <use xlink:href="../assets/images/icons.svg#sprite-controls-chevron-right"></use>
          </svg>
        </button>
      </li>
      <li role="presentation">
        <button aria-expanded="false" aria-hidden="false" tabindex="0" type="button">
          <span>Homme</span>
          <svg focusable="false" aria-hidden="true">
            <use xlink:href="../assets/images/icons.svg#sprite-controls-chevron-right"></use>
          </svg>
        </button>
      </li>
      <li role="presentation">
        <button aria-expanded="false" aria-hidden="false" tabindex="0" type="button">
          <span>Art de vivre</span>
          <svg focusable="false" aria-hidden="true">
            <use xlink:href="../assets/images/icons.svg#sprite-controls-chevron-right"></use>
          </svg>
        </button>
      </li>
      <li role="presentation">
        <a href="/fra-fr/magazine" aria-hidden="false" tabindex="0">Magazine</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'HeaderNavigationMain',
};
</script>
<style scoped>
</style>
