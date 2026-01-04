export function LeafIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 21c-4-4-8-7-8-12a8 8 0 0 1 16 0c0 5-4 8-8 12z" />
      <path d="M12 7v6" />
      <path d="M9 10c1.5 1 3 1.5 4.5 1" />
    </svg>
  );
}

export function SproutIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 20h10" />
      <path d="M12 20v-8" />
      <path d="M12 12c-2-2-6-2-6 2 0 3 4 3 6 1" />
      <path d="M12 12c2-2 6-2 6 2 0 3-4 3-6 1" />
      <path d="M12 8c0-4-4-4-6-2" />
      <path d="M12 8c0-4 4-4 6-2" />
    </svg>
  );
}

export function BookSproutIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 6v20c0 1 1 2 2 2h20c1 0 2-1 2-2V6c0-1-1-2-2-2H6c-1 0-2 1-2 2z" />
      <path d="M4 8h24" />
      <path d="M16 12v10" />
      <path d="M16 15c-1.5-1.5-4-1.5-4 1 0 2 2.5 2 4 0.5" />
      <path d="M16 15c1.5-1.5 4-1.5 4 1 0 2-2.5 2-4 0.5" />
      <path d="M16 12c0-2.5-2.5-2.5-4-1" />
      <path d="M16 12c0-2.5 2.5-2.5 4-1" />
    </svg>
  );
}

export function BudIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22V12" />
      <path d="M12 12c-3 0-5-2-5-5 0-1.5 1-3 3-3.5C11 2 12 2 12 2s1 0 2 1.5c2 0.5 3 2 3 3.5 0 3-2 5-5 5z" />
    </svg>
  );
}

export function CheckLeafIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 21c-4-4-8-7-8-12a8 8 0 0 1 16 0c0 5-4 8-8 12z" />
      <path d="M9 11l2 2 4-4" />
    </svg>
  );
}

export function BranchIcon({ className = "w-full h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 16" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round">
      <path d="M0 8h200" opacity="0.3" />
      <path d="M90 8c5-3 10-3 15 0" opacity="0.5" />
      <path d="M95 8c2-2 4-3 5-2" opacity="0.5" />
      <path d="M100 6c1-2 3-2 5 0" opacity="0.5" />
    </svg>
  );
}
