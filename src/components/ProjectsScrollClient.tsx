// components/ProjectsScrollClient.tsx
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import type { Project } from "@/types/projects";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsScrollClient({ projects }: { projects: Project[] }) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current || !sectionRef.current) return;

    const cards = containerRef.current.querySelectorAll<HTMLDivElement>(".card");
    if (cards.length === 0) return;

    const setupScroll = () => {
      const cardWidth = cards[0].clientWidth;
      const totalCards = cards.length;

      // Responsive side margins
      const sideMargin = window.innerWidth < 768 ? 24 : 96; // ml-6 / 6rem
      const gapSize = window.innerWidth < 768 ? 16 : window.innerWidth * 0.15;
      const gapWidth = gapSize * (totalCards - 1);

      // Total scroll accounts for left and right margins
      const totalScroll = cardWidth * totalCards + gapWidth + sideMargin * 2 - window.innerWidth;

      // Kill old ScrollTriggers
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

      gsap.to(containerRef.current!, {
        x: () => -totalScroll,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current!,
          start: "top top",
          end: () => `+=${totalScroll}`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });
    };

    setupScroll();

    window.addEventListener("resize", setupScroll);
    return () => {
      window.removeEventListener("resize", setupScroll);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative h-screen overflow-hidden bg-[#E8E8E8]">
      {/* Container with cards */}
      <div
        ref={containerRef}
        className="flex w-max items-center h-screen ml-6 mr-6 md:ml-[6rem] md:mr-[6rem] gap-4 md:gap-[15vw]"
      >
        {projects.map((project) => (
          <div
            key={project.id}
            className="card w-[80vw] sm:w-[60vw] md:w-[44vw] max-w-xs sm:max-w-sm md:max-w-xl h-auto flex flex-col justify-between backdrop-blur-sm bg-[#0f172a] p-6 sm:p-8 rounded-2xl border border-blue-400/30 hover:bg-[#0f172a]/90 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
          >
            {/* Content */}
            <div className="mb-2.5">
              {project.image?.url ? (
                <div className="w-full h-40 mb-6">
                  <Image
                    src={project.image.url}
                    alt={project.image.alt || "Project Image"}
                    className="w-full h-full object-cover rounded-lg"
                    width={400}
                    height={160}
                  />
                </div>
              ) : (
                <div className="w-full h-40 bg-[#E8E8E8] bg-opacity-20 rounded-lg mb-6 flex items-center justify-center">
                  <span className="text-[#E8E8E8] text-lg opacity-50">No Image</span>
                </div>
              )}

              <h3 className="text-3xl font-bold text-[#E8E8E8] mb-4">{project.projectName}</h3>
              <p className="min-h-[20vh] text-[#E8E8E8] opacity-80 mb-6 text-lg">{project.description}</p>
              <a href="" className="text-[#E8E8E8]">Meer informatie --&gt;</a>
            </div>

            <div className="flex gap-4">
              {project.linkLive !== "staat niet online" && (
                <a
                  href={project.linkLive}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300"
                >
                  Live
                </a>
              )}
              {project.linkGitHub !== "heeft geen github" && ( 
              <a
                href={project.linkGitHub}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-700 text-white rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300"
              >
                GitHub
              </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
