"use client";

import { useState } from "react";

type Project = {
  title: string;
  description: string;
  videoType: "youtube" | "gdrive";
  videoId: string;
  category: "web" | "desktop" | "game"; 
};

const projectList: Project[] = [
  {
    title: "AUTOCHECKER SYSTEM",
    description:
      "A web app using OCR via Google Cloud Vision to digitize handwritten test answers. Developed for TUP Cavite to enhance scoring transparency and efficiency.",
    videoType: "youtube",
    videoId: "9VKWdo6mcx4",
    category: "web",
  },
  {
    title: "ID VALIDATION SYSTEM",
    description:
      "Desktop app (C# / VB.Net) created during internship to manage student ID validation, with CSV support, duplicate detection, and course tracking.",
    videoType: "youtube",
    videoId: "YVPpAJmN754",
    category: "desktop",
  },
  {
    title: "MULTIFUNCTIONAL SCHOOL SYSTEM",
    description:
      "A centralized school platform for student access, document requests, and admin control across multiple sites, including real-time chat.",
    videoType: "gdrive",
    videoId: "1hKB0rX1Th9TdR0oiG4EzBRpjct8hDUU2",
    category: "web",
  },
  {
    title: "HEALTH CARE MANAGEMENT SYSTEM",
    description:
      "A clinic management web app for appointments, medical records, medication tracking, and inventory control.",
    videoType: "youtube",
    videoId: "0qkjZBXkwO4",
    category: "web",
  },
  {
    title: "GAME EXAMPLE 1",
    description:
      "A simple 2D platformer game built with Unity, showcasing my game development skills.",
    videoType: "youtube",
    videoId: "KkW9HpPCYOQ",
    category: "game",
  },
  {
    title: "GAME EXAMPLE 2",
    description:
      "A puzzle game built with Phaser.js, where players solve challenges to progress.",
    videoType: "youtube",
    videoId: "q8Mn2kdcJuk",
    category: "game",
  },
];

export default function Projects() {
  const [modalVisible, setModalVisible] = useState(false);
  const [videoSrc, setVideoSrc] = useState("");
  const [activeTab, setActiveTab] = useState<"web" | "desktop" | "game">("web");

  const openModal = (videoType: string, videoId: string) => {
    if (videoType === "youtube") {
      setVideoSrc(`https://www.youtube.com/embed/${videoId}?autoplay=1`);
    } else if (videoType === "gdrive") {
      setVideoSrc(`https://drive.google.com/file/d/${videoId}/preview`);
    }
    setModalVisible(true);
  };

  const closeModal = () => {
    setVideoSrc("");
    setModalVisible(false);
  };

  // Filter projects based on selected category
  const filteredProjects = projectList.filter(
    (project) => project.category === activeTab
  );

  return (
    <section className="bg-gray-950 text-white px-6 py-16 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-10 text-purple-300">
        My Projects
      </h1>
      <p className="text-center text-gray-400 mb-12 text-lg">
        Click on any project card to preview a demo video.
      </p>

      {/* Tab Navigation */}
      <div className="flex justify-center space-x-8 mb-10">
        <button
          className={`${
            activeTab === "web" ? "text-purple-300" : "text-gray-400"
          } hover:text-purple-300`}
          onClick={() => setActiveTab("web")}
        >
          Web Apps
        </button>
        <button
          className={`${
            activeTab === "desktop" ? "text-purple-300" : "text-gray-400"
          } hover:text-purple-300`}
          onClick={() => setActiveTab("desktop")}
        >
          Desktop Apps
        </button>
        <button
          className={`${
            activeTab === "game" ? "text-purple-300" : "text-gray-400"
          } hover:text-purple-300`}
          onClick={() => setActiveTab("game")}
        >
          Games
        </button>
      </div>

      {/* Project Cards */}
      <div className="grid md:grid-cols-2 gap-8">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            onClick={() => openModal(project.videoType, project.videoId)}
            className="bg-gray-800 hover:bg-gray-700 transition-all duration-300 cursor-pointer rounded-xl p-6 shadow-lg hover:scale-[1.02]"
          >
            <h3 className="text-2xl text-purple-200 font-semibold mb-2">
              {project.title}
            </h3>
            <p className="text-gray-300">{project.description}</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalVisible && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-gray-900 p-4 rounded-lg max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="text-white text-2xl float-right hover:text-red-400"
            >
              &times;
            </button>
            <div className="mt-4 aspect-video w-full">
              <iframe
                src={videoSrc}
                className="w-full h-[400px] md:h-[500px]"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
