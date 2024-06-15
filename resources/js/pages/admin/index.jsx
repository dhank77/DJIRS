import Authenticated from "@/layouts/authenticated";

export default function Index() {
  return (
    <Authenticated>
      <div>Hello Admin</div>
    </Authenticated>
  )
}
