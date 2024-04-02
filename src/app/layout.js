import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://abhishekbxr.website"),

  title: {
    default:
      "ecommerce website developer patna Bihar , software developer in patna bihar abhishekbxr Abhishek Kumar",
  },

  description:
    "Software Engineer and Web Developer in patna bihar | Transforming Ideas into Digital Solutions. Expert in ecommerce website developer, UI/UX Design, and Problem-Solving. Available for Freelance Projects.| abhishekbxr",

  generator: "Abhishek Kumar",
  applicationName: "Abhishek Portfolio Website",
  keywords: [
    "Software Developer",
    "Web Developer",
    "Full-Stack Developer",
    "UI/UX Designer",
    "Programming Expert",
    "Problem-Solver",
    "Innovative Solutions",
    "Code Optimization",
    "Responsive Web Design",
    "Front-End Development",
    "Back-End Development",
    "JavaScript",
    "HTML5",
    "CSS3",
    "React.js",
    "Node.js",
    "PHP",
    "Database Management",
    "Freelance Developer",
    "Digital Solutions Architect",
  ],

  authors: [{ name: "Abhishek kumar", url: "https://abhishekbxr.website" }],
  creator: "Abhishek Kumar",
  publisher: "Abhishek Kumar",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Abhishek Kumar - Experienced Software Engineer and Web Developer",
    description:
      "Abhishek Kumar - Software and Web Developer with a passion for crafting innovative digital solutions. Specializing in Full-Stack Development and UI/UX Design. Open to exciting freelance opportunities. Let's build something amazing together!",

    url: "https://abhishekbxr.com",
    siteName: "Abhishek Portfolio",

    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: "Abhishek Kumar - Experienced Software Engineer and Web Developer",
    description:
      "Abhishek Kumar - Software and Web Developer with a passion for crafting innovative digital solutions. Specializing in Full-Stack Development and UI/UX Design. Open to exciting freelance opportunities. Let's build something amazing together!",

    handle: "@abhishekbxr",
    site: "Abhishek Kumar",
    card: "summary_large_image",
  },
  robots: {
    content: "index, follow",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>{children}</body>
    </html>
  );
}
