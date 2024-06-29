import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Link, usePage } from "@inertiajs/react";
import { sidebarLink } from "@/constant/sidebar-link";
import { Menu, Package2 } from "lucide-react";

export default function SidebarMobile() {
  const { path } = usePage().props;
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="shrink-0 md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col">
        <nav className="grid gap-2 text-lg font-medium">
          <Link
            href="#"
            className="flex items-center gap-2 text-lg font-semibold"
          >
            <Package2 className="h-6 w-6" />
            <span className="sr-only">DJIRS</span>
          </Link>
          {sidebarLink.map((value, index) => (
            <SheetClose asChild key={index}>
              <Link
                href={value.route}
                className={`${value.route == path ? 'text-primary': 'text-muted-foreground' } mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2`}
              >
                <value.imageIcon className="h-5 w-5" />
                {value.label}
              </Link>
            </SheetClose>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
