import { Linkedin, MessagesSquare } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative py-20 bg-background border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 items-start">

          {/* Branding & Copyright */}
          <div>
            <div className="font-display text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/50 tracking-wider mb-2">
              CYBERTHON'26
            </div>
            <div className="font-mono text-[10px] text-cyan-400 tracking-[0.3em] mb-6">
              A CCEE INITIATIVE
            </div>
            <p className="text-[10px] text-white/20 font-mono leading-relaxed max-w-[200px]">
              © 2026 CENTRE FOR CYBERSECURITY EXCELLENCE AND EMPOWERMENT. ALL SYSTEMS OPERATIONAL.
            </p>
          </div>

          {/* Student Coordinators */}
          <div className="md:text-center">
            <div className="font-display text-sm font-bold text-white/80 tracking-[0.2em] uppercase mb-6">
              Student Coordinators
            </div>
            <div className="space-y-4">
              <div className="flex flex-col">
                <span className="text-white/60 text-xs font-mono uppercase tracking-wider">Pinak Mukherjee</span>
                <a href="tel:+918961948418" className="text-cyan-400 text-sm font-mono hover:text-cyan-300 transition-colors">
                  +91 89619 48418
                </a>
              </div>
              <div className="flex flex-col">
                <span className="text-white/60 text-xs font-mono uppercase tracking-wider">Vishwa V</span>
                <a href="tel:+918946070689" className="text-cyan-400 text-sm font-mono hover:text-cyan-300 transition-colors">
                  +91 89460 70689
                </a>
              </div>
            </div>
          </div>

          {/* Links & Socials */}
          <div className="flex flex-col md:items-end gap-8">
            <div className="flex flex-wrap md:flex-col gap-4 md:gap-2 md:text-right">
              {["About", "Tracks", "Timeline", "Sponsors", "Gallery"].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-xs text-muted-foreground hover:text-cyan-400 transition-colors uppercase tracking-widest">
                  {item}
                </a>
              ))}
            </div>

            <div className="flex gap-4">
              <a href="https://www.linkedin.com/company/center-for-cybersecurity-empowerment-and-excellence" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-cyan-400 hover:border-cyan-500 hover:bg-cyan-500/5 transition-all">
                <Linkedin size={18} />
              </a>
              <a href="https://discord.gg/RBFAuRYWGx" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-pink-500 hover:border-pink-500 hover:bg-pink-500/5 transition-all">
                <MessagesSquare size={18} />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Large Watermark */}
      <div className="absolute -bottom-10 left-0 w-full text-center pointer-events-none opacity-[0.02]">
        <span className="font-display font-bold text-[15vw] leading-none text-white tracking-widest">
          CYBERTHON
        </span>
      </div>
    </footer>
  );
}
