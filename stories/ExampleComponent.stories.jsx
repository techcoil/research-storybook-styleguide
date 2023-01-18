import React, { useState } from "react";

import ExampleComponent from "../components/ExampleComponent";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "test/ExampleComponent",
  component: ExampleComponent,
};

export const Primary = (args) => {
  return (
    <div className="flex flex-wrap gap-4 h-[90vh] bg-primary justify-center items-center">
          <ExampleComponent {...args} />
    </div>
  );
};
