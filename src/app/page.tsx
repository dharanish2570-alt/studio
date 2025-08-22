import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Logo } from "@/components/logo";
import { ShieldCheck, Siren, MapPin, Cloud } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center bg-card shadow-sm">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <Logo className="h-6 w-6 text-primary" />
          <span className="sr-only">GuardianEye</span>
        </Link>
        <h1 className="ml-2 text-xl font-bold text-primary">GuardianEye</h1>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="/login">
            <Button>Login / Sign Up</Button>
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline">
                    Your Safety, Our Priority
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    GuardianEye provides real-time monitoring and alerts to ensure a secure environment for everyone at any gathering.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/login">
                    <Button size="lg">Get Started</Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                 <Logo className="h-48 w-48 text-primary animate-pulse" />
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Key Features</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Proactive Safety for Peace of Mind</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform combines intelligent risk assessment with instant alerts to keep you safe and informed.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-2 lg:max-w-none xl:grid-cols-4">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="bg-primary/10 rounded-md p-3 w-fit">
                    <ShieldCheck className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="mt-4">AI-Powered Risk Assessment</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Leverages AI to analyze various factors and proactively identify potential risks in your environment.</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                   <div className="bg-primary/10 rounded-md p-3 w-fit">
                    <Siren className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="mt-4">Real-Time Alerts</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Receive immediate notifications for hazards like low oxygen, accidents, or severe weather conditions.</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                   <div className="bg-primary/10 rounded-md p-3 w-fit">
                    <MapPin className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="mt-4">Emergency Location Sharing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>In case of an emergency, share your precise location with authorities for a swift response.</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="bg-primary/10 rounded-md p-3 w-fit">
                   <Cloud className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="mt-4">Weather Awareness</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Stay updated with timely weather information to anticipate and prepare for any weather-related risks.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 GuardianEye. All rights reserved.</p>
      </footer>
    </div>
  );
}
