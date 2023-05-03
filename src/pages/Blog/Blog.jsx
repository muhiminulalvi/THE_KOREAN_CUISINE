import React from "react";
import Pdf from "react-to-pdf";


const options = {
    orientation: 'landscape',
    unit: 'in',
  format: [11, 8.5],
  scale: 0.1
};

const Blog = () => {
    const ref = React.createRef();
  return (
    <div>
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="text-center" >
          <h3 className="py-10 font-extrabold text-5xl text-warning ">
            See Our Blogs
          </h3>
          <Pdf targetRef={ref} filename="The Korean Cuisine.pdf" options={options}>
            {({ toPdf }) => (
              <button onClick={toPdf} className="btn btn-warning font-bold">
                Generate PDF
              </button>
            )}
          </Pdf>
        </div>
        <div>
          <div className="py-10 px-8 bg-yellow-50 rounded shadow-md my-8" ref={ref}>
            <h2 className="text-3xl font-bold py-4">
              What is the differences between uncontrolled and controlled
              components?
            </h2>
            <p className="font-medium text-xl">
              {" "}
              === Form inputs that maintain their own state internally and
              independently of React are referred to as uncontrolled components.
              Examples include text inputs and checkboxes. A controlled
              component, on the other hand, is a form input whose value is
              managed by React. The primary difference between the two is that
              controlled components use React to maintain their state, whereas
              uncontrolled components manage their own.{" "}
            </p>
          </div>
          <div className="py-10 px-8 bg-yellow-50 rounded shadow-md my-8">
            <h2 className="text-3xl font-bold py-4">
              How to validate React props using PropTypes?
            </h2>
            <p className="font-medium text-xl">
              {" "}
              === To provide type checking to component properties, React uses a
              mechanism called PropTypes. PropTypes is a unique property used by
              React components to configure type verification. A React component
              verifies the props it receives against the type definitions set in
              the propTypes property. On the console, a warning appears whenever
              an invalid value for a prop is passed. If the React component has
              default props set, the values are resolved before type checking
              against propTypes. Therefore, the prop type definitions also apply
              to default values. There are many validators including, any, bool,
              number, string, func, object etc.
            </p>
          </div>
          <div className="py-10 px-8 bg-yellow-50 rounded shadow-md my-8">
            <h2 className="text-3xl font-bold py-4">
              What is the difference between nodejs and express js?
            </h2>
            <p className="font-medium text-xl">
              {" "}
              === Node.js is a server-side JavaScript runtime environment that
              enables developers to create server-side JavaScript applications.
              Express.js, on the other hand, is a web application framework
              built on Node.js. With routing, middleware, and template engines,
              it offers a collection of tools and utilities that make it simpler
              to create web applications using Node.js. In other words, Node.js
              serves as a basis for developing server-side JavaScript
              applications, and Express.js serves as a framework for developing
              web apps on top of Node.js. As a result, the key difference
              between Node.js and Express.js is that the former is a server-side
              runtime environment for JavaScript, whilst the latter is a
              framework for developing web apps using Node.js.
            </p>
          </div>
          <div className="py-10 px-8 bg-yellow-50 rounded shadow-md my-8">
            <h2 className="text-3xl font-bold py-4">
              What is a custom hook, and why will you create a custom hook?
            </h2>
            <p className="font-medium text-xl">
              {" "}
              === If you want to reuse stateful logic between components in
              React, you can do so by using a custom hook, which is a JavaScript
              function that begins with the prefix "use". Without requiring
              higher-order components or render properties, or duplicating any
              code, custom hooks give components a means to exchange logic. To
              manage state and side effects within the function, custom hooks
              utilize built-in React hooks like useState, useEffect, and
              useContext. There are several causes for which you may develop a
              unique hook:
            </p>
            <ul className="py-4">
              <li className="font-medium text-xl">
                1. Reusability: If you see that you frequently duplicate code
                across several components, you can extract the same logic into a
                special hook to make it reusable.
              </li>
              <li className="font-medium text-xl">
                2. Abstraction: Using custom hooks, you can abstract complicated
                functionality and provide your components a simpler, more
                declarative interface. This can improve the readability and
                comprehension of your code.
              </li>
              <li className="font-medium text-xl">
                3. Separation of concerns: By separating stateful functionality
                from your components with custom hooks, you may increase the
                modularity and maintainability of your code.
              </li>
              <li className="font-medium text-xl">
                4. Testing: You can more easily test complex logic in isolation
                from your components by enclosing it in a custom hook.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
