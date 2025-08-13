import { useParams, Link } from "react-router-dom";
import { events } from "../data/events";

export default function EventDetails() {
  const { id } = useParams();
  const event = events.find(e => e.id === parseInt(id));

  if (!event) {
    return <div className="p-6 text-center">Event not found</div>;
  }

  return (
    <div
  className="relative min-h-screen bg-fixed bg-cover bg-center"
  style={{ backgroundImage: "url('/banner.jpg')" }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/70"></div>

  {/* Modal Content */}
  <div className="relative z-10 flex items-center justify-center min-h-screen p-6">
    <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-4">{event.title}</h1>
        <p><strong>Type:</strong> {event.type}</p>
        <p><strong>Team Size:</strong> {event.teamSize}</p>
        <p><strong>Time:</strong> {event.time}</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Rules</h2>
        <ul className="list-disc pl-5 space-y-1">
          {event.rules.map((rule, index) => (
            <li key={index}>{rule}</li>
          ))}
        </ul>

        <Link
          to="/"
          className="inline-block mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-800"
        >
          Back to Events
        </Link>
      </div>
    </div>
  </div>
</div>

  );
}
