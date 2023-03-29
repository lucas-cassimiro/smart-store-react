import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper";
import { products } from "./productsData";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const ProductsBanner = () => {
  return (
    <div>
      <Swiper
        modules={[Navigation, A11y, Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
        navigation
        // autoplay={{ delay: 4000, disableOnInteraction: false }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.name}>
            <div>
              <img src={product.img} alt={product.name} />
              <div>
                <p>-{product.discount}%</p>
                <p>Black Friday</p>
              </div>
              <p>{product.name}</p>
              starssssssss
              <p>R$ {product.price}</p>
              <p>R$ {((product.price*(100 - product.discount))/100).toFixed(2)}</p>
              <p>Ou 12x de R$ {(((product.price*(100 - product.discount))/100)/11).toFixed(2)}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductsBanner;
