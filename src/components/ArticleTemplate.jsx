import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Footer from "./Footer";
import Button from "./Button";
import Navbar from "./Navbar";


export default function ArticleTemplate({
  title,
  image,
  video,
  children,
}) {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();


  const handleContactClick = () => {
    navigate("/#contact");

    setTimeout(() => {
      document
        .getElementById("contact")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };



  return (
    <>
     <Navbar />
      {/* ARTICLE */}
      <section className="min-h-screen bg-white px-6 py-40">
        <div className="max-w-5xl mx-auto">

          <h1 className="text-4xl font-bold text-topo-navy mb-6 text-center">
            {title}
          </h1>

{video ? (
<video
    className="w-full h-80 md:h-[500px] object-cover rounded-xl shadow-xl mb-8"
    autoPlay
    muted
    loop
    playsInline
    preload="metadata"
    poster={image}
>
    <source
        src={video}
        type="video/mp4"
    />
</video>
) : (
  image && (
    <img
      src={image}
      alt={title}
      className="w-full h-80 md:h-[450px] object-cover rounded-xl shadow-md mb-8"
    />
  )
)}

          <div className="prose prose-lg max-w-none prose-headings:text-topo-navy text-topo-dark">
  {children}
</div>

          {/* CTA */}
         {/*  <div className="flex justify-center mt-10">
           <Button
  variant="accent"
  onClick={handleContactClick}
  className="
    px-8
    py-4
    rounded-xl
    font-bold
    text-lg
    shadow-lg
    hover:shadow-xl
    hover:scale-105
    transition-all
    duration-300
  "
>
              {t("buttons.quote")}
            </Button>
          </div>*/}

        </div>
      </section>

      <Footer />
    </>
  );
}