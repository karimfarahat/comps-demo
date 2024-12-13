//to name is as same as it will be in JSX elements
import className from "classnames";
import { twMerge } from "tailwind-merge";

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  // rest of props to pass things like onClick
  ...rest
}) {
  const classes = twMerge(
    // add any extra className button receives
    className(rest.className, "px-3 py-1.5 border flex items-center", {
      "border-blue-500 bg-blue-500 text-white": primary,
      "border-gray-900 bg-gray-900 text-white": secondary,
      "border-green-500 bg-green-500 text-white": success,
      "border-yellow-400 bg-yellow-400 text-white": warning,
      "border-red-500 bg-red-500 text-white": danger,
      "rounded-full": rounded,
      "bg-white": outline,
      "text-blue-500": outline && primary,
      "text-gray-900": outline && secondary,
      "text-green-500": outline && success,
      "text-yellow-400": outline && warning,
      "text-red-500": outline && danger,
    })
  );

  //without twMerge text-white overrides anything
  //   const classes = className("px-3 py-1.5 border", {
  //     //if primary is true, it will add this to className
  //     "border-blue-500 bg-blue-500 text-yellow-500": primary,
  //     "border-gray-900 bg-gray-900 text-white": secondary,
  //     "border-green-500 bg-green-500 text-white": success,
  //     "border-yellow-400 bg-yellow-400 text-white": warning,
  //     "border-red-500 bg-red-500 text-white": danger,
  //     "rounded-full": rounded,
  //     "bg-white": outline,
  //     //the later removes the older
  //     "text-blue-500": outline && primary,
  //     "text-gray-500": outline && secondary,
  //     "text-green-500": outline && success,
  //     "text-yellow-500": outline && warning,
  //     "text-red-500": outline && danger,
  //   });
  return (
    // add all props with ...rest
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}
Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);

    if (count > 1) throw new Error("Can't use 2 settings at once!");
  },
};
export default Button;
