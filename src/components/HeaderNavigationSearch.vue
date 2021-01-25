<template>
  <form id="searchBarForm" action="https://fr.louisvuitton.com/fra-fr/rechercher/" method="post">
    <div>
      <div>
        <svg focusable="false" aria-hidden="true">
          <use xlink:href="../assets/images/icons.svg#sprite-navigation-search"></use>
        </svg>
      </div>
      <label for="searchHeaderInput"
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
