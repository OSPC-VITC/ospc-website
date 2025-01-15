"use client"
import { useEffect, useState } from "react";
import { supabase } from "../../utils/supabaseClient";
import { motion } from "framer-motion";
import ParticlesComponent from "@/components/Particles";
import { Calendar, MapPin, Clock, Info, ArrowLeft, Ticket } from "lucide-react";

interface Event {
  name: string;
  date: string;
  image_url: string;
  price: number;
  venue: string;
}

const EventsPage = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [error, setError] = useState<string>("");
  const [activeTab, setActiveTab] = useState<"upcoming" | "past">("upcoming");

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const { data, error } = await supabase
          .from("Events")
          .select("name, date, image_url, price, venue")
          .order("date", { ascending: true });

        if (error) throw error;
        setEvents(data || []);
      } catch (err) {
        setError("Error fetching data");
        console.error("Error:", err);
      }
    };
    fetchEvents();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const isUpcoming = (date: string) => new Date(date) > new Date();

  const upcomingEvents = events.filter(event => isUpcoming(event.date));
  const pastEvents = events.filter(event => !isUpcoming(event.date));

  const EventCard = ({ event }: { event: Event }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
      setIsFlipped(!isFlipped);
    };

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
        className="relative h-[500px] rounded-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 shadow-xl overflow-hidden group"
      >
        <div
          className={`relative w-full h-full transition-all duration-700 ${
            isFlipped ? "rotate-y-180" : ""
          }`}
          style={{
            transformStyle: "preserve-3d",
            transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"
          }}
        >
          {/* Front Side */}
          <div
            className="absolute inset-0 w-full h-full"
            style={{ backfaceVisibility: "hidden" }}
          >
            <div className="relative h-64 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-10" />
              <img
                src={event.image_url}
                alt={event.name}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="relative p-6 -mt-12 z-20">
              <div className="flex items-center gap-3 text-sm text-gray-300 mb-4 bg-gray-800/50 backdrop-blur-sm rounded-full px-4 py-2 w-fit">
                <Calendar className="w-4 h-4 text-purple-400" />
                {formatDate(event.date)}
                <Clock className="w-4 h-4 text-purple-400" />
                {formatTime(event.date)}
              </div>
              <h2 className="text-2xl font-bold text-white mb-4 line-clamp-2 font-heading">
                {event.name}
              </h2>
              <div className="flex items-center gap-2 text-gray-300 text-sm mb-4 bg-gray-800/50 backdrop-blur-sm rounded-full px-4 py-2 w-fit">
                <MapPin className="w-4 h-4 text-purple-400" />
                {event.venue}
              </div>
              <div className="flex justify-between items-center mt-8">
                <span className="text-lg font-bold text-white bg-purple-500/20 backdrop-blur-sm px-6 py-2 rounded-full border border-purple-500/20">
                  {event.price === -1 ? "Free Entry" : `₹ ${event.price}`}
                </span>
                <button
                  onClick={handleFlip}
                  className="flex items-center gap-2 px-6 py-2 bg-white/10 hover:bg-white/20 rounded-full text-white text-sm font-semibold transition-all duration-300 backdrop-blur-sm"
                >
                  <Info className="w-4 h-4" />
                  More Info
                </button>
              </div>
            </div>
          </div>

          {/* Back Side */}
          <div
            className="absolute inset-0 w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-6"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)"
            }}
          >
            <div className="flex flex-col h-full relative">
              {/* Updated Back Button */}
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-white font-heading">Event Details</h3>
                <button
                  onClick={handleFlip}
                  className="flex items-center justify-center w-10 h-10 bg-gray-800/50 hover:bg-gray-700/50 rounded-full transition-colors duration-300 group cursor-pointer"
                >
                  <ArrowLeft className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors duration-300" />
                </button>
              </div>
              
              <div className="space-y-4 flex-grow">
                <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm border border-white/10 hover:border-purple-500/30 transition-colors duration-300">
                  <h4 className="text-sm font-semibold text-purple-300 mb-2">Description</h4>
                  <p className="text-gray-300 leading-relaxed">
                    Join us for an incredible event experience! More details about the event will be provided here.
                  </p>
                </div>
                
                <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm border border-white/10 hover:border-purple-500/30 transition-colors duration-300">
                  <h4 className="text-sm font-semibold text-purple-300 mb-2">Schedule</h4>
                  <div className="flex items-center gap-2 text-gray-300">
                    <Calendar className="w-4 h-4 text-purple-400" />
                    {formatDate(event.date)}
                    <Clock className="w-4 h-4 ml-2 text-purple-400" />
                    {formatTime(event.date)}
                  </div>
                </div>
                
                <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm border border-white/10 hover:border-purple-500/30 transition-colors duration-300">
                  <h4 className="text-sm font-semibold text-purple-300 mb-2">Location</h4>
                  <div className="flex items-center gap-2 text-gray-300">
                    <MapPin className="w-4 h-4 text-purple-400" />
                    {event.venue}
                  </div>
                </div>
              </div>

              <button className="w-full py-4 mt-6 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl text-white font-semibold hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-2 group">
                <Ticket className="w-5 h-5 transform group-hover:rotate-12 transition-transform duration-300" />
                Register Now
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  // Rest of the component remains the same...
  
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-500 text-xl">{error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-6 text-white relative">
      <ParticlesComponent />
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl md:text-6xl mb-16 font-bold text-center bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent font-heading"
      >
        Events
      </motion.h1>

      <div className="w-full max-w-7xl mx-auto">
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-900/80 backdrop-blur-sm p-1.5 rounded-full border border-white/10">
            <button
              onClick={() => setActiveTab("upcoming")}
              className={`px-8 py-2.5 rounded-full transition-all duration-300 ${
                activeTab === "upcoming"
                  ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              Upcoming ({upcomingEvents.length})
            </button>
            <button
              onClick={() => setActiveTab("past")}
              className={`px-8 py-2.5 rounded-full transition-all duration-300 ${
                activeTab === "past"
                  ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              Past ({pastEvents.length})
            </button>
          </div>
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activeTab === "upcoming" ? (
              upcomingEvents.length === 0 ? (
                <p className="text-center col-span-full text-xl text-gray-400">
                  No upcoming events
                </p>
              ) : (
                upcomingEvents.map(event => (
                  <EventCard key={`${event.name}-${event.date}`} event={event} />
                ))
              )
            ) : pastEvents.length === 0 ? (
              <p className="text-center col-span-full text-xl text-gray-400">
                No past events
              </p>
            ) : (
              pastEvents.map(event => (
                <EventCard key={`${event.name}-${event.date}`} event={event} />
              ))
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EventsPage;