import type { Metadata } from "next";
import ConnectClient from "./ConnectClient";

export const metadata: Metadata = {
  title: "Connect | Pyronite",
  description:
    "Connect with Pyronite's Liferay DXP experts. We specialize in building complex enterprise portals, seamless headless integration, and high-availability digital solutions.",
};

export default function ConnectPage() {
  return <ConnectClient />;
}
