import { Breadcrum } from "../components/ui/Breadcrum";
import "../assets/css/Insurance.css";
import { ScrollAnimate } from "./ScrollAnimate";
import insurancePrivate from "../assets/images/all images/insurance1.jpeg";
import insuranceGovernment from "../assets/images/all images/insurance2.jpeg";
export const Insurance = () => {
  return (
    <>
      <Breadcrum title="Insurance & Cashless Treatment Partners" />

      <section className="insurance-section">
        <ScrollAnimate>
          <div className="insurance-content">
            <p>
              We are empanelled with leading private and government health
              insurance providers to help patients access smooth and hassle-free
              cashless treatment facilities.
            </p>

            <p>
              Our team assists with insurance verification, pre-authorization,
              documentation, and claim processing to ensure a seamless
              experience during your treatment journey.
            </p>
          </div>
        </ScrollAnimate>

        <div className="insurance-cards">
          <ScrollAnimate>
            <div className="insurance-card">
              <img src={insurancePrivate} alt="private insurance" />
              <h2>Private Insurance</h2>
            </div>
          </ScrollAnimate>

          <ScrollAnimate>
            <div className="insurance-card">
              <img src={insuranceGovernment} alt="government insurance" />
              <h2>Government Insurance</h2>
            </div>
          </ScrollAnimate>
        </div>

        <div className="insurance-note">
          <ScrollAnimate>
            <p>Important Note:</p>
            <ul>
              <li>Insurance approval is subject to policy terms and conditions.</li>
              <li>Cashless facility depends on insurer authorization.</li>
              <li>Please carry valid insurance ID, policy documents, and identity proof during admission.</li>
            </ul>
          </ScrollAnimate>

        </div>

      </section>
    </>
  );
};