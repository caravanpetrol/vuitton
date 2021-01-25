<!-- eslint-disable max-len -->
<template>
  <div style="position: fixed; top: 0; bottom: 0; right: 0; left: 0">
    <div
      style="
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        transition-property: opacity;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 150ms;
"
    >
      <div
        style="
          position: absolute;
          background: black;
          opacity: 0.75;
          top: 0;
          bottom: 0;
          right: 0;
          left: 0;
"
      ></div>
    </div>

    <div
      style="
        z-index: 10;

        --tw-translate-x: 0;
        --tw-translate-y: 0;
        --tw-rotate: 0;
        --tw-skew-x: 0;
        --tw-skew-y: 0;
        --tw-scale-x: 1;
        --tw-scale-y: 1;

        transform:
          translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y))
          rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
          scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
        transition-property: all;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        width: 100%;
        background: white;
        transition-duration: 150ms;
"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-headline"
    ></div>

    <div style="background: white">
      <div class="sm:flex sm:items-start">
        <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
              MODAL TITLE
            </h3>
            <button aria-label="Fermer" class="lv-modal__close lv-icon-button -light">
              <svg focusable="false" aria-hidden="true" class="lv-icon">
                <use xlink:href="../assets/images/icons.svg#sprite-controls-close"></use>
              </svg>
            </button>
          </div>
          <div class="mt-2">
            <portal-target name="modal" />
            MODAL BODY
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="lv-modal__contents">
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

    </div> -->
  </div>
</template>
<script>
export default {
  name: 'ModalContainer',
  methods: {
    handleClose() {
      this.$emit('close');
    },
  },
};
</script>
