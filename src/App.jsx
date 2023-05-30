import React from "react";
import styles from "./styles";
import {
  Billing,
  Business,
  Button,
  CardDeal,
  Clients,
  Cta,
  FeedbackCard,
  Footer,
  GetStarted,
  Hero,
  Navbar,
  Stats,
  Testimonials,
} from "./components";
const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={styles.boxWidth}>
          <Navbar />
        </div>
      </div>
      <div className={`${styles.flexStart}`}>
        <div className={styles.boxWidth}>
          <Hero />
        </div>
      </div>
      <div className={`${styles.flexStart} ${styles.paddingX}`}>
        <div className={styles.boxWidth}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <Cta />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
