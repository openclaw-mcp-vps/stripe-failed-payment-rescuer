import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Stripe Failed Payment Rescuer — Recover Lost Revenue Automatically',
  description: 'Automatically retry failed Stripe payments with smart timing algorithms. Rescue revenue, reduce churn, and keep your SaaS subscriptions alive.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="9d4bef34-632f-4927-b637-070bf1ca771c"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
