import { CarlyShell } from '@/components/carly-shell'

const merchUrl = 'https://unapologeticmarcy.com/collections/rodeo-auto-merch'
const westernUrl = 'https://unapologeticmarcy.com/collections/rodeo-inspired-1'

export default function RodeoAutoMerchPage() {
  return (
    <CarlyShell>
      <main className="merch-page">
        <section className="merch-hero" aria-labelledby="merch-title">
          <div className="merch-hero-inner">
            <div className="merch-hero-copy">
              <img className="merch-hero-logo" src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Iqj5ixoT7n9F8Iae1sM0cEHKm68sbx.png" alt="Rodeo Auto" />
              <h1 id="merch-title">Rodeo Auto<br />Merch</h1>
              <p>Elevate your work look with the latest Rodeo Auto merch.</p>
              <a className="merch-button merch-button-light" href={merchUrl} target="_blank" rel="noreferrer">Shop now</a>
            </div>
          </div>
        </section>

        <section className="western-merch" aria-labelledby="western-title">
          <div className="western-merch-inner">
            <div className="western-merch-art" aria-hidden="true" />
            <div className="western-merch-copy">
              <img className="western-logo" src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Iqj5ixoT7n9F8Iae1sM0cEHKm68sbx.png" alt="" />
              <h2 id="western-title">Western<br />Inspired</h2>
              <p>Modern western looks—<br />on or off the clock.</p>
              <a className="merch-button merch-button-dark" href={westernUrl} target="_blank" rel="noreferrer">Shop western</a>
            </div>
          </div>
        </section>
      </main>
    </CarlyShell>
  )
}
