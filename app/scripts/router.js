import $ from "jquery";
import Backbone from "backbone";
import menuItems from "./collections/menuItems";
import renderMenuView from "./views/menuView";
import _ from "underscore";
import OrderItems from "./collections/orderItems";
import renderOrderView from "./views/orderView";


const Router = Backbone.Router.extend({
  routes: {
    homepage: "homepageFunction"

  },
  homepageFunction: function(){
    let myOrder = new OrderItems();
    let $menu;
    menuItems.fetch({
      success: function(){
        $menu = renderMenuView(menuItems.models[0].attributes, myOrder);
        $(".container").empty().append($menu);

        let $order = renderOrderView(myOrder);
        $(".container").append($order);

        setInterval(function(){
          $(".container").children(".order-container").detach();
          let $order = renderOrderView(myOrder);
          $(".container").append($order);
        }, 1000);

      }
    });
  }
});

const router = new Router();

export default router;
