import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Script, ScriptStrategy } from "gatsby";

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        {/* <script
      src="https://cdn.lr-in-prod.com/LogRocket.min.js"
      crossorigin="anonymous"
      async
    ></script>
    <script>
      window.LogRocket && window.LogRocket.init("sry39u/aurora-code-homepage");
    </script> */}
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>

      {/* <script src="https://auroracode.io/js/app.min.js?_v=20230110090738"></script>
      <script src="https://auroracode.io/js/form.js" async></script> */}
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
