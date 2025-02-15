"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ParticlesComponent from "@/components/Particles";
import { Calendar, MapPin, Clock, Info, X } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import { Skeleton } from "@/components/ui/skeleton"; // Import Skeleton from shadcn/ui
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"; // Import VisuallyHidden


interface Event {
  name: string;
  date: string;
  image_url: string;
  price: number;
  venue: string;
  description: string;
  registerLink: string;
}

const EventsPage = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [error, setError] = useState<string>("");
  const [activeTab, setActiveTab] = useState<"upcoming" | "past">("upcoming");
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [detailsModalOpen, setDetailsModalOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true); // Loading state

  // For poster preview
  const [posterModalOpen, setPosterModalOpen] = useState<boolean>(false);
  const [selectedPoster, setSelectedPoster] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true); // Set loading to true when fetching starts
      try {
        const res = await fetch("/api/events");
        const { data, error } = await res.json();
        if (error) throw error;
        setEvents(data || []);
      } catch (err) {
        setError("Error fetching data");
        console.error("Error:", err);
      } finally {
        setLoading(false); // Set loading to false when fetching ends
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

  const isUpcoming = (date: string) => new Date(date) > new Date();

  const upcomingEvents = events.filter((event) => isUpcoming(event.date));
  const pastEvents = events.filter((event) => !isUpcoming(event.date));

  const EventCard = ({
    event,
    onMoreInfo,
  }: {
    event: Event;
    onMoreInfo: (event: Event) => void;
  }) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        className="relative h-[500px] rounded-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 shadow-xl overflow-hidden group"
      >
        {/* Clickable Image – opens poster preview */}
        <div
          className="relative h-64 overflow-hidden cursor-pointer"
          onClick={() => {
            setSelectedPoster(event.image_url);
            setPosterModalOpen(true);
          }}
        >
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
          </div>
          <h2 className="text-2xl font-bold text-white mb-4 line-clamp-2 font-heading">
            {event.name}
          </h2>
          <div className="flex items-center gap-2 text-gray-300 text-sm mb-4 bg-gray-800/50 backdrop-blur-sm rounded-full px-4 py-2 w-fit">
            <MapPin className="w-4 h-4 text-purple-400" />
            {event.venue}
          </div>
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={() => {
                onMoreInfo(event);
              }}
              className="flex items-center gap-2 px-6 py-2 bg-purple-600/20 hover:bg-purple-600/30 rounded-full text-white text-sm font-semibold transition-all duration-300 backdrop-blur-sm"
            >
              <Info className="w-4 h-4" />
              More Info
            </button>
            {isUpcoming(event.date) && event.registerLink && (
              <button
                onClick={() => window.open(event.registerLink, "_blank")}
                className="bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-2 rounded-full text-white text-lg font-semibold hover:opacity-90 transition-all duration-300"
              >
                Register Now
              </button>
            )}
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
    <div className="min-h-screen py-12 px-6 text-white relative">
      <ParticlesComponent id="particles-background" />
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
            {loading ? (
              // Skeleton Loader
              Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={index}
                  className="relative h-[500px] rounded-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 shadow-xl overflow-hidden"
                >
                  <Skeleton className="h-64 w-full bg-gray-700" />
                  <div className="p-6">
                    <Skeleton className="h-6 w-24 bg-gray-700 mb-4" />
                    <Skeleton className="h-8 w-48 bg-gray-700 mb-4" />
                    <Skeleton className="h-4 w-32 bg-gray-700 mb-4" />
                    <div className="flex justify-between mt-8">
                      <Skeleton className="h-10 w-24 bg-gray-700" />
                      <Skeleton className="h-10 w-32 bg-gray-700" />
                    </div>
                  </div>
                </div>
              ))
            ) : activeTab === "upcoming" ? (
              upcomingEvents.length === 0 ? (
                <p className="text-center col-span-full text-xl text-gray-400">
                  No upcoming events
                </p>
              ) : (
                upcomingEvents.map((event) => (
                  <EventCard
                    key={`${event.name}-${event.date}`}
                    event={event}
                    onMoreInfo={(evt) => {
                      setSelectedEvent(evt);
                      setDetailsModalOpen(true);
                    }}
                  />
                ))
              )
            ) : pastEvents.length === 0 ? (
              <p className="text-center col-span-full text-xl text-gray-400">
                No past events
              </p>
            ) : (
              pastEvents.map((event) => (
                <EventCard
                  key={`${event.name}-${event.date}`}
                  event={event}
                  onMoreInfo={(evt) => {
                    setSelectedEvent(evt);
                    setDetailsModalOpen(true);
                  }}
                />
              ))
            )}
          </div>
        </motion.div>
      </div>

      {/* Event Details Modal */}
      <Dialog.Root open={detailsModalOpen} onOpenChange={setDetailsModalOpen}>
  <Dialog.Portal>
    <Dialog.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-sm" />
    <Dialog.Content className="fixed top-1/2 left-1/2 w-full max-w-sm z-50 transform -translate-x-1/2 -translate-y-1/2">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        className="bg-gray-900 p-6 rounded-2xl shadow-xl relative"
      >
        <div className="flex justify-between items-center mb-4">
          {/* Wrap DialogTitle in VisuallyHidden if you don't want it to be visible */}
          <VisuallyHidden>
            <Dialog.Title className="text-2xl font-bold text-white mb-4 font-heading">
              {selectedEvent?.name}
            </Dialog.Title>
          </VisuallyHidden>
          <Dialog.Close asChild>
            <button className="p-1 rounded-full hover:bg-gray-800">
              <X className="w-4 h-4 text-gray-300" />
            </button>
          </Dialog.Close>
        </div>
        {selectedEvent && (
          <>
            <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm border border-white/10 mb-4">
              <h4 className="text-sm font-semibold text-purple-300 mb-2">
                Details
              </h4>
              <p className="text-gray-300 leading-relaxed">
                {selectedEvent.description}
              </p>
            </div>
            {isUpcoming(selectedEvent.date) &&
              selectedEvent.registerLink && (
                <div className="flex justify-center">
                  <button
                    onClick={() =>
                      window.open(selectedEvent.registerLink, "_blank")
                    }
                    className="w-full py-4 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl text-white font-semibold hover:opacity-90 transition-all duration-300 text-center"
                  >
                    Register Now
                  </button>
                </div>
              )}
          </>
        )}
        <Dialog.Close asChild>
          <button className="mt-6 w-full py-4 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl text-white font-semibold hover:opacity-90 transition-all duration-300">
            Close
          </button>
        </Dialog.Close>
      </motion.div>
    </Dialog.Content>
  </Dialog.Portal>
</Dialog.Root>

      {/* Poster Preview Modal */}
      <Dialog.Root open={posterModalOpen} onOpenChange={setPosterModalOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/80 backdrop-blur-sm" />
          <Dialog.Content className="fixed top-1/2 left-1/2 w-full max-w-lg z-50 transform -translate-x-1/2 -translate-y-1/2 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative"
            >
              {selectedPoster && (
                <img
                  src={selectedPoster}
                  alt="Event Poster"
                  className="max-w-full max-h-screen object-contain rounded-lg shadow-2xl"
                />
              )}
              <Dialog.Close asChild>
                <button className="absolute top-4 right-4 p-2 bg-gray-900 rounded-full hover:bg-gray-800">
                  <X className="w-5 h-5 text-gray-300" />
                </button>
              </Dialog.Close>
            </motion.div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
};

export default EventsPage;