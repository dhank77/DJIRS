import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, router } from "@inertiajs/react";
import { useState } from "react";
import Guest from "../../layouts/guest";

export default function Login(props) {
  const { errors } = props;
  const [values, setValues] = useState({
    username: "",
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
    <div className="mx-auto grid w-[400px] gap-6">
      <div className="grid gap-2 text-center">
        <h1 className="text-3xl font-bold">Login</h1>
        <p className="text-balance text-muted-foreground">
          Enter your username below to login to your account
        </p>
      </div>
      <div className="grid gap-4">
        <form onSubmit={onSubmit}>
          <div className="grid gap-2 mb-2">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              type="text"
              name="username"
              placeholder="Username"
              onChange={changeValue}
              value={values.username}
              required
            />
            {errors?.username && (
              <div className="text-red-500"> {errors.username} </div>
            )}
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

            {errors?.password && (
              <div className="text-red-500"> {errors.password} </div>
            )}
          </div>
          <Button type="submit" className="w-full mt-8">
            Login
          </Button>
        </form>
      </div>
      <div className="mt-4 text-center text-sm">
        Don&apos;t have an account?{" "}
        <Link href="/register" className="underline">
          Register
        </Link>
      </div>
    </div>
  );
}

Login.layout = (page) => <Guest children={page} />
