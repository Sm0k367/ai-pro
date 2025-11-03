import './globals.css'

export const metadata = {
  title: 'TradeAI Pro - AI-Powered Trading Ecosystem',
  description: 'Professional crypto trading platform with AI analysis, RBI methodology, and automated trade management',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}