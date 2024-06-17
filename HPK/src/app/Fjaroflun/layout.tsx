"use client";
import TopNav from "@/app/Components/NavBar/TopNav";
import UmOkkur from "@/app/Components/UmOkkur/UmOkkur";

export default function VorurLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <TopNav />
      {children}
      <UmOkkur />
    </section>
  );
}
