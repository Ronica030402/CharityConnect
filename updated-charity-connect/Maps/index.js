import { AppRegistry } from "react-native";
import App from "./Maps";

AppRegistry.registerComponent("App", () => App);

AppRegistry.runApplication("App", {
  rootTag: document.getElementById("root")
});
