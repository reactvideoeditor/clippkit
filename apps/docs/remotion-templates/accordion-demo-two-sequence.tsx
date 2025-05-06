import React from "react";

import AccordionDemoTwo from "../registry/default/examples/accordion-demo-two"; // Adjusted path

// This is your Remotion-compatible component
const AccordionDemoTwoSequence: React.FC = () => {
  // You can add Remotion-specific logic or hooks here if needed in the future
  // For example, useCurrentFrame(), interpolate(), etc.
  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <AccordionDemoTwo />
    </div>
  );
};

export default AccordionDemoTwoSequence;
