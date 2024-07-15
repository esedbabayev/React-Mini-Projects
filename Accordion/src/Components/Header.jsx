const classes = {
  containerClasses: "border-b border-gray-200 p-10",
  headerClasses: "text-md font-medium mb-5",
  textClasses: "text-xs text-gray-500 leading-relaxed",
};

const Header = () => {
  return (
    <div className={classes.containerClasses}>
      <h1 className={classes.headerClasses}>
        Several windows stacked on each other
      </h1>
      <p className={classes.textClasses}>
        The accordion is a graphical control element comprising a vertically
        stacked list of items sich as labels or thumbnails
      </p>
    </div>
  );
};

export default Header;