import $ from "jquery";
import _ from "underscore";
import renderOrderView from "./orderView";

function renderOrderItem(item, order){
  let priceString = "";
  if (typeof item.attributes.price === "object"){
    priceString = item.attributes.price[_.keys(item.attributes.price)[0]];
  } else {
    priceString = item.attributes.price;
  }
  let $orderItem = $(`
    <div class="order-item">
      <p>${item.attributes.item}<span>$${priceString}</span></p>
    </div>
  `);
  $orderItem.find("p").on("click", function(){
    order.remove(item);
    renderOrderView(order);
  });

  return $orderItem;
}

export default renderOrderItem;
