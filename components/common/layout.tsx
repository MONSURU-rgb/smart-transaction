import { ReactNode } from "react";
import { Header, Sidebar } from "..";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen overflow-auto">
      <Sidebar withLogo={true} />

      <Main>{children}</Main>
    </div>
  );
}

export function Main({ children }: { children: ReactNode }) {
  return (
    <div className="flex-1 no-scrollbar ml-[200px] max-[867px]:ml-0 min-[1050px]:ml-[220px] h-screen overflow-auto">
      <Header />
      {children}
    </div>
  );
}
