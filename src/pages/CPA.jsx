import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

/* ───────── data ───────── */

const testimonialData = [
  {
    name: "Ayushi Shah",
    location: "CPA | EY| Ahmedabad",
    personImg: "https://ik.imagekit.io/mileseducation/miles_website/accounting/cpa-visit-new/ayushi_shah.webp",
    description: "Choosing CPA was easy once I saw how fast the US market was growing. Miles made the journey smooth; I cleared all four sections in one go. The concise books, practice questions, and one-to-one sessions helped me stay on track.",
    compLogo: "https://ik.imagekit.io/mileseducation/miles_website/accounting/cpa-visit-new/ey.webp",
  },
  {
    name: "Shankar E",
    location: "CPA | KPMG | Bangalore",
    personImg: "https://ik.imagekit.io/mileseducation/miles_website/accounting/cpa-visit-new/shankar_e.webp",
    description: "I chose the CPA for its credibility and industry relevance, and Miles made the journey manageable. The books were concise, the teaching was engaging, and the learning plan kept me consistent.",
    compLogo: "https://ik.imagekit.io/mileseducation/miles_website/accounting/cpa-visit-new/kpmg.webp",
  },
  {
    name: "Aliza Aga",
    location: "CPA | EY | Bangalore",
    personImg: "https://ik.imagekit.io/mileseducation/miles_website/accounting/cpa-visit-new/aliza_aga.webp",
    description: "Miles has been my comfort place from start to finish. Varun's energetic videos kept the learning lively, never boring or tiring. CPA holds strong value on its own, and Miles only enhanced that for me.",
    compLogo: "https://ik.imagekit.io/mileseducation/miles_website/accounting/cpa-visit-new/ey.webp",
  },
  {
    name: "Aarthi Poovalingam",
    location: "CPA | KPMG | Chennai",
    personImg: "https://ik.imagekit.io/mileseducation/miles_website/accounting/cpa-visit-new/aarthi_poovalingam.webp",
    description: "CPA was a big win for me. Miles supported me through exam prep and licensing, and the material plus MCQs were enough. As the first graduate in my family, becoming a CPA made my parents truly proud.",
    compLogo: "https://ik.imagekit.io/mileseducation/miles_website/accounting/cpa-visit-new/kpmg.webp",
  },
  {
    name: "Ojas Vyas",
    location: "CPA | Deloitte | Ahmedabad",
    personImg: "https://ik.imagekit.io/mileseducation/miles_website/accounting/cpa-visit-new/ojas_vyas.webp",
    description: "Miles was the right choice for my CPA. The material, OTB, and Varun's teaching made preparation structured, and the support team guided me through every step, from evaluation to exams and placements. I'd recommend Miles without hesitation.",
    compLogo: "https://ik.imagekit.io/mileseducation/miles_website/accounting/cpa-visit-new/deloitte.webp",
  },
  {
    name: "Krishna Kumar Bhotika",
    location: "CPA | PWC | Mumbai",
    personImg: "https://ik.imagekit.io/mileseducation/miles_website/accounting/cpa-visit-new/krishna_kumar_bhotika.webp",
    description: "As a CA working with global audits at PwC, CPA gave me the technical edge I needed. Miles' structure helped me plan each exam confidently, and my teams, both onsite and in India, were thrilled when I cleared it.",
    compLogo: "https://ik.imagekit.io/mileseducation/miles_website/accounting/cpa-visit-new/pwc.webp",
  },
  {
    name: "Dipankar Mondal",
    location: "CPA | PwC | Kolkata",
    personImg: "https://ik.imagekit.io/mileseducation/miles_website/accounting/cpa-visit-new/dipankar_mondal.webp",
    description: "Working full-time at PwC while prepping for CPA wasn't easy, but Miles made it possible. The LMS and Varun Jain's lectures helped me score 85+ in REG, BEC, and AUD using only Miles content. CPA was quite the transformation. And for me",
    compLogo: "https://ik.imagekit.io/mileseducation/miles_website/accounting/cpa-visit-new/pwc.webp",
  },
  {
    name: "Rajesh Asopa",
    location: "CPA | Standard Chartered | Bangalore",
    personImg: "https://ik.imagekit.io/mileseducation/miles_website/accounting/cpa-visit-new/rajesh_asopa.webp",
    description: "After a 13-year break, I cleared all 4 CPA papers in 13 months. Miles gave me structure, support, and the confidence to transition from Big 4 statutory audit to leadership in internal audit. This certification changed my career.",
    compLogo: "https://ik.imagekit.io/mileseducation/miles_website/accounting/cpa-visit-new/standard_charted.webp",
  },
  {
    name: "Aditya Sethia",
    location: "CPA | Wells Fargo / Ex-EY | Bangalore",
    personImg: "https://ik.imagekit.io/mileseducation/miles_website/accounting/cpa-visit-new/aditya_sethia.webp",
    description: "After clearing my CPA with Miles, I went from Senior to Manager at EY. The team helped at every step from evaluation to license, and Varun Jain's lectures were the game-changer. Thanks to Miles for the Prep, it really accelerated my growth.",
    compLogo: "https://ik.imagekit.io/mileseducation/miles_website/accounting/cpa-visit-new/wells_fargo.webp",
  },
  {
    name: "Subhash Raj Kurup",
    location: "CPA | Standard Chartered | Bangalore",
    personImg: "https://ik.imagekit.io/mileseducation/miles_website/accounting/cpa-visit-new/subhash_raj_kurup.webp",
    description: "After 20 years in finance, I chose Miles for my CPA, and it was the right decision. The LMS is powerful, the support is incredible, and Varun's energy makes learning enjoyable. If you've got Miles, you don't need anything else.",
    compLogo: "https://ik.imagekit.io/mileseducation/miles_website/accounting/cpa-visit-new/standard_charted.webp",
  },
  {
    name: "Ankita Chitnis",
    location: "CPA | Deutsche Bank | Pune",
    personImg: "https://ik.imagekit.io/mileseducation/miles_website/accounting/cpa-visit-new/ankita_chitnis.webp",
    description: "TCPA was my long-term goal, & Miles made it possible while I worked full-time. I studied using recorded videos during cab rides & cleared my CPA while juggling work. When I finally passed, my mom said 'My daughter is now American!' ",
    compLogo: "https://ik.imagekit.io/mileseducation/miles_website/accounting/cpa-visit-new/deutsche_bank.webp",
  },
  {
    name: "Sumit Katyal",
    location: "CPA | HSBC | Delhi",
    personImg: "https://ik.imagekit.io/mileseducation/miles_website/accounting/cpa-visit-new/sumit_katyal.webp",
    description: "For me, Miles stood out for its transparency and trust. Even when teams changed, communication was clear and consistent. I'm still working on my license, and Miles is still there. I truly believe that in India CPAmatlabMiles.",
    compLogo: "https://ik.imagekit.io/mileseducation/miles_website/accounting/cpa-visit-new/hsbc.webp",
  },
  {
    name: "Vikram Jolly",
    location: "CPA | Deloitte | Delhi",
    personImg: "https://ik.imagekit.io/mileseducation/miles_website/accounting/cpa-visit-new/vikram_jolly.webp",
    description: "Thanks to Miles, I cleared my CPA exams in less than a year. The detailed classes and 2,000+ MCQs per subject made prep super efficient. I've already referred friends. It worked for me, and I know for sure that it'll work for them too.",
    compLogo: "https://ik.imagekit.io/mileseducation/miles_website/accounting/cpa-visit-new/deloitte.webp",
  },
];

const salaryCardsData = [
  {
    title: "Avg. Salary in India",
    amount: "\u20B920 lakhs+",
    subtitleDesktop: "Work at Big 4 & 220+ MNCs",
    code: "0TdxuPBNNa8",
    logoPanelDeskSrc: "https://ik.imagekit.io/mileseducation/miles_website/accounting/cpa-visit-new/big4_20lakhs.webp",
    logoPanelDeskAlt: "Deloitte, PwC, KPMG, EY",
    logoPanelMobSrc: "https://ik.imagekit.io/mileseducation/miles_website/accounting/cpa/big4_20lakhs_mob.webp",
    logoPanelMobAlt: "Deloitte, PwC, KPMG, EY (mobile)",
    partnerImage: "https://ik.imagekit.io/mileseducation/miles_website/accounting/cpa/Globalpartner1.png?tr=f-webp",
    partnerImageMobile: "https://ik.imagekit.io/mileseducation/miles_website/accounting/cpa/vd-1.webp",
  },
  {
    title: "Avg. Salary in USA",
    amount: "\u20B950 lakhs+",
    subtitleDesktop: "Work at 350+ CPA firms",
    code: "QqFAuZzvnDs",
    logoPanelDeskSrc: "https://ik.imagekit.io/mileseducation/miles_website/accounting/cpa-visit-new/big4_50lakhs.webp",
    logoPanelDeskAlt: "RSM, BDO Alliance USA, Allinial Global, CPAmerica",
    logoPanelMobSrc: "https://ik.imagekit.io/mileseducation/miles_website/accounting/cpa/big4_50lakhs_mob.webp",
    logoPanelMobAlt: "RSM, BDO Alliance USA, Allinial Global, CPAmerica (mobile)",
    partnerImage: "https://ik.imagekit.io/mileseducation/miles_website/accounting/cpa/Globalpartner2.png?tr=f-webp",
    partnerImageMobile: "https://ik.imagekit.io/mileseducation/miles_website/accounting/cpa/vd-2.webp",
  },
];

const pricingData = [
  { title: "CPA Study Materials\nPublished by McGraw Hill", oldPrice: "\u20B990,000", newPrice: "\u20B949,000" },
  { title: "CPA Eligibility, Evaluation\n& License Support Fees", oldPrice: "\u20B939,000", newPrice: "\u20B910,000" },
  { title: "Public Accounting\nTraining Program Fees", oldPrice: "\u20B999,000", newPrice: "\u20B940,000" },
];

const bannerContent = [
  { count: "70,000+", label: "Global Alumni" },
  { count: "100+", label: "University Partners" },
  { count: "600+", label: "Employer Collaborations" },
  { count: "1,000+", label: "Students placed in the U.S." },
];

const examVideos = [
  { src: "https://ik.imagekit.io/mileseducation/miles_website/accounting/cpa/AUD-new.png?tr=f-webp", code: "gjA7jbsuXxY" },
  { src: "https://ik.imagekit.io/mileseducation/miles_website/accounting/cpa/FAR-new.png?tr=f-webp", code: "17mbNFmgG4k" },
  { src: "https://ik.imagekit.io/mileseducation/miles_website/accounting/cpa/REG-new.png?tr=f-webp", code: "ZehDqp_tFSA" },
  { src: "https://ik.imagekit.io/mileseducation/miles_website/accounting/cpa/BAR-new.png?tr=f-webp", code: "AYRdXcD7-QI" },
];

const officeImages = [
  "https://ik.imagekit.io/mileseducation/miles_website/accounting/cpa/office1.png?tr=f-webp",
  "https://ik.imagekit.io/mileseducation/miles_website/accounting/cpa/office2.png?tr=f-webp",
  "https://ik.imagekit.io/mileseducation/miles_website/accounting/cpa/office3.png?tr=f-webp",
  "https://ik.imagekit.io/mileseducation/miles_website/accounting/cpa/office4.png?tr=f-webp",
  "https://ik.imagekit.io/mileseducation/miles_website/accounting/cpa/office5.png?tr=f-webp",
  "https://ik.imagekit.io/mileseducation/miles_website/accounting/cpa/office6.png?tr=f-webp",
];

const locations = [
  { name: "Bangalore", href: "/cpa/best-cpa-course-in-bangalore" },
  { name: "Hyderabad", href: "/contact-us" },
  { name: "Mumbai", href: "/contact-us" },
  { name: "Delhi", href: "/contact-us" },
  { name: "Pune", href: "/contact-us" },
  { name: "Ahmedabad", href: "/contact-us" },
  { name: "Ernakulam", href: "/contact-us" },
  { name: "Kolkata", href: "/contact-us" },
  { name: "Chennai", href: "/contact-us" },
];

const faqData = [
  { q: "1. What is the US CPA course?", a: 'The US CPA (Certified Public Accountant) is effectively the "Black Belt" of the accounting world. Think of it as the American equivalent of the Indian CA, but with a global edge. It is a premier credential that opens doors to high growth careers in Accounting, Auditing, Finance, and Taxation. Because it is globally recognized, it is the preferred qualification for Big 4 firms and MNCs both in India and the U.S.' },
  { q: "2. What is the full form of CPA?", a: "CPA stands for Certified Public Accountant. It is the gold standard in the accounting profession and is administered by the AICPA (American Institute of Certified Public Accountants). Just as doctors are licensed to practice medicine, CPAs are licensed to practice public accounting, making them trusted financial advisors worldwide." },
  { q: "3. Is the CPA USA in India valid for jobs?", a: 'Absolutely. In fact, it is one of the most in-demand credentials in the Indian corporate market today. Most Big 4 firms (Deloitte, EY, KPMG, PwC) and MNCs have established massive "Global Capability Centers" (GCCs) in India to service US clients. These firms actively hire US CPAs because they need professionals who understand US GAAP and US Taxation.' },
  { q: "4. Which is better, CA or CPA?", a: 'It\'s not about which is "better," but which fits your career goal: Choose CA if you want to sign audit reports for local Indian firms. It is a long journey (5+ years) with 3 levels and 16 exams. Choose a US CPA if you want a global career at Big 4 firms or MNCs. It is designed for working professionals, consists of only 4 exams, and can be completed in just 12 to 16 months. If you want high-paying global roles (starting \u20B910 LPA+ in India or $60,000+ in the US) without the long tenure of a CA, CPA is the smarter choice.' },
  { q: "5. Is CPA a good career option?", a: "Definitely. There is currently a massive shortage of accountants in the U.S., which has driven the demand for CPAs to an all-time high. A CPA credential commands higher salaries, faster promotions, and recession-proof career stability. Whether you want to work in India or move to the US, the CPA is your ticket to global mobility." },
  { q: "6. Is CPA harder than CA?", a: "Most candidates find the CPA course significantly more manageable than the CA. Volume: CPA has only 4 exams compared to the 16+ papers in CA. Structure: You can take one exam at a time. Success Rate: The global pass rate for CPA is around 50%, but Miles alumni have an 82% pass rate, whereas CA pass rates are typically in the single digits." },
  { q: "7. How many exams are there in the CPA course?", a: "There are only 4 exams in total. You can schedule them individually throughout the year. The structure includes three Core sections and one Discipline section: FAR: Financial Accounting & Reporting (The foundation), AUD: Auditing & Attestation, REG: Taxation & Regulation, Discipline (Choose 1): BAR (Business Analysis & Reporting), ISC (Information Systems & Control), or TCP (Tax Compliance & Planning)." },
  { q: "8. What is the duration of the CPA course?", a: "The course is designed for working professionals. If you dedicate about 15-20 hours a week to prep using the Miles LMS, you can typically complete all 4 exams in 12 to 16 months." },
  { q: "9. Who is eligible for the CPA exam?", a: "To be eligible for the CPA exam, U.S. State Boards generally require 120 credits (equivalent to 4 years of university education). To obtain the license after passing, you generally need 150 credits. If you have a B.Com + M.Com/MBA: You have 150 credits (90 + 60), making you eligible for both the exam and the license. If you are a CA/CS/CWA: You are treated as having a Master's equivalent, giving you 150 credits. If you are a B.Com graduate: You typically have 90 credits (3 years x 30 credits). You will need additional credits to reach the 120-credit mark." },
  { q: "10. I have a 3 year B.Com degree. Can I still do CPA?", a: "Yes, absolutely! While a standard B.Com gives you only 90 credits, Miles has solved this gap. We have partnered with Jain University to offer a Master's in Accounting & Finance (Bridge Program). This program allows you to earn the necessary credits to bridge the gap from 90 to 120 (for the exam) and eventually 150 (for the license)." },
  { q: "11. Do I have to finish the Bridge Program before I can take the CPA exam?", a: 'No, you don\'t have to wait! Under the "Pre-education Option," you can apply for the CPA exam immediately after enrolling in the Bridge Program. As soon as you receive your Master\'s admit card, you are eligible to schedule your CPA exams. This allows you to complete your Bridge Program and CPA exams simultaneously, saving you roughly 1-2 years of time.' },
  { q: '12. How are "Credits" calculated for Indian degrees?', a: "The general rule of thumb for U.S. equivalency is: 1 year of full-time university education = 30 Credits. B.Com (3 years) = 90 Credits. B.Tech/B.E. (4 years) = 120 Credits. M.Com/MBA (2 years) = 60 Credits. CA/CS/CWA (Professional Qualification) = Equivalent to a Master's (60 Credits)." },
  { q: "13. Can I do CPA if I am currently in the final year of my graduation?", a: "Yes! You can start your preparation with Miles while in your final year. By the time you graduate, you can enroll in the Bridge Program (if needed) or apply for the exams immediately if you meet the criteria." },
  { q: "14. Can I do the CPA course after B.Com?", a: "Yes! A B.Com degree typically gives you 90 credits, while the exam requires 120. Miles has solved this with a unique Bridge Program (Master's in Accounting with Jain University). This program allows you to earn the required credits and secure CPA exam eligibility immediately, so you don't have to wait to start your journey." },
  { q: "15. Is there negative marking in the exams?", a: "No! There is no negative marking in the CPA exams. You are encouraged to attempt every single question, including the Task Based Simulations (TBS)." },
  { q: "16. What is the passing score for CPA?", a: "You need a score of 75 out of 99 to pass each section. The exams are computer-graded and use a sophisticated scoring system that balances difficulty across questions." },
  { q: "17. What is NTS in the CPA exam?", a: 'NTS stands for Notice to Schedule. It is the official "hall ticket" issued by NASBA that allows you to book your exam slot at a Prometric center. You generally pay for one exam section at a time to receive your NTS for that specific section.' },
  { q: "18. Which CPA exam is the hardest?", a: "FAR (Financial Accounting & Reporting) is often considered the most voluminous. That is why Miles recommends taking FAR first. Once you clear FAR, you will have covered the foundational concepts and your confidence will skyrocket for the remaining three exams." },
  { q: "19. What is CAIRA?", a: "CAIRA stands for Certified AI-Ready Accountant. It is Miles' trademarked, NASBA-approved AI readiness credential built specifically to teach accountants how to use AI tools (like ChatGPT, Copilot, and Power BI) in real-world accounting, audit, and finance workflows. It is a futuristic credential designed to ensure accountants control AI, rather than be replaced by it." },
  { q: "20. Who is CAIRA designed for?", a: "Accountants, auditors, tax professionals, finance leaders, CAs, working professionals and experienced finance folks who want to upgrade to AI-first workflows. For freshers, CAIRA is powerful but recommended with a core qualification (CPA/CMA/CA) rather than as a standalone path." },
  { q: "21. Is CAIRA a professional qualification or a skill credential?", a: "CAIRA is a skill credential (AI & automation for accounting). It complements -- it does not replace -- licensed qualifications like CPA, CMA or CA. Think of CPA/CMA as the passport and CAIRA as the visa / power boost." },
  { q: "22. Is CAIRA recognised?", a: "Yes. CAIRA offers NASBA-approved CPE credits (Continuing Professional Education), and badges are Credly-verifiable for LinkedIn and employer verification." },
  { q: "23. How is the CAIRA program structured?", a: "CAIRA is split into 3 Levels: Level 1 -- AI Foundations for Accountants, Level 2 -- Applied AI across Accounting Functions, Level 3 -- AI Leadership & Strategy. Across the program you can earn 7 mini badges plus 3 Level master badges." },
  { q: "24. What is the total duration of CAIRA?", a: "The full program is a 9-month guided journey: each Level is ~10 weeks (approximately 3 months cumulatively when run in sequence), designed for ~5 hours/week of effort." },
  { q: '25. What is the "CAIRA + CPA" advantage?', a: 'This is the ultimate dual credential for the modern accountant. While the CPA makes you an expert in accounting concepts ("The Black Belt"), CAIRA (Certified AI-Ready Accountant) equips you with the tools to apply those concepts using AI. Miles is the only institute offering this powerful combination to ensure you are not just licensed, but future-proof.' },
  { q: "26. Will AI replace accountants?", a: "No, AI will not replace accountants, but accountants who use AI will replace those who don't. That's why we launched CAIRA to ensure our Miles alumni are the ones controlling the AI (using tools like Copilot, PowerBI and automation apps), not the ones being replaced by it." },
  { q: "27. Is CAIRA included in the Miles CPA fees?", a: "Yes! As a Miles CPA student, you get CAIRA Level 1 (AI Foundations) completely FREE. This includes hands-on training with Microsoft Copilot, ChatGPT, and Power BI specifically for accounting workflows. You only pay if you wish to upgrade to Level 2 and Level 3 for advanced leadership skills." },
  { q: "28. Why do Big 4 firms & MNCs value the CAIRA + CPA profile?", a: 'Big 4 firms and MNCs are aggressively adopting AI for audits, tax, and forecasting. A standard CPA knows what to check; a CAIRA + CPA knows how to automate the checking using AI agents and data analytics. This makes you instantly more valuable and "deployable" for high-tech accounting roles.' },
  { q: "29. Why are there so many accounting jobs in the U.S. right now?", a: "There is a massive accountant shortage in America. According to Deloitte and the Wall Street Journal, over 82% of recruiters are facing difficulties finding talent because fewer American students are graduating in accounting. This crisis has created a huge opportunity for Indian accountants (CPAs) to step in and fill the gap." },
  { q: '30. What is the "Miles US Pathway"?', a: 'The Miles US Pathway is a revolutionary program that allows Indian accountants to work in the U.S. the same way engineers do. We have partnered with top U.S. universities to convert their Master\'s in Accounting into STEM programs (by integrating Business Analytics). This STEM designation is the "magic key" that grants you a 3-year work permit (OPT) after graduation, ensuring you have ample time to work and earn in dollars.' },
  { q: "31. Can I really work in the USA with a CPA credential?", a: "Yes! Through the Miles U.S. Pathway, you don't just get a degree; you get a career launchpad. The Degree: STEM Master's in Accounting from a top US university. The Visa: F-1 Student Visa + 3 Years of OPT (Work Authorization). The Salary: Starting salaries for our alumni are $60,000+ (\u20B950 Lakhs+)." },
  { q: "32. Which universities can I apply to?", a: "Miles has exclusive partnerships with AACSB-accredited universities that offer scholarships and GMAT/GRE waivers for our candidates. Some of our key partners include: Rochester Institute of Technology (RIT), Michigan State University, Drexel University, Tulane University, University of California, Riverside ...and many more." },
  { q: "33. Does Miles help with US job placement?", a: 'Yes, we have a dedicated "Miles Talent Hub" in the US. We have built relationships with over 140+ CPA firms and alliances (like BDO Alliance, RSM Alliance, etc.) that actively recruit Miles alumni. We help you with resume prep, mock interviews, and connect you directly with firms that are hiring.' },
  { q: "34. What is the ROI (Return on Investment) for the US Pathway?", a: "The ROI is incredible. Investment: ~ $48,000 (approx. \u20B940 Lakhs), which can be largely financed via student loans. Returns: You earn $60,000+ per year. Over the 3-year work permit, you can earn $180,000+ (\u20B91.5 Crores+). Most alumni pay off their entire student loan within the first 12-18 months of working." },
  { q: "35. What are the CPA fees in India?", a: "CPA Study Materials (published by McGraw-Hill): Base \u20B990,000 / Discounted \u20B949,000. CPA Eligibility, Evaluation & License Support Fees: Base \u20B939,000 / Discounted \u20B910,000. Public Accounting Training Program Fees: Base \u20B999,000 / Discounted \u20B940,000. Additional: Foreign Academic Credential Evaluation ~$400 one time. CPA Exam Fee ~$873 per exam (includes Exam Application Fees ~$100, Exam Section Fees ~$263, and International Testing Fees $510)." },
  { q: "36. Can I enroll in the training program without buying the books?", a: "Yes, you can. The Miles offerings are independent. Self-study mode: You can procure just the CPA Study Materials. Upskilling Option: You can enroll in the Miles Public Accounting Training Program to achieve job-readiness (without procuring the books or support fees). However, for the full CPA license track, the comprehensive package is recommended." },
  { q: "37. Which is the best CPA coaching in India?", a: "Miles Education is widely recognized as the leader in CPA training. We hold over 80% market share, meaning 8 out of 10 CPAs in India are Miles alumni. We are not just a coaching center; we are an ecosystem with 70,000+ alumni and partnerships with 220+ MNCs." },
  { q: "38. Who is Varun Jain?", a: "Varun Jain (CPA, CMA) is the founder of Miles Education and arguably the world's favorite CPA instructor. His teaching style is legendary--he simplifies complex GAAP and Tax concepts using logic and high energy delivery, making accounting genuinely interesting (and dare we say, sexy!)." },
  { q: "39. Can I study via CPA online coaching?", a: "Yes, online coaching is the preferred mode for working professionals. The Miles LMS (Learning Management System) brings the classroom to you with high engagement videos, interactive eBooks, practice MCQs, and live webinars. You can study anytime, anywhere, on the Miles One App." },
  { q: "40. Does Miles offer face to face coaching?", a: "Yes! Unlike pure online players, Miles offers face to face workshops (specifically for FAR) on Sundays. These are held in 9 major cities across India to help you conquer the toughest section with direct mentor support." },
  { q: "41. Where are Miles Education centers located?", a: "Miles has a strong physical presence with offices and classroom centers in 9 major cities: Bangalore: Koramangala, Mumbai: Andheri East, Delhi: Saket, Hyderabad: Hitech City, Pune: Sangamvadi, Chennai: Tidel Park, Kochi: Banerji Road, Ahmedabad: Memnagar, Kolkata: Park Street." },
  { q: "42. What is the Miles One App?", a: "The Miles One App is your pocket study buddy. It allows you to watch Varun's videos, practice MCQs, and track your progress 24/7. It also connects you to the Miles community, masterclasses, and student support." },
  { q: "43. Does Miles provide placement assistance?", a: "Yes, we provide extensive placement assistance. In India: We connect you with the Big 4 (Deloitte, EY, KPMG, PwC) and top MNCs. In the US: Through the Miles US Pathway, we connect alumni with 140+ CPA firms in the US for recruitment." },
  { q: "44. What is the salary for a CPA in India for freshers?", a: "Freshers with a CPA qualification typically command a starting salary of \u20B910 Lakhs+ at Big 4 and MNCs in India. Experienced professionals can see salary hikes ranging from 40% to 600%." },
  { q: "45. Can I work in the USA with a CPA credential?", a: "Yes! Through the Miles U.S. Pathway, you can pursue a STEM designated Master's in Accounting in the U.S. This makes you eligible for a 3 year work permit (OPT), allowing you to earn in dollars (starting salary $60,000+ or \u20B950 Lakhs+)." },
  { q: "46. What is the Miles Referral Program?", a: "It's our way of rewarding you! You can earn significant rewards (up to \u20B91,00,000 in some campaigns) by referring friends to the Miles program via the Miles One App." },
  { q: "47. Do I need a passport for the CPA exam?", a: "Yes, a valid passport is mandatory to sit for the exam at any Prometric test center, whether in India or abroad." },
  { q: "48. Can I take the CPA exam from home?", a: "No, you must visit a secure Prometric test center. However, you do not need to travel to the U.S.; you can take the exam at centers in various Indian cities like Hyderabad, Bangalore, Mumbai, Delhi, etc." },
  { q: "49. Is an articleship required for CPA?", a: "No! You do not need an articleship to appear for the exams. For the license, you generally need 1 year of work experience, which you can gain after passing the exams. Miles has a team of licensed CPAs who can even help verify your experience." },
  { q: "50. Is math required to do the CPA course?", a: "You don't need advanced calculus! Basic arithmetic is enough. The exam tests your understanding of accounting concepts, laws, auditing standards, and business logic, not complex mathematics." },
  { q: "51. Can I pass the CPA without coaching?", a: 'It is very difficult. The U.S. regulatory environment (US GAAP, US Tax) is different from India\'s. Miles bridges that gap by teaching you the specific "American" logic and providing the exact roadmap you need to pass. Trying to navigate the eligibility, NTS, and curriculum alone can be overwhelming.' },
  { q: "52. How do I start my journey?", a: 'It\'s simple. Download the Miles One App or visit our website to schedule your "Eligibility Check." Our Gameplan team will create your personalized roadmap, from eligibility to license!' },
];

const instructors = [
  { instructorImageURL: "https://ik.imagekit.io/mileseducation/miles_website/accounting/cma-visit/inst-1.webp", instructorName: "Varun Jain", instructorProfession: "CPA, CMA", instructorURLKey: "17mbNFmgG4k" },
  { instructorImageURL: "https://ik.imagekit.io/mileseducation/miles_website/accounting/cma-visit/inst-2.webp", instructorName: "Simran Grover", instructorProfession: "CPA", instructorURLKey: "gjA7jbsuXxY" },
  { instructorImageURL: "https://ik.imagekit.io/mileseducation/miles_website/accounting/cma-visit/inst-3.webp", instructorName: "Bijesh Nair", instructorProfession: "CMA", instructorURLKey: "ZehDqp_tFSA" },
  { instructorImageURL: "https://ik.imagekit.io/mileseducation/miles_website/accounting/cma-visit/inst-4.webp", instructorName: "Kalyani Sinha", instructorProfession: "CPA, CMA", instructorURLKey: "AYRdXcD7-QI" },
  { instructorImageURL: "https://ik.imagekit.io/mileseducation/miles_website/accounting/cma-visit/inst-5.webp", instructorName: "Mohan Kumar", instructorProfession: "CPA", instructorURLKey: "0TdxuPBNNa8" },
  { instructorImageURL: "https://ik.imagekit.io/mileseducation/miles_website/accounting/cma-visit/inst-6.webp", instructorName: "Srinivas", instructorProfession: "CMA", instructorURLKey: "QqFAuZzvnDs" },
];

/* ───────── reusable YouTube popup ───────── */

function YouTubePopup({ code, onClose }) {
  if (!code) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[999]" onClick={onClose}>
      <div className="bg-white p-1 shadow-lg relative rounded-[14px] md:w-[auto] w-[85%]" onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="absolute right-[-15px] top-[-30px] bg-red-700 text-white px-3 py-1 rounded hover:bg-red-800 transition-colors duration-200" aria-label="Close video popup">
          &#10005;
        </button>
        <iframe
          className="lg:w-[600px] lg:h-[320px] w-full h-[180px] rounded-[14px]"
          width="100%"
          height="320"
          src={`https://www.youtube.com/embed/${code}?autoplay=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
        />
      </div>
    </div>
  );
}

/* ───────── placeholder form ───────── */

function PlaceholderForm({ heading, buttonText, dark }) {
  return (
    <form className={`flex flex-col gap-3 ${dark ? 'text-white' : 'text-[#061A2F]'}`} onSubmit={e => e.preventDefault()}>
      {heading && <h3 className={`text-lg font-semibold text-center ${dark ? 'text-white' : 'text-[#061A2F]'}`}>{heading}</h3>}
      <input type="text" placeholder="Full Name" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-black" />
      <input type="email" placeholder="Email" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-black" />
      <input type="tel" placeholder="Phone Number" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-black" />
      <select className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-black">
        <option>Select City</option>
        <option>Bangalore</option>
        <option>Mumbai</option>
        <option>Delhi</option>
        <option>Hyderabad</option>
        <option>Chennai</option>
        <option>Pune</option>
        <option>Ahmedabad</option>
        <option>Kolkata</option>
        <option>Ernakulam</option>
      </select>
      <button type="submit" className="bg-[#3399FF] text-white py-2 rounded-lg font-semibold hover:bg-[#2A85FF] transition-colors">
        {buttonText || "Request a call back"}
      </button>
    </form>
  );
}

/* ───────── Banner Label (marquee) ───────── */

function BannerLabel() {
  const desktopRef = useRef(null);
  const mobileRef = useRef(null);

  useEffect(() => {
    const setupMarquee = (ref) => {
      const el = ref.current;
      if (!el) return;
      let translateX = 0;
      const speed = 0.02;
      let frameId;
      const animate = () => {
        translateX -= speed;
        if (translateX <= -33.33) translateX = 0;
        el.style.transform = `translate3d(${translateX}%, 0, 0)`;
        frameId = requestAnimationFrame(animate);
      };
      frameId = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(frameId);
    };
    const c1 = setupMarquee(desktopRef);
    const c2 = setupMarquee(mobileRef);
    return () => { c1?.(); c2?.(); };
  }, []);

  const tripled = [...bannerContent, ...bannerContent, ...bannerContent];

  return (
    <>
      {/* Desktop */}
      <div className="md:block hidden w-full bg-gradient-to-r from-[#FFF3D6] via-[#A7D3FF] to-[#FFF3D6] overflow-hidden py-2 relative" style={{ minHeight: "44px", contain: "layout style paint" }}>
        <div className="overflow-hidden w-full relative z-10">
          <div ref={desktopRef} className="flex gap-16" style={{ width: "max-content", textRendering: "optimizeLegibility", WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale" }}>
            {tripled.map((item, index) => (
              <div key={`desktop-${index}`} className="flex items-center gap-2 text-[18px] md:text-[20px] font-semibold text-[#01060B] flex-shrink-0 whitespace-nowrap leading-[28px]">
                <span className="text-[22px] md:text-[24px] font-bold text-[#01060B] leading-[28px]">{item.count}</span>
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Mobile */}
      <div className="md:hidden block w-full bg-gradient-to-r from-[#FFF3D6] via-[#A7D3FF] to-[#FFF3D6] overflow-hidden py-3 relative" style={{ minHeight: "44px", contain: "layout style paint" }}>
        <div className="overflow-hidden w-full relative z-10">
          <div ref={mobileRef} className="flex gap-8" style={{ width: "max-content", textRendering: "optimizeLegibility", WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale" }}>
            {tripled.map((item, index) => (
              <div key={`mobile-${index}`} className="flex items-center gap-2 text-[14px] font-semibold text-[#01060B] flex-shrink-0 whitespace-nowrap leading-[20px]">
                <span className="text-[16px] font-bold text-[#01060B] leading-[20px]">{item.count}</span>
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

/* ───────── Main Page Banner ───────── */

function MainPageBanner() {
  const bulletPoints = [
    "CPA is the US equivalent of C.A.",
    "4 exams | 12 months",
    "Jobs at Big 4 & MNCs in India & U.S.",
  ];

  return (
    <div className="w-full bg-center relative" style={{ minHeight: "580px", contain: "layout style" }}>
      <div className="hidden md:block absolute inset-0 top-7" style={{ contain: "layout style paint" }}>
        <img src="https://ik.imagekit.io/mileseducation/miles_website/accounting/cpa/herosectionBG.webp" alt="" width={1280} height={580} className="absolute inset-0 w-full h-full object-cover z-0" fetchPriority="high" />
      </div>
      <div className="md:hidden absolute inset-0 top-7" style={{ contain: "layout style paint" }}>
        <img src="https://ik.imagekit.io/mileseducation/miles_website/accounting/cma/cpa-new-bg-mobile.webp?tr=w-375,q-50,f-webp" alt="" width={420} height={740} className="absolute inset-0 w-full h-full object-cover z-0" fetchPriority="high" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 lg:py-10">
        <div className="flex flex-col md:grid md:grid-cols-2 xl:grid-cols-3 gap-5 py-6" style={{ contain: "layout" }}>
          <div className="flex flex-col items-center md:items-start gap-4 sm:gap-6 lg:pt-10">
            <div className="md:text-left text-center md:z-20">
              <h1 className="text-[#061A2F] text-2xl md:text-[44px] font-semibold leading-tight md:leading-[1.2] tracking-[-1.44px] text-center md:text-left">
                Be an AI-Ready CPA in 2026
              </h1>
              <span className="md:text-[36px] text-2xl font-semibold leading-normal tracking-[-1.44px] bg-[linear-gradient(88deg,_#39F_73.02%,_#FFB801_90.73%)] bg-clip-text text-transparent relative block">
                Earn 50L+ per annum
              </span>
            </div>
            <ul className="mt-2 text-[#061A2F] font-medium text-base flex flex-col md:gap-2 gap-0 md:leading-[1.2] md:items-start md:text-left list-disc md:pl-5 pl-4">
              {bulletPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
          <div className="hidden xl:block relative overflow-hidden md:z-10" />
          <div className="w-full relative flex items-center justify-center lg:justify-end z-[1] bottom-1 lg:pt-12">
            <div className="w-full max-w-[400px] p-4 border border-white rounded-2xl bg-gradient-to-b from-white/30 to-blue-400/30 shadow-[0px_0px_14px_0px_rgba(4,84,175,0.29)] backdrop-blur-[28px] relative">
              <img src="https://ik.imagekit.io/mileseducation/miles_website/accounting/cpa-visit/starGroup.webp" alt="" width={34} height={38} className="absolute top-1 left-0" loading="lazy" />
              <PlaceholderForm heading="Weekly Live Webinar with Varun Jain" buttonText="Request a call back" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ───────── Finance Credential Section ───────── */

function FinanceCredential() {
  const [popup, setPopup] = useState({ open: false, code: "" });

  return (
    <>
      <div className="w-full relative bg-[#061A2F] md:bg-none" style={{ minHeight: "600px" }}>
        <div className="hidden md:block absolute inset-0" style={{ contain: "layout style paint" }}>
          <img
            src="https://ik.imagekit.io/mileseducation/miles_website/accounting/cpa/credentialBG.png?tr=f-webp"
            alt="Miles Logo Background"
            width={1280}
            height={580}
            className="absolute inset-0 w-full h-full object-cover z-0"
            loading="lazy"
          />
        </div>
        <div className="md:hidden bg-[#061A2F] absolute bottom-0 left-0 z-[0]" style={{ width: "100%", height: "auto", aspectRatio: "840 / 480", contain: "layout style paint" }}>
          <img
            src="https://ik.imagekit.io/mileseducation/miles_website/accounting/cpa/tri-bg-blue.webp"
            alt="Miles Logo Background"
            width={840}
            height={480}
            loading="lazy"
            className="w-full h-auto"
            style={{ display: "block" }}
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 flex flex-col gap-6 lg:gap-8 relative z-10">
          <div>
            <h2 className="text-[20px] md:text-[32px] font-semibold tracking-[-1.76px] text-[#fff]">
              Why CPA is the #1 Finance<br className="md:hidden block" /> Credential{" "}
              <span className="font-semibold leading-[94%] bg-[linear-gradient(92deg,#39f_6.8%,#ffba08_99.51%)] bg-clip-text text-transparent pr-1 !tracking-[-1.76px]">Today</span>
            </h2>
            <h3 className="text-sm md:text-lg font-medium text-white">
              <span className="bg-gradient-to-r from-[#39F] to-[#FFF] bg-clip-text text-transparent">
                4 Exams | 12 Months | Global Certification
              </span>
            </h3>
          </div>
          <div className="flex flex-col lg:flex-row gap-3 lg:gap-4 items-center">
            <div className="w-full lg:w-[30%] flex flex-col gap-3 md:gap-6">
              <div className="border lg:h-[90px] border-[#39F] text-white text-sm md:text-xl py-2 md:py-4 px-4 rounded-[8px] lg:rounded-[16px] bg-[rgba(255,255,255,0.04)] backdrop-blur-[4px]">
                CPA is the{" "}
                <span className="text-[#FFBA08] font-bold">
                  U.S. Equivalent of <br className="md:block hidden" />CA
                </span>
              </div>
              <div className="border lg:h-[90px] border-[#39F] text-white text-sm md:text-xl py-3 md:py-4 px-4 rounded-[8px] lg:rounded-[16px] bg-[rgba(255,255,255,0.04)] backdrop-blur-[4px]">
                Pursue with full-time job:{" "}
                <span className="text-[#FFBA08] font-bold lg:block">20 hrs study/week</span>
              </div>
              <div className="border lg:h-[90px] border-[#39F] text-white text-sm md:text-xl py-3 md:py-4 px-4 rounded-[8px] lg:rounded-[16px] bg-[rgba(255,255,255,0.04)] backdrop-blur-[4px]">
                12-month timeline:{" "}
                <span className="text-[#FFBA08] font-bold lg:block">1 exam every 3 months</span>
              </div>
              <div className="border lg:h-[90px] border-[#39F] text-white text-sm md:text-xl py-3 md:py-4 px-4 rounded-[8px] lg:rounded-[16px] bg-[rgba(255,255,255,0.04)] backdrop-blur-[4px]">
                Next batch starts Mar 22:{" "}
                <span className="text-[#FFBA08] font-bold lg:block">Fees {"\u20B9"}99K*</span>
              </div>
            </div>
            <div className="w-full lg:w-[70%]">
              <div
                className="rounded-[8px] lg:rounded-[16px] border border-[#39F] p-3 md:p-4 flex flex-col gap-4"
                style={{ background: "linear-gradient(0deg, rgba(51, 153, 255, 0.10) 0%, rgba(51, 153, 255, 0.10) 100%), rgba(255, 255, 255, 0.04)", backdropFilter: "blur(4px)" }}
              >
                <h3 className="text-white text-sm md:text-xl rounded-[8px] lg:rounded-[16px]">
                  <span className="text-[#FFBA08] font-bold"> Only 4 exams: </span>
                  <br className="md:block hidden" />
                  Accounting | Auditing | Taxation | Business
                </h3>
                <div className="grid grid-cols-2 gap-2 md:gap-5 w-full">
                  {examVideos.map((item, idx) => (
                    <div key={idx} className="flex flex-col gap-2">
                      <div className="w-full rounded-[8px] cursor-pointer overflow-hidden" onClick={() => setPopup({ open: true, code: item.code })}>
                        <img
                          src={item.src}
                          alt={`Video-${idx}`}
                          className="rounded-[8px] w-full h-auto lg:h-[154px] object-cover"
                          width={180}
                          height={80}
                          loading="lazy"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {popup.open && <YouTubePopup code={popup.code} onClose={() => setPopup({ open: false, code: "" })} />}
    </>
  );
}

/* ───────── Leading Global (Salary cards) ───────── */

function SalaryCard({ title, amount, subtitleDesktop, logoPanelDeskSrc, logoPanelDeskAlt, logoPanelMobSrc, logoPanelMobAlt, partnerImage, partnerImageMobile, code, onImageClick }) {
  return (
    <div className="w-full bg-white relative mx-auto">
      <div className="mx-auto">
        <div className="relative rounded-[12px] border-[1px] border-[rgba(248,248,248,0.3)] bg-[#3399FF] backdrop-blur-[8.537px]">
          <div className="px-1 md:px-6 pt-2 md:pt-3 text-white">
            <p className="text-xs md:text-lg font-semibold leading-4 text-center">{title}</p>
            <p className="text-[26px] md:text-[32px] font-bold tracking-tight leading-8 text-center">{amount}</p>
          </div>
          <div className="m-2 md:m-3 rounded-[12px]">
            <div className="bg-[#F8F8F8] border border-[#EDEDF0] rounded-lg p-3">
              <p className="text-center text-black text-lg font-medium">{subtitleDesktop}</p>
              <div className="mt-4 md:mt-6 justify-center hidden md:flex">
                <img src={logoPanelDeskSrc} alt={logoPanelDeskAlt} width="640" height="120" className="h-12 w-auto object-contain" loading="lazy" />
              </div>
              <div className="mt-3 justify-center flex md:hidden">
                <img src={logoPanelMobSrc} alt={logoPanelMobAlt} width="360" height="80" className="w-auto object-contain" loading="lazy" />
              </div>
            </div>
            <div className="mt-4 justify-center overflow-hidden hidden md:flex">
              <img src={partnerImage} alt="Partner video" width="400" height="200" className="cursor-pointer md:hover:scale-105 ease-in-out duration-300 w-full object-contain" onClick={() => onImageClick(code)} loading="lazy" />
            </div>
            <div className="mt-3 justify-center overflow-hidden flex md:hidden">
              <img src={partnerImageMobile} alt="Partner video" width="300" height="150" className="cursor-pointer md:hover:scale-105 ease-in-out duration-300 w-auto object-contain" onClick={() => onImageClick(code)} loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LeadingGlobal() {
  const [popup, setPopup] = useState({ open: false, code: "" });

  return (
    <>
      <section className="w-full bg-white relative" aria-labelledby="placement-partners-heading" style={{ minHeight: "600px" }}>
        <div className="hidden md:block absolute inset-0" style={{ contain: "layout style paint" }}>
          <img src="https://ik.imagekit.io/mileseducation/miles_website/accounting/cpa/LeadingGlobalBG.png?tr=f-webp" alt="Background graphic for Miles Education" width={1280} height={580} className="absolute inset-0 w-full h-full object-cover object-center z-0" loading="lazy" />
        </div>
        <div className="md:hidden absolute bottom-0 left-0 z-[0]" style={{ width: "100%", height: "auto", aspectRatio: "840 / 480", contain: "layout style paint" }}>
          <img src="https://ik.imagekit.io/mileseducation/miles_website/accounting/cpa/tri-bg-blue.webp" alt="Miles Logo Background" width={840} height={480} loading="lazy" className="w-full h-auto" style={{ display: "block" }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative py-10 lg:py-16 flex flex-col gap-6 lg:gap-10 z-10">
          <header>
            <h2 id="placement-partners-heading" className="text-xl md:text-[32px] font-semibold tracking-[-1.76px] text-[#061A2F]">
              Jobs at Big 4 & MNCs in
              <span className="font-semibold leading-[94%] bg-[linear-gradient(92deg,#39f_6.8%,#ffba08_99.51%)] bg-clip-text text-transparent pr-1 !tracking-[-1.76px]"> India & U.S.</span>
            </h2>
            <h2 className="text-sm md:text-lg font-medium bg-gradient-to-r from-[#39f] to-[#061a2f] bg-clip-text text-transparent inline-block">
              Our premier tie-ups with top companies
            </h2>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-7 mx-auto w-full">
            {salaryCardsData.map((card, i) => (
              <SalaryCard key={i} {...card} onImageClick={(code) => setPopup({ open: true, code })} />
            ))}
          </div>
        </div>
      </section>
      {popup.open && <YouTubePopup code={popup.code} onClose={() => setPopup({ open: false, code: "" })} />}
    </>
  );
}

/* ───────── CAIRA Section ───────── */

const CAIRA_IMAGES = [
  "https://ik.imagekit.io/mileseducation/miles_website/caira/new/card-1.webp",
  "https://ik.imagekit.io/mileseducation/miles_website/caira/new/card-2.webp",
  "https://ik.imagekit.io/mileseducation/miles_website/caira/new/card-3.webp",
  "https://ik.imagekit.io/mileseducation/miles_website/caira/new/card-4.webp",
  "https://ik.imagekit.io/mileseducation/miles_website/caira/new/card-5.webp",
  "https://ik.imagekit.io/mileseducation/miles_website/caira/new/card-6.webp",
];

function CairaSection() {
  return (
    <div
      className="w-full relative isolate bg-[#061A2F]"
      style={{ minHeight: "420px", contain: "layout" }}
    >
      {/* Desktop Background */}
      <div className="absolute inset-0 hidden md:block">
        <img
          src="https://ik.imagekit.io/mileseducation/miles_website/accounting/cma/new/caira-new-bg-desk.webp"
          alt="BG Image"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      {/* Mobile Background */}
      <div className="absolute inset-0 md:hidden">
        <img
          src="https://ik.imagekit.io/mileseducation/miles_website/accounting/cma/new/caira-new-bg-mob.webp"
          alt="BG Image"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="max-w-[1340px] lg:px-7 md:px-4 mx-auto relative px-0 lg:py-10 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 md:justify-between md:items-center gap-5 relative md:py-6 py-10">
          <div className="flex flex-col items-center md:items-start gap-4 sm:gap-6 lg:pt-0">
            <div className="md:text-left text-center w-full">
              <h2 className="text-lg leading-[1.2] font-medium text-white md:text-[32px] md:leading-[1.4] md:pt-4">
                FREE: CAIRA - Level 1 <br className="md:hidden block" />
                (Certified <br className="md:block hidden" /> AI-Ready
                Accountant)
              </h2>
              <p className="text-white text-sm md:mt-4 mt-2">
                Learn AI from Global Accounting Innovators
              </p>

              {/* Mobile Cards Grid */}
              <div className="md:hidden block w-full relative py-2 mt-5">
                <div className="overflow-x-auto scrollbar-hidden">
                  <div className="flex gap-2 px-4">
                    {CAIRA_IMAGES.map((imageSrc, index) => (
                      <div
                        key={`caira-mob-${index}`}
                        className="flex-[0_0_33.33%] min-w-0"
                      >
                        <div className="relative cursor-pointer h-auto w-full">
                          <article
                            className="shrink-0 overflow-hidden rounded-[4px] bg-[#0b0b0b] transition-transform hover:scale-105 w-full h-[200px] sm:h-[280px]"
                          >
                            <div className="relative w-full h-full">
                              <img
                                src={imageSrc}
                                alt={`AI Accountant program showcase ${index + 1}`}
                                className="absolute inset-0 w-full h-full object-cover transition-transform"
                                loading={index < 3 ? "eager" : "lazy"}
                              />
                            </div>
                          </article>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Desktop Cards Grid */}
              <div className="hidden md:block relative py-2 mt-5">
                <div className="overflow-x-auto scrollbar-hidden">
                  <div className="flex gap-3">
                    {CAIRA_IMAGES.map((imageSrc, index) => (
                      <div
                        key={`caira-desk-${index}`}
                        className="flex-shrink-0"
                      >
                        <article
                          className="shrink-0 overflow-hidden rounded-[4px] bg-[#0b0b0b] transition-transform hover:scale-105 w-[154px] h-[275px]"
                        >
                          <div className="relative w-full h-full">
                            <img
                              src={imageSrc}
                              alt={`AI Accountant program showcase ${index + 1}`}
                              className="absolute inset-0 w-full h-full object-cover transition-transform"
                              loading={index < 3 ? "eager" : "lazy"}
                            />
                          </div>
                        </article>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="md:mt-14 mt-6 px-4 md:px-0">
                <a
                  href="/caira"
                  className="inline-flex items-center gap-3 rounded-full bg-[#fff] px-6 py-2 text-sm font-semibold text-black transition-transform hover:scale-[1.02] active:scale-[0.99]"
                >
                  Apply Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ───────── CPA Matlab Miles ───────── */

function CPAMatlabMiles() {
  const [popup, setPopup] = useState({ open: false, code: "" });

  return (
    <>
      <div className="w-full bg-white relative">
        <img
          src="https://ik.imagekit.io/mileseducation/miles_website/accounting/cpa/CPAMtlbMIlesBG.png?tr=f-webp"
          alt="Background graphic for Miles Education"
          width={1280}
          height={580}
          className="absolute inset-0 w-full h-full object-cover z-0"
          loading="lazy"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative py-10 lg:py-16 flex flex-col gap-6 z-10">
          <div>
            <h2 className="text-[20px] md:text-[32px] font-semibold tracking-[-1.76px] text-[#061A2F]">
              #CPAmatlab
              <span className="font-semibold leading-[94%] bg-[linear-gradient(92deg,#39f_6.8%,#ffba08_99.51%)] bg-clip-text text-transparent pr-1 !tracking-[-1.76px]">Miles</span>
            </h2>
            <h3 className="text-sm md:text-lg font-medium bg-gradient-to-r from-[#39f] to-[#061a2f] bg-clip-text text-transparent inline-block">
              More than 80% CPAs in India are Miles alumni
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Column 1 - Varun Jain */}
            <div className="border border-[#39F] rounded-[8px] lg:rounded-2xl p-2 md:p-3 flex flex-col gap-3">
              <h3 className="text-[#3399FF] text-base md:text-[18px] font-bold leading-tight">
                Learn From the World's Favourite CPA Instructor - Varun Jain
              </h3>
              <div className="flex gap-5">
                <img
                  src="https://ik.imagekit.io/mileseducation/miles_website/accounting/cpa/varunjain.png?tr=f-webp"
                  alt="Varun Jain"
                  className="rounded-full w-[55px] md:w-[80px] h-[55px] md:h-[80px] max-w-full object-cover"
                  width={80}
                  height={80}
                  loading="lazy"
                />
                <p className="text-[#061A2F]">
                  <span className="text-[16px] md:text-[28px] font-semibold">Varun Jain</span>, CPA, CMA <br /> Harvard B - School Alumnus
                </p>
              </div>
              <div className="rounded-[10px] relative cursor-pointer" onClick={() => setPopup({ open: true, code: "17mbNFmgG4k" })}>
                <img
                  src="https://ik.imagekit.io/mileseducation/miles_website/accounting/cpa/varun_jain_reg.png?tr=f-webp"
                  alt="REG"
                  className="rounded-xl lg:h-[405px] w-full object-cover hidden md:block"
                  width={346}
                  height={310}
                  loading="lazy"
                />
                <img
                  src="https://ik.imagekit.io/mileseducation/miles_website/accounting/cpa/varunJainReg.webp"
                  alt="REG"
                  className="rounded-xl w-full h-full object-cover md:hidden"
                  width={335}
                  height={181}
                  loading="lazy"
                />
              </div>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-5">
              <div className="border border-[#39F] rounded-[8px] lg:rounded-2xl p-2 md:px-4 md:py-6 flex flex-col gap-3">
                <div className="flex justify-between items-center gap-3">
                  <h3 className="text-[#3399FF] text-base md:text-[18px] font-bold md:leading-5 leading-tight">
                    100+ Global Educators & Industry Experts
                  </h3>
                </div>
                <div className="overflow-hidden">
                  <div className="flex">
                    {instructors.map((inst, index) => (
                      <div key={index} className="flex-[0_0_36.33%] min-w-0 pr-1 md:pr-3">
                        <div className="relative cursor-pointer h-auto md:h-[190px] w-full" onClick={() => setPopup({ open: true, code: inst.instructorURLKey })}>
                          <div className="relative h-full w-full">
                            <img src={inst.instructorImageURL} alt={`${inst.instructorName}-photo`} width={300} height={225} loading="lazy" className="rounded md:rounded-[14px] h-full w-full" />
                            <div className="absolute left-2 bottom-2">
                              <p className="font-medium text-[10px] md:text-xs text-white">{inst.instructorName}</p>
                              <p className="font-normal text-[7px] md:text-[9px] text-white">{inst.instructorProfession}</p>
                              <button className="bg-white py-[2px] px-1 text-[#1772ea] font-semibold text-[7px] rounded-[22px] flex mt-2 items-center">
                                Watch video{" "}
                                <img src="https://ik.imagekit.io/mileseducation/miles_website/accounting/cpa-visit/play.webp" alt="play" className="ml-1 w-3 h-3" width={16} height={16} loading="lazy" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center border border-[#39F] rounded-[8px] lg:rounded-2xl px-2 md:px-4 py-3 md:py-3 gap-3">
                <h4 className="text-[#3399FF] text-base font-bold leading-tight max-w-[200px]">
                  Guidance for CPA Eligibility, Exam NTS & License
                </h4>
                <img src="https://ik.imagekit.io/mileseducation/miles_website/accounting/cpa/license.png?tr=f-webp" alt="License" className="w-[120px] h-[55px] object-contain" width={120} height={55} loading="lazy" />
              </div>
              <div className="flex justify-between items-center border border-[#39F] rounded-[8px] lg:rounded-2xl px-2 md:px-4 py-3 md:py-3 gap-3">
                <h4 className="text-[#3399FF] text-base font-bold leading-tight">
                  Placements in <br /> India & USA
                </h4>
                <img src="https://ik.imagekit.io/mileseducation/miles_website/accounting/cpa/career-advice.png?tr=f-webp" alt="Career Advice" className="w-[120px] h-[55px] object-contain" width={120} height={55} loading="lazy" />
              </div>
              <div className="flex justify-between items-center border border-[#39F] rounded-[8px] lg:rounded-2xl px-2 md:px-4 py-3 md:py-3 gap-3">
                <h4 className="text-[#3399FF] text-base font-bold leading-tight">
                  Learn on-the-go with <br /> Miles One App
                </h4>
                <img src="https://ik.imagekit.io/mileseducation/miles_website/accounting/cpa/milesOnePhone.webp" alt="Miles One App" className="w-[120px] h-[60px] object-contain" width={120} height={60} loading="lazy" />
              </div>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-5">
              <div className="border border-[#39F] rounded-[8px] lg:rounded-2xl p-2 md:p-3 flex flex-col gap-3">
                <h4 className="text-[#3399FF] text-base font-bold">
                  The Miles CPA LMS - Your Ultimate CPA Tool Kit
                </h4>
                <img src="https://ik.imagekit.io/mileseducation/miles_website/accounting/cpa/LMSImg.webp" alt="Toolkit" width={600} height={300} className="w-full h-auto md:h-[230px] object-contain" loading="lazy" />
                <div className="flex flex-wrap mx-auto gap-x-2 md:gap-x-3 gap-y-2 justify-center">
                  {["Video Lectures", "MCQs", "Simulations", "Mock Exams", "Sunday Live Classes"].map((item, idx) => (
                    <p key={idx} className="text-[#061A2F] text-sm md:text-base border border-[rgba(51,153,255,0.05)] bg-[#3399FF14] rounded-full px-3 py-1">
                      {item}
                    </p>
                  ))}
                </div>
              </div>
              <div className="flex justify-between items-center border border-[#39F] rounded-[8px] lg:rounded-2xl py-1 px-3 gap-3">
                <h4 className="text-[#3399FF] text-base font-bold leading-tight max-w-[220px]">
                  Live Classes - CPA Online Coaching & 1:1 Mentoring
                </h4>
                <img src="https://ik.imagekit.io/mileseducation/miles_website/accounting/cpa/best.png?tr=f-webp" alt="McGraw Hill" className="w-[120px] h-[50px] md:h-[70px] object-contain" width={120} height={40} loading="lazy" />
              </div>
              <div className="flex justify-between items-center border border-[#39F] rounded-[8px] lg:rounded-2xl py-1 px-3 gap-3">
                <h4 className="text-[#3399FF] text-base font-bold leading-tight max-w-[230px]">
                  FREE: CAIRA - Level 1 (Certified AI-Ready Accountant)
                </h4>
                <img src="https://ik.imagekit.io/mileseducation/miles_website/accounting/cpa/cairaIImg.webp" alt="CAIRA" className="w-[120px] h-[50px] md:h-[70px] object-contain" width={120} height={40} loading="lazy" />
              </div>
            </div>
          </div>
          <div className="md:flex justify-center hidden">
            <Link to="/cpa/cpa-eligibility" className="bg-[#3399FF] rounded-tl-[13.333px] rounded-tr-[13.333px] rounded-br-[13.333px] rounded-bl-[0px] text-white px-8 py-[10.5px] font-semibold">
              Check CPA Eligibility
            </Link>
          </div>
        </div>
      </div>
      {popup.open && <YouTubePopup code={popup.code} onClose={() => setPopup({ open: false, code: "" })} />}
    </>
  );
}

/* ───────── CPA Gameplan ───────── */

function CPAGameplan() {
  return (
    <>
      {/* Mobile */}
      <div className="w-full bg-[#061A2F] px-4 py-8 relative lg:hidden">
        <img src="https://ik.imagekit.io/mileseducation/miles_website/accounting/cpa/path5.webp" alt="path" className="absolute top-0 right-0 z-[0]" width={240} height={80} loading="lazy" />
        <div className="max-w-md mx-auto">
          <div className="text-left mb-4">
            <h2 className="text-[20px] font-bold tracking-[-1px] text-white leading-tight">
              Your CPA{" "}
              <span className="font-semibold leading-[94%] bg-[linear-gradient(92deg,#39f_6.8%,#ffba08_99.51%)] bg-clip-text text-transparent pr-1 !tracking-[-1px]">Gameplan</span>
            </h2>
            <h3 className="text-[14px] font-medium mt-1" style={{ background: "linear-gradient(90deg, #39F 0.05%, #FFF 90.66%)", backgroundClip: "text", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Your journey to CPA License and getting <br /> placed
            </h3>
          </div>
          <div className="flex justify-center items-center">
            <img src="https://ik.imagekit.io/mileseducation/miles_website/accounting/cpa/gameplan_mobileNew.webp" alt="gameplan cpa" width={328} height={494} className="w-full h-full" loading="lazy" />
          </div>
          <div className="flex flex-row justify-between items-center px-2 py-2 mt-4" style={{ borderRadius: "8px", border: "0.5px solid #B8DAFF", background: "#071B30", boxShadow: "0 0 14px 0 rgba(4, 84, 175, 0.29)" }}>
            <p className="text-[14px] text-white leading-[1.2]">
              Next Batch Starts <br />on <span className="text-[#FFBA08]">22 Mar 2026</span>
            </p>
            <button className="bg-[#2A85FF] text-center font-bold rounded-[12px_12px_12px_0px] text-white text-[14px] w-[159px] py-2">
              View CPA Schedule
            </button>
          </div>
        </div>
      </div>

      {/* Desktop */}
      <div className="w-full bg-[#051A30] relative hidden lg:block">
        <img src="https://ik.imagekit.io/mileseducation/miles_website/accounting/cpa-salary/cpaLicenceBG.webp" alt="" width={1280} height={580} className="absolute inset-0 w-full h-full object-cover object-center z-0" loading="lazy" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 flex flex-col gap-8 relative z-10">
          <div>
            <h2 className="text-[32px] font-semibold tracking-[-1.76px] text-[#fff]">
              Your CPA
              <span className="font-semibold leading-[94%] bg-[linear-gradient(92deg,#39f_6.8%,#ffba08_99.51%)] bg-clip-text text-transparent pr-1 !tracking-[-1.76px]"> Gameplan</span>
            </h2>
            <h3 className="text-lg font-medium text-white">
              <span className="bg-gradient-to-r from-[#39F] to-[#FFF] bg-clip-text text-transparent">
                Your journey to CPA License and getting placed
              </span>
            </h3>
          </div>
          <div className="lg:w-[80%] mx-auto mt-8 flex flex-col gap-8 lg:gap-10">
            <img src="https://ik.imagekit.io/mileseducation/miles_website/accounting/cpa/gameplan_desktopNew.webp" alt="accounting/cpaGameplanDesk" width={1540} height={475} loading="lazy" className="mx-auto w-full" />
            <div className="flex justify-between items-center gap-5 pl-3 py-1 pr-1 text-white bg-[#071B30] border-[0.5px] border-[#B8DAFF] shadow-[0_0_14px_0_rgba(4,84,175,0.29)] rounded-[16px]">
              <p className="text-2xl">
                Next Batch Starts on<span className="text-yellow-500"> 22 Mar 2026</span>
              </p>
              <button className="bg-[#2A85FF] text-white py-1 px-4 rounded-tl-[16px] rounded-tr-[16px] rounded-br-[16px] rounded-bl-[0px]">
                View CPA Schedule
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* ───────── CPA Exam Fee ───────── */

function CPAExamFee() {
  return (
    <div className="w-full relative">
      <img src="https://ik.imagekit.io/mileseducation/miles_website/accounting/cpa/cpaExamBG.png?tr=f-webp" alt="Background graphic for Miles Education" width={1280} height={580} className="absolute inset-0 w-full h-full object-cover z-0 hidden md:block" loading="lazy" />
      <img src="https://ik.imagekit.io/mileseducation/miles_website/accounting/cpa/tri-bg-blue.webp" alt="Miles Logo Background" className="cursor-pointer absolute bottom-0 left-0 z-[0] md:hidden" width={840} height={480} loading="lazy" />
      <img src="https://ik.imagekit.io/mileseducation/miles_website/accounting/cpa/path6.webp" alt="path" className="absolute top-[-3px] left-0 z-[0] md:hidden" width={640} height={480} loading="lazy" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-5 pb-10 lg:pb-16 md:pt-8 flex flex-col relative z-10">
        <div>
          <h2 className="text-[20px] md:text-[32px] font-semibold tracking-[-1.76px] text-[#061A2F]">
            CPA Exam
            <span className="font-semibold leading-[94%] bg-[linear-gradient(92deg,#39f_6.8%,#ffba08_99.51%)] bg-clip-text text-transparent pr-1 !tracking-[-1.76px]"> Fees</span>
          </h2>
        </div>
        {/* Desktop */}
        <div className="w-full overflow-hidden md:block hidden">
          <div className="mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pricingData.map((item, index) => (
                <div key={index} className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col shadow-lg my-5">
                  <h3 className="text-lg font-semibold text-black whitespace-pre-line">{item.title}</h3>
                  <div className="w-full h-px bg-gray-200 my-4" />
                  <span className="text-2xl text-gray-500 line-through decoration-red-500 decoration-2">{item.oldPrice}</span>
                  <span className="text-3xl font-bold text-[#1F3A8A] mt-1">{item.newPrice}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Mobile */}
        <div className="md:hidden w-full overflow-hidden">
          <div className="mx-auto">
            <div className="grid grid-cols-3 gap-3">
              {pricingData.map((item, index) => (
                <div key={index} className="bg-white rounded-xl border border-gray-200 p-2 flex flex-col shadow-[0_0_14px_0_rgba(4,84,175,0.29)] my-4">
                  <h3 className="text-sm font-semibold text-gray-900 leading-snug whitespace-pre-line">{item.title}</h3>
                  <div className="w-full h-px bg-gray-200 my-3" />
                  <span className="text-base text-gray-500 line-through decoration-red-500 decoration-2">{item.oldPrice}</span>
                  <span className="text-[22px] font-bold text-[#1F3A8A] mt-1">{item.newPrice}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center md:mt-6 mt-0 md:w-[60%] mx-auto rounded-[8px] border border-[#B8DAFF]/50 bg-[#071B30] shadow-[0_0_14px_0_rgba(4,84,175,0.29)] p-3">
          <p className="text-white text-sm text-left font-medium">
            # Additional Fees applicable for CPA exam-takers:
          </p>
          <ul className="text-white text-sm mt-2 list-disc list-outside pl-3">
            <li>Foreign Academic Credential Evaluation payable to U.S. Agency - ~$400 one-time</li>
            <li>CPA Exam Fee payable to U.S. State Board - ~$873 per exam<br />(includes Exam Application Fees of ~$100, Exam Section Fees of ~$263 and International Testing Fees of $510)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

/* ───────── Testimonials ───────── */

function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = typeof window !== 'undefined' && window.innerWidth >= 768 ? 3 : 1;

  const next = () => setCurrentIndex(i => (i + 1) % testimonialData.length);
  const prev = () => setCurrentIndex(i => (i - 1 + testimonialData.length) % testimonialData.length);

  return (
    <div className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 flex flex-col gap-6">
        <div className="text-center">
          <h2 className="text-[#061A2F] font-bold text-[28px] md:text-[44px] leading-tight">
            #CPA<span className="text-[#FFBA08]">matlab</span>Miles
          </h2>
          <p className="text-black text-sm md:text-xl">
            80%+ CPAs in India are Miles Alumni
          </p>
        </div>
        <div className="relative">
          <div className="flex gap-4 overflow-hidden">
            {testimonialData.slice(currentIndex, currentIndex + visibleCount).map((t, idx) => (
              <div key={idx} className="flex-shrink-0 w-full md:w-[calc(33.33%-12px)] bg-white rounded-2xl border border-gray-200 shadow-[0_0_12px_0_rgba(4,84,175,0.12)] p-4 flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <img src={t.personImg} alt={t.name} className="w-[50px] h-[50px] rounded-full object-cover" width={50} height={50} loading="lazy" />
                  <div className="flex-1">
                    <p className="font-semibold text-[#061A2F] text-sm">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.location}</p>
                  </div>
                  <img src={t.compLogo} alt="company" width={120} height={40} className="h-8 w-auto object-contain" loading="lazy" />
                </div>
                <p className="text-sm text-[#061A2F] leading-relaxed">{t.description}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-4 mt-6">
            <button onClick={prev} className="w-10 h-10 rounded-full border border-[#39F] flex items-center justify-center text-[#39F] hover:bg-[#39F] hover:text-white transition-colors" aria-label="Previous">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <button onClick={next} className="w-10 h-10 rounded-full border border-[#39F] flex items-center justify-center text-[#39F] hover:bg-[#39F] hover:text-white transition-colors" aria-label="Next">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
            </button>
          </div>
          <p className="text-center text-sm text-gray-400 mt-2">{currentIndex + 1} / {testimonialData.length}</p>
        </div>
      </div>
    </div>
  );
}

/* ───────── Pan India Presence ───────── */

function PanIndiaPresence() {
  const [activeImage, setActiveImage] = useState(officeImages[0]);
  const [fade, setFade] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!isHovered) {
      intervalRef.current = setInterval(() => {
        setFade(true);
        setTimeout(() => {
          const currentIndex = officeImages.indexOf(activeImage);
          const nextIndex = (currentIndex + 1) % officeImages.length;
          setActiveImage(officeImages[nextIndex]);
          setFade(false);
        }, 300);
      }, 3000);
    }
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [activeImage, isHovered]);

  const handleImageSelect = (img) => {
    if (img === activeImage) return;
    setFade(true);
    setTimeout(() => { setActiveImage(img); setFade(false); }, 300);
  };

  return (
    <div className="w-full bg-white relative">
      <img src="https://ik.imagekit.io/mileseducation/miles_website/accounting/cpa/panIndia.png?tr=f-webp" alt="Miles Logo Background" width={1280} height={580} className="absolute inset-0 w-full h-full object-cover z-0" loading="lazy" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row gap-4 xl:gap-8">
          <div className="relative flex justify-center w-full" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <div className="relative w-full">
              <img
                src={`${activeImage}&tr=w-385,h-255,q-60`}
                alt="Pan India Office Preview"
                width={385}
                height={255}
                className={`w-full max-h-[350px] rounded-[20px] transition-opacity duration-300 ease-in-out object-cover ${fade ? "opacity-0" : "opacity-100"}`}
                loading="lazy"
              />
            </div>
            <div className="flex gap-2 mt-4 justify-center flex-wrap absolute bottom-1 lg:bottom-5 rounded-[10px] backdrop-blur-sm bg-black/10 p-2">
              {officeImages.map((img, index) => (
                <div
                  key={index}
                  onClick={() => handleImageSelect(img)}
                  className={`relative w-[45px] lg:w-[60px] h-[45px] lg:h-[60px] border-2 rounded-[10px] overflow-hidden cursor-pointer transition-all duration-300 hover:border-[#39F] hover:scale-105 ${activeImage === img ? "border-[#39F] shadow-lg" : "border-gray-300"}`}
                >
                  <img src={`${img}&tr=w-70,h-70,q-60`} alt={`thumbnail-${index}`} width={70} height={70} className="object-cover w-full h-full" loading="lazy" />
                  {activeImage === img && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 rounded-[10px]">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-5 h-5 drop-shadow-lg">
                        <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                        <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2 lg:gap-5 justify-start lg:justify-center w-full">
            <div className="text-[20px] lg:text-[36px] font-semibold text-black text-center leading-[1.2]">
              <span className="text-[#39F]">Best CPA </span>Coaching Institute in India
            </div>
            <p className="text-center text-sm md:text-[18px] max-w-[500px] mx-auto leading-[1]">
              Visit the nearest Miles office or Schedule Online Meet
            </p>
            <div className="flex flex-wrap gap-2 lg:gap-4 justify-center mt-4 md:mt-0">
              {locations.map((location, index) => (
                <button key={index} className="bg-white text-[#39f] font-semibold px-4 py-2 rounded-[12px] border-[0.75px] border-[#C9C9C9] hover:bg-[#39F] hover:text-white transition-colors duration-300">
                  {location.name}
                </button>
              ))}
            </div>
            <div className="text-center mt-4">
              <button className="bg-[#39F] rounded-tl-[13.333px] rounded-tr-[13.333px] rounded-br-[13.333px] rounded-bl-[0px] text-white px-4 py-2 font-semibold">
                Visit your nearest Office
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ───────── Accounting Roadmap / Webinar CTA ───────── */

function AccountingRoadMap() {
  return (
    <div className="w-full bg-[#051A30]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 lg:gap-8 2xl:gap-10">
          <div className="flex flex-col justify-center gap-3 lg:gap-6 py-8 lg:py-12">
            <h2 className="text-[24px] md:text-[50px] lg:text-[55px] font-bold leading-[1.2] tracking-[-0.04em] text-[#FFBA08] max-w-[350px]">
              Join the AI-Ready CPA/ CMA Webinar
            </h2>
            <h3 className="text-[18px] md:text-[30px] lg:text-[36px] font-normal text-white tracking-[0.01em]">
              With Varun Jain every Saturday
            </h3>
          </div>
          <div className="pt-8 xl:pr-8">
            <img
              src="https://ik.imagekit.io/mileseducation/miles_website/accounting/cpa/varunJain_accRoadmap.png?tr=f-webp&tr=w-180,h-245,q-95"
              alt="Accounting Roadmap"
              className="w-full h-full rounded-lg shadow-lg"
              width={180}
              height={245}
              loading="lazy"
            />
          </div>
          <div className="col-span-2 lg:col-span-1 flex flex-col items-center justify-center gap-6 lg:py-10 pb-8">
            <div className="flex lg:justify-end w-full">
              <div
                className="relative w-full lg:max-w-[400px] p-4 border border-white rounded-2xl"
                style={{ background: "linear-gradient(180deg, rgba(255, 255, 255, 0.30) 0%, rgba(51, 153, 255, 0.30) 100%)", boxShadow: "0px 0px 14px 0px rgba(4, 84, 175, 0.29)", backdropFilter: "blur(28px)" }}
              >
                <img src="https://ik.imagekit.io/mileseducation/miles_website/accounting/cpa-visit/starGroup.webp" alt="star group" width={34} height={38} className="absolute top-1 left-0" loading="lazy" />
                <PlaceholderForm heading="Weekly Live Webinar with Varun Jain" buttonText="Apply Now" dark />
              </div>
            </div>
            <div className="flex flex-row gap-4 justify-center">
              <button className="px-3 xl:px-5 py-2 xl:py-[9px] border text-sm xl:text-base border-white text-white font-semibold rounded-full transition-all duration-300 hover:bg-[#0072ED]">
                Download Brochure
              </button>
              <button className="px-3 xl:px-5 py-2 xl:py-[9px] border border-white text-white font-semibold rounded-full hover:bg-[#0072ED] hover:text-white transition-colors duration-300">
                Speak to an Expert
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ───────── Blog Hub Section ───────── */

const blogCardsData = [
  { id: 1, title: "CPA Salary in US: Complete Guide", slug: "cpa-salary-in-us" },
  { id: 2, title: "Is US CPA Equivalent to Indian CA?", slug: "is-a-cpa-in-the-usa-equivalent-to-an-indian-ca" },
  { id: 3, title: "CPA Salary Breakdown in India", slug: "cpa-salary-breakdown-in-india-from-freshers-to-top-earners" },
  { id: 4, title: "CPA Exam Fees: How Much Does CPA Cost?", slug: "cpa-exam-fees-how-much-does-the-cpa-cost" },
];

const BLOG_FALLBACK_IMAGE = "https://ik.imagekit.io/mileseducation/miles_website/accounting/cpa/blog_fallback_author_image.avif";

function BlogHubSection() {
  return (
    <div className="bg-[#fff] w-full">
      <div className="main_container mx-auto py-10 lg:py-16 flex flex-col gap-6 lg:gap-10 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-black text-xl md:text-3xl font-semibold tracking-[-1.28px] text-[32px] leading-[1.2]">
            The Miles{" "}
            <span className="visit_txt pr-1 !tracking-[-1.28px] bg-gradient-to-r from-[#39F] to-[#061A2F] bg-clip-text text-transparent">Blog Hub</span>
          </h2>
          <p className="text-sm md:text-lg font-medium tracking-[-0.54px] text-[18px] leading-[1.3]">
            <span className="bg-gradient-to-r from-[#39F] to-[#061A2F] bg-clip-text text-transparent">
              More from us
            </span>
          </p>
        </div>
        <div>
          {/* Mobile: horizontal scroll */}
          <div className="flex overflow-scroll scrollbar-hidden gap-4 md:hidden">
            {blogCardsData.map((blogData) => (
              <Link
                to={`/blog/accounting/${blogData.slug}`}
                key={blogData.id}
                className="w-[240px] h-[216px] min-w-[240px] min-h-[216px] rounded-2xl flex-shrink-0"
              >
                <div className="relative w-[240px] h-[216px] min-w-[240px] min-h-[216px] rounded-2xl">
                  <img
                    src={BLOG_FALLBACK_IMAGE}
                    alt={`${blogData.title} - Miles Blog`}
                    width={240}
                    height={216}
                    className="rounded-xl object-cover w-full h-full"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C1F33]/60 via-[#0C1F33]/40 to-transparent rounded-xl w-full h-full" />
                  <div className="absolute bottom-3 left-0 right-0 pl-2 pr-4">
                    <h3 className="text-white font-bold tracking-[-0.408px] leading-snug line-clamp-2 text-[14px]">
                      {blogData.title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Desktop: 4-col grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {blogCardsData.map((blogData) => (
              <Link
                to={`/blog/accounting/${blogData.slug}`}
                key={`desktop-${blogData.id}`}
                className="w-full max-w-[300px] h-auto mx-auto rounded-2xl"
              >
                <div className="relative w-full h-[267px] rounded-2xl">
                  <img
                    src={BLOG_FALLBACK_IMAGE}
                    alt={`${blogData.title} - Miles Blog`}
                    width={300}
                    height={270}
                    className="rounded-xl object-cover w-full h-full"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C1F33]/60 via-[#0C1F33]/40 to-transparent rounded-xl w-full h-full" />
                  <div className="absolute bottom-3 left-0 right-0 pl-2 pr-4">
                    <h3 className="text-white font-bold tracking-[-0.408px] leading-snug line-clamp-2 text-[16px] lg:text-[18px]">
                      {blogData.title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ───────── MilesOne App Download Section ───────── */

function MilesOneAppDownload() {
  return (
    <div className="w-full bg-center relative isolate md:py-8 py-10">
      {/* DESKTOP BG */}
      <div
        className="hidden md:block absolute inset-0 -z-10 pointer-events-none select-none"
        style={{ contain: "layout style paint" }}
      >
        <img
          src="https://ik.imagekit.io/mileseducation/miles_website/cma/new/download_app_dek_bg.webp"
          alt="Download App Desktop Background"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* MOBILE BG */}
      <div
        className="md:hidden absolute inset-0 -z-10 pointer-events-none select-none"
        style={{ contain: "layout style paint" }}
      >
        <img
          src="https://ik.imagekit.io/mileseducation/miles_website/cma/new/download_app_mob_bg.webp?tr=w-480,h-310,q-80"
          alt="Download App Mobile Background"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* CONTENT */}
      <div className="max-w-[1340px] mx-auto relative px-4 md:px-6 lg:px-7 py-6 lg:py-16">
        <div className="flex flex-col md:items-center items-start md:text-center text-left md:space-y-8">
          <p className="text-base md:text-2xl text-white">
            Download the
          </p>

          <h2 className="text-3xl md:text-[84px] font-bold text-white tracking-tight">
            Miles One App
          </h2>

          <p className="text-base md:text-2xl text-white font-semibold">
            to be an AI-Ready Accountant
          </p>
        </div>

        <div className="flex md:justify-center justify-start gap-4 md:mt-10 mt-4">
          {/* Desktop: show store buttons + QR code */}
          <div className="hidden md:flex flex-row gap-4 justify-center">
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
              />
              <p className="pt-1 text-xs text-[#fff]">Scan to download</p>
            </div>
          </div>

          {/* Mobile: show store buttons without QR */}
          <div className="flex md:hidden flex-row gap-3 justify-start">
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
                className="shrink-0 w-6 h-6"
              />
              <div>
                <p className="text-[8px] leading-3 text-white font-medium">
                  Download on the
                </p>
                <p className="text-[10px] text-white font-medium">App Store</p>
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
                className="shrink-0 w-6 h-6"
              />
              <div>
                <p className="text-[8px] leading-3 text-white font-medium">
                  GET IT ON
                </p>
                <p className="text-[10px] text-white font-medium">Google Play</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ───────── FAQ Section ───────── */

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  const visibleFaqs = showAll ? faqData : faqData.slice(0, 5);

  return (
    <div className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:px-5 md:py-12 py-4 flex flex-col md:gap-8 gap-6">
        <div>
          <h2 className="md:text-[32px] text-[20px] font-semibold text-[#061A2F]">
            Frequently Asked{" "}
            <span className="font-semibold leading-[94%] bg-[linear-gradient(92deg,#39f_6.8%,#ffba08_99.51%)] bg-clip-text text-transparent pr-1 italic">Questions</span>
          </h2>
        </div>
        <div className="flex flex-col gap-0">
          {visibleFaqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-[8px] relative z-10 mb-[18px] shadow-[0_0_12px_0_rgba(4,84,175,0.12)]">
              <button
                onClick={() => toggle(i)}
                className="w-full flex justify-between items-center hover:no-underline font-semibold md:text-base text-sm text-[#061A2F] text-left md:px-[20px] px-[10px] py-[10px] rounded-[8px]"
              >
                <span className="flex-1 pr-2">{faq.q}</span>
                <svg
                  className={`w-5 h-5 md:w-6 md:h-6 flex-shrink-0 transition-transform duration-200 ${openIndex === i ? 'rotate-180' : ''}`}
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                >
                  <path d="M6 9l6 6 6-6"/>
                </svg>
              </button>
              {openIndex === i && (
                <div className="font-normal md:text-[18px] text-[16px] md:leading-[30px] leading-[22px] text-[#030F1C]">
                  <div className="md:px-[20px] px-[10px] pb-4">
                    <p className="text-sm font-normal">{faq.a}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        {!showAll && faqData.length > 5 && (
          <div className="text-center">
            <button
              onClick={() => setShowAll(true)}
              className="text-[#3399FF] font-semibold text-sm hover:underline"
            >
              View all {faqData.length} FAQs
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

/* ───────── Main CPA Page Component ───────── */

export default function CPA() {
  return (
    <main className="bg-white w-full">
      <Nav />

      {/* 1. Banner */}
      <MainPageBanner />

      {/* 2. Banner Label (marquee stats) */}
      <BannerLabel />

      {/* 3. Finance Credential */}
      <FinanceCredential />

      {/* 4. Leading Global (Salary Cards) */}
      <LeadingGlobal />

      {/* 5. CAIRA Section */}
      <CairaSection />

      {/* 6. CPA Matlab Miles */}
      <CPAMatlabMiles />

      {/* 7. CPA Gameplan */}
      <CPAGameplan />

      {/* 8. CPA Exam Fees */}
      <CPAExamFee />

      {/* 9. Testimonials */}
      <TestimonialSection />

      {/* 10. Pan India Presence */}
      <PanIndiaPresence />

      {/* 11. Accounting Roadmap / Webinar CTA */}
      <AccountingRoadMap />

      {/* 12. Blog Hub */}
      <BlogHubSection />

      {/* 13. MilesOne App Download */}
      <MilesOneAppDownload />

      {/* 14. FAQ */}
      <FAQSection />

      <Footer />
    </main>
  );
}
