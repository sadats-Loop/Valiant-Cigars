import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);


import BannerImage from "../banner.png";





const Banner = () => {

const container = useRef();
useGSAP(() => {

  gsap.from(".hero-badge", {
    y: -30,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
  });

  gsap.from(".hero-title", {
    y: 80,
    opacity: 0,
    duration: 1.2,
    delay: 0.2,
    ease: "power4.out",
  });

  gsap.from(".hero-text", {
    y: 50,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    ease: "power3.out",
  });

 gsap.from(".hero-button", {
  opacity: 0,
  scale: 0.8,
  duration: 1,
});

  gsap.from(".hero-image", {
    x: 120,
    opacity: 0,
    duration: 1.4,
    delay: 0.3,
    ease: "power4.out",
  });

}, { scope: container });


  return (
<section  ref={container} className="bg-[radial-gradient(circle_at_70%_35%,rgba(59,130,246,0.15),transparent_30%),linear-gradient(135deg,#050505_0%,#0B1120_35%,#111827_65%,#050505_100%)]">

 <div className="relative min-h-162.5 flex items-center overflow-hidden">
      <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-4">
          <div className="hero-badge inline-flex items-center gap-2 bg-red-500/10 border border-red-500/30 text-red-400 text-sm font-medium px-5 py-2 rounded-full">
           🚬The Art of the Burn
          </div>

          <h1 className="hero-title text-4xl lg:text-5xl font-bold leading-tight tracking-tighter text-[#F4F4F5]">
            ONE PUFF
            <br />
            <span className="bg-linear-to-r from-red-400 via-orange-400 to-amber-400 bg-clip-text text-transparent">
               IS All  YOU NEED
            </span>
          </h1>

          <p className="hero-text text-lg text-zinc-200 max-w-lg">
            For those who never follow the crowd. Bold design, uncompromising craftsmanship, and a collection made to leave an impression.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="hero-button group
rounded-full
px-8 py-4
bg-linear-to-r
from-[#2A1A10]
via-[#5C2B00]
to-[#A34800]
text-white
border border-orange-500/20
shadow-[0_0_40px_rgba(255,115,0,0.25)]
hover:shadow-[0_0_70px_rgba(255,115,0,0.45)]
transition-all duration-700 ease-out transform-gpu hover:scale-[1.05] hover:-translate-y-2">

              Ignite the Experience🔥
              <span className="group-hover:translate-x-1 transition">→</span>
            </button>
          </div>

          <div className="flex items-center gap-8 text-zinc-200 pt-6 text-xl">
            <div>✓ 50+ top class brands</div>
            <div>✓ No puff Limits</div>
            <div>✓ smoke Anytime</div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            <img
              className=" hero-image   relative h-130 w-auto object-contain drop-shadow-2xl rounded-3xl animate-pulse"
              src={BannerImage}
              alt="AI Models Banner"
            />
          </div>
        </div>
      </div>
    </div>


</section>

   
  );
};

export default Banner;