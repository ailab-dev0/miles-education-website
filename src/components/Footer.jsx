import React, { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";

const socialLinks = {
  linkedin: "https://www.linkedin.com/company/mileseducation/",
  youtube: "https://www.youtube.com/@MilesEducation",
  instagram: "https://www.instagram.com/miles.accounting/",
  twitter: "https://x.com/mileseducation",
};

const scrollTop = () =>
  typeof window !== "undefined" &&
  window.scrollTo({ top: 0, behavior: "smooth" });

const programs = [
  { name: "CPA", path: "/cpa" },
  { name: "CMA", path: "/cma" },
  { name: "EA (Enrolled Agent)", path: "/ea" },
  { name: "CAIRA", path: "/caira" },
  { name: "US Pathway", path: "/us-pathway" },
];

const CPACityURLs = [
  { name: "Bangalore", path: "/cpa/best-cpa-course-in-bangalore" },
  { name: "Chennai", path: "/cpa/best-cpa-course-in-chennai" },
  { name: "Delhi", path: "/cpa/cpa-coaching-in-delhi" },
  { name: "Ahmedabad", path: "/cpa/best-cpa-course-in-ahmedabad" },
  {
    name: "Hyderabad",
    path: "/cpa/certified-public-accountant-course-in-hyderabad",
  },
  { name: "Mumbai", path: "/cpa/cpa-course-fees-in-mumbai" },
  { name: "Pune", path: "/cpa/cpa-course-fees-in-pune" },
  { name: "Kochi", path: "/cpa/cpa-course-in-kerala" },
  { name: "Kolkata", path: "/cpa/cpa-coaching-in-kolkata" },
];

const CMACityURLs = [
  { name: "Bangalore", path: "/cma/best-cma-course-in-bangalore" },
  { name: "Chennai", path: "/cma/best-cma-institute-in-chennai" },
  { name: "Delhi", path: "/cma/best-cma-coaching-in-delhi" },
  { name: "Ahmedabad", path: "/cma/best-cma-course-in-ahmedabad" },
  { name: "Hyderabad", path: "/cma/best-cma-coaching-in-hyderabad" },
  { name: "Mumbai", path: "/cma/best-cma-classes-in-mumbai" },
  { name: "Pune", path: "/cma/best-cma-classes-in-pune" },
  { name: "Kochi", path: "/cma/best-cma-usa-institute-in-kerala" },
  { name: "Kolkata", path: "/cma/cma-kolkata" },
];

function LocationLink({ loc }) {
  return (
    <Link to={loc.path} className="text-[#CACACA] hover:text-white text-sm">
      {loc.name}
    </Link>
  );
}

function Separator() {
  return <span className="text-[#666]">|</span>;
}

function SocialIcon({ href, alt, src }) {
  return (
    <a
      href={href}
      aria-label={alt}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[#3d3d3d] rounded-full p-3 inline-flex"
    >
      <img src={src} alt={alt} width={20} height={20} loading="lazy" />
    </a>
  );
}

function DownloadApp({ showQR = false }) {
  return (
    <div className="flex gap-4 justify-center md:justify-start">
      <div className="flex flex-row md:flex-col gap-3">
        <a
          href="https://apps.apple.com/us/app/miles-us-pathway/id6504799221"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#3D3D3D] p-2 flex rounded-lg gap-2 pr-4 md:pr-6"
        >
          <img
            src="https://ik.imagekit.io/mileseducation/miles_website/home/app-store.webp"
            alt="App Store"
            width={32}
            height={32}
            loading="lazy"
            className="shrink-0"
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
          className="bg-[#3D3D3D] p-2 flex rounded-lg gap-2 pr-4 md:pr-6"
        >
          <img
            src="https://ik.imagekit.io/mileseducation/miles_website/home/play-store.webp"
            alt="Play Store"
            width={32}
            height={32}
            loading="lazy"
            className="shrink-0"
          />
          <div>
            <p className="text-[10px] leading-3 text-white font-medium">
              GET IT ON
            </p>
            <p className="text-base text-white font-medium">Play Store</p>
          </div>
        </a>
      </div>
      {showQR && (
        <div className="text-center hidden md:block">
          <img
            src="https://ik.imagekit.io/mileseducation/miles_website/home/milesone_qr_code.webp"
            alt="QR Code"
            width={100}
            height={100}
            loading="lazy"
            className="min-w-[100px] min-h-[100px] inline-block"
          />
          <p className="pt-1 text-xs text-[#CACACA]">Scan to download</p>
        </div>
      )}
    </div>
  );
}

export default function Footer() {
  const { pathname } = useLocation();
  const isCMAPage = pathname?.includes("/cma");
  const locations = useMemo(
    () => (isCMAPage ? CMACityURLs : CPACityURLs),
    [isCMAPage]
  );

  return (
    <footer className="bg-[#0E0E0E] relative text-[#CACACA]">
      {/* Background mountains */}
      <img
        src="https://ik.imagekit.io/mileseducation/miles_website/home/footer/blogs_footer_mountain.webp?tr=w-780,h-500"
        alt="Footer mountain graphic"
        width={650}
        height={500}
        className="absolute bottom-0 left-0 md:block hidden pointer-events-none z-0 opacity-40"
        loading="lazy"
      />
      <img
        src="https://ik.imagekit.io/mileseducation/miles_website/home/footer/blogs_footer_mountain.webp?tr=w-440,h-260"
        alt="Footer mountain graphic"
        height={260}
        width={440}
        className="absolute bottom-[60px] left-0 md:hidden block pointer-events-none z-0 opacity-40"
        loading="lazy"
      />

      {/* Scroll to Top */}
      <div className="flex justify-end md:justify-center items-center gap-2 pt-6 px-4 md:pt-8 md:px-0 relative z-10">
        <button
          type="button"
          aria-label="Scroll to top"
          onClick={scrollTop}
          className="text-white bg-[#2A85FF] p-2 rounded-full cursor-pointer flex items-center justify-center w-10 h-10"
        >
          <svg
            className="w-4 h-4 md:w-6 md:h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
        <button
          className="hidden md:block text-base text-white font-medium px-6 py-2 bg-[#2A85FF] rounded-2xl rounded-bl cursor-pointer"
          onClick={scrollTop}
          style={{ minHeight: 40 }}
        >
          Scroll to Top
        </button>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden px-6 py-8 relative z-10">
        {/* Programs */}
        <div className="text-center mb-8">
          <h3 className="text-white text-lg font-semibold mb-4">
            Accounting Programs
          </h3>
          <div className="flex justify-center items-center gap-2 flex-wrap">
            {programs?.map((prog, index) => (
              <React.Fragment key={prog.name}>
                <Link
                  to={prog.path}
                  className="text-[#CACACA] hover:text-white text-sm"
                >
                  {prog.name}
                </Link>
                {index < programs.length - 1 && <Separator />}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Location */}
        <div className="text-center mb-8 border-t border-[#333] pt-8">
          <h3 className="text-white text-lg font-semibold mb-4">Location</h3>
          <div className="flex flex-wrap justify-center items-center gap-2">
            {locations?.map((loc, index) => (
              <React.Fragment key={loc.name}>
                <LocationLink loc={loc} />
                {index < locations.length - 1 && <Separator />}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Connect */}
        <div className="text-center mb-8 border-t border-[#333] pt-8">
          <h3 className="text-white text-lg font-semibold mb-4">
            Connect with us
          </h3>
          <div className="flex gap-6 justify-center">
            <SocialIcon
              href={socialLinks.linkedin}
              alt="LinkedIn"
              src="https://ik.imagekit.io/mileseducation/miles_website/home/social_icons/linkedin.webp"
            />
            <SocialIcon
              href={socialLinks.youtube}
              alt="YouTube"
              src="https://ik.imagekit.io/mileseducation/miles_website/home/social_icons/youtube.webp"
            />
            <SocialIcon
              href={socialLinks.instagram}
              alt="Instagram"
              src="https://ik.imagekit.io/mileseducation/miles_website/home/social_icons/Instagram.webp"
            />
            <SocialIcon
              href={socialLinks.twitter}
              alt="Twitter"
              src="https://ik.imagekit.io/mileseducation/miles_website/home/social_icons/twitter.webp"
            />
          </div>
        </div>

        {/* App Download */}
        <div className="text-center border-t border-[#333] pt-8">
          <h3 className="text-white text-lg font-semibold mb-2">
            Get Miles One App
          </h3>
          <p className="text-[#CACACA] text-sm mb-4">
            The #1 App for AI-Ready Accountants
          </p>
          <DownloadApp />
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block main_container mx-auto py-16 relative z-10">
        <div className="grid grid-cols-4 gap-8">
          {/* Programs Column */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-6">
              Accounting Programs
            </h3>
            <div className="flex flex-col gap-3">
              {programs?.map((prog) => (
                <Link
                  key={prog.name}
                  to={prog.path}
                  className="text-[#CACACA] hover:text-white"
                >
                  {prog.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Location Column */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-6">Location</h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <LocationLink loc={locations[0]} />
                <Separator />
                <LocationLink loc={locations[1]} />
              </div>
              <div className="flex items-center gap-2">
                <LocationLink loc={locations[2]} />
                <Separator />
                <LocationLink loc={locations[3]} />
              </div>
              <div className="flex items-center gap-2">
                <LocationLink loc={locations[4]} />
                <Separator />
                <LocationLink loc={locations[5]} />
              </div>
              <div className="flex items-center gap-2">
                <LocationLink loc={locations[6]} />
                <Separator />
                <LocationLink loc={locations[7]} />
                <Separator />
                <LocationLink loc={locations[8]} />
              </div>
            </div>
          </div>

          {/* Connect Column */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-6">
              Connect with us
            </h3>
            <div className="grid grid-cols-2 gap-4 w-fit">
              <SocialIcon
                href={socialLinks.linkedin}
                alt="LinkedIn"
                src="https://ik.imagekit.io/mileseducation/miles_website/home/social_icons/linkedin.webp"
              />
              <SocialIcon
                href={socialLinks.youtube}
                alt="YouTube"
                src="https://ik.imagekit.io/mileseducation/miles_website/home/social_icons/youtube.webp"
              />
              <SocialIcon
                href={socialLinks.instagram}
                alt="Instagram"
                src="https://ik.imagekit.io/mileseducation/miles_website/home/social_icons/Instagram.webp"
              />
              <SocialIcon
                href={socialLinks.twitter}
                alt="Twitter"
                src="https://ik.imagekit.io/mileseducation/miles_website/home/social_icons/twitter.webp"
              />
            </div>
          </div>

          {/* App Column */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-1">
              Get Miles One App
            </h3>
            <p className="text-[#CACACA] text-sm mb-4">
              The #1 App for AI-Ready Accountants
            </p>
            <DownloadApp showQR />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#061A2F] relative z-10">
        <div className="container mx-auto py-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-6">
            <Link
              to="/contact-us"
              className="text-[#CACACA] text-xs md:text-sm hover:text-white"
            >
              Contact Us
            </Link>
            <a
              href="https://mileseducation.zohorecruit.com/jobs/Careers"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#CACACA] text-xs md:text-sm hover:text-white"
            >
              Careers
            </a>
            <Link
              to="/privacy"
              className="text-[#CACACA] text-xs md:text-sm hover:text-white"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-and-conditions"
              className="text-[#CACACA] text-xs md:text-sm hover:text-white"
            >
              Terms of Service
            </Link>
          </div>
          <p className="text-[#CACACA] text-xs md:text-sm">
            &copy; 2026 Miles Education Private Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
