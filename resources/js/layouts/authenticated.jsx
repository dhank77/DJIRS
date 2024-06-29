import { Link, usePage } from "@inertiajs/react";
import {
   AlertCircle,
   Bell,
   CheckCheckIcon,
   Home,
   LineChart,
   Package,
   Package2,
   ShoppingCart,
   Users,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/partials/header";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster, toast } from "sonner";
import Sidebar from "@/components/partials/sidebar";

export default function Authenticated({ children }) {
   const { flash } = usePage().props;

   flash &&
      flash.messages !== "" &&
      toast(flash.messages, {
         icon:
            flash.type == "success" ? (
               <CheckCheckIcon className="text-green-500" />
            ) : (
               <AlertCircle className="text-red-500" />
            ),
      });

   return (
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
         <Toaster />
         <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
            <div className="hidden border-r bg-muted/40 md:block">
               <div className="flex h-full max-h-screen flex-col gap-2">
                  <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                     <Link
                        href="/"
                        className="flex items-center gap-2 font-semibold"
                     >
                        <Package2 className="h-6 w-6" />
                        <span className="">DJIRS</span>
                     </Link>
                     <Button
                        variant="outline"
                        size="icon"
                        className="ml-auto h-8 w-8"
                     >
                        <Bell className="h-4 w-4" />
                        <span className="sr-only">Toggle notifications</span>
                     </Button>
                  </div>
                  <Sidebar />
               </div>
            </div>
            <div className="flex flex-col">
               <Header />
               {children}
            </div>
         </div>
      </ThemeProvider>
   );
}
