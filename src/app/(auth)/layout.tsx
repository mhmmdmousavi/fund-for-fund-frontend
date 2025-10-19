import Nav from "@/components/nav/Nav";
import Footer from "@/components/footer/Footer";

export default function authLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div>
        <Nav/>
        {children}
        <Footer/>
      </div>

  );
}
