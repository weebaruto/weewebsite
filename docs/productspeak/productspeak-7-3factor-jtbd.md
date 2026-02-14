# Product Speak #7 — A 3-factor Jobs-To-Be-Done Score
December 2025

---

<details>
<summary><strong>“Product Speak” — A Learning Path</strong></summary>

1. Product Personas — Understanding people
2. Jobs-To-Be-Done — Understanding progress
3. Product Manifesto — Shared product ethos
4. Product Discovery — Validating hypothesis
5. Product Rhythm — Sustaining learning loop
6. ProductOps in Git — Build around customers
7. ***The 3-Factor Score - Prioritization "What matters?***

</details>

---

<details>
<summary><strong>Today’s Agenda</strong></summary>

- The Session Goal
- The Struggle
- What Are We Prioritizing?
- The How with "Owner Olivia"
- The Key Takeaways
</details>

---

<details>
<summary><strong>The Session Goal</strong></summary>

Help an engineering team **decide what to work on next** using Jobs-To-Be-Done:

- Compare JTBD in a consistent way
- Select 1–2 jobs to focus on *now*
- Explain *why* those jobs matter (to users and to the business)

</details>

---

<details>
<summary><strong>The Struggle</strong></summary>

Teams often struggle with prioritization because:
- Everything sounds important
- Loudest voice wins
- Roadmaps turn into feature wishlists
- Jobs, problems, and solutions get mixed together

</details>

---

<details>
<summary><strong>What Are We Prioritizing?</strong></summary>

We do **not** prioritize:
- Features
- Ideas
- Epics
- Requests

We prioritize **Primary Jobs To Be Done**.

> A Primary JTBD is the core job a persona is trying to accomplish — not the steps, tools, or edge cases.

</details>

---

<details>
<summary><strong>The How - Persona Reminder</strong></summary>

Owner Olivia is responsible for:
- Owning and operating a customer-facing service in production
- Ensuring reliability during releases and incidents
- Coordinating with peers/SRE teams during cross-service failures
- Maintaining clear service ownership boundaries and accountability

Olivia values:
- Fast, clear visibility without becoming an observability expert
- Trustworthy signals over noisy dashboards
- Simplicity and self-service over heavy, bespoke tooling
- Confident releases and calm incident response

When Olivia struggles, **MTTR increases, incident stress rises, and customer impact lasts longer**.

</details>

---

<details>
<summary><strong>The How - Example JTBD Set</strong></summary>

Below are example JTBD commonly associated with Owner Olivia:

1. **Instrument My Service Reliably**
   > When setting up telemetry for my service,
   > I want to instrument logs, metrics, and traces with minimal effort and complexity,
   > so I can ensure consistent visibility without becoming an observability expert.

2. **Detect and Diagnose Issues Quickly**
   > When my service begins to degrade or fail,
   > I want to understand what’s happening and why using correlated signals,
   > so I can restore service health quickly and reduce customer impact.

3. **Operate Against Clear SLOs**
   > When monitoring my service day to day,
   > I want to track meaningful SLOs and error budgets,
   > so I can prioritise reliability work and make informed release decisions.

4. **Reduce Operational Toil**
   > When managing observability workflows (alerts, dashboards, instrumentation),
   > I want to avoid repetitive manual setup,
   > so I can focus more time on product delivery and less on operational overhead.

5. **Understand Dependencies and Impact**
   > When investigating issues in a distributed system,
   > I want to see how my service interacts with others,
   > so I can identify upstream/downstream causes and collaborate effectively during incidents.

</details>

---

<details>
<summary><strong>The How - The 3-Factor JTBD Score</strong></summary>

Each JTBD is scored across **three simple dimensions**, from **1 (low)** to **5 (high)**.

The goal is **shared understanding**, not mathematical precision.

#### Factor 1: Pain / Struggle

**How painful is this job for Owner Olivia today?**

Ask:
- Does Olivia rely on copy-paste dashboards, tribal knowledge, or manual workarounds?
- Is there anxiety about missing context during an incident?
- Does this job consume excessive time or attention during releases / on-call?

Score Guide:
- **5** – High stress, high risk, constant frustration
- **3** – Annoying but manageable
- **1** – Minor inconvenience

#### Factor 2: Frequency / Criticality

**How often does this job matter, or how critical is it when it does?**

Ask:
- Is this daily, weekly, or only during incidents?
- If it goes wrong, does it create real customer impact or on-call pain?

Score Guide:
- **5** – Daily and business-critical (or critical whenever it happens)
- **3** – Regular but not constant
- **1** – Occasional or low impact

#### Factor 3: Strategic Fit (Now-ness)

**Does solving this job move our product forward *right now*?**

Ask:
- Are we focused on service owners like Olivia?
- Does this support adoption, trust, and day-2 operations?
- Is this aligned with our current product bets (e.g., standardisation, self-service, OTel-first)?

Score Guide:
- **5** – Directly aligned with current strategy
- **3** – Helpful but not central
- **1** – Valid job, wrong timing

</details>

---

<details>
<summary><strong>The How - Example Scoring</strong></summary>

JTBD Priority = Pain × Frequency × Strategic Fit

| JTBD | Pain | Frequency | Strategic Fit | Score |
|----|----|----|----|----|
| Detect and Diagnose Issues Quickly | 5 | 5 | 5 | 125 |
| Instrument My Service Reliably | 4 | 4 | 5 | 80 |
| Operate Against Clear SLOs | 4 | 4 | 4 | 64 |
| Understand Dependencies and Impact | 4 | 3 | 4 | 48 |
| Reduce Operational Toil | 3 | 3 | 4 | 36 |

This makes trade-offs explicit and discussable.

</details>

---

<details>
<summary><strong>The How - From Priority to Action</strong></summary>

Do **not** turn these JTBD directly into features or backlog items, categorize them as do Now, Next or Later:

#### Now

- **Detect and Diagnose Issues Quickly**
- **Instrument My Service Reliably**

These jobs are:
- Highest scores
- Highly painful
- Frequent / critical
- Strategically aligned
- Rich in learning opportunity

#### Next
- Operate Against Clear SLOs
- Understand Dependencies and Impact

These jobs are:
- Important, but may need dependencies, missing insight, or staged rollout

#### Later
- Reduce Operational Toil

These jobs are:
- Real jobs, but less urgent than incident response and core visibility *right now*

<br  />

>**Next Step** - For each **Now** JTBD we execute our [discovery and learning loops](productspeak-4-product-discovery.md)

</details>

---

<details>
<summary><strong>The Key Takeaways</strong></summary>

- Not all Owner Olivia jobs are equal
- Prioritization makes trade-offs explicit
- The 3-factor JTBD score keeps decisions lightweight
- Focus on **learning**, not just delivery

</details>
