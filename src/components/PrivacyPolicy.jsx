import React, { useEffect } from "react";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <div className="pt-20">
    <div className="max-w-5xl mx-auto p-6 mt-5 text-gray-800">
      <h1 className="text-3xl font-bold mb-4 text-center">Privacy Policy</h1>
      <p className="mb-6">
        <strong>Effective Date:</strong> 01-10-2024 <br />
        <strong>Last Updated:</strong> 01-10-2024
      </p>
      
      <p className="mb-6">
        ReehaAi prioritizes the safety and privacy of all users, especially in
        times of distress. This Privacy Policy explains how we collect, use, and
        protect your data to provide critical assistance when you are in need,
        and your rights to manage your access. By using ReehaAi, you agree to
        the practices described in this policy.
      </p>
      
      <h2 className="text-2xl font-semibold mb-4">1. Information We Collect and How We Use It</h2>

      <h3 className="text-xl font-semibold mb-2">Location Data</h3>
      <p className="mb-4">
        <strong>Collection:</strong> We collect your precise location only when
        you have granted access, enabling us to assist in emergencies.
      </p>
      <p className="mb-4">
        <strong>Usage:</strong> Location data is used solely to:
        <ul className="list-disc list-inside">
          <li>Track nearby emergency services (e.g., police stations) when you signal danger.</li>
          <li>Share your location with your emergency contact in case of emergencies.</li>
        </ul>
      </p>
      <p className="mb-6">
        <strong>Protection:</strong> Your location data is confidential and
        shared exclusively with your designated emergency contacts and emergency
        services. It is not shared with any third parties beyond these
        protocols.
      </p>

      <h3 className="text-xl font-semibold mb-2">Microphone Access</h3>
      <p className="mb-4">
        <strong>Collection:</strong> Microphone access is activated only when
        you grant permission, and it listens solely for specific emergency
        keywords such as “Help me.”
      </p>
      <p className="mb-4">
        <strong>Usage:</strong> Microphone activation is solely intended for
        emergency activation purposes. When you say “Help me,” ReehaAi will
        initiate an authentication protocol to confirm the emergency. If
        confirmed, all emergency protocols are triggered.
      </p>
      <p className="mb-6">
        <strong>Protection:</strong> ReehaAi does not continuously monitor or
        record conversations. The microphone is only active when listening for
        the specific keyword. No audio recordings or continuous tracking of
        conversations are kept or monitored.
      </p>

      <h3 className="text-xl font-semibold mb-2">Camera Access</h3>
      <p className="mb-4">
        <strong>Collection:</strong> Camera access is requested for emergency
        scenarios to capture a short, 15-second video of your surroundings.
      </p>
      <p className="mb-4">
        <strong>Usage:</strong> This 15-second video will be recorded only after
        confirming an emergency situation and will be shared with your emergency
        contacts to provide them with visual context of the situation.
      </p>
      <p className="mb-6">
        <strong>Protection:</strong> The 15-second video is automatically erased
        from our system after 48 hours. ReehaAi does not store any video content
        beyond this timeframe to maintain privacy and security.
      </p>

      <h3 className="text-xl font-semibold mb-2">Emergency Contact Information</h3>
      <p className="mb-4">
        <strong>Collection:</strong> We collect contact information of your
        designated emergency contact, as provided by you.
      </p>
      <p className="mb-4">
        <strong>Usage:</strong> This contact will receive alerts, including
        location data and, if applicable, the emergency video, to help
        facilitate your safety.
      </p>
      <p className="mb-6">
        <strong>Protection:</strong> Emergency contact data is used exclusively
        for emergency notifications and is not shared with any third parties.
      </p>

      <h2 className="text-2xl font-semibold mb-4">2. Data Security and Retention</h2>
      <p className="mb-4">
        <strong>Data Protection:</strong> All personal data, including location,
        audio, video, and emergency contact information, is encrypted and stored
        securely. We take measures to protect your information against
        unauthorized access, alteration, disclosure, or destruction.
      </p>
      <p className="mb-6">
        <strong>Data Retention:</strong>
        <ul className="list-disc list-inside">
          <li>Location and emergency video data are retained only for as long as necessary for emergency purposes and deleted automatically after 48 hours.</li>
          <li>Emergency contact information is stored securely and is only accessible when necessary to complete emergency protocols.</li>
        </ul>
      </p>

      <h2 className="text-2xl font-semibold mb-4">3. User Control and Consent</h2>
      <p className="mb-6">
        <strong>Permissions:</strong> Users maintain control over all
        permissions, including location, microphone, and camera access, which
        can be managed in the app’s settings.
      </p>
      <p className="mb-6">
        <strong>Consent:</strong> By providing these permissions, you consent to
        their use as described in this policy. If you withdraw these permissions,
        certain safety features of the app may be limited.
      </p>

      <h2 className="text-2xl font-semibold mb-4">4. Changes to This Privacy Policy</h2>
      <p className="mb-6">
        ReehaAi reserves the right to update this Privacy Policy periodically to
        reflect changes in legal requirements, our services, or industry
        practices. Users will be notified of any significant changes via the
        app, and we encourage you to review the policy regularly.
      </p>

      <h2 className="text-2xl font-semibold mb-4">5. Contact Us</h2>
      <p className="mb-6">
        If you have any questions or concerns regarding this Privacy Policy or
        our data practices, please contact us at [Insert Contact Email or
        Support Link].
      </p>

      <h2 className="text-2xl font-semibold mb-4">6. Users' Rights</h2>
      <p className="mb-4">
        <strong>Access:</strong> Users have the right to request access to their
        personal data that we hold.
      </p>
      <p className="mb-4">
        <strong>Correction:</strong> Users have the right to request correction
        of inaccurate or incomplete personal data.
      </p>
      <p className="mb-4">
        <strong>Deletion:</strong> Users have the right to request deletion of
        their personal data when it is no longer necessary for the purposes for
        which it was collected or if they withdraw consent.
      </p>
      <p className="mb-6">
        <strong>Exercising Rights:</strong> To exercise these rights, users can
        contact us at [Insert Contact Email or Support Link]. We will respond to
        your request within a reasonable timeframe and in accordance with
        applicable laws.
      </p>

      <p className="text-lg font-semibold">
        By using ReehaAi, you acknowledge that you understand and agree to the
        practices described in this Privacy Policy.
      </p>
    </div>
    </div>
    </>
  );
};

export default PrivacyPolicy;
