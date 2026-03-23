import { useState, useEffect, useCallback, useRef, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";

const LOGO_SRC =
  "https://ik.imagekit.io/mileseducation/miles_website/accounting/cpa/milesLogo.webp?tr=w-170,h-50";

function classNames(...xs) {
  return xs.filter(Boolean).join(" ");
}

const isExternal = (url) => /^https?:\/\//i.test(url);

const matchesPath = (itemUrl, pathname) => {
  if (!itemUrl || itemUrl === "") return false;
  if (itemUrl === "/") return pathname === "/";
  if (pathname === itemUrl) return true;
  if (pathname.startsWith(itemUrl + "/")) return true;
  return false;
};

// Desktop navigation data
const accountingFinancePrograms = [
  { title: "U.S. CPA", url: "/cpa" },
  { title: "U.S. CMA", url: "/cma" },
  { title: "U.S. EA (Enrolled Agent)", url: "/ea" },
  { title: "U.S. Pathway for Accountants", url: "/us-jobs-for-accountants" },
  { title: "AI in Accounting - CAIRA", url: "/caira" },
  { title: "Accounting Jobs", url: "/cpa-cma-job-opportunities-india" },
  { title: "Miles Alumni", url: "/cpa-cma-career-success-stories-india" },
  { title: "Blog", url: "/blog" },
];

const milesEcosystemItems = [
  {
    id: 1,
    title: "Miles Masterclass",
    url: "https://www.milesmasterclass.com/accounting/home",
    icon: "https://ik.imagekit.io/mileseducation/miles_website/home/ecosystem/masterclass-icon.png",
  },
  {
    id: 2,
    title: "Miles Talent Hub | Accounting",
    url: "https://www.milestalenthub.com/accounting",
    icon: "https://ik.imagekit.io/mileseducation/miles_website/home/ecosystem/talent-hub-icon.png",
  },
  {
    id: 3,
    title: "Miles Talent Hub | Nursing",
    url: "https://www.milestalenthub.com/nursing",
    icon: "https://ik.imagekit.io/mileseducation/miles_website/home/ecosystem/nursing-icon.png",
  },
  {
    id: 4,
    title: "Miles Campus",
    url: "#",
    icon: "https://ik.imagekit.io/mileseducation/miles_website/home/ecosystem/campus-icon.png",
  },
  {
    id: 5,
    title: "Miles Global Education",
    url: "/certifications",
    icon: "https://ik.imagekit.io/mileseducation/miles_website/home/ecosystem/global-edu-icon.png",
  },
  {
    id: 6,
    title: "Futurense Technologies",
    url: "https://futurense.com/",
    icon: "https://ik.imagekit.io/mileseducation/miles_website/home/ecosystem/futurense-icon.png",
  },
  {
    id: 7,
    title: "Mojo Campus",
    url: "#",
    icon: "https://ik.imagekit.io/mileseducation/miles_website/home/ecosystem/mojo-icon.png",
  },
  {
    id: 8,
    title: "Miles Foundation",
    url: "/miles-foundation",
    icon: "https://ik.imagekit.io/mileseducation/miles_website/home/ecosystem/foundation-icon.png",
  },
];

// Mobile menu data
const mobileMenuItems = [
  {
    title: "Accounting & Finance Programs",
    children: [
      { title: "U.S. CPA", url: "/cpa" },
      { title: "U.S. CMA", url: "/cma" },
      { title: "U.S. EA (Enrolled Agent)", url: "/ea" },
      { title: "U.S. Pathway for Accountants", url: "/us-jobs-for-accountants" },
      { title: "AI in Accounting - CAIRA", url: "/caira" },
      { title: "Accounting Jobs", url: "/cpa-cma-job-opportunities-india" },
      { title: "Miles Alumni", url: "/cpa-cma-career-success-stories-india" },
      { title: "Blog", url: "/blog" },
    ],
  },
  {
    title: "Miles Ecosystem",
    children: milesEcosystemItems.map((item) => ({
      title: item.title,
      url: item.url,
    })),
  },
];

// EventTicker banner
function EventTicker() {
  return (
    <>
      {/* mobile */}
      <div
        className="md:hidden block overflow-hidden"
        style={{ height: "24px", contain: "layout style paint" }}
      >
        <div className="rightTI w-full" style={{ height: "24px" }}>
          <a href="/accounting/events/webinar">
            <p
              className="text-[#FFF] font-normal animated_text_mob"
              style={{ lineHeight: "24px", height: "24px", overflow: "hidden" }}
            >
              <span className="font-bold">Become an AI-Ready CPA or CMA</span> |
              Free webinar with Varun Jain to know more about CAIRA + U.S.
              CPA/CMA + Big 4 &amp; U.S. Jobs <span className="px-1">|</span>
              <span style={{ fontWeight: 700, lineHeight: "20px" }}>
                Register Now
              </span>
            </p>
          </a>
        </div>
      </div>
      {/* desktop */}
      <div
        className="md:block hidden"
        style={{ minHeight: "24px", contain: "layout style paint" }}
      >
        <div className="rightTI w-full">
          <a href="/accounting/events/webinar">
            <p
              className="ticker-wrapper text-[#FFF] font-normal animated_text_mob"
              style={{ lineHeight: "20px", minHeight: "20px" }}
            >
              <span className="font-bold">Become an AI-Ready CPA or CMA</span> |
              Free webinar with Varun Jain to know more about CAIRA + U.S.
              CPA/CMA + Big 4 &amp; U.S. Jobs <span className="px-1">|</span>
              <span style={{ fontWeight: 700, lineHeight: "20px" }}>
                Register Now
              </span>
            </p>
          </a>
        </div>
      </div>
    </>
  );
}

// Accounting & Finance Programs Dropdown
function AccountingFinanceDropdown({ pathname }) {
  return (
    <div
      className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition
                 duration-150 ease-out bottom-0 h-full absolute left-1/2 -translate-x-1/2 top-full z-50"
    >
      <div className="rounded-lg mt-3 bg-[#292929] text-white shadow-2xl ring-1 ring-black/5 overflow-hidden min-w-[280px]">
        {accountingFinancePrograms?.map((item, i) => {
          const Comp = isExternal(item.url) ? "a" : Link;
          const linkProps = isExternal(item.url)
            ? { href: item.url, target: "_blank", rel: "noopener noreferrer" }
            : { to: item.url };
          return (
            <Comp
              key={i}
              {...linkProps}
              className={classNames(
                "flex items-center gap-3 whitespace-pre px-5 py-2 hover:bg-white/10 border-b border-white/10 last:border-0",
                i === 0 ? "pt-3" : "",
                i === accountingFinancePrograms.length - 1 ? "pb-4" : "",
                matchesPath(item.url, pathname) && "bg-white/10 font-semibold"
              )}
            >
              <span
                className={classNames(
                  "text-[14px] leading-6 font-normal",
                  matchesPath(item.url, pathname) &&
                    "bg-[linear-gradient(95deg,#f5b644_11.82%,#ffeed3_99.75%)] bg-clip-text text-transparent font-semibold"
                )}
              >
                {item.title}
              </span>
            </Comp>
          );
        })}
      </div>
    </div>
  );
}

// Miles Ecosystem Dropdown
function MilesEcosystemDropdown({ pathname }) {
  return (
    <div
      className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition
                 duration-150 ease-out bottom-0 h-full absolute left-1/2 -translate-x-1/2 top-full z-50"
    >
      <div className="rounded-[24px] mt-3 bg-white shadow-2xl overflow-hidden w-[835px] max-w-[95vw] p-4">
        {/* Header with gradient background and image */}
        <div className="relative px-8 py-6 overflow-hidden rounded-[8px]">
          <img
            src="https://ik.imagekit.io/mileseducation/miles_website/home_new/drodown_heading_bg.webp"
            alt="Miles Ecosystem Background"
            className="object-cover absolute inset-0 w-full h-full"
            style={{ objectPosition: "center" }}
          />
          <h3 className="relative z-10 text-[32px] font-bold text-white tracking-wide">
            MILES ECOSYSTEM
          </h3>
        </div>

        {/* Content area */}
        <div className="bg-white px-4 pt-6 pb-3">
          <div className="grid grid-cols-3 gap-x-8 gap-y-2">
            {milesEcosystemItems?.map((item) => {
              const hasValidUrl = item.url && item.url !== "#";
              const isActive = matchesPath(item.url, pathname);
              const content = (
                <>
                  <span className="bg-[linear-gradient(146deg,#3399FF_14.91%,#FFBA08_83.78%)] bg-clip-text text-transparent shrink-0 text-[24px] font-bold w-6">
                    {item.id}.
                  </span>
                  <span
                    className={classNames(
                      "text-[14px] font-normal transition-colors",
                      isActive
                        ? "bg-[linear-gradient(95deg,#f5b644_11.82%,#ffeed3_99.75%)] bg-clip-text text-transparent font-semibold"
                        : "text-black"
                    )}
                  >
                    {item.title}
                  </span>
                </>
              );

              if (hasValidUrl && isExternal(item.url)) {
                return (
                  <a
                    key={item.id}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 group/item"
                  >
                    {content}
                  </a>
                );
              }

              if (hasValidUrl) {
                return (
                  <Link
                    key={item.id}
                    to={item.url}
                    className="flex items-center gap-3 group/item"
                  >
                    {content}
                  </Link>
                );
              }

              return (
                <div key={item.id} className="flex items-center gap-3">
                  {content}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

// Mobile Accordion Item
function MobileAccordionItem({ item, pathname, depth = 0 }) {
  const isActive = matchesPath(item.url, pathname);
  const hasChildren = item.children && item.children.length > 0;
  const [open, setOpen] = useState(false);

  const padClass = depth === 0 ? "pl-3" : depth === 1 ? "pl-4" : "pl-8";

  return (
    <div className="border-b border-white/10 last:border-0">
      <div
        className={classNames(
          "flex items-center justify-between py-2 px-4 text-sm border-b border-white/10 last:border-0",
          padClass
        )}
      >
        {hasChildren ? (
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className={classNames(
              "flex-1 text-left focus:outline-none rounded transition-colors",
              isActive
                ? "bg-[linear-gradient(95deg,#f5b644_11.82%,#ffeed3_99.75%)] bg-clip-text text-transparent font-semibold"
                : "text-white"
            )}
            aria-expanded={open ? "true" : "false"}
          >
            {item.title}
          </button>
        ) : item.url ? (
          isExternal(item.url) ? (
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className={classNames(
                "flex-1 text-left focus:outline-none rounded transition-colors",
                isActive
                  ? "bg-[linear-gradient(95deg,#f5b644_11.82%,#ffeed3_99.75%)] bg-clip-text text-transparent font-semibold"
                  : "text-white"
              )}
            >
              {item.title}
            </a>
          ) : (
            <Link
              to={item.url}
              className={classNames(
                "flex-1 text-left focus:outline-none rounded transition-colors",
                isActive
                  ? "bg-[linear-gradient(95deg,#f5b644_11.82%,#ffeed3_99.75%)] bg-clip-text text-transparent font-semibold"
                  : "text-white"
              )}
            >
              {item.title}
            </Link>
          )
        ) : (
          <span className="flex-1 text-left text-white">{item.title}</span>
        )}
        {hasChildren && (
          <button
            aria-label={open ? "Collapse" : "Expand"}
            aria-expanded={open ? "true" : "false"}
            className={classNames(
              "p-1 w-6 flex justify-center transition-colors",
              isActive ? "text-[#f5b644]" : "text-white"
            )}
            onClick={() => setOpen(!open)}
            type="button"
          >
            <svg
              className={classNames("w-4 h-4 transition", open && "rotate-90")}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        )}
      </div>
      {hasChildren && (
        <div
          className={classNames(
            "overflow-hidden transition-[max-height] duration-300",
            open ? "max-h-[1000px]" : "max-h-0"
          )}
        >
          <div className="pb-2">
            {item.children.map((child, i) => (
              <div key={i} className="pl-3 border-b border-white/10 last:border-0">
                <MobileAccordionItem
                  item={child}
                  pathname={pathname}
                  depth={depth + 1}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Nav() {
  const { pathname } = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [pinned, setPinned] = useState(false);
  const [showDownloadModal, setShowDownloadModal] = useState(false);
  const headerRef = useRef(null);
  const spacerRef = useRef(null);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setShowMobileMenu(false);
  }, [pathname]);

  const openMobile = useCallback(() => {
    setShowMobileMenu(true);
    requestAnimationFrame(() => {
      setMobileOpen(true);
    });
  }, []);

  const closeMobile = useCallback(() => {
    setMobileOpen(false);
    setTimeout(() => {
      setShowMobileMenu(false);
    }, 300);
  }, []);

  const handleDownloadAppClick = useCallback(() => {
    setShowDownloadModal(true);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = "0px";
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [showMobileMenu]);

  // Escape key closes mobile menu
  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") closeMobile();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen, closeMobile]);

  // Intersection observer for sticky behavior
  useEffect(() => {
    let cancelled = false;
    const setup = () => {
      if (cancelled) return;
      const sentinel = document.getElementById("header-top-sentinel");
      if (!sentinel) return;
      const obs = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          setPinned(!entry.isIntersecting);
        },
        { rootMargin: "0px", threshold: 0 }
      );
      obs.observe(sentinel);
      return () => obs.disconnect();
    };
    let cleanup;
    if (typeof window.requestIdleCallback === "function") {
      const id = window.requestIdleCallback(() => {
        cleanup = setup();
      });
      return () => {
        cancelled = true;
        window.cancelIdleCallback?.(id);
        cleanup && cleanup();
      };
    } else {
      cleanup = setup();
      return () => {
        cancelled = true;
        cleanup && cleanup();
      };
    }
  }, []);

  // Spacer height
  useEffect(() => {
    if (pinned && headerRef.current && spacerRef.current) {
      spacerRef.current.style.height = headerRef.current.offsetHeight + "px";
    } else if (spacerRef.current) {
      spacerRef.current.style.height = "0px";
    }
  }, [pinned]);

  return (
    <>
      {/* EventTicker banner */}
      <div
        className="bg-[#061A2F] text-white text-xs md:text-sm overflow-hidden"
        style={{ minHeight: "24px" }}
      >
        <EventTicker />
      </div>

      <div id="header-top-sentinel" aria-hidden="true" className="h-0" />
      <header
        ref={headerRef}
        className={classNames(
          "z-[999] transition-shadow",
          pinned
            ? "fixed top-0 left-0 right-0 shadow-lg shadow-black/30"
            : "relative"
        )}
      >
        <div
          className={classNames(
            "text-white",
            pinned ? "bg-[#191919]/95 backdrop-blur" : "bg-[#191919]"
          )}
        >
          <div className="mx-auto main_container relative py-2 lg:py-0">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Link to="/" className="flex items-center gap-3">
                  <div
                    style={{
                      width: "120px",
                      height: "45px",
                      position: "relative",
                      contain: "layout style paint",
                    }}
                  >
                    <img
                      src={LOGO_SRC}
                      alt="Miles Education"
                      width={133}
                      height={50}
                      className="dark:invert duration-300 object-contain"
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
                </Link>
              </div>

              {/* Desktop nav */}
              <nav className="hidden lg:flex items-center gap-8 xl:gap-10 py-4">
                {/* Accounting & Finance Programs */}
                <div className="relative group">
                  <Link
                    to="/accounting"
                    className="inline-flex items-center gap-2 py-2 focus:outline-none rounded transition-colors group/btn"
                  >
                    <span
                      className={classNames(
                        "text-[15px]",
                        accountingFinancePrograms.some((item) =>
                          matchesPath(item.url, pathname || "/")
                        ) || pathname === "/accounting"
                          ? "bg-[linear-gradient(95deg,#f5b644_11.82%,#ffeed3_99.75%)] bg-clip-text text-transparent font-semibold"
                          : "text-white font-normal hover:text-white",
                        "group-focus/btn:bg-[linear-gradient(95deg,#f5b644_11.82%,#ffeed3_99.75%)] group-focus/btn:bg-clip-text group-focus/btn:text-transparent"
                      )}
                    >
                      Accounting &amp; Finance Programs
                    </span>
                    <svg
                      className={classNames(
                        "w-4 h-4",
                        accountingFinancePrograms.some((item) =>
                          matchesPath(item.url, pathname || "/")
                        ) || pathname === "/accounting"
                          ? "text-[#f5b644]"
                          : "text-white",
                        "group-focus/btn:text-[#f5b644]"
                      )}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </Link>
                  <AccountingFinanceDropdown pathname={pathname || "/"} />
                </div>

                {/* Miles Ecosystem */}
                <div className="relative group">
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 py-2 focus:outline-none rounded transition-colors group/btn"
                  >
                    <span
                      className={classNames(
                        "text-[15px]",
                        milesEcosystemItems.some((item) =>
                          matchesPath(item.url, pathname || "/")
                        )
                          ? "bg-[linear-gradient(95deg,#f5b644_11.82%,#ffeed3_99.75%)] bg-clip-text text-transparent font-semibold"
                          : "text-white font-normal hover:text-white",
                        "group-focus/btn:bg-[linear-gradient(95deg,#f5b644_11.82%,#ffeed3_99.75%)] group-focus/btn:bg-clip-text group-focus/btn:text-transparent"
                      )}
                    >
                      Miles Ecosystem
                    </span>
                    <svg
                      className={classNames(
                        "w-4 h-4",
                        milesEcosystemItems.some((item) =>
                          matchesPath(item.url, pathname || "/")
                        )
                          ? "text-[#f5b644]"
                          : "text-white",
                        "group-focus/btn:text-[#f5b644]"
                      )}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <MilesEcosystemDropdown pathname={pathname || "/"} />
                </div>
              </nav>

              {/* Desktop right-side buttons */}
              <div className="hidden lg:flex items-center gap-3">
                {/* Download App Button */}
                <button
                  type="button"
                  onClick={handleDownloadAppClick}
                  className="inline-flex gap-2 items-center justify-center rounded-[13px_13px_13px_0] px-4 py-2 border-2 border-[#3399FF] text-[#39f] text-[14px] font-bold min-w-[120px] h-[36px]"
                >
                  Download App
                </button>

                {/* Talk to an Expert Button */}
                <a
                  href="tel:+919513881313"
                  aria-label="Call us for more details"
                  className="bg-[#3399FF] text-white rounded-[13px_13px_13px_0] flex items-center justify-center font-bold text-base gap-2 px-2 py-[5px] pr-4 hover:brightness-95 transition-colors duration-200 h-[36px]"
                >
                  <img
                    src="https://ik.imagekit.io/mileseducation/miles_website/accounting/miles-education-cpa-fees-miles-education-cma/Call.webp"
                    alt="Call icon"
                    className="w-5 h-5"
                    width={40}
                    height={40}
                  />
                  <span className="flex flex-col items-start pt-2">
                    <span className="text-xs font-normal leading-[0.5]">
                      Talk to an Expert
                    </span>
                    <span className="text-lg font-bold">95138 81313</span>
                  </span>
                </a>
              </div>

              {/* Mobile buttons */}
              <div className="flex lg:hidden items-center gap-2">
                {/* Download App Button - Mobile (Tablet) */}
                <button
                  type="button"
                  onClick={handleDownloadAppClick}
                  className="hidden md:inline-flex gap-1 items-center rounded-[13px_13px_13px_0] px-2 py-1 bg-[#2F80ED] hover:bg-[#3274cf] transition text-white text-[13px] font-semibold shadow-md whitespace-nowrap"
                >
                  Download App
                </button>

                {/* Contact Us Button - Mobile (Tablet) */}
                <Link
                  to="/contact-us"
                  className="hidden md:inline-flex gap-1 items-center rounded-[13px_13px_13px_0] px-2 py-1 bg-[#2F80ED] hover:bg-[#3274cf] transition text-white text-[13px] font-semibold shadow-md whitespace-nowrap"
                >
                  Contact Us
                </Link>

                {/* Call Now - Mobile Small */}
                <a
                  href="tel:+919513881313"
                  className="inline-flex md:hidden gap-2 items-center rounded-[13px_13px_13px_0] px-2 py-1 bg-[#2F80ED] hover:bg-[#3274cf] transition text-white text-[13px] font-semibold shadow-md"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                  95138 81313
                </a>

                {/* Hamburger */}
                <button
                  className="lg:hidden p-2 rounded-lg hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40 transition-colors"
                  onClick={openMobile}
                  aria-label="Open menu"
                  aria-haspopup="dialog"
                  aria-controls="global-mobile-menu"
                  type="button"
                >
                  <svg className="w-[22px] h-[22px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile slide-out menu */}
        {showMobileMenu && (
          <div
            className="fixed inset-0 z-50 lg:hidden pointer-events-auto"
            role="dialog"
            aria-modal="true"
            id="global-mobile-menu"
          >
            <div
              onClick={closeMobile}
              className={classNames(
                "absolute inset-0 bg-black/50 transition-opacity duration-300 ease-out",
                mobileOpen ? "opacity-100" : "opacity-0"
              )}
            />
            <aside
              className={classNames(
                "absolute right-0 top-0 h-full w-[90%] max-w-[420px] bg-[#111] text-white shadow-2xl",
                "transition-all duration-300 outline-none transform",
                mobileOpen
                  ? "translate-x-0 scale-100"
                  : "translate-x-full scale-95"
              )}
              tabIndex={-1}
            >
              <div
                className={classNames(
                  "flex items-center justify-end px-4 h-16 border-b border-white/10 transition-opacity duration-300",
                  mobileOpen ? "opacity-100" : "opacity-0"
                )}
                style={{
                  transitionDelay: mobileOpen ? "100ms" : "0ms",
                }}
              >
                <button
                  aria-label="Close menu"
                  className="p-2 rounded-lg border border-white/10 hover:bg-white/10 bg-white/5 focus:outline-none focus:ring-2 focus:ring-white/40 transition-all duration-200"
                  onClick={closeMobile}
                  type="button"
                >
                  <svg className="w-[22px] h-[22px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <nav
                className={classNames(
                  "overflow-y-auto h-[calc(100%-4rem)] pb-10 transition-opacity duration-300",
                  mobileOpen ? "opacity-100" : "opacity-0"
                )}
                style={{
                  transitionDelay: mobileOpen ? "150ms" : "0ms",
                }}
              >
                {mobileMenuItems.map((node, i) => (
                  <div
                    key={i}
                    className={classNames(
                      "transition-all duration-300 ease-out",
                      mobileOpen
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 translate-x-4"
                    )}
                    style={{
                      transitionDelay: mobileOpen
                        ? `${200 + i * 50}ms`
                        : "0ms",
                    }}
                  >
                    <MobileAccordionItem
                      item={node}
                      pathname={pathname || "/"}
                      depth={0}
                    />
                  </div>
                ))}

                {/* Additional Menu Items */}
                <div className="border-b border-white/10 last:border-0">
                  {/* Download App */}
                  <div className="flex items-center justify-between py-2 px-4 text-sm border-b border-white/10 last:border-0 pl-3">
                    <button
                      type="button"
                      onClick={() => {
                        handleDownloadAppClick();
                        closeMobile();
                      }}
                      className="flex-1 text-left focus:outline-none rounded transition-colors text-white"
                    >
                      Download App
                    </button>
                  </div>
                  {/* Contact Us */}
                  <div className="flex items-center justify-between py-2 px-4 text-sm border-b border-white/10 last:border-0 pl-3">
                    <Link
                      to="/contact-us"
                      className="flex-1 text-left focus:outline-none rounded transition-colors text-white"
                      onClick={closeMobile}
                    >
                      Contact Us
                    </Link>
                  </div>
                  {/* Careers */}
                  <div className="flex items-center justify-between py-2 px-4 text-sm border-b border-white/10 last:border-0 pl-3">
                    <a
                      href="https://mileseducation.zohorecruit.com/jobs/Careers"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-left focus:outline-none rounded transition-colors text-white"
                      onClick={closeMobile}
                    >
                      Careers
                    </a>
                  </div>
                </div>
              </nav>
            </aside>
          </div>
        )}
      </header>
      <div ref={spacerRef} aria-hidden="true" />

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
              type="button"
              onClick={() => setShowDownloadModal(false)}
              className="text-white text-xl md:text-2xl absolute right-1 top-1 cursor-pointer"
            >
              &#10005;
            </button>
            <div className="text-center pt-4">
              <h3 className="text-white text-2xl font-semibold mb-2">
                Get Miles One App
              </h3>
              <p className="text-[#fff] text-sm mb-4">
                The #1 App for AI-Ready Accountants
              </p>

              {/* Download MilesOne App Card */}
              <div className="mt-4 bg-[linear-gradient(94deg,_#061A2F_0.32%,_#135295_99.92%)] rounded-xl p-3">
                <div className="flex gap-3 items-center">
                  <img
                    src={LOGO_SRC}
                    alt="Miles Logo"
                    width={24}
                    height={14}
                    className="cursor-pointer h-4"
                  />
                  <p className="text-base font-semibold text-white">
                    Download the MilesOne App now!
                  </p>
                </div>
                <div className="flex gap-3 mt-3">
                  <a
                    href="https://apps.apple.com/us/app/miles-us-pathway/id6504799221"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-1 py-2 justify-center rounded-[12px_12px_12px_0px] flex bg-white text-[#316BC9] font-semibold"
                  >
                    App Store
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.miles.one"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-1 py-2 justify-center rounded-[12px_12px_12px_0px] flex bg-white text-[#316BC9] font-semibold"
                  >
                    Play Store
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
