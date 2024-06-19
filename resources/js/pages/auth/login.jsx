import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, router } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { Toaster } from "@/components/ui/sonner"
import { toast } from "sonner"



export default function Login(props) {

  const { errors } = props
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const changeValue = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  function onSubmit(e) {
    e.preventDefault();
    router.post("/login", values);
  }

  return (
    <>
      <Toaster />
      <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
        
        <div className="flex items-center justify-center py-12">
          <div className="mx-auto grid w-[350px] gap-6">
            <div className="grid gap-2 text-center">
              <h1 className="text-3xl font-bold">Login</h1>
              <p className="text-balance text-muted-foreground">
                Enter your email below to login to your account
              </p>
            </div>
            <div className="grid gap-4">
              <form onSubmit={onSubmit}>
                <div className="grid gap-2 mb-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="text"
                    name="email"
                    placeholder="m@example.com"
                    onChange={changeValue}
                    value={values.email}
                    required
                  />
                  {errors?.email && ( <div className="text-red-500"> {errors.email} </div> )}
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                    <Link
                      href="/forgot-password"
                      className="ml-auto inline-block text-sm underline"
                    >
                      Forgot your password?
                    </Link>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    name="password"
                    required
                    placeholder="Password"
                    onChange={changeValue}
                    value={values.password}
                  />

                  {errors?.password && ( <div className="text-red-500"> {errors.password} </div> )}
                </div>
                <Button type="submit" className="w-full mt-2">
                  Login
                </Button>
              </form>
            </div>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link href="/" className="underline">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden bg-muted lg:block">
          <img
            src="https://picsum.photos/200"
            alt="Image"
            width="1920"
            height="1080"
            className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
          />
        </div>
      </div>
    </>
  );
}
