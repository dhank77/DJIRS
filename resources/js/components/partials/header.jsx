import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu";
import { useTheme } from "@/components/theme-provider";
import { CircleUser, MoonIcon, SunIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, usePage } from "@inertiajs/react";
import SidebarMobile from "./sidebar-mobile";

export function Header() {
    const {setTheme} = useTheme();
    const { user } = usePage().props

    return (
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
            <SidebarMobile />
            <div className="w-full flex-1">
                <form>
                    <div className="relative">
                        <h4 className="font-semibold">Hello, {user.first_name}</h4>
                    </div>
                </form>
            </div>
            <button
                className="hidden dark:block hover:text-muted-foreground"
                onClick={() => setTheme("light")}
            >
                <MoonIcon />
            </button>
            <button
                className="block dark:hidden hover:text-muted-foreground"
                onClick={() => setTheme("dark")}
            >
                <SunIcon />
            </button>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        variant="secondary"
                        size="icon"
                        className="rounded-full"
                    >
                        <CircleUser className="h-5 w-5" />
                        <span className="sr-only">Toggle user menu</span>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Settings</DropdownMenuItem>
                    <DropdownMenuItem>Support</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="w-full" asChild>
                        <Link href='/logout' as="button" method="post">
                            Logout
                        </Link>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </header>
    );
}
