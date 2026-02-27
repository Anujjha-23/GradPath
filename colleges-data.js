/* =============================================
   GradPath — Colleges Data (Complete)
   Fields: id, slug, logo, color, name, location,
           program, duration, fees, emi, established,
           accreditation, ranking, students,
           description, highlights[], specializations[],
           placement{avg,top,rate}, eligibility
   ============================================= */
const collegesData = [

  /* ───────── MBA ───────── */
  {
    id: 1, slug: "amity-online-mba",
    logo: "AU", color: "#0A2463",
    name: "Amity University Online",
    location: "Noida, Uttar Pradesh", program: "MBA", duration: "2 Years",
    fees: 130000, emi: "₹5,500", established: 2011,
    accreditation: "NAAC A+ | UGC-DEB Approved",
    ranking: "#1 Private Online University",
    students: "50,000+",
    description: "Amity University Online offers India's most recognized online MBA, backed by a 1.5 lakh+ alumni network and strong industry connections. The same degree as a regular Amity MBA — no 'online' tag on the certificate. Ideal for working professionals seeking a reputed brand without relocating.",
    highlights: [
      "Same degree as regular Amity MBA — no 'online' on certificate",
      "Live weekend sessions with industry experts",
      "Access to 1.5 lakh+ alumni network",
      "Dedicated placement cell with 500+ corporate partners",
      "12 specializations including Finance, HR & Marketing",
      "UGC-DEB approved — valid for government jobs"
    ],
    specializations: ["Finance","Marketing","Human Resources","Business Analytics","Operations Management","IT Management","Entrepreneurship","International Business","Healthcare Management","Retail Management","Supply Chain","Banking & Finance"],
    placement: { avg: "₹6.8 LPA", top: "₹18 LPA", rate: "85% Placed" },
    eligibility: "Graduation 50% from any UGC-recognized university. No entrance exam."
  },

  {
    id: 2, slug: "nmims-online-mba",
    logo: "NM", color: "#1a237e",
    name: "NMIMS Global Access",
    location: "Mumbai, Maharashtra", program: "MBA", duration: "2 Years",
    fees: 250000, emi: "₹10,500", established: 2013,
    accreditation: "NAAC A+ | UGC-DEB Approved",
    ranking: "Top 10 B-School India",
    students: "30,000+",
    description: "NMIMS Global Access is the online arm of SVKM's NMIMS — one of India's premier B-schools, consistently ranked among the Top 10 for Finance and Marketing. Bloomberg terminal access, BFSI-focused mentors, and weekend campus immersions make it the gold standard for premium online MBA in India.",
    highlights: [
      "NMIMS brand — Top 10 B-school for Finance in India",
      "Bloomberg terminal access for Finance students",
      "Mentors from BFSI, consulting & FMCG sectors",
      "Weekend campus immersions at NMIMS Mumbai",
      "Strong alumni network in banking & capital markets",
      "No entrance exam — direct admission"
    ],
    specializations: ["Finance","Marketing","Human Resources","Business Analytics","Operations Management","Banking & Finance","Financial Services","Data Science & Analytics"],
    placement: { avg: "₹8.2 LPA", top: "₹22 LPA", rate: "90% Placed" },
    eligibility: "Graduation 50% (45% reserved). Direct admission — no entrance exam."
  },

  {
    id: 3, slug: "manipal-online-mba",
    logo: "MU", color: "#bf360c",
    name: "Manipal Online (MAHE)",
    location: "Manipal, Karnataka", program: "MBA", duration: "2 Years",
    fees: 160000, emi: "₹6,800", established: 2014,
    accreditation: "NAAC A+ | UGC-DEB Approved",
    ranking: "Top 5 Online MBA Programs",
    students: "40,000+",
    description: "Manipal University (MAHE) carries 70+ years of educational legacy. Its online MBA blends a practical, industry-designed curriculum with live projects and campus networking opportunities. One of the most placement-active online MBA programs in South India.",
    highlights: [
      "MAHE legacy — 70+ years of educational excellence",
      "Industry-designed curriculum with live projects",
      "Optional campus visit for networking events at Manipal",
      "500+ corporate recruiters through Manipal placement network",
      "Strong alumni base in healthcare, IT & manufacturing",
      "UGC-DEB approved — no entrance exam"
    ],
    specializations: ["Finance","Marketing","Human Resources","Operations Management","Business Analytics","IT Management","Healthcare Management","Logistics & Supply Chain"],
    placement: { avg: "₹7.1 LPA", top: "₹19 LPA", rate: "88% Placed" },
    eligibility: "Bachelor's 50% from any recognized university. No entrance test."
  },

  {
    id: 4, slug: "jain-online-mba",
    logo: "JU", color: "#2e7d32",
    name: "Jain Online University",
    location: "Bengaluru, Karnataka", program: "MBA", duration: "2 Years",
    fees: 150000, emi: "₹6,300", established: 2010,
    accreditation: "NAAC A | UGC-DEB Approved",
    ranking: "Top B-School Bengaluru",
    students: "25,000+",
    description: "Jain Online University is rooted in Bengaluru's thriving startup and tech ecosystem. Its MBA program focuses heavily on entrepreneurship, innovation, and emerging business models — making it a strong choice for aspiring entrepreneurs and working professionals in South India.",
    highlights: [
      "Bengaluru ecosystem advantage — startup & tech network",
      "Entrepreneurship-focused curriculum with live incubation support",
      "Merit scholarships up to 40% available",
      "International faculty collaborations across 5 countries",
      "Flexible semester system — study at your own pace",
      "Strong alumni in FMCG, IT & e-commerce"
    ],
    specializations: ["Finance","Marketing","Human Resources","Entrepreneurship","Operations Management","Business Analytics","International Business","Media & Communication"],
    placement: { avg: "₹5.9 LPA", top: "₹15 LPA", rate: "80% Placed" },
    eligibility: "Graduation from any recognized university. Work experience preferred, not mandatory."
  },

  {
    id: 5, slug: "lpu-online-mba",
    logo: "LPU", color: "#6a1b9a",
    name: "LPU Online",
    location: "Phagwara, Punjab", program: "MBA", duration: "2 Years",
    fees: 120000, emi: "₹5,100", established: 2010,
    accreditation: "NAAC A++ | UGC-DEB Approved",
    ranking: "NAAC A++ — Highest Grade",
    students: "60,000+",
    description: "Lovely Professional University holds the rare NAAC A++ accreditation — the highest institutional grade in India. It offers one of the most affordable premium online MBA programs in the country. With 700+ corporate partners and a 2 lakh+ alumni network, it punches well above its price point.",
    highlights: [
      "NAAC A++ — India's highest institutional accreditation",
      "Most affordable premium MBA in India at ₹1.2 lakh total",
      "700+ corporate partners for placement support",
      "2 lakh+ alumni network across India & abroad",
      "Merit and need-based scholarships available",
      "10 specializations across business & technology"
    ],
    specializations: ["Finance","Marketing","Human Resources","Operations Management","Business Analytics","IT Management","Retail Management","Agribusiness","Tourism & Hospitality","International Business"],
    placement: { avg: "₹6.2 LPA", top: "₹17 LPA", rate: "87% Placed" },
    eligibility: "Bachelor's 50% from any UGC-recognized university. No entrance exam."
  },

  {
    id: 6, slug: "chandigarh-online-mba",
    logo: "CU", color: "#00695c",
    name: "Chandigarh University Online",
    location: "Mohali, Punjab", program: "MBA", duration: "2 Years",
    fees: 140000, emi: "₹5,900", established: 2012,
    accreditation: "NAAC A+ | QS Ranked | UGC-DEB Approved",
    ranking: "QS World University Ranked",
    students: "35,000+",
    description: "Chandigarh University is both QS World Ranked and NAAC A+ accredited — making it one of the most globally credible online MBA providers in India. It has strong placement ties with North India's manufacturing, IT, and services sectors, and an international collaboration network spanning 300+ universities.",
    highlights: [
      "QS World University Rankings — globally recognized degree",
      "Strong placement network in North India's industrial belt",
      "Live industry interaction sessions every week",
      "Dedicated exam centers across 50+ cities India-wide",
      "International collaboration with 300+ global universities",
      "UGC-DEB approved — eligible for government & PSU jobs"
    ],
    specializations: ["Finance","Marketing","Human Resources","Operations Management","Business Analytics","IT Management","International Business","Energy Management","Logistics & Supply Chain"],
    placement: { avg: "₹6.5 LPA", top: "₹18 LPA", rate: "86% Placed" },
    eligibility: "Graduation 50% from any recognized university. No entrance exam."
  },

  {
    id: 7, slug: "symbiosis-online-mba",
    logo: "SY", color: "#b71c1c",
    name: "Symbiosis SCDL",
    location: "Pune, Maharashtra", program: "MBA", duration: "2 Years",
    fees: 210000, emi: "₹8,800", established: 2001,
    accreditation: "NAAC A | UGC-DEB Approved",
    ranking: "Best Online MBA Pune",
    students: "20,000+",
    description: "Symbiosis Centre for Distance Learning (SCDL) is one of India's oldest and most respected distance/online education providers. Its MBA is research-driven with case-method learning, strong corporate faculty, and deep alumni roots in FMCG, consulting, and financial services across Mumbai and Pune.",
    highlights: [
      "Symbiosis brand — one of India's oldest distance B-schools",
      "Research-integrated curriculum with case method learning",
      "Strong alumni in FMCG, consulting & financial services",
      "Optional on-campus workshops at Symbiosis Pune",
      "Best-in-class HR and Marketing specializations",
      "No entrance exam required"
    ],
    specializations: ["Finance","Marketing","Human Resources","Operations Management","International Business","Business Analytics"],
    placement: { avg: "₹7.5 LPA", top: "₹20 LPA", rate: "85% Placed" },
    eligibility: "Graduation 45% from any recognized university. No entrance exam."
  },

  {
    id: 8, slug: "ignou-mba",
    logo: "IGN", color: "#37474f",
    name: "IGNOU",
    location: "New Delhi (Pan-India)", program: "MBA", duration: "2–5 Years",
    fees: 31500, emi: "Semester-wise", established: 1985,
    accreditation: "Central University | NAAC A++ | UGC Approved",
    ranking: "World's Largest University",
    students: "3,00,000+",
    description: "IGNOU (Indira Gandhi National Open University) is a Central Government institution and the world's largest open university. Its MBA offers maximum flexibility (2 to 5 years), the lowest fees in India, and is the top choice for government employees, defense personnel, and students in remote areas.",
    highlights: [
      "Central Government university — maximum government job recognition",
      "Lowest fees in India: ₹31,500 for the complete MBA",
      "Flexible duration — complete in 2 to 5 years",
      "Study centers in every district across India",
      "Best option for government employees & defense personnel",
      "NAAC A++ — the highest accreditation in India"
    ],
    specializations: ["Finance","Human Resources","Marketing","Operations Management","Financial Management"],
    placement: { avg: "₹4.5 LPA", top: "₹12 LPA", rate: "Self-placed (60%)" },
    eligibility: "Graduation from any recognized university. OPENMAT entrance for some specializations."
  },

  /* ───────── BBA ───────── */
  {
    id: 9, slug: "vignan-online-bba",
    logo: "VU", color: "#1565c0",
    name: "Vignan Online",
    location: "Guntur, Andhra Pradesh", program: "BBA", duration: "3 Years",
    fees: 75000, emi: "₹2,100", established: 2011,
    accreditation: "NAAC A+ | UGC-DEB Approved",
    ranking: "Affordable Online BBA",
    students: "18,000+",
    description: "Vignan University Online offers one of the most affordable UGC-approved BBA programs in India. Designed for Class 12 graduates who want a recognized business foundation degree with flexibility to work, manage family, or prepare for further studies simultaneously.",
    highlights: [
      "Most affordable UGC-approved BBA in India",
      "Recognized for government jobs & further studies (MBA/MCA)",
      "Strong South India placement network",
      "Flexible exams across 100+ centers pan-India",
      "Merit and reserved-category scholarships available",
      "Covers Accounting, Marketing, HR & Entrepreneurship"
    ],
    specializations: ["Finance","Marketing","Human Resources","International Business","Entrepreneurship"],
    placement: { avg: "₹3.8 LPA", top: "₹9 LPA", rate: "72% Placed" },
    eligibility: "Class 12 pass from any board. No entrance exam required."
  },

  {
    id: 10, slug: "lpu-online-bba",
    logo: "LBB", color: "#4527a0",
    name: "LPU Online BBA",
    location: "Phagwara, Punjab", program: "BBA", duration: "3 Years",
    fees: 90000, emi: "₹2,500", established: 2013,
    accreditation: "NAAC A++ | UGC-DEB Approved",
    ranking: "NAAC A++ — Highest Grade",
    students: "22,000+",
    description: "LPU's online BBA is backed by its NAAC A++ accreditation and 700+ corporate partner network. It's an ideal entry-level business degree for fresh Class 12 students looking for a recognized, affordable, and placement-focused undergraduate business program.",
    highlights: [
      "NAAC A++ — highest accreditation for a BBA in India",
      "700+ corporate partners for entry-level job placement",
      "Industry-integrated curriculum with live case studies",
      "Strong placement in retail, banking & FMCG sectors",
      "Scholarship options for merit and financial need",
      "Pathway to LPU online MBA for career growth"
    ],
    specializations: ["Finance","Marketing","Human Resources","Retail Management","Entrepreneurship","International Business"],
    placement: { avg: "₹4.2 LPA", top: "₹10 LPA", rate: "78% Placed" },
    eligibility: "Class 12 pass from any recognized board. No entrance exam."
  },

  /* ───────── BCA ───────── */
  {
    id: 11, slug: "manipal-online-bca",
    logo: "MBC", color: "#4a148c",
    name: "Manipal Online BCA",
    location: "Manipal, Karnataka", program: "BCA", duration: "3 Years",
    fees: 120000, emi: "₹3,300", established: 2015,
    accreditation: "NAAC A+ | UGC-DEB Approved",
    ranking: "Top 3 Online BCA Programs",
    students: "22,000+",
    description: "Manipal Online BCA is one of the most recognized online BCA programs in India, combining the Manipal University brand with a hands-on, industry-aligned computer science curriculum. IT companies actively recruit Manipal BCA graduates into entry-level developer, QA, and data roles.",
    highlights: [
      "Manipal brand — IT companies actively recruit Manipal BCA grads",
      "Hands-on programming from Semester 1 (Python, Java, Web)",
      "Industry-certified courses in Cloud, AI & Web Dev",
      "Placement support for TCS, Infosys, Wipro, HCL & more",
      "Option to attend on-campus hackathons & tech fests",
      "Strong foundation for MCA or MBA (IT) after completion"
    ],
    specializations: ["Software Development","Data Analytics","Cloud Computing","Artificial Intelligence","Web Technologies","Database Management"],
    placement: { avg: "₹4.8 LPA", top: "₹13 LPA", rate: "82% Placed" },
    eligibility: "Class 12 from any board. Maths preferred but not mandatory. No entrance exam."
  },

  {
    id: 12, slug: "amity-online-bca",
    logo: "ABC", color: "#0A2463",
    name: "Amity Online BCA",
    location: "Noida, Uttar Pradesh", program: "BCA", duration: "3 Years",
    fees: 110000, emi: "₹3,100", established: 2012,
    accreditation: "NAAC A+ | UGC-DEB Approved",
    ranking: "#1 Online BCA Brand",
    students: "20,000+",
    description: "Amity's online BCA program is among India's most brand-recognized IT undergraduate degrees. With strong ties to the Delhi-NCR IT ecosystem and a focus on practical coding, it prepares students for software development, testing, and IT support roles in top companies.",
    highlights: [
      "Amity brand — most recognized for BCA in North India",
      "Practical coding curriculum: Python, C++, Java & Web Dev",
      "Access to Amity's 1.5 lakh+ alumni network",
      "Live mentoring sessions with software engineers",
      "Strong NCR placement network: IT companies & startups",
      "Pathway to Amity Online MCA for career advancement"
    ],
    specializations: ["Software Development","Web Development","Cybersecurity","Database Management","Mobile App Development","Data Science"],
    placement: { avg: "₹4.5 LPA", top: "₹12 LPA", rate: "80% Placed" },
    eligibility: "Class 12 from any recognized board. No entrance exam required."
  },

  /* ───────── MCA ───────── */
  {
    id: 13, slug: "lpu-online-mca",
    logo: "LMC", color: "#004d40",
    name: "LPU Online MCA",
    location: "Phagwara, Punjab", program: "MCA", duration: "2 Years",
    fees: 100000, emi: "₹4,200", established: 2013,
    accreditation: "NAAC A++ | UGC-DEB Approved",
    ranking: "Top MCA Program India",
    students: "28,000+",
    description: "LPU's online MCA is designed for BCA/BSc graduates who want to move into software engineering, data science, or IT management. NAAC A++ quality at an accessible price point, with advanced specializations in AI, ML, and Cloud that are among the best in India's online MCA landscape.",
    highlights: [
      "NAAC A++ — gold standard for MCA in India",
      "Advanced specializations: AI, ML & Cloud Computing",
      "Prepares for FAANG-style interviews & competitive IT roles",
      "700+ IT companies recruiting through LPU placement",
      "Industry-integrated projects with real client deliverables",
      "NAAC A++ degree valid for government IT & PSU jobs"
    ],
    specializations: ["Artificial Intelligence","Machine Learning","Cloud Computing","Cybersecurity","Data Science","Software Engineering","Mobile Computing"],
    placement: { avg: "₹6.0 LPA", top: "₹18 LPA", rate: "85% Placed" },
    eligibility: "BCA / BSc (IT or CS) or equivalent with 50% from a recognized university."
  },

  {
    id: 14, slug: "manipal-online-mca",
    logo: "MMC", color: "#bf360c",
    name: "Manipal Online MCA",
    location: "Manipal, Karnataka", program: "MCA", duration: "2 Years",
    fees: 130000, emi: "₹5,500", established: 2016,
    accreditation: "NAAC A+ | UGC-DEB Approved",
    ranking: "Top 5 Online MCA Programs",
    students: "15,000+",
    description: "Manipal Online MCA builds deep technical expertise in software development, cloud, and emerging tech. The Manipal brand is well-recognized by IT recruiters across Bengaluru, Hyderabad, and Pune tech hubs, giving graduates a meaningful edge in placements.",
    highlights: [
      "Manipal brand recognized by IT recruiters across India",
      "Specialization in Cloud, AI & Full-Stack Development",
      "Live coding bootcamps and capstone projects",
      "Strong placement in Bengaluru, Hyderabad & Pune IT hubs",
      "Optional on-campus tech immersion at Manipal",
      "Eligible for PSU and government IT jobs (UGC-DEB approved)"
    ],
    specializations: ["Full-Stack Development","Cloud Computing","Artificial Intelligence","Data Science","Cybersecurity","Software Testing & QA"],
    placement: { avg: "₹5.8 LPA", top: "₹16 LPA", rate: "83% Placed" },
    eligibility: "BCA / BSc (IT or CS) 50% from any recognized university. No entrance exam."
  }
];
