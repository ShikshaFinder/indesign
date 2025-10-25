"use client";

import { useState } from "react";
import { ArrowLeft, X, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// Project data organized by folders
const projects = [
  {
    id: 1,
    name: "Project 1",
    client: "Beena Nair",
    location: "Adani Atrius",
    images: [
      "/Beena Nair Adani Atrius-20251020T161139Z-1-001/Beena Nair Adani Atrius/1.jpg",
      "/Beena Nair Adani Atrius-20251020T161139Z-1-001/Beena Nair Adani Atrius/2.jpg",
      "/Beena Nair Adani Atrius-20251020T161139Z-1-001/Beena Nair Adani Atrius/3.jpg",
      "/Beena Nair Adani Atrius-20251020T161139Z-1-001/Beena Nair Adani Atrius/4.jpg",
      "/Beena Nair Adani Atrius-20251020T161139Z-1-001/Beena Nair Adani Atrius/5.jpg",
      "/Beena Nair Adani Atrius-20251020T161139Z-1-001/Beena Nair Adani Atrius/6.jpg",
      "/Beena Nair Adani Atrius-20251020T161139Z-1-001/Beena Nair Adani Atrius/7.jpg",
      "/Beena Nair Adani Atrius-20251020T161139Z-1-001/Beena Nair Adani Atrius/8.jpg",
      "/Beena Nair Adani Atrius-20251020T161139Z-1-001/Beena Nair Adani Atrius/9.jpg",
      "/Beena Nair Adani Atrius-20251020T161139Z-1-001/Beena Nair Adani Atrius/10.jpg",
      "/Beena Nair Adani Atrius-20251020T161139Z-1-001/Beena Nair Adani Atrius/11.jpg",
      "/Beena Nair Adani Atrius-20251020T161139Z-1-001/Beena Nair Adani Atrius/12.jpg",
    ],
  },
  {
    id: 2,
    name: "Project 2",
    client: "Manoj Hansora",
    location: "Residential",
    images: [
      "/Manoj Hansora-20251020T161215Z-1-001/Manoj Hansora/1.jpeg",
      "/Manoj Hansora-20251020T161215Z-1-001/Manoj Hansora/2.jpeg",
      "/Manoj Hansora-20251020T161215Z-1-001/Manoj Hansora/3.jpeg",
      "/Manoj Hansora-20251020T161215Z-1-001/Manoj Hansora/4.jpeg",
      "/Manoj Hansora-20251020T161215Z-1-001/Manoj Hansora/5.jpeg",
      "/Manoj Hansora-20251020T161215Z-1-001/Manoj Hansora/6.jpeg",
      "/Manoj Hansora-20251020T161215Z-1-001/Manoj Hansora/7.jpeg",
      "/Manoj Hansora-20251020T161215Z-1-001/Manoj Hansora/8.jpeg",
      "/Manoj Hansora-20251020T161215Z-1-001/Manoj Hansora/9.jpeg",
      "/Manoj Hansora-20251020T161215Z-1-001/Manoj Hansora/10.jpeg",
    ],
  },
  {
    id: 3,
    name: "Project 3",
    client: "Nilesh Shah",
    location: "Adani Atrius",
    images: [
      "/Nilesh Shah Adani Atrius-20251020T161243Z-1-001/Nilesh Shah Adani Atrius/1.jpg",
      "/Nilesh Shah Adani Atrius-20251020T161243Z-1-001/Nilesh Shah Adani Atrius/2.jpg",
      "/Nilesh Shah Adani Atrius-20251020T161243Z-1-001/Nilesh Shah Adani Atrius/3(1).jpg",
      "/Nilesh Shah Adani Atrius-20251020T161243Z-1-001/Nilesh Shah Adani Atrius/4(2).jpg",
      "/Nilesh Shah Adani Atrius-20251020T161243Z-1-001/Nilesh Shah Adani Atrius/5.jpg",
      "/Nilesh Shah Adani Atrius-20251020T161243Z-1-001/Nilesh Shah Adani Atrius/6.jpg",
      "/Nilesh Shah Adani Atrius-20251020T161243Z-1-001/Nilesh Shah Adani Atrius/7(1).jpg",
      "/Nilesh Shah Adani Atrius-20251020T161243Z-1-001/Nilesh Shah Adani Atrius/8(1).jpg",
      "/Nilesh Shah Adani Atrius-20251020T161243Z-1-001/Nilesh Shah Adani Atrius/9.jpg",
      "/Nilesh Shah Adani Atrius-20251020T161243Z-1-001/Nilesh Shah Adani Atrius/10.jpg",
    ],
  },
  {
    id: 4,
    name: "Project 4",
    client: "Featured Works",
    location: "Various",
    images: [
      "/drive-download-20251020T160936Z-1-001/IMG_3630.JPEG",
      "/drive-download-20251020T160936Z-1-001/IMG_3631.JPEG",
      "/drive-download-20251020T160936Z-1-001/IMG_3632.JPEG",
      "/drive-download-20251020T160936Z-1-001/IMG_3634.JPEG",
      "/drive-download-20251020T160936Z-1-001/IMG_3635.JPEG",
      "/drive-download-20251020T160936Z-1-001/IMG_3651.JPEG",
    ],
  },
];

export default function GalleryPage() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentProject, setCurrentProject] = useState<typeof projects[0] | null>(null);

  const openLightbox = (projectData: typeof projects[0], imageIndex: number) => {
    setCurrentProject(projectData);
    setCurrentImageIndex(imageIndex);
    setLightboxImage(projectData.images[imageIndex]);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    setCurrentProject(null);
  };

  const navigateLightbox = (direction: "prev" | "next") => {
    if (!currentProject) return;
    const newIndex =
      direction === "next"
        ? (currentImageIndex + 1) % currentProject.images.length
        : (currentImageIndex - 1 + currentProject.images.length) % currentProject.images.length;
    setCurrentImageIndex(newIndex);
    setLightboxImage(currentProject.images[newIndex]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-slate-950/80 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-slate-200 hover:text-white transition">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-semibold">Back to Home</span>
          </Link>
          <h1 className="text-xl sm:text-2xl font-bold text-white">Complete Gallery</h1>
          <div className="w-24"></div> {/* Spacer for centering */}
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Intro */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Our Projects
          </h2>
          <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto">
            Explore our portfolio of completed projects. Each design tells a unique story of innovation, elegance, and precision.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-24">
          {projects.map((project, projectIndex) => (
            <div
              key={project.id}
              className="group"
              style={{
                animation: `fadeInUp 0.6s ease-out ${projectIndex * 0.1}s both`,
              }}
            >
              {/* Project Header */}
              <div className="relative mb-8">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>
                <div className="pl-8">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                      {String(project.id).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-white">{project.name}</h3>
                      <p className="text-slate-400">{project.client} • {project.location}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Image Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {project.images.map((image, imageIndex) => (
                  <div
                    key={imageIndex}
                    onClick={() => openLightbox(project, imageIndex)}
                    className="relative aspect-square overflow-hidden rounded-lg cursor-zoom-in group/card"
                  >
                    {/* Glowing border effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                    
                    <img
                      src={image}
                      alt={`${project.name} - Image ${imageIndex + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-110"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                      <span className="text-white text-sm font-semibold">View</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Lightbox */}
      {lightboxImage && currentProject && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              closeLightbox();
            }}
            className="absolute top-4 right-4 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition z-10"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation buttons */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateLightbox("prev");
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateLightbox("next");
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image counter and project info */}
          <div className="absolute top-4 left-4 text-white z-10">
            <p className="text-sm font-semibold">{currentProject.name}</p>
            <p className="text-xs text-slate-300">
              {currentImageIndex + 1} / {currentProject.images.length}
            </p>
          </div>

          {/* Image */}
          <div className="w-full h-full flex items-center justify-center p-4 sm:p-8">
            <img
              src={lightboxImage}
              alt="Gallery view"
              onClick={(e) => e.stopPropagation()}
              className="max-h-full max-w-full object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
