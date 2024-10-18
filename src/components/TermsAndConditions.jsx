import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function TermsAndConditions() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div className="min-h-screen px-6 py-12 pt-20 md:px-20 lg:px-40">
      <div className="max-w-4xl mx-auto   shadow-lg rounded-lg p-8 md:p-12">
        <h1 className="text-3xl font-extrabold text-center mb-6 text-gray-800">
          Terms and Conditions
        </h1>
        <p className="text-sm text-gray-500 text-center mb-10">
          <strong>Last Updated:</strong> October 2024
        </p>

        <div className="space-y-8">
          {/* Section 1 */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-gray-700">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-600">
              By using ReehaAi, you accept these terms and conditions. If you do not agree, please refrain from using the website or app.
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-gray-700">
              2. Scope of Services
            </h2>
            <p className="text-gray-600">
              ReehaAi provides safety features to users within India, including real-time assistance and emergency alerts. These services are for personal safety and must comply with all laws.
            </p>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-gray-700">
              3. User Responsibilities
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>
                <strong>Eligibility:</strong> You must be at least 13 years old to use ReehaAi. If under 18, parental consent is required.
              </li>
              <li>
                <strong>Account Security:</strong> Maintain the confidentiality of your account information. Actions under your account are your responsibility.
              </li>
              <li>
                <strong>Appropriate Use:</strong> Use ReehaAi only for personal safety. Misuse for harassment, false alarms, or unlawful purposes is prohibited.
              </li>
            </ul>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-gray-700">
              4. Privacy Policy
            </h2>
            <p className="text-gray-600">
              Your privacy matters. Please see our <Link to="/privacy-policy" className="text-blue-500 underline">Privacy Policy</Link> for details on how we handle your data.
            </p>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-gray-700">
              5. Limitations of Liability
            </h2>
            <p className="text-gray-600">
              ReehaAi aids personal safety but cannot guarantee complete protection. Services are provided "as-is" without liability for harm resulting from their use.
            </p>
          </div>

          {/* Section 6 */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-gray-700">
              6. Emergency Situations and Availability
            </h2>
            <p className="text-gray-600">
              Network limitations may affect response times. ReehaAi is not responsible for delays or failures beyond its control.
            </p>
          </div>

          {/* Section 7 */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-gray-700">
              7. Intellectual Property
            </h2>
            <p className="text-gray-600">
              All content on ReehaAi is owned or licensed by us. Unauthorized reproduction, distribution, or modification is prohibited.
            </p>
          </div>

          {/* Section 8 */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-gray-700">
              8. Termination
            </h2>
            <p className="text-gray-600">
              We reserve the right to suspend or terminate access to ReehaAi without prior notice for violations of these terms.
            </p>
          </div>

          {/* Section 9 */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-gray-700">
              9. Amendments
            </h2>
            <p className="text-gray-600">
              These terms may be updated periodically. The latest version will always be available on this page.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Contact Us</h2>
          <p className="text-gray-600">
            For any questions or concerns, please contact us:
          </p>
          <ul className="list-none mt-4 space-y-2 text-gray-600">
            <li>
              <strong>Email:</strong> <a href="mailto:reehaai.ai@gmail.com" className="text-blue-500 underline">reehaai.ai@gmail.com</a>
            </li>
            <li>
              <strong>Address:</strong> 21 - Ramchandra Nagar Extension , indore , MP , 452005
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
