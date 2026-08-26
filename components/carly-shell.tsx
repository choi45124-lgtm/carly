'use client'

import { useState } from 'react'
import { CarFront, ChevronDown, Menu, Phone, X } from 'lucide-react'

export const navItems = [
  ['Home', '/'],
  ['Inventory', '/cars-for-sale'],
  ['Loan Application', '/loan-application'],
  ['Car Finder', '/car-finder'],
  ['Value My Trade', '/value-my-trade'],
  ['Testimonials', '/testimonial'],
]

export function CarlyHeader() {
  const [open, setOpen] = useState(false)
  return <>
    <div className="topbar"><div className="container flex items-center justify-between gap-4"><span className="hidden sm:inline">Houston&apos;s trusted independent dealer since 2018</span><a href="tel:7139365512"><Phone /> (713) 936-5512</a><span className="hidden md:inline">842 Little York Rd, Suite B · Houston, TX 77076</span></div></div>
    <header className="site-header"><div className="container flex items-center justify-between gap-6"><a href="/" className="brand" aria-label="Carly Cars home"><span className="brand-mark"><CarFront /></span><span>CARLY<span>CARS</span></span></a><nav className="desktop-nav" aria-label="Primary navigation">{navItems.map(([label, href]) => <a key={href} href={href}>{label}{label === 'Inventory' && <ChevronDown />}</a>)}<a href="/#about">About <ChevronDown /></a></nav><div className="header-actions"><a className="phone-link" href="tel:7139365512"><Phone /><span className="hidden lg:inline">Call us</span></a><a className="button button-primary hidden sm:inline-flex" href="/cars-for-sale">Shop cars</a><button className="menu-button" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button></div></div>{open && <nav className="mobile-nav" aria-label="Mobile navigation">{navItems.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}<a href="/#about" onClick={() => setOpen(false)}>About</a></nav>}</header>
  </>
}

export function CarlyFooter() {
  return <footer className="footer"><div className="container footer-top"><a href="/" className="brand brand-light"><span className="brand-mark"><CarFront /></span><span>CARLY<span>CARS</span></span></a><p>Quality cars. Honest deals.<br />A better way to buy.</p><div className="footer-links">{navItems.slice(1, 5).map(([label, href]) => <a key={href} href={href}>{label}</a>)}<a href="/#contact">Contact</a></div></div><div className="container footer-bottom"><span>© 2026 Carly Cars. All rights reserved.</span><span>Houston, Texas · 842 Little York Rd, Suite B</span></div></footer>
}

export function PageIntro({ kicker, title, children }: { kicker: string; title: React.ReactNode; children: React.ReactNode }) {
  return <section className="page-intro"><div className="container"><span className="section-kicker">{kicker}</span><h1>{title}</h1><p>{children}</p></div></section>
}

export function CarlyShell({ children }: { children: React.ReactNode }) {
  return <main className="min-h-screen bg-background text-foreground"><CarlyHeader />{children}<CarlyFooter /></main>
}

export function LeadForm({ button = 'Submit request' }: { button?: string }) {
  const [sent, setSent] = useState(false)
  if (sent) return <div className="success-panel"><strong>Thanks — your request is in.</strong><span>A Carly Cars specialist will be in touch shortly.</span></div>
  return <form className="lead-form" onSubmit={(e) => { e.preventDefault(); setSent(true) }}><label>Full name<input required placeholder="Your name" /></label><label>Email address<input required type="email" placeholder="you@example.com" /></label><label>Phone number<input required type="tel" placeholder="(713) 000-0000" /></label><button className="button button-primary button-full" type="submit">{button}</button><small>By submitting, you agree to be contacted by Carly Cars.</small></form>
}

export const inventory = [
  { year: 2022, make: 'Toyota', model: 'Camry SE', price: 22995, miles: '38,420', type: 'Sedan', image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=900&q=85' },
  { year: 2021, make: 'Chevrolet', model: 'Tahoe LT', price: 38995, miles: '54,110', type: 'SUV', image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=900&q=85' },
  { year: 2020, make: 'Honda', model: 'Accord Sport', price: 24995, miles: '47,805', type: 'Sedan', image: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=900&q=85' },
  { year: 2023, make: 'Ford', model: 'F-150 XLT', price: 41995, miles: '26,640', type: 'Truck', image: 'https://images.unsplash.com/photo-1551830820-330a71b99659?auto=format&fit=crop&w=900&q=85' },
  { year: 2022, make: 'Nissan', model: 'Rogue SV', price: 26500, miles: '31,220', type: 'SUV', image: 'https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?auto=format&fit=crop&w=900&q=85' },
  { year: 2019, make: 'Jeep', model: 'Grand Cherokee', price: 23995, miles: '63,450', type: 'SUV', image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=900&q=85' },
]

export function VehicleCard({ car }: { car: typeof inventory[number] }) {
  return <article className="car-card"><div className="car-image"><img src={car.image} alt={`${car.year} ${car.make} ${car.model}`} /><span className="car-badge">Available</span></div><div className="car-details"><div className="car-year">{car.year} · {car.type}</div><h3>{car.make} {car.model}</h3><div className="car-specs"><span>{car.miles} mi</span><span>Automatic</span></div><div className="car-bottom"><strong>${car.price.toLocaleString()}</strong><a className="text-link" href="/loan-application">Apply now</a></div></div></article>
}

export function QuickLinks() {
  return <div className="quick-links"><a href="/cars-for-sale"><strong>Shop inventory</strong><span>See every available vehicle</span></a><a href="/loan-application"><strong>Get pre-approved</strong><span>Start with a soft credit check</span></a><a href="/value-my-trade"><strong>Value your trade</strong><span>Turn your current car into buying power</span></a></div>
}
