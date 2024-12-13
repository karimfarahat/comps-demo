import classNames from "classnames";
import useNavigation from "../hooks/use-navigation";
// the whole idea for this component is to make the click on
// the <a> NOT cause a total page refresh
function Link({ to, children, className, activeClassName }) {
  const { navigate, currentPath } = useNavigation();
  const classes = classNames(
    "text-blue-500",
    className,
    currentPath === to && activeClassName
  );
  const handleClick = (event) => {
    // if the user used 'CTRL + Click' to open new tab, don't prevent default!
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    event.preventDefault();
    navigate(to);
  };
  return (
    <a className={classes} href={to} onClick={handleClick}>
      {children}
    </a>
  );
}

export default Link;
