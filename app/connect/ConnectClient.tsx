"use client";

import { useState } from "react";
import Link from "next/link";
import ScrollReveal from "../components/ScrollReveal";

export default function ConnectClient() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const Name = formData.get("Name") as string;
    const Company = formData.get("Company") as string;
    const Email = formData.get("Email") as string;
    const Phone = formData.get("Phone") as string;
    const Message = formData.get("Message") as string;

    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ Name, Company, Email, Phone, Message }),
      });

      if (response.ok) {
        setStatus("sent");
        form.reset();
      } else {
        console.error("Submission failed");
        setStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
    }

    setTimeout(() => setStatus("idle"), 7000);
  }


  return (
    <>
      <ScrollReveal />
      <main
        className="section reveal"
        style={{ paddingTop: "6.5rem", flex: 1, minHeight: "calc(100vh - 116px - 8rem - 200px)" }}
      >
        <div className="container">
          <div className="section-header">
            <div className="line"></div>
          </div>

          <div className="contact-container">
            <div className="contact-title-block">
              <span className="label">// INITIALIZE CONNECTION</span>
              <h1 style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", textTransform: "uppercase", marginBottom: "2rem", lineHeight: 1.1 }}>
                Initiate a deep-dive consultation to architect your enterprise Liferay &amp; open-source systems.
              </h1>
              <p style={{ fontSize: "1.2rem", color: "var(--text-muted)", marginBottom: "1rem", fontWeight: 300 }}>
                We work exclusively with organizations requiring high-availability enterprise infrastructure and zero-latency engineering methodologies.
              </p>
            </div>

            <div className="contact-meta-grid">
              <div>
                <span className="label" style={{ fontSize: "0.7rem" }}>Registry</span>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase" }}>
                  PYRONITE TECHNOLOGIES<br />
                  Sun Central Place, D-112<br />
                  Bopal Cross Road, Bhagwatikrupa Society<br />
                  Ahmedabad, Gujarat 380058<br />
                  +91 820-0618261
                </p>
              </div>
              <div>
                <span className="label" style={{ fontSize: "0.7rem" }}>Availability</span>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase" }}>
                  MON — FRI<br />
                  08:00 — 18:00 CET<br />
                  SYSTEM STANDBY 24/7
                </p>
              </div>
            </div>

            <div className="contact-form">
              {status === "sent" && (
                <div style={{
                  padding: "1.2rem",
                  marginBottom: "1.5rem",
                  border: "1px solid #22c55e",
                  background: "rgba(34, 197, 94, 0.05)",
                  color: "#22c55e",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.85rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  lineHeight: "1.5"
                }}>
                  [ SUCCESS ] Inquiry transmitted successfully. We will get back to you shortly.
                </div>
              )}
              {status === "error" && (
                <div style={{
                  padding: "1.2rem",
                  marginBottom: "1.5rem",
                  border: "1px solid #ef4444",
                  background: "rgba(239, 68, 68, 0.05)",
                  color: "#ef4444",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.85rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  lineHeight: "1.5"
                }}>
                  [ ERROR ] Transmission failed. Please verify specifications and try again.
                </div>
              )}
              <form id="contactForm" onSubmit={handleSubmit}>
                <div className="form-group">
                  <input type="text" name="Name" className="form-control" placeholder="NAME" required />
                </div>
                <div className="form-group">
                  <input type="text" name="Company" className="form-control" placeholder="COMPANY / ORGANIZATION" required />
                </div>
                <div className="form-group">
                  <input type="email" name="Email" className="form-control" placeholder="EMAIL" required />
                </div>
                <div className="form-group">
                  <input type="tel" name="Phone" className="form-control" placeholder="PHONE NUMBER" required />
                </div>
                <div className="form-group">
                  <textarea name="Message" className="form-control" placeholder="SYSTEM_SPECIFICATIONS / REQUIREMENTS" required></textarea>
                </div>
                <button
                  type="submit"
                  className="btn"
                  style={{
                    width: "100%",
                    background: status === "sent" ? "#22c55e" : status === "error" ? "#ef4444" : undefined,
                    borderColor: status === "sent" ? "#22c55e" : status === "error" ? "#ef4444" : undefined,
                  }}
                  disabled={status === "sending"}
                >
                  {status === "idle" && "Transmit Inquiry"}
                  {status === "sending" && "TRANSMITTING..."}
                  {status === "sent" && "TRANSMISSION SUCCESSFUL"}
                  {status === "error" && "TRANSMISSION FAILED"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

    </>
  );
}
