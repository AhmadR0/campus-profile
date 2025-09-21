import { useEffect, useRef } from "react";

type LinkItem = { name: string; logo: string; url: string };

const LINKS: LinkItem[] = [
  { 
    name: "Direktorat Jendral Pendidikan Tinggi (DIKTI)", 
    logo: "https://imgs.search.brave.com/3TjTAHgp79lsF-fs_hI9v8R-SkIBBBq0UoSg6ga3z20/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbnNw/aXJlbnNpcy5pZC9k/YXRhL21lZGlhLzIw/MjUvMDUvRGlrdGlz/YWludGVrLUJlcmRh/bXBhay1CYW5uZXIt/TG9nby1WZXJ0aWth/bC5qcGc", 
    url: "https://dikti.kemdikbud.go.id/" },
  { name: "SINTA - Science and Technology", logo: "https://imgs.search.brave.com/ZlzldQ3GH6Q75H21MzkWJD4fK0SBiSFNMhorkKUx-as/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91Ymhh/cmFqYXlhLmFjLmlk/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDI1/LzA0L0p1cm5hbC1T/aW50YS5qcGc", url: "https://sinta.kemdikbud.go.id/" },
  { name: "Kampus Merdeka", logo: "https://imgs.search.brave.com/5IraCP_R4Uhfq_zYIt1JOS-7vYmBxzVyCcAeA3FvBV0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91bnRp/cnRhLmFjLmlkL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIwLzEy/L2xvZ28ta2FtcHVz/LW1lcmRla2EucG5n", url: "https://kampusmerdeka.kemdikbud.go.id/" },
  { name: "BAN-PT", logo: "https://imgs.search.brave.com/Tx3zSPVqDx5kmtkBCDp74iCYyuDJ3ROqHzG9nj9vvGo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzI5LzEvYmFuLXB0/LWxvZ28tcG5nX3Nl/ZWtsb2dvLTI5MDg4/Mi5wbmc", url: "https://banpt.or.id/" },
  { name: "SIVIL", logo: "https://cendrawasih.ac.id/public/img/linkterkait/1637308947_0e5608a058b9d70b97a4.png", url: "https://sivil.kemdikbud.go.id/" },
  { name: "Perpustakaan Nasional RI", logo: "https://imgs.search.brave.com/NV-MW3NdHjuaNL8iZmx5bBP6ckqqwAbEAMfhJJUd5S0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9l/L2UyL0xPR08tUEVS/UFVTTkFTLnN2Zw", url: "https://perpusnas.go.id/" },
  { name: "ZOTERO", logo: "https://imgs.search.brave.com/t4QvmNix3d6m7au-IP0dZBySk5uPSouF1a3kxLG_L98/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9nby53aW5lL2Ev/bG9nby9ab3Rlcm8v/Wm90ZXJvLUxvZ28u/d2luZS5zdmc", url: "https://www.zotero.org/" },
];

export default function InformationSystem() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const firstItemRef = useRef<HTMLDivElement | null>(null);
  const intervalRef = useRef<number | null>(null);

  // (re)start auto sliding
  const startAuto = (delay = 2400) => {
    stopAuto();
    intervalRef.current = window.setInterval(() => {
      const container = containerRef.current;
      const item = firstItemRef.current;
      if (!container || !item) return;

      // item width + marginRight (gap) calculation
      const style = getComputedStyle(item);
      const marginRight = parseFloat(style.marginRight || "0");
      const stepPx = Math.round(item.getBoundingClientRect().width + marginRight);

      // smooth scroll by one item
      container.scrollBy({ left: stepPx, behavior: "smooth" });

      // if we passed the half (the duplicated boundary), jump back by half width
      const half = container.scrollWidth / 2;
      // schedule check after the smooth scroll ends (~500ms)
      setTimeout(() => {
        if (!container) return;
        if (container.scrollLeft >= half - 1) {
          // instantly jump back by half to simulate infinite loop
          container.scrollLeft = container.scrollLeft - half;
        }
      }, 520);
    }, delay);
  };

  const stopAuto = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    // small timeout so all images/layout settle
    const t = setTimeout(() => startAuto(2400), 300);

    // recalc on resize
    const onResize = () => {
      // restart to ensure measured width is fresh
      startAuto(2400);
    };
    window.addEventListener("resize", onResize);

    return () => {
      clearTimeout(t);
      stopAuto();
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
          System <span className="text-red-600">Informasi</span>
        </h2>

        <div
          className="relative overflow-hidden"
          onMouseEnter={() => stopAuto()}
          onMouseLeave={() => startAuto(2400)}
        >
          {/* scroll container */}
          <div
            ref={containerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide py-4 px-1"
            // small accessibility nicety
            aria-label="Related links carousel"
          >
            {/* duplicate array so we can loop infinitely */}
            {LINKS.concat(LINKS).map((link, idx) => (
              <div
                key={idx}
                // attach ref to first visible item for measuring step
                ref={idx === 0 ? firstItemRef : undefined}
                className="flex-shrink-0 min-w-[160px] md:min-w-[180px] lg:min-w-[200px]"
              >
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center text-center group"
                >
                  <div className="w-20 h-16 md:w-24 md:h-20 lg:w-28 lg:h-24 flex items-center justify-center bg-white rounded shadow-sm overflow-hidden">
                    <img
                      src={link.logo}
                      alt={link.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <p className="text-xs md:text-sm mt-2 text-gray-700 group-hover:text-red-600 transition">
                    {link.name}
                  </p>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
