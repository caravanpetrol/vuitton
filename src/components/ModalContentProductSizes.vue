<template>
  <div>
    <!-- <h2>Product Sizes</h2> -->
    <!-- <portal-target name="modal-content-product-sizes" /> -->

    <button aria-expanded="false" @click="openModal">
      <span> Taille </span>
      <span> 8 </span>
      <span class="sr-only">Actuellement sélectionné </span>
      <svg focusable="false" aria-hidden="true">
        <use xlink:href="../assets/images/icons.svg#sprite-controls-chevron-right"></use>
      </svg>
    </button>
    <!-- wrap our modal with portal -->
    <!-- the 'to' value should be the same as our portal-target name in App.vue (modal) -->
    <portal v-if="showModal" to="modal">
      <div class="modal">
        <!-- modal content goes here -->
        <div class="lv-modal__contents">
          <h1 id="modalTitle" tabindex="-1" class="lv-modal__title"><span> Taille </span></h1>
          <div id="modalContent" class="lv-modal__content">
            <div class="lv-product-panel-list" is-selectable="true">
              <ul class="lv-list lv-choice-group">
                <li class="lv-choice-group__item lv-product-panel-list__item list-label-l">
                  <div role="button" aria-pressed="false" tabindex="0" class="lv-choice">
                    <span class="lv-product-panel-list__item-name">5</span>
                    <span class="lv-stock-indicator lv-product-stock-indicator -not-available">
                      Indisponible
                    </span>
                  </div>
                </li>
                <li class="lv-choice-group__item lv-product-panel-list__item list-label-l">
                  <div role="button" aria-pressed="false" tabindex="0" class="lv-choice">
                    <span class="lv-product-panel-list__item-name">6</span>
                  </div>
                </li>
                <li class="lv-choice-group__item lv-product-panel-list__item list-label-l">
                  <div role="button" aria-pressed="false" tabindex="0" class="lv-choice">
                    <span class="lv-product-panel-list__item-name">6.5</span>
                  </div>
                </li>
                <li class="lv-choice-group__item lv-product-panel-list__item list-label-l">
                  <div role="button" aria-pressed="false" tabindex="0" class="lv-choice">
                    <span class="lv-product-panel-list__item-name">7</span>
                  </div>
                </li>
                <li class="lv-choice-group__item lv-product-panel-list__item list-label-l">
                  <div role="button" aria-pressed="false" tabindex="0" class="lv-choice">
                    <span class="lv-product-panel-list__item-name">7.5</span>
                    <span class="lv-stock-indicator lv-product-stock-indicator -not-available">
                      Indisponible
                    </span>
                  </div>
                </li>
                <li class="lv-choice-group__item lv-product-panel-list__item list-label-l">
                  <div
                    role="button"
                    aria-pressed="true"
                    aria-label="8 - Disponible - Actuellement sélectionné
        "
                    tabindex="0"
                    class="lv-choice"
                  >
                    <span class="lv-product-panel-list__item-name">8</span>

                    <svg
                      focusable="false"
                      aria-hidden="true"
                      class="lv-icon lv-product-panel-list__item-selected"
                    >
                      <use xlink:href="../assets/images/icons.svg#sprite-controls-valid"></use>
                    </svg>
                  </div>
                </li>
                <li class="lv-choice-group__item lv-product-panel-list__item list-label-l">
                  <div role="button" aria-pressed="false" tabindex="0" class="lv-choice">
                    <span class="lv-product-panel-list__item-name">8.5</span>
                    <span class="lv-stock-indicator lv-product-stock-indicator -not-available">
                      Indisponible
                    </span>
                  </div>
                </li>
                <li class="lv-choice-group__item lv-product-panel-list__item list-label-l">
                  <div role="button" aria-pressed="false" tabindex="0" class="lv-choice">
                    <span class="lv-product-panel-list__item-name">9</span>
                    <span class="lv-stock-indicator lv-product-stock-indicator -not-available">
                      Indisponible
                    </span>
                  </div>
                </li>
                <li class="lv-choice-group__item lv-product-panel-list__item list-label-l">
                  <div role="button" aria-pressed="false" tabindex="0" class="lv-choice">
                    <span class="lv-product-panel-list__item-name">10</span>
                    <span class="lv-stock-indicator lv-product-stock-indicator -not-available">
                      Indisponible
                    </span>
                  </div>
                </li>
                <li class="lv-choice-group__item lv-product-panel-list__item list-label-l">
                  <div role="button" aria-pressed="false" tabindex="0" class="lv-choice">
                    <span class="lv-product-panel-list__item-name">11</span>
                  </div>
                </li>
                <li class="lv-choice-group__item lv-product-panel-list__item list-label-l">
                  <div role="button" aria-pressed="false" tabindex="0" class="lv-choice">
                    <span class="lv-product-panel-list__item-name">12</span>
                    <span class="lv-stock-indicator lv-product-stock-indicator -not-available">
                      Indisponible
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- modal close button -->
        <button @click="closeModal">Close</button>
      </div>
    </portal>
  </div>
</template>
<script>
export default {
  name: 'ModalContentProductSizes',
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
  },
};
</script>
