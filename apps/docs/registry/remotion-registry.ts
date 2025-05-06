import AccordionDemoTwoSequence from "../remotion-templates/accordion-demo-two-sequence";
import SlideTextSequence from "../remotion-templates/slide-text-sequence";

export const RemotionIndex = {
  "accordion-demo-two-sequence": {
    name: "Accordion Two Sequence",
    subtitle: "Displays the Accordion Two component in a Remotion video.",
    component: AccordionDemoTwoSequence,
    duration: 300, // Example: 10 seconds at 30 FPS
    fps: 30,
    slug: "accordion-demo-two-sequence",
    sourcePath: "apps/docs/remotion-templates/accordion-demo-two-sequence.tsx",
    // isNew?: true, // Optional
  },
  "slide-text-sequence": {
    name: "Slide Text Animation",
    subtitle: "A simple text sliding and fading in animation.",
    component: SlideTextSequence,
    duration: 60, // Example: 2 seconds at 30 FPS (adjust as needed)
    fps: 30,
    slug: "slide-text-sequence",
    sourcePath: "apps/docs/remotion-templates/slide-text-sequence.tsx",
  },
  // Add other Remotion components here as you create them
};
