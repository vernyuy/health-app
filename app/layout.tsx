import type { Metadata } from "next";
import "./app.css";
import RootLayoutThatConfiguresAmplifyOnClient from "./rootLayoutThatConfigureAmplifyOnClient";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <RootLayoutThatConfiguresAmplifyOnClient>
          {children}
        </RootLayoutThatConfiguresAmplifyOnClient>
      </body>
    </html>
  );
}
