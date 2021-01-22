<template>
  <div>
    <div>
      <button aria-label="Retour">
        <svg focusable="false" aria-hidden="true">
          <use xlink:href="../assets/images/icons.svg#sprite-controls-back"></use>
        </svg>
      </button>

      <div>
        <ul>
          <li>
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
          <li>
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
          <li>
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
          <li>
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
          <li>
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
