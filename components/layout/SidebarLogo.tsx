import { useRouter } from "next/router";

const SidebarLogo = () => {
  const router = useRouter();
  
  return (
    <div 
      onClick={() => router.push('/')}
      className="
        rounded-full 
        h-18
        w-17
        p-4 
        flex 
        items-center 
        justify-center 
        hover:bg-blue-300 
        hover:bg-opacity-10 
        cursor-pointer
    ">
      <img src="/logo.png" alt="Custom Logo" width={48} height={48} />
    </div>
  );
};

export default SidebarLogo;
