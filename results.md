# Storybook Style Guide Research Results

I have found that I

To incorporate a new toolbar feature within a storybook project, one can utilize the `@storybook/addon-toolbars` library. This library is part of the essential addons that are pre-installed with a standard storybook installation.

We would then need to add it the to addons inside main js.

```javascript
"addons": [
//maybe some addons here
"@storybook/addon-toolbars",
//maybe some more here
]
```

The next thing we would need to do is create a globalTypes object inside of our preview.js file:

`export const globalTypes = {}`

Inside of it we will need to define the variable we would like to receive globally, in this case it’s the theme

```javascript
export const globalTypes = { theme: {} };
```

Inside the theme lets define, the name of our toolbar addon, and lets give it a description

```javascript
export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme for components",
  },
};
```

Lets define another variable called ```toolbar``` where we will be able to control to toolbar addon attached to the ```theme``` global type, now lets also define inside of it the ```values``` we would like the toolbar to present and the ```icon``` we want it to have,

```javascript
export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme for components",
    toolbar: {
      icon: "circlehollow",
      items: ['light','dark','noon','fire']
    },
  },
};
```

Now if we go back to storybook we will be able to see a new icon in the toolbar, now we want to seperate the item title from its value, we can do that by seperating each item into an object with title and value.

 inside the value we will place an array of objects with all of the css properties and their corresponding values.

 ```javascript 
 
 export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme for components",
    toolbar: {
      icon: "circlehollow",
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

 ```

 Now we need a new decorator so we can use the values given to us and pass it on to the story.

 Let's create another function in preview.js, lets call it withThemes and it will act as an HOC wrapping our story components.

 ```javascript 

const withThemes = (Story, context) => {
  const { theme } = context.globals 
  
  theme.map(({ property, value }) => {
    document.documentElement.style.setProperty(property, value);
  });

  return <Story />
};

 ```

 What is happening here is we are getting the ```Story``` argument and using it to render our story, we are also recieving a context argument, and we can then destructure our theme from it, what we will then do is iterate over the theme's values and attach each css property to its matching value.

Now we need to export the decorator so storybook knows how to use it, we will do it like this.

```javascript
export const decorators = [withThemes];
```


