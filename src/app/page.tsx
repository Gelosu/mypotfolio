"use client";

import { useState, useEffect } from "react";
import Head from "next/head";
import Hero from "@/app/functions/intro";
import AboutMe from "@/app/homepages/aboutme";
import Projects from "@/app/homepages/projects";
import Programs from "@/app/homepages/programl";
import Link from "next/link";
import ScrollButton from "@/app/functions/scrollup";
import { Menu, X } from "lucide-react"; 

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="bg-gray-950 text-white min-h-screen">
      <Head>
        <title>MY GAME WEBSITE</title>
      </Head>

      <ScrollButton />

      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-5 border-b border-gray-800 bg-gray-900 shadow relative">
        <h1 className="text-2xl font-bold text-purple-400">GELOSU</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-lg">
          <li><Link href="#about" className="hover:text-purple-300">ABOUT</Link></li>
          <li><Link href="#projects" className="hover:text-purple-300">PROJECTS</Link></li>
          <li><Link href="#contact" className="hover:text-purple-300">CONTACT</Link></li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6 text-purple-300" /> : <Menu className="w-6 h-6 text-purple-300" />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-gray-900 border-t border-gray-800 md:hidden">
            <ul className="flex flex-col items-center space-y-4 py-4 text-lg">
              <li><Link href="#about" onClick={() => setIsOpen(false)} className="hover:text-purple-300">ABOUT</Link></li>
              <li><Link href="#projects" onClick={() => setIsOpen(false)} className="hover:text-purple-300">PROJECTS</Link></li>
              <li><Link href="#contact" onClick={() => setIsOpen(false)} className="hover:text-purple-300">CONTACT</Link></li>
            </ul>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="text-center py-20 px-6 max-w-4xl mx-auto" id="home">
        <Hero/>
      </section>

      {/* Sections */}
      <section className="px-6" id="about"><AboutMe /></section>
      <section className="px-6" id="projects"><Projects /></section>
      <section className="px-6" id="programs"><Programs /></section>

      {/* Contact Section */}
      <section id="contact" className="px-4 py-4 bg-gray-800">
        <h2 className="text-3xl text-center text-white mb-8">Contact ME via</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center text-gray-400">
          <div>
            📧 Email:<br />
            <a href="mailto:gelosu@example.com" className="text-purple-300 hover:underline">gelosu@example.com</a>
          </div>
          <div>
            🔗 Facebook:<br />
            <a href="https://facebook.com/angelo.dumaop" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:underline">Angelo Dumaop</a>
          </div>
          <div>
            💬 Discord:<br />
            <span className="text-purple-300">angelo_316</span>
          </div>
          <div>
            💼 LinkedIn:<br />
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:underline">MY LINKEDIN</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 mt-12 border-t border-gray-800 text-gray-500">
        All rights reserved © GELOSU
      </footer>
    </div>
  );
}
