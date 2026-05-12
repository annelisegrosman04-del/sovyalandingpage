/* global React, ReactDOM, TweaksPanel, TweakSection, TweakRadio, TweakSelect, useTweaks */
const { useState, useEffect, useRef } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "headline": "blindfolds",
  "layout": "split"
} /*EDITMODE-END*/;

const HEADLINES = {
  blindfolds: {
    line1: "Building",
    line2: "without the",
    line3: "blindfolds.",
    sub: "Residential construction runs on phone calls, half-truths and crossed fingers. Sovya gives builders and homeowners one shared source of truth — from contract to keys."
  },
  guesswork: {
    line1: "The build",
    line2: "shouldn't be",
    line3: "a guessing game.",
    sub: "Sovya is the communication layer for Australian residential construction — so the people paying for the build, and the people on the tools, finally see the same thing."
  },
  clarity: {
    line1: "Clarity is",
    line2: "the new",
    line3: "contract.",
    sub: "We're rebuilding how Australian home builds get communicated. Less chasing. Less re-explaining. One record everyone trusts."
  }
};

function Wordmark({ size = 28 }) {
  return (
    <div className="wordmark" style={{ fontSize: size }}>
      <span>sovya</span><span className="dot">.</span>
    </div>);

}

function validateEmail(s) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s.trim());
}

function SignupPanel({ kind, label, headingTop, headingBottom, blurb }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (status === "submitting" || status === "success") return;
    if (!email.trim()) {setStatus("error");setError("We'll be sharing launch updates as we build");return;}
    if (!validateEmail(email)) {setStatus("error");setError("That email doesn't look right.");return;}
    setStatus("submitting");setError("");
    setTimeout(() => setStatus("success"), 700);
  };

  return (
    <div className={`panel panel-${kind}`} style={{ backgroundColor: "rgb(255, 129, 44)" }}>
      <div className="panel-label">
        <span className="panel-dot" aria-hidden="true"></span>
        {label}
      </div>
      <h2 className="panel-heading">
        <span style={{ fontFamily: "\"Hanken Grotesk\"" }}>{headingTop}</span>
        <span className="panel-heading-em">{headingBottom}</span>
      </h2>
      <p className="panel-blurb">{blurb}</p>

      {status !== "success" ?
      <form className="panel-form" onSubmit={onSubmit} noValidate>
          <div className={`field ${status === "error" ? "field-error" : ""}`}>
            <input
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => {setEmail(e.target.value);if (status === "error") setStatus("idle");}}
            aria-label={`Email for ${label}`}
            disabled={status === "submitting"} />
          
            <button type="submit" className="btn" disabled={status === "submitting"}>
              <span className="btn-label">{status === "submitting" ? "Sending…" : "Keep me in the loop"}</span>
              <span className="btn-arrow" aria-hidden="true">→</span>
            </button>
          </div>
          <div className={`form-msg ${status === "error" ? "is-error" : ""}`}>
            {status === "error" ? error : "We'll only email you about the launch. No noise."}
          </div>
        </form> :

      <div className="success">
          <div className="success-check" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 12.5l5 5L20 6.5" />
            </svg>
          </div>
          <div className="success-text">
            <div className="success-title">You're on the list.</div>
            <div className="success-sub">We'll be in touch from a real human at <strong>{email}</strong>.</div>
          </div>
        </div>
      }
    </div>);

}

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const headline = HEADLINES[t.headline] || HEADLINES.blindfolds;

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <div className={`page ${mounted ? "is-mounted" : ""} layout-${t.layout}`}>
      <header className="topbar">
        <Wordmark size={28} />
        <div className="topbar-right">
          <span className="topbar-pill" style={{ borderStyle: "dotted" }}>
            <span className="topbar-pill-dot" />
            Early access · Sydney, AU
          </span>
        </div>
      </header>

      <main className="hero">
        <div className="hero-eyebrow">
          <span className="eyebrow-rule" />
          <span style={{ fontFamily: "\"DM Sans\"" }}>A communication layer for residential construction</span>
          <span className="eyebrow-rule" />
        </div>

        <h1 className="hero-headline" key={t.headline}>
          <span className="hero-line line-1" style={{ fontFamily: "\"DM Sans\"" }}>{headline.line1}</span>
          <span className="hero-line line-2" style={{ fontFamily: "\"DM Sans\"" }}>{headline.line2}</span>
          <span className="hero-line line-3" style={{ fontFamily: "\"DM Sans\"" }}>
            {headline.line3.replace(/\.$/, "")}<span className="dot-accent" style={{ color: "rgb(255, 129, 44)", borderRadius: "20px", fontFamily: "\"DM Sans\"" }}>.</span>
          </span>
        </h1>

        <p className="hero-sub">{headline.sub}</p>
      </main>

      <section className="panels">
        <SignupPanel
          kind="builder"
          label="Builder early access"
          headingTop="I'm a"
          headingBottom="builder."
          blurb="Stop being the message-relay. Give your clients real visibility — and get your evenings back." />
        
        <SignupPanel
          kind="homeowner"
          label="Homeowner early access"
          headingTop="I'm a"
          headingBottom="homeowner."
          blurb="See what's actually happening on your build — without chasing your builder for a status update." />
        
      </section>

      <footer className="footer">
        <div className="footer-left">
          <Wordmark size={18} />
          <span className="footer-sep">·</span>
          <span>© 2026 Sovya Pty Ltd</span>
        </div>
        <div className="footer-right">
          <a href="#privacy">Privacy</a>
          <a href="#terms">Terms</a>
          <a href="mailto:hello@sovya.build">info@sovyaapp.com</a>
        </div>
      </footer>

      <TweaksPanel title="Tweaks">
        <TweakSection title="Headline">
          <TweakSelect
            label="Statement"
            value={t.headline}
            onChange={(v) => setTweak("headline", v)}
            options={[
            { value: "blindfolds", label: "Building without the blindfolds." },
            { value: "guesswork", label: "The build shouldn't be a guessing game." },
            { value: "clarity", label: "Clarity is the new contract." }]
            } />
          
        </TweakSection>
        <TweakSection title="Composition">
          <TweakRadio
            label="Panel layout"
            value={t.layout}
            onChange={(v) => setTweak("layout", v)}
            options={[
            { value: "split", label: "Side by side" },
            { value: "stacked", label: "Stacked" }]
            } />
          
        </TweakSection>
      </TweaksPanel>
    </div>);

}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);