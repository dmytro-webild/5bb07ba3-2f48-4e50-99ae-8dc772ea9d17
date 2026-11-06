import FooterMinimal from '@/components/sections/footer/FooterMinimal';
import NavbarFloating from '@/components/ui/NavbarFloating';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Instagram, Linkedin, Twitter } from "lucide-react";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
  {
    "name": "About",
    "href": "#about"
  },
  {
    "name": "Services",
    "href": "#services"
  },
  {
    "name": "Pricing",
    "href": "#pricing"
  },
  {
    "name": "Contact",
    "href": "#contact"
  },
  {
    "name": "Hero",
    "href": "#hero"
  },
  {
    "name": "Metrics",
    "href": "#metrics"
  },
  {
    "name": "Testimonials",
    "href": "#testimonials"
  }
];

  return (
    <StyleProvider buttonVariant="bounce" siteBackground="gridLines" heroBackground="lightRaysCorner">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarFloating
      logo="Phoenix Exclusive"
      ctaButton={{
        text: "Get Started",
        href: "#contact",
      }}
     navItems={navItems} />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <FooterMinimal
      brand="Phoenix Exclusive Web Build"
      copyright="© 2024 Phoenix Exclusive. Built for growth."
      socialLinks={[
        {
          icon: Twitter,
          href: "#",
        },
        {
          icon: Instagram,
          href: "#",
        },
        {
          icon: Linkedin,
          href: "#",
        },
      ]}
    />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}
