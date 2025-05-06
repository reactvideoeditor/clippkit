"use client";

import * as React from "react";

import { RemotionIndex } from "@/registry/remotion-registry";

import PlayerCardDisplay from "./player-card-display"; // Assuming sequence-card-display.tsx is in the same directory

interface PlayerCardContainerProps {
  templateName: string;
  sourceCode?: string; // This will be injected by rehype-component.ts
}

export function PlayerCard({
  templateName,
  sourceCode,
}: PlayerCardContainerProps) {
  // Access the Remotion registry, assuming it's at Index.remotion
  // You'll need to define this structure in your registry.
  // Example of what an entry in Index.remotion[templateName] should look like:
  // {
  //   name: "My Awesome Animation",
  //   subtitle: "A cool subtitle for the animation",
  //   component: YourRemotionComponent, // The actual Remotion component
  //   duration: 300, // Duration in frames
  //   fps: 30,
  //   slug: "my-awesome-animation", // For generating links
  //   sourcePath: "apps/docs/remotion-templates/my-awesome-animation.tsx", // Path for rehype to read code
  //   isNew?: true,
  // }
  const templateDetails = (RemotionIndex as any)?.[templateName];

  console.log("Template Details", templateDetails);

  if (!templateDetails) {
    return (
      <p className="text-muted-foreground text-sm">
        Remotion template{" "}
        <code className="bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm">
          {templateName}
        </code>{" "}
        not found in registry. Ensure it is defined in{" "}
        <code>RemotionIndex</code>.
      </p>
    );
  }

  const { name, subtitle, component, duration, fps, slug, isNew } =
    templateDetails;

  if (!sourceCode) {
    console.warn(
      `Source code for Remotion template '${templateName}' was not pre-loaded. ` +
        `This should be injected by the 'rehype-component.ts' plugin. ` +
        `Ensure 'sourcePath' is correctly defined in the registry (Index.remotion["${templateName}"].sourcePath).`
    );
  }

  return (
    <PlayerCardDisplay
      name={name as string}
      subtitle={subtitle as string}
      component={component as React.ComponentType}
      duration={duration as number}
      fps={fps as number}
      slug={slug as string}
      sourceCode={
        sourceCode ||
        "// Source code not available. Check rehype plugin and registry sourcePath."
      }
      isNew={isNew as boolean | undefined}
    />
  );
}
