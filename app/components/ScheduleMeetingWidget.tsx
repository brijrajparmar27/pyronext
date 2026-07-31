"use client";

import { useState, useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import * as gtag from "../utils/gtag";

export default function ScheduleMeetingWidget() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    (async function () {
      try {
        const cal = await getCalApi({ namespace: "30min" });
        cal("ui", {
          theme: "dark",
          cssVarsPerTheme: {
            light: { "cal-brand": "#292929" },
            dark: { "cal-brand": "#ff5722" },
          },
          hideEventTypeDetails: false,
          layout: "month_view",
        });
      } catch (err) {
        console.error("Failed to load Cal.com API:", err);
      }
    })();

    const handleOpenExternal = () => {
      setIsOpen(true);
      gtag.event("schedule_meeting_open", { location: "external_trigger" });
    };

    window.addEventListener("open-cal-widget", handleOpenExternal);
    return () => window.removeEventListener("open-cal-widget", handleOpenExternal);
  }, []);

  const handleOpen = () => {
    setIsOpen(true);
    gtag.event("schedule_meeting_open", { location: "floating_button" });
  };

  const handleClose = () => {
    setIsOpen(false);
    gtag.event("schedule_meeting_close");
  };

  return (
    <>
      <style>{`
        /* Floating Action Button - Circular Design (overriding global wildcard reset) */
        .cal-fab {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          z-index: 999;
          background: var(--primary);
          color: #fff;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 50% !important;
          width: 3.5rem;
          height: 3.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 10px 25px rgba(236, 91, 19, 0.3);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .cal-fab:hover {
          transform: translateY(-4px) scale(1.05);
          box-shadow: 0 15px 30px rgba(236, 91, 19, 0.5), 0 0 15px rgba(236, 91, 19, 0.2);
          background: #f46a25;
        }

        .cal-fab:active {
          transform: translateY(-1px);
        }

        .cal-fab-icon {
          font-size: 1.5rem !important;
        }

        /* Modal Overlay */
        .cal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          z-index: 10000;
          background: rgba(8, 8, 10, 0.7);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
        }

        .cal-overlay.is-open {
          opacity: 1;
          pointer-events: auto;
        }

        /* Modal Container - Responsive with No Desktop Scrollbars */
        .cal-modal {
          background: var(--bg-surface);
          border: 1px solid var(--border-light);
          border-radius: 16px !important;
          width: 95%;
          max-width: 1100px;
          height: 90vh;
          max-height: 900px;
          position: relative;
          display: flex;
          flex-direction: column;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
          transform: translateY(20px) scale(0.98);
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          overflow: hidden;
        }

        .cal-overlay.is-open .cal-modal {
          transform: translateY(0) scale(1);
        }

        /* Modal Header */
        .cal-header {
          padding: 1rem 1.5rem;
          border-bottom: 1px solid var(--border-light);
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(255, 255, 255, 0.01);
        }

        .cal-header h3 {
          font-size: 1rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: #fff;
          margin: 0;
        }

        .cal-close-btn {
          background: transparent;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
          padding: 0.25rem;
          border-radius: 50% !important;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }

        .cal-close-btn:hover {
          color: #fff;
          background: rgba(255, 255, 255, 0.05);
        }

        .cal-content {
          flex: 1;
          min-height: 0;
          width: 100%;
          overflow: hidden;
          background: transparent;
        }

        /* Responsive styling */
        @media (max-width: 640px) {
          .cal-fab {
            bottom: 1.5rem;
            right: 1.5rem;
            width: 3.25rem;
            height: 3.25rem;
          }
          .cal-modal {
            height: 90vh;
            border-radius: 12px !important;
          }
          .cal-content {
            overflow-y: auto !important;
            -webkit-overflow-scrolling: touch;
          }
        }
      `}</style>

      {/* Floating Action Button */}
      <button className="cal-fab" onClick={handleOpen} aria-label="Schedule Call">
        <span className="material-symbols-outlined cal-fab-icon">calendar_month</span>
      </button>

      {/* Modal Popup Overlay */}
      <div
        className={`cal-overlay ${isOpen ? "is-open" : ""}`}
        onClick={handleClose}
      >
        <div
          className="cal-modal"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Header */}
          <div className="cal-header">
            <h3>Schedule a Call</h3>
            <button className="cal-close-btn" onClick={handleClose} aria-label="Close scheduler">
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          {/* Cal.com Iframe Content */}
          <div className="cal-content">
            {isOpen && (
              <Cal
                namespace="30min"
                calLink="pyronite-tech/30min"
                style={{ width: "100%", height: "100%", overflow: "auto" }}
                config={{
                  layout: "month_view",
                  useSlotsViewOnSmallScreen: "true",
                  theme: "dark",
                  name: "",
                  email: "",
                }}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
