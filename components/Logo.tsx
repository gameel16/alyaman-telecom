
import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "w-12 h-12" }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Outer Glow Circles */}
      <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full"></div>
      
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]">
        {/* WiFi Waves */}
        <path d="M25 40C35 30 65 30 75 40" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className="text-emerald-400" />
        <path d="M35 50C42 45 58 45 65 50" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className="text-blue-500" />
        
        {/* Phone Frame / Chip */}
        <rect x="38" y="55" width="24" height="35" rx="3" stroke="currentColor" strokeWidth="4" className="text-slate-300" />
        <circle cx="50" cy="85" r="2" fill="currentColor" className="text-slate-300" />
        
        {/* Circuit lines */}
        <path d="M38 70H30V60" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-blue-500" />
        <path d="M62 70H70V60" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-emerald-400" />
        <circle cx="30" cy="60" r="2" fill="currentColor" className="text-blue-500" />
        <circle cx="70" cy="60" r="2" fill="currentColor" className="text-emerald-400" />
      </svg>
    </div>
  );
};

export default Logo;
