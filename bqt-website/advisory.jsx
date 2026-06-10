/* global React, CONTENT, Hero, SectionHead, Pillars, Transactions, Manifesto, ArmNav, Footer, InquiryForm, Founder */

function AdvisoryPage({ onBack, onSwitchArm, lang, setLang, theme, setTheme, leaving }) {
  const { useEffect } = React;
  const c = CONTENT[lang].advisory;

  const jump = (id) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: "smooth" });
    }
  };

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className={"arm-page" + (leaving ? " arm-page--leaving" : "")}>
      <ArmNav arm="advisory" otherArm="capital" onBack={() => onSwitchArm("capital")} onHome={onBack}
              onJump={jump} lang={lang} setLang={setLang} theme={theme} setTheme={setTheme} />

      <Hero
        eyebrow={c.eyebrow}
        titleA={c.heroTitleA}
        titleB={c.heroTitleB}
        statement={c.heroStatement}
        meta={c.heroMeta}
        lang={lang}
      />

      <section className="section container" id="approach">
        <SectionHead
          num={c.approachNum}
          titleA={c.approachTitleA}
          titleB={c.approachTitleB}
          intro={c.approachIntro.map((p, i) => <p key={i}>{p}</p>)}
        />
        <Pillars items={c.pillars} />
      </section>

      <section className="section container" id="transactions">
        <SectionHead
          num={c.transactionsNum}
          titleA={c.transactionsTitleA}
          titleB={c.transactionsTitleB}
          intro={<p>{c.transactionsIntro}</p>}
        />
        <Transactions items={c.transactions} />
      </section>

      <section className="section container" id="partners">
        <SectionHead
          num={c.founderNum}
          titleA={c.founderTitleA}
          titleB={c.founderTitleB}
          intro={c.founderIntro ? <p>{c.founderIntro}</p> : null}
        />
        <Founder angle="advisory" lang={lang} />
      </section>

      <section className="section container" id="inquire">
        <SectionHead
          num={c.inquireNum}
          titleA={c.inquireTitleA}
          titleB={c.inquireTitleB}
          intro={c.inquireIntro ? <p>{c.inquireIntro}</p> : null}
        />
        <div className="inquiry">
          <div className="inquiry__intro">
            {c.inquireHeading ? <h3>{c.inquireHeading}</h3> : null}
            <div className="rule-accent"></div>
            {c.inquireBlurb ? <p>{c.inquireBlurb}</p> : null}
            <dl className="inquiry__contact">
              {c.inquireContacts.map((ct, i) => (
                <div key={i}><dt>{ct.dt}</dt><dd>{ct.dd}</dd></div>
              ))}
            </dl>
          </div>
          <div>
            <InquiryForm arm="advisory" lang={lang} />
          </div>
        </div>
      </section>

      <Footer arm="advisory" onSwitchArm={onSwitchArm} lang={lang} />
    </div>
  );
}

window.AdvisoryPage = AdvisoryPage;
