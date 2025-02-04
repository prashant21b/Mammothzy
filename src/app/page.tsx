"use client";

import React, { useState } from "react";
import Tabs from "@/components/Tabs";
import ActivityDetails from "@/components/ActivityDetails";
import LocationDetails from "@/components/LocationDetails";
import ConfirmationPopup from "@/components/ConfirmationPopup";

// Define the shape of the form data
interface FormData {
  activityName?: string;
  category?: string;
  description?: string;
  activityType?: string;
  locationType?: string;
  address1?: string;
  address2?: string;
  zip?: string;
  city?: string;
  state?: string;
  contactNumber?: string;
  contactName?: string;
}

export default function Home() {
  const [step, setStep] = useState<number>(1); // Step indicator
  const [formData, setFormData] = useState<FormData>({}); // Form data state
  const [showPopup, setShowPopup] = useState<boolean>(false); // Success popup state

  const handleNext = (data: FormData) => {
    // Merge step 1 data into the main formData
    setFormData({ ...formData, ...data });
    setStep(2); // Proceed to the next step
  };

  const handleSubmit = (data: FormData) => {
    // Merge step 2 data, then we have all form info
    const finalData = { ...formData, ...data };
    setFormData(finalData);

    // Log all form values
    console.log("Final Submitted Data:", finalData);

    // Show success modal
    setShowPopup(true);
  };

  const resetForm = () => {
    // Clear out everything
    setFormData({});
    setStep(1);
    setShowPopup(false);
  };

  const handleTabClick = (newStep: number) => {
    // Allow backward navigation but not forward skipping steps
    if (newStep <= step) {
      setStep(newStep);
    }
  };

  return (
    <main
      style={{
        display: "flex", // Use flexbox for horizontal alignment
        gap: "24px", // Add space between Tabs and the Details section
        alignItems: "flex-start", // Align items at the top
      }}
    >
      {/* Tabs Section */}
      <div
        style={{
          flex: "1", // Allow tabs to take minimal space
          maxWidth: "200px", // Set a fixed width for the Tabs section
        }}
      >
        <Tabs activeStep={step} onTabClick={handleTabClick} />
      </div>

      {/* Details Section */}
      <div
        style={{
          flex: "3", // Allow the form section to take more space
          background: "#fff", // White background for the form
          padding: "24px", // Add padding for the form
          borderRadius: "8px", // Rounded corners for aesthetics
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
          width: "100%", // Ensure the form takes the available width
        }}
      >
        {/* Step 1: Activity Details */}
        {step === 1 && (
          <ActivityDetails onNext={handleNext} formData={formData} />
        )}

        {/* Step 2: Location Details */}
        {step === 2 && (
          <LocationDetails
            onSubmit={handleSubmit}
            onBack={() => setStep(1)}
            formData={formData}
          />
        )}

        {/* Success Modal */}
        {showPopup && <ConfirmationPopup onClose={resetForm} />}
      </div>
    </main>
  );
}
