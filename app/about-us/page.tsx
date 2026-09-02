'use client'

import { useState } from 'react'
import { ArrowRight, Clock3, Mail, MapPin, Phone } from 'lucide-react'
import { CarlyShell } from '@/components/carly-shell'

const hours = [
  ['Monday', '9 am – 7 pm'], ['Tuesday', '9 am – 7 pm'], ['Wednesday', '9 am – 7 pm'],
  ['Thursday', '9 am – 7 pm'], ['Friday', '9 am – 7 pm'], ['Saturday', '9 am – 5 pm'], ['Sunday', 'Closed'],
]

export default function AboutUsPage() {
  const [sent, setSent] = useState(false)

  return (
    <CarlyShell>
      <section className="page-intro about-intro">
        <div className="container">
          <span className="section-kicker">RODEO AUTO NORTH</span>
          <h1>About <em>Us</em></h1>
          <p>A complete automotive experience, built around straightforward service, reliable vehicles, and the people of Houston.</p>
        </div>
      </section>

      <section className="about-page-section">
        <div className="container about-page-grid">
          <div className="about-story">
            <span className="section-kicker">OUR STORY</span>
            <h2>Cars are our passion.<br /><em>People are our purpose.</em></h2>
            <p>Located in <strong>Houston, TX, Rodeo Auto North</strong> is a pre-owned, late model dealer that provides customers with a complete automotive experience at competitive prices.</p>
            <p>We offer reliable transportation with an 18-month or 18,000-mile warranty in every vehicle. A two-year maintenance plan is also included to help keep your vehicle running smoothly and safely.</p>
            <p>Our mission is to help establish or re-establish your credit status so you and your family can enjoy the opportunities and benefits that having good credit can offer.</p>
            <p>We are passionate about cars and intent on sharing that passion with you. Our bilingual team is ready to help with all your questions and needs.</p>
            <p>Come by today and test drive the car of your choice. Sales Manager Oscar Moreno and his team are waiting for you.</p>
          </div>

          <aside className="dealer-panel">
            <span className="section-kicker">DEALER INFORMATION</span>
            <div className="dealer-row"><span>Phone number</span><a href="tel:7137426320">(713) 742-6320</a></div>
            <div className="dealer-row"><span>Company contact</span><strong>Oscar Moreno</strong><a href="tel:7137426320">713-742-6320</a></div>
            <div className="dealer-row"><span>Address</span><a href="https://www.google.com/maps/search/?api=1&query=8224+North+Fwy+Houston+TX" target="_blank" rel="noreferrer">8224 North Fwy,<br />Houston, TX 77037</a></div>
            <div className="dealer-row dealer-hours"><span><Clock3 /> Opening hours</span>{hours.map(([day, time]) => <div className="hours-line" key={day}><b>{day}</b><span>{time}</span></div>)}</div>
          </aside>
        </div>
      </section>

      <section className="about-contact-section">
        <div className="container about-contact-grid">
          <div><span className="section-kicker">LET&apos;S TALK</span><h2>Have a question?<br /><em>Contact us today.</em></h2><p>Tell us what you need and a Rodeo Auto specialist will be in touch shortly.</p><div className="contact-details"><a href="tel:7137426320"><Phone /> (713) 742-6320</a><a href="mailto:sales@rodeoauto.com"><Mail /> sales@rodeoauto.com</a><span><MapPin /> 8224 North Fwy, Houston, TX 77037</span></div></div>
          <div className="about-form-card">{sent ? <div className="success-panel"><strong>Thanks — your message is in.</strong><span>A Rodeo Auto specialist will be in touch shortly.</span></div> : <form className="lead-form" onSubmit={(event) => { event.preventDefault(); setSent(true) }}><div className="form-two-col"><label>First name<input required placeholder="First name" /></label><label>Last name<input placeholder="Last name" /></label></div><label>Email<input required type="email" placeholder="you@example.com" /></label><label>Phone<input required type="tel" placeholder="(713) 000-0000" /></label><label>Message<textarea required rows={4} placeholder="How can we help?" /></label><button className="button button-primary button-full" type="submit">Get approved in minutes <ArrowRight /></button><small>By submitting, you agree to be contacted by Rodeo Auto.</small></form>}</div>
        </div>
      </section>
    </CarlyShell>
  )
}
