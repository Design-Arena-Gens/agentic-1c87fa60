import styles from "./page.module.css";

const stats = [
  { label: "Max Flow", value: "1,200 L/min" },
  { label: "Head Height", value: "85 m" },
  { label: "Energy Savings", value: "22%" },
  { label: "Warranty", value: "5 Years" },
];

const features = [
  {
    title: "SmartFlow™ Control",
    description:
      "Adaptive sensors continuously regulate pressure for consistent delivery in variable demand environments.",
  },
  {
    title: "SilentSeal Housing",
    description:
      "Multi-layer acoustic dampening keeps operation below 42 dB, perfect for residential and commercial installs.",
  },
  {
    title: "ISO-Certified Durability",
    description:
      "Marine-grade alloys resist corrosion, extending service life even in challenging water chemistry.",
  },
];

const testimonials = [
  {
    quote:
      "The HydroPulse X7 reduced our energy consumption by 19% within the first quarter. It paid for itself faster than any pump we've deployed.",
    name: "Carmen Liu",
    title: "Facilities Director, Blue Ridge Resorts",
  },
  {
    quote:
      "Pressure stability is remarkable. Our distribution network runs smoother than ever and maintenance tickets have dropped to near zero.",
    name: "Marcus Osei",
    title: "Operations Lead, AquaGrid Municipal",
  },
];

const specs = [
  { label: "Motor Output", value: "7.5 kW" },
  { label: "Flow Range", value: "180 – 1,200 L/min" },
  { label: "Max Head", value: "85 m" },
  { label: "Pump Curve", value: "Variable frequency drive integrated" },
  { label: "Noise Level", value: "42 dB @ 3m" },
  { label: "Ingress Rating", value: "IP68 fully submersible" },
  { label: "Power Supply", value: "220-240V / 50-60Hz" },
  { label: "Connectivity", value: "Modbus, BACnet, LTE-ready module" },
];

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <header className={styles.hero}>
        <nav className={styles.nav}>
          <span className={styles.brand}>HydroPulse</span>
          <div className={styles.navActions}>
            <a href="#specs">Specifications</a>
            <a href="#case-studies">Case Studies</a>
            <a href="#contact" className={styles.navButton}>
              Request Quote
            </a>
          </div>
        </nav>
        <div className={styles.heroContent}>
          <div className={styles.heroCopy}>
            <span className={styles.tagline}>HydroPulse X7</span>
            <h1>
              Industrial performance with whisper-quiet efficiency.
            </h1>
            <p>
              Deliver consistent water pressure, slash energy consumption, and
              monitor every metric in real-time. Engineered for commercial
              towers, resorts, and critical municipal infrastructure.
            </p>
            <div className={styles.heroCtas}>
              <a className={styles.primaryCta} href="#contact">
                Request a personalized proposal
              </a>
              <a className={styles.secondaryCta} href="#specs">
                Download technical brief
              </a>
            </div>
            <div className={styles.heroHighlights}>
              <div>
                <strong>92%</strong>
                <span>motor efficiency at peak load</span>
              </div>
              <div>
                <strong>24/7</strong>
                <span>predictive diagnostics & alerts</span>
              </div>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.visualGlow} />
            <div className={styles.visualBody}>
              <div className={styles.visualCore} />
            </div>
            <div className={styles.visualBadge}>
              <span>EnergyStar 2024</span>
              <strong>Certified</strong>
            </div>
            <div className={styles.visualMetric}>
              <span>Real-time Flow</span>
              <strong>865 L/min</strong>
            </div>
          </div>
        </div>
      </header>

      <section className={styles.statBar}>
        {stats.map((stat) => (
          <div key={stat.label} className={styles.stat}>
            <span>{stat.label}</span>
            <strong>{stat.value}</strong>
          </div>
        ))}
      </section>

      <main>
        <section className={styles.features} id="case-studies">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Why HydroPulse</span>
            <h2>Precision engineered to elevate water delivery systems.</h2>
            <p>
              From sensor intelligence to corrosion-proof construction, every
              component of the HydroPulse X7 is designed to keep mission-critical
              operations flowing without interruption.
            </p>
          </div>
          <div className={styles.featureGrid}>
            {features.map((feature) => (
              <article key={feature.title}>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.performance}>
          <div className={styles.performanceCopy}>
            <span className={styles.sectionLabel}>Performance</span>
            <h2>Smart automation delivers savings you can measure.</h2>
            <p>
              The integrated drive predicts demand spikes, throttles output, and
              balances pressure with millisecond accuracy. Pair it with the
              HydroPulse cloud dashboard to trend consumption, schedule
              maintenance, and receive anomaly alerts before downtime occurs.
            </p>
            <ul>
              <li>Dynamic load balancing reduces cavitation and extends seal life.</li>
              <li>Cloud-native monitoring with API access for custom automations.</li>
              <li>Over-the-air firmware updates for future-ready performance.</li>
            </ul>
          </div>
          <div className={styles.performanceCard}>
            <div className={styles.graphCard}>
              <div className={styles.graphHeader}>
                <span>Energy draw comparison</span>
                <strong>-22%</strong>
              </div>
              <div className={styles.graphBars}>
                <div className={styles.barLegacy}>
                  <span>Legacy pump</span>
                </div>
                <div className={styles.barHydro}>
                  <span>HydroPulse X7</span>
                </div>
              </div>
            </div>
            <div className={styles.performanceStats}>
              <div>
                <strong>5×</strong>
                <span>longer service intervals</span>
              </div>
              <div>
                <strong>98%</strong>
                <span>uptime across pilot deployments</span>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.testimonials}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Field Proven</span>
            <h2>Trusted by facilities that demand reliability.</h2>
          </div>
          <div className={styles.testimonialGrid}>
            {testimonials.map((testimonial) => (
              <blockquote key={testimonial.name}>
                <p>“{testimonial.quote}”</p>
                <footer>
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.title}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </section>

        <section className={styles.specs} id="specs">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Technical Specs</span>
            <h2>Engineered to handle the harshest environments.</h2>
          </div>
          <div className={styles.specGrid}>
            {specs.map((spec) => (
              <div key={spec.label} className={styles.specItem}>
                <span>{spec.label}</span>
                <strong>{spec.value}</strong>
              </div>
            ))}
          </div>
        </section>
      </main>

      <section className={styles.cta} id="contact">
        <div className={styles.ctaContent}>
          <h2>Ready to modernize your water infrastructure?</h2>
          <p>
            Share your flow requirements and our engineering team will design a
            tailored pump configuration, ROI model, and deployment plan within
            48 hours.
          </p>
          <form className={styles.ctaForm}>
            <div className={styles.formRow}>
              <input type="text" name="name" placeholder="Full name" />
              <input type="email" name="email" placeholder="Company email" />
            </div>
            <div className={styles.formRow}>
              <input type="text" name="company" placeholder="Organization" />
              <input type="text" name="flow" placeholder="Required flow rate" />
            </div>
            <textarea
              name="notes"
              placeholder="Project notes or existing challenges"
            />
            <button type="submit">Request consultation</button>
          </form>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <span className={styles.brand}>HydroPulse</span>
          <p>Advanced pumping solutions for tomorrow&apos;s infrastructure.</p>
        </div>
        <div className={styles.footerLinks}>
          <a href="#specs">Specifications</a>
          <a href="#case-studies">Case Studies</a>
          <a href="#contact">Contact</a>
          <a href="mailto:engineering@hydropulse.io">Support</a>
        </div>
      </footer>
    </div>
  );
}
