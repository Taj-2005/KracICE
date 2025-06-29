import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "AI-Powered Personalized Exam Preparation | India",
  description: "An AI-based platform offering personalized study plans, adaptive learning, and affordable guidance for competitive exams like NEET, JEE, and UPSC in India.",
  keywords: [
    "NEET preparation",
    "JEE coaching",
    "UPSC study plan",
    "AI exam prep",
    "personalized learning",
    "competitive exams India",
    "adaptive learning platform",
    "affordable coaching",
    "exam dashboard",
    "progress tracking"
  ],
  openGraph: {
    title: "AI-Powered Personalized Exam Preparation | India",
    description: "Affordable, AI-based personalized platform for NEET, JEE, UPSC preparation. Get tailored study plans, real-time feedback, and progress tracking.",
    siteName: "AI Exam Prep India",
    locale: "en_IN",
    type: "website"
  },
  category: "Education"
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
