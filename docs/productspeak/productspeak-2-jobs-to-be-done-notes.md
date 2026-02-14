# Product Speak #2 – Jobs To Be Done Notes (Owner Olivia)

<details>
<summary><strong>Jobs-To-Be-Done - What</strong></summary>

The JTBD framework asserts that customers don’t just “buy products” — they *hire* solutions to do a “job” in their lives.
You succeed when your offering helps them make progress better than alternatives, and you can be “fired” when something better comes along.

- A “job” is not merely a functional task; it includes functional, emotional, and social dimensions.
- The “to-be” highlights progress — what someone wants to achieve, improve, or avoid.
- JTBD shifts focus away from features and personas toward the progress the customer is trying to make.
- JTBD are expressed as statements:

> **When** [situation], **I want to** [motivation], **so I can** [expected outcome]

- Example: A service owner doesn’t adopt observability tooling because they want dashboards — they do it to operate reliable services and resolve incidents faster.
- Commonly associated with Clayton Christensen (theory) and Tony Ulwick (practical framework)

</details>

---

<details>
<summary><strong>Jobs-To-Be-Done - Why</strong></summary>

- Focuses on motivation — why customers adopt, continue using, or abandon solutions
- Customers define success based on perceived progress in their context
- Creates a shared language across product, design, and engineering
- Uncovers unmet needs and poorly served moments
- Enables clearer positioning and messaging
- Jobs remain stable over time even as tools and technologies change

</details>

---

<details>
<summary><strong>Jobs-To-Be-Done - How</strong></summary>

1️⃣ **Understand the Persona**  
Understand the environment, pressures, and motivations that shape behavior.
- What progress they are trying to make
- The circumstances around struggle and decision-making
- Forces that enable or block progress

2️⃣ **Identify Core & Related Jobs**  
Focus on real progress, not tasks.
- **Core Job** — the primary reason a solution is hired
- **Functional Supplementary Jobs** — supporting tasks
- **Emotional Supplementary Jobs** — how they want to feel
- **Social Supplementary Jobs** — how they want to be perceived

3️⃣ **Define Core JTBD Statement**  
Use a consistent, testable format:
- When [situation], I want to [motivation], so I can [desired outcome]

4️⃣ **Map the Job Journey**  
Understand progress from start to finish:
- Trigger / Struggle
- Investigation / Consideration
- Use / Response
- Evaluation
- Change / Improvement

5️⃣ **Identify Desired Outcomes & Metrics**  
- Define what success looks like from the user’s perspective
- Quantify where possible (e.g., MTTR, alert quality)
- Rank outcomes by importance vs satisfaction

6️⃣ **Identify Drivers & Constraints**  
Drivers:
- Customer impact
- On-call pressure
- Need for speed and confidence

Constraints:
- Tool sprawl
- Legacy systems
- Cognitive load under stress

7️⃣ **Translate into Product Opportunities**  
- Turn JTBD insight into product bets
- Prioritize outcomes over features

8️⃣ **Create Jobs-To-Be-Done Canvas**  
Capture shared understanding:
- Job Statement
- Functional / Emotional / Social Jobs
- Pains and Barriers
- Desired Outcomes
- Drivers & Constraints
- Opportunities

9️⃣ **Validate and Iterate**  
- Observe real workflows (e.g., incidents)
- Measure improvement in outcomes
- Re-interview: “What changed about how you operate?”

</details>

---

<details>
<summary><strong>Jobs-To-Be-Done - Dos and Don’ts</strong></summary>

- Do focus on desired outcomes, not tools
- Do keep asking “Why?” to reach core motivation
- Do identify struggling moments
- Don’t confuse jobs with tasks
- Don’t assume you already know the job
- Don’t overcomplicate it — keep it testable

</details>

---

<details>
<summary><strong>Jobs-To-Be-Done – Example “Owner Olivia”</strong></summary>

1️⃣ **Understand the Persona**

**Profile summary**
- Role: Service Owner responsible for a production system
- Experience: Senior engineer or tech lead with on-call responsibility
- Environment: Distributed systems, shared ownership, incident-driven
- Mindset: Pragmatic, reliability-focused, outcome-oriented

> “When something breaks, I need to know what’s wrong and what to do next — fast.”

**Core characteristics**
- Accountable for service reliability and customer impact
- Coordinates with SREs and peer teams during incidents
- Balances feature delivery with operational health

---

2️⃣ **Identify Core & Related Jobs**

**Functional Jobs**
- Detect and diagnose service issues quickly
- Understand service dependencies and blast radius
- Validate fixes and recovery

**Emotional Jobs**
- Feel confident during incidents
- Reduce stress while on-call
- Trust signals without second-guessing

**Social Jobs**
- Be seen as a dependable service owner
- Collaborate effectively during incidents
- Build trust with peers and leadership

---

3️⃣ **Define Core JTBD Statement**

When my service degrades or behaves unexpectedly in production,  
I want to quickly understand what’s happening and why,  
so I can restore reliability with confidence and minimize customer impact.

---

4️⃣ **Map the Job Journey**

| Stage | Olivia’s Focus | Main Pain Point | Desired Progress |
|------|---------------|----------------|-----------------|
| Trigger / Struggle | Alert fires or customer impact | Noisy or unclear alerts | Clear signal of real issues |
| Investigation | Finding root cause | Disconnected tools | Correlated signals |
| Diagnosis | Understanding impact | Unknown dependencies | Clear blast radius |
| Resolution | Fixing and validating | Slow feedback | Fast confirmation |
| Review | Learning | Missing context | Actionable insight |

---

5️⃣ **Identify Desired Outcomes & Metrics**

| Outcome | Desired Result | Example Metrics |
|-------|----------------|----------------|
| Speed | Faster diagnosis | MTTR |
| Confidence | Trustworthy alerts | Alert precision |
| Reliability | Fewer repeat incidents | Error budget burn |
| Collaboration | Faster coordination | Time to engage right team |

---

6️⃣ **Identify Drivers & Constraints**

**Drivers**
- Customer impact
- On-call fatigue
- Release confidence

**Constraints**
- Legacy instrumentation
- Tool sprawl
- Limited time and attention

---

7️⃣ **Translate into Product Opportunities**

| JTBD Insight | Opportunity |
|-------------|-------------|
| Need fast diagnosis | Opinionated defaults |
| Alert fatigue | Smarter alerting |
| Dependency blind spots | Service maps |
| Tool overload | Unified experience |

---

8️⃣ **Create Jobs-To-Be-Done Canvas**

Component | Description
--------- | -----------
Job Statement | When operating a production service, Olivia wants fast, trustworthy insight so she can restore reliability quickly and confidently.
Functional Jobs | Detect issues, diagnose causes, validate recovery
Emotional Jobs | Feel calm, confident, in control
Social Jobs | Be a dependable service owner
Pain Points | Noisy alerts, tool sprawl, missing context
Desired Outcomes | Lower MTTR, higher confidence, fewer incidents
Key Constraints | Time pressure, legacy systems

---

9️⃣ **Validate and Iterate**

- Observe real incident response
- Measure impact on MTTR and alert quality
- Ask: “What changed about how you handle incidents?”

</details>
