# Webpack Example

## Use in your app

### Install

```bash
npm install --save @ideal-postcodes/address-finder
```

### Usage

```javascript
import { AddressFinder } from "@ideal-postcodes/address-finder";

AddressFinder.setup({
  inputField: "#input",
  apiKey: "iddqd",
  injectStyle: true,
  outputFields: {
    line_1: "#line_1",
    line_2: "#line_2",
    line_3: "#line_3",
    post_town: "#post_town",
    postcode: "#postcode",
  },
});
```

## Run this demo

```bash
npm install && npm start
```

Open [http://localhost:8081/](http://localhost:8081/)
