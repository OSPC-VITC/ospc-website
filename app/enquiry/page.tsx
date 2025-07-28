"use client";
import React from "react";
import { motion } from "framer-motion";
import { Instagram, Linkedin, MessageCircle, Globe, Mail, Phone, MapPin } from "lucide-react";
import ParticlesComponent from "@/components/Particles";



function Enquiry() {
  const contactMethods = [
    {
      name: "Instagram",
      description: "Follow us for updates, behind-the-scenes content, and event highlights.",
      icon: Instagram,
      link: "https://instagram.com/ospc_vitc",
      color: "from-purple-500 to-indigo-500",
      hoverColor: "hover:text-pink-400"
    },
    {
      name: "LinkedIn",
      description: "Connect with us professionally and stay updated on career opportunities.",
      icon: Linkedin,
      link: "https://www.linkedin.com/company/opensource-programming-club-vitc",
      color: "from-purple-500 to-indigo-500",
      hoverColor: "hover:text-blue-400"
    },
    {
      name: "WhatsApp Group",
      description: "Join our discussion forum for real-time conversations and support.",
      icon: MessageCircle,
      link: "https://chat.whatsapp.com/ENwW6ZfL9YRI7GRC6K4kMI",
      color: "from-purple-500 to-indigo-500",
      hoverColor: "hover:text-green-400"
    },
    {
      name: "Club Website",
      description: "Visit our official website for comprehensive information and resources.",
      icon: Globe,
      link: "https://ospcvitc.club/",
      color: "from-purple-500 to-indigo-500",
      hoverColor: "hover:text-purple-400"
    }
  ];

  const additionalInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "opensourceprogrammingclub.vitc@gmail.com",
      description: "For official inquiries and collaborations"
    },
    {
      icon: Phone,
      title: "Contact Number",
      content: "+91 80722 12612",
      description: "Club coordinator contact"
    },
    {
      icon: MapPin,
      title: "Location",
      content: "VIT Chennai Campus",
      description: "Kelambakkam, Chennai, Tamil Nadu"
    }
  ];

  return (
    <div
      className="flex flex-col min-h-screen relative overflow-hidden"
      
    >
      
      <div className="relative z-10">
        <ParticlesComponent id="particles-background"/>
        <div className="max-w-7xl mx-auto px-4 py-16">
          
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              Get In Touch
            </h1>
            <div className="relative">
              <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10" />
              <p className="relative text-lg leading-relaxed text-gray-200 max-w-3xl mx-auto p-8">
                Ready to join the Open Source Programming Club community? Connect with us through any of these platforms. 
                Whether you&apos;re looking to contribute to open source projects, attend our events, or simply want to be part 
                of our growing community, we&apos;re here to help you get started.
              </p>
            </div>
          </motion.div>

          {/* Contact Methods Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8 mb-20"
          >
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <div className="relative group overflow-hidden">
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${method.color} rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-500`} />
                  <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8 h-full shadow-2xl group-hover:bg-white/15 transition-all duration-300">
                    <div className="flex items-start space-x-6">
                      <div className={`p-4 rounded-xl bg-gradient-to-r ${method.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <method.icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-200 group-hover:bg-clip-text transition-all duration-300">
                          {method.name}
                        </h3>
                        <p className="text-gray-200 mb-6 leading-relaxed">
                          {method.description}
                        </p>
                        <a
                          href={method.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center px-4 py-2 text-sm font-semibold text-white bg-white/20 backdrop-blur-sm rounded-lg border border-white/30 ${method.hoverColor} hover:bg-white/30 hover:scale-105 transition-all duration-300 shadow-lg`}
                        >
                          Connect Now
                          <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              Additional Information
            </h2>
            <div className="grid md:grid-cols-3 gap-10">
              {additionalInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -10 }}
                  className="text-center group"
                >
                  <div className="relative">
                    <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-xl opacity-50 group-hover:opacity-80 transition duration-500 w-20 h-20 mx-auto" />
                    <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300">
                      <info.icon className="w-8 h-8 text-slate-300 group-hover:text-slate-400 transition-colors duration-300" />
                    </div>
                  </div>
<div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 group-hover:bg-white/10 transition-all duration-300 overflow-hidden">
  <h3 className="text-2xl font-bold text-slate-200 mb-3 group-hover:text-slate-300 group-hover:bg-gradient-to-r group-hover:from-purple-200 group-hover:to-pink-200 group-hover:bg-clip-text transition-all duration-300 break-words">
                      {info.title}
                    </h3>
  <p className="text-sm text-gray-300 break-words">
                      {info.content}
                    </p>
  <p className="text-sm text-gray-300 break-words">
                      {info.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

         
        </div>
      </div>
    </div>
  );
}

export default Enquiry;