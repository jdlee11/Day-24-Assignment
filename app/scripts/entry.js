import router from "./router";
import Backbone from "backbone";

router.navigate("homepage", {trigger: true});
Backbone.history.start();
