import Backbone from "backbone";
import MenuItem from "../models/menuItem";

const MenuItems = Backbone.Collection.extend({
  model: MenuItem,
  // DO NOT modify the content of this collection!!!!!!!!!
  url: "https://tiy-austin-front-end-engineering.github.io/restaurantApi/cafe.json"
});

let menuCollection = new MenuItems();

export default menuCollection;
