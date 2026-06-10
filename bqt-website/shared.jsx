/* global React, CONTENT, LangToggle, ThemeToggle */
const { useState, useEffect, useRef } = React;

// ============================================
// LOGO
// ============================================
function Logo({ size = "md" }) {
  return (
    <div className={"logo" + (size === "lg" ? " logo--lg" : "")}>
      <span className="logo__wordmark">BQT <em>Partners</em><span className="logo__dot">.</span></span>
      <span className="logo__image">
        <img className="logo-for-dark" src="assets/brand-logo-dark.png" alt="BQT Partners" />
        <img className="logo-for-light" src="assets/brand-logo-light.png" alt="BQT Partners" />
      </span>
    </div>
  );
}

// ============================================
// NAV
// ============================================
function ArmNav({ arm, onBack, onHome, onJump, otherArm, lang, setLang, theme, setTheme, hideLang }) {
  const nav = CONTENT[lang].nav;
  return (
    <nav className="nav">
      <div className="nav__inner">
        <a href="#" onClick={(e) => { e.preventDefault(); onHome(); }} title="BQT Partners">
          <Logo />
        </a>
        <div className="nav__center">
          <a href="#approach" onClick={(e) => { e.preventDefault(); onJump("approach"); }}>
            {arm === "advisory" ? nav.services : nav.approach}
          </a>
          <a href="#transactions" onClick={(e) => { e.preventDefault(); onJump("transactions"); }}>
            {arm === "advisory" ? nav.record : nav.profile}
          </a>
          <a href="#partners" onClick={(e) => { e.preventDefault(); onJump("partners"); }}>{nav.founder}</a>
          <a href="#inquire" onClick={(e) => { e.preventDefault(); onJump("inquire"); }}>{nav.inquire}</a>
        </div>
        <div className="nav__right">
          <ThemeToggle theme={theme} setTheme={setTheme} />
          {hideLang ? null : <LangToggle lang={lang} setLang={setLang} />}
          <button className="nav__back" onClick={onBack}>
            <span>←</span>
            <span>{otherArm === "advisory" ? nav.switchAdvisory : nav.switchCapital}</span>
          </button>
        </div>
      </div>
    </nav>
  );
}

// ============================================
// FOOTER
// ============================================
function Footer({ onSwitchArm, arm, lang }) {
  const f = CONTENT[lang].footer;
  const c = CONTENT[lang].common;
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__col">
          <h5>{f.practices}</h5>
          <ul>
            <li><a href="#" onClick={(e) => { e.preventDefault(); onSwitchArm("advisory"); }}>{f.practiceLinks.advisory}</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); onSwitchArm("capital"); }}>{f.practiceLinks.capital}</a></li>
          </ul>
        </div>
        <div className="footer__col">
          <h5>{f.office}</h5>
          <ul>
            {f.officeLines.map((line, i) => <li key={i}>{line}</li>)}
          </ul>
        </div>
        <div className="footer__col">
          <h5>{f.contact}</h5>
          <ul>
            <li><a href="mailto:cyril.bouquet@bqtpartners.com">cyril.bouquet@bqtpartners.com</a></li>
            <li><a href="https://www.linkedin.com/in/bouquet/">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <span>{c.copyright}</span>
        <span>{arm === "advisory" ? f.bottomMid.advisory : f.bottomMid.capital}</span>
        <a href="Impressum.html" className="footer__legal">{c.legal}</a>
      </div>
    </footer>
  );
}

// ============================================
// HERO
// ============================================
function Hero({ eyebrow, titleA, titleB, statement, meta, lang }) {
  return (
    <section className="hero container" id="top">
      <div className="hero__eyebrow-row">
        <div className="hero__eyebrow">
          <span className="dot"></span>
          <span>{eyebrow}</span>
        </div>
        <div className="mono" style={{ color: "var(--ink-mute)" }}>{CONTENT[lang].common.sectionEst}</div>
      </div>
      <h1 className="hero__title">
        <em>{titleA}</em>
        {titleB ? <br /> : null}
        {titleB ? titleB : null}
      </h1>
      <div className="hero__lower">
        <p className="hero__statement">{statement}</p>
        <dl className="hero__meta">
          {meta.map((m, i) => (
            <div className="hero__meta-item" key={i}>
              <dt>{m.label}</dt>
              <dd>{m.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

// ============================================
// SECTION HEAD
// ============================================
function SectionHead({ num, titleA, titleB, intro, id }) {
  return (
    <div className="section__head" id={id}>
      <div>
        <div className="section__num">{num}</div>
        <h2 className="section__title" style={{ marginTop: 24 }}>
          {titleA} <em>{titleB}</em>
        </h2>
      </div>
      <div className="section__intro">{intro}</div>
    </div>
  );
}

// ============================================
// PILLARS
// ============================================
function Pillars({ items }) {
  return (
    <div className={"pillars pillars--" + items.length}>
      {items.map((p, i) => (
        <div className="pillar" key={i}>
          <div className="pillar__num">P · 0{i + 1}</div>
          <h3 className="pillar__title">{p.title}</h3>
          <div className="pillar__sub">{p.sub}</div>
          <p className="pillar__body">{p.body}</p>
          <ul className="pillar__list">
            {p.points.map((pt, j) => <li key={j}>{pt}</li>)}
          </ul>
        </div>
      ))}
    </div>
  );
}

// ============================================
// TRANSACTIONS
// ============================================
function Transactions({ items }) {
  return (
    <div className="transactions">
      {items.map((t, i) => (
        <div className="transaction" key={i}>
          <div className="transaction__num">№ {String(i + 1).padStart(2, "0")}</div>
          <div className="transaction__type">{t.type}</div>
          <div className="transaction__desc">{t.desc}</div>
        </div>
      ))}
    </div>
  );
}

// ============================================
// SEARCH PROFILE (capital — what we look for)
// ============================================
function SearchProfile({ items }) {
  return (
    <dl className="profile">
      {items.map((p, i) => (
        <div className="profile__row" key={i}>
          <dt>{p.dt}</dt>
          <dd>{p.dd}</dd>
        </div>
      ))}
    </dl>
  );
}

// ============================================
// MANIFESTO
// ============================================
function Manifesto({ lines, sub }) {
  return (
    <section className="manifesto container">
      {lines.map((l, i) => (
        <span className="manifesto__line" key={i}
          dangerouslySetInnerHTML={{ __html: l }} />
      ))}
      {sub && <p className="manifesto__sub">{sub}</p>}
    </section>
  );
}

// ============================================
// FOUNDER
// ============================================
function Founder({ angle, lang }) {
  const f = CONTENT[lang].founder;
  const arm = CONTENT[lang][angle];
  return (
    <div className="founder">
      <div className="founder__portrait-wrap">
        <img className="founder__portrait" src="assets/cyril-portrait.png" alt="Cyril Bouquet" />
      </div>
      <div className="founder__text">
        <div className="founder__name-block">
          <h3 className="founder__name">{f.name}{f.nameEm ? <em> {f.nameEm}</em> : null}</h3>
          <div className="founder__role">{arm.founderRole}</div>
          <div className="rule-accent" style={{ marginTop: 18 }}></div>
        </div>

        <div className="founder__bio">
          {arm.founderBio.map((p, i) => <p key={i}>{p}</p>)}
        </div>

        <div className="founder__logos">
          <div className="founder__logos-label mono">{f.logosLabel}</div>
          <div className="founder__logos-row">
            <span className="founder__logo">
              <img className="logo-for-dark" src="assets/logo-credit-suisse.png" alt="Credit Suisse" style={{ height: "22px" }} />
              <img className="logo-for-light" src="assets/logo-credit-suisse-dark.png" alt="Credit Suisse" style={{ height: "22px" }} />
            </span>
            <span className="founder__logo">
              <img className="logo-for-dark" src="assets/logo-partners-group.png" alt="Partners Group" style={{ height: "24px" }} />
              <img className="logo-for-light" src="assets/logo-partners-group-dark.png" alt="Partners Group" style={{ height: "24px" }} />
            </span>
            <span className="founder__logo">
              <img className="logo-for-dark" src="assets/logo-jc-holding.png" alt="JC Holding (Peek & Cloppenburg)" style={{ height: "44px" }} />
              <img className="logo-for-light" src="assets/logo-jc-holding-dark.png" alt="JC Holding (Peek & Cloppenburg)" style={{ height: "44px" }} />
            </span>
          </div>
        </div>

        <dl className="founder__facts">
          {(arm.founderFacts || f.facts).map((fact, i) => (
            <div key={i}>
              <dt>{fact.dt}</dt>
              <dd>{fact.dd}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}

Object.assign(window, {
  Logo, ArmNav, Footer, Hero, SectionHead, Pillars, Transactions, SearchProfile, Manifesto, Founder,
});
