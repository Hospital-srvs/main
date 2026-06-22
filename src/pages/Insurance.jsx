import { Breadcrum } from "../components/ui/Breadcrum";
import "../assets/css/Insurance.css";
import { ScrollAnimate } from "./ScrollAnimate";
import insurancePrivate from "../assets/images/all images/insurance1.jpeg";
import insuranceGovernment from "../assets/images/all images/insurance2.jpeg";

const privateInsurance = [
  "Acko General Insurance Ltd",
  "Liberty General Insurance Ltd",
  "Reliance General Insurance Ltd",
  "Galaxy Health Insurance Co Ltd",
  "ICICI Lombard General Insurance Co Ltd",
  "Vidal Health TPA",
  "The New India Ltd",
  "United India Insurance Ltd",
  "National Insurance Ltd",
  "Star Health Insurance",
  "Universal Sompo General Insurance Ltd",
  "Health Assist TPA",
  "IFFCO Tokio General Insurance",
  "Tata AIG General Insurance Ltd",
  "Magma General Insurance Ltd",
  "Royal Sundaram General Insurance",
  "Link K TPA",
  "HDFC ERGO",
  "SBI General",
  "Aditya Birla",
  "Care Health",
  "Niva Bupa",
  "Manipal Cigna",
  "Generali Central Insurance",
  "Go Digit General Insurance",
  "Navi General Insurance",
  "Zuno General Insurance",
  "Zurich Kotak General Insurance",
];

const governmentSchemes = [
  "Ayushman Bharat Yojana PM-JAY",
  "SGHS (Golden Card)",
  "CAPF",
];

export const Insurance = () => {
  return (
    <>
      <Breadcrum title="Insurance & Cashless Treatment Partners" />

      <section className="insurance-section">
        <ScrollAnimate>
          <div className="insurance-content">
            <span className="insurance-subtitle">Cashless Facilities Available</span>
            <h1>Our Insurance & Government Scheme Partners</h1>

            <p>
              We are empanelled with leading private and government health
              insurance providers to help patients access smooth and hassle-free
              cashless treatment facilities.
            </p>

            <p>
              Our team assists with insurance verification, pre-authorization,
              documentation, and claim processing to ensure a seamless experience
              during your treatment journey.
            </p>
          </div>
        </ScrollAnimate>

        <ScrollAnimate>
          <div className="cashless-table-wrapper">
            <div className="cashless-table-heading">
              <span>Cashless Facilities Available</span>
              <h2>Empanelled Insurance Partners</h2>
            </div>

            <div className="cashless-table-scroll">
              <table className="cashless-table">
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Private Insurance</th>
                    <th>Government Schemes</th>
                  </tr>
                </thead>

                <tbody>
                  {privateInsurance.map((insurance, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{insurance}</td>
                      <td>{governmentSchemes[index] || "-"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </ScrollAnimate>

        <div className="insurance-note">
          <ScrollAnimate>
            <p>Important Note:</p>
            <ul>
              <li>Insurance approval is subject to policy terms and conditions.</li>
              <li>Cashless facility depends on insurer authorization.</li>
              <li>
                Please carry valid insurance ID, policy documents, and identity
                proof during admission.
              </li>
            </ul>
          </ScrollAnimate>
        </div>
      </section>
    </>
  );
};