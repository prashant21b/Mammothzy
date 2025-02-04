"use client";

import React from "react";
import { CheckCircle, X } from "lucide-react"; 

interface ConfirmationPopupProps {
  onClose: () => void;
}

const ConfirmationPopup: React.FC<ConfirmationPopupProps> = ({ onClose }) => {
  return (
    <div className="modal">
      <div
        className="modal-content"
        style={{
          position: "relative",
          padding: "24px",
          borderRadius: "8px",
          textAlign: "center",
          maxWidth: "400px",
          backgroundColor: "#fff",
        }}
      >
        {/* Close Icon */}
        <X
          onClick={onClose}
          size={20}
          style={{
            position: "absolute",
            top: "12px",
            right: "12px",
            cursor: "pointer",
            color: "#666",
          }}
        />

        {/* Checkmark Icon */}
        <div
          style={{
            width: "60px",
            height: "60px",
            backgroundColor: "#e6f7e6",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "0 auto 16px",
          }}
        >
          <CheckCircle color="#4caf50" size={40} />
        </div>

        {/* Text content */}
        <h2 style={{ margin: "0", fontSize: "20px", fontWeight: "600" }}>
          Form Submitted
        </h2>
        {/* <p style={{ color: "#666", fontSize: "14px", marginTop: "8px" }}>
          Your new activity has been successfully created!
        </p> */}
      </div>
    </div>
  );
};

export default ConfirmationPopup;
