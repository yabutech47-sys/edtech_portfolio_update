"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import CoreInitiatives from "@/components/CoreInitiatives";
import ProjectsDirectory from "@/components/ProjectsDirectory";
import ImpactMetrics from "@/components/ImpactMetrics";
import Insights from "@/components/Insights";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";
import ConsultationModal from "@/components/ConsultationModal";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>("");

  const handleOpenInquiry = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    setModalOpen(true);
  };

  return (
    <>
      <Navbar onOpenInquiry={() => handleOpenInquiry()} />
      <main className="flex-1">
        <Hero onOpenInquiry={() => handleOpenInquiry()} />
        <AboutUs />
        <CoreInitiatives onSelectExpertise={(title) => handleOpenInquiry(title)} />
        <ProjectsDirectory onSelectProject={(projectTitle) => handleOpenInquiry(projectTitle)} />
        <ImpactMetrics />
        <Insights />
        <Partners />
      </main>
      <Footer onOpenInquiry={() => handleOpenInquiry()} />

      <ConsultationModal
        key={selectedService || "default"}
        isOpen={modalOpen}
        onClose={() => {
          setModalOpen(false);
          setSelectedService("");
        }}
        defaultProject={selectedService}
      />
    </>
  );
}
