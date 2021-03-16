# React Example

This example deploys Address Finder with React (via Webpack + Babel)

## Use in your app

### Install

```bash
npm install --save @ideal-postcodes/address-finder
```

### Usage

See `src/index.js` for a working example. Given a pre-existing React form, you may take the following steps to integrate Address Finder.


1. Create an `id` to reference your input.

```javascript
const inputId = "line_1";

<input
  type="text"
  id={inputId}
  value={address.line_1}
  className="form-control"
  onChange={(e) => setAddress({ ...address, line_1: e.target.value })}
/>
```

2. Instantiate AddressFinder once when your input component has mounted with `componentDidMount` or `useEffect(() => {}, [])`, referencing your component by its id.

```javascript
React.useEffect(() => {
  AddressFinder.setup({
    inputField: document.getElementById(inputId),
    apiKey: "iddqd",
    injectStyle: true,
  });
}, []);
```

3. Use the onAddressRetrieved callback to update your app when the user has selected an address, whether this is invoking a hook, `setState()` or some other action.

```javascript
  const [address, setAddress] = useState({
    line_1: "",
    line_2: "",
    line_3: "",
    post_town: "",
    postcode: "",
  });

  React.useEffect(() => {
    AddressFinder.setup({
      /* ... */
      onAddressRetrieved: ({ line_1, line_2, line_3, post_town, postcode }) =>
        setAddress({ line_1, line_2, line_3, post_town, postcode }),
      /* ... */
    });
  }, []);
```

## Run this demo

```bash
npm install && npm start
```

Open [http://localhost:8081/](http://localhost:8081/)
