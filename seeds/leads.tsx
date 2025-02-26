const leads = [
  // web dev 
  {
    name: "Mithil Girish",
    designation: "Web Development Lead",
    image: "leadsPic/MithilGirish.jpg",
    department: "Web Development 🌐",
    socialHandles: {
      instagram: "https://www.instagram.com/mithilgirish/",
      linkedin: "https://www.linkedin.com/in/mithilgirish/",
      github: "https://github.com/mithilgirish",
    },
  },
  {
    name: "Gaurav Gali",
    designation: "Web Development Sub-Lead",
    image: "leadsPic/GauravGali.JPG",
    department: "Web Development 🌐",
    socialHandles: {
      instagram: "https://www.instagram.com/__gg05__/",
      linkedin: "https://www.linkedin.com/in/gaurav-gali/",
      github: "https://github.com/Gaurav-Gali",
    },
  },
  {
    name: "Prasanth",
    designation: "Web Development R&D Lead",
    image: "leadsPic/Prasanth.jpeg",
    department: "Web Development 🌐",
    socialHandles: {
      instagram: "https://www.instagram.com/prashh._.07/",
      linkedin: "https://www.linkedin.com/in/prasanth-v7115/",
      github: "https://github.com/prashhviji",
    },
  },

  // AI/ML
  {
    name: "K.Hariprasaadh",
    designation: "AIML Lead",
    image: "leadsPic/Hariprasaadh.jpg",
    department: "AI/ML 🧠",
    socialHandles: {
      instagram: "https://www.instagram.com/hariprasaadh_k/profilecard/?igsh=YWZwOG9rendubnUw",
      linkedin: "https://www.linkedin.com/in/hariprasaadh-k-a5430a287",
      github: "https://github.com/Hariprasaadh",
    },
  },
  {
    name: "Dhilip Kumar P",
    designation: "AIML Sub-Lead",
    image: "leadsPic/DhilipKumar.jpg",
    department: "AI/ML 🧠",
    socialHandles: {
      instagram: "https://www.instagram.com/n01c_3/",
      linkedin: "https://www.linkedin.com/in/dhilip-kumar-parthiba/",
      github: "https://github.com/RadieNoice",
    },
  },
  {
    name: "Prakul",
    designation: "AIML R&D Lead",
    image: "leadsPic/Prakul.jpg",
    department: "AI/ML 🧠",
    socialHandles: {
      instagram: "",
      linkedin: "",
      github: "",
    },
  },

  // Cyber Security
  {
    name: "Naveen Bharath",
    designation: "Cyber Security Lead",
    image: "leadsPic/Naveen.jpeg",
    department: "Cyber Security 🛡️",
    socialHandles: {
      instagram: "https://www.instagram.com/axolotl.was.here/",
      linkedin: "https://www.linkedin.com/in/naveen-bharath-27569b2a9/",
      github: "https://github.com/AxolotlHere",
    },
  },
  {
    name: "Hansa",
    designation: "Cyber Security Sub-Lead",
    image: "leadsPic/HansaLeo.jpg",
    department: "Cyber Security 🛡️",
    socialHandles: {
      instagram: "https://www.instagram.com/_hanss_aaa",
      linkedin: "https://www.linkedin.com/in/hansa-leo-chemmanda-56422128b",
      github: "https://github.com/Hans882",
    },
  },
  {
    name: "Pranjal Mitra",
    designation: "Cyber Security R&D Lead",
    image: "leadsPic/PranjalMitra.jpg",
    department: "Cyber Security 🛡️",
    socialHandles: {
      instagram: "https://www.instagram.com/pranj.al004",
      linkedin: "https://www.linkedin.com/in/pranjalmitra",
      github: "https://www.github.com/Pranjal1804",
    },
  },

  // Robotics & IoT
  {
    name: "KISHORE PRIYAN S",
    designation: "Robotics & IoT Lead",
    image: "leadsPic/KISHOREPRIYAN.jpg",
    department: "Robotics & IoT 🤖",
    socialHandles: {
      instagram: "https://www.instagram.com/f12_haker/",
      linkedin: "https://www.linkedin.com/in/priyankishore2006/",
      github: "https://github.com/priyankishore2006",
    },
  },
  {
    name: "Ashwin T E",
    designation: "Robotics & IoT R&D Lead",
    image: "leadsPic/Ashwin.jpg",
    department: "Robotics & IoT 🤖",
    socialHandles: {
      instagram: "https://www.instagram.com/ashwin__317",
      linkedin: "https://www.linkedin.com/in/ashwin-t-e-410655240/",
      github: "https://github.com/Ashwin312007",
    },
  },

  // Event Management
  {
    name: "Vijay",
    designation: "Event Management Lead",
    image: "leadsPic/Vijay.jpg",
    department: "Event Management 🗓️",
    socialHandles: {
      instagram: "https://www.instagram.com/_vijay_204/",
      linkedin: "https://www.linkedin.com/in/vijay-bs-ba566528a/",
      github: "https://github.com/vijayy-exe",
    },
  },
  {
    name: "Arjun",
    designation: "Event Management Sub-Lead",
    image: "leadsPic/ArjunMahalingam.jpg",
    department: "Event Management 🗓️",
    socialHandles: {
      instagram: "https://www.instagram.com/arjun_mahalingam/",
      linkedin: "",
      github: "https://github.com/Arjun50720",
    },
  },
  {
    name: "Krish Dagar",
    designation: "Marketing Lead",
    image: "leadsPic/KrishDagar.jpg",
    department: "Event Management 🗓️",
    socialHandles: {
      instagram: "",
      linkedin: "",
      github: "",
    },
  },

  // Social Media and Content Creation
  {
    name: "Venkat",
    designation: "Social Media Lead",
    image: "leadsPic/venkatakrishnan.jpeg",
    department: "Social Media 🖼️",
    socialHandles: {
      instagram: "https://www.instagram.com/venk4t.exe/",
      linkedin: "https://www.linkedin.com/in/venkata-krishnan-4618b9292/",
      github: "https://github.com/venkat24k",
    },
  },
  {
    name: "Barani Kumar",
    designation: "Outreach Lead",
    image: "leadsPic/BaraniKumar.jpg",
    department: "Social Media 🖼️",
    socialHandles: {
      instagram: "https://www.instagram.com/barani7_/",
      linkedin: "",
      github: "",
    },
  },
  {
    name: "Ritvic Vijay",
    designation: "Design Lead",
    image: "leadsPic/RitvicVijay.jpeg",
    department: "Content and Design 🧑‍🎨",
    socialHandles: {
      instagram: "https://www.instagram.com/r1tvic/",
      linkedin: "",
      github: "",
    },
  },
  {
    name: "Pavithra Uthrah",
    designation: "Design Lead",
    image: "leadsPic/Uthrah.jpg",
    department: "Content and Design 🧑‍🎨",
    socialHandles: {
      instagram: "https://www.instagram.com/uthrah.rk/",
      linkedin: "https://www.linkedin.com/in/uthrah-rk/",
      github: "https://github.com/uthrahrk",
    },
  },
];

export default leads;
