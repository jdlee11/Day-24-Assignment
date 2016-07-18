import $ from "jquery";
import Backbone from "backbone";
import renderOrderItem from "./orderItemView";

function renderConfirmation(order, total){
  let $order = $(`
    <div class="confirm-container">
    </div>
  `);
  $order.append($("<h1>Order Submitted</h1>"));
  order.models.forEach(function(orderItem){
    let $newOrderItem = renderOrderItem(orderItem, order);
    $order.append($newOrderItem);
  });
  $order.append($(`<h2>Total: $${total}</h2>`));
  return $order;
}


export default renderConfirmation;
