onLoad();

let bagItems=[];

function onLoad(){
  displayItems();
  displayBagItems();
}

function addToBag(itemId){
  bagItems.push(itemId);
  displayBagItems()
}
function displayBagItems(){
    let bagitemcount =document.querySelector('.bag_item_count');
    bagitemcount.innerText=bagItems.length;

    if(bagItems.length > 0){
            bagitemcount.style.visibility='visible';

          bagitemcount.innerText=bagItems.length;
    }
    else{
      bagitemcount.style.visibility='hidden';
    }
}

function displayItems(){
let itemscontainers=document.querySelector('.items-containers');
let innerHtml=''
items.forEach(item =>{
  innerHtml+=` <div class="item-container ">
    <img class="item-image" src=${item.image} alt="" />
    <div class="rating">
       ${item.rating.stars}⭐|${item.rating.count}
    </div>
    <div class="company-name">${item.company} </div>
    <div class="item-name">${item.item_name} </div>
    <div class="item-price">
       <span class="current-price">Rs ${item.current_price} </span>
       <span class="original-price">Rs ${item.original_price} </span>
       <span class="discount">(${item.discount_percentage}  % OFF)</span>
    </div>
      <button class="item-button" onclick='addToBag(${item.id})'>Add To Bag</button>
 </div>`;
})

itemscontainers.innerHTML=innerHtml;
}
 