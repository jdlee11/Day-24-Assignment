import $ from "jquery";
import _ from "underscore";
import renderOrderView from "./orderView";

function renderMenuItem(item, order){
  let priceString = "";
  if (typeof item.price === "object"){
    let sizes = _.keys(item.price);
    sizes.forEach(function(size){
      priceString += " " + size + " " + item.price[size];
    });
  } else {
    priceString = item.price;
  }
  let $item = $(`
    <div class="menu-item">
      <p class="name">${item.item}<span>${priceString}</span></p>
      <p class="description">${item.description}</p>
      <i class="fa fa-star ${(item["local fav"]) ? "" : "isTrue"}"></i>
      <i class="fa fa-heartbeat ${(item["low sodium"]) ? "" : "isTrue"}"></i>
      <i class="fa fa-sort-numeric-desc ${(item["under 500 cals"]) ? "" : "isTrue"}"></i>
    </div>
  `);
  $item.find(".name").on("click", function(){
    order.add(item);
  });
  return $item;
}

export default renderMenuItem;
