import React, { useMemo } from "react";
// use prop types here
import PropTypes from "prop-types";

const ExampleComponent1 = ({title, themeType, ...props }) => {
  const secondaryTheme = {
    bgColor: "#80A4ED",
    textColor: "#D4CB92",
  };

  const accentTheme = {
    bgColor: "#E6E1C5",
    textColor: "#395C6B",
  };

  const chosenTheme = useMemo(() => {
    switch (themeType) {
      case "secondary":
        return secondaryTheme;
      case "accent":
        return accentTheme;
      case "primary":
        return {};
      default:
        return {};
    }
  }, [themeType]);

  return (
    <div
      {...props}
      className="w-52 aspect-[1/1.5] bg-primary text-tx-primary rounded-lg flex justify-center items-center text-xl"
      style={{
        "--color-primary": chosenTheme.bgColor,
        "--text-color-primary": chosenTheme.textColor,
      }}
    >
      {title}
    </div>
  );
};

export default ExampleComponent1;

ExampleComponent1.propTypes = {
  themeType: PropTypes.oneOf(["primary","secondary", "accent"]),
};

