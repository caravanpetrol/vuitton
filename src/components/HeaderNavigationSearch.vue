<!-- eslint-disable max-len -->
<template>
  <form
    id="searchBarForm"
    class="flex items-center justify-end overflow-hidden"
    style="flex: 0 1 33.33333%"
    action="https://fr.louisvuitton.com/fra-fr/rechercher/"
    method="post"
  >
    <div class="relative flex flex-row w-full max-w-md pr-navlg">
      <div class="absolute top-0 bottom-0 left-0 flex items-center px-4">
        <svg focusable="false" aria-hidden="true" class="w-4 h-4">
          <use xlink:href="../assets/images/icons.svg#sprite-navigation-search"></use>
        </svg>
      </div>
      <label class="sr-only" for="searchHeaderInput"
        >Mots-clés de recherche (nous adaptons les suggestions ci-dessous en fonction de ce que vous
        recherchez)</label
      >
      <input
        id="searchHeaderInput"
        class="flex-auto w-full pr-4 text-base italic tracking-wide bg-clip-padding pl-11 bg-white-floral rounded-xl leading-11 h-11 placeholder-grey-bokara"
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
