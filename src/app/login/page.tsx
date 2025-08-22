import Link from "next/link";
import { AuthForm } from "@/components/auth-form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Logo } from "@/components/logo";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <div className="w-full max-w-md">
        <Card className="shadow-2xl">
          <CardHeader className="text-center">
            <Link href="/" className="inline-block mb-4">
              <Logo className="h-12 w-12 text-primary mx-auto" />
            </Link>
            <CardTitle className="text-2xl font-headline">Welcome to GuardianEye</CardTitle>
            <CardDescription>Enter your details to get started.</CardDescription>
          </CardHeader>
          <CardContent>
            <AuthForm />
            <p className="mt-4 text-center text-sm text-muted-foreground">
              By logging in, you agree to our terms of service.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
