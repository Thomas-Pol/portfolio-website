// app/your-path/page.tsx (example)

export const dynamic = "force-dynamic";

import { getPayload } from 'payload'
import React from 'react'
import Image from 'next/image'

import config from '@/payload.config'
import './styles.css'
import { getAboutMe } from "../../actions/About";

import ProjectsScroll from "@/components/ProjectsScroll";
// import { AboutMe } from '@/globals/About';

export default async function HomePage() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const aboutMe = await getAboutMe(payload)

  return (
    <div>
      <section id="about" className="w-screen min-h-screen bg-[#E8E8E8] text-[#0f172a] py-20">
        <section id="about" className="w-full min-h-screen bg-[#E8E8E8] text-[#0f172a] py-20">
  <div className="max-w-6xl mx-auto px-4 sm:px-8">
    <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
      
      {/* Tekst */}
      <div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8">About me</h2>
        <p className="text-base sm:text-lg opacity-90 mb-4 sm:mb-6">
          {aboutMe.bio}
        </p>
        <p className="text-base sm:text-lg opacity-90 mb-6 sm:mb-8">
          {aboutMe.profession}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 text-blue-200">
          <div className="p-4 bg-[#0f172a] bg-opacity-10 rounded-lg">
            <h4 className="font-semibold mb-1">Frontend</h4>
            <p className="text-sm opacity-80">React, Next.js, TypeScript</p>
          </div>
          <div className="p-4 bg-[#0f172a] bg-opacity-10 rounded-lg">
            <h4 className="font-semibold mb-1">Styling</h4>
            <p className="text-sm opacity-80">Tailwind CSS, GSAP</p>
          </div>
          <div className="p-4 bg-[#0f172a] bg-opacity-10 rounded-lg">
            <h4 className="font-semibold mb-1">Backend</h4>
            <p className="text-sm opacity-80">Node.js, PayloadCMS, Laravel, PHP</p>
          </div>
          <div className="p-4 bg-[#0f172a] bg-opacity-10 rounded-lg">
            <h4 className="font-semibold mb-1">Tools</h4>
            <p className="text-sm opacity-80">Git, VS Code, Figma</p>
          </div>
        </div>
      </div>

      {/* Afbeelding */}
      <div className="flex justify-center md:justify-end mt-8 md:mt-0">
        <Image
          className="w-48 sm:w-64 md:w-full rounded-lg object-cover"
          src={typeof aboutMe.profilePicture === 'object' ? aboutMe.profilePicture.url || '' : ''}
          alt={aboutMe.naam}
          width={300}
          height={400}
        />
      </div>

    </div>
  </div>
</section>

      </section>

      <div id="projects">
        <ProjectsScroll />
      </div>
    </div>
  )
}
