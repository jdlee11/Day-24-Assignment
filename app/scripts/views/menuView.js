import $ from "jquery";
import renderMenuItem from "./menuItemView";
import _ from "underscore";

function renderMenuView(menu, order){
  let $menu = $(`
    <div class="menu-container">
      <h1>Our Menu</h1>
      <!--<h2>Appetizers</h2> get categories from data-->
    </div>
  `);
  let categories = _.keys(menu);
  categories.forEach(function(category){
    let $newCategory = $(`<h2>${category}</h2>`);
    menu[category].forEach(function(item){
      let $newItem = renderMenuItem(item, order);
      $newCategory.append($newItem);
    });
    $menu.append($newCategory);
  });
  return $menu;
}

export default renderMenuView;
