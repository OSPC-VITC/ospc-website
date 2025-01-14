"use client";
import { useEffect, useState } from "react";
import { supabase } from "../../utils/supabaseClient";
import { motion } from "framer-motion";
import ParticlesComponent from "@/components/Particles";
import { Calendar, MapPin, Clock, Info } from "lucide-react";

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

    const handleFlip = (e: React.MouseEvent) => {
      e.stopPropagation();
      setIsFlipped(true);
    };

    const handleFlipBack = (e: React.MouseEvent) => {
      e.stopPropagation();
      setIsFlipped(false);
    };

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05 }}
        className="relative h-[500px] rounded-xl bg-gradient-to-br from-purple-500 via-indigo-500 to-blue-500 shadow-xl overflow-hidden"
      >
        <div
          className="relative w-full h-full transition-all duration-500"
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
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10" />
              <img
                src={event.image_url}
                alt={event.name}
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="relative p-6 -mt-12 z-20">
              <div className="flex items-center gap-2 text-sm text-gray-200 mb-4">
                <Calendar className="w-4 h-4" />
                {formatDate(event.date)}
                <Clock className="w-4 h-4 ml-2" />
                {formatTime(event.date)}
              </div>
              <h2 className="text-2xl font-bold text-white mb-4 line-clamp-2">
                {event.name}
              </h2>
              <div className="flex items-center gap-2 text-gray-300 text-sm mb-4">
                <MapPin className="w-4 h-4" />
                {event.venue}
              </div>
              <div className="flex justify-between items-center mt-6">
                <span className="text-lg font-bold text-white bg-purple-600/50 px-4 py-2 rounded-full">
                  {event.price === -1 ? "Free" : `₹ ${event.price}`}
                </span>
                <button
                  onClick={handleFlip}
                  className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full text-white text-sm font-semibold transition-all duration-300"
                >
                  <Info className="w-4 h-4" />
                  Details
                </button>
              </div>
            </div>
          </div>

          {/* Back Side */}
          <div
            className="absolute inset-0 w-full h-full bg-gradient-to-br from-gray-900/95 via-gray-800/95 to-gray-700/95 p-6"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)"
            }}
          >
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-white">Event Details</h3>
                <button
                  onClick={handleFlipBack}
                  className="px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full text-white text-sm font-semibold hover:opacity-90 transition-opacity"
                >
                  Back
                </button>
              </div>
              <div className="space-y-4 flex-grow">
                <div className="bg-white/5 rounded-lg p-4">
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">Description</h4>
                  <p className="text-gray-300">
                    Join us for an incredible event experience! More details about the event will be provided here.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">Schedule</h4>
                  <div className="flex items-center gap-2 text-gray-300">
                    <Calendar className="w-4 h-4" />
                    {formatDate(event.date)}
                    <Clock className="w-4 h-4 ml-2" />
                    {formatTime(event.date)}
                  </div>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">Location</h4>
                  <div className="flex items-center gap-2 text-gray-300">
                    <MapPin className="w-4 h-4" />
                    {event.venue}
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <button className="w-full py-3 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity">
                  Register Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-500 text-xl">{error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-10 px-6 text-white relative">
      <ParticlesComponent />
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl md:text-6xl mb-12 font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-gray-100"
      >
        Events
      </motion.h1>

      <div className="w-full max-w-6xl mx-auto">
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-black/50 p-1 rounded-full">
            <button
              onClick={() => setActiveTab("upcoming")}
              className={`px-8 py-2 rounded-full transition-all ${
                activeTab === "upcoming"
                  ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Upcoming Events ({upcomingEvents.length})
            </button>
            <button
              onClick={() => setActiveTab("past")}
              className={`px-8 py-2 rounded-full transition-all ${
                activeTab === "past"
                  ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Past Events ({pastEvents.length})
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