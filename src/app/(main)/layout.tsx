import FooterMain from "@/components/footer/FooterMain";
import NavMain from "@/components/nav/NavMain";

export default function authLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <NavMain />
      {children}
      <FooterMain/>
    </div>
  );
}
