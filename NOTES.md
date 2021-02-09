# vuitton

## Tailwindcss use in e-commerce app

### 1st problem : Fast increasing class names in markup

```html
<button
    aria-label="Fermer"
    class="absolute flex items-center justify-center transition duration-300 ease-in transform border border-opacity-50 rounded-sm border-wild-sand hover:border-opacity-100 top-2 right-2 md:right-0 md:-translate-y-1/2 md:top-1/2"
    <svg focusable="false" aria-hidden="true" class="icon">
        <use xlink:href="./icons.svg#sprite-controls-close"></use>
    </svg>
>
```

**solution** : externalize pieces of UI (buttons, form elements) in `css`

```html
<button
    aria-label="Fermer"
    class=" button button--close"
>
```

```css
/* buttons.css */
.button {
    @apply transition duration-300 ease-in transform border border-opacity-50 rounded-sm border-wild-sand hover:border-opacity-100;
}
.button--close {
    @apply absolute flex items-center justify-center top-2 right-2 md:right-0 md:-translate-y-1/2 md:top-1/2;
}
```

### 2nd problem : Classical structures with redondant markup (in a product tile for exemple) needs rewrite all classes on change
 
**Solution** : Use structured/semantic class names as usual

```html
<li class="product-reinsurance__item">
    <button class="product-reinsurance__button">
        <svg focusable="false" aria-hidden="true" class="product-reinsurance__icon icon-lg">
            <use xlink:href="./icons.svg#sprite-reinsurance-payment"></use>
        </svg>
    <div class="product-reinsurance__group">
        <p class="product-reinsurance__title">Informations sur le paiement</p>
        <span class="product-reinsurance__text">
            Paiement par carte bancaire ou par Paypal.
        </span>
    </div>
        <svg focusable="false" aria-hidden="true" class="icon">
            <use xlink:href="./icons.svg#sprite-controls-pop-in-new"></use>
        </svg>
    </button>
</li>
```

```css
/* product-reinsurance.css */
.product-reinsurance__item {
    @apply flex flex-grow items-center min-h-27.5;
}
.product-reinsurance__item:not(last-child) {
    @apply border-b border-wild-sand;
}
.product-reinsurance__button {
    @apply flex items-center w-full h-full;
}
.product-reinsurance__group {
    @apply flex-1 mr-10 leading-5 text-left;
}
.product-reinsurance__icon {
    @apply mr-6;
}
.product-reinsurance__title {
    @apply pb-2 font-medium uppercase;
}
.product-reinsurance__text {
    @apply text-sm font-light tracking-wide;
}
```

### Conclusion

In ecom (with but mostly without using JS frameworks) we CAN NOT take full advantage of tailwind  
However, here are SOME ADVANTAGES : 
- learning is quite fast
- consistent and unified utility classes
- variables declaration close to usual _abstract scss 
- avoid creating exotic values (units or other) as long as we decide that `tailwind.config.js` matches the project UI style guideline
- less code to write using `@apply` tailwind utility class names (in both markup and external css), fast boilerplate
- no more complicated to achieve perfect pixel than in classical css
- lighter builds and smooth/flexible modifications **if** general layouts and margins are integrated in templates
- creation of plugins allows a capitalization of resources from a project to another by require/extend them in config
  - exemple of using a plugin for SFCC slot contribution stylings : using/extend the [@tailwind/typography](https://github.com/tailwindlabs/tailwindcss-typography) plugin makes all nested/defined html tags styled, just in declaring a `prose` class, on top of the slot container.


