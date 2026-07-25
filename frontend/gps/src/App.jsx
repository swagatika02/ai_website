import { useState } from 'react'
import './App.css'

const whatsappNumber = '918847811608'

const services = [
  {
    number: '01',
    icon: '◎',
    title: 'Live GPS Tracking',
    text: 'See every vehicle, asset, or loved one move in real time on one clean dashboard.',
  },
  {
    number: '02',
    icon: '⌁',
    title: 'Smart Geo-fences',
    text: 'Create safe zones and get instant alerts whenever a tracker enters or leaves.',
  },
  {
    number: '03',
    icon: '↗',
    title: 'Route History',
    text: 'Replay trips, review stops, and understand mileage with accurate activity reports.',
  },
  {
    number: '04',
    icon: '⌾',
    title: 'Safety Alerts',
    text: 'Stay informed about speeding, ignition, power loss, and unexpected movement.',
  },
]

const steps = [
  ['Choose your tracker', 'We help you select the right GPS device for your vehicle, fleet, asset, or family.'],
  ['Install in minutes', 'Our guided installation gets your tracker online quickly and securely.'],
  ['Track from anywhere', 'Open your dashboard on mobile or desktop and stay connected 24/7.'],
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const message = [
      'Hello Navora GPS,',
      `Name: ${data.get('name')}`,
      `Phone: ${data.get('phone')}`,
      `Interested in: ${data.get('interest')}`,
      `Message: ${data.get('message') || 'Please share more details.'}`,
    ].join('\n')

    setSubmitted(true)
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      '_blank',
      'noopener,noreferrer',
    )
  }

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Navora GPS home">
          <span className="brand-mark" aria-hidden="true"><i /></span>
          <span>Navora <strong>GPS</strong></span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>

        <nav id="primary-navigation" className={menuOpen ? 'nav-open' : ''} aria-label="Primary navigation">
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#features" onClick={closeMenu}>Features</a>
          <a href="#solutions" onClick={closeMenu}>Solutions</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>

        <a className="header-cta" href="#contact">Get started <span>↗</span></a>
      </header>

      <main>
        <section className="hero-section" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span /> Smarter tracking. Safer journeys.</div>
            <h1>Know where.<br /><em>Know now.</em></h1>
            <p className="hero-intro">
              Real-time GPS tracking that keeps your vehicles, assets, and people
              within reach—wherever life takes them.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">Start tracking <span>↗</span></a>
              <a className="text-link" href="#features"><i>▶</i> Explore features</a>
            </div>
            <div className="trust-row">
              <div className="avatar-stack" aria-hidden="true"><span>AM</span><span>RK</span><span>SP</span></div>
              <div><strong>4.9/5</strong><small>Trusted by 2,500+ customers</small></div>
            </div>
          </div>

          <div className="hero-visual" aria-label="Live vehicle tracking preview">
            <div className="map-grid" />
            <div className="road road-one" />
            <div className="road road-two" />
            <div className="route-line"><span className="route-dot start" /><span className="route-dot end" /></div>
            <span className="map-label label-one">City Centre</span>
            <span className="map-label label-two">Sector 22</span>
            <div className="signal-pin pin-one"><i /></div>
            <div className="signal-pin pin-two"><i /></div>
            <div className="vehicle-card">
              <div className="vehicle-icon">⌁</div>
              <div><small>Vehicle PB 10 CX</small><strong>On the move</strong></div>
              <span>42 km/h</span>
            </div>
            <div className="status-card">
              <span className="pulse" />
              <div><small>System status</small><strong>All trackers online</strong></div>
            </div>
            <div className="mini-stat">
              <span>Today</span><strong>128.4 km</strong><small>+12% from yesterday</small>
            </div>
          </div>
        </section>

        <section className="stats-band" aria-label="Navora service statistics">
          <div><strong>10K+</strong><span>Active trackers</span></div>
          <div><strong>99.9%</strong><span>Platform uptime</span></div>
          <div><strong>24/7</strong><span>Live support</span></div>
          <div><strong>60 sec</strong><span>Instant alerts</span></div>
        </section>

        <section className="section features-section" id="features">
          <div className="section-heading">
            <div>
              <span className="kicker">Built for peace of mind</span>
              <h2>Everything you need<br />to stay <em>connected.</em></h2>
            </div>
            <p>Powerful tracking made refreshingly simple. Monitor what matters with accurate data and alerts that arrive when you need them.</p>
          </div>
          <div className="feature-grid">
            {services.map((service) => (
              <article className="feature-card" key={service.title}>
                <span className="feature-number">{service.number}</span>
                <div className="feature-icon" aria-hidden="true">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <a href="#contact" aria-label={`Learn more about ${service.title}`}>Learn more <span>↗</span></a>
              </article>
            ))}
          </div>
        </section>

        <section className="solutions-section" id="solutions">
          <div className="solution-panel">
            <div className="solution-copy">
              <span className="kicker light">One platform. Every journey.</span>
              <h2>Made for the things<br />that <em>move you.</em></h2>
              <p>Whether it is one family car or an entire delivery fleet, Navora gives you clarity, control, and confidence.</p>
              <div className="solution-tags">
                <span>Personal vehicles</span><span>Commercial fleets</span>
                <span>School transport</span><span>Valuable assets</span>
              </div>
              <a className="button button-light" href="#contact">Find your solution <span>↗</span></a>
            </div>
            <div className="phone-preview" aria-label="Mobile tracking dashboard preview">
              <div className="phone-top"><span>9:41</span><i /></div>
              <div className="phone-title"><span>Hello, Aman</span><strong>My vehicles</strong></div>
              <div className="phone-map">
                <div className="tiny-pin one" /><div className="tiny-pin two" />
                <div className="phone-route" />
              </div>
              <div className="phone-vehicle">
                <div className="vehicle-icon">⌁</div>
                <div><strong>Honda City</strong><small>Moving · 42 km/h</small></div>
                <span>›</span>
              </div>
              <div className="phone-actions"><span>◎<small>Map</small></span><span>⌁<small>Trips</small></span><span>⌾<small>Alerts</small></span></div>
            </div>
          </div>
        </section>

        <section className="section how-section" id="about">
          <div className="section-heading compact">
            <div>
              <span className="kicker">Simple from day one</span>
              <h2>Start tracking in<br /><em>three easy steps.</em></h2>
            </div>
            <p>No complicated setup. Our team helps you choose, install, and start tracking with complete confidence.</p>
          </div>
          <div className="steps">
            {steps.map(([title, text], index) => (
              <article key={title}>
                <span>0{index + 1}</span>
                <div className="step-icon">{['□', '⌁', '◎'][index]}</div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-wrap">
            <div className="contact-copy">
              <span className="kicker light">Let’s get you moving</span>
              <h2>Ready to track<br /><em>what matters?</em></h2>
              <p>Tell us what you need to track and our GPS specialist will help you choose the right solution.</p>
              <div className="contact-methods">
                <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer">
                  <span className="wa-small">☎</span><div><small>Chat on WhatsApp</small><strong>+91 88478 11608</strong></div><b>↗</b>
                </a>
                <a href="mailto:hello@navoragps.com">
                  <span>✉</span><div><small>Email us</small><strong>hello@navoragps.com</strong></div><b>↗</b>
                </a>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <label>Full name<input name="name" type="text" placeholder="Your name" required /></label>
                <label>Phone number<input name="phone" type="tel" placeholder="+91 00000 00000" required /></label>
              </div>
              <label>I’m interested in
                <select name="interest" defaultValue="Personal vehicle tracking">
                  <option>Personal vehicle tracking</option>
                  <option>Fleet management</option>
                  <option>School transport</option>
                  <option>Asset tracking</option>
                </select>
              </label>
              <label>Tell us a little more
                <textarea name="message" placeholder="How can we help?" rows="4" />
              </label>
              <button className="button button-primary form-button" type="submit">Send enquiry on WhatsApp <span>↗</span></button>
              {submitted && <p className="form-note" role="status">Your message is ready in WhatsApp.</p>}
              <small className="privacy-note">By sending, you agree to be contacted about Navora GPS services.</small>
            </form>
          </div>
        </section>
      </main>

      <footer>
        <a className="brand footer-brand" href="#home">
          <span className="brand-mark" aria-hidden="true"><i /></span>
          <span>Navora <strong>GPS</strong></span>
        </a>
        <p>Smarter tracking. Safer journeys.</p>
        <div><a href="#features">Features</a><a href="#solutions">Solutions</a><a href="#contact">Contact</a></div>
        <small>© {new Date().getFullYear()} Navora GPS. All rights reserved.</small>
      </footer>

      <a
        className="whatsapp-float"
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hello Navora GPS, I would like to know more about your GPS tracking solutions.')}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Navora GPS on WhatsApp"
      >
        <span className="whatsapp-symbol">☎</span>
        <span className="whatsapp-text"><small>Need help?</small><strong>Chat with us</strong></span>
      </a>
    </div>
  )
}

export default App
