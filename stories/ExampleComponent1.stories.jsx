import React, { useState } from "react";

import ExampleComponent1 from "../components/ExampleComponent1";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/ExampleComponent1",
  component: ExampleComponent1,
  parameters: {
    layout: "centered",
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    onClick: { action: "clicked" },
    themeType: {
      control: {
        type: "select",
        options: ["primary", "secondary", "accent"],
      },
    },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (
  <>
    <ExampleComponent1 {...args} />
  </>
);

export const Primary = (args) => {
  const [compAmount, setCompAmount] = useState(1);
  return (
    <div className="flex flex-wrap gap-4 justify-center items-center">
      {Array(compAmount).fill(
        <div
          className="cursor-pointer"
          onClick={() => setCompAmount((prev) => prev + 1)}
        >
          <ExampleComponent1 {...args} />
        </div>
      )}
    </div>
  );
};
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  themeType: "primary",
};

export const Secondary = (args) => {
  const [compAmount, setCompAmount] = useState(1);
  return (
    <div className="flex flex-wrap gap-4 justify-center items-center">
      {Array(compAmount).fill(
        <div
          className="cursor-pointer"
          onClick={() => setCompAmount((prev) => prev + 1)}
        >
          <ExampleComponent1 {...args} />
        </div>
      )}
    </div>
  );
};
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Secondary.args = {
  themeType: "secondary",
};

export const Accent = (args) => {
  const [compAmount, setCompAmount] = useState(1);
  return (
    <div className="flex flex-wrap gap-4 justify-center items-center">
      {Array(compAmount).fill(
        <div
          className="cursor-pointer"
          onClick={() => setCompAmount((prev) => prev + 1)}
        >
          <ExampleComponent1 {...args} />
        </div>
      )}
    </div>
  );
};
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Accent.args = {
  themeType: "accent",
};

export const MultipleCards = () => {
  return (
    <div className="flex gap-10">
      <ExampleComponent1 themeType={"primary"} />
      <ExampleComponent1 themeType={"secondary"} />
      <ExampleComponent1 themeType={"accent"} />
    </div>
  );
};


export const ChangingCards = () => {
  const [compAmount, setCompAmount] = useState(1);
  const themes = ["primary", "secondary", "accent"]
  return (
    <div className="flex flex-wrap gap-4 justify-center items-center">
      {/* {themes.slice(0,themes.length).map( */}
      {themes.slice(0,compAmount).map(theme => (<div
          className="cursor-pointer"
          onClick={() => setCompAmount((prev) => prev + 1)}
        >
          <ExampleComponent1 themeType={theme} title={theme} />
        </div>
      ))}
    </div>
  );
};

