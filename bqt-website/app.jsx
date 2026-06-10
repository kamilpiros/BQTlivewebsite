/* global React, ReactDOM, Splash, AdvisoryPage, CapitalPage,
   TweaksPanel, useTweaks, TweakSection, TweakColor, TweakRadio, TweakSelect */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#c8102e",
  "palette": "navyRed",
  "typePair": "serifMono",
  "startArm": "splash",
  "lang": "de",
  "logoVariant": "original"
}/*EDITMODE-END*/;

const PALETTES = {
  navyRed: { accent: "#c8102e", navy: "#1e3a6f", bg: "#0a0e16", ink: "#efe8db" },
  bronze:  { accent: "#b8864a", navy: "#3a2e1f", bg: "#0e0c08", ink: "#f0e6d2" },
  obsidian:{ accent: "#8e9bae", navy: "#2a3140", bg: "#0a0a0c", ink: "#e8e8eb" },
  oxblood: { accent: "#7d2331", navy: "#2a1a1e", bg: "#0d0808", ink: "#ede0d8" },
};

const TYPE_PAIRS = {
  serifMono: {
    display: '"Instrument Serif", serif',
    sans: '"Geist", "Helvetica Neue", sans-serif',
    mono: '"Geist Mono", monospace',
  },
  sharpSerif: {
    display: '"Cormorant Garamond", serif',
    sans: '"Geist", "Helvetica Neue", sans-serif',
    mono: '"JetBrains Mono", monospace',
  },
  allSans: {
    display: '"Geist", "Helvetica Neue", sans-serif',
    sans: '"Geist", "Helvetica Neue", sans-serif',
    mono: '"Geist Mono", monospace',
  },
  editorial: {
    display: '"Newsreader", serif',
    sans: '"Inter Tight", sans-serif',
    mono: '"JetBrains Mono", monospace',
  },
};

function App() {
  const { useState, useEffect } = React;
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [arm, setArm] = useState(null);
  const [leaving, setLeaving] = useState(false);

  // Theme: day = light, night = dark. Manual toggle persists.
  const getAutoTheme = () => {
    const h = new Date().getHours();
    return (h >= 7 && h < 19) ? "light" : "dark";
  };
  const [theme, setThemeState] = useState(() => {
    try { return localStorage.getItem("bqt_theme") || getAutoTheme(); }
    catch { return getAutoTheme(); }
  });
  const setTheme = (t) => {
    setThemeState(t);
    try { localStorage.setItem("bqt_theme", t); } catch {}
  };
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  // Logo variant (original brand logo vs serif wordmark)
  useEffect(() => {
    document.documentElement.dataset.logo = tweaks.logoVariant || "original";
  }, [tweaks.logoVariant]);

  // Language: persist in localStorage, separate from tweaks (user-facing toggle)
  const [lang, setLangState] = useState(() => {
    try { return localStorage.getItem("bqt_lang") || tweaks.lang || "de"; }
    catch { return tweaks.lang || "de"; }
  });
  const setLang = (l) => {
    setLangState(l);
    try { localStorage.setItem("bqt_lang", l); } catch {}
  };

  // Apply palette + type to :root (palette colors only in dark mode;
  // light mode colors come from the [data-theme="light"] CSS block)
  useEffect(() => {
    const p = PALETTES[tweaks.palette] || PALETTES.navyRed;
    const t = TYPE_PAIRS[tweaks.typePair] || TYPE_PAIRS.serifMono;
    const root = document.documentElement;
    root.style.setProperty("--accent", tweaks.accent || p.accent);
    root.style.setProperty("--navy", p.navy);
    if (theme === "dark") {
      root.style.setProperty("--bg", p.bg);
      root.style.setProperty("--ink", p.ink);
    } else {
      root.style.removeProperty("--bg");
      root.style.removeProperty("--ink");
    }
    root.style.setProperty("--font-display", t.display);
    root.style.setProperty("--font-sans", t.sans);
    root.style.setProperty("--font-mono", t.mono);
  }, [tweaks.accent, tweaks.palette, tweaks.typePair, theme]);

  // Set lang on <html> for accessibility
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  // Start arm via tweak
  useEffect(() => {
    if (tweaks.startArm === "advisory") setArm("advisory");
    else if (tweaks.startArm === "capital") setArm("capital");
    else setArm(null);
  }, [tweaks.startArm]);

  const switchArm = (newArm) => {
    if (newArm === null) {
      if (arm !== null) {
        // Fade the arm page out before showing the splash
        setLeaving(true);
        setTimeout(() => {
          setLeaving(false);
          setArm(null);
          setTweak("startArm", "splash");
          window.scrollTo(0, 0);
        }, 420);
        return;
      }
      setArm(null);
      setTweak("startArm", "splash");
    } else {
      setArm(newArm);
      setTweak("startArm", newArm);
    }
    window.scrollTo(0, 0);
  };

  return (
    <>
      {arm === null && (
        <Splash onChoose={(a) => switchArm(a)} lang={lang} setLang={setLang}
                theme={theme} setTheme={setTheme} />
      )}

      {arm === "advisory" && (
        <AdvisoryPage onBack={() => switchArm(null)} onSwitchArm={switchArm}
                      lang={lang} setLang={setLang} theme={theme} setTheme={setTheme}
                      leaving={leaving} />
      )}

      {arm === "capital" && (
        <CapitalPage onBack={() => switchArm(null)} onSwitchArm={switchArm}
                     lang={lang} setLang={setLang} theme={theme} setTheme={setTheme}
                     leaving={leaving} />
      )}

      <TweaksPanel title="Tweaks">
        <TweakSection label="Palette">
          <TweakRadio
            label="Theme"
            value={tweaks.palette}
            onChange={(v) => setTweak("palette", v)}
            options={[
              { value: "navyRed", label: "Navy / Red" },
              { value: "bronze", label: "Bronze" },
              { value: "obsidian", label: "Obsidian" },
              { value: "oxblood", label: "Oxblood" },
            ]}
          />
          <TweakColor
            label="Accent"
            value={tweaks.accent}
            onChange={(v) => setTweak("accent", v)}
            options={["#c8102e", "#b8864a", "#7d2331", "#1e3a6f", "#8e9bae", "#3d6b4f"]}
          />
        </TweakSection>

        <TweakSection label="Brand">
          <TweakRadio
            label="Logo"
            value={tweaks.logoVariant || "original"}
            onChange={(v) => setTweak("logoVariant", v)}
            options={[
              { value: "original", label: "Original" },
              { value: "serif", label: "Wortmarke" },
            ]}
          />
        </TweakSection>

        <TweakSection label="Typography">
          <TweakSelect
            label="Type pairing"
            value={tweaks.typePair}
            onChange={(v) => setTweak("typePair", v)}
            options={[
              { value: "serifMono", label: "Instrument Serif + Geist (default)" },
              { value: "sharpSerif", label: "Cormorant + Geist" },
              { value: "allSans", label: "All Sans (institutional)" },
              { value: "editorial", label: "Newsreader + Inter Tight" },
            ]}
          />
        </TweakSection>

        <TweakSection label="Navigation">
          <TweakRadio
            label="Entry"
            value={tweaks.startArm}
            onChange={(v) => setTweak("startArm", v)}
            options={[
              { value: "splash", label: "Splash" },
              { value: "advisory", label: "Advisory" },
              { value: "capital", label: "KMU Nachfolge" },
            ]}
          />
          <TweakRadio
            label="Language"
            value={lang}
            onChange={(v) => setLang(v)}
            options={[
              { value: "en", label: "EN" },
              { value: "de", label: "DE" },
            ]}
          />
          <TweakRadio
            label="Mode"
            value={theme}
            onChange={(v) => setTheme(v)}
            options={[
              { value: "light", label: "Tag" },
              { value: "dark", label: "Nacht" },
            ]}
          />
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
