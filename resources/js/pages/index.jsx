import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Link, usePage } from "@inertiajs/react"

export default function Index() {
  const pr = usePage().props

  return (
    <div className="h-screen grid place-content-center">
      <Card className="w-full max-w-xl shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl text-center">WELCOME - DJIRS</CardTitle>
        </CardHeader>
        <CardContent>
          <h1 className="text-4xl font-bold">Django Inertia React Shadcn</h1>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button variant='secondary' asChild>
            <Link href="/login">Login Page</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
