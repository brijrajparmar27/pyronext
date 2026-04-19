"use client";

import { useState } from "react";
import Link from "next/link";
import ScrollReveal from "../components/ScrollReveal";

export default function ConnectClient() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("sent");
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setStatus("idle"), 3000);
  }

  return (
    <>
      <ScrollReveal />
      <main
        className="container section reveal"
        style={{ paddingTop: "6rem", flex: 1, minHeight: "calc(100vh - 116px - 8rem - 200px)" }}
      >
        <div className="section-header">
          <div className="line"></div>
        </div>

        <div className="contact-container">
          <div>
            <span className="label">// INITIALIZE CONNECTION</span>
            <h1 style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", textTransform: "uppercase", marginBottom: "2rem", lineHeight: 1.1 }}>
              Initiate a deep-dive consultation to architect your complex Liferay digital solution.
            </h1>
            <p style={{ fontSize: "1.2rem", color: "var(--text-muted)", marginBottom: "3rem", fontWeight: 300 }}>
              We work exclusively with organizations requiring high-availability portal infrastructure and zero-latency engineering methodologies.
            </p>

            <div style={{ marginTop: "4rem", display: "grid", gap: "2rem", gridTemplateColumns: "1fr 1fr" }}>
              <div>
                <span className="label" style={{ fontSize: "0.7rem" }}>Registry</span>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase" }}>
                  PYRONITE TECHNOLOGY<br />
                  A201 Shaligram Arcade<br />
                  380058, Ahmedabad, Gujarat, India<br />
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
          </div>

          <div className="contact-form">
            <form id="contactForm" onSubmit={handleSubmit}>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="ENTITY_NAME" required />
              </div>
              <div className="form-group">
                <input type="email" className="form-control" placeholder="COMMUNICATION_ENDPOINT" required />
              </div>
              <div className="form-group">
                <textarea className="form-control" placeholder="SYSTEM_SPECIFICATIONS / REQUIREMENTS" required></textarea>
              </div>
              <button
                type="submit"
                className="btn"
                style={{
                  width: "100%",
                  background: status === "sent" ? "#22c55e" : undefined,
                  borderColor: status === "sent" ? "#22c55e" : undefined,
                }}
                disabled={status === "sending"}
              >
                {status === "idle" && "Transmit Inquiry"}
                {status === "sending" && "TRANSMITTING..."}
                {status === "sent" && "TRANSMISSION SUCCESSFUL"}
              </button>
            </form>
          </div>
        </div>
      </main>

    </>
  );
}
