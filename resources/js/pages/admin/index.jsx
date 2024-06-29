import Authenticated from "@/layouts/authenticated";
import { Button } from "@/components/ui/button";

export default function Index() {
  return (
      <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
        <div className="flex items-center">
          <h1 className="text-lg font-semibold md:text-2xl">Welcome to DJIRS</h1>
        </div>
      </main>
  );
}

Index.layout = (page) => <Authenticated children={page} />
