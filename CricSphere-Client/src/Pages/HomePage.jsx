import  "react";
import Features from "../components/Features"; // Correct import path

function HomePage() {
  return (
    <>
      <section className="bg-green-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Cricket & Turf Tournament Management System</h1>
            <p className="text-xl mb-8">Streamline your local cricket tournaments and turf bookings</p>
            <a
              href="#"
              className="bg-white text-green-700 px-6 py-3 rounded-full font-semibold text-lg hover:bg-green-100 transition duration-300"
            >
              Get Started
            </a>
          </div>
        </section>
      <Features />
    </>
  );
}

export default HomePage;
