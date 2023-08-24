import "./globals.css"
import { Inter } from "next/font/google"

export const metadata = {
  title: "Zivy Assignment",
  description: "Made by Abhinav",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
