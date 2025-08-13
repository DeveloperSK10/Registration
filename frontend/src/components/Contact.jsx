import { MapPinIcon } from "@heroicons/react/24/solid";

export default function Contact() {
  return (
    <div className="relative bg-[url('/banner.jpg')] bg-cover bg-fixed bg-center py-10 px-4">
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/80"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-stretch">
        
        {/* Contact Info */}
        <section className="bg-white p-8 rounded-lg shadow-lg flex flex-col justify-center w-full">
          <h1 className="text-4xl font-bold mb-6 text-center md:text-left">
            Contact Us
          </h1>
          <div className="space-y-3 text-lg">
            <p className="text-gray-700 flex items-center gap-2">
              <MapPinIcon className="h-6 w-6 text-red-500" />
              Sacred Heart College, Tirupattur - 635 601, Tamil Nadu.
            </p>
            <p className="text-gray-700">✉️ Email: mindmeshitsymposium@gmail.com</p>
            <p className="text-gray-700">📞 Dr. T. Prabakaran - 9944434031</p>
            <p className="text-gray-700">📞 Dr. A. Mekala - 9488053421</p>
          </div>
        </section>

        {/* Google Map */}
        <section className="bg-white p-4 rounded-lg shadow-lg">
          <iframe
            title="College Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3895.2039558585634!2d78.566853074833!3d12.502636387771307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bac5477791c6209%3A0xb2d10c9de806db50!2sSacred%20Heart%20College%20(Autonomous)!5e0!3m2!1sen!2sin!4v1754741190976!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: "400px" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </section>

      </div>
    </div>
  );
}
