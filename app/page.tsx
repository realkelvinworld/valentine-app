"use client";

import { Magnetic } from "@/components/motion-primitives/magnetic";
import PixelBlast from "@/components/PixelBlast";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { routes } from "@/routes";
import { ResizeIcon } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  // state
  const [size, setSize] = useState("sm");

  // Routing
  const router = useRouter();

  // Animation config
  const springOptions = { bounce: 0.1 };

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        position: "relative",
        backgroundColor: "oklch(0.9399 0.0203 345.6985)",
      }}
    >
      <PixelBlast
        variant="square"
        pixelSize={4}
        color="oklch(0.9399 0.0203 345.6985)"
        patternScale={2}
        patternDensity={1}
        pixelSizeJitter={0}
        enableRipples
        rippleSpeed={0.4}
        rippleThickness={0.12}
        rippleIntensityScale={1.5}
        liquid={false}
        liquidStrength={0.12}
        liquidRadius={1.2}
        liquidWobbleSpeed={5}
        speed={0.5}
        edgeFade={0.25}
        transparent
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <Card
          className={`w-full transition-all duration-300 ease-out ${size === "md" ? "max-w-sm" : "max-w-md"}`}
        >
          <CardHeader>
            <div className="flex justify-start gap-1">
              <Button
                size={"icon-xs"}
                className="bg-emerald-500 hidden lg:flex md:flex rounded-full h-5 w-5 hover:bg-emerald-600 transition-colors"
                onClick={() => {
                  setSize(size === "md" ? "lg" : "md");
                }}
              >
                <ResizeIcon />
              </Button>
            </div>
            <CardTitle className="text-xl">Got a crush? 👀</CardTitle>
            <CardDescription>
              Stop overthinking and just send it
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Create a cute valentine message and shoot your shot. Worst case?
              They say no. Best case? 💕
            </p>
          </CardContent>
          <CardFooter>
            <Magnetic
              intensity={0.2}
              springOptions={springOptions}
              actionArea="global"
              range={200}
            >
              <Button
                variant={"secondary"}
                className="w-full rounded shadow"
                onClick={() => {
                  router.push(routes.create);
                }}
              >
                <Magnetic
                  intensity={0.1}
                  springOptions={springOptions}
                  actionArea="global"
                  range={200}
                >
                  Let&apos;s go 💘
                </Magnetic>
              </Button>
            </Magnetic>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
