import type { Metadata, Viewport } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Dasari Niharika — Software Developer",
  description:
    "Portfolio of Dasari Niharika, a Computer Science and Engineering undergraduate at Lovely Professional University, building full-stack and backend software.",
  openGraph: {
    title: "Dasari Niharika — Software Developer",
    description: "Projects, education, skills, certifications, and activities from Dasari Niharika.",
    type: "website",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#080b15",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
