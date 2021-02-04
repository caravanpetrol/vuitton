<!-- eslint-disable max-len -->
<template>
  <div class="relative w-2/3">
    <div>
      <button
        aria-label="Retour"
        class="absolute z-10 bg-white border-b border-r animate button-flex border-wild-sand w-30 h-18 hover:bg-wild-sand"
      >
        <!-- border: 0.0625rem solid #eae8e4; -->
        <svg focusable="false" aria-hidden="true" class="icon">
          <use xlink:href="../assets/images/icons.svg#sprite-controls-back"></use>
        </svg>
      </button>

      <div>
        <ul class="flex flex-row flex-wrap items-stretch justify-between">
          <li class="w-full product-item">
            <ProductTile
              imageSrcset="https://fr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-sneaker-montante-tattoo-souliers--BJ9U5PMO25_PM2_Front%20view.png?wid=216&amp;hei=216    216w,
                    https://fr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-sneaker-montante-tattoo-souliers--BJ9U5PMO25_PM2_Front%20view.png?wid=320&amp;hei=320    320w,
                    https://fr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-sneaker-montante-tattoo-souliers--BJ9U5PMO25_PM2_Front%20view.png?wid=456&amp;hei=456    456w,
                    https://fr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-sneaker-montante-tattoo-souliers--BJ9U5PMO25_PM2_Front%20view.png?wid=656&amp;hei=656    656w,
                    https://fr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-sneaker-montante-tattoo-souliers--BJ9U5PMO25_PM2_Front%20view.png?wid=824&amp;hei=824    824w,
                    https://fr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-sneaker-montante-tattoo-souliers--BJ9U5PMO25_PM2_Front%20view.png?wid=1080&amp;hei=1080 1080w,
                    https://fr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-sneaker-montante-tattoo-souliers--BJ9U5PMO25_PM2_Front%20view.png?wid=1240&amp;hei=1240 1240w,
                    https://fr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-sneaker-montante-tattoo-souliers--BJ9U5PMO25_PM2_Front%20view.png?wid=2048&amp;hei=2048 2048w
                  "
            />
          </li>
          <li class="product-item">
            <ProductTile
              imageSrcset="
                    https://fr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-sneaker-montante-tattoo-souliers--BJ9U5PMO25_PM1_Closeup%20view.png?wid=216&amp;hei=216    216w,
                    https://fr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-sneaker-montante-tattoo-souliers--BJ9U5PMO25_PM1_Closeup%20view.png?wid=320&amp;hei=320    320w,
                    https://fr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-sneaker-montante-tattoo-souliers--BJ9U5PMO25_PM1_Closeup%20view.png?wid=456&amp;hei=456    456w,
                    https://fr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-sneaker-montante-tattoo-souliers--BJ9U5PMO25_PM1_Closeup%20view.png?wid=656&amp;hei=656    656w,
                    https://fr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-sneaker-montante-tattoo-souliers--BJ9U5PMO25_PM1_Closeup%20view.png?wid=824&amp;hei=824    824w,
                    https://fr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-sneaker-montante-tattoo-souliers--BJ9U5PMO25_PM1_Closeup%20view.png?wid=1080&amp;hei=1080 1080w,
                    https://fr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-sneaker-montante-tattoo-souliers--BJ9U5PMO25_PM1_Closeup%20view.png?wid=1240&amp;hei=1240 1240w,
                    https://fr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-sneaker-montante-tattoo-souliers--BJ9U5PMO25_PM1_Closeup%20view.png?wid=2048&amp;hei=2048 2048w
                  "
            />
          </li>
          <li class="product-item">
            <ProductTile
              imageSrcset="
                    https://fr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-sneaker-montante-tattoo-souliers--BJ9U5PMO25_PM1_Interior%20view.png?wid=216&amp;hei=216    216w,
                    https://fr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-sneaker-montante-tattoo-souliers--BJ9U5PMO25_PM1_Interior%20view.png?wid=320&amp;hei=320    320w,
                    https://fr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-sneaker-montante-tattoo-souliers--BJ9U5PMO25_PM1_Interior%20view.png?wid=456&amp;hei=456    456w,
                    https://fr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-sneaker-montante-tattoo-souliers--BJ9U5PMO25_PM1_Interior%20view.png?wid=656&amp;hei=656    656w,
                    https://fr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-sneaker-montante-tattoo-souliers--BJ9U5PMO25_PM1_Interior%20view.png?wid=824&amp;hei=824    824w,
                    https://fr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-sneaker-montante-tattoo-souliers--BJ9U5PMO25_PM1_Interior%20view.png?wid=1080&amp;hei=1080 1080w,
                    https://fr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-sneaker-montante-tattoo-souliers--BJ9U5PMO25_PM1_Interior%20view.png?wid=1240&amp;hei=1240 1240w,
                    https://fr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-sneaker-montante-tattoo-souliers--BJ9U5PMO25_PM1_Interior%20view.png?wid=2048&amp;hei=2048 2048w
                  "
            />
          </li>
          <li class="product-item">
            <ProductTile
              imageSrcset="
                    https://fr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-sneaker-montante-tattoo-souliers--BJ9U5PMO25_PM1_Interior2%20view.png?wid=216&amp;hei=216    216w,
                    https://fr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-sneaker-montante-tattoo-souliers--BJ9U5PMO25_PM1_Interior2%20view.png?wid=320&amp;hei=320    320w,
                    https://fr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-sneaker-montante-tattoo-souliers--BJ9U5PMO25_PM1_Interior2%20view.png?wid=456&amp;hei=456    456w,
                    https://fr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-sneaker-montante-tattoo-souliers--BJ9U5PMO25_PM1_Interior2%20view.png?wid=656&amp;hei=656    656w,
                    https://fr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-sneaker-montante-tattoo-souliers--BJ9U5PMO25_PM1_Interior2%20view.png?wid=824&amp;hei=824    824w,
                    https://fr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-sneaker-montante-tattoo-souliers--BJ9U5PMO25_PM1_Interior2%20view.png?wid=1080&amp;hei=1080 1080w,
                    https://fr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-sneaker-montante-tattoo-souliers--BJ9U5PMO25_PM1_Interior2%20view.png?wid=1240&amp;hei=1240 1240w,
                    https://fr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-sneaker-montante-tattoo-souliers--BJ9U5PMO25_PM1_Interior2%20view.png?wid=2048&amp;hei=2048 2048w
                  "
            />
          </li>
          <li class="product-item">
            <ProductTile
              imageSrcset="
                    https://fr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-sneaker-montante-tattoo-souliers--BJ9U5PMO25_PM1_Detail%20view.png?wid=216&amp;hei=216    216w,
                    https://fr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-sneaker-montante-tattoo-souliers--BJ9U5PMO25_PM1_Detail%20view.png?wid=320&amp;hei=320    320w,
                    https://fr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-sneaker-montante-tattoo-souliers--BJ9U5PMO25_PM1_Detail%20view.png?wid=456&amp;hei=456    456w,
                    https://fr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-sneaker-montante-tattoo-souliers--BJ9U5PMO25_PM1_Detail%20view.png?wid=656&amp;hei=656    656w,
                    https://fr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-sneaker-montante-tattoo-souliers--BJ9U5PMO25_PM1_Detail%20view.png?wid=824&amp;hei=824    824w,
                    https://fr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-sneaker-montante-tattoo-souliers--BJ9U5PMO25_PM1_Detail%20view.png?wid=1080&amp;hei=1080 1080w,
                    https://fr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-sneaker-montante-tattoo-souliers--BJ9U5PMO25_PM1_Detail%20view.png?wid=1240&amp;hei=1240 1240w,
                    https://fr.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-sneaker-montante-tattoo-souliers--BJ9U5PMO25_PM1_Detail%20view.png?wid=2048&amp;hei=2048 2048w
                  "
            />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import ProductTile from '@/components/ProductTile.vue';

export default {
  name: 'ProductImages',
  components: {
    ProductTile,
  },
};
</script>
