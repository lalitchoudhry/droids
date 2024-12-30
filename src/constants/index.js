export const robotsData = {
  // Company Theme & Brand
  brand: {
    name: "OpenDroids",
    tagline: "Advancing Humanity Through Intelligent Robotics",
    description:
      "Pioneering the future of autonomous systems with cutting-edge robotics and AI integration.",
    theme: {
      primary: "#6633cc", // Main brand color
      secondary: "#8855ff", // Accent color
      dark: "#1a1a2e", // Dark backgrounds
    },
  },

  // Robot Series
  robots: [
    {
      id: "OD-X1",
      name: "Nexus",
      series: "Industrial Series",
      tagline: "Redefining Industrial Automation",
      description:
        "Advanced manufacturing robot with precise control and adaptive learning capabilities.",
      specs: {
        power: "3000W",
        height: "1.85m",
        weight: "180kg",
        speed: "35km/h",
        precision: "±0.01mm",
        payload: "200kg",
      },
      features: [
        "AI-powered motion planning",
        "Real-time environment adaptation",
        "Multi-tool compatibility",
        "Predictive maintenance",
      ],
      applications: [
        "Advanced Manufacturing",
        "Assembly Lines",
        "Quality Control",
        "Material Handling",
      ],
    },
    {
      id: "OD-L2",
      name: "Vector",
      series: "Logistics Series",
      tagline: "Smart Warehouse Solutions",
      description:
        "Autonomous mobile robot designed for modern logistics and warehouse operations.",
      specs: {
        power: "2500W",
        height: "1.2m",
        weight: "120kg",
        speed: "40km/h",
        battery: "12 hours",
        payload: "500kg",
      },
      features: [
        "Dynamic route optimization",
        "Swarm intelligence",
        "Obstacle avoidance",
        "Wireless charging",
      ],
      applications: [
        "Warehouse Automation",
        "Order Fulfillment",
        "Inventory Management",
        "Last-Mile Delivery",
      ],
    },
    {
      id: "OD-C3",
      name: "Synth",
      series: "Collaborative Series",
      tagline: "Your Intelligent Workshop Assistant",
      description:
        "Advanced collaborative robot designed for safe human-robot interaction in various workspaces.",
      specs: {
        power: "1800W",
        height: "1.65m",
        weight: "95kg",
        speed: "25km/h",
        precision: "±0.05mm",
        reach: "1.4m",
      },
      features: [
        "Force sensing technology",
        "Gesture recognition",
        "Voice commands",
        "Safety-first design",
      ],
      applications: [
        "Small Manufacturing",
        "Research Labs",
        "Educational Institutions",
        "Medical Assistance",
      ],
    },
  ],

  // Technology Highlights
  technologies: [
    {
      name: "Neural Processing Unit",
      description: "Custom-designed AI processor for real-time decision making",
      icon: "processor",
    },
    {
      name: "Adaptive Control System",
      description: "Self-learning movement patterns and environment adaptation",
      icon: "control",
    },
    {
      name: "Vision Processing",
      description: "Advanced computer vision with depth perception",
      icon: "eye",
    },
    {
      name: "Safety Protocol",
      description: "Multi-layered safety systems with predictive analysis",
      icon: "shield",
    },
  ],

  // Industry Applications
  industries: [
    {
      name: "Manufacturing",
      description:
        "Revolutionizing production lines with intelligent automation",
      useCase: "Increased production efficiency by 45% in automotive assembly",
    },
    {
      name: "Logistics",
      description: "Streamlining warehouse operations and supply chain",
      useCase: "Reduced order fulfillment time by 60% in e-commerce warehouses",
    },
    {
      name: "Healthcare",
      description: "Supporting medical staff with precise assistance",
      useCase: "Enhanced laboratory automation and sample handling",
    },
    {
      name: "Research",
      description: "Advancing scientific discovery through automation",
      useCase: "Accelerated experimental procedures in biotech research",
    },
  ],

  // Company Values
  values: [
    {
      title: "Innovation",
      description: "Pushing the boundaries of robotics and AI integration",
    },
    {
      title: "Reliability",
      description: "Building robust and dependable autonomous systems",
    },
    {
      title: "Safety",
      description: "Prioritizing human safety in all our designs",
    },
    {
      title: "Sustainability",
      description: "Creating eco-friendly and energy-efficient solutions",
    },
  ],
};

// Export theme configuration
export const themeConfig = {
  colors: {
    primary: {
      DEFAULT: "#6633cc",
      light: "#8855ff",
      dark: "#4411aa",
    },
    secondary: {
      DEFAULT: "#2dd4bf",
      light: "#5eead4",
      dark: "#14b8a6",
    },
    neutral: {
      50: "#fafafa",
      900: "#171717",
    },
  },
  fonts: {
    heading: "Neue Montreal, sans-serif",
    body: "Inter, sans-serif",
  },
  spacing: {
    section: "120px",
    container: "1240px",
  },
};

import rob1 from "../assets/images/robots/r1d1.png";
import rob2 from "../assets/images/robots/r2d3.png";

export const products = [
  {
    id: 1,
    image: rob1,
    title: "R1D1",
    topic: "Home Robot",
    description:
      "A modular and customizable robot perfect for education and innovation. Its open-source design makes it a favorite among researchers and developers.",
    specs: {
      "Used Time": "6 hours",
      "Charging Port": "Type-C",
      Compatible: "Android",
      Bluetooth: "5.3",
      Controlled: "Touch",
    },
  },
  {
    id: 2,
    image: rob2,
    title: "R2D3",
    topic: "Industrial Robot",
    description:
      "An intelligent lifting robot equipped with high-precision navigation and dynamic operational capabilities.",
    specs: {
      "Used Time": "6 hours",
      "Charging Port": "Type-C",
      Compatible: "Android",
      Bluetooth: "5.3",
      Controlled: "Touch",
    },
  },
  {
    id: 3,
    image: rob1,
    title: "R3D4",
    topic: "Collaborative Robot",
    description:
      "A powerhouse for industrial automation with a focus on scalability and adaptability.",
    specs: {
      "Used Time": "6 hours",
      "Charging Port": "Type-C",
      Compatible: "Android",
      Bluetooth: "5.3",
      Controlled: "Touch",
    },
  },
];

export const features = [
  {
    title: "Intelligent AI Learning",
    description:
      "Opendroids’s AI-driven system allows it to continuously adapt and optimize its task performance, ensuring it becomes more efficient the more you use it.",
    icon: "brain",
  },
  {
    title: "Modular Hardware",
    description:
      "With a 6 DOF arm, 6.61 lbs payload capacity, Depth camera, and a 4 feet stroke actuator, R1D1 is equipped for precision, reach, and flexibility.",
    icon: "hardware",
  },
  {
    title: "Seamless Navigation",
    description:
      "Advanced sensor-based obstacle avoidance for intelligent decision-making in any environment.",
    icon: "navigation",
  },
  {
    title: "Open-Source Customization",
    description:
      "Customizable and open-source platform supporting community-driven innovations and modifications.",
    icon: "code",
  },
];
