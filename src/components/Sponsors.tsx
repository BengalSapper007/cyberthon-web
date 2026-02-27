import srmLogo from "../assets/srm.png";
import cceeLogo from "../assets/ccee.png";
import cybertracsLogo from "../assets/cybertracs.png";
import thinkrootLogo from "../assets/thinkroot.png";

const categories = [
  {
    title: "Hosted At",
    items: [{ name: "SRM Institute of Science and Technology", logo: srmLogo }],
  },
  {
    title: "Organized By",
    items: [{ name: "CCEE", logo: cceeLogo }],
  },
  {
    title: "Powered By",
    items: [{ name: "Cybertracs", logo: cybertracsLogo }],
  },
  {
    title: "Our Sponsors",
    items: [{ name: "Thinkroot", logo: thinkrootLogo }],
  },
];

export default function Sponsors() {
  return (
    <section id="sponsors" className="py-24 bg-background">
      <div className="max-w-3xl mx-auto px-6">

        {/* Vertical Stack */}
        <div className="flex flex-col gap-16">
          {categories.map((category) => (
            <div key={category.title} className="flex flex-col items-center text-center group">
              {/* Category Label */}
              <span className="font-display text-lg md:text-2xl tracking-[0.2em] uppercase text-cyan-400 mb-6">
                {category.title}
              </span>

              {/* Logo Card */}
              {category.items.map((item) => (
                <div
                  key={item.name}
                  className="w-full max-w-xs bg-white/[0.03] rounded-2xl border border-white/[0.06] flex items-center justify-center py-6 px-8 transition-all duration-500 hover:border-cyan-500/30 hover:bg-white/[0.06] hover:shadow-[0_0_30px_rgba(34,211,238,0.05)]"
                >
                  <img
                    src={item.logo}
                    alt={item.name}
                    className="max-h-16 md:max-h-20 w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                  />
                </div>
              ))}

              {/* Name Label */}
              {category.items.map((item) => (
                <span
                  key={item.name}
                  className="mt-4 text-xs text-white/30 font-mono tracking-wider"
                >
                  {item.name}
                </span>
              ))}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
