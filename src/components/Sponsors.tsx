import cybertracsLogo from "../assets/cybertracs.png";
import devfolioLogo from "../assets/devfolio.png";

export default function Sponsors() {
  const sponsors = [
    {
      name: "Devfolio",
      logo: devfolioLogo,
      alt: "DEVFOLIO LOGO",
    },
    {
      name: "Cybertracs",
      logo: cybertracsLogo,
      alt: "Cybertracs technology consulting and research logo",
    },
  ];

  return (
    <section id="sponsors" className="py-24 bg-background">
      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Our Sponsors
          </h2>
        </div>

        {/* Sponsor Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="h-40 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center p-8 transition hover:border-cyan-500/40"
            >
              <img
                src={sponsor.logo}
                alt={sponsor.alt}
                className="max-h-24 w-auto object-contain"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
