import $ from "jquery";
import _ from "underscore";
import renderOrderItem from "./orderItemView";
import renderConfirmation from "./confirmationView";

function renderOrderView(order){
  let $order = $(`
    <div class="order-container">
    </div>
  `);
  let total = 0;
  $order.append($("<h1>Your Order</h1>"));
  order.models.forEach(function(orderItem){
    let $newOrderItem = renderOrderItem(orderItem, order);
    $order.append($newOrderItem);
    let priceString = "";
    if (typeof orderItem.attributes.price === "object"){
      priceString = orderItem.attributes.price[_.keys(orderItem.attributes.price)[0]];
    } else {
      priceString = orderItem.attributes.price;
    }
    total += Number(priceString);
  });

  let tax = Math.ceil(total * 8) / 100;
  $order.append($(`<p class="tax">Tax: $${tax}</p>`));
  total = Math.ceil((total + tax) * 100) / 100;
  $order.append($(`<h2>Total: $${total}</h2>`));
  let $button = $("<button class=\"submit\">Order Now</button>");
  $button.on("click", function(){
    $.ajax({
      type: "POST",
      url: "http://tiny-za-server.herokuapp.com/collections/jlee-day-24",
      contentType: "application/json",
      data: JSON.stringify({
        myOrder: order,
        cost: total
      }),
      success: function(response){
        let $confirmation = renderConfirmation(order, total);
        $(".container").empty().append($confirmation);
      }
    });
  });
  $order.append($button);
  return $order;
}

export default renderOrderView;
