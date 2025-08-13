import { Link } from "react-router-dom";
import { events } from "../data/events";

export default function EventList() {
  return (
    <div className="relative bg-[url('/banner.jpg')] bg-cover bg-center bg-fixed flex flex-col justify-center items-center text-center px-4">
  <div className="absolute inset-0 bg-black/80"></div>

  {/* Event Cards */}
  <div className="relative z-10 grid md:grid-cols-3 gap-6">
    {events.map((event) => (
      <div
        key={event.id}
        className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition"
      >
        <img
          src={event.image}
          alt={event.title}
          className="h-48 w-full object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-bold mb-2">{event.title}</h3>
          <p className="text-gray-600">{event.type}</p>
          <Link
            to={`/event/${event.id}`}
            className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-800"
          >
            View Event Details
          </Link>
        </div>
      </div>
    ))}
  </div>
</div>


  );
}
