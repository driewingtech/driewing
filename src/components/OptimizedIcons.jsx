import React from "react";

// Lazy load icons on demand - only import when used
const LazyIcon = ({ iconName, size = 24, color, className }) => {
  const [Icon, setIcon] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    let isMounted = true;

    const loadIcon = async () => {
      try {
        let icon = null;
        // Map common icons to their imports
        const iconMap = {
          // FA icons
          FaBars: () => import("react-icons/fa").then((m) => m.FaBars),
          FaTimes: () => import("react-icons/fa").then((m) => m.FaTimes),
          FaCheck: () => import("react-icons/fa").then((m) => m.FaCheck),
          FaChevronDown: () =>
            import("react-icons/fa").then((m) => m.FaChevronDown),
          FaChevronUp: () =>
            import("react-icons/fa").then((m) => m.FaChevronUp),
          FaLinkedinIn: () =>
            import("react-icons/fa6").then((m) => m.FaLinkedinIn),
          FaXTwitter: () => import("react-icons/fa6").then((m) => m.FaXTwitter),
          FaGithub: () => import("react-icons/fa6").then((m) => m.FaGithub),
          FaLaptopCode: () =>
            import("react-icons/fa").then((m) => m.FaLaptopCode),
          FaMobileAlt: () =>
            import("react-icons/fa").then((m) => m.FaMobileAlt),
          FaLink: () => import("react-icons/fa").then((m) => m.FaLink),
          FaChartLine: () =>
            import("react-icons/fa").then((m) => m.FaChartLine),
          FaLinkedin: () => import("react-icons/fa").then((m) => m.FaLinkedin),
          FaDev: () => import("react-icons/fa").then((m) => m.FaDev),
          FaMedium: () => import("react-icons/fa").then((m) => m.FaMedium),
          FaArrowLeft: () =>
            import("react-icons/fa").then((m) => m.FaArrowLeft),
          FaReact: () => import("react-icons/fa").then((m) => m.FaReact),
          FaNodeJs: () => import("react-icons/fa").then((m) => m.FaNodeJs),
          FaJava: () => import("react-icons/fa").then((m) => m.FaJava),
          FaPython: () => import("react-icons/fa").then((m) => m.FaPython),
          FaPhp: () => import("react-icons/fa").then((m) => m.FaPhp),
          FaRegClock: () => import("react-icons/fa").then((m) => m.FaRegClock),
          FaGlobe: () => import("react-icons/fa").then((m) => m.FaGlobe),
          FaEnvelopeOpenText: () =>
            import("react-icons/fa").then((m) => m.FaEnvelopeOpenText),
          FaStar: () => import("react-icons/fa").then((m) => m.FaStar),
          FaQuoteLeft: () =>
            import("react-icons/fa").then((m) => m.FaQuoteLeft),
          // SI icons
          SiReact: () => import("react-icons/si").then((m) => m.SiReact),
          SiNodedotjs: () =>
            import("react-icons/si").then((m) => m.SiNodedotjs),
          SiNextdotjs: () =>
            import("react-icons/si").then((m) => m.SiNextdotjs),
          SiMongodb: () => import("react-icons/si").then((m) => m.SiMongodb),
          SiSpringboot: () =>
            import("react-icons/si").then((m) => m.SiSpringboot),
          SiMysql: () => import("react-icons/si").then((m) => m.SiMysql),
          SiPhp: () => import("react-icons/si").then((m) => m.SiPhp),
          SiLaravel: () => import("react-icons/si").then((m) => m.SiLaravel),
          SiFirebase: () => import("react-icons/si").then((m) => m.SiFirebase),
          SiSupabase: () => import("react-icons/si").then((m) => m.SiSupabase),
          SiAndroid: () => import("react-icons/si").then((m) => m.SiAndroid),
          SiApple: () => import("react-icons/si").then((m) => m.SiApple),
          SiVercel: () => import("react-icons/si").then((m) => m.SiVercel),
          SiEthereum: () => import("react-icons/si").then((m) => m.SiEthereum),
          SiSolana: () => import("react-icons/si").then((m) => m.SiSolana),
          SiRust: () => import("react-icons/si").then((m) => m.SiRust),
          SiExpress: () => import("react-icons/si").then((m) => m.SiExpress),
          SiWeb3Dotjs: () =>
            import("react-icons/si").then((m) => m.SiWeb3Dotjs),
          SiFlutter: () => import("react-icons/si").then((m) => m.SiFlutter),
          SiLeetcode: () => import("react-icons/si").then((m) => m.SiLeetcode),
        };

        if (iconMap[iconName]) {
          icon = await iconMap[iconName]();
          if (isMounted) {
            setIcon(() => icon);
          }
        }
      } catch (err) {
        console.warn(`Failed to load icon: ${iconName}`, err);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadIcon();

    return () => {
      isMounted = false;
    };
  }, [iconName]);

  if (loading || !Icon) {
    return (
      <span style={{ display: "inline-block", width: size, height: size }} />
    );
  }

  return <Icon size={size} color={color} className={className} />;
};

export default LazyIcon;
