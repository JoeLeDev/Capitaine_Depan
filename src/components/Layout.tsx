import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { CookieBanner } from "./CookieBanner";
import { FloatingCallButton } from "./FloatingCallButton";
import { FooterBar } from "./FooterBar";
import { Header } from "./Header";
import { LocalBusinessSchema } from "./LocalBusinessSchema";
import { SeoHead } from "./SeoHead";

export function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col bg-brand-black">
      <SeoHead />
      <LocalBusinessSchema />
      <Header />
      <Outlet />
      <FooterBar />
      <FloatingCallButton />
      <CookieBanner />
    </div>
  );
}
