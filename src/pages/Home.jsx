import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

/* ================================================================
   DATA
   ================================================================ */

const COMPANY_LOGOS = [
  {
    src: "https://ik.imagekit.io/mileseducation/miles_website/caira/new/deloitte.webp",
    alt: "Deloitte",
    width: 120,
    height: 48,
  },
  {
    src: "https://ik.imagekit.io/mileseducation/miles_website/caira/new/ey.webp",
    alt: "EY",
    width: 62,
    height: 48,
  },
  {
    src: "https://ik.imagekit.io/mileseducation/miles_website/caira/new/kpmg.webp",
    alt: "KPMG",
    width: 104,
    height: 48,
  },
  {
    src: "https://ik.imagekit.io/mileseducation/miles_website/caira/new/pwc.webp",
    alt: "PwC",
    width: 74,
    height: 48,
  },
  {
    src: "https://ik.imagekit.io/mileseducation/miles_website/caira/new/rsm.webp",
    alt: "RSM",
    width: 88,
    height: 48,
  },
  {
    src: "https://ik.imagekit.io/mileseducation/miles_website/caira/new/bdo.webp",
    alt: "BDO Alliance USA",
    width: 76,
    height: 48,
  },
  {
    src: "https://ik.imagekit.io/mileseducation/miles_website/caira/new/grantthornton.webp",
    alt: "Grant Thornton",
    width: 136,
    height: 48,
  },
  {
    src: "https://ik.imagekit.io/mileseducation/miles_website/caira/new/accenture.webp",
    alt: "Accenture",
    width: 136,
    height: 48,
  },
  {
    src: "https://ik.imagekit.io/mileseducation/miles_website/caira/new/jpmorgan.webp",
    alt: "JP Morgan",
    width: 180,
    height: 48,
  },
];

const universityLogos = [
  {
    src: "https://ik.imagekit.io/mileseducation/miles_website/home_new/logo_1.webp",
    alt: "Christ University",
    width: 180,
    height: 70,
  },
  {
    src: "https://ik.imagekit.io/mileseducation/miles_website/home_new/logo_2.webp",
    alt: "JAIN University",
    width: 160,
    height: 70,
  },
  {
    src: "https://ik.imagekit.io/mileseducation/miles_website/home_new/logo_3.webp",
    alt: "St Josephs University",
    width: 90,
    height: 90,
  },
  {
    src: "https://ik.imagekit.io/mileseducation/miles_website/home_new/logo_4.webp",
    alt: "St Josephs Crest",
    width: 90,
    height: 90,
  },
  {
    src: "https://ik.imagekit.io/mileseducation/miles_website/home_new/logo_5.webp",
    alt: "St Josephs College of Commerce",
    width: 90,
    height: 90,
  },
  {
    src: "https://ik.imagekit.io/mileseducation/miles_website/home_new/logo_6.webp",
    alt: "Mount Carmel College",
    width: 90,
    height: 90,
  },
];

const beyondItems = [
  {
    id: "1.",
    lines: ["Miles Talent Hub |", "Nursing"],
  },
  {
    id: "2.",
    lines: ["Miles Global Education", "| Affordable global", "degrees"],
  },
  {
    id: "3.",
    lines: ["Miles SOBA |", "Business and Liberal", "Arts"],
  },
  {
    id: "4.",
    lines: ["Futurense | Applied", "AI and analytics", "workforce"],
  },
  {
    id: "5.",
    lines: ["Mojo Campus |", "Student living and", "experiences"],
  },
];

const foundationItems = [
  {
    title: "Financial literacy",
    icon: "https://ik.imagekit.io/mileseducation/miles_website/home_new/financial_literacy.webp",
    img: {
      mobile: { w: 53, h: 61 },
      desktop: { w: 53, h: 61 },
    },
  },
  {
    title: "Employability and skilling",
    icon: "https://ik.imagekit.io/mileseducation/miles_website/home_new/skilling.webp",
    img: {
      mobile: { w: 80, h: 59 },
      desktop: { w: 80, h: 61 },
    },
  },
  {
    title: "Youth-led transformation initiatives",
    icon: "https://ik.imagekit.io/mileseducation/miles_website/home_new/initiatives.webp",
    img: {
      mobile: { w: 88, h: 61 },
      desktop: { w: 88, h: 61 },
    },
  },
];

/* ================================================================
   COMPONENTS
   ================================================================ */

function DownloadApp() {
  return (
    <div className="flex flex-row gap-4 justify-center">
      <div className="flex flex-col justify-center gap-3">
        <a
          href="https://apps.apple.com/us/app/miles-us-pathway/id6504799221"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#061A2F] p-2 flex rounded-lg gap-2 pr-4"
        >
          <img
            src="https://ik.imagekit.io/mileseducation/miles_website/home/app-store.webp"
            alt="App Store"
            width={32}
            height={32}
            className="shrink-0"
            loading="lazy"
          />
          <div>
            <p className="text-[10px] leading-3 text-white font-medium">
              Download on the
            </p>
            <p className="text-base text-white font-medium">App Store</p>
          </div>
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=com.miles.one"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#061A2F] p-2 flex rounded-lg gap-2 pr-4"
        >
          <img
            src="https://ik.imagekit.io/mileseducation/miles_website/home/play-store.webp"
            alt="Play Store"
            width={32}
            height={32}
            className="shrink-0"
            loading="lazy"
          />
          <div>
            <p className="text-[10px] leading-3 text-white font-medium">
              GET IT ON
            </p>
            <p className="text-base text-white font-medium">Google Play</p>
          </div>
        </a>
      </div>
      <div className="text-center">
        <img
          src="https://ik.imagekit.io/mileseducation/miles_website/home/milesone_qr_code.webp"
          alt="QR Code"
          width={100}
          height={100}
          className="min-w-[100px] min-h-[100px] inline-block"
          loading="lazy"
        />
        <p className="pt-1 text-xs text-[#fff]">Scan to download</p>
      </div>
    </div>
  );
}

/* ================================================================
   SECTION: HomeBannerNew
   ================================================================ */
function HomeBannerNew() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section
      className="w-full bg-center relative min-h-[620px] md:h-auto overflow-hidden"
      style={{ contain: "layout" }}
    >
      {/* Desktop Background */}
      <div className="hidden md:block absolute inset-0 top-0 overflow-hidden">
        <img
          src="https://ik.imagekit.io/mileseducation/miles_website/home/new/bg-hero-desk.webp"
          alt="Home Page Banner Desktop Background"
          width={1280}
          height={580}
          className="absolute inset-0 w-full h-full object-fill object-center z-0"
          sizes="100vw"
          style={{ objectPosition: "center center" }}
          fetchPriority="high"
          onLoad={() => setImageLoaded(true)}
        />
      </div>
      {/* Mobile Background — loaded lazily so text is LCP, not image */}
      <div className="md:hidden absolute inset-0 top-0">
        <img
          src="https://ik.imagekit.io/mileseducation/miles_website/home/new/bg-hero-mob.webp?tr=w-375,q-50,f-webp"
          alt="Home Page Banner Mobile Background"
          width={420}
          height={740}
          className="absolute inset-0 w-full h-full object-fill z-0"
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
        />
      </div>

      {/* Content Overlay - Only show when image is loaded */}
      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:px-6 flex flex-col gap-6 md:gap-8 md:flex-row
        justify-center items-center relative py-8 md:py-16 transition-opacity duration-300 ${
          imageLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Left side - People Image */}
        <div className="hidden md:block absolute -left-2 md:left-[-24px] lg:left-[-40px] bottom-[-224px] md:bottom-[-112.2px] lg:bottom-[-104.2px] 2xl:bottom-[-107px]">
          <img
            src="https://ik.imagekit.io/mileseducation/miles_website/home/new/home-people-section.webp"
            alt="Join Us"
            width={470}
            height={462}
            className="w-[254px] sm:w-[300px] md:w-[340px] lg:w-[470px] h-auto object-contain"
            fetchPriority="high"
          />
        </div>
        <div className="block md:hidden absolute left-0 bottom-[-236px]">
          <img
            src="https://ik.imagekit.io/mileseducation/miles_website/home/new/home-people-section-mob.webp"
            alt="Join Us"
            width={470}
            height={462}
            className="w-[254px] md:w-[470px] h-auto object-contain"
            fetchPriority="high"
          />
        </div>

        {/* Center - Main Content */}
        <div className="text-center md:text-center max-w-3xl mt-9 md:mt-10 relative">
          <h1 className="text-[28px] md:text-[40px] lg:text-[44px] xl:text-[46px] font-semibold text-white mb-1 leading-tight">
            Making Accountants
          </h1>
          <h2 className="text-[34px] md:text-[58px] lg:text-[60px] xl:text-[62px] font-semibold text-[#FFBA08] mb-4 md:mb-2 leading-tight tracking-normal">
            AI-Ready. Globally.
          </h2>

          <p className="text-sm md:text-base text-white mb-9 md:mb-16 max-w-2xl mx-auto md:mx-0">
            From CPA and CMA to AI-ready <br className="md:hidden block" />{" "}
            professionals with global careers.
            <br className="md:hidden block" />
            <br className="md:block hidden" /> Miles builds future-ready
            accountants for
            <br className="md:hidden block" /> India,
            <br className="md:block hidden" /> the United States, and the world.
          </p>
          <div>
            <button
              className=" text-black px-4 py-2.5 rounded-full bg-[#FFBA08] font-bold shadow-lg text-base md:text-base"
            >
              Become an AI-Ready Accountant
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   SECTION: HomeCaira
   ================================================================ */
function HomeCaira() {
  const [showDownloadModal, setShowDownloadModal] = useState(false);

  return (
    <>
      <section
        className="w-full bg-center relative bg-[#fff] min-h-[890px] md:min-h-[660px]"
        style={{ contain: "layout" }}
      >
        {/* Desktop Background */}
        <div className="hidden md:block absolute inset-0 top-0">
          <img
            src="https://ik.imagekit.io/mileseducation/miles_website/home/new/home-desk-caira.webp"
            alt="CAIRA Banner Desktop Background"
            width={1280}
            height={580}
            className="absolute inset-0 w-full h-full object-cover z-0 "
            fetchPriority="high"
          />
        </div>
        {/* Mobile Background */}
        <div className="md:hidden absolute inset-0">
          <img
            src="https://ik.imagekit.io/mileseducation/miles_website/home/new/ai_ready_bg.webp"
            alt="CAIRA Banner Mobile Background"
            width={420}
            height={740}
            className="absolute inset-0 w-full h-full object-cover z-0"
            fetchPriority="high"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:px-6 relative py-8 md:py-16 h-full">
          {/* Content Container */}
          <div className="flex flex-col h-full">
            {/* Top Content */}
            <div className="text-center md:text-left mb-0 md:mb-12 w-full">
              {/* Desktop Layout */}
              <div className="md:block hidden">
                <div className="flex justify-start">
                  <div className="flex items-center gap-2 bg-[#FFBA08] rounded-full px-3 py-1">
                    <img
                      src="https://ik.imagekit.io/mileseducation/miles_website/caira/new/light.webp"
                      alt="Free"
                      width={16}
                      height={16}
                      className="w-4 h-4 object-contain"
                      loading="lazy"
                    />
                    <span className="text-black text-sm md:text-base font-medium">
                      AI is no longer optional in accounting
                    </span>
                  </div>
                </div>

                <header className="md:pt-4">
                  <h2 className="text-xl md:text-[32px] font-semibold tracking-[-1.76px] text-[#061A2F]">
                    Certified AI-Ready
                    <span className="visit_txt pr-1 italic ">
                      {" "}
                      Accountant (CAIRA)
                    </span>
                  </h2>
                  <h2 className="text-sm md:text-lg pt-1 font-medium bg-gradient-to-r from-[#39f] to-[#061a2f] bg-clip-text text-transparent inline-block">
                    The AI capability layer for every accountant
                  </h2>
                </header>
              </div>

              {/* Mobile Layout */}
              <div className="md:hidden block w-full">
                <header className="text-center w-full">
                  <h2 className="text-xl font-semibold tracking-[-1.76px] text-[#061A2F] leading-[1] w-full">
                    Certified AI-Ready
                    <span className="visit_txt pr-1 italic ">
                      {" "}
                      Accountant (CAIRA)
                    </span>
                  </h2>
                  <h2 className="text-sm font-medium bg-gradient-to-r from-[#39f] to-[#061a2f] bg-clip-text text-transparent inline-block">
                    The AI capability layer for every accountant
                  </h2>
                </header>
                <div className="flex justify-center pt-4 w-full">
                  <div className="flex items-center gap-2 bg-[#FFBA08] rounded-full px-3 py-1">
                    <img
                      src="https://ik.imagekit.io/mileseducation/miles_website/caira/new/light.webp"
                      alt="Free"
                      width={16}
                      height={16}
                      className="w-4 h-4 object-contain"
                      loading="lazy"
                    />
                    <span className="text-black text-sm font-medium">
                      AI is no longer optional in accounting
                    </span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-black max-w-[351px] md:max-w-lg pt-2 leading-[1.1] text-center md:text-left mx-auto md:mx-0 w-full">
                CAIRA equips CPAs and CMAs with practical, job-ready AI skills
                across analytics, automation, audit, tax, and advisory.
              </p>

              {/* CAIRA Pathway Section */}
              <div className="mt-6 md:mt-8 md:mx-0">
                <h2 className="text-[28px] md:text-[28px] lg:text-[30px] font-semibold text-[#2A85FF] mb-0 md:mb-4 leading-[1]">
                  The CAIRA Pathway
                </h2>

                {/* Desktop Badges */}
                <div className="md:block hidden">
                  <img
                    src="https://ik.imagekit.io/mileseducation/miles_website/home/new/desk-caira-home.webp"
                    alt="CAIRA Pathway"
                    width={402}
                    height={178}
                    className="pt-0 object-contain w-[402px] 2xl:w-[600px]"
                    loading="lazy"
                  />
                </div>

                {/* Mobile Badges */}
                <div className="md:hidden block">
                  <img
                    src="https://ik.imagekit.io/mileseducation/miles_website/home/new/mob-caira-home.webp"
                    alt="CAIRA Pathway"
                    width={300}
                    height={130}
                    className="pt-6 pb-0 mb-0 w-full h-auto object-contain max-w-[302px] mx-auto"
                    loading="lazy"
                  />
                </div>

                <div className="md:hidden block">
                  <img
                    src="https://ik.imagekit.io/mileseducation/miles_website/home/new/caira.webp"
                    alt="CAIRA Pathway"
                    width={332}
                    height={299}
                    className="pt-4 pb-0 mb-0 w-full h-auto object-contain mx-auto relative left-[11px]"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Bottom Button - Positioned at bottom */}
            <div className="flex-1 flex items-end justify-center md:justify-start md:pt-8 2xl:pt-[76px] pt-0">
              <button
                onClick={() => setShowDownloadModal(true)}
                className="bg-white text-black px-6 py-2.5 rounded-full font-bold shadow-lg text-base hover:shadow-xl transition-shadow w-auto whitespace-nowrap"
              >
                Download the Miles One App
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Download Modal */}
      {showDownloadModal && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-[999] lg:p-10 p-4">
          <div
            className="rounded-2xl shadow-lg relative h-[auto] mx-auto border border-white p-4 w-[400px]"
            style={{
              background:
                "linear-gradient(180deg, rgba(255, 255, 255, 0.30) 0%, rgba(51, 153, 255, 0.30) 100%)",
              boxShadow: "0px 0px 14px 0px rgba(4, 84, 175, 0.29)",
              backdropFilter: "blur(28px)",
            }}
          >
            <button
              onClick={() => setShowDownloadModal(false)}
              className="text-white text-xl md:text-2xl absolute right-1 top-1 cursor-pointer"
            >
              ✕
            </button>
            <div className="text-center pt-4">
              <h3 className="text-white text-2xl font-semibold mb-2">
                Get Miles One App
              </h3>
              <p className="text-[#fff] text-sm mb-4">
                The #1 App for AI-Ready Accountants
              </p>
              <DownloadApp />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

/* ================================================================
   SECTION: HomeFoundation
   ================================================================ */
function HomeFoundation() {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-3 md:mb-6">
          <h2 className="text-xl md:text-[32px] font-semibold tracking-[-1.76px] text-[#061A2F] leading-[1.1]">
            Your
            <span className="visit_txt pr-1 italic "> Foundation</span>
          </h2>
          <h2 className="text-sm md:text-lg font-medium bg-gradient-to-r from-[#39f] to-[#061a2f] bg-clip-text text-transparent inline-block pt-1">
            Globally Recognized Accounting Credentials
          </h2>
        </header>

        <div className="flex justify-center text-center">
          <p className="flex items-center gap-2 bg-[#FFBA08] rounded-full px-4 py-1 md:px-2 md:py-0">
            <span className="text-black text-[11px] md:text-base font-medium md:font-normal">
              Every strong accounting career begins with a trusted
              qualification.
            </span>
          </p>
        </div>
        <p className="text-center text-xs md:text-base text-black mb-8 md:mb-8 pt-3 md:pt-2">
          Miles powers the world's most respected
          <br className="md:hidden block" /> professional accounting programs.
        </p>

        {/* Program Cards and Why Section */}
        <div className="flex flex-col lg:flex-row gap-8 md:gap-8 mb-8 md:mb-12 md:justify-center mx-auto md:mx-0">
          {/* Program Cards */}
          <div className="flex justify-center md::flex">
            <div className="grid grid-cols-2 md:grid-cols-2 gap-2 md:gap-6">
              {/* CPA Card */}
              <div
                className="md:w-[300px] w-[172px] h-[180px] md:h-[206px] p-0 md:p-0 text-center"
                style={{
                  borderRadius: "8px",
                  border: "1px solid rgba(0, 0, 0, 0.12)",
                  background: "#FFF",
                  boxShadow: "0 0 14px 0 rgba(51, 153, 255, 0.36)",
                }}
              >
                <div className="bg-[#FFBA084D]/30 font-sans mt-3 md:mt-4 tracking-tighter text-black px-3 py-1 rounded-full text-[9px] md:text-base font-medium mb-2 inline-block">
                  Certified Public Accountant
                </div>
                <div className="md:mb-0">
                  <span className="text-sm font-semibold text-black">
                    4 Exams
                  </span>
                  <span className="text-sm text-[#3399FF] ml-2">
                    • 12 Months
                  </span>
                </div>
                <h3 className="text-[28px] md:text-[32px] font-semibold text-[#3399FF] mb-0 md:mb-1">
                  US CPA
                </h3>
                <p className="text-[#1F1F1F] text-xs md:text-sm">
                  U.S. Equivalent of CA
                </p>
                <p className="text-[#1F1F1F] text-[11px] md:text-sm mb-3">
                  Big 4 + CPA firms in India and U.S.
                </p>
                <Link to="/cpa">
                  <button className="bg-[#2A85FF] text-base text-white px-8 py-2 rounded-b-lg font-medium transition-colors duration-200 w-full">
                    Explore CPA
                  </button>
                </Link>
              </div>

              {/* CMA Card */}
              <div
                className="md:w-[300px] w-[172px] h-[180px] md:h-[206px] p-0 md:p-0 text-center"
                style={{
                  borderRadius: "8px",
                  border: "1px solid rgba(0, 0, 0, 0.12)",
                  background: "#FFF",
                  boxShadow: "0 0 14px 0 rgba(51, 153, 255, 0.36)",
                }}
              >
                <div className="bg-[#FFBA084D]/30 font-sans mt-3 md:mt-4 tracking-tighter text-black px-3 py-1 rounded-full text-[9px] md:text-base font-medium mb-2 inline-block">
                  Certified Management Accountant
                </div>
                <div className="md:mb-0">
                  <span className="text-sm font-semibold text-black">
                    2 Exams
                  </span>
                  <span className="text-sm text-[#3399FF] ml-2">
                    • 8 Months
                  </span>
                </div>
                <h3 className="text-[28px] md:text-[32px] font-semibold text-[#3399FF] mb-0 md:mb-1">
                  US CMA
                </h3>
                <p className="text-[#1F1F1F] text-xs md:text-sm">
                  Strategic Finance Focus
                </p>
                <p className="text-[#1F1F1F] text-[11px] md:text-sm mb-3">
                  IMA Platinum Partner
                </p>
                <Link to="/cma">
                  <button className="bg-[#2A85FF] text-base text-white px-8 py-2 rounded-b-lg font-medium transition-colors duration-200 w-full">
                    Explore CMA
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Why Section - Desktop */}
          <div className="hidden lg:block md:w-[420px] md:h-[206px] ">
            <div
              className="p-6"
              style={{
                borderRadius: "16px",
                background:
                  "linear-gradient(104deg, rgba(255, 255, 255, 0) 2.45%, rgba(255, 184, 1, 0.1) 99.08%)",
                backdropFilter: "blur(3px)",
              }}
            >
              <div className="flex items-center gap-6 mb-4">
                <div className="w-[78px] h-[78px] flex items-center justify-center">
                  <img
                    src="https://ik.imagekit.io/mileseducation/miles_website/home/new/question.webp"
                    alt="Question Mark Icon"
                    width={78}
                    height={78}
                    loading="lazy"
                  />
                </div>
                <h3 className="text-[28px] md:text-[28px] font-semibold text-[#FFBA08] leading-[1.2]">
                  Why CPA or CMA
                  <br />
                  with Miles?
                </h3>
              </div>
              <ul className="space-y-2 text-black list-disc list-outisde ml-2 leading-[1]">
                <li className="items-start gap-2">
                  <span>Global recognition</span>
                </li>
                <li className="items-start gap-2">
                  <span>Strong India and U.S. career outcomes</span>
                </li>
                <li className="items-start gap-2">
                  <span>
                    Seamlessly integrated with CAIRA and U.S. pathways
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Why Section - Mobile */}
        <div className="md:hidden mb-8 mx-auto">
          <div
            className="px-6 py-2"
            style={{
              borderRadius: "16px",
              background:
                "linear-gradient(104deg, rgba(255, 255, 255, 0) 2.45%, rgba(255, 184, 1, 0.1) 99.08%)",
              backdropFilter: "blur(3px)",
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-[78px] h-[78px] flex items-center justify-center">
                <img
                  src="https://ik.imagekit.io/mileseducation/miles_website/home/new/question.webp"
                  alt="Question Mark Icon"
                  width={78}
                  height={78}
                  loading="lazy"
                />
              </div>
              <h3 className="text-[28px] font-semibold text-[#FFBA08] leading-[1.2] md:text-left text-center">
                Why CPA or CMA
                <br />
                with Miles?
              </h3>
            </div>
            <ul className="space-y-2 text-black font-medium list-disc list-outisde ml-2 leading-[1] md:leading-[1]">
              <li className="items-start gap-2">
                <span>Global recognition</span>
              </li>
              <li className="items-start gap-2">
                <span>Strong India and U.S. career outcomes</span>
              </li>
              <li className="items-start gap-2">
                <span>Seamlessly integrated with CAIRA and U.S. pathways</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Explore Programs Button */}
        <div className="text-center">
          <Link to="/accounting">
            <button className="bg-[#1772EA] text-white px-20 py-2 rounded-full font-medium">
              Explore Programs
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   SECTION: HomeIndiaCareers
   ================================================================ */
function HomeIndiaCareers() {
  const marqueeRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    let isVisible = true;
    const marquee = marqueeRef.current;
    if (!marquee) return;

    let translateX = 0;
    let animationFrameId;

    const getResetPoint = () => marquee.scrollWidth / 2;

    const animate = () => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(animate);
        return;
      }
      translateX -= 1;
      if (Math.abs(translateX) >= getResetPoint()) {
        translateX = 0;
      }
      marquee.style.transform = `translate3d(${translateX}px, 0, 0)`;
      animationFrameId = requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
    };
  }, []);

  return (
    <section ref={containerRef} className="w-full bg-[#061A2F] py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-[20px] md:text-[32px] font-semibold tracking-[-1.76px] text-[#fff] leading-[1.2] md:leading-[1.1]">
            India <span className="visit_txt pr-1  italic">Careers</span>
          </h2>
          <h3 className="text-sm md:text-lg font-medium text-white ">
            <span className="bg-gradient-to-r from-[#39F] to-[#FFF] bg-clip-text text-transparent">
              Careers with the World's Leading Firms in India
            </span>
          </h3>

          {/* Description */}
          <p className="text-xs md:text-base text-white md:leading-relaxed leading-[1.1] mx-auto pt-4 md:pt-5">
            Miles alumni work across Big 4 firms, global MNCs, consulting firms,
            and GCCs, shaping the future of accounting, finance, and analytics.
          </p>
        </div>

        {/* Company Logos Marquee */}
        <div className="overflow-hidden">
          <div
            ref={marqueeRef}
            className="flex items-center gap-8 md:gap-10"
            style={{ width: "max-content" }}
          >
            {[...COMPANY_LOGOS, ...COMPANY_LOGOS].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 h-10 md:h-12 flex items-center"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className="object-contain h-full w-auto"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-row gap-4 justify-center items-center pt-6 md:pt-8">
          <Link to="/cpa-cma-job-opportunities-india">
            <button className="bg-[#1772EA] text-white px-8 py-2 rounded-full font-medium text-base w-full sm:w-auto">
              Explore Jobs
            </button>
          </Link>
          <Link to="/cpa-cma-career-success-stories-india">
            <button className="border border-[#1772EA] text-[#1772EA] px-7 md:px-10 py-2 rounded-full font-semibold text-base w-full sm:w-auto">
              Alumni Speak
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   SECTION: HomeUsPathway
   ================================================================ */
function HomeUsPathway() {
  return (
    <section className="bg-white py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-4 md:mb-6">
          <h2 className="text-xl md:text-[32px] font-semibold tracking-[-1.76px] text-[#061A2F] leading-[1.1] md:leading-[1.1]">
            U.S.
            <span className="visit_txt pr-1  italic"> Pathway</span>
          </h2>
          <h2 className="text-sm md:text-lg font-medium bg-gradient-to-r from-[#39f] to-[#061a2f] bg-clip-text text-transparent inline-block pt-1">
            Your Pathway to Work in the United States
          </h2>
        </header>

        <div className="flex justify-center text-center">
          <p className="flex items-center gap-2 bg-[#FFBA08] rounded-full px-4 py-1 md:px-2 md:py-0">
            <span className="text-black text-[11px] md:text-base font-medium md:font-normal">
              Every strong accounting career begins with a trusted
              qualification.
            </span>
          </p>
        </div>

        {/* Content with Icon */}
        <div
          className="flex flex-row items-center justify-center gap-2 md:gap-4 mb-4 md:mb-10 md:mt-8 mt-6"
          style={{
            borderRadius: "16px",
            background:
              "linear-gradient(104deg, rgba(255, 255, 255, 0) 2.45%, rgba(255, 184, 1, 0.1) 99.08%)",
            backdropFilter: "blur(3px)",
          }}
        >
          {/* Icon */}
          <div className="w-16 h-16 md:w-24 md:h-24 relative flex-shrink-0">
            <img
              src="https://ik.imagekit.io/mileseducation/miles_website/home/new/runway.webp"
              alt="Airplane Icon"
              width={64}
              height={64}
              className="absolute inset-0 w-full h-full object-contain"
              loading="lazy"
            />
          </div>

          {/* Text Content */}
          <div className="text-left py-2 flex-1">
            <p className="text-[11px] md:text-xl text-black leading-[1.2] md:leading-[1.2]">
              Miles enables accountants to{" "}
              <span className="text-[#39f] font-semibold">
                move from India to U.S. public accounting
              </span>{" "}
              roles through structured education, STEM programs, and employer
              partnerships.
            </p>
          </div>
        </div>

        {/* The Three Pillars - Desktop */}
        <div className="mb-12 md:mb-16 relative md:block hidden">
          <h2 className="text-2xl md:text-2xl lg:text-[26px] font-semibold text-[#061A2F] text-center mb-0 md:mb-0">
            The Three Pillars
          </h2>

          <div className="flex flex-row md:flex-row justify-center gap-0 md:gap-0 relative px-4 md:px-16">
            {/* Background Image */}
            <div
              className="absolute h-full w-[416px] md:h-full md:w-[964px]
            md:left-30 md:bottom-10 top-0 flex justify-center items-center z-0"
            >
              <img
                src="https://ik.imagekit.io/mileseducation/miles_website/home/new/Union-bg.webp"
                alt="Three Pillars Background"
                className="rounded-2xl hidden  md:block"
                height={400}
                width={964}
                loading="lazy"
              />
            </div>
            {/* Pillar 1 */}
            <div className=" flex flex-row p-6 md:p-8 text-left gap-2 relative z-10">
              <div className="text-2xl md:text-[40px] font-bold bg-[linear-gradient(146deg,#39F_14.91%,#FFBA08_83.78%)] bg-clip-text text-transparent">
                1.
              </div>
              <h3 className="text-xs md:text-base md:leading-[1.2] font-normal text-black">
                STEM-
                <br className="md:hidden block" /> designated
                <br className="md:hidden block" />
                <br className="md:block hidden" /> U.S. accounting
                <br className="md:hidden block" /> programs
              </h3>
            </div>

            {/* Pillar 2 */}
            <div className=" flex flex-row p-6 md:p-8 text-left gap-2 relative z-10">
              <div className="text-2xl md:text-[40px] font-bold bg-[linear-gradient(146deg,#39F_14.91%,#FFBA08_83.78%)] bg-clip-text text-transparent">
                2.
              </div>
              <h3 className="text-xs md:text-base md:leading-[1.2] font-normal text-black">
                F-1 Visa →<br className="md:hidden block" />
                <br className="md:block hidden" /> OPT → Career
                <br className="md:hidden block" /> pathway
              </h3>
            </div>

            <div className=" flex flex-row p-6 md:p-8 text-left gap-2 relative z-10">
              <div className="text-2xl md:text-[40px] font-bold bg-[linear-gradient(146deg,#39F_14.91%,#FFBA08_83.78%)] bg-clip-text text-transparent">
                3.
              </div>
              <h3 className="text-xs md:text-base md:leading-[1.2] font-normal text-black">
                Designed for
                <br className="md:hidden block" /> mid-tier
                <br className="md:block hidden" /> and{" "}
                <br className="md:hidden block" />
                Top-100 CPA
                <br className="md:hidden block" /> firms
              </h3>
            </div>
          </div>
        </div>

        {/* The Three Pillars - Mobile */}
        <div className="mb-12 md:mb-16 relative md:hidden block">
          <h2 className="text-2xl md:text-2xl lg:text-[26px] font-semibold text-[#061A2F] text-center">
            The Three Pillars
          </h2>

          <div className="flex flex-col relative pb-20">
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full z-0">
              <img
                src="https://ik.imagekit.io/mileseducation/miles_website/home/new/Union-bg-mob.webp"
                alt="Three Pillars Background"
                height={400}
                width={800}
                className="object-cover"
                loading="lazy"
              />
            </div>

            {/* Pillar 1 - Top position */}
            <div className="flex flex-row text-left gap-2 absolute z-10 self-start pt-4 pl-2">
              <div className="text-2xl font-bold bg-[linear-gradient(146deg,#39F_14.91%,#FFBA08_83.78%)] bg-clip-text text-transparent">
                1.
              </div>
              <h3 className="text-xs font-normal text-black leading-tight">
                STEM-
                <br />
                designated
                <br />
                U.S. accounting
                <br />
                programs
              </h3>
            </div>

            {/* Pillar 2 - Middle-bottom position */}
            <div className="flex flex-row text-left gap-2 absolute z-10 self-center pt-8">
              <div className="text-2xl font-bold bg-[linear-gradient(146deg,#39F_14.91%,#FFBA08_83.78%)] bg-clip-text text-transparent">
                2.
              </div>
              <h3 className="text-xs font-normal text-black leading-tight">
                F-1 Visa →<br />
                OPT → Career
                <br />
                pathway
              </h3>
            </div>

            {/* Pillar 3 - Top-right position */}
            <div className="flex flex-row text-left gap-2 absolute z-10 self-end pt-2 pr-4">
              <div className="text-2xl font-bold bg-[linear-gradient(146deg,#39F_14.91%,#FFBA08_83.78%)] bg-clip-text text-transparent">
                3.
              </div>
              <h3 className="text-xs font-normal text-black leading-tight">
                Designed for
                <br />
                mid-tier and
                <br />
                Top-100 CPA
                <br />
                firms
              </h3>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center md:mb-0 mb-4">
          <Link to="/us-jobs-for-accountants">
            <button className="bg-[#1772EA] text-white px-12 py-2 rounded-full font-medium transition-colors duration-200 w-full sm:w-auto">
              Explore Miles U.S. Pathway
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   SECTION: UniversityIntegration
   ================================================================ */
function UniversityIntegration() {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* CONTENT */}
      <div className="relative z-20 mx-auto max-w-7xl px-4 pt-0 md:pt-0 pb-14 md:pb-24">
        {/* Heading */}
        <h2 className="text-center text-[20px] lg:text-[32px] font-semibold text-[#061A2F] leading-[1.1]">
          University{" "}
          <span className="italic bg-[linear-gradient(85deg,#3399FF_76.09%,#FFB801_93.37%)] bg-clip-text text-transparent pr-2 leading-[1.1]">
            Integrations
          </span>
        </h2>

        {/* Subheading */}
        <p className="text-center font-medium text-sm md:text-lg bg-gradient-to-r from-[#3399ff] from-[0.07%] to-[#061A2F] to-[62.39%] bg-clip-text text-transparent md:leading-8 leading-4 mt-1">
          Integrated Accounting Programs at Top Indian
          <br className="md:hidden block" /> Universities
        </p>

        <p className="text-[#061A2F] md:text-lg text-[12px] text-center md:mt-6 mt-5 md:leading-[1.07] leading-[1.07]">
          Miles partners with leading Indian universities to embed CPA, CMA, and
          AI-ready accounting
          <br className="md:block hidden" /> into undergraduate and
          <br className="md:hidden block" /> postgraduate programs.
        </p>

        {/* CONTENT */}
        <div className="relative mx-auto max-w-7xl md:pt-12 md:pb-16 pt-7 pb-[6rem] md:px-5">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-y-8 md:gap-y-0 gap-x-6 md:gap-x-8 place-items-center">
            {universityLogos.map((logo, index) => (
              <div
                key={index}
                className="
        flex items-center justify-center
        h-[70px] md:h-[90px]
        w-full
      "
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  width={300}
                  height={150}
                  className="
          object-contain
          max-h-[85px] md:max-h-[90px]
          max-w-[110px] md:max-w-[160px]
        "
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* BACKGROUND IMAGE */}
      <div
        className="
          absolute inset-x-0 bottom-0
          h-[580px] md:h-[380px]
          bg-[url('https://ik.imagekit.io/mileseducation/miles_website/home_new/beyond_accounting_mob_bg.webp')]
          md:bg-[url('https://ik.imagekit.io/mileseducation/miles_website/home_new/beyond_accounting_desk_bg.webp')]
          bg-no-repeat bg-bottom bg-cover bg-[#061a2e]
        "
      />
    </section>
  );
}

/* ================================================================
   SECTION: UsEcosystem
   ================================================================ */
function UsEcosystem() {
  return (
    <div className="w-full bg-[#061A2F] md:pb-[60px] md:pt-0 pb-8 pt-3">
      <div className="main_container mx-auto">
        <h2 className="text-[20px] lg:text-[32px] font-semibold text-center text-[#fff] leading-[1.1]">
          U.S. <span className="visit_txt pr-1 italic">Ecosystem</span>
        </h2>

        <p className="font-medium text-sm md:text-lg text-center bg-gradient-to-r from-[#3399ff] from-[0.07%] to-white to-[62.39%] bg-clip-text text-transparent md:leading-8 leading-4 mt-1">
          The Miles Accounting Ecosystem in the United States
        </p>

        <p className="text-white md:text-base text-xs md:mt-6 mt-4 text-center md:leading-8 leading-4">
          Miles does not just educate accountants.
          <br className="md:hidden block" /> We build talent infrastructure for
          the accounting profession.
        </p>

        <div className="mx-auto max-w-7xl mt-6">
          <div className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-6 md:w-[930px] mx-auto">
            {/* CARD 1 */}
            <div className="flex flex-col rounded-2xl bg-[linear-gradient(104deg,rgba(255,255,255,0)_2.45%,rgba(255,184,1,0.1)_99.08%)] backdrop-blur-[3px] overflow-hidden">
              {/* CONTENT */}
              <div className="md:px-3 px-0 py-2">
                <h3 className="text-[#3399FF] text-xs md:text-xl font-bold md:mb-5 mb-3 text-center md:leading-[1.07] leading-[1.07]">
                  Miles Talent Hub | Accounting
                </h3>

                <ul className="space-y-2 md:space-y-3 text-[12px] md:text-base text-white md:pb-3 md:leading-[1.07] leading-[1.25]">
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>
                      STEM-ready accountants
                      <br className="md:hidden block" /> in the U.S.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>
                      BOT and GCC setups for
                      <br className="md:hidden block" /> public accounting firms
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>
                      Scalable offshore and
                      <br className="md:hidden block" /> hybrid delivery models
                    </span>
                  </li>
                </ul>
              </div>

              {/* BUTTON */}
              <a
                href="https://milestalenthub.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  mt-2 md:mt-auto
                  md:w-full
                  rounded-none
                  rounded-b-[12px]
                  md:rounded-b-[24px]
                  bg-[#2A85FF]
                  py-[8px] md:py-2
                  text-center
                  text-[12px] md:text-base
                  font-bold
                  text-white
                  md:leading-[18.667px]
                "
              >
                Explore Miles Talent Hub
              </a>
            </div>

            {/* CARD 2 */}
            <div className="flex flex-col rounded-2xl bg-[linear-gradient(104deg,rgba(255,255,255,0)_2.45%,rgba(255,184,1,0.1)_99.08%)] backdrop-blur-[3px] overflow-hidden">
              {/* CONTENT */}
              <div className="md:px-3 px-0 py-2">
                <h3 className="text-[#3399FF] text-xs md:text-xl font-bold md:mb-5 mb-3 text-center md:leading-[1.07] leading-[1.07]">
                  Miles Masterclass
                </h3>

                <ul className="space-y-2 md:space-y-3 text-[12px] md:text-base text-white md:pb-3 md:leading-[1.07] leading-[1.25]">
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>CPE for CPAs and CMAs</span>
                  </li>
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>
                      AI in Accounting, Analytics,
                      <br className="md:hidden block" /> Automation, and
                      <br className="md:hidden block" /> Leadership
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>
                      Hollywood-style, NASBA-
                      <br className="md:hidden block" />
                      aligned learning
                    </span>
                  </li>
                </ul>
              </div>

              {/* BUTTON */}
              <a
                href="https://www.milesmasterclass.com/accounting/home"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  mt-2 md:mt-auto
                  md:w-full
                  rounded-none
                  rounded-b-[12px]
                  md:rounded-b-[24px]
                  bg-[#2A85FF]
                  py-[8px] md:py-2
                  text-center
                  text-[12px] md:text-base
                  font-bold
                  text-white
                  md:leading-[18.667px]
                "
              >
                Explore Miles Masterclass
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ================================================================
   SECTION: BeyondAccounting
   ================================================================ */
function BeyondAccounting() {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* CONTENT */}
      <div className="relative z-20 mx-auto max-w-7xl px-4 pt-8 md:pt-[60px] pb-[7rem] md:pb-[120px]">
        {/* Heading */}
        <h2 className="text-center text-[20px] lg:text-[32px] font-semibold text-[#061A2F] leading-[1.1]">
          Impact Beyond{" "}
          <span className="italic bg-[linear-gradient(85deg,#3399FF_76.09%,#FFB801_93.37%)] bg-clip-text text-transparent pr-2">
            Accounting
          </span>
        </h2>

        {/* Subheading */}
        <p className="md:mt-2 mt-1 text-center text-sm md:text-lg bg-gradient-to-r from-[#3399ff] from-[0.07%] to-[#061A2F] to-[62.39%] bg-clip-text text-transparent font-medium md:leading-8 leading-4">
          The ecosystem thinking that transformed accounting
          <br className="md:hidden block" /> now powers healthcare, AI,
          education, and student
          <br className="md:hidden block" /> life.
        </p>

        {/* CARDS */}
        <div className="mt-8 md:mt-9 grid grid-cols-2 gap-4 lg:grid-cols-5 md:px-20 md:mb-14">
          {beyondItems.map((item, index) => {
            const isFifth = index === 4;

            return (
              <div
                key={index}
                className={`
                  rounded-[24px] bg-white
                  shadow-[0_1.799px_3.431px_rgba(0,0,0,0.01),0_4.323px_8.246px_rgba(0,0,0,0.02),0_8.139px_15.527px_rgba(0,0,0,0.02),0_14.519px_27.697px_rgba(0,0,0,0.02),0_27.155px_51.804px_rgba(0,0,0,0.03),0_65px_124px_rgba(0,0,0,0.04)]
                  text-center
                  p-1 md:p-3
                  ${isFifth ? "col-span-2 lg:col-span-1" : ""}
                  ${isFifth ? "flex items-center md:block px-4 py-1 md:px-3 md:py-3" : ""}
                `}
              >
                <span className="text-[38px] font-bold bg-[linear-gradient(146deg,#3399FF_14.91%,#FFBA08_83.78%)] bg-clip-text text-transparent shrink-0 leading-normal">
                  {item.id}
                </span>

                <div
                  className={`${isFifth ? "ml-2 flex flex-col justify-center" : ""}`}
                >
                  {/* FIFTH CARD TEXT HANDLING */}
                  {isFifth ? (
                    <>
                      {/* Mobile: 2 lines */}
                      <p className="md:hidden text-sm text-[#1E1E1E] text-left leading-[1.3]">
                        <span className="block">
                          Mojo Campus | Student living and
                        </span>
                        <span className="block">experiences</span>
                      </p>

                      {/* Desktop: original 3 lines */}
                      <p className="hidden md:block text-sm text-[#1E1E1E] text-center leading-[1.3]">
                        {item.lines.map((line, i) => (
                          <span key={i} className="block">
                            {line}
                          </span>
                        ))}
                      </p>
                    </>
                  ) : (
                    <p className="text-sm text-[#1E1E1E] leading-[1.3]">
                      {item.lines.map((line, i) => (
                        <span key={i} className="block">
                          {line}
                        </span>
                      ))}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* BACKGROUND IMAGE */}
      <div
        className="
          absolute inset-x-0 bottom-0
          h-[580px] md:h-[380px]
          bg-[url('https://ik.imagekit.io/mileseducation/miles_website/home_new/beyond_accounting_mob_bg.webp')]
          md:bg-[url('https://ik.imagekit.io/mileseducation/miles_website/home_new/beyond_accounting_desk_bg.webp')]
          bg-no-repeat bg-bottom bg-cover bg-[#061a2e]
        "
      />
    </section>
  );
}

/* ================================================================
   SECTION: MilesFoundation
   ================================================================ */
function MilesFoundationSection() {
  return (
    <div className="w-full bg-[#061A2F] md:pt-0 md:pb-[80px] pb-8 pt-6">
      <div className="main_container mx-auto">
        <h2 className="text-[20px] lg:text-[32px] font-semibold text-center text-[#fff] leading-[1.1] md:leading-[1.1]">
          Miles <span className="visit_txt pr-1  italic">Foundation</span>
        </h2>
        <p className="font-medium text-sm md:text-lg text-center bg-gradient-to-r from-[#3399ff] from-[0.07%] to-white to-[62.39%] bg-clip-text text-transparent mt-1 md:leading-8 leading-4">
          Building Futures. Giving Back.
        </p>
        <p className="text-white md:text-base text-xs md:mt-6 mt-4 text-center">
          Through the Miles Foundation, we channel education, skills,
          <br className="md:hidden block" /> and opportunity toward
          nation-building and social impact.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-6 md:px-10">
          {foundationItems.map((item, index) => (
            <div
              key={index}
              className="
        flex items-center gap-4
        md:px-4 px-3 md:py-0 py-0
        rounded-[16px]
        bg-[linear-gradient(104deg,rgba(255,255,255,0)_2.45%,rgba(255,184,1,0.10)_99.08%)]
        backdrop-blur-[3px]
      "
            >
              {/* Icon */}
              <div className="flex-shrink-0 md:w-auto w-[88px]">
                <img
                  src={item.icon}
                  alt={item.title}
                  width={item.img.desktop.w}
                  height={item.img.desktop.h}
                  className="object-contain"
                  loading="lazy"
                />
              </div>

              {/* Text */}
              <p className="font-medium ext-base text-[#FFBA08] drop-shadow-[0_0_6px_rgba(255,186,8,0.7)] md:drop-shadow-none md:ml-10 ml-7 md:leading-6 leading-5 md:py-0 py-1">
                {item.title}
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center md:mb-0 mt-8">
          <Link to="/miles-foundation">
            <button className="bg-[#1772EA] text-white px-12 py-2 rounded-full font-medium transition-colors duration-200 w-full sm:w-auto">
               Learn About Miles Foundation
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ================================================================
   SECTION: MilesEcosystem
   ================================================================ */
function MilesEcosystem() {
  return (
    <div className="w-full bg-white">
      <div className="main_container mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 md:gap-10">
          <div className="flex flex-col justify-center gap-3 lg:gap-6 py-8 lg:py-14">
            <h2 className="text-2xl md:text-[60px] font-bold text-left text-[#FFBA08] leading-[1.16]">
              Get into
              <br className="md:block hidden" /> Miles
              <br /> Ecosystem
            </h2>
            <p
              className="font-medium text-xl md:text-2xl text-left max-w-[560px] inline-block
bg-[linear-gradient(90deg,#3399FF_0.07%,#061A2F_62.39%)] bg-clip-text text-transparent leading-normal"
            >
              Building Futures.
              <br className="md:hidden block" /> Giving Back.
            </p>
          </div>
          <div className="flex justify-center absolute md:relative md:left-[-40px] right-3">
            <img
              src="https://ik.imagekit.io/mileseducation/miles_website/home_new/girl_at_right_point.webp"
              alt="Join Us"
              width={300}
              height={420}
              className="w-[168px] md:w-[317px] h-auto object-contain"
              loading="lazy"
            />
          </div>
          <div className="col-span-2 lg:col-span-1 flex flex-col items-center justify-center gap-6 lg:py-16 pb-8">
            <div className="flex lg:justify-end w-full">
              <div className="relative w-full lg:max-w-[400px] p-4 rounded-2xl border border-white bg-white/10 shadow-[0_0_14px_rgba(4,84,175,0.29)] backdrop-blur-[28px]">
                <h3
                  className="text-lg md:text-xl font-semibold text-black text-center mb-4"
                >
                  Connect with Us!
                </h3>
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full px-4 py-2.5 rounded-lg bg-white text-gray-900 text-sm placeholder:text-gray-400 outline-none border border-gray-200"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full px-4 py-2.5 rounded-lg bg-white text-gray-900 text-sm placeholder:text-gray-400 outline-none border border-gray-200"
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full px-4 py-2.5 rounded-lg bg-white text-gray-900 text-sm placeholder:text-gray-400 outline-none border border-gray-200"
                    />
                    <select className="w-full px-4 py-2.5 rounded-lg bg-white text-gray-900 text-sm outline-none border border-gray-200">
                      <option>Select Program</option>
                      <option>US CPA</option>
                      <option>US CMA</option>
                      <option>CAIRA</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#FFBA08] text-black font-bold text-sm py-3 rounded-lg hover:bg-yellow-400 transition"
                  >
                    Register Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ================================================================
   PAGE: Home
   ================================================================ */
export default function Home() {
  return (
    <main className="bg-white w-full">
      <Nav activePage="/" />

      <HomeBannerNew />

      <HomeCaira />

      <HomeFoundation />

      <HomeIndiaCareers />

      <HomeUsPathway />

      <UniversityIntegration />

      <UsEcosystem />

      <BeyondAccounting />

      <MilesFoundationSection />

      <MilesEcosystem />

      <Footer />
    </main>
  );
}
