<!-- eslint-disable max-len -->
<template>
  <nav
    aria-label="Principale"
    role="navigation"
    aria-describedby="nav-instructions"
    class="flex-1 hidden md:flex"
  >
    <div id="nav-instructions" class="sr-only">
      Appuyer sur Entrée pour ouvrir les éléments du menu. Appuyer sur la flèche bas pour se
      déplacer dans le menu et appuyer sur la touche tabulation dans le menu pour aller dans les
      sous-menus.
    </div>
    <ul class="flex pr-6">
      <li role="presentation" class="flex pr-4 lg:pr-8">
        <button
          aria-expanded="false"
          aria-hidden="false"
          tabindex="0"
          type="button"
          class="navigation-item"
        >
          <span>Nouveautés</span>
          <svg focusable="false" aria-hidden="true" class="md:hidden">
            <use xlink:href="../assets/images/icons.svg#sprite-controls-chevron-right"></use>
          </svg>
        </button>
      </li>
      <li role="presentation" class="flex pr-4 lg:pr-8">
        <button
          aria-expanded="false"
          aria-hidden="false"
          tabindex="0"
          type="button"
          class="navigation-item"
        >
          <span>Femme</span>
          <svg focusable="false" aria-hidden="true" class="md:hidden">
            <use xlink:href="../assets/images/icons.svg#sprite-controls-chevron-right"></use>
          </svg>
        </button>
      </li>
      <li role="presentation" class="flex pr-4 lg:pr-8">
        <button
          aria-expanded="false"
          aria-hidden="false"
          tabindex="0"
          type="button"
          class="navigation-item shadow-nav-active"
        >
          <span>Homme</span>
          <svg focusable="false" aria-hidden="true" class="md:hidden">
            <use xlink:href="../assets/images/icons.svg#sprite-controls-chevron-right"></use>
          </svg>
        </button>
      </li>
      <li role="presentation" class="flex pr-4 lg:pr-8">
        <button
          aria-expanded="false"
          aria-hidden="false"
          tabindex="0"
          type="button"
          class="navigation-item"
        >
          <span>Art de vivre</span>
          <svg focusable="false" aria-hidden="true" class="md:hidden">
            <use xlink:href="../assets/images/icons.svg#sprite-controls-chevron-right"></use>
          </svg>
        </button>
      </li>
      <li role="presentation" class="flex">
        <a href="/fra-fr/magazine" aria-hidden="false" tabindex="0" class="navigation-item"
          >Magazine</a
        >
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
