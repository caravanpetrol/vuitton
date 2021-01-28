<!-- eslint-disable max-len -->
<template>
  <form
    id="searchBarForm"
    class="flex items-center justify-end flex-auto overflow-hidden md:flex-shrink-1/3"
    action="https://fr.louisvuitton.com/fra-fr/rechercher/"
    method="post"
  >
    <div>
      <div>
        <svg focusable="false" aria-hidden="true">
          <use xlink:href="../assets/images/icons.svg#sprite-navigation-search"></use>
        </svg>
      </div>
      <label class="sr-only" for="searchHeaderInput"
        >Mots-clés de recherche (nous adaptons les suggestions ci-dessous en fonction de ce que vous
        recherchez)</label
      >
      <input
        id="searchHeaderInput"
        placeholder="produit, magasin..."
        type="search"
        autocomplete="off"
        autocorrect="off"
        autocapitalize="none"
        spellcheck="false"
        value=""
      />
    </div>
  </form>
</template>

<script>
export default {
  name: 'HeaderNavigationSearch',
};
</script>
