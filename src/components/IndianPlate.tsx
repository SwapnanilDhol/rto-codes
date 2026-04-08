"use client";

interface IndianPlateProps {
  primaryCode: string;
  alternateCode?: string;
}

export default function IndianPlate({
  primaryCode,
  alternateCode,
}: IndianPlateProps) {
  const displayCode = primaryCode.replace(/-/g, " ");

  return (
    <div className="w-full">
      <svg
        viewBox="0 0 840 190"
        className="h-auto w-full"
        role="img"
        aria-label={`Indian vehicle registration plate ${primaryCode}`}
      >
        <defs>
          <linearGradient id="plateSurface" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#f4f4f5" />
          </linearGradient>
          <linearGradient id="boltFill" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f8fafc" />
            <stop offset="30%" stopColor="#dbe4ee" />
            <stop offset="65%" stopColor="#8a97a8" />
            <stop offset="100%" stopColor="#475569" />
          </linearGradient>
          <radialGradient id="boltHighlight" cx="32%" cy="28%" r="68%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.95)" />
            <stop offset="45%" stopColor="rgba(255,255,255,0.2)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </radialGradient>
          <filter id="plateShadow" x="-10%" y="-20%" width="120%" height="150%">
            <feDropShadow dx="0" dy="8" stdDeviation="8" floodColor="#0f172a" floodOpacity="0.14" />
          </filter>
        </defs>

        <g filter="url(#plateShadow)">
          <rect x="20" y="20" width="800" height="150" rx="20" fill="url(#plateSurface)" stroke="#121212" strokeWidth="5" />
          <rect x="28" y="28" width="784" height="134" rx="14" fill="none" stroke="#121212" strokeWidth="2" />
        </g>

        <g transform="translate(74 56)" fill="#184f9c" stroke="#184f9c">
          <circle cx="20" cy="20" r="7" fill="none" strokeWidth="3" />
          {Array.from({ length: 24 }).map((_, index) => {
            const angle = (index * Math.PI) / 12;
            const x1 = 20 + Math.cos(angle) * 11;
            const y1 = 20 + Math.sin(angle) * 11;
            const x2 = 20 + Math.cos(angle) * 21;
            const y2 = 20 + Math.sin(angle) * 21;
            return (
              <line
                key={index}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                strokeWidth="2"
                strokeLinecap="round"
              />
            );
          })}
          <text
            x="20"
            y="84"
            textAnchor="middle"
            fontSize="32"
            fontWeight="500"
            letterSpacing="1.5"
            fill="#184f9c"
            stroke="none"
          >
            IND
          </text>
        </g>

        <text
          x="176"
          y="119"
          fontSize="72"
          fontWeight="800"
          letterSpacing="0.5"
          textLength="590"
          lengthAdjust="spacingAndGlyphs"
          fontFamily="Arial, Helvetica, sans-serif"
          fill="#fafafa"
          opacity="0.95"
        >
          {displayCode}
        </text>
        <text
          x="176"
          y="117"
          fontSize="72"
          fontWeight="800"
          letterSpacing="0.5"
          textLength="590"
          lengthAdjust="spacingAndGlyphs"
          fontFamily="Arial, Helvetica, sans-serif"
          fill="#111111"
        >
          {displayCode}
        </text>

        <path
          d="M42 48 C172 24, 412 14, 796 30"
          fill="none"
          stroke="rgba(255,255,255,0.75)"
          strokeWidth="7"
          strokeLinecap="round"
          opacity="0.36"
        />
        <path
          d="M56 138 C196 128, 508 128, 790 142"
          fill="none"
          stroke="rgba(15,23,42,0.06)"
          strokeWidth="4"
          strokeLinecap="round"
          opacity="0.32"
        />
        <path d="M300 58 L364 49" stroke="rgba(15,23,42,0.06)" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M606 132 L654 138" stroke="rgba(15,23,42,0.05)" strokeWidth="1.2" strokeLinecap="round" />

        <g>
          <circle cx="52" cy="95" r="10" fill="url(#boltFill)" stroke="#334155" strokeWidth="1.4" />
          <circle cx="788" cy="95" r="10" fill="url(#boltFill)" stroke="#334155" strokeWidth="1.4" />
          <circle cx="49.5" cy="92.5" r="4.8" fill="url(#boltHighlight)" opacity="0.75" />
          <circle cx="785.5" cy="92.5" r="4.8" fill="url(#boltHighlight)" opacity="0.75" />
          <path d="M46.5 95 h11" stroke="#1e293b" strokeWidth="1.3" strokeLinecap="round" />
          <path d="M52 89.5 v11" stroke="#1e293b" strokeWidth="1.3" strokeLinecap="round" />
          <path d="M782.5 95 h11" stroke="#1e293b" strokeWidth="1.3" strokeLinecap="round" />
          <path d="M788 89.5 v11" stroke="#1e293b" strokeWidth="1.3" strokeLinecap="round" />
        </g>
      </svg>

      {alternateCode ? (
        <p className="mt-3 text-center text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
          Also seen as {alternateCode}
        </p>
      ) : null}
    </div>
  );
}
