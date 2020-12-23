import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@hsbo/homepage",
  app: () => import("@hsbo/homepage"),
  activeWhen: ["/"]
});

start({
  urlRerouteOnly: true,
});
