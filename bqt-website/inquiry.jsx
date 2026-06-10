/* global React, CONTENT */

// ============================================
// FORM SUBMISSION
// Option A (recommended): paste a Formspree endpoint below,
//   e.g. "https://formspree.io/f/xxxxabcd". Submissions then
//   arrive in the inbox of the account behind the endpoint.
// Option B (default while empty): the form opens the visitor's
//   mail client with a prefilled message to the address below.
// ============================================
const FORM_ENDPOINT = "https://formspree.io/f/mpqelyrl";
const FORM_FALLBACK_MAIL = "cyril.bouquet@bqtpartners.com";

function InquiryForm({ arm, lang }) {
  const { useState } = React;
  const [submitted, setSubmitted] = useState(false);
  const [data, setData] = useState({
    name: "", email: "", company: "",
    nature: "", desc: "", timing: "", revenue: "", role: "",
  });

  const f = CONTENT[lang].form;
  const armF = f[arm];

  const set = (k) => (e) => setData({ ...data, [k]: e.target.value });
  const setChip = (k, v) => () => setData({ ...data, [k]: v });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { bereich: arm, ...data };
    const mailFallback = () => {
      const subject = encodeURIComponent("Anfrage über bqtpartners.com (" + arm + ")");
      const body = encodeURIComponent(
        Object.entries(payload)
          .filter(([, v]) => v)
          .map(([k, v]) => k + ": " + v)
          .join("\n")
      );
      window.location.href = "mailto:" + FORM_FALLBACK_MAIL + "?subject=" + subject + "&body=" + body;
    };
    if (FORM_ENDPOINT) {
      try {
        const res = await fetch(FORM_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json", "Accept": "application/json" },
          body: JSON.stringify(payload),
        });
        if (!res.ok) mailFallback();
      } catch (err) {
        mailFallback();
      }
      setSubmitted(true);
    } else {
      mailFallback();
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="form-success">
        <h4>{f.successHead}</h4>
        <p>{f.successBody}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-row__num">01</div>
        <label className="form-row__label">{f.q01}</label>
        <input value={data.name} onChange={set("name")} placeholder={f.q01p} required />
      </div>

      <div className="form-row">
        <div className="form-row__num">02</div>
        <label className="form-row__label">{f.q02}</label>
        <input type="email" value={data.email} onChange={set("email")} placeholder={f.q02p} required />
      </div>

      <div className="form-row">
        <div className="form-row__num">03</div>
        <label className="form-row__label">{f.q03}</label>
        <input value={data.company} onChange={set("company")} placeholder={f.q03p} />
      </div>

      {arm === "advisory" ? (
        <>
          <div className="form-row">
            <div className="form-row__num">04</div>
            <label className="form-row__label">{armF.q04}</label>
            <div className="form-row__chips">
              {armF.natures.map((n) => (
                <button type="button" key={n}
                  className={"chip" + (data.nature === n ? " chip--active" : "")}
                  onClick={setChip("nature", n)}>{n}</button>
              ))}
            </div>
          </div>
          <div className="form-row">
            <div className="form-row__num">05</div>
            <label className="form-row__label">{armF.q05}</label>
            <textarea rows="3" value={data.desc} onChange={set("desc")} placeholder={armF.q05p} />
          </div>
        </>
      ) : (
        <>
          <div className="form-row">
            <div className="form-row__num">04</div>
            <label className="form-row__label">{armF.q04}</label>
            <div className="form-row__chips">
              {armF.revenues.map((r) => (
                <button type="button" key={r}
                  className={"chip" + (data.revenue === r ? " chip--active" : "")}
                  onClick={setChip("revenue", r)}>{r}</button>
              ))}
            </div>
          </div>
          <div className="form-row">
            <div className="form-row__num">05</div>
            <label className="form-row__label">{armF.q05}</label>
            <textarea rows="3" value={data.desc} onChange={set("desc")} placeholder={armF.q05p} />
          </div>
          <div className="form-row">
            <div className="form-row__num">06</div>
            <label className="form-row__label">{armF.q06}</label>
            <div className="form-row__chips">
              {armF.roles.map((r) => (
                <button type="button" key={r}
                  className={"chip" + (data.role === r ? " chip--active" : "")}
                  onClick={setChip("role", r)}>{r}</button>
              ))}
            </div>
          </div>
        </>
      )}

      <div className="form-submit">
        {f.disclaimer ? <p className="form-disclaimer">{f.disclaimer}</p> : <span></span>}
        <button type="submit" className="btn btn--accent btn--submit">
          {CONTENT[lang].common.submit} <span className="arrow">→</span>
        </button>
      </div>
    </form>
  );
}

// ============================================
// LEADERS MINI FORM (capital · Führung)
// ============================================
function LeadersForm({ lang }) {
  const { useState } = React;
  const [submitted, setSubmitted] = useState(false);
  const [data, setData] = useState({ name: "", email: "", about: "", linkedin: "" });
  const f = CONTENT[lang].form;
  const lf = f.leaders;
  const set = (k) => (e) => setData({ ...data, [k]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = { bereich: "fuehrung", ...data };
    const mailFallback = () => {
      const subject = encodeURIComponent("Anfrage über bqtpartners.com (fuehrung)");
      const body = encodeURIComponent(
        Object.entries(fields)
          .filter(([, v]) => v)
          .map(([k, v]) => k + ": " + v)
          .join("\n")
      );
      window.location.href = "mailto:" + FORM_FALLBACK_MAIL + "?subject=" + subject + "&body=" + body;
    };
    if (FORM_ENDPOINT) {
      try {
        const res = await fetch(FORM_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json", "Accept": "application/json" },
          body: JSON.stringify(fields),
        });
        if (!res.ok) mailFallback();
      } catch (err) {
        mailFallback();
      }
      setSubmitted(true);
    } else {
      mailFallback();
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="form-success">
        <h4>{f.successHead}</h4>
        <p>{f.successBody}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-row__num">01</div>
        <label className="form-row__label">{lf.q01}</label>
        <input value={data.name} onChange={set("name")} placeholder={f.q01p} required />
      </div>
      <div className="form-row">
        <div className="form-row__num">02</div>
        <label className="form-row__label">{lf.q02}</label>
        <input type="email" value={data.email} onChange={set("email")} placeholder={f.q02p} required />
      </div>
      <div className="form-row">
        <div className="form-row__num">03</div>
        <label className="form-row__label">{lf.q03}</label>
        <textarea rows="3" value={data.about} onChange={set("about")} placeholder={lf.q03p} />
      </div>
      <div className="form-row">
        <div className="form-row__num">04</div>
        <label className="form-row__label">{lf.q04}</label>
        <input value={data.linkedin} onChange={set("linkedin")} placeholder={lf.q04p} />
      </div>
      <div className="form-submit">
        <span></span>
        <button type="submit" className="btn btn--accent btn--submit">
          {CONTENT[lang].common.submit} <span className="arrow">→</span>
        </button>
      </div>
    </form>
  );
}

window.InquiryForm = InquiryForm;
window.LeadersForm = LeadersForm;
