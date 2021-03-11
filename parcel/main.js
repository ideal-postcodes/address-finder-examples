import { AddressFinder } from "@ideal-postcodes/address-finder";

window.addEventListener("load", async () => {
  AddressFinder.setup({
    inputField: "#input",
    apiKey: window.apiKey || "iddqd",
    checkKey: false,
    injectStyle: true,
    outputFields: {
      line_1: "#line_1",
      line_2: "#line_2",
      line_3: "#line_3",
      post_town: "#post_town",
      postcode: "#postcode",
    },
  });
});
