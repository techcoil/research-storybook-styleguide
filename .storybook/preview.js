import "../styles/globals.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const withThemes = (Story, context) => {
  const { theme } = context.globals 
  
  theme.map(({ property, value }) => {
    document.documentElement.style.setProperty(property, value);
  });

  return <Story />
};

export const decorators = [withThemes];


export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme for components",
    defaultValue: [
      {
        property: "--scheme-primary",
        value: "brown",
      },
      {
        property: "--scheme-secondary",
        value: "maroon",
      },
      {
        property: "--scheme-danger",
        value: "beige",
      },
    ],
    toolbar: {
      icon: "circlehollow",
      dynamicTitle: true,
      items: [
        {
          title: "light",
          value: [
            {
              property: "--scheme-primary",
              value: "black",
            },
            {
              property: "--scheme-secondary",
              value: "yellow",
            },
            {
              property: "--scheme-danger",
              value: "red",
            },
          ],
        },
        {
          title: "dark",
          value: [
            {
              property: "--scheme-primary",
              value: "yellow",
            },
            {
              property: "--scheme-secondary",
              value: "black",
            },
            {
              property: "--scheme-danger",
              value: "pink",
            },
          ],
        },
        {
          title: "noon",
          value: [
            {
              property: "--scheme-primary",
              value: "brown",
            },
            {
              property: "--scheme-secondary",
              value: "maroon",
            },
            {
              property: "--scheme-danger",
              value: "beige",
            },
          ],
        },
        {
          title: "fire",
          value: [
            {
              property: "--scheme-primary",
              value: "firebrick",
            },
            {
              property: "--scheme-secondary",
              value: "orange",
            },
            {
              property: "--scheme-danger",
              value: "red",
            },
          ],
        },
      ],
    },
  },
};

