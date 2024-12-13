import classNames from "classnames";

// Panel component to make reusable panel for Dropdown options

// ...rest here collects the rest of the properties in an object and call is "rest"
function Panel({ children, className, ...rest }) {
  // to accept extra classnames
  const finalClassNames = classNames(
    "border rounded p-3 shadow bg-white w-full",
    className
  );
  return (
    // ...rest here is destructured
    <div {...rest} className={finalClassNames}>
      {children}
    </div>
  );
}

export default Panel;
