'use client'

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
            <div className="payment-actions" aria-label="Payment options">
              <a className="payment-toggle payment-toggle-account" href="https://paynearme.com/~by7TuNlFfgJEpVcijVU7zA==" target="_blank" rel="noreferrer">Pay your account</a>
            </div>
          </div>
        </div>
      </section>
      <section className="autopay-panel">
        <div className="autopay-card">
          <div className="autopay-icon" aria-hidden="true">↔</div>
          <h2>Set up AutoPay</h2>
          <p>Never miss a payment — we can<br />help set it up for you.</p>
          <a className="autopay-button" href="tel:7137426320" aria-label="Call Rodeo Auto now">Call us now</a>
        </div>
      </section>
    </CarlyShell>
  )
}
