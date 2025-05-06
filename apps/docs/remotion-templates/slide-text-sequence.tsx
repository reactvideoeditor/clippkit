"use client";

import { spring, useCurrentFrame, useVideoConfig } from "remotion";

interface SlideTextProps {
  text?: string;
  textColor?: string;
  fontSize?: string;
  slideDirection?: "left" | "right" | "top" | "bottom";
  durationInFrames?: number;
  initialOffset?: number;
  damping?: number;
  mass?: number;
  stiffness?: number;
}

export default function SlideText({
  text = "Sliding Text!",
  textColor = "var(--foreground)",
  fontSize = "4rem",
  slideDirection = "left",
  durationInFrames = 30,
  initialOffset = 200,
  damping = 12,
  mass = 0.5,
  stiffness = 100, // Default stiffness
}: SlideTextProps) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const opacity = spring({
    frame,
    fps,
    from: 0,
    to: 1,
    durationInFrames,
  });

  const slideAnimation = spring({
    frame,
    fps,
    from: initialOffset,
    to: 0,
    durationInFrames,
    config: {
      damping,
      mass,
      stiffness,
    },
  });

  let transformStyle = "";
  switch (slideDirection) {
    case "left":
      transformStyle = `translate(-50%, -50%) translateX(${slideAnimation}px)`;
      break;
    case "right":
      transformStyle = `translate(-50%, -50%) translateX(${-slideAnimation}px)`;
      break;
    case "top":
      transformStyle = `translate(-50%, -50%) translateY(${slideAnimation}px)`;
      break;
    case "bottom":
      transformStyle = `translate(-50%, -50%) translateY(${-slideAnimation}px)`;
      break;
    default:
      transformStyle = `translate(-50%, -50%) translateX(${slideAnimation}px)`;
  }

  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: transformStyle,
        width: "100%",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          opacity,
          color: textColor,
          fontSize: fontSize,
          fontWeight: "bold",
        }}
      >
        {text}
      </h1>
    </div>
  );
}
