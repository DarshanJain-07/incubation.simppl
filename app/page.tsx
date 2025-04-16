import Navbar from "@/components/Navbar";
import BackButton from "@/components/BackButton";
import ProjectTitle from "@/components/ProjectTitle";
import DiagramDisplay from "@/components/DiagramDisplay";
import ImportantLinks from "@/components/ImportantLinks";
import KeyContributors from "@/components/KeyContributors";
import TechnologiesUsed from "@/components/TechnologiesUsed";
import ImageCarousel from "@/components/ImageCarousel";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-white">
      <Navbar />

      <div className="mt-4">
        <BackButton />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mt-6">
        {/* Left Column */}
        <div className="lg:col-span-3 space-y-8">
          {/* Use ProjectTitle component */}
          <ProjectTitle />

          {/* Text Content - Directly in page for now */}
          <div className="text-base text-gray-700 leading-relaxed space-y-4">
            <p>
              Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <p>
              Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
             <p>
              Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>

          {/* Use DiagramDisplay component */}
          <DiagramDisplay />

          {/* Use ImportantLinks component */}
          <ImportantLinks />

          {/* Use KeyContributors component */}
          <KeyContributors />

          {/* Use TechnologiesUsed component */}
          <TechnologiesUsed />
        </div>

        {/* Right Column */}
        <div className="lg:col-span-2">
          {/* Placeholder for Image Carousel - Needs component */}
          <ImageCarousel />
        </div>
      </div>
    </main>
  );
}
