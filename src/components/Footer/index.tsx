"use client";

import React from "react";
import Image from "next/image"; // Use next/image for optimized images
import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  // Get the current year dynamically
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Logo and description */}
        <div className="footer-logo">
          <Image
            src="/logo.svg" // Replace with your actual logo path
            alt="Mammothzy Logo"
            width={40} // Specify the width
            height={40} // Specify the height
            className="footer-logo-image"
          />
          <span className="footer-logo-text">mammothzy</span>
        </div>
        <p className="footer-description">
          Marketplace for searching, filtering, and instantly booking team
          activities
        </p>

        {/* Social Media Icons */}
        <div className="footer-social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <Facebook className="social-icon" size={20} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <Instagram className="social-icon" size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <Linkedin className="social-icon" size={20} />
          </a>
          <a href="mailto:info@mammothzy.com">
            <Mail className="social-icon" size={20} />
          </a>
        </div>

        {/* Copyright */}
        <p className="footer-copyright">Copyright © {currentYear}</p>
      </div>
    </footer>
  );
};

export default Footer;
