export const item = (product) => {

  return `
    <li class="item swiper-slide">

      
  <div class="product__block js_product glass glass-m" id="${product.id}">

  <div class="product__img-box">
  <div class="product__img-sub-box">
     <img src="${product.image}" alt="" class="img">
</div>
    </div>
  
    <div class="product__text-box">
    <p class="product__name js_product-name">${product.name}</p>
    
      <span class="product__price" data-text="$${(product.price).toFixed(2)}">
      $${(product.price).toFixed(2)}
      </span>
      <div class="product__btn-block">
      <a href="product-page.html?id=${product.id}" class="btn btn--first">
      <div class="btn__icon-box">
      <svg class="btn__icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      viewBox="0 0 492.432 492.432" style="enable-background:new 0 0 492.432 492.432;" xml:space="preserve">
   <g id="XMLID_134_">
     <path id="XMLID_135_" d="M142.238,492.432c-9.79,0-19.588-3.736-27.05-11.209c-14.945-14.934-14.945-39.162,0-54.098l180.9-180.909
       l-180.9-180.91c-14.945-14.935-14.945-39.163,0-54.098c14.926-14.944,39.172-14.944,54.098,0l207.96,207.958
       c14.943,14.935,14.943,39.164,0,54.1l-207.96,207.957C161.824,488.697,152.026,492.432,142.238,492.432z"/>
   </g>
   </svg>
    </div>
      details
                     
      </a>
  
    <button class="btn js_add-to-cart">
    <div class="btn__icon-box">
    <svg class="btn__icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    viewBox="0 0 492.432 492.432" style="enable-background:new 0 0 492.432 492.432;" xml:space="preserve">
 <g id="XMLID_134_">
   <path id="XMLID_135_" d="M142.238,492.432c-9.79,0-19.588-3.736-27.05-11.209c-14.945-14.934-14.945-39.162,0-54.098l180.9-180.909
     l-180.9-180.91c-14.945-14.935-14.945-39.163,0-54.098c14.926-14.944,39.172-14.944,54.098,0l207.96,207.958
     c14.943,14.935,14.943,39.164,0,54.1l-207.96,207.957C161.824,488.697,152.026,492.432,142.238,492.432z"/>
 </g>
 </svg>
  </div>
    buy

    </button>
    </div>
      </div>

 
    
</div>

  </li>
    `
}


