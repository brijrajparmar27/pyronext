import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { Name, Email, Message } = await request.json();

    if (!Name || !Email || !Message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Google Sheets Script URL (runs exclusively on the server; never exposed to the frontend browser)
    const scriptURL = "https://script.google.com/macros/s/AKfycbw8vVSR8PCU0qRiYR4malQ5GTk1TVgxyScwJRXw6acCrTPQNsbtDSX6OX-4dRk_q_wM/exec";

    // Build the form data to send to Google Apps Script
    const formData = new FormData();
    formData.append("Name", Name);
    formData.append("Email", Email);
    formData.append("Message", Message);

    // Forward request to Google Apps Script
    const response = await fetch(scriptURL, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Google Script returned an error response:", errorText);
      return NextResponse.json(
        { error: "Failed to submit to Google Sheet" },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Error in submit API route:", error);
    return NextResponse.json(
      { error: error.message || "Internal server error" },
      { status: 500 }
    );
  }
}
