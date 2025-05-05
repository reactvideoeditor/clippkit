import Image from "next/image";
import Link from "next/link";
import RveLogo from "@/public/images/logos/rve-logo.svg";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { LineDecorator } from "@/components/line-decorator";

export default function HomePage() {
  return (
    <main className="flex h-full flex-col">
      <div className="max-w-fd-container mx-auto flex h-full items-center px-3">
        <div className="relative flex h-full w-full flex-col items-center justify-center gap-4 sm:gap-6">
          <LineDecorator
            orientation="vertical"
            className="bg-decorator-line absolute bottom-0 left-[15%] -z-20 mask-y-from-80% duration-1300"
          />
          <LineDecorator className="bg-decorator-line mr-auto mask-x-from-90% duration-1300" />
          <h1 className="from-foreground max-w-2xl text-center text-4xl leading-tight font-light tracking-tight sm:text-5xl md:text-6xl lg:leading-[1.1]">
            The Component Library for Video Creation
          </h1>
          <LineDecorator className="bg-decorator-line ml-auto mask-x-from-90% duration-1300" />
          <p className="text-muted-foreground max-w-sm text-center text-sm font-normal tracking-tight sm:max-w-2xl sm:text-lg md:max-w-3xl lg:max-w-xl">
            {siteConfig.description}
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
            <div>
              <Link
                href="/docs/ui"
                prefetch
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "w-full max-w-xs"
                )}
              >
                Get Started
              </Link>
            </div>
            <div>
              <Link
                href="/docs/ui/accordion"
                prefetch
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "w-full max-w-xs"
                )}
              >
                Explore Components
              </Link>
            </div>
          </div>
          <LineDecorator
            orientation="vertical"
            className="bg-decorator-line absolute top-0 right-[15%] -z-20 mask-y-from-90% duration-1300"
          />
        </div>
      </div>
      <footer className="flex h-16 items-center justify-center">
        <div className="max-w-fd-container w-fit px-3">
          <p className="text-muted-foreground flex items-center gap-1.5 text-sm font-medium tracking-tight">
            Brought to you by{" "}
            <Link
              href="https://www.reactvideoeditor.com/"
              target="_blank"
              className="text-foreground inline-flex items-center gap-1 font-medium underline-offset-4 transition-colors hover:underline"
              prefetch
            >
              RVE
            </Link>
            <Image
              src={RveLogo}
              alt="RVE Logo"
              width={16}
              height={16}
              className="inline-block"
            />
          </p>
        </div>
      </footer>
    </main>
  );
}
