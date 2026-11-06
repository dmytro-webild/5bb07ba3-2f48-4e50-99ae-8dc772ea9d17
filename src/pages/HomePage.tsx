import AboutMediaOverlay from '@/components/sections/about/AboutMediaOverlay';
import ContactCta from '@/components/sections/contact/ContactCta';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeaturesDetailedSteps from '@/components/sections/features/FeaturesDetailedSteps';
import HeroBrand from '@/components/sections/hero/HeroBrand';
import MetricsIconCards from '@/components/sections/metrics/MetricsIconCards';
import PricingMediaCards from '@/components/sections/pricing/PricingMediaCards';
import SocialProofMarquee from '@/components/sections/social-proof/SocialProofMarquee';
import TestimonialMarqueeOverlayCards from '@/components/sections/testimonial/TestimonialMarqueeOverlayCards';
import { Rocket, Search, Smartphone } from "lucide-react";
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroBrand
      brand="Phoenix Exclusive Web Build"
      description="AI-powered web design for small businesses in Arizona. Get a professional, SEO-ready, mobile-friendly website with no monthly fees."
      primaryButton={{
        text: "Get Started",
        href: "#contact",
      }}
      secondaryButton={{
        text: "Learn More",
        href: "#about",
      }}
      imageSrc="http://img.b2bpic.net/free-photo/focused-woman-working-with-ai-chatbot-her-desktop-computer_482257-126438.jpg"
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="about" data-section="about">
    <SectionErrorBoundary name="about">
          <AboutMediaOverlay
      tag="About Us"
      title="Elevating Phoenix Businesses"
      description="Owned by Japhia Hill, Phoenix Exclusive Web Build helps local businesses establish a digital presence. We leverage AI technology to deliver fast, optimized, and modern websites that drive local growth."
      imageSrc="http://img.b2bpic.net/free-photo/empty-ai-tech-agency-workspace-providing-custom-software-development-services_482257-120228.jpg"
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="services" data-section="services">
    <SectionErrorBoundary name="services">
          <FeaturesDetailedSteps
      tag="Our Process"
      title="AI-Driven Excellence"
      description="We follow a streamlined approach to bring your business online."
      steps={[
        {
          tag: "Step 1",
          title: "AI Strategy",
          subtitle: "Defining Needs",
          description: "We analyze your business goals and current digital presence to create a targeted strategy.",
          imageSrc: "http://img.b2bpic.net/free-photo/glowing-abstract-wave-pattern-futuristic-design-generated-by-ai_188544-38547.jpg",
        },
        {
          tag: "Step 2",
          title: "Design Build",
          subtitle: "Development",
          description: "Our team constructs a mobile-friendly website tailored to your brand identity.",
          imageSrc: "http://img.b2bpic.net/free-photo/view-nutritional-counter-app-composition_23-2149880612.jpg",
        },
        {
          tag: "Step 3",
          title: "Optimization",
          subtitle: "SEO Ready",
          description: "We implement advanced SEO practices to ensure you are discovered by your local Phoenix audience.",
          imageSrc: "http://img.b2bpic.net/free-photo/3d-abstract-network-communications-background-with-plexus-design_1048-18865.jpg",
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="pricing" data-section="pricing">
    <SectionErrorBoundary name="pricing">
          <PricingMediaCards
      tag="Simple Pricing"
      title="One Transparent Fee"
      description="No hidden costs, no recurring monthly subscriptions."
      plans={[
        {
          tag: "Standard",
          price: "$500",
          period: "one-time",
          features: [
            "Custom Design",
            "Mobile Optimization",
            "SEO Ready",
            "AI-Powered",
            "Fast Delivery",
          ],
          primaryButton: {
            text: "Start Now",
            href: "#contact",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/communication-social-media-icons-personal-computer_23-2150781061.jpg",
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="metrics" data-section="metrics">
    <SectionErrorBoundary name="metrics">
          <MetricsIconCards
      tag="Our Impact"
      title="Delivering Results"
      description="We focus on real metrics that help your small business thrive."
      metrics={[
        {
          icon: Rocket,
          title: "Launch Speed",
          value: "72h",
        },
        {
          icon: Search,
          title: "SEO Score",
          value: "95+",
        },
        {
          icon: Smartphone,
          title: "Responsive",
          value: "100%",
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="testimonials" data-section="testimonials">
    <SectionErrorBoundary name="testimonials">
          <TestimonialMarqueeOverlayCards
      tag="Trusted by Local Business"
      title="Client Success"
      description="Don't just take our word for it."
      testimonials={[
        {
          name: "Sarah Miller",
          role: "Owner",
          company: "LocalCafe",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-woman-working-business-with-computer_482257-20185.jpg",
        },
        {
          name: "David Clark",
          role: "Owner",
          company: "RepairShop",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-happy-middle-aged-business-leader_1262-4823.jpg",
        },
        {
          name: "Emily Chen",
          role: "Founder",
          company: "Boutique",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-middle-aged-man-with-beard-hairstyle-dressed-elegant-blue-suit-textured-dark-background-studio_613910-19881.jpg",
        },
        {
          name: "Mark Evans",
          role: "Manager",
          company: "ServiceCo",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-asian-waitress-cafe-manager-working-with-tablet-graphic-tablet_1258-199016.jpg",
        },
        {
          name: "Jessica Lee",
          role: "Director",
          company: "FitnessCenter",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/confident-asian-businesswoman-showing-thumbs-up-standing-near-entrance-her-cafe-restaurant-rec_1258-126151.jpg",
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="social-proof" data-section="social-proof">
    <SectionErrorBoundary name="social-proof">
          <SocialProofMarquee
      tag="Partners"
      title="Phoenix Partners"
      description="We are proud to serve the Phoenix business ecosystem."
      names={[
        "Phoenix Commerce",
        "AZ Small Biz Network",
        "Desert Innovators",
        "Valley Growth Tech",
        "Local Biz Alliance",
        "Sun City Partners",
        "Grand Canyon Digital",
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="faq" data-section="faq">
    <SectionErrorBoundary name="faq">
          <FaqSplitMedia
      tag="FAQ"
      title="Frequently Asked Questions"
      description="Common questions about our AI-powered web design services."
      items={[
        {
          question: "What does the $500 fee include?",
          answer: "The fee covers full custom design, AI-powered development, mobile responsiveness, and basic SEO configuration.",
        },
        {
          question: "Are there monthly costs?",
          answer: "No. We charge a one-time fee only. Your only ongoing cost is your own hosting and domain provider.",
        },
        {
          question: "How long does a build take?",
          answer: "Most websites are ready to launch in 72 hours from the initial discovery call.",
        },
        {
          question: "Can you handle SEO?",
          answer: "Yes, we build every site with SEO-best practices from the ground up to ensure you rank well locally.",
        },
      ]}
      textAnimation="fade-blur"
      imageSrc="http://img.b2bpic.net/free-photo/focused-woman-working-with-ai-chatbot-her-desktop-computer_482257-126438.jpg"
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="Get Started"
      text="Ready to bring your business online? Contact Japhia Hill today."
      primaryButton={{
        text: "Email Us",
        href: "mailto:japhiacool@gmail.com",
      }}
      secondaryButton={{
        text: "Call Us",
        href: "tel:+14800000000",
      }}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
