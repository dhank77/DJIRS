import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, router } from "@inertiajs/react";
import { useState } from "react";
import Guest from "../../layouts/guest";

export default function Register(props) {
  const { errors } = props;
  const [values, setValues] = useState({
    first_name: "",
    last_name: "",
    email: "",
    username: "",
    password: "",
    confirm_password: "",
  });

  const changeValue = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  function onSubmit(e) {
    e.preventDefault();
    router.post("/register", values);
  }

  return (
    <div className="mx-auto grid w-[400px] gap-6">
      <div className="grid gap-2 text-center">
        <h1 className="text-3xl font-bold">Register</h1>
        <p className="text-balance text-muted-foreground">
          Register your account
        </p>
      </div>
      <div className="grid gap-4">
        <form onSubmit={onSubmit}>
          <div className="flex justify-between">
            <div className="grid gap-2 mb-2">
              <Label htmlFor="username">First Name</Label>
              <Input
                id="first_name"
                type="text"
                name="first_name"
                placeholder="First Name"
                onChange={changeValue}
                value={values.first_name}
              />
              {errors?.first_name && (
                <div className="text-red-500"> {errors.first_name} </div>
              )}
            </div>
            <div className="grid gap-2 mb-2">
              <Label htmlFor="username">Last Name</Label>
              <Input
                id="last_name"
                type="text"
                name="last_name"
                placeholder="Last Name"
                onChange={changeValue}
                value={values.last_name}
              />
              {errors?.last_name && (
                <div className="text-red-500"> {errors.last_name} </div>
              )}
            </div>
          </div>
          <div className="grid gap-2 mb-2">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              type="text"
              name="username"
              placeholder="username"
              onChange={changeValue}
              value={values.username}
            />
            {errors?.username && (
              <div className="text-red-500"> {errors.username} </div>
            )}
          </div>
          <div className="grid gap-2 mb-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="dhank77@djirs.com"
              onChange={changeValue}
              value={values.email}
            />
            {errors?.email && (
              <div className="text-red-500"> {errors.email}</div>
            )}
          </div>
          <div className="grid gap-2 mb-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
            </div>
            <Input
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              onChange={changeValue}
              value={values.password}
            />
            {errors?.password && (
              <div className="text-red-500"> {errors.password} </div>
            )}
          </div>
          <div className="grid gap-2 mb-2">
            <div className="flex items-center">
              <Label htmlFor="confirm_password">Confirm Password</Label>
            </div>
            <Input
              id="confirm_password"
              type="password"
              name="confirm_password"
              placeholder="Confirm Password"
              onChange={changeValue}
              value={values.confirm_password}
            />
            {errors?.confirm_password && (
              <div className="text-red-500"> {errors.confirm_password} </div>
            )}
          </div>
          <Button type="submit" className="w-full mt-8">
            Login
          </Button>
        </form>
      </div>
      <div className="mt-4 text-center text-sm">
        Have an account?{" "}
        <Link href="/login" className="underline">
          Login
        </Link>
      </div>
    </div>
  );
}

Register.layout = (page) => <Guest children={page} />
