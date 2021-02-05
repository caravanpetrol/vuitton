<!-- eslint-disable max-len -->
<template>
  <form
    id="searchBarForm"
    class="search-form"
    action="https://fr.louisvuitton.com/fra-fr/rechercher/"
    method="post"
  >
    <div class="search-input">
      <div class="search-input__placeholder-icon">
        <svg focusable="false" aria-hidden="true" class="icon icon--sm">
          <use xlink:href="../assets/images/icons.svg#sprite-navigation-search"></use>
        </svg>
      </div>
      <label class="sr-only" for="searchHeaderInput"
        >Mots-clés de recherche (nous adaptons les suggestions ci-dessous en fonction de ce que vous
        recherchez)</label
      >
      <input
        id="searchHeaderInput"
        class="search-input__input"
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
