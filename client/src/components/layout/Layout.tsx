import { Header } from "./Header";
import { Footer } from "./Footer";
import backgroundImage from "@assets/generated_images/decorative_paper_background_pattern.png";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div 
      className="min-h-screen flex flex-col bg-background"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "auto",
        backgroundPosition: "top center",
        backgroundAttachment: "scroll",
        backgroundRepeat: "repeat",
      }}
    >
      <Header />
      <main className="flex-1">
        <div
          style={{
            background: "rgba(252, 248, 243, 0.30)",
          }}
        >
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}
