// Import React and React Dom
import React from "react";
import ReactDom from "react-dom";

import { Hello } from "./Hello";
import { World } from "./World";

// A React component it's just a function that returns JSX, also can be writen
// as a Class using ES6 sintax, but Function Components are more used nowdays
// The name of component must begin with an uppercase letter, due to an lowercase
// name will be treated as a built-in HTML tag.
function HelloWorld() {
  return (
    <div>
      <h1>
        <Hello/>{' '}<World/>
      </h1>
    </div>
    // The above is JSX, it's a sintax created by React to write HTML in a more
    // conveniet way this will be converted by Babel into
    // React.createElement(
    //      'div',
    //      {},
    //      React.createElement(
    //        'h1',
    //        {},
    //        React.createElement(
    //            Hello,
    //            {},
    //            null
    //        ),
    //        React.createElement(
    //            World,
    //            {},
    //            null
    //        ),
    //      )
    //  )
  );
}

// To render the component as the main component of the app we need to attach
// it to a real DOM element, in this case a div with the 'root' id
ReactDom.render(<HelloWorld />, document.querySelector("#root"));
