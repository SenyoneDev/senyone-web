import React from "react";
import NewsletterPopup from "../components/NewsletterPopup";
import {
  Blog,
  Chiffres,
  Contact,
  Hero,
  Partners,
  Service,
  Whoami,
} from "../components/sections";
import BackButton from "../components/sections/BackButton";

export default function Home() {
  const [newsletterPopup, setNewsletterPopup] = React.useState(false);
  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        setNewsletterPopup(true);
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, [newsletterPopup]);
  return (
    <div id="top">
      {newsletterPopup && (
        <NewsletterPopup closePopup={() => setNewsletterPopup(false)} />
      )}
      <Hero />
      <Whoami />
      <Service />
      <Blog />
      <Partners />
      <Chiffres />
      <Contact />
      <BackButton />
    </div>
  );
}
