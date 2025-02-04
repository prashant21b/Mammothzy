"use client";

import React from "react";
import { Flag, MapPin } from "lucide-react"; // Import icons

interface TabsProps {
  activeStep: number;
  onTabClick: (stepIndex: number) => void;
}

const Tabs: React.FC<TabsProps> = ({ activeStep, onTabClick }) => {
  const tabs = [
    { label: "Activity Details", icon: <Flag size={16} /> },
    { label: "Location Details", icon: <MapPin size={16} /> },
  ];

  return (
    <div>
      {/* Heading */}
      <h2
        style={{
          fontSize: "20px",
          fontWeight: "bold",
          color: "#333",
          marginBottom: "16px",
        }}
      >
        Create New Activity
      </h2>

      {/* Tabs */}
      <div
        className="custom-tabs"
        style={{
          display: "flex",
          flexDirection: "column", // Stack tabs vertically
          gap: "16px", // Space between tabs
        }}
      >
        {tabs.map((tab, index) => (
          <div
            key={tab.label}
            className={`tab-item ${activeStep === index + 1 ? "active" : ""}`}
            onClick={() => onTabClick(index + 1)}
            style={{
              display: "flex", // Use flex to align icon and label
              alignItems: "center",
              gap: "8px", // Space between icon and label
              padding: "12px 16px",
              fontSize: "14px",
              fontWeight: activeStep === index + 1 ? "bold" : "normal",
              color: activeStep === index + 1 ? "#000" : "#666",
              backgroundColor: activeStep === index + 1 ? "#fff" : "#f9f9f9",
              border: activeStep === index + 1 ? "1px solid #ccc" : "1px solid #ddd",
              borderRadius: "8px",
              cursor: "pointer",
              boxShadow: activeStep === index + 1 ? "0 2px 4px rgba(0, 0, 0, 0.1)" : "none",
              transition: "all 0.3s ease",
            }}
          >
            {tab.icon}
            <span>{tab.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
