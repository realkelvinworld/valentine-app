"use client";
import { Magnetic } from "@/components/motion-primitives/magnetic";
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
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  const springOptions = { bounce: 0.1 };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-4">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-5xl text-center">💔</CardTitle>
          <CardTitle className="text-xl text-center">Lost in love...</CardTitle>
          <CardDescription className="text-center">
            This page doesn&apos;t exist. We broke it. We&apos;re sorry.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground text-center">
            Looks like you&apos;ve wandered off the path. Let&apos;s get you
            back to spreading the love.
          </p>
        </CardContent>
        <CardFooter className="flex flex-col gap-2">
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
                router.push(routes.home);
              }}
            >
              <Magnetic
                intensity={0.1}
                springOptions={springOptions}
                actionArea="global"
                range={200}
              >
                Go home
              </Magnetic>
            </Button>
          </Magnetic>
        </CardFooter>
      </Card>
    </div>
  );
}
