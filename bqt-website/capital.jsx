/* global React, CONTENT, Hero, SectionHead, Pillars, SearchProfile, ArmNav, Footer, InquiryForm, LeadersForm, Founder */

function CapitalPage({ onBack, onSwitchArm, lang, setLang, theme, setTheme, leaving }) {
  const { useEffect } = React;
  // KMU Nachfolge ist bewusst nur auf Deutsch verfügbar
  const de = "de";
  const c = CONTENT.de.capital;

  const jump = (id) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: "smooth" });
    }
  };

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className={"arm-page" + (leaving ? " arm-page--leaving" : "")}>
      <ArmNav arm="capital" otherArm="advisory" onBack={() => onSwitchArm("advisory")} onHome={onBack}
              onJump={jump} lang={de} setLang={setLang} theme={theme} setTheme={setTheme} hideLang={true} />

      <Hero
        eyebrow={c.eyebrow}
        titleA={c.heroTitleA}
        titleB={c.heroTitleB}
        statement={c.heroStatement}
        meta={c.heroMeta}
        lang={de}
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
          num={c.profileNum}
          titleA={c.profileTitleA}
          titleB={c.profileTitleB}
          intro={<p>{c.profileIntro}</p>}
        />
        <SearchProfile items={c.profile} />
      </section>

      <section className="section container" id="leaders">
        <SectionHead
          num={c.leadersNum}
          titleA={c.leadersTitleA}
          titleB={c.leadersTitleB}
          intro={<p>{c.leadersIntro}</p>}
        />
        <div className="leaders-block">
          <SearchProfile items={c.leaders} />
          <div className="leaders-form">
            <div className="leaders-form__head">
              <h3>{c.leadersFormTitle}</h3>
              <div className="rule-accent"></div>
              <p>{c.leadersFormSub}</p>
            </div>
            <LeadersForm lang={de} />
          </div>
        </div>
      </section>

      <section className="section container" id="partners">
        <SectionHead
          num={c.founderNum}
          titleA={c.founderTitleA}
          titleB={c.founderTitleB}
          intro={c.founderIntro ? <p>{c.founderIntro}</p> : null}
        />
        <Founder angle="capital" lang={de} />
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
            <InquiryForm arm="capital" lang={de} />
          </div>
        </div>
      </section>

      <Footer arm="capital" onSwitchArm={onSwitchArm} lang={de} />
    </div>
  );
}

window.CapitalPage = CapitalPage;
