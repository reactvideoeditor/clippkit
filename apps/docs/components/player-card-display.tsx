"use client";

import { Player } from "@remotion/player";

// Removed Copy and Check icon imports as the copy button isn't here currently
// import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface PlayerCardProps {
  name: string;
  subtitle: string;
  component: React.ComponentType;
  duration: number;
  fps: number;
  slug: string;
  sourceCode: string;
  isNew?: boolean;
}

export default function PlayerCardDisplay({
  name,
  subtitle,
  component,
  duration,
  fps,
  slug,
  sourceCode,
  isNew,
}: PlayerCardProps) {
  console.log("PlayerCardDisplay Props:", {
    name,
    subtitle,
    slug,
    sourceCode,
    isNew,
    duration,
    fps,
  });

  return (
    <div className="group border-border bg-card hover:border-primary/20 relative overflow-hidden rounded-xl border transition-all hover:shadow-lg hover:shadow-blue-500/10">
      {/* Removed Tooltip and Copy button for now to simplify, can be added back if sourceCode is successfully passed */}

      <div className="aspect-video w-full overflow-hidden object-cover">
        <Player
          component={component}
          durationInFrames={duration}
          fps={fps}
          compositionWidth={960}
          compositionHeight={540}
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "var(--background)",
            objectFit: "cover",
          }}
          controls
          autoPlay
          loop={true}
        />
      </div>
    </div>
  );
}
