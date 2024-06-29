export default function Guest({ children }) {
   return (
      <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
         <div className="flex items-center justify-center py-12">
            {children}
         </div>
         <div className="hidden bg-muted lg:block">
            <img
               src="/media/django.jpg"
               alt="Image"
               width="1920"
               className="h-screen w-full object-cover dark:brightness-[0.2] dark:grayscale"
            />
         </div>
      </div>
   );
}
