/* global React, CONTENT */
const { useState: useStateSplash } = React;

function LangToggle({ lang, setLang, dark = true }) {
  return (
    <div className={"langtoggle" + (dark ? "" : " langtoggle--light")}>
      <button
        type="button"
        className={lang === "en" ? "is-active" : ""}
        onClick={() => setLang("en")}
        aria-label="English"
      >EN</button>
      <span className="langtoggle__sep">/</span>
      <button
        type="button"
        className={lang === "de" ? "is-active" : ""}
        onClick={() => setLang("de")}
        aria-label="Deutsch"
      >DE</button>
    </div>
  );
}

function ThemeToggle({ theme, setTheme }) {
  const isDark = theme === "dark";
  // Icon shows the mode you would switch TO
  return (
    <button
      type="button"
      className="themetoggle"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Tagmodus" : "Nachtmodus"}
      title={isDark ? "Tag" : "Nacht"}
    >
      <span className={"themetoggle__icon" + (isDark ? " is-sun" : " is-moon")}></span>
    </button>
  );
}

function Splash({ onChoose, lang, setLang, theme, setTheme }) {
  const [hovered, setHovered] = useStateSplash(null);
  const [chosen, setChosen] = useStateSplash(null);
  const c = CONTENT[lang].splash;

  const handleChoose = (arm) => {
    setChosen(arm);
    setTimeout(() => onChoose(arm), 650);
  };

  const handleMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", ((e.clientX - r.left) / r.width * 100) + "%");
    e.currentTarget.style.setProperty("--my", ((e.clientY - r.top) / r.height * 100) + "%");
  };

  return (
    <div className={"splash" + (chosen ? " splash--hidden" : "")}>
      <div className="splash__top">
        <Logo />
        <div className="splash__top-right">
          <div className="mono" style={{ color: "var(--ink-mute)" }}>
            <span>{c.topBrandLine}</span>
          </div>
          <ThemeToggle theme={theme} setTheme={setTheme} />
          <LangToggle lang={lang} setLang={setLang} />
        </div>
      </div>

      <div className="splash__doors">
        <div className="splash__divider"></div>

        {/* ADVISORY */}
        <div
          className="door"
          onMouseMove={handleMove}
          onMouseEnter={() => setHovered("advisory")}
          onMouseLeave={() => setHovered(null)}
          onClick={() => handleChoose("advisory")}
        >
          <div>
            <div className="door__index">{c.advisory.index}</div>
            <h2 className="door__title" style={{ marginTop: 56 }}>
              {c.advisory.titleA}
              {c.advisory.titleB ? <br /> : null}
              {c.advisory.titleB ? <em>{c.advisory.titleB}</em> : null}
            </h2>
            <p className="door__desc">{c.advisory.desc}</p>
          </div>
          <div className="door__cta">
            <span className="line"></span>
            <span>{c.advisory.cta}</span>
            <span>→</span>
          </div>
        </div>

        {/* CAPITAL */}
        <div
          className="door"
          onMouseMove={handleMove}
          onMouseEnter={() => setHovered("capital")}
          onMouseLeave={() => setHovered(null)}
          onClick={() => handleChoose("capital")}
        >
          <div>
            <div className="door__index">{c.capital.index}</div>
            <h2 className="door__title" style={{ marginTop: 56 }}>
              {c.capital.titleA}
              {c.capital.titleB ? <br /> : null}
              {c.capital.titleB ? <em>{c.capital.titleB}</em> : null}
            </h2>
            <p className="door__desc">{c.capital.desc}</p>
          </div>
          <div className="door__cta">
            <span className="line"></span>
            <span>{c.capital.cta}</span>
            <span>→</span>
          </div>
        </div>
      </div>

      <div className="splash__bottom">
        <span>{c.bottomLeft}</span>
        <span>{c.bottomCenter}</span>
        <span>{c.bottomRight}</span>
      </div>
    </div>
  );
}

window.Splash = Splash;
window.LangToggle = LangToggle;
window.ThemeToggle = ThemeToggle;
