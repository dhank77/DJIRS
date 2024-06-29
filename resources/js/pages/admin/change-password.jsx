import {
   Card,
   CardContent,
   CardFooter,
   CardHeader,
   CardTitle,
} from "@/components/ui/card";
import Authenticated from "@/layouts/authenticated";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { router } from "@inertiajs/react";

export default function ChangePassword({ errors }) {
   const [values, setValues] = useState({
      password: "",
      new_password: "",
      confirm_password: "",
   });

   const onChange = (event) => {
      setValues({
         ...values,
         [event.target.name]: event.target.value,
      });
   };

   const handleSubmit = (event) => {
      event.preventDefault();
      router.post("/admin/change-password/", values);
   };

   return (
      <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
         <div className="flex items-center">
            <h1 className="text-lg font-semibold md:text-2xl">
               Manage Password
            </h1>
         </div>

         <form onSubmit={handleSubmit}>
            <div className="lg:max-w-xl">
               <Card className="bg-sky-300 dark:bg-sky-900">
                  <CardHeader></CardHeader>
                  <CardContent>
                     <div className="grid w-full max-w-md items-center gap-1.5 mb-6">
                        <Label htmlFor="password">Old Password</Label>
                        <Input
                           type="password"
                           name="password"
                           id="password"
                           placeholder="password"
                           onChange={onChange}
                        />
                        {errors?.password && (
                           <div className="text-red-500">
                              {" "}
                              {errors.password}{" "}
                           </div>
                        )}
                     </div>
                     <div className="grid w-full max-w-md items-center gap-1.5 mb-6">
                        <Label htmlFor="new_password">New Password</Label>
                        <Input
                           type="password"
                           id="new_password"
                           name="new_password"
                           placeholder="new password"
                           onChange={onChange}
                        />
                        {errors?.new_password && (
                           <div className="text-red-500">
                              {" "}
                              {errors.new_password}{" "}
                           </div>
                        )}
                     </div>
                     <div className="grid w-full max-w-md items-center gap-1.5 mb-6">
                        <Label htmlFor="confirm_password">
                           Confirm Password
                        </Label>
                        <Input
                           type="password"
                           id="confirm_password"
                           name="confirm_password"
                           placeholder="confirm password"
                           onChange={onChange}
                        />
                         {errors?.confirm_password && (
                           <div className="text-red-500">
                              {" "}
                              {errors.confirm_password}{" "}
                           </div>
                        )}
                     </div>
                  </CardContent>
                  <CardFooter className="flex justify-end">
                     <Button type="submit">Submit</Button>
                  </CardFooter>
               </Card>
            </div>
         </form>
      </main>
   );
}

ChangePassword.layout = (page) => <Authenticated children={page} />;
