"use client";

import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

// Define the structure of form data
interface FormData {
  address1: string;
  address2: string;
  zip: string;
  city: string;
  state: string;
  countryCode: string;
  contactNumber: string;
  contactName: string;
}

interface LocationDetailsProps {
  onSubmit: (data: FormData) => void;
  onBack: () => void;
  formData: Partial<FormData>;
}

// List of all Indian states
const indianStates: string[] = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
];

const LocationDetails: React.FC<LocationDetailsProps> = ({
  onSubmit,
  onBack,
  formData,
}) => {
  const formik = useFormik<FormData>({
    initialValues: {
      address1: formData.address1 || "",
      address2: formData.address2 || "",
      zip: formData.zip || "",
      city: formData.city || "",
      state: formData.state || "",
      countryCode: formData.countryCode || "+91", // Default to India's country code
      contactNumber: formData.contactNumber || "",
      contactName: formData.contactName || "",
    },
    validationSchema: Yup.object({
      address1: Yup.string().required("Address Line 1 is required"),
      zip: Yup.string().required("ZIP Code is required"),
      city: Yup.string().required("City is required"),
      state: Yup.string().required("State is required"),
      contactNumber: Yup.string()
        .matches(/^[0-9]{10}$/, "Enter a valid 10-digit number")
        .required("Contact Number is required"),
      contactName: Yup.string().required("Contact Name is required"),
    }),
    onSubmit: (values) => {
      console.log("Form Submitted:", values);
      onSubmit(values);
    },
  });

  return (
    <main>
      {/* Form Section */}
      <form onSubmit={formik.handleSubmit}>
        <h2>Location Details</h2>

        {/* Address Line 1 */}
        <label>
          Address Line 1 <span className="required">*</span>
          <input
            type="text"
            name="address1"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.address1}
            placeholder="House number and street name"
            className="input-field"
          />
          {formik.touched.address1 && formik.errors.address1 && (
            <div className="error">{formik.errors.address1}</div>
          )}
        </label>

        {/* Address Line 2 */}
        <label>
          Address Line 2
          <input
            type="text"
            name="address2"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.address2}
            placeholder="Building name, landmarks, etc."
            className="input-field"
          />
        </label>

        {/* ZIP Code */}
        <label>
          ZIP Code <span className="required">*</span>
          <input
            type="text"
            name="zip"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.zip}
            placeholder="E.g., 123456"
            className="input-field"
          />
          {formik.touched.zip && formik.errors.zip && (
            <div className="error">{formik.errors.zip}</div>
          )}
        </label>

        {/* City and State in Same Row */}
        <div className="city-state-row">
          {/* City */}
          <label>
            City <span className="required">*</span>
            <input
              type="text"
              name="city"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.city}
              placeholder="Enter city"
              className="input-field"
            />
            {formik.touched.city && formik.errors.city && (
              <div className="error">{formik.errors.city}</div>
            )}
          </label>

          {/* State Dropdown */}
          <label>
            State <span className="required">*</span>
            <select
              name="state"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.state}
              className="input-field"
            >
              <option value="">Select State</option>
              {indianStates.map((state, index) => (
                <option key={index} value={state}>
                  {state}
                </option>
              ))}
            </select>
            {formik.touched.state && formik.errors.state && (
              <div className="error">{formik.errors.state}</div>
            )}
          </label>
        </div>

        {/* Contact Details Section */}
        <div className="contact-details-section">
          <label className="contact-details-label">Contact Details</label>
          <p className="contact-details-sublabel">
            Please provide contact information for this activity.
          </p>

          {/* Contact Number and Contact Name in Same Row */}
          <div className="member-fields">
            {/* Country Code Dropdown */}
            <label>
              Country Code <span className="required">*</span>
              <select
                name="countryCode"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.countryCode}
                className="input-field country-code"
              >
                <option value="+91">+91 (India)</option>
                <option value="+1">+1 (USA)</option>
                <option value="+44">+44 (UK)</option>
                <option value="+61">+61 (Australia)</option>
                <option value="+81">+81 (Japan)</option>
              </select>
            </label>

            {/* Contact Number */}
            <label>
              Contact Number <span className="required">*</span>
              <input
                type="text"
                name="contactNumber"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.contactNumber}
                placeholder="E.g., 1234567890"
                className="input-field contact-number"
              />
              {formik.touched.contactNumber && formik.errors.contactNumber && (
                <div className="error">{formik.errors.contactNumber}</div>
              )}
            </label>

            {/* Contact Name */}
            <label>
              Contact Name <span className="required">*</span>
              <input
                type="text"
                name="contactName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.contactName}
                placeholder="Contact Name"
                className="input-field contact-name"
              />
              {formik.touched.contactName && formik.errors.contactName && (
                <div className="error">{formik.errors.contactName}</div>
              )}
            </label>
          </div>
        </div>

        {/* Buttons */}
        <div className="button-group">
          <button type="button" onClick={onBack} className="secondary">
            Previous
          </button>
          <button type="submit" className="primary">
            Submit
          </button>
        </div>
      </form>
    </main>
  );
};

export default LocationDetails;
