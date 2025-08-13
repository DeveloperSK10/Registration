export default function About() {
  return (
    <>
      
      {/* Content Section */}
      <div className="bg-[url('/banner.jpg')] bg-cover bg-fixed bg-center relative">
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 py-10 space-y-8">

          {/* Symposium Intro */}
          <section className="bg-white shadow-lg p-6 md:p-10 rounded-lg text-center">
            <h1 className="relative text-black text-4xl mb-4 md:text-5xl font-bold">
          About Mind Mesh IT Symposium
             </h1>
            <p className="text-gray-700 text-lg md:text-xl">
              Mind Mesh is our annual national-level technical symposium, bringing together
              bright minds from colleges across the country to compete, collaborate, and innovate.
            </p>
          </section>

        </div>
      </div>
    </>
  );
}
