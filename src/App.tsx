import { useEffect, useState, type ReactNode } from "react";

const heroImage =
  "/nanotech.jpg";

type IconName =
  | "atom"
  | "layers"
  | "spark"
  | "shield"
  | "medicine"
  | "chip"
  | "leaf"
  | "energy"
  | "check"
  | "alert"
  | "user"
  | "arrow"
  | "menu"
  | "close";

const iconPaths: Record<IconName, ReactNode> = {
  atom: (
    <>
      <circle cx="12" cy="12" r="1.7" fill="currentColor" stroke="none" />
      <ellipse cx="12" cy="12" rx="9" ry="3.7" />
      <ellipse cx="12" cy="12" rx="9" ry="3.7" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="9" ry="3.7" transform="rotate(120 12 12)" />
    </>
  ),
  layers: (
    <>
      <path d="m12 3-9 5 9 5 9-5-9-5Z" />
      <path d="m3 12 9 5 9-5M3 16l9 5 9-5" />
    </>
  ),
  spark: (
    <>
      <path d="m12 2 1.4 5.1L18 10l-4.6 2.9L12 18l-1.4-5.1L6 10l4.6-2.9L12 2Z" />
      <path d="m19 16 .6 2.4L22 20l-2.4 1.6L19 24l-.6-2.4L16 20l2.4-1.6L19 16Z" />
    </>
  ),
  shield: <path d="M12 3 4.5 6v5.3c0 4.8 3.2 8 7.5 9.7 4.3-1.7 7.5-4.9 7.5-9.7V6L12 3Zm0 4v5m0 4h.01" />,
  medicine: (
    <>
      <path d="M7.5 20.5a4.95 4.95 0 0 1 0-7l6-6a4.95 4.95 0 0 1 7 7l-6 6a4.95 4.95 0 0 1-7 0Z" />
      <path d="m10.5 10.5 7 7M9 17h.01" />
    </>
  ),
  chip: (
    <>
      <rect x="6" y="6" width="12" height="12" rx="2" />
      <rect x="9" y="9" width="6" height="6" rx="1" />
      <path d="M9 2v4m6-4v4M9 18v4m6-4v4M2 9h4m-4 6h4m12-6h4m-4 6h4" />
    </>
  ),
  leaf: (
    <>
      <path d="M20.5 3.5C12 3.5 5 6.5 5 13a5.5 5.5 0 0 0 5.5 5.5c6.5 0 9.5-7 10-15Z" />
      <path d="M3.5 21c3-5 7-8.5 12.5-11" />
    </>
  ),
  energy: (
    <>
      <path d="M13.5 2 5 14h7l-1.5 8L19 10h-7l1.5-8Z" />
    </>
  ),
  check: <path d="m5 12 4.5 4.5L19 7" />,
  alert: (
    <>
      <path d="M10.3 4.3 2.8 18a2 2 0 0 0 1.8 3h14.8a2 2 0 0 0 1.8-3L13.7 4.3a2 2 0 0 0-3.4 0Z" />
      <path d="M12 9v4m0 4h.01" />
    </>
  ),
  user: (
    <>
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5 21a7 7 0 0 1 14 0" />
    </>
  ),
  arrow: <path d="M5 12h14m-5-5 5 5-5 5" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="m6 6 12 12M18 6 6 18" />,
};

function Icon({ name, size = "normal" }: { name: IconName; size?: "small" | "normal" }) {
  return (
    <svg
      className={size === "small" ? "icon icon--small" : "icon"}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {iconPaths[name]}
    </svg>
  );
}

const navItems = [
  ["Home", "#home"],
  ["Applications", "#applications"],
  ["Articles", "#/articles"],
  ["Case Studies", "#/case-studies"],
  ["Ethical Issues", "#/ethics"],
  ["Nano Challenge", "#/challenge"],
  ["References", "#/references"],
  ["Editorial Team", "#team"],
];

const discoveries: { icon: IconName; label: string; title: string; text: string }[] = [
  {
    icon: "atom",
    label: "01 / FOUNDATIONS",
    title: "Understanding Nanotechnology",
    text: "Learn about the nanoscale, nanoparticles, and the core ideas behind this emerging field.",
  },
  {
    icon: "layers",
    label: "02 / IMPACT",
    title: "Real-World Applications",
    text: "See how nanoscale science is advancing medicine, electronics, environmental protection, and energy.",
  },
  {
    icon: "spark",
    label: "03 / PROGRESS",
    title: "Benefits & Innovations",
    text: "Explore how precise material design can contribute to scientific and technological breakthroughs.",
  },
  {
    icon: "shield",
    label: "04 / RESPONSIBILITY",
    title: "Risks & Challenges",
    text: "Understand the health, environmental, ethical, and economic questions researchers are studying.",
  },
];

const applications: { icon: IconName; number: string; title: string; text: string; tag: string }[] = [
  {
    icon: "medicine",
    number: "01",
    title: "Medicine",
    text: "Researchers are exploring targeted drug delivery, sharper medical imaging, and more sensitive diagnostic methods.",
    tag: "Precision healthcare",
  },
  {
    icon: "chip",
    number: "02",
    title: "Electronics",
    text: "Nanoscale materials help engineers develop smaller, faster, and more energy-efficient electronic components.",
    tag: "Smarter systems",
  },
  {
    icon: "leaf",
    number: "03",
    title: "Environment",
    text: "Nanotechnology may support water purification, pollution detection, and precise environmental monitoring.",
    tag: "Cleaner resources",
  },
  {
    icon: "energy",
    number: "04",
    title: "Energy",
    text: "Nanomaterials are being studied to improve solar cells, battery performance, and long-term energy storage.",
    tag: "Efficient power",
  },
];

const benefits = [
  "Advances in medical research and healthcare",
  "Innovative, lighter, and stronger materials",
  "More efficient energy technologies",
  "Potential solutions for environmental problems",
];

const risks = [
  "Possible health and environmental effects",
  "High research and production costs",
  "Safe handling and disposal challenges",
  "Need for research, regulation, and oversight",
];

function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
}) {
  return (
    <div className={`section-heading ${centered ? "section-heading--centered" : ""}`}>
      <p className="eyebrow">
        <span />
        {eyebrow}
      </p>
      <h2>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="site-shell">
      <header className="navbar">
        <a className="brand" href="#home" aria-label="Nano World home">
          <span className="brand-mark">
            <Icon name="atom" size="small" />
          </span>
          <span>NANO<span>SCOPE</span></span>
        </a>

        <nav className={`nav-links ${menuOpen ? "nav-links--open" : ""}`} aria-label="Main navigation">
          {navItems.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
        </nav>

        <a className="nav-cta" href="#about">
          Start exploring
          <Icon name="arrow" size="small" />
        </a>

        <button
          className="menu-button"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <Icon name={menuOpen ? "close" : "menu"} />
        </button>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-orbit hero-orbit--one" />
          <div className="hero-orbit hero-orbit--two" />
          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow">
              <span />
              SCIENCE AT 10<sup>−9</sup> METERS
            </p>
            <h1>
              Exploring the World of <span>Nanotechnology</span>
            </h1>
            <p className="hero-intro">
              “Nanotechnology: Small Particles, Big Questions About Safety and Equality”
            </p>
            <div className="hero-actions">
              <a className="button button--primary" href="#about">
                Explore nanotechnology
                <Icon name="arrow" size="small" />
              </a>
              <a className="button button--ghost" href="#applications">
                Discover its applications
              </a>
            </div>
            <div className="hero-stat-row">
              <div>
                <strong>1–100</strong>
                <span>nanometer range</span>
              </div>
              <div>
                <strong>10<sup>−9</sup></strong>
                <span>meters in a nanometer</span>
              </div>
              <div>
                <strong>∞</strong>
                <span>possibilities to explore</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-frame">
              <img src={heroImage} alt="Abstract blue structures representing nanoscale materials" />
              <div className="visual-overlay" />
              <div className="scan-line" />
              <span className="corner corner--tl" />
              <span className="corner corner--tr" />
              <span className="corner corner--bl" />
              <span className="corner corner--br" />
              <div className="visual-label">
                <span className="pulse-dot" />
                NANOSCALE IMAGING
                <strong>ACTIVE</strong>
              </div>
              <div className="particle-tag particle-tag--one">Au</div>
              <div className="particle-tag particle-tag--two">C₆₀</div>
              <div className="particle-tag particle-tag--three">Si</div>
            </div>
            <p className="photo-credit"></p>
          </div>

          <a className="scroll-hint" href="#about">
            <span>SCROLL TO DISCOVER</span>
            <i />
          </a>
        </section>

               <section className="about section" id="about">
          <div className="about-visual">
            <div className="scale-panel topic-panel">
              <div className="scale-topline">
                <span>THE BIGGER PICTURE</span>
                <span>NANOSCOPE · 2026</span>
              </div>

              <div className="topic-panel__intro">
                <span className="topic-panel__icon">
                  <Icon name="atom" />
                </span>

                <p className="eyebrow">SCIENCE AT THE NANOSCALE</p>

                <h3>
                  Small Particles.
                  <br />
                  Big Responsibilities.
                </h3>

                <p>
                  Nanotechnology creates new possibilities, but its impact
                  must be considered beyond the laboratory.
                </p>
              </div>

              <div className="topic-panel__items">
                <div className="topic-panel__item">
                  <span className="topic-panel__number">01</span>
                  <div>
                    <strong>Scientific Innovation</strong>
                    <p>
                      Explore new materials and technologies.
                    </p>
                  </div>
                   <span aria-hidden="true">🔬</span>
                </div>

                <div className="topic-panel__item">
                  <span className="topic-panel__number">02</span>
                  <div>
                    <strong>Human & Environmental Safety</strong>
                    <p>
                      Understand possible risks and long-term effects.
                    </p>
                  </div>
                 <span aria-hidden="true">🛡️</span>
                </div>

                <div className="topic-panel__item">
                  <span className="topic-panel__number">03</span>
                  <div>
                    <strong>Ethics & Equal Access</strong>
                    <p>
                      Promote fairness and responsible development.
                    </p>
                  </div>
                 <span aria-hidden="true">⚖️</span>
                </div>
              </div>

              <div className="topic-panel__footer">
                <Icon name="leaf" />
                <p>
                  <strong>Our guiding question</strong>
                  How can we advance science while protecting people and
                  the planet?
                </p>
              </div>
            </div>
          </div>

          <div className="about-copy">
            <SectionHeading eyebrow="START WITH THE BASICS" title="What Is Nanotechnology?" />
            <p className="lead">
                   Nanotechnology involves working with materials at an extremely small scale, generally between <strong>1 to 100 nanometers.</strong> 
            </p>
            <p>
             It offers promising applications in medicine, agriculture, electronics, and environmental protection. However, these advancements also raise important questions about human health, environmental safety, and equal access to technology.
            </p>
            <div className="info-chip">
              <p><strong>Why it matters</strong>NanoScope explores these issues to help readers understand why scientific progress must be supported by responsible research, proper safety measures, and fairness for all.</p>
            </div>
          </div>
        </section>

        <section className="discover section" id="discover">
          <SectionHeading
            eyebrow="YOUR LEARNING MAP"
            title="What You’ll Discover"
            description="Four essential perspectives for understanding the promise and responsibility of nanotechnology."
            centered
          />
          <div className="discover-grid">
            {discoveries.map((item) => (
              <article className="discover-card" key={item.title}>
                <div className="card-icon"><Icon name={item.icon} /></div>
                <p className="card-label">{item.label}</p>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <a href={item.icon === "layers" ? "#applications" : item.icon === "shield" ? "#/ethics" : item.icon === "spark" ? "#/headline" : "#about"}>
                  Learn more <Icon name="arrow" size="small" />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="applications section" id="applications">
          <div className="applications-header">
            <SectionHeading
              eyebrow="FROM LAB TO LIFE"
              title="Nanotechnology in Our World"
              description="Small-scale science is opening new approaches across the systems we rely on every day."
            />
            <div className="applications-marker"><Icon name="atom" /> 04 FIELDS</div>
          </div>
          <div className="application-grid">
            {applications.map((item) => (
              <article className="application-card" key={item.title}>
                <span className="application-number">{item.number}</span>
                <div className="application-icon"><Icon name={item.icon} /></div>
                <p className="application-tag">{item.tag}</p>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <span className="card-line" />
              </article>
            ))}
          </div>
        </section>

        <section className="balance section" id="benefits">
          <SectionHeading
            eyebrow="A BALANCED PERSPECTIVE"
            title="Benefits and Challenges"
            description="Responsible innovation means examining what nanotechnology can achieve—and the questions we must answer along the way."
            centered
          />
          <div className="balance-grid">
            <article className="balance-card balance-card--benefits">
              <div className="balance-card-header">
                <div className="balance-icon"><Icon name="spark" /></div>
                <div>
                  <p>THE PROMISE</p>
                  <h3>Potential Benefits</h3>
                </div>
              </div>
              <ul>
                {benefits.map((item) => (
                  <li key={item}><span><Icon name="check" size="small" /></span>{item}</li>
                ))}
              </ul>
            </article>
            <div className="balance-divider">
              <span>AND</span>
            </div>
            <article className="balance-card balance-card--risks">
              <div className="balance-card-header">
                <div className="balance-icon"><Icon name="alert" /></div>
                <div>
                  <p>THE QUESTIONS</p>
                  <h3>Risks & Challenges</h3>
                </div>
              </div>
              <ul>
                {risks.map((item) => (
                  <li key={item}><span><Icon name="alert" size="small" /></span>{item}</li>
                ))}
              </ul>
            </article>
          </div>
          <p className="responsibility-note">
            <Icon name="shield" size="small" />
            Responsible development depends on evidence, transparent regulation, and continued research.
          </p>
        </section>

       
        {/* ADVERTISEMENT SECTION */}
        <section className="advertisement-section section" id="advertisement">
          <div className="advertisement-card">
            <div className="advertisement-header">
            
            </div>

            <div className="advertisement-content">
              <img
                className="advertisement-image"
                src="/advertisement-nanotechnology.png"
                alt="NanoScope advertisement about nanotechnology safety"
              />
            </div>
          </div>
        </section>

       
<section className="team section" id="team">
  <div className="team-centered-intro">
    <SectionHeading
      eyebrow="BEHIND THE RESEARCH"
      title="Meet the Editorial Team"
    />

    <p className="team-description">
      A collaborative student team committed to making complex science
      clear, balanced, and accessible.
    </p>

    <div className="team-line" />
    <span className="team-board-label">EDITORIAL BOARD · 2026</span>
  </div>

  <div className="team-group-photo">
    <img
      src="/teampic.jpg"
      alt="NanoScope editorial team group photo"
      loading="lazy"
    />
    <p className="team-group-caption">
     Curious Minds. Shared Vision. Exploring the World of Nanotechnology.
    </p>
  </div>

  <div className="team-members-heading">
    <h3>Meet Our Members</h3>
    <p>The people behind our research, design, and stories.</p>
  </div>

  <div className="team-grid">
    {[
      {
        name: "Abea, John Jacob N.",
        role: "Researcher & Journalist",
        image: "/team/abea.png",
      },
      {
        name: "Acuña, Jack Nathan T.",
        role: "Researcher, User Interface (UI) Designer & Journalist",
        image: "/team/acuna.jpg",
      },
      {
        name: "Arao, Jonnah Myla L.",
        role: "Website Project Manager, Researcher & Journalist",
        image: "/team/arao.jpg",
      },
      {
        name: "Aurelio, Steven E.",
        role: "Researcher, User Interface (UI) Designer",
        image: "/team/aurelio.jpg",
      },
      {
        name: "Cruzado, Sheena A.",
        role: "Researcher",
        image: "/team/cruzado.jpg",
      },
      {
        name: "Gelig, Cherry Ann C.",
        role: "User Interface (UI) Designer & Developer",
        image: "/team/gelig.png",
      },
      {
        name: "Ibias, John Cedrick G.",
        role: "Researcher & Journalist",
        image: "/team/ibias.jpg",
      },
      {
        name: "Villen, Anthony Kim",
        role: "Researcher",
        image: "/team/villen.jpg",
      },
    ].map((member, index) => (
      <article className="member-card" key={member.name}>
        <div className="avatar">
          <img
            className="member-photo"
            src={member.image}
            alt={member.name}
            loading="lazy"
          />
          <span>{String(index + 1).padStart(2, "0")}</span>
        </div>

        <div className="member-info">
          <h3>{member.name}</h3>
          <p>{member.role}</p>
        </div>
      </article>
    ))}
  </div>
</section>


        <section className="closing section">
          <div className="closing-orbit" />
          <div className="closing-content">
            <p className="eyebrow"><span /> THE FUTURE STARTS SMALL <span /></p>
            <h2>Think Small.<br /><span>Discover Big Possibilities.</span></h2>
            <p>
              Explore how understanding the smallest structures can lead to meaningful innovations and discoveries that shape our future.
            </p>
            <a className="button button--primary" href="#about">
              Start exploring <Icon name="arrow" size="small" />
            </a>
          </div>
        </section>
      </main>

      <footer>
        <a className="brand" href="#home">
          <span className="brand-mark"><Icon name="atom" size="small" /></span>
          <span>NANO<span>SCOPE</span></span>
        </a>
        <p>Exploring the science of the small.</p>
        <p>© 202 NANO scope · Educational Project</p>
      </footer>
    </div>
  );
}

type Source = {
  id: string;
  organization: string;
  title: string;
  date: string;
  url: string;
  note: string;
};



const sources: Source[] = [
  {
    id: "unimelb-nano-drug-delivery",
    organization: "University of Melbourne",
    title: "Nano drug delivery system heralds safer era for drug development",
    date: "",
    url: "https://eng.unimelb.edu.au/ingenium/health-technologies/nano-drug-delivery-system-heralds-safer-era-for-drug-development",
    note: "Reference on nanotechnology-based drug delivery and safer drug development.",
  },
  {
    id: "cancer-nanomedicine",
    organization: "RSC Advances",
    title: "Cancer nanomedicine: A review of nano-therapeutics and challenges ahead",
    date: "2023",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10013677/",
    note: "Nirmala, M. J., Kizhuveetil, U., Johnson, A., Balaji, G., Nagarajan, R., & Muthuvijayan, V. (2023). RSC Advances, 13, 8606–8629.",
  },
  {
    id: "ethical-nanomedicine",
    organization: "Signal Transduction and Targeted Therapy",
    title: "Current advance of nanotechnology in diagnosis and treatment for malignant tumors",
    date: "2024",
    url: "https://www.nature.com/articles/s41392-024-01889-y",
    note: "Wang, B., et al. (2024). Signal Transduction and Targeted Therapy, 9, Article 200.",
  },
  {
    id: "taiwan-water-treatment",
    organization: "Environmental Monitoring and Assessment",
    title: "Ti-containing NPs in raw water and their removal with conventional treatments in four water treatment plants in Taiwan",
    date: "2024",
    url: "https://pubmed.ncbi.nlm.nih.gov/38662019/",
    note: "Chung, C.-H., Wang, G.-S., Chen, Y.-T., Chen, J.-A., & Hwang, Y.-H. (2024). Environmental Monitoring and Assessment, 196(5), Article 476.",
  },
  {
    id: "water-disinfection-biofilm",
    organization: "Discover Nano",
    title: "Nanotechnology for water disinfection and biofilm control: Mechanisms, applications, and future outlook",
    date: "2026",
    url: "https://doi.org/10.1186/s11671-026-04632-4",
    note: "El-Liethy, M. A., Hemdan, B. A., & El-Taweel, G. E. (2026). Discover Nano, 21, Article 207.",
  },
  {
    id: "environmental-implications-nanotechnology",
    organization: "Nanomaterials",
    title: "Environmental Implications Associated with the Development of Nanotechnology: From Synthesis to Disposal",
    date: "2022",
    url: "https://doi.org/10.3390/nano12234319",
    note: "Dos Santos, O. A. L., Backx, B. P., Abumousa, R. A., & Bououdina, M. (2022). Nanomaterials, 12(23), Article 4319.",
  },
  {
    id: "water-purification-carbon-nanomaterials",
    organization: "Membranes",
    title: "Recent Advances on Membranes for Water Purification Based on Carbon Nanomaterials",
    date: "2022",
    url: "https://www.mdpi.com/2077-0375/12/10/915",
    note: "Lazarenko, N. S., Golovakhin, V. V., Shestakov, A. A., Lapekin, N. I., & Bannov, A. G. (2022). Membranes, 12(10), Article 915.",
  },
  {
    id: "ethical-nanomedical-innovations",
    organization: "Frontiers in Genetics",
    title: "Ethical and legal challenges in nanomedical innovations: A scoping review",
    date: "2023",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10213273/",
    note: "Wasti, S., Lee, I. H., Kim, S., Lee, J.-H., & Kim, H. (2023). Frontiers in Genetics, 14, Article 1163392.",
  },
  {
    id: "cancer-nanoparticle-treatment",
    organization: "Drug Discovery & Development",
    title: "Nanoparticle-based cancer treatment: A look at its origins and what's next",
    date: "2018",
    url: "https://www.drugdiscoverytrends.com/nanoparticle-based-cancer-treatment-a-look-at-its-origins-and-whats-next/",
    note: "Panjwani, L. (2018, February 28). Article discussing nanoparticle-based cancer treatments, including Doxil and Abraxane.",
  },
];

type Article = {
  slug: string;
  title: string;
  category: string;
  preview: string;
  image: string;
  imageAlt: string;
  readTime: string;
  sourceIds: string[];
  sections: { heading: string; paragraphs: string[] }[];
};

const articleImages = {
  medicine:
    "https://media.springernature.com/lw685/springer-static/image/art%3A10.1186%2Fs11671-026-04632-4/MediaObjects/11671_2026_4632_Fig4_HTML.png?",
  environment:
    "https://mdpi-res.com/membranes/membranes-12-00915/article_deploy/html/images/membranes-12-00915-g013.png?1663906524",
  electronics:
    "https://www.azonano.com/image-handler/ts/20240821100450/ri/950/src/images/Article_Images/ImageForArticle_1705_17242490894138292.jpg",
  ethics:
    "https://media.springernature.com/lw685/springer-static/image/art%3A10.1186%2Fs11671-026-04632-4/MediaObjects/11671_2026_4632_Fig4_HTML.png?",
  future:
    "https://mdpi-res.com/nanomaterials/nanomaterials-12-04319/article_deploy/html/images/nanomaterials-12-04319-g001.png?1670248892",
};
 
const articles: Article[] = [
  {
    slug: "medicine",
    title:
      "Advancing Cancer Treatment Through Nanomedicine and Addressing Its Benefits and Challenges",
    category: "HEALTHCARE",
    preview:
      "Nanomedicine has become an important area of cancer research because conventional cancer treatments can cause significant side effects and may not always deliver drugs specifically to cancer cells.",
    image: "cancer.jpg",
    imageAlt: "cancer.jpg",
    readTime: "6 MIN READ",
    sourceIds: ["cancer-nanomedicine"],
    sections: [
      {
        heading:
          "Advancing Cancer Treatment Through Nanomedicine and Addressing Its Benefits and Challenges",
        paragraphs: [
          "Nanomedicine has become an important area of cancer research because conventional cancer treatments can cause significant side effects and may not always deliver drugs specifically to cancer cells. According to a review published in RSC Advances, nanomedicine offers potential advantages through improved targeting, drug bioavailability, and reduced toxicity. Nanoparticles can be designed to carry anticancer drugs and reach tumor sites through passive or active targeting mechanisms.",
          "One of the major applications of nanomedicine is targeted drug delivery. Nanoparticles can transport established anticancer medicines while modifying how the drugs circulate and accumulate in the body. Liposomes, polymeric nanoparticles, solid lipid nanoparticles, nanoemulsions, and other nanocarriers have been investigated for delivering cancer treatments. The development of these technologies has also resulted in some nanomedicines reaching clinical use, while many others continue to be evaluated in clinical trials.",
          "Nanotechnology is also being investigated beyond drug delivery. Nanoparticles can potentially support cancer diagnosis, medical imaging, and radiation therapy. For example, different types of nanoparticles are being studied as imaging agents and diagnostic tools, while other nanomaterials are being investigated for use with radiation-based cancer treatments. This demonstrates that nanomedicine can combine several functions, including detecting tumors and delivering or enhancing treatment.",
          "Despite its potential, cancer nanomedicine still faces several challenges. Researchers must address difficulties involving tumor biology, nanoparticle toxicity, manufacturing, reproducibility, scalability, cost, and regulatory requirements. The complex structure of nanoparticles can also make it difficult to predict their interactions with biological systems and consistently reproduce their effects. In addition, nanoparticles must overcome biological barriers to reach and penetrate tumors effectively.",
          "Overall, nanomedicine represents a promising development in cancer treatment because it aims to make therapies more targeted and effective while potentially reducing unwanted effects on healthy tissues. However, continued research, clinical testing, improved manufacturing methods, and careful safety evaluation are necessary before many emerging nanomedicines can become widely available treatments.",
        ],
      },
    ],
  },
  {
    slug: "water-purification",
    title:
      "Transforming Water Purification Through Nanotechnology While Addressing Environmental Challenges",
    category: "ENVIRONMENT",
    preview:
      "Nanotechnology is being explored as a way to improve water purification because conventional filtration systems may face challenges when removing certain pollutants.",
    image: articleImages.environment,
    imageAlt: "Laboratory materials used for environmental testing",
    readTime: "6 MIN READ",
    sourceIds: ["water-purification"],
    sections: [
      {
        heading:
          "Transforming Water Purification Through Nanotechnology While Addressing Environmental Challenges",
        paragraphs: [
          "Nanotechnology is being explored as a way to improve water purification because conventional filtration systems may face challenges when removing certain pollutants. According to a review published in Membranes, carbon-based nanomaterials, including carbon nanotubes and graphene-based materials, have potential applications in water purification. Their physical and chemical properties make them promising materials for developing improved filtration membranes.",
          "One important application is the development of membranes made with carbon nanomaterials. These membranes are designed to separate unwanted substances from water while allowing water to pass through. Researchers have investigated materials such as graphene oxide, carbon nanotubes, and carbon nanofibers to improve membrane performance. Depending on their structure and design, these materials may help improve the removal of contaminants during water treatment.",
          "Nanomaterial-based membranes are also being studied for applications involving water desalination, which removes salts from seawater or other saline water sources. Improving membrane performance could help make purification processes more effective. However, the results depend on the membrane's properties, the type of water being treated, and the operating conditions. More research is needed to determine how well these technologies perform in large-scale water treatment systems.",
          "Despite their potential, carbon nanomaterials also present challenges. Researchers need to consider production costs, membrane durability, possible contamination from released nanomaterials, and the difficulty of scaling up laboratory technologies. Evaluating the environmental effects and safety of these materials is important before they are widely used in water purification.",
          "Overall, carbon-based nanomaterials offer promising opportunities for improving water filtration and desalination. However, further research is necessary to establish their long-term performance, safety, affordability, and suitability for practical use. Responsible development can help ensure that these technologies contribute to cleaner water without creating additional environmental risks.",
        ],
      },
    ],
  },
  {
    slug: "ethical-nanomedicine",
    title:
      "Addressing Ethical and Legal Challenges in Nanomedicine to Protect Patient Safety and Rights",
    category: "ETHICS",
    preview:
      "Nanotechnology has become an important part of medical research because it can help improve the detection, diagnosis, and treatment of diseases.",
    image: articleImages.ethics,
    imageAlt: "Researcher working in a technology laboratory",
    readTime: "6 MIN READ",
    sourceIds: ["ethical-nanomedicine"],
    sections: [
      {
        heading:
          "Addressing Ethical and Legal Challenges in Nanomedicine to Protect Patient Safety and Rights",
        paragraphs: [
          "Nanotechnology has become an important part of medical research because it can help improve the detection, diagnosis, and treatment of diseases. Nanomedicine uses nanotechnology in healthcare to develop new ways of examining and treating patients. However, its development also raises ethical and legal concerns that need to be considered. According to Wasti et al. (2023), researchers must consider the possible risks and responsibilities involved in developing and using nanomedical technologies.",
          "One important ethical issue is human health and safety. Because nanomaterials are extremely small, they may interact with the human body differently from larger materials. The researchers explained that some nanomaterials may cause harmful effects, depending on their type and exposure. For this reason, proper testing and safety evaluations are important before these technologies are widely used in medical treatments.",
          "Another concern is informed consent. People who participate in medical research should receive clear information about the purpose of the study, its possible risks, and its expected benefits. This helps them make informed decisions about joining the research. Privacy is also important because some nanomedical technologies can collect health information. Researchers and healthcare professionals must handle personal information responsibly and respect the rights of patients.",
          "Access to nanomedical treatments is another ethical concern. Some advanced medical technologies may be expensive, making them difficult for certain individuals or communities to afford. This can create unfair differences in access to healthcare. The researchers emphasized the importance of considering regulations and responsible practices to address these challenges and help make medical innovations more accessible.",
          "Overall, nanomedicine offers promising opportunities to improve healthcare, but its development must also consider human safety, informed consent, privacy, and fair access. Researchers, healthcare professionals, and policymakers should work together to establish appropriate safety standards and regulations. By addressing these ethical and legal concerns, nanotechnology can be developed more responsibly for the benefit of society.",
        ],
      },
    ],
  },
  {
    slug: "water-disinfection",
    title:
      "Improving Water Safety Through Nanotechnology for Effective Disinfection and Biofilm Control",
    category: "ENVIRONMENT",
    preview:
      "Nanotechnology is being explored as an approach to improve water disinfection and reduce the spread of microorganisms in water systems.",
    image: articleImages.electronics,
    imageAlt: "Water research materials in a laboratory",
    readTime: "6 MIN READ",
    sourceIds: ["water-disinfection-biofilm"],
    sections: [
      {
        heading:
          "Improving Water Safety Through Nanotechnology for Effective Disinfection and Biofilm Control",
        paragraphs: [
          "Nanotechnology is being explored as an approach to improve water disinfection and reduce the spread of microorganisms in water systems. According to a review published in Discover Nano in 2026, researchers are studying nanomaterials as possible tools for controlling waterborne pathogens. This research is important because safe water is essential for protecting public health, while conventional disinfection methods may have limitations, including the formation of unwanted chemical by-products.",
          "One potential application is the use of nanoparticles with antimicrobial properties. Certain nanomaterials are being investigated for their ability to affect bacteria and other microorganisms in contaminated water. Their effectiveness can depend on factors such as particle size, surface properties, concentration, and the type of microorganism being targeted. Researchers are examining how these properties could support the development of improved water disinfection technologies.",
          "Another area of research is biofilm control. Biofilms are communities of microorganisms that attach to surfaces and form protective layers, including inside water pipes and treatment systems. These layers can make microbial control more difficult. Nanotechnology-based approaches are being studied for their potential to limit biofilm formation and improve the hygiene and performance of water treatment equipment.",
          "Despite these potential benefits, nanotechnology-based disinfection still faces challenges. Some nanomaterials may have unwanted effects on human health or aquatic organisms if they are released into the environment. Researchers must also investigate their long-term safety, effectiveness under real-world conditions, production costs, and potential for reuse. These concerns must be addressed before the technologies can be adopted widely.",
          "Overall, nanotechnology may offer new ways to improve water disinfection and control microbial contamination. However, more research is needed to confirm its safety, reliability, and suitability for large-scale use. Responsible development and environmental monitoring are essential to ensure that these technologies help protect public health without creating additional risks.",
        ],
      },
    ],
  },
  {
    slug: "environmental-risks",
    title:
      "Examining the Environmental Risks of Nanotechnology from Nanomaterial Production to Disposal",
    category: "ENVIRONMENT",
    preview:
      "Nanotechnology has many applications in medicine, agriculture, and environmental cleanup. However, the production and use of nanomaterials can also create concerns about human health and the environment.",
    image: articleImages.future,
    imageAlt: "Scientific research related to environmental safety",
    readTime: "5 MIN READ",
    sourceIds: ["environmental-implications-nanotechnology"],
    sections: [
      {
        heading:
          "Examining the Environmental Risks of Nanotechnology from Nanomaterial Production to Disposal",
        paragraphs: [
          "Nanotechnology has many applications in medicine, agriculture, and environmental cleanup. However, the production and use of nanomaterials can also create concerns about human health and the environment. Dos Santos and colleagues (2022) reviewed the possible risks associated with nanomaterials throughout their life cycle, from manufacturing and product development to use and disposal.",
          "One important concern is the possible toxicity of nanomaterials. Their effects can vary depending on factors such as size, shape, and chemical properties. These differences make it important to study each material carefully instead of assuming that all nanomaterials have the same effects.",
          "Another concern is environmental protection. Nanomaterials may enter the environment during production, product use, or disposal. Their interactions with soil, water, plants, and living organisms need to be understood to reduce potential harm. Responsible handling and proper waste management can help address these concerns.",
          "The researchers also discussed risk management, recycling, and regulations. These are important because nanotechnology should be developed in ways that consider both its benefits and its possible risks. More research and appropriate safety guidelines can help researchers and manufacturers make responsible decisions.",
          "Overall, nanotechnology offers many useful opportunities, but its development requires careful attention to human health and environmental safety. Understanding the risks throughout the life cycle of nanomaterials can help support safer products, better waste management, and more responsible use of this technology.",
        ],
      },
    ],
  },
];


const quizQuestions = [
  {
    question: "What range is commonly used to describe the nanoscale?",
    options: ["1–100 nanometers", "1–100 millimeters", "1–100 centimeters", "1–100 meters"],
    answer: 0,
    explanation: "The NNI commonly defines nanotechnology around dimensions of approximately 1–100 nanometers.",
  },
  {
    question: "Why can a material behave differently at the nanoscale?",
    options: ["It becomes weightless", "Surface and quantum effects can become more important", "It stops interacting with light", "Every nanomaterial becomes magnetic"],
    answer: 1,
    explanation: "A high surface-area-to-volume ratio and, in some cases, quantum effects can change optical, electrical, or chemical behavior.",
  },
  {
    question: "Which is a studied medical use of nanotechnology?",
    options: ["Targeted drug delivery", "Replacing all surgery", "Guaranteed cancer prevention", "Instant tissue regeneration"],
    answer: 0,
    explanation: "Nanocarriers are studied and used in specific products to influence drug delivery; the other claims are unsupported absolutes.",
  },
  {
    question: "Which factor can influence a nanomaterial’s safety?",
    options: ["Only its color", "Only its price", "Size, shape, coating, dose, and exposure route", "The word “nano” alone"],
    answer: 2,
    explanation: "Risk assessment is material- and context-specific, including physical properties, dose, and route of exposure.",
  },
  {
    question: "What does responsible innovation encourage?",
    options: ["Ignoring uncertainty", "Safety research, public dialogue, and accountability", "Releasing every product immediately", "Keeping methods secret"],
    answer: 1,
    explanation: "Responsible innovation anticipates impacts, includes affected groups, and responds to evidence throughout a technology’s life cycle.",
  },
  {
    question: "Why should environmental studies consider a product’s full life cycle?",
    options: ["Nanomaterials disappear after use", "Impacts can occur during production, use, recycling, or disposal", "Only packaging matters", "It makes products look greener"],
    answer: 1,
    explanation: "Exposure and environmental release can differ across sourcing, manufacture, use, and end-of-life stages.",
  },
  {
    question: "How might nanosensors create a privacy concern?",
    options: ["They are always visible", "Small connected sensors may collect data unobtrusively", "They cannot store information", "They make passwords unnecessary"],
    answer: 1,
    explanation: "Highly compact sensing systems can make collection less noticeable, increasing the need for consent, security, and limits on use.",
  },
  {
    question: "What is an equity concern connected to nanotechnology?",
    options: ["All benefits will be free", "Access may be limited by cost and infrastructure", "Every country has identical capacity", "Innovation never affects employment"],
    answer: 1,
    explanation: "Cost, patents, infrastructure, and research capacity can shape who receives benefits and who carries burdens.",
  },
  {
    question: "Which statement best distinguishes hazard from risk?",
    options: ["They always mean the same thing", "Risk considers hazard together with exposure", "Hazard means a product is illegal", "Risk can never be reduced"],
    answer: 1,
    explanation: "A hazardous property does not by itself determine real-world risk; the likelihood and level of exposure also matter.",
  },
  {
    question: "Which claim is most scientifically responsible?",
    options: ["All nanotechnology is safe", "All nanotechnology is dangerous", "Evidence should be assessed for each material and use", "Safety testing is unnecessary"],
    answer: 2,
    explanation: "Nanotechnology covers diverse materials and applications, so evidence must be evaluated case by case.",
  },
];

const routeNav = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Applications", "#applications"],
  ["Articles", "#/articles"],
  ["Case Studies", "#/case-studies"],
  ["Ethical Issues", "#/ethics"],
  ["Nano Challenge", "#/challenge"],
  ["References", "#/references"],
  ["Editorial Team", "#team"],
];

function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="navbar navbar--page">
      <a className="brand" href="#home" aria-label="Nano World home">
        <span className="brand-mark"><Icon name="atom" size="small" /></span>
        <span>NANO<span>SCOPE</span></span>
      </a>
      <nav className={`nav-links ${menuOpen ? "nav-links--open" : ""}`} aria-label="Main navigation">
        {routeNav.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
        ))}
      </nav>
      <a className="nav-cta" href="#/challenge">Take the challenge <Icon name="arrow" size="small" /></a>
      <button className="menu-button" type="button" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
        <Icon name={menuOpen ? "close" : "menu"} />
      </button>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer>
      <a className="brand" href="#home">
        <span className="brand-mark"><Icon name="atom" size="small" /></span>
        <span>NANO<span>SCOPE</span></span>
      </a>
      <p>Evidence first. Innovation with responsibility.</p>
      <p>© 2026 NANO SCOPE · STS Educational Project</p>
    </footer>
  );
}

function PageHero({ eyebrow, title, intro }: { eyebrow: string; title: string; intro: string }) {
  return (
    <section className="page-hero">
      <div className="page-hero__grid" aria-hidden="true" />
      <div className="page-hero__content">
        <p className="eyebrow"><span />{eyebrow}</p>
        <h1>{title}</h1>
        <p>{intro}</p>
      </div>
      <div className="page-index" aria-hidden="true">10<sup>−9</sup></div>
    </section>
  );
}

function PageLayout({ children }: { children: ReactNode }) {
  return <div className="site-shell page-shell"><SiteHeader /><main>{children}</main><SiteFooter /></div>;
}

function SourceLinks({ ids }: { ids: string[] }) {
  return (
    <div className="inline-sources">
      <p>SOURCES USED IN THIS ARTICLE</p>
      {ids.map((id, index) => {
        const source = sources.find((item) => item.id === id);
        return source ? <a href={source.url} target="_blank" rel="noreferrer" key={id}>[{index + 1}] {source.organization}: {source.title}</a> : null;
      })}
    </div>
  );
}

function AdBanner() {
  return (
    <aside className="ad-banner" aria-label="Sample educational advertisement">
      <div className="ad-orbit"><Icon name="atom" /></div>
      <div>
        <span></span>
        <h2>Small Science, Big Questions</h2>
        <p>Test what you've learned about nanotechnology, its applications, benefits, and risks.</p>
      </div>
      <a className="button button--primary" href="#/challenge">Take the Quiz <Icon name="arrow" size="small" /></a>
    </aside>
  );
}


function HeadlinePage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="FEATURED LONG READ"
        title="Nanotechnology: Small Particles, Big Questions About Safety and Equality"
        intro="How can society enjoy the benefits of nanotechnology while protecting people and the environment?"
      />

      <article className="feature-article page-content">
        <figure className="article-lead-image">
          <img
            src="/mainheadline.png"
            alt="Nanotechnology: Small Particles, Big Questions About Safety and Equality"
          />
          <figcaption></figcaption>
        </figure>

        <div className="article-layout">
          <aside className="article-rail">
            <span>FEATURE 01</span>
            <strong>Innovation</strong>
            <strong>Safety</strong>
            <strong>Equality</strong>
          </aside>

          <div className="article-body">
            <p className="article-deck">
              Nanotechnology is creating new opportunities in science and
              technology. By working with materials at the nanoscale,
              scientists can develop products with special properties that may
              be useful in medicine, electronics, agriculture, and
              environmental protection. For example, nanotechnology may
              support targeted drug delivery, medical imaging, and improved
              water treatment.
            </p>

            <h2>Understanding the Benefits</h2>

            <p>
              Nanotechnology is creating new opportunities in science and
              technology. By working with materials at the nanoscale,
              scientists can develop products with special properties that may
              be useful in medicine, electronics, agriculture, and
              environmental protection. For example, nanotechnology may
              support targeted drug delivery, medical imaging, and improved
              water treatment.
            </p>

            <h2>Human Health and Environmental Safety</h2>

            <p>
              However, scientific progress also brings responsibilities. Some
              nanomaterials may pose health risks depending on their
              composition, size, dose, and route of exposure. Workers,
              consumers, and nearby communities may face risks if materials
              are not properly tested, handled, or disposed of. Researchers
              also continue to investigate possible long-term effects on human
              health and the environment.
            </p>

            <blockquote>
              The big question is not simply how far nanotechnology can
              advance, but how we can make sure that its progress benefits
              society without placing people or the environment at unnecessary
              risk.
            </blockquote>

            <h2>Five Ethical Questions</h2>

            <div className="article-callouts">
              {[
                [
                  "01",
                  "Human health",
                  "How can nanomaterials be properly tested to understand their possible effects on human health?",
                ],
                [
                  "02",
                  "Environmental safety",
                  "How can nanomaterials be safely handled and disposed of to reduce possible environmental harm?",
                ],
                [
                  "03",
                  "Worker protection",
                  "How can workers be protected from potential risks when handling nanomaterials?",
                ],
                [
                  "04",
                  "Social equity",
                  "How can the benefits of nanotechnology become accessible to low-income communities and developing countries?",
                ],
                [
                  "05",
                  "Responsible development",
                  "How can scientists, industries, and governments ensure that nanotechnology benefits society responsibly?",
                ],
              ].map(([number, title, text]) => (
                <div key={number}>
                  <span>{number}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              ))}
            </div>

            <h2>Safety and Social Equity</h2>

            <p>
              Another major concern is social equity. Advanced technologies
              can be expensive, making their benefits less accessible to
              low-income communities and developing countries. At the same
              time, workers or communities exposed to potential risks may not
              receive an equal share of the benefits.
            </p>

            <h2>Building a Responsible Future</h2>

            <p>
              To address these concerns, scientists, industries, and
              governments must work together. They should support
              evidence-based safety testing, responsible waste management,
              transparent communication, and fair access to technological
              advancements.
            </p>

            <p>
              The big question is not simply how far nanotechnology can
              advance, but how we can make sure that its progress benefits
              society without placing people or the environment at unnecessary
              risk.
            </p>

          
<SourceLinks
  ids={[
    "unimelb-nano-drug-delivery",
    "nni-definition",
    "nni-benefits",
    "fda-fact-sheet",
    "epa-safety",
    "niosh",
    "oecd",
    "royal-society",
  ]}
/>

          </div>
        </div>
      </article>

      <AdBanner />
    </PageLayout>
  );
}

function ArticlesPage() {
  return (
    <PageLayout>
      <PageHero eyebrow="RESEARCH-BASED READING" title="Articles for a Responsible Nano Future" intro="Five focused explainers connect nanoscale science with health, ecosystems, technology, governance, and social equity." />
      <section className="page-content articles-section">
        <a className="headline-card" href="#/headline">
          <div><span>FEATURED · MAIN HEADLINE</span><h2>Nanotechnology: Innovation, Ethics, and the Future of Society.</h2><p></p><strong>Read the feature <Icon name="arrow" size="small" /></strong></div>
          <div className="headline-card__visual"><Icon name="atom" /></div>
        </a>
        <div className="article-card-grid">
          {articles.map((article, index) => (
            <a className="article-card" href={`#/articles/${article.slug}`} key={article.slug}>
              <div className="article-card__image"><img src={article.image} alt={article.imageAlt} /><span>{article.category}</span></div>
              <div className="article-card__copy"><small>0{index + 1} · {article.readTime}</small><h2>{article.title}</h2><p>{article.preview}</p><strong>Read article <Icon name="arrow" size="small" /></strong></div>
            </a>
          ))}
        </div>
      </section>
      <AdBanner />
    </PageLayout>
  );
}

function ArticlePage({ article }: { article: Article }) {
  return (
    <PageLayout>
      <PageHero eyebrow={`${article.category} · ${article.readTime}`} title={article.title} intro={article.preview} />
      <article className="page-content standard-article">
        <figure className="article-lead-image article-lead-image--short"><img src={article.image} alt={article.imageAlt} /><figcaption></figcaption></figure>
        <div className="article-body article-body--centered">
          {article.sections.map((section) => <section key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>)}
          <SourceLinks ids={article.sourceIds} />
          <a className="button button--ghost" href="#/articles">Back to all articles <Icon name="arrow" size="small" /></a>
        </div>
      </article>
    </PageLayout>
  );
}


const caseStudies = [
  {
    status: "APPROVED TREATMENTS",
    icon: "medicine" as IconName,
    title: "Advancing Cancer Treatment Through Nanoparticle-Based Drug Delivery",
    field: "Healthcare and Cancer Treatment",
    how:
      "Nanoparticles can carry anticancer drugs through the body. Doxil uses liposomes to deliver doxorubicin, while Abraxane uses albumin-bound paclitaxel. Researchers are also exploring passive and active tumor targeting.",
    benefit:
      "Nanoparticle-based formulations can improve drug delivery and help reduce certain treatment-related side effects. Doxil and Abraxane demonstrate how this technology has contributed to existing cancer treatments.",
    concern:
      "Not enough nanoparticles may reach the tumor. Researchers still need to improve targeting methods, evaluate safety and effectiveness, and investigate how nanoparticles can be combined with other cancer therapies.",
    impact:
      "This technology demonstrates how nanotechnology can support medical innovation. Continued research is important for developing safer and more effective cancer treatments.",
    sources: ["cancer-nanomedicine"],
  },
  {
    status: "EMERGING TECHNOLOGY",
    icon: "atom" as IconName,
    title: "Exploring Nanomedicine in Cancer Diagnosis and Treatment",
    field: "Medical Imaging and Theranostics",
    how:
      "Nanoparticles are being studied for detecting tumors through medical imaging and delivering medicine to targeted areas. Theranostics combines diagnosis and treatment in one system, helping researchers investigate ways to monitor a tumor's response.",
    benefit:
      "Nanomedicine may help doctors detect cancer, deliver treatments more effectively, and observe how tumors respond. Different nanomaterials are being investigated for imaging and treatment applications.",
    concern:
      "Some approaches show promising results in laboratory research but may not work the same way in humans. Further testing is needed to evaluate patient safety, treatment effectiveness, and development costs.",
    impact:
      "This research highlights the potential of nanotechnology to improve cancer care. Safe and affordable treatments will require continued research and evaluation before wider use.",
    sources: ["ethical-nanomedicine"],
  },
  {
    status: "WATER TREATMENT RESEARCH",
    icon: "leaf" as IconName,
    title: "Removing Titanium-Containing Nanoparticles in Taiwan Water Treatment Plants",
    field: "Environmental Protection and Water Quality",
    how:
      "Researchers collected samples from four water treatment plants in Taiwan and examined different treatment stages. Single-particle inductively coupled plasma mass spectrometry was used to study titanium-containing nanoparticles in the water.",
    benefit:
      "The study reported approximately 35% removal by mass concentration and 98% removal by particle number concentration. Clumping and sedimentation contributed to removal, while anthracite was identified as an important filter-bed component.",
    concern:
      "Nanoparticles can be difficult to detect because of their small size and low concentration. Some particle sizes may be harder to remove, so accurate testing and continued water-quality monitoring remain important.",
    impact:
      "The findings can help improve understanding of conventional water treatment and nanoparticle removal. Better monitoring and filtration practices may support drinking-water quality and environmental protection.",
    sources: ["taiwan-water-treatment"],
  },
];


function CaseStudiesPage() {
  const [selectedStudy, setSelectedStudy] = useState<number | null>(null);

  const fullCaseStudies = [
    {
      title:
        "Advancing Cancer Treatment Through Nanoparticle-Based Drug Delivery",
      sections: [
        {
          heading: "1. Background of the Case",
          paragraphs: [
            "Nanotechnology has become an important development in cancer treatment by providing new ways to deliver anticancer drugs. Nanoparticles can carry drugs through the body and influence how they are distributed, potentially improving treatment while reducing certain side effects.",
            "According to Panjwani (2018), nanoparticle-based cancer treatment has progressed from early developments to approved medical treatments. Examples include Doxil, approved in 1995, which uses liposomes to deliver doxorubicin, and Abraxane, approved in 2005, which uses albumin-bound paclitaxel. These treatments demonstrate how nanotechnology can improve the delivery of existing cancer drugs.",
          ],
        },
        {
          heading: "2. Objective of the Study",
          paragraphs: [
            "The main objective of this case study is to examine how nanoparticles are used to deliver anticancer drugs and how this technology has contributed to the development of cancer treatments.",
            "It also aims to understand the benefits and limitations of nanoparticle-based treatments, including their potential to reduce side effects, improve drug delivery, and support the development of more effective cancer therapies.",
          ],
        },
        {
          heading: "3. Research Methodology",
          paragraphs: [
            "This case study is based on the article by Panjwani (2018), which reviews the development of nanoparticle-based cancer treatments and discusses advances in the field through expert interviews and examples of existing therapies.",
            "The article describes approved treatments such as Doxil and Abraxane and discusses research into passive tumor targeting, active targeting, combination therapies, and the use of nanoparticles in cancer immunotherapy. These examples provide information about the progress and continuing challenges of nanotechnology in cancer treatment.",
          ],
        },
        {
          heading: "4. Findings",
          paragraphs: [
            "The article explains that nanoparticle-based treatments can improve the delivery of anticancer drugs and help reduce certain side effects. Doxil uses liposomes to deliver doxorubicin and is associated with a lower risk of some heart-related side effects compared with conventional doxorubicin. Abraxane uses albumin-bound paclitaxel, eliminating the need for the organic solvent used in conventional paclitaxel formulations.",
            "The article also discusses passive tumor targeting, in which nanoparticles may accumulate in tumors because of differences in tumor blood vessels, and active targeting, which uses substances attached to nanoparticles to help direct them toward specific cells or tissues. Researchers are also investigating combination treatments that deliver multiple drugs and approaches that use nanoparticles to support immunotherapy.",
            "However, the article emphasizes that further research is needed to improve nanoparticle accumulation in tumors and increase treatment effectiveness.",
          ],
        },
        {
          heading: "5. Significance of the Study",
          paragraphs: [
            "This case demonstrates how nanotechnology has contributed to the development of cancer treatments by improving drug delivery and helping reduce certain treatment-related side effects.",
            "It also highlights the potential of nanotechnology to support future medical innovations, including combination therapies and nanoparticle-based approaches to immunotherapy. These developments may help researchers design more effective cancer treatments.",
          ],
        },
        {
          heading: "6. Challenges",
          paragraphs: [
            "One major challenge is ensuring that enough nanoparticles reach the tumor to produce the desired therapeutic effect. Although passive targeting can help nanoparticles accumulate in tumors, this process does not always work equally well in every patient or tumor.",
            "Another challenge is developing active targeting methods without negatively changing the nanoparticles' properties. Researchers must also investigate the safety and effectiveness of new formulations and determine how best to combine nanotechnology with other cancer treatments.",
          ],
        },
        {
          heading: "7. Conclusion",
          paragraphs: [
            "Nanoparticle-based cancer treatment demonstrates the potential of nanotechnology to improve drug delivery and reduce certain side effects of conventional cancer drugs. Examples such as Doxil and Abraxane show how nanoparticle formulations have become part of cancer treatment.",
            "However, challenges remain in delivering sufficient amounts of drugs to tumors and improving treatment effectiveness. Continued research and collaboration among scientists from different fields are important for developing safer and more effective nanoparticle-based therapies.",
          ],
        },
      ],
      reference:
        "Panjwani, L. (2018, February 28). Nanoparticle-based cancer treatment: A look at its origins and what's next. Drug Discovery & Development.",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10013677/",
    },
    {
      title:
        "Exploring the Potential of Nanomedicine in Cancer Diagnosis and Treatment",
      sections: [
        {
          heading: "1. Background of the Case Study",
          paragraphs: [
            "Cancer is one of the major health problems around the world. It happens when abnormal cells grow and divide uncontrollably. It is important to find the cancer early and choose the right treatments that help improve a patient's chances of receiving proper care. However, some cancer treatments can also affect healthy cells, causing unwanted side effects.",
            "Due to these problems, scientists are studying how nanotechnology can assist in improving cancer diagnosis and treatments. Nanotechnology involves extremely small materials called nanoparticles. These can be designed to carry medicine, help doctors detect tumors, and support different types of cancer treatment.",
            "One important development is the use of nanotechnology to combine cancer diagnosis and treatment in one system. This approach is known as theranostics. It aims to help doctors identify cancer and deliver treatment while also providing information on how the tumor responds. According to Wang et al. (2024), nanotechnology has shown potential in cancer imaging, targeted drug delivery, and other treatment methods. However, further research is still needed to address the challenges of using these technologies in patients.",
          ],
        },
        {
          heading: "2. Objective of the Study",
          paragraphs: [
            "The main objective of this study is to understand how nanotechnology can be used to help detect and treat cancer. It focuses on how nanoparticles can help doctors identify tumors and deliver medicine to specific areas of the body.",
            "Another objective is to explain how combining diagnosis and treatment may improve cancer care. Using specially designed nanoparticles, researchers hope to develop systems that allow doctors to see where a tumor is located and observe how it responds to treatment.",
            "This study also aims to understand the possible risks and limitations of nanomedicine. Although this technology offers many possibilities, it is important to determine whether it is safe, effective, and suitable for use in patients. Understanding these concerns helps researchers improve future cancer treatments.",
          ],
        },
        {
          heading: "3. Research Methodology",
          paragraphs: [
            "This case study is based on a review article written by Wang and other researchers and published in 2024 in Signal Transduction and Targeted Therapy. The article reviews existing scientific studies about the use of nanotechnology in cancer diagnosis and treatment.",
            "The researchers examined different types of nanomaterials, including polymeric nanoparticles, liposomes, micelles, hydrogels, and inorganic nanoparticles. They discussed how these materials are being studied for cancer imaging, drug delivery, and treatment. The article also covers research involving different cancers, including cancers of the digestive system, lungs, brain, blood, skin, and other parts of the body.",
            "The review also discusses the advantages and disadvantages of these technologies. It considers how nanoparticles may help deliver medicine to tumors, reduce unwanted effects on healthy tissues, and support new treatment methods. At the same time, it examines problems related to safety, effectiveness, and the difficulty of translating laboratory findings into successful treatments for people.",
          ],
        },
        {
          heading: "4. Findings",
          paragraphs: [
            "The research found that nanoparticles may assist doctors in detecting cancer through medical imaging and delivering medicine to cancer cells. Some systems combine these two functions, helping doctors detect tumors while supporting treatment.",
            "However, these technologies still have limitations. Some have shown promising results in laboratory studies, but they may not work the same way in humans. More testing is needed to make sure they are safe and effective for patients.",
          ],
        },
        {
          heading: "5. Significance of the Study",
          paragraphs: [
            "This study is important because it shows how nanotechnology may improve cancer care. It gives doctors new possibilities for detecting tumors and delivering medicine more effectively.",
            "It shows how science and technology work together to develop new medical treatments. These methods are promising, though researchers must continue studying them to ensure they truly benefit patients.",
          ],
        },
        {
          heading: "6. Challenges",
          paragraphs: [
            "One major challenge is patient safety throughout the study. Nanoparticles may affect the body in different ways, so researchers must study their possible side effects. They also must make sure that the treatment reaches its intended area.",
            "Another challenge is the cost of developing these treatments. Advanced medical technology can be expensive, making it more difficult for some patients to afford. Further research and testing are required before these treatments can be widely available.",
          ],
        },
        {
          heading: "7. Conclusion",
          paragraphs: [
            "In conclusion, nanotechnology may help improve the way cancer is detected and treated. Theranostics offers a promising approach because it combines diagnosis and treatment in one system.",
            "However, more studies are needed to make sure these technologies are safe and effective for patients. Researchers should continue improving these treatments while keeping patient safety and affordability in mind.",
          ],
        },
      ],
      reference:
        "Wang, B., et al. (2024). Current advance of nanotechnology in diagnosis and treatment for malignant tumors. Signal Transduction and Targeted Therapy, 9, Article 200.",
      url: "https://www.nature.com/articles/s41392-024-01889-y",
    },
    {
      title:
        "Evaluating the Removal of Titanium-Containing Nanoparticles in Water Treatment Plants in Taiwan",
      sections: [
        {
          heading: "1. Background of the Case",
          paragraphs: [
            "Clean drinking water is essential for protecting public health. However, water sources may contain different types of chemicals, including very small particles known as nanoparticles. Because nanoparticles are extremely small, their presence and behavior in water can be difficult to monitor. Researchers have therefore investigated how standard water treatment systems can remove these particles before water reaches the community.",
            "In 2024, researchers from Taiwan published a study titled 'Titanium containing nanoparticles in raw water and their removal with the standard treatments in four water treatment plants in Taiwan.' The study focused on titanium-containing nanoparticles found in raw water and examined how effectively standard water treatment processes could remove them.",
          ],
        },
        {
          heading: "2. Objective of the Study",
          paragraphs: [
            "The main objective of the study was to identify the presence and characteristics of titanium-containing nanoparticles in water and evaluate their removal during standard water treatment. The researchers also aimed to determine which treatment processes were most effective in removing these particles.",
            "Another objective was to examine the challenges of measuring nanoparticles at low concentrations. Accurate monitoring is important for understanding water quality and determining whether treatment systems can effectively remove these small particles.",
          ],
        },
        {
          heading: "3. Research Methodology",
          paragraphs: [
            "The researchers collected water samples from four water treatment plants in Taiwan. Samples were obtained from different stages of the treatment process, including raw water, water after sedimentation, water after filtration, and finished water.",
            "To analyze the samples, the researchers used single-particle inductively coupled plasma mass spectrometry. This method helped them examine titanium-containing nanoparticles and measure their characteristics, including particle concentration and size. By comparing samples from different treatment stages, the researchers evaluated how effectively the treatment processes removed the nanoparticles.",
          ],
        },
        {
          heading: "4. Findings",
          paragraphs: [
            "The study found that titanium-containing nanoparticles were removed from raw water through standard treatment processes. The researchers reported approximately 35% removal based on mass concentration and 98% removal based on particle number concentration. Clumping and sedimentation were identified as the main processes contributing to nanoparticle removal.",
            "The researchers also observed changes in nanoparticle size. The most frequently observed particle size in raw water was approximately 112 nanometers, while the most frequent size in finished water was approximately 62 nanometers. However, particles within the 50–70 nanometer range showed limited changes during treatment. The study further identified anthracite as an important filter-bed component for improving nanoparticle removal during filtration.",
          ],
        },
        {
          heading: "5. Significance of the Study",
          paragraphs: [
            "The study provides useful information about how nanoparticles behave during drinking water treatment. Its findings may help water treatment facilities understand which processes contribute most to nanoparticle removal and identify areas where filtration methods could be improved.",
            "The research also highlights the importance of accurate measurement techniques. By studying nanoparticles at different stages of water treatment, researchers can better understand the effectiveness of existing purification systems and develop improved approaches for monitoring water quality.",
          ],
        },
        {
          heading: "6. Challenges",
          paragraphs: [
            "One challenge in studying nanoparticles is their extremely small size and low concentration in water. These characteristics can make them difficult to detect and measure accurately. The study also showed that some particle sizes may be more difficult to remove than others, meaning that standard treatment processes may not perform equally well for every nanoparticle.",
            "Another important consideration is the need for continued monitoring of water quality. Although treatment processes can remove many nanoparticles, researchers must continue studying their behavior and potential effects on human health and the environment. Improved filtration, accurate testing, and responsible water management can help reduce potential risks.",
          ],
        },
        {
          heading: "7. Conclusion",
          paragraphs: [
            "The study of titanium-containing nanoparticles in four water treatment plants in Taiwan demonstrates how scientific research can help improve drinking water treatment. The findings show that conventional processes, particularly clumping and sedimentation, can remove many nanoparticles from raw water. However, differences in particle size and treatment conditions may affect removal efficiency.",
            "Overall, this case highlights the importance of scientific monitoring, technological improvement, and environmental responsibility. By understanding how nanoparticles behave during water treatment, researchers and water treatment providers can work toward improving water quality and protecting public health.",
          ],
        },
      ],
      reference:
        "Chung, C.-H., Wang, G.-S., Chen, Y.-T., Chen, J.-A., & Hwang, Y.-H. (2024). Ti-containing NPs in raw water and their removal with conventional treatments in four water treatment plants in Taiwan. Environmental Monitoring and Assessment, 196(5), 476.",
      url: "https://pubmed.ncbi.nlm.nih.gov/38662019/",
    },
  ];

  if (selectedStudy !== null) {
    const study = fullCaseStudies[selectedStudy];

    return (
      <PageLayout>
        <PageHero
          eyebrow={`CASE STUDY 0${selectedStudy + 1} · FULL RESEARCH`}
          title={study.title}
          intro="Explore the complete background, objectives, research methodology, findings, significance, challenges, conclusion, and reference."
        />

        <section className="page-content case-study-full">
          <button
            type="button"
            className="case-study-back-button"
            onClick={() => setSelectedStudy(null)}
          >
            ← Back to All Case Studies
          </button>

          <div className="case-study-full__content">
            {study.sections.map((section) => (
              <section
                className="case-study-full__section"
                key={section.heading}
              >
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </section>
            ))}

            <section className="case-study-full__reference">
              <h2>Research Article Reference</h2>
              <p>{study.reference}</p>
              <a
                href={study.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Read the Original Research Article ↗
              </a>
            </section>

            <button
              type="button"
              className="case-study-back-button"
              onClick={() => setSelectedStudy(null)}
            >
              ← Back to All Case Studies
            </button>
          </div>
        </section>

        <AdBanner />
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <PageHero
        eyebrow="EVIDENCE IN PRACTICE"
        title="Case Studies: Nano in the Real World."
        intro="Explore real research on nanotechnology in cancer treatment, cancer diagnosis, and water purification. Open each case study to read the complete research discussion and references."
      />

      <section className="page-content case-grid">
        {caseStudies.map((study, index) => (
          <article className="case-card" key={study.title}>
            <div className="case-card__top">
              <span>0{index + 1}</span>
              <div className="card-icon">
                <Icon name={study.icon} />
              </div>
              <p>{study.status}</p>
            </div>

            <div className="case-card__body">
              <small>{study.field}</small>
              <h2>{fullCaseStudies[index].title}</h2>

              {[
                ["How it works", study.how],
                ["Potential benefit", study.benefit],
                ["Risks & ethics", study.concern],
                ["People & planet", study.impact],
              ].map(([label, text]) => (
                <div className="case-detail" key={label}>
                  <strong>{label}</strong>
                  <p>{text}</p>
                </div>
              ))}

              <button
                type="button"
                className="case-study-read-button"
                onClick={() => setSelectedStudy(index)}
              >
                Read Full Case Study <span>→</span>
              </button>

              <SourceLinks ids={study.sources} />
            </div>
          </article>
        ))}
      </section>

      <AdBanner />
    </PageLayout>
  );
}


const ethicsTopics = [
  {
    number: "01",
    title: "Addressing Patient Safety and the Potential Toxicity of Nanoparticles",
    paragraphs: [
      "One major concern is whether nanoparticles can cause unexpected harm to patients. Because nanomaterials have unique physical and chemical properties, their interactions with cells and organs may differ from conventional medicines. Therefore, extensive testing is necessary before nanomedicines can be safely used.",
      "The nanoparticles can differ inside its body depending on their size, shape, and materials. Others affect other cells while some stay in the body for a long period of time. The treatment needs to be carefully studied by researchers to guarantee safety.",
      "Another concern is that some harmful effects don't appear right away. A patient might be unable to notice any problems at first, although the effects could appear for a long time. It is why researchers are required to study how nanomedicines affect the body in both the short and long term.",
      "Doctors and researchers should check patience for such unexpected side effects during testing. If an issue arises, it should be reported and examined thoroughly. This can help protect patients and that the treatment is safe before it is widely used"
    ]
  },
  {
    number: "02",
    title: "Ensuring Informed Consent and Patient Understanding in Nanomedical Research",
    paragraphs: [
      "Patients participating in clinical research involving new nanomedicines should understand the possible benefits and risks. This can be challenging when the long-term effects of a new nanotechnology are not yet fully known. Ethical research therefore requires clear communication about uncertainties and potential risks.",
      "Patients should be told what the research is about before joining a study about what will happen, and the risks they may face. The information relayed should be explained in simple terms so that they can understand it clearly.",
      "The patients have enough time to think and ask furthermore questions before they agree to join. They should never feel forced to take part in the study unless they agree to. Because joining the research should always be their choice.",
      "Since nanotechnology is still being studied, researchers may discover new risks over time. If possible, then they should tell the patients about new information that may help the patients understand the situation and decide to continue taking part in the research."
    ]
  },
  {
    number: "03",
    title: "Promoting Equal Access to Nanomedicine and Reducing Healthcare Inequalities",
    paragraphs: [
      "Advanced nanomedical treatments could be expensive due to the high cost of the research, equipment, materials, and production involved. For economically disadvantaged patients and communities, such treatment could be inaccessible, limiting their access to healthcare services and lowering their quality of care. Therefore, nanotechnology could exacerbate the existing healthcare disparities on a global scale, affecting the populations’ access to care in different ways.",
      "The disparity in healthcare access between developed and developing countries will persist, as economically advantaged populations could afford nanomedical treatments while the latter will struggle to finance such expensive treatments. Additionally, access to healthcare in a community is determined by the availability of facilities and services within that area. Thus, while some communities have access to state-of-the-art facilities, others lack even the basics of healthcare. As a result, healthcare inequality will increase due to the differences in residents’ purchasing abilities and access to healthcare facilities.",
      "Therefore, states, medical institutions, and researchers should explore ways of making nanomedicine more affordable and accessible to all populations. The former should ensure that healthcare is provided to all citizens regardless of their socio-economic status, and the latter should conduct affordable medical research and development while creating appropriate policies to facilitate the process. It is essential that nanotechnology bridges the gap in medical services between different communities instead of increasing the divide."
    ]
  },
  {
    number: "04",
    title: "Examining the Environmental Risks and Ecological Effects of Nanomaterials",
    paragraphs: [
      "Nanotechnology may have environmental benefits, for instance, it may help in removing harmful impurities from water and creating new devices that will purify water. Yet, nanoparticles may present environmental dangers, and their impact on the ecosystem depends on their type, amount, and exposure. They are hazardous when introduced into the environment, such as landfills, waters, and the atmosphere.",
      "Environmental dangers may occur during the manufacturing process, application, and disposal of nanomaterials. Nanoparticles that have been used in water treatment or purification systems may leak into the environment and harm local aquatic ecosystems. Some nanomaterials may also be toxic or persistent in the environment, depending on their origin and type. The risk is determined by their concentration, amount, and exposure to the environment.",
      "Therefore, scientists and manufacturers should ensure that nanoparticles do not cause ecological damage by being involved in waste disposal and regulation. Thus, society will gain benefits from ecological safety and the advantages of nanotechnology."
    ]
  },
  {
    number: "05",
    title: "Strengthening Regulations and Promoting the Responsible Development of Nanotechnology",
    paragraphs: [
      "Governments and scientific organizations need appropriate standards for testing and regulating nanotechnology. Because nanomaterials have unique properties, their effects on human health and the environment must be carefully evaluated before they are widely used. Proper testing and safety standards can help identify possible risks while ensuring that nanotechnology products are safe and effective.",
      "At the same time, regulations should not unnecessarily prevent beneficial scientific innovation. Nanotechnology has the potential to improve cancer treatment, drug delivery, medical diagnosis, and environmental protection. Regulations should therefore create a balance between encouraging scientific progress and protecting people and the environment from possible harm.",
      "Responsible development requires cooperation among researchers, governments, industries, healthcare institutions, and communities. By working together, these groups can establish appropriate safety measures, monitor potential risks, and promote ethical research and development. This collaborative approach can help ensure that nanotechnology advances in a safe, responsible, and socially beneficial way."
    ]
  },
  {
    number: "06",
    title: "Protecting Patient Privacy in Emerging Nanomedical Technologies",
    paragraphs: [
      "Some nanomedical technologies may collect or process sensitive biological information. As diagnostic technologies become more advanced, privacy and proper handling of patient information become important social and ethical considerations. Researchers and healthcare institutions need to protect patients while taking advantage of new technologies."
    ]
  }
];

function EthicsPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="ETHICS · EQUITY · ACCOUNTABILITY"
        title="Ethical and Social Issues in Nanotechnology."
        intro="Explore the ethical responsibilities, social challenges, and environmental considerations involved in the development and use of nanotechnology."
      />

      <section className="page-content ethics-intro">
        <div>
          <SectionHeading
            eyebrow="MORE THAN A TECHNICAL QUESTION"
            title="Small materials. Large responsibilities."
          />
        </div>
        <p>
          Ethics helps science anticipate consequences before choices become
          locked in. It does not divide technology into simply “good” or “bad.”
          Instead, it compares benefits with possible harms, identifies
          affected groups, and makes values such as safety, fairness, autonomy,
          and sustainability visible.
        </p>
      </section>

      <section className="page-content ethics-full-content">
        {ethicsTopics.map((topic) => (
          <article className="ethics-full-card" key={topic.number}>
            <div className="ethics-full-card__heading">
              <span className="ethics-full-card__number">
                {topic.number}
              </span>
              <h2>{topic.title}</h2>
            </div>

            <div className="ethics-full-card__body">
              {topic.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </article>
        ))}
      </section>

      <section className="responsible-summary">
        <div className="responsible-summary__icon">
          <Icon name="shield" />
        </div>
        <div>
          <p className="eyebrow">
            <span />
            WHY RESPONSIBLE INNOVATION MATTERS
          </p>
          <h2>
            Trust is built when progress is careful, inclusive, and
            accountable.
          </h2>
          <p>
            Responsible innovation connects scientific excellence with early
            safety research, honest communication, public participation,
            equitable access, and the willingness to change direction when
            evidence demands it.
          </p>
        </div>
        <a className="button button--primary" href="#/challenge">
          Test your knowledge <Icon name="arrow" size="small" />
        </a>
      </section>
    </PageLayout>
  );
}


function QuizPage() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answers, setAnswers] = useState<number[]>([]);
  const finished = current >= quizQuestions.length;
  const score = answers.filter((answer, index) => answer === quizQuestions[index].answer).length;

  function chooseAnswer(index: number) {
    if (selected !== null) return;
    setSelected(index);
    setAnswers((items) => [...items, index]);
  }

  function nextQuestion() {
    setCurrent((index) => index + 1);
    setSelected(null);
  }

  function restart() {
    setCurrent(0);
    setSelected(null);
    setAnswers([]);
  }

  return (
    <PageLayout>
      <PageHero eyebrow="INTERACTIVE LEARNING" title="Nano Challenge: Test Your Knowledge." intro="Ten questions. Immediate explanations. One clearer view of nanotechnology and its place in society." />
      <section className="quiz-wrap page-content">
        {!finished ? (
          <div className="quiz-panel">
            <div className="quiz-progress">
              <div><span>QUESTION {String(current + 1).padStart(2, "0")} / 10</span><strong>SCORE {score}</strong></div>
              <div className="progress-track"><span style={{ width: `${((current + 1) / quizQuestions.length) * 100}%` }} /></div>
            </div>
            <div className="quiz-question">
              <p>{quizQuestions[current].question}</p>
              <div className="answer-grid">
                {quizQuestions[current].options.map((option, index) => {
                  const isCorrect = index === quizQuestions[current].answer;
                  const state = selected === null ? "" : isCorrect ? "answer--correct" : selected === index ? "answer--wrong" : "answer--muted";
                  return <button className={`answer-option ${state}`} type="button" key={option} onClick={() => chooseAnswer(index)} disabled={selected !== null}><span>{String.fromCharCode(65 + index)}</span>{option}</button>;
                })}
              </div>
              {selected !== null && (
                <div className={`feedback ${selected === quizQuestions[current].answer ? "feedback--correct" : "feedback--wrong"}`} role="status">
                  <Icon name={selected === quizQuestions[current].answer ? "check" : "alert"} />
                  <div><strong>{selected === quizQuestions[current].answer ? "Correct." : "Not quite."}</strong><p>{quizQuestions[current].explanation}</p></div>
                </div>
              )}
              {selected !== null && <button className="button button--primary quiz-next" type="button" onClick={nextQuestion}>{current === quizQuestions.length - 1 ? "See results" : "Next question"} <Icon name="arrow" size="small" /></button>}
            </div>
          </div>
        ) : (
          <div className="results-panel">
            <p className="eyebrow"><span />CHALLENGE COMPLETE</p>
            <div className="score-ring"><strong>{score}</strong><span>/ 10</span></div>
            <h2>{score >= 8 ? "Nano expert in the making." : score >= 6 ? "A strong foundation." : "Keep exploring the small."}</h2>
            <p>{score >= 8 ? "You connected the science with its ethical and social context." : "Review the explanations below, then try again to strengthen your understanding."}</p>
            <div className="result-review">
              {quizQuestions.map((question, index) => <div key={question.question} className={answers[index] === question.answer ? "review--correct" : "review--wrong"}><span><Icon name={answers[index] === question.answer ? "check" : "alert"} size="small" /></span><div><strong>{index + 1}. {question.question}</strong><p>{question.explanation}</p></div></div>)}
            </div>
            <button className="button button--primary" type="button" onClick={restart}>Try again</button>
          </div>
        )}
      </section>
    </PageLayout>
  );
}

function ReferencesPage() {
  return (
    <PageLayout>
      <PageHero eyebrow="SOURCE LIBRARY" title="References & Further Reading." intro="The scientific and policy sources used across NANO WORLD, selected from government agencies, international organizations, and peer-reviewed literature." />
      <section className="page-content references-layout">
        <div className="reference-note"><Icon name="check" /><div><strong>Source standard</strong><p>Links below point to the publishing organization or DOI record. Access dates are used where a page does not clearly identify a publication date.</p></div></div>
        <div className="reference-list">
          {sources.map((source, index) => (
            <article className="reference-item" key={source.id}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div><p>{source.organization}</p><h2>{source.title}</h2><small>{source.date}</small><p>{source.note}</p></div>
              <a href={source.url} target="_blank" rel="noreferrer" aria-label={`Open ${source.title}`}>Visit source <Icon name="arrow" size="small" /></a>
            </article>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}

export default function App() {
  const [hash, setHash] = useState(window.location.hash);

  useEffect(() => {
    const updateHash = () => {
      setHash(window.location.hash);
    };
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  useEffect(() => {
    if (hash.startsWith("#/")) {
      window.scrollTo(0, 0);
      return;
    }

    const sectionId = hash.slice(1) || "home";
    requestAnimationFrame(() => document.getElementById(sectionId)?.scrollIntoView());
  }, [hash]);

  if (!hash.startsWith("#/")) return <HomePage />;
  const route = hash.slice(2).split("/").filter(Boolean);
  if (route[0] === "headline") return <HeadlinePage />;
  if (route[0] === "articles" && route[1]) {
    const article = articles.find((item) => item.slug === route[1]);
    return article ? <ArticlePage article={article} /> : <ArticlesPage />;
  }
  if (route[0] === "articles") return <ArticlesPage />;
  if (route[0] === "case-studies") return <CaseStudiesPage />;
  if (route[0] === "ethics") return <EthicsPage />;
  if (route[0] === "challenge") return <QuizPage />;
  if (route[0] === "references") return <ReferencesPage />;
  return <HomePage />;
}
