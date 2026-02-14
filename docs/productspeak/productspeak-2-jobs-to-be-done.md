# Product Speak #2 — Jobs-To-Be-Done

16th October 2025

---

<details>
<summary><strong>“Product Speak” – A Learning Path</strong></summary>

- Product Personas – Understanding people
- ***Jobs-To-Be-Done – Understanding progress***
- Product Manifesto – Shared product ethos
- Product Discovery – Validating hypothesis
- Product Rhythm – Sustaining learning loop
- ProductOps in Git – Build around customers

</details>

---

<details>
<summary><strong>Today’s Agenda</strong></summary>

- What
- Why
- How
- Dos & Don’ts
- Working Example (Owner Olivia)

</details>

---

<details>
<summary><strong>Jobs-To-Be-Done – What</strong></summary>

Asserts that customers don’t just “buy products”;
they “hire” (and “fire”) solutions to do a “job” in their lives.

- A “job” is not merely a task; it includes emotional and social dimensions
- The “to-be” is not just now, but the progress they want to achieve
- Shifts focus to the outcome, not the solution:

> “***When*** [situation], ***I want to*** [motivation], ***so I can*** [expected outcome]”

- Example: A service owner doesn’t adopt observability tooling because they want dashboards — they do it to confidently operate reliable services and resolve incidents faster.
- Commonly associated with Clayton Christensen & Tony Ulwick

</details>

---

<details>
<summary><strong>Jobs-To-Be-Done – Why</strong></summary>

- Focus on motivation — why someone adopts, sticks with, or abandons a product
- “Right” solutions are defined by perceived progress, not features
- Creates a shared language across product, design, and engineering
- Reveals unmet needs and poorly served moments
- Improves positioning — you know *why* you’re hired
- Jobs are stable over time; tools and technologies change

</details>

---

<details>
<summary><strong>Jobs-To-Be-Done – How</strong></summary>

1. Understand the persona — environment, pressures, incentives
2. Identify core & related jobs — real progress being sought
3. Define a core JTBD statement — clear and testable
4. Map the job journey — where friction and delay occur
5. Identify desired outcomes & metrics — how success is measured
6. Identify drivers & constraints — what enables or blocks progress
7. Translate into opportunities — product bets, not features
8. Create a JTBD canvas — visual shared understanding
9. Validate & iterate — learning over certainty

</details>

---

<details>
<summary><strong>Jobs-To-Be-Done – Dos & Don’ts</strong></summary>

- Do focus on desired outcomes
- Do keep asking “Why?” until you reach the core motivation
- Do identify struggling moments
- Don’t confuse jobs with tasks
- Don’t assume you already know the job
- Don’t overcomplicate it — keep it testable

</details>

---

<details>
<summary><strong>Jobs-To-Be-Done – #1 Understand the Persona</strong></summary>

**Profile summary**
- Role: Service Owner responsible for a production system
- Experience: Senior engineer / tech lead with on-call responsibility
- Environment: Distributed systems, shared ownership, incident-driven
- Mindset: Pragmatic, risk-aware, delivery-focused

> “I don’t need more dashboards — I need to know what’s wrong, why, and what to do next.”

**Core characteristics**
- Accountable for reliability and customer impact
- Coordinates with SREs and peer teams during incidents
- Balances feature delivery with operational health
- Values clarity, speed, and trust in tooling

</details>

---

<details>
<summary><strong>Jobs-To-Be-Done – #2 Identify Core & Related Jobs</strong></summary>

**Functional Jobs**
- Detect and diagnose service issues quickly
- Instrument services consistently and correctly
- Monitor against meaningful SLOs
- Understand dependencies and blast radius

**Emotional Jobs**
- Feel confident during incidents
- Reduce stress while on-call
- Trust signals without second-guessing

**Social Jobs**
- Be seen as a reliable owner by peers
- Collaborate effectively during incidents
- Build trust with leadership and customers

</details>

---

<details>
<summary><strong>Jobs-To-Be-Done – #3 Define Core JTBD Statement</strong></summary>

***When*** my service degrades or behaves unexpectedly in production,  
***I want to*** quickly understand what’s happening and why,  
***so I can*** restore service health with confidence and minimize customer impact.

This captures:
- **Why**: confidence and reliability
- **How**: fast, trustworthy insight
- **Outcome**: reduced MTTR and calmer incidents

</details>

---

<details>
<summary><strong>Jobs-To-Be-Done – #4 Map The Job Journey</strong></summary>

| Stage | Olivia’s Focus | Main Pain Point | Desired Progress |
|------|----------------|----------------|-----------------|
| Trigger / Struggle | Alert fires or customer impact | Noisy / unclear alerts | Clear signal of real issues |
| Investigation | Finding root cause | Disconnected tools | Correlated logs, metrics, traces |
| Diagnosis | Understanding impact | Unknown dependencies | Clear blast radius |
| Resolution | Fixing & validating | Slow feedback loops | Fast confirmation of recovery |
| Review | Post-incident learning | Missing context | Actionable insights |

</details>

---

<details>
<summary><strong>Jobs-To-Be-Done – #5 Identify Desired Outcomes & Metrics</strong></summary>

| Outcome Type | Desired Outcome | Example Metrics |
|-------------|----------------|----------------|
| Speed | Faster diagnosis | MTTR |
| Confidence | Trustworthy signals | Alert precision |
| Reliability | Fewer repeat incidents | Error budget burn |
| Collaboration | Better incident coordination | Time to engage right team |

</details>

---

<details>
<summary><strong>Jobs-To-Be-Done – #6 Identify Job Drivers & Constraints</strong></summary>

**Drivers**
- Customer impact
- On-call fatigue
- Release confidence
- Operational excellence

**Constraints**
- Legacy instrumentation
- Fragmented tooling
- Limited time
- Cognitive load during incidents

</details>

---

<details>
<summary><strong>Jobs-To-Be-Done – #7 Translate Into Opportunities</strong></summary>

| JTBD Insight | Opportunity |
|-------------|-------------|
| Need fast diagnosis | Opinionated defaults |
| Tool overload | Unified experience |
| Dependency blind spots | Service maps |
| Alert fatigue | Smarter alerting |

</details>

---

<details>
<summary><strong>Jobs-To-Be-Done – #8 Create JTBD Canvas</strong></summary>

| Component | Description |
|---------|-------------|
| Job Statement | When operating a production service, Olivia wants fast, trustworthy insight so she can restore reliability quickly and confidently. |
| Functional Jobs | Detect issues, diagnose causes, understand impact |
| Emotional Jobs | Feel calm, confident, in control |
| Social Jobs | Be a dependable service owner |
| Pain Points | Noisy alerts, tool sprawl, missing context |
| Desired Outcomes | Lower MTTR, higher confidence, fewer incidents |
| Constraints | Time pressure, legacy systems |

</details>

---

<details>
<summary><strong>Jobs-To-Be-Done – #9 Validate & Iterate</strong></summary>

- Observe incident response in real situations
- Measure impact on MTTR and alert quality
- Re-interview: “What changed about how you handle incidents?”

</details>

---

<details>
<summary><strong>Jobs-To-Be-Done – Final Takeaway</strong></summary>

- Owner Olivia’s job is not “using observability tools”
- Her real job is **operating reliable services under pressure**
- Products that help her make progress win trust, adoption, and advocacy

</details>
