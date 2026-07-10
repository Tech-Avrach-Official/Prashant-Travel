import React, { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { Image as ImageIcon, Video as VideoIcon, LayoutGrid, X, ChevronLeft, ChevronRight, Play } from "lucide-react";
import galleryTop from "../../assets/gallery-top-img.png";

import img1 from "../../assets/gallery/img1.jpeg";
import img2 from "../../assets/gallery/img2.jpeg";
import img3 from "../../assets/gallery/img3.jpeg";
import img4 from "../../assets/gallery/img4.jpeg";
import img5 from "../../assets/gallery/img5.jpeg";
import img6 from "../../assets/gallery/img6.jpeg";
import img7 from "../../assets/gallery/img7.jpeg";
import img8 from "../../assets/gallery/img8.jpeg";
import img9 from "../../assets/gallery/img9.jpeg";
import img10 from "../../assets/gallery/img10.jpeg";
import img11 from "../../assets/gallery/img11.jpeg";
import img12 from "../../assets/gallery/img12.jpeg";
import vid1 from "../../assets/gallery/vid1.mp4";
import vid2 from "../../assets/gallery/vid2.mp4";

// 👉 thumbnail hata diya, ab video ka khud ka first frame hi dikhega
const galleryData = [
  { id: 1, type: "image", src: img1 },
  { id: 2, type: "image", src: img2 },
  { id: 3, type: "video", src: vid1 },
  { id: 4, type: "video", src: vid2 },
  { id: 5, type: "image", src: img4 },
  { id: 6, type: "image", src: img5 },
  { id: 8, type: "image", src: img7 },
  { id: 9, type: "image", src: img3 },
  { id: 10, type: "image", src: img8 },
  { id: 11, type: "image", src: img9 },
  { id: 12, type: "image", src: img10 },
  { id: 7, type: "image", src: img6 },
  { id: 13, type: "image", src: img11 },
  { id: 14, type: "image", src: img12 },
];

const tabs = [
  { key: "all", label: "All", icon: LayoutGrid },
  { key: "image", label: "Images", icon: ImageIcon },
  { key: "video", label: "Videos", icon: VideoIcon },
];

const Gallery = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedIndex, setSelectedIndex] = useState(null);

  const filteredData =
    activeTab === "all" ? galleryData : galleryData.filter((item) => item.type === activeTab);

  const selectedItem = selectedIndex !== null ? filteredData[selectedIndex] : null;

  const openPreview = (index) => setSelectedIndex(index);
  const closePreview = () => setSelectedIndex(null);

  const showNext = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev + 1) % filteredData.length);
  };

  const showPrev = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev - 1 + filteredData.length) % filteredData.length);
  };

  return (
    <div className="bg-white">
      {/* ===== Hero Section (unchanged) ===== */}
      <section className="relative h-[75vh] min-h-[500px] overflow-hidden">
        <img
          src={galleryTop}
          alt="Gallery Top"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 h-full flex items-center justify-center text-center px-8">
          <div className="max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight"
            >
              Travel Gallery
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-2xl text-white/90 mt-6"
            >
              Every photo captures a unique destination, unforgettable experience, and cherished travel memory.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ===== Filter Tabs ===== */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="flex justify-center flex-wrap gap-3 mb-10">
          {tabs.map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`flex items-center gap-2 cursor-pointer px-5 py-2.5 rounded-full text-sm md:text-base font-medium transition-all duration-300 border
                ${
                  activeTab === key
                    ? "bg-[#041d29] text-white border-black"
                    : "bg-white text-gray-700 border-gray-300 hover:border-[#041d29] hover:text-[#041d29]"
                }`}
            >
              <Icon size={18} />
              {label}
            </button>
          ))}
        </div>

        {/* ===== Masonry Grid ===== */}
        <div className="columns-2 sm:columns-2 md:columns-3 lg:columns-4 gap-4 [column-fill:_balance]">
          <AnimatePresence>
            {filteredData.map((item, index) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                onClick={() => openPreview(index)}
                className="relative mb-4 break-inside-avoid rounded-2xl overflow-hidden cursor-pointer group shadow-sm"
              >
                {item.type === "video" ? (
                  <video
                    src={item.src}
                    muted
                    playsInline
                    preload="metadata"
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <img
                    src={item.src}
                    alt=""
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}

                {/* Video overlay */}
                {item.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                    <div className="bg-white/90 rounded-full p-3 group-hover:scale-110 transition-transform">
                      <Play size={20} fill="black" className="text-black ml-0.5" />
                    </div>
                  </div>
                )}

                {/* subtle hover dark overlay for images */}
                {item.type === "image" && (
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredData.length === 0 && (
          <p className="text-center text-gray-400 py-16">Koi content nahi mila.</p>
        )}
      </section>

      {/* ===== Lightbox Preview ===== */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePreview}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center px-4 md:px-16"
          >
            <button
              onClick={closePreview}
              className="absolute top-5 right-5 md:top-8 md:right-8 text-black md:text-white/80 hover:text-white bg-white md:bg-white/10 md:hover:bg-white/20 rounded-full p-2 transition-colors"
            >
              <X size={24} />
            </button>

            <button
              onClick={showPrev}
              className="absolute left-3 md:left-8 text-black bg-white md:text-white/80 hover:text-white md:bg-white/10 md:hover:bg-white/20 rounded-full p-2 md:p-3 transition-colors"
            >
              <ChevronLeft size={26} />
            </button>

            <button
              onClick={showNext}
              className="absolute right-3 md:right-8 text-black bg-white  md:text-white/80 hover:text-white md:bg-white/10 md:hover:bg-white/20 rounded-full p-2 md:p-3 transition-colors"
            >
              <ChevronRight size={26} />
            </button>

            <motion.div
              key={selectedItem.id}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-full max-h-[85vh]"
            >
              {selectedItem.type === "video" ? (
                <video
                  src={selectedItem.src}
                  controls
                  autoPlay
                  className="max-h-[85vh] max-w-full rounded-lg"
                />
              ) : (
                <img
                  src={selectedItem.src}
                  alt=""
                  className="max-h-[85vh] max-w-full rounded-lg object-contain"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;