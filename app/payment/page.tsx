'use client'

import { Clock3, MapPin, Phone } from 'lucide-react'
import { CarlyShell } from '@/components/carly-shell'

export default function PaymentPage() {
  return (
    <CarlyShell>
      <section className="payment-page">
        <div className="container payment-grid">
          <div className="payment-main">
            <span className="section-kicker">RODEO AUTO NORTH</span>
            <h1>Make a <em>Payment</em></h1>
            <p>Pay your Rodeo Auto account in just a few steps.<br />Log in, choose your amount, and you&apos;re set.</p>
            <a className="button button-primary payment-cta" href="https://www.rodeoauto.com/payment" target="_blank" rel="noreferrer">Pay your account</a>
          </div>
          <aside className="payment-help">
            <h2>Need <em>Help?</em></h2>
            <div className="payment-detail"><strong>Call Us:</strong><a href="tel:7137426320">(713) 742-6320</a><span>Your representative: Oscar Moreno</span></div>
            <div className="payment-detail"><strong><MapPin /> Address:</strong><span>8224 North Fwy, Houston, TX 77037</span></div>
            <div className="payment-detail"><strong><Clock3 /> Hours:</strong><span>Mon–Fri: 9am–7pm<br />Saturday: 9am–5pm<br />Sunday: Closed</span></div>
          </aside>
        </div>
      </section>
    </CarlyShell>
  )
}
