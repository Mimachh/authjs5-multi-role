import { Navbar } from "./_components/navbar";

interface ProtectedLayoutProps {
  children: React.ReactNode;
};

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  return ( 
    <div className="h-full max-w-5xl mx-auto">
      <Navbar />
      {children}
    </div>
   );
}
 
export default ProtectedLayout;