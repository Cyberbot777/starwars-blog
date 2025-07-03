import { Link } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";

export default function Home() {
  return (
    <PageWrapper>
      <div className="relative min-h-screen flex flex-col items-center justify-center">
        {/* Logo in top-left */}
        <div className="absolute top-4 left-6">
          <img
            src="/StarwarsLogo.png"
            alt="Star Wars Logo"
            className="w-32 md:w-48"
          />
        </div>

        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center -mt-2">
          <img
            src="/oldStarWars.jpeg"
            alt="Star Wars Hero"
            className="w-80 md:w-[500px] rounded-lg shadow-lg mb-6"
          />

          {/* Tagline */}
          <h1 className="text-xl md:text-2xl italic text-gray-200 mb-4">
            May the Force Be With You ...
          </h1>

          {/* Enter Button */}
          <Link
            to="/people"
            className="bg-yellow-500 text-black px-6 py-2 rounded-full text-lg hover:bg-yellow-400 transition"
          >
            Enter
          </Link>
        </div>
      </div>
    </PageWrapper>
  );
}
