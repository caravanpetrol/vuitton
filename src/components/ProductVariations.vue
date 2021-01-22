<template>
  <div>
    <button aria-expanded="false">
      <span> Taille </span>
      <span> 8 </span>
      <!---->
      <span class="sr-only">Actuellement sélectionné </span>
      <svg focusable="false" aria-hidden="true">
        <use xlink:href="../assets/images/icons.svg#sprite-controls-chevron-right"></use>
      </svg>
    </button>
    <div class="hidden">
      <div is-selectable="true">
        <ul>
          <li>
            <div role="button" aria-pressed="false" tabindex="0">
              <span>5</span>
              <span> Indisponible </span>
              <!---->
            </div>
          </li>
          <li>
            <div role="button" aria-pressed="false" tabindex="0">
              <span>6</span>
              <!---->
              <!---->
            </div>
          </li>
          <li>
            <div role="button" aria-pressed="false" tabindex="0">
              <span>6.5</span>
              <!---->
              <!---->
            </div>
          </li>
          <li>
            <div role="button" aria-pressed="false" tabindex="0">
              <span>7</span>
              <!---->
              <!---->
            </div>
          </li>
          <li>
            <div role="button" aria-pressed="false" tabindex="0">
              <span>7.5</span>
              <span> Indisponible </span>
              <!---->
            </div>
          </li>
          <li>
            <div
              role="button"
              aria-pressed="true"
              aria-label="8 - Disponible - Actuellement sélectionné
"
              tabindex="0"
            >
              <span>8</span>
              <!---->
              <svg focusable="false" aria-hidden="true">
                <use xlink:href="../assets/images/icons.svg#sprite-controls-valid"></use>
              </svg>
            </div>
          </li>
          <li>
            <div role="button" aria-pressed="false" tabindex="0">
              <span>8.5</span>
              <span> Indisponible </span>
              <!---->
            </div>
          </li>
          <li>
            <div role="button" aria-pressed="false" tabindex="0">
              <span>9</span>
              <span> Indisponible </span>
              <!---->
            </div>
          </li>
          <li>
            <div role="button" aria-pressed="false" tabindex="0">
              <span>10</span>
              <span> Indisponible </span>
              <!---->
            </div>
          </li>
          <li>
            <div role="button" aria-pressed="false" tabindex="0">
              <span>11</span>
              <!---->
              <!---->
            </div>
          </li>
          <li>
            <div role="button" aria-pressed="false" tabindex="0">
              <span>12</span>
              <span> Indisponible </span>
              <!---->
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ProductVariations',
};
</script>
