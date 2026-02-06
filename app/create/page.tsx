"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Magnetic } from "@/components/motion-primitives/magnetic";
import { ResizeIcon, XIcon } from "@phosphor-icons/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { routes } from "@/routes";
import PixelBlast from "@/components/PixelBlast";

export default function Page() {
  // state
  const [size, setSize] = useState("md");

  //   routing
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
        rippleSpeed={0.8}
        rippleThickness={1.12}
        rippleIntensityScale={1.5}
        liquid={false}
        liquidStrength={0.12}
        liquidRadius={1.2}
        liquidWobbleSpeed={5}
        speed={0.5}
        edgeFade={0.25}
        transparent
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 z-50">
        <Card
          className={`w-full transition-all duration-300 ease-out ${size === "md" ? "max-w-md" : "max-w-lg"}`}
        >
          <CardHeader>
            <div className="flex justify-start gap-1">
              <Button
                size={"icon-xs"}
                className="bg-red-500 rounded-full h-5 w-5 hover:bg-red-600 transition-colors"
                onClick={() => {
                  router.push(routes.home);
                }}
              >
                <XIcon />
              </Button>
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
            <CardTitle>Create Your Valentine 💌</CardTitle>
            <CardDescription>
              Craft a heartfelt message for someone special
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="flex flex-col gap-5">
                <div className="grid gap-2">
                  <Label htmlFor="senderName">Your Name</Label>
                  <Input
                    id="senderName"
                    type="text"
                    placeholder="Your name"
                    required
                    className="border-none h-7"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="senderEmail">Your Email</Label>
                  <Input
                    id="senderEmail"
                    type="email"
                    placeholder="you@example.com"
                    required
                    className="border-none h-7"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="recipientName">Recipient&apos;s Name</Label>
                  <Input
                    id="recipientName"
                    type="text"
                    placeholder="Their name"
                    required
                    className="border-none h-7"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="recipientEmail">Recipient&apos;s Email</Label>
                  <Input
                    id="recipientEmail"
                    type="email"
                    placeholder="them@example.com"
                    required
                    className="border-none h-7"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="message">Your Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Write your heartfelt message here..."
                    rows={4}
                    required
                    className="border-none"
                  />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter>
            <div className="w-full">
              <Magnetic
                intensity={0.2}
                springOptions={springOptions}
                actionArea="global"
                range={500}
              >
                <Button
                  type="submit"
                  variant={"secondary"}
                  className="w-full rounded shadow text-sm"
                >
                  <Magnetic
                    intensity={0.1}
                    springOptions={springOptions}
                    actionArea="global"
                    range={300}
                  >
                    Send Valentine 💝
                  </Magnetic>
                </Button>
              </Magnetic>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
