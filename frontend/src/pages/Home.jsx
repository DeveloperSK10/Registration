import { useState } from "react";
import Header from "../components/Header";
import EventList from "../components/EventList";
import About from "../components/About";
import Contact from "../components/Contact";
import RegisterForm from "../components/RegistrationForm";
import Footer from "../components/Footer";

export default function Home() {
  const [showRegister, setShowRegister] = useState(false);

  return (
   <>
  <Header onRegisterClick={() => setShowRegister(true)} />

  <EventList />

  <About />
  <Contact />
  <Footer />

  {showRegister && (
    <div className="fixed inset-0 bg-black/50 flex justify-center text-black items-center z-50">
      <RegisterForm onClose={() => setShowRegister(false)} />
    </div>
  )}
</>


  );
}
