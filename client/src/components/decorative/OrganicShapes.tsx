export function TornPaperDivider({ className = "", flip = false }: { className?: string; flip?: boolean }) {
  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className={`w-full h-16 sm:h-20 ${flip ? "rotate-180" : ""}`}
        fill="currentColor"
      >
        <path d="M0,0 L50,8 L100,2 L150,12 L200,4 L250,15 L300,6 L350,18 L400,8 L450,20 L500,10 L550,22 L600,12 L650,25 L700,14 L750,28 L800,16 L850,30 L900,18 L950,32 L1000,20 L1050,35 L1100,22 L1150,38 L1200,24 L1200,120 L0,120 Z" />
      </svg>
    </div>
  );
}

export function OrganicBlob({ className = "", variant = "primary" }: { className?: string; variant?: "primary" | "blush" | "muted" }) {
  const colors = {
    primary: "fill-primary/10",
    blush: "fill-blush/20",
    muted: "fill-muted/20",
  };

  return (
    <svg
      viewBox="0 0 200 200"
      className={`${colors[variant]} ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M45.3,-51.2C58.3,-40.3,68.5,-25.1,71.2,-8.4C73.9,8.3,69.1,26.5,58.2,40.1C47.3,53.7,30.3,62.7,12.1,66.2C-6.1,69.7,-25.5,67.7,-41.1,58.6C-56.7,49.5,-68.5,33.3,-72.3,15.4C-76.1,-2.5,-71.9,-22.1,-61.3,-36.5C-50.7,-50.9,-33.7,-60.1,-16.8,-62.8C0.1,-65.5,32.3,-62.1,45.3,-51.2Z" transform="translate(100 100)" />
    </svg>
  );
}

export function DecorativeLeaves({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={`${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="0.5"
      opacity="0.15"
    >
      <path d="M20,80 Q30,60 25,40 Q20,60 30,80" />
      <path d="M25,75 Q35,55 30,35 Q25,55 35,75" />
      <path d="M70,85 Q80,65 75,45 Q70,65 80,85" />
      <path d="M75,80 Q85,60 80,40 Q75,60 85,80" />
      <path d="M45,90 Q55,70 50,50 Q45,70 55,90" />
    </svg>
  );
}

export function WavyDivider({ className = "", flip = false }: { className?: string; flip?: boolean }) {
  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <svg
        viewBox="0 0 1200 60"
        preserveAspectRatio="none"
        className={`w-full h-8 sm:h-12 ${flip ? "rotate-180" : ""}`}
        fill="currentColor"
      >
        <path d="M0,30 Q150,0 300,30 T600,30 T900,30 T1200,30 L1200,60 L0,60 Z" />
      </svg>
    </div>
  );
}

export function CornerDecoration({ className = "", position = "top-right" }: { className?: string; position?: "top-right" | "top-left" | "bottom-right" | "bottom-left" }) {
  const transforms = {
    "top-right": "",
    "top-left": "scale(-1, 1)",
    "bottom-right": "scale(1, -1)",
    "bottom-left": "scale(-1, -1)",
  };

  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="0.8"
      style={{ transform: transforms[position] }}
      opacity="0.2"
    >
      <path d="M100,0 Q80,20 60,15 Q70,30 50,40 Q65,45 45,60 Q60,58 40,75 Q55,70 35,90" />
      <path d="M95,0 Q75,15 58,12 Q68,25 50,35" />
      <circle cx="90" cy="10" r="2" fill="currentColor" />
      <circle cx="75" cy="20" r="1.5" fill="currentColor" />
      <circle cx="60" cy="35" r="1" fill="currentColor" />
    </svg>
  );
}
