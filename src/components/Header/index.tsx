"use client";

import React from "react";
import Image from "next/image"; // Use Next.js Image component for optimization
import { User } from "lucide-react";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          <Image
            src="/logo.svg" // Replace with your actual logo path
            alt="Mammothzy Logo"
            width={40} // Specify width
            height={40} // Specify height
            className="logo-image"
          />
          <span className="logo-text">mammothzy</span>
        </div>

        {/* Profile */}
        <div className="profile">
          <User className="profile-icon" size={20} />
          <span className="profile-text">Profile</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
