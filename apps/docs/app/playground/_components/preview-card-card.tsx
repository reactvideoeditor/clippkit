import React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { ComponentCard } from "@/components/component-card";
import { Button, buttonVariants } from "@/registry/default/ui/button";
import {
  PreviewCard,
  PreviewCardContent,
  PreviewCardTrigger,
} from "@/registry/default/ui/preview-card";

export default function PreviewCardCard() {
  return (
    <ComponentCard name="Preview Card">
      <PreviewCard>
        <PreviewCardTrigger
          render={
            <Button variant="link" className="p-0">
              RVE
            </Button>
          }
        />
        <PreviewCardContent className="flex w-80 items-start gap-3">
          <div className="flex w-full flex-col gap-0.5">
            <p className="text-sm font-semibold">RVE</p>
            <p className="text-sm">React Video Editor</p>
            <Link
              className={cn(
                buttonVariants({ variant: "secondary", size: "sm" }),
                "mt-2"
              )}
              href="https://www.reactvideoeditor.com/"
            >
              RVE
            </Link>
          </div>
        </PreviewCardContent>
      </PreviewCard>
    </ComponentCard>
  );
}
