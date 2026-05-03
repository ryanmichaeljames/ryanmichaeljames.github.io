import { Routes, Route } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import BlogPost from "./pages/BlogPost";
import "./App.css";

const SEO_TITLE = "Ryan James — Technical Lead / DevOps Engineer";
const SEO_DESC =
  "Technical Lead based in Auckland, NZ. 15+ years implementing Dataverse and Power Platform, with a focus on DevOps, ALM, and AI-assisted automation.";
const SEO_URL = "https://www.ryanjames.dev";
const SEO_IMAGE = `${SEO_URL}/og-image.png`;

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Resume />
    </>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{SEO_TITLE}</title>
        <meta name="description" content={SEO_DESC} />
        <link rel="canonical" href={SEO_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={SEO_URL} />
        <meta property="og:title" content={SEO_TITLE} />
        <meta property="og:description" content={SEO_DESC} />
        <meta property="og:image" content={SEO_IMAGE} />
        <meta property="og:locale" content="en_NZ" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@WhinyRyanie" />
        <meta name="twitter:title" content={SEO_TITLE} />
        <meta name="twitter:description" content={SEO_DESC} />
        <meta name="twitter:image" content={SEO_IMAGE} />
        <meta name="author" content="Ryan James" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#ffffff" />
      </Helmet>

      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
      </main>

      <Footer />
    </HelmetProvider>
  );
}
