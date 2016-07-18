import Backbone from "backbone";
import OrderItem from "../models/orderItem";

const OrderItems = Backbone.Collection.extend({
  model: OrderItem,
  url: "http://tiny-za-server.herokuapp.com/collections/jlee-day-24"
});

export default OrderItems;
