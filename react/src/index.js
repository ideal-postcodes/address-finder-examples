import React, { useState, useEffect, useRef } from "react";
import { createRoot } from 'react-dom/client';
import { AddressFinder } from "@ideal-postcodes/address-finder";

const App = () => {
  const [address, setAddress] = useState({
    line_1: "",
    line_2: "",
    line_3: "",
    post_town: "",
    postcode: "",
  });

  const inputId = "line_1";

  const shouldRender = useRef(true);

  useEffect(() => {
    if (shouldRender.current) {
      shouldRender.current = false;
      AddressFinder.setup({
        outputFields: {
          line_1: "#line_1",
          line_2: "#line_2",
          line_3: "#line_3",
          post_town: "#post_town",
          postcode: "#postcode"
        },
        apiKey: window.apiKey || "ak_test",
        injectStyle: true,
        onAddressRetrieved: ({line_1, line_2, line_3, post_town, postcode}) =>
            setAddress({line_1, line_2, line_3, post_town, postcode}),
      });
    }
  }, []);

  return (
    <div className="col-xs-12 col-md-6 col-md-offset-3">
      <form>
        <div className="form-group">
          <label>Line 1</label>
          <input
            type="text"
            id={inputId}
            value={address.line_1}
            className="form-control"
            onChange={(e) => setAddress({ ...address, line_1: e.target.value })}
          />
          <label>Line 2</label>
          <input
            type="text"
            id="line_2"
            value={address.line_2}
            className="form-control"
            onChange={(e) => setAddress({ ...address, line_2: e.target.value })}
          />
          <label>Line 3</label>
          <input
            type="text"
            id="line_3"
            value={address.line_3}
            className="form-control"
            onChange={(e) => setAddress({ ...address, line_3: e.target.value })}
          />
          <label>Post Town</label>
          <input
            type="text"
            id="post_town"
            value={address.post_town}
            className="form-control"
            onChange={(e) =>
              setAddress({ ...address, post_town: e.target.value })
            }
          />
          <label>Postcode</label>
          <input
            type="text"
            id="postcode"
            value={address.postcode}
            className="form-control"
            onChange={(e) => setAddress({ ...address, postcode: e.target.value })}
          />
        </div>
      </form>
    </div>
  );
};
const root = createRoot(document.getElementById("root"));
root.render(<App />);
