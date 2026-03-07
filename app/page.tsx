import Link from "next/link";
import PageClient from "@/components/PageClient";

const CAL_LINK = "https://calendar.app.google/btEvYthrFhSV3bCR7";
const CALCULATOR_LINK = "https://pipeline-engine-calculator.vercel.app/";

export default function Home() {
  return (
    <PageClient>
      <nav>
        <Link href="#" className="nav-logo">
          Pipeline<span>Engine</span>
        </Link>
        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          <a
            href={CALCULATOR_LINK}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "var(--amber)",
              fontSize: "14px",
              fontWeight: 600,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              textDecoration: "none",
            }}
          >
            Free Assessment
          </a>
          <a href={CAL_LINK} target="_blank" rel="noopener noreferrer" className="nav-cta">
            Book a Call
          </a>
        </div>
      </nav>

      <section id="hero">
        <div className="hero-grid" />
        <div className="hero-glow" />
        <div className="hero-inner">
          <div className="hero-eyebrow">
            Done-for-you lead generation · UK · US · Australia
          </div>
          <h1 className="hero-headline">
            Stop Being The Only
            <br />
            <span className="line-2">Reason Leads Come In</span>
          </h1>
          <p className="hero-sub">
            Your recruitment agency is brilliant at placing people. But if you
            stopped doing BD tomorrow, the pipeline would dry up by Friday.
            That&apos;s not a business. That&apos;s a job with a team attached.
          </p>
          <div className="hero-ctas">
            <a href={CAL_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Book a Free Discovery Call
            </a>
            <a
              href={CALCULATOR_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ borderColor: "rgba(232,160,32,0.4)", color: "var(--amber-light)" }}
            >
              Take the 3-Min Assessment
            </a>
          </div>
          <p className="hero-guarantee">
            <strong>No long contracts. No vanity metrics.</strong> Just qualified
            client conversations — or I work for free.
          </p>
          <div className="hero-markets">
            <span>Serving:</span>
            <div className="market-flag">🇬🇧 United Kingdom</div>
            <div className="market-flag">🇺🇸 United States</div>
            <div className="market-flag">🇦🇺 Australia</div>
          </div>
        </div>
      </section>

      <section id="problem">
        <div className="container--narrow">
          <span className="section-label">The Founder Trap</span>
          <h2 className="fade-up">
            You built something real.
            <br />
            Now it can&apos;t run without you.
          </h2>
          <p className="problem-intro fade-up">
            Most recruitment agencies are brilliant at placing people. Terrible
            at winning new clients. You got here on hustle, relationships, and
            sheer bloody-mindedness. That&apos;s real. That counts. And
            it&apos;s also the exact thing that&apos;s capping your growth.
          </p>
          <div className="problem-quote fade-up">
            &quot;If you left your agency tomorrow, would qualified leads still
            come in?
            <br />
            If not — you don&apos;t have a business. You have a job.&quot;
          </div>
          <div
            className="fade-up"
            style={{
              textAlign: "center",
              marginBottom: "32px",
            }}
          >
            <a
              href={CALCULATOR_LINK}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "var(--amber-dim)",
                border: "1px solid rgba(232,160,32,0.3)",
                padding: "14px 28px",
                color: "var(--amber-light)",
                fontWeight: 600,
                textDecoration: "none",
                fontSize: "15px",
                letterSpacing: "0.04em",
              }}
            >
              Find out your number — take the free Dependency Score assessment →
            </a>
          </div>
          <p
            className="fade-up"
            style={{
              color: "var(--grey-light)",
              fontSize: "17px",
              lineHeight: 1.7,
            }}
          >
            Here&apos;s what that looks like from the inside. Monday morning: two
            consultants with empty desks. Nobody says it out loud, but everyone
            in that room knows. You&apos;ve got placements running, clients to
            call, a team to manage — and somewhere at the bottom of the pile, a
            BD task that keeps getting pushed.
          </p>
          <p
            className="fade-up"
            style={{
              color: "var(--grey-light)",
              fontSize: "17px",
              lineHeight: 1.7,
              marginTop: "16px",
            }}
          >
            By the time you&apos;re at your desk thinking about marketing,
            there&apos;s nothing left in the tank. So it doesn&apos;t happen. And
            then it&apos;s Q3 and the bank balance looks nothing like Q2.
          </p>
          <div className="problem-grid" style={{ marginTop: "56px" }}>
            <div className="problem-card fade-up">
              <div className="problem-card-num">01</div>
              <h3>The Feast-or-Famine Cycle</h3>
              <p
                style={{
                  color: "var(--grey-light)",
                  fontSize: "15px",
                }}
              >
                It&apos;s not about effort. You&apos;re one of the
                hardest-working people in any room. The cycle is structural —
                BD only happens when the desk goes quiet, which is exactly when
                you&apos;re already behind.
              </p>
            </div>
            <div className="problem-card fade-up">
              <div className="problem-card-num">02</div>
              <h3>The Ceiling Is You</h3>
              <p
                style={{
                  color: "var(--grey-light)",
                  fontSize: "15px",
                }}
              >
                Every client relationship lives in your phone. Every BD call goes
                through you. You want to hire another consultant, but can you
                guarantee their desk will be full? If not — the pipeline problem
                stops growth in its tracks.
              </p>
            </div>
            <div className="problem-card fade-up">
              <div className="problem-card-num">03</div>
              <h3>The Cost of Staying Stuck</h3>
              <p
                style={{
                  color: "var(--grey-light)",
                  fontSize: "15px",
                }}
              >
                While you&apos;re running everything yourself, your competitors
                are building systems. Give it three years and the gap
                isn&apos;t effort — it&apos;s infrastructure. The window to build
                yours is now, not when things get harder.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="failures">
        <div className="container--narrow">
          <span className="section-label">Past Failures</span>
          <h2 className="fade-up">
            You&apos;ve already tried.
            <br />
            Here&apos;s why it didn&apos;t work.
          </h2>
          <p
            className="fade-up"
            style={{
              color: "var(--grey-light)",
              fontSize: "18px",
              marginTop: "24px",
              marginBottom: "8px",
            }}
          >
            You&apos;re not reading this because you haven&apos;t tried to fix
            it. You&apos;ve spent money. You&apos;ve given it time. None of it
            stuck. That&apos;s not on you — it&apos;s structural.
          </p>
          <table className="failures-table fade-up">
            <tbody>
              <tr>
                <td className="failure-label">Agencies</td>
                <td style={{ color: "var(--grey-light)" }}>
                  Sold deliverables. Reported on impressions. Two months in you
                  were getting weekly updates on reach and follower counts while
                  your desks stayed empty. They were optimising for their case
                  study, not your pipeline.
                </td>
              </tr>
              <tr>
                <td className="failure-label">Freelancers</td>
                <td style={{ color: "var(--grey-light)" }}>
                  Fragmented. A copywriter here, an SEO person there, someone
                  handling LinkedIn. Nothing talked to each other. No one owned
                  the whole picture. You got parts of a system and none of the
                  results.
                </td>
              </tr>
              <tr>
                <td className="failure-label">DIY</td>
                <td style={{ color: "var(--grey-light)" }}>
                  Worked for about two weeks. Then a placement went sideways, or
                  a big client needed attention, and the marketing task was the
                  first thing dropped. No accountability. Too easy to
                  deprioritise.
                </td>
              </tr>
              <tr>
                <td className="failure-label">AI Outreach</td>
                <td style={{ color: "var(--grey-light)" }}>
                  Volume without relevance. You got replies — some of them even
                  polite. But decision-makers in tech and engineering hiring know
                  a mass sequence when they see one. Quality was low, and trust
                  was lower.
                </td>
              </tr>
            </tbody>
          </table>
          <div className="bridge-box fade-up">
            Nobody built a joined-up system around what a qualified recruitment
            lead actually looks like. That&apos;s the whole problem. And
            it&apos;s exactly what Pipeline Engine is built to fix.
          </div>
        </div>
      </section>

      <section id="difference">
        <div className="container--narrow">
          <span className="section-label">Why Pipeline Engine is Different</span>
          <h2 className="fade-up">
            I&apos;m not a marketer who
            <br />
            learned about recruitment.
          </h2>
          <p className="diff-intro fade-up">
            I&apos;m a salesperson who learned marketing. That changes every
            single decision I make. A marketer asks: &quot;What&apos;s the
            CTR?&quot; I ask: &quot;Would I want to take that call?&quot; Very
            different filters. Very different outcomes.
          </p>
          <div className="diff-grid">
            <div className="diff-card fade-up">
              <div className="diff-icon">💬</div>
              <h3>Conversations, Not Clicks</h3>
              <p
                style={{
                  color: "var(--grey-light)",
                  fontSize: "15px",
                  lineHeight: 1.65,
                }}
              >
                I&apos;ve been on a sales floor. I know what a qualified lead
                feels like — not just what it looks like on a dashboard. Every
                campaign is built backward from the conversation you want to
                have, not the metric that looks good in a report.
              </p>
            </div>
            <div className="diff-card fade-up">
              <div className="diff-icon">🎯</div>
              <h3>5 Clients Maximum</h3>
              <p
                style={{
                  color: "var(--grey-light)",
                  fontSize: "15px",
                  lineHeight: 1.65,
                }}
              >
                I work with a maximum of 5 clients at once. That&apos;s not a
                constraint — it&apos;s the point. You get focus, not a junior
                account manager and a templated strategy. Your business gets
                treated like the only one that matters, because it is.
              </p>
            </div>
            <div className="diff-card fade-up">
              <div className="diff-icon">🛡️</div>
              <h3>90-Day Guarantee</h3>
              <p
                style={{
                  color: "var(--grey-light)",
                  fontSize: "15px",
                  lineHeight: 1.65,
                }}
              >
                If the system doesn&apos;t generate qualified enquiries in 90
                days, I work for free until it does. No small print. No wriggle
                room. That&apos;s not a marketing line — it&apos;s how confident
                I am in the system we build together.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works">
        <div className="container--narrow">
          <span className="section-label">The System</span>
          <h2 className="fade-up">
            Three phases.
            <br />
            One working pipeline.
          </h2>
          <p
            className="fade-up"
            style={{
              color: "var(--grey-light)",
              fontSize: "18px",
              marginTop: "20px",
              marginBottom: "8px",
            }}
          >
            Your job: attend calls. Everything else is handled.
          </p>
          <div className="phases fade-up">
            <div className="phase">
              <div className="phase-num">
                <div className="phase-num-big">1</div>
                <div className="phase-num-label">Foundation</div>
              </div>
              <div className="phase-content">
                <span className="phase-timing">Days 1–7</span>
                <div className="phase-title">Audit + Strategy Roadmap</div>
                <p
                  style={{
                    color: "var(--grey-light)",
                    fontSize: "15px",
                  }}
                >
                  A 60-minute fast-start call. We extract everything needed —
                  your ICP, your niche, your current BD situation. Within 7 days
                  you have a full Pipeline Audit and a Strategy Roadmap delivered
                  on a call. No guessing. No templated strategy. Built around
                  your business specifically.
                </p>
              </div>
            </div>
            <div className="phase">
              <div className="phase-num">
                <div className="phase-num-big">2</div>
                <div className="phase-num-label">The Build</div>
              </div>
              <div className="phase-content">
                <span className="phase-timing">Weeks 2–8</span>
                <div className="phase-title">
                  Inbound Funnel + Outbound Campaign
                </div>
                <p
                  style={{
                    color: "var(--grey-light)",
                    fontSize: "15px",
                  }}
                >
                  Your inbound funnel is built: lead magnet, landing page, 90-day
                  content strategy, nurture sequence. Your outbound cold email
                  campaign is built and launched to your exact ICP. You have a
                  live portal access throughout. Bi-weekly update calls already
                  booked in your calendar.
                </p>
              </div>
            </div>
            <div className="phase">
              <div className="phase-num">
                <div className="phase-num-big">3</div>
                <div className="phase-num-label">Live</div>
              </div>
              <div className="phase-content">
                <span className="phase-timing">Month 3+</span>
                <div className="phase-title">
                  System Live — Enquiries Flowing
                </div>
                <p
                  style={{
                    color: "var(--grey-light)",
                    fontSize: "15px",
                  }}
                >
                  The full system is operational. Qualified client enquiries are
                  flowing into your calendar. The subscription begins and keeps
                  the engine running — content, ads, optimisation — managed every
                  month so the pipeline compounds over time.
                </p>
              </div>
            </div>
          </div>
          <div className="metaphor-box fade-up">
            <strong
              style={{
                color: "var(--amber)",
                fontFamily: "var(--font-head)",
                fontSize: "18px",
                textTransform: "uppercase",
                letterSpacing: "0.04em",
              }}
            >
              The Vehicle and The Fuel
            </strong>
            <br />
            <br />
            The system build is the vehicle. The monthly subscription is the
            fuel. One without the other doesn&apos;t move. Cancelling the
            subscription doesn&apos;t save money — it wastes the system you just
            invested in building.
          </div>
        </div>
      </section>

      <section id="offer">
        <div className="container--narrow">
          <span className="section-label">The Offer</span>
          <h2 className="fade-up">
            Everything you need.
            <br />
            Nothing you don&apos;t.
          </h2>
          <div className="offer-stack fade-up">
            <div className="offer-item">
              <div className="offer-check">✓</div>
              <div className="offer-item-name">
                <strong>Full 90-day inbound + outbound system build</strong>
                <br />
                <span
                  style={{ color: "var(--grey)", fontSize: "14px" }}
                >
                  The complete pipeline infrastructure, built and delivered
                </span>
              </div>
              <div className="offer-item-value">£3,500</div>
            </div>
            <div className="offer-item">
              <div
                className="offer-check"
                style={{
                  background: "rgba(232,160,32,0.2)",
                  borderColor: "rgba(232,160,32,0.4)",
                }}
              >
                🎁
              </div>
              <div className="offer-item-name">
                <strong>First month of subscription included</strong>
                <br />
                <span
                  style={{ color: "var(--grey)", fontSize: "14px" }}
                >
                  Fuel from day one — content, ads, and optimisation running
                  immediately
                </span>
              </div>
              <div className="offer-item-value" style={{ color: "var(--grey)" }}>
                £1,500
              </div>
            </div>
            <div className="offer-item">
              <div
                className="offer-check"
                style={{
                  background: "rgba(232,160,32,0.2)",
                  borderColor: "rgba(232,160,32,0.4)",
                }}
              >
                🎁
              </div>
              <div className="offer-item-name">
                <strong>Pipeline Audit — pre-sign marketing review</strong>
                <br />
                <span
                  style={{ color: "var(--grey)", fontSize: "14px" }}
                >
                  Know exactly where your pipeline is leaking before we start
                </span>
              </div>
              <div className="offer-item-value" style={{ color: "var(--grey)" }}>
                £497
              </div>
            </div>
            <div className="offer-item">
              <div
                className="offer-check"
                style={{
                  background: "rgba(232,160,32,0.2)",
                  borderColor: "rgba(232,160,32,0.4)",
                }}
              >
                🎁
              </div>
              <div className="offer-item-name">
                <strong>Warm Lead Closer</strong>
                <br />
                <span
                  style={{ color: "var(--grey)", fontSize: "14px" }}
                >
                  Sales framework for converting inbound enquiries into signed
                  clients
                </span>
              </div>
              <div className="offer-item-value" style={{ color: "var(--grey)" }}>
                £297
              </div>
            </div>
            <div className="offer-item">
              <div
                className="offer-check"
                style={{
                  background: "rgba(232,160,32,0.2)",
                  borderColor: "rgba(232,160,32,0.4)",
                }}
              >
                🎁
              </div>
              <div className="offer-item-name">
                <strong>Recruitment Authority LinkedIn Playbook</strong>
                <br />
                <span
                  style={{ color: "var(--grey)", fontSize: "14px" }}
                >
                  Position your agency as the go-to name in your niche
                </span>
              </div>
              <div className="offer-item-value" style={{ color: "var(--grey)" }}>
                £197
              </div>
            </div>
            <div className="offer-item">
              <div
                className="offer-check"
                style={{
                  background: "rgba(232,160,32,0.2)",
                  borderColor: "rgba(232,160,32,0.4)",
                }}
              >
                🎁
              </div>
              <div className="offer-item-name">
                <strong>Competitor Intelligence Report</strong>
                <br />
                <span
                  style={{ color: "var(--grey)", fontSize: "14px" }}
                >
                  Know exactly what you&apos;re up against and where the gaps are
                </span>
              </div>
              <div className="offer-item-value" style={{ color: "var(--grey)" }}>
                £247
              </div>
            </div>
            <div className="offer-item">
              <div
                className="offer-check"
                style={{
                  background: "rgba(232,160,32,0.2)",
                  borderColor: "rgba(232,160,32,0.4)",
                }}
              >
                🎁
              </div>
              <div className="offer-item-name">
                <strong>48-Hour Fast Start Protocol</strong>
                <br />
                <span
                  style={{ color: "var(--grey)", fontSize: "14px" }}
                >
                  Building begins within 48 hours of signing. No waiting around.
                </span>
              </div>
              <div className="offer-item-value" style={{ color: "var(--grey)" }}>
                £197
              </div>
            </div>
          </div>
          <div className="offer-total fade-up">
            <div className="offer-total-stack">
              Total stack value
              <br />
              <strong>£6,435</strong>
            </div>
            <div className="offer-price">
              <span className="offer-price-label">Founders Price</span>
              <span className="offer-price-amount">£3,500</span>
            </div>
          </div>
          <p className="founders-note fade-up">
            ⚡ Founders pricing is available to the first 5 clients only. Rate
            rises after that.
          </p>
          <div
            style={{ textAlign: "center", marginTop: "36px" }}
            className="fade-up"
          >
            <a href={CAL_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Claim a Founders Spot
            </a>
          </div>
        </div>
      </section>

      <section id="guarantee">
        <div className="container--narrow">
          <div className="guarantee-box fade-up">
            <div className="guarantee-icon">🛡️</div>
            <h2 className="guarantee-headline">
              If it doesn&apos;t work,
              <br />
              I work for free.
            </h2>
            <p className="guarantee-body">
              If after 90 days you haven&apos;t received at least 3–5 qualified
              client enquiries into your calendar, I work an additional 30 days
              completely free of charge — no questions asked — until we hit that
              number together.
            </p>
            <p className="guarantee-kicker">
              I don&apos;t offer refunds. I offer results.
            </p>
          </div>
        </div>
      </section>

      <section id="who-its-for">
        <div className="container--narrow">
          <span className="section-label">Fit Check</span>
          <h2 className="fade-up">
            This is for you.
            <br />
            Or it isn&apos;t. Let&apos;s be straight.
          </h2>
          <div className="for-grid">
            <div className="for-col fade-up">
              <div className="for-col-head">
                <div className="for-dot green" />
                <div className="for-col-title">This is for you if...</div>
              </div>
              <ul className="for-list">
                <li>You run a recruitment agency with 1–10 people</li>
                <li>You&apos;re turning over £250k+ (or equivalent in USD/AUD)</li>
                <li>
                  You specialise in tech, engineering, cyber security, IT, or
                  finance
                </li>
                <li>You want a system, not a part-time marketing assistant</li>
                <li>You&apos;re willing to show up for the calls and trust the process</li>
                <li>You measure success in clients won, not impressions gained</li>
              </ul>
            </div>
            <div className="for-col fade-up">
              <div className="for-col-head">
                <div className="for-dot red" />
                <div className="for-col-title">This isn&apos;t for you if...</div>
              </div>
              <ul className="for-list red-list">
                <li>You want to micromanage every piece of creative</li>
                <li>You don&apos;t view marketing as an investment in growth</li>
                <li>You&apos;re not prepared to engage with the process at all</li>
                <li>You want a refund option instead of a results commitment</li>
                <li>You need it to work next week, not in 90 days</li>
              </ul>
            </div>
          </div>
          <div className="capacity-note fade-up">
            I work with a maximum of 5 clients at once. That&apos;s not a
            constraint — it&apos;s the point.
            <br />
            <strong>
              If there&apos;s a spot available, you&apos;ll know it&apos;s worth
              protecting.
            </strong>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="container">
          <div className="about-inner">
            <div className="about-sidebar">
              <div className="about-avatar">
                <div className="about-avatar-inner">GW</div>
              </div>
              <div className="about-avatar-name">Gareth Wray</div>
              <div className="about-avatar-role">Founder, Pipeline Engine</div>
              <div className="about-stats">
                <div className="about-stat">
                  <span className="about-stat-num">12+</span>
                  <span className="about-stat-label">Yrs in Sales</span>
                </div>
                <div className="about-stat">
                  <span className="about-stat-num">5</span>
                  <span className="about-stat-label">Max Clients</span>
                </div>
                <div className="about-stat">
                  <span className="about-stat-num">90</span>
                  <span className="about-stat-label">Day Guarantee</span>
                </div>
              </div>
            </div>
            <div className="about-content">
              <span className="section-label">About Gareth</span>
              <h2 className="fade-up">
                Most marketing agencies have never sat on a sales floor.
                <br />
                I&apos;ve never done anything else.
              </h2>
              <div className="about-callout fade-up">
                &quot;I&apos;m not a marketer who learned about recruitment.
                I&apos;m a salesperson who learned marketing. That changes every
                decision I make.&quot;
              </div>
              <p className="fade-up">
                Twelve years in sales. On the phones. Chasing leads, qualifying
                prospects, sitting next to agency owners doing BD at 6pm after a
                full day of delivery. I&apos;ve been in those rooms. I know what
                the Monday morning huddle feels like when the desks are quiet.
              </p>
              <p className="fade-up">
                <strong>That&apos;s why Pipeline Engine exists.</strong> Not
                because I got bored of marketing, or spotted a gap in the market
                on a spreadsheet. Because I kept watching brilliant recruiters
                lose to average ones — not because they weren&apos;t good
                enough, but because they had no system.
              </p>
              <p className="fade-up">
                I built Pipeline Engine for the agency owner who&apos;s done
                everything right except build a pipeline that works without them.
                Tech, engineering, cyber, finance — I know your world, your
                buyers, and what a qualified lead in your space actually looks
                and feels like.
              </p>
              <p className="fade-up">
                Outside of work: lifelong Man Utd supporter, which has taught me
                everything I need to know about watching something you believe in
                fail to perform because of structural problems at the top. Some
                lessons are painful. Some are useful. Most are both.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="faq">
        <div className="container--narrow">
          <span className="section-label">Questions</span>
          <h2 className="fade-up">
            The things you&apos;re
            <br />
            actually wondering.
          </h2>
          <div className="faq-list fade-up">
            <div className="faq-item">
              <div className="faq-q">
                You&apos;re new — how do I know this works?
                <div className="faq-arrow">
                  <svg viewBox="0 0 14 14">
                    <polyline points="2,4 7,10 12,4" stroke="currentColor" fill="none" strokeWidth="2" />
                  </svg>
                </div>
              </div>
              <div className="faq-a">
                <div className="faq-a-inner">
                  I&apos;m new to running an agency. I&apos;m not new to sales,
                  pipelines, or what makes a lead actually convert. Twelve years
                  on a sales floor will do more for your marketing than any
                  qualification. That kind of experience is rarer in this
                  industry than you&apos;d think. And if the system
                  doesn&apos;t generate qualified enquiries in 90 days — I work
                  for free. That&apos;s not a promise. That&apos;s a contract.
                </div>
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-q">
                I&apos;ve been burned by agencies before.
                <div className="faq-arrow">
                  <svg viewBox="0 0 14 14">
                    <polyline points="2,4 7,10 12,4" stroke="currentColor" fill="none" strokeWidth="2" />
                  </svg>
                </div>
              </div>
              <div className="faq-a">
                <div className="faq-a-inner">
                  Most agencies sell packages, not outcomes. They report on what
                  they can control — reach, impressions, follower counts — while
                  you wait for clients. I build the strategy around your business
                  first. Every decision is made with your pipeline in mind, not a
                  case study for my website. The guarantee is there specifically
                  for people who&apos;ve been burned before. No financial risk.
                  Either it works, or I work until it does.
                </div>
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-q">
                Can I actually afford this?
                <div className="faq-arrow">
                  <svg viewBox="0 0 14 14">
                    <polyline points="2,4 7,10 12,4" stroke="currentColor" fill="none" strokeWidth="2" />
                  </svg>
                </div>
              </div>
              <div className="faq-a">
                <div className="faq-a-inner">
                  One new retained client pays for the full year. Do the maths on
                  your average placement fee. If the system generates even one
                  new client relationship, the return isn&apos;t 2x or 3x —
                  it&apos;s likely 5x to 10x on year one alone. The real question
                  isn&apos;t whether you can afford it. It&apos;s whether you can
                  afford another year of the same pipeline problem.
                </div>
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-q">
                What do I actually have to do?
                <div className="faq-arrow">
                  <svg viewBox="0 0 14 14">
                    <polyline points="2,4 7,10 12,4" stroke="currentColor" fill="none" strokeWidth="2" />
                  </svg>
                </div>
              </div>
              <div className="faq-a">
                <div className="faq-a-inner">
                  Attend the onboarding call. Show up for bi-weekly update calls
                  (already pre-booked into your calendar at the start).
                  Occasionally record a short video — editing is handled.
                  That&apos;s it. No writing briefs, no chasing deliverables, no
                  managing freelancers. The whole point is that you lead the
                  business while we run the pipeline.
                </div>
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-q">
                What if my niche is too specific?
                <div className="faq-arrow">
                  <svg viewBox="0 0 14 14">
                    <polyline points="2,4 7,10 12,4" stroke="currentColor" fill="none" strokeWidth="2" />
                  </svg>
                </div>
              </div>
              <div className="faq-a">
                <div className="faq-a-inner">
                  Tech, engineering, cyber security, IT, finance recruitment.
                  That&apos;s not a list of sectors I&apos;m willing to work in —
                  it&apos;s where I built my understanding of what a qualified
                  lead looks like in the first place. Your niche is my default.
                  The more specific you are, the better the outbound targeting.
                  Specificity is an advantage here, not a problem.
                </div>
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-q">
                Do you work with agencies outside the UK?
                <div className="faq-arrow">
                  <svg viewBox="0 0 14 14">
                    <polyline points="2,4 7,10 12,4" stroke="currentColor" fill="none" strokeWidth="2" />
                  </svg>
                </div>
              </div>
              <div className="faq-a">
                <div className="faq-a-inner">
                  Yes. Pipeline Engine works with recruitment agency owners
                  across the UK, US, and Australia. The sectors, the buyer
                  profile, and the BD problems translate directly. If
                  you&apos;re a tech or engineering recruitment agency in Sydney
                  or Chicago dealing with the same founder-led BD problem — the
                  system applies. Geography changes the targeting. The
                  fundamentals don&apos;t.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="cta">
        <div className="cta-glow" />
        <div className="container--narrow cta-inner">
          <span className="section-label">Ready?</span>
          <h2 className="cta-headline fade-up">
            Let&apos;s find out if
            <br />
            this is right for you.
          </h2>
          <p className="cta-sub fade-up">
            No pitch. No pressure. Just an honest conversation about your
            pipeline, what&apos;s not working, and whether Pipeline Engine is
            the right fit.
          </p>
          <div className="fade-up">
            <a
              href={CAL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ fontSize: "19px", padding: "20px 48px" }}
            >
              Book a Free Discovery Call
            </a>
          </div>
          <p className="cta-small fade-up">
            30 minutes. No obligation. If it&apos;s not the right fit, I&apos;ll
            tell you.
          </p>
        </div>
      </section>

      <footer>
        <div className="container footer-inner">
          <Link href="#" className="footer-logo">
            Pipeline<span>Engine</span>
          </Link>
          <div className="footer-links">
            <a href={CALCULATOR_LINK} target="_blank" rel="noopener noreferrer">
              Free Assessment
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="mailto:gareth@pipelineengine.com">gareth@pipelineengine.com</a>
            <a href="https://pipelineengine.com" target="_blank" rel="noopener noreferrer">
              pipelineengine.com
            </a>
          </div>
          <div className="footer-copy">
            © 2025 Pipeline Engine. UK · US · Australia.
          </div>
        </div>
      </footer>
    </PageClient>
  );
}
