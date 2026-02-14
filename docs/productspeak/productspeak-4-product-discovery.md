# Product Speak #4 — Product Discovery

30th October 2025

---

<details>
<summary><strong>“Product Speak” – A Learning Path</strong></summary>

1. Product Personas – Understanding people  
2. Jobs-To-Be-Done – Understanding progress  
3. Product Manifesto – Shared product ethos  
4. ***Product Discovery – Validating hypothesis***  
5. Product Rhythm – Sustaining learning loop  
6. ProductOps in Git – Build around customers  

</details>

---

<details>
<summary><strong>Today’s Agenda</strong></summary>

- What  
- Why  
- How (by example – Owner Olivia)  
- Takeaways  

</details>

---

<details>
<summary><strong>Product Discovery – What</strong></summary>

**Key idea**
- Discovery = reducing uncertainty about **value, usability, and viability**
- Delivery = reducing uncertainty about **feasibility and scalability**

**Two loops**
- Discovery loop: *Learn → Decide*
- Delivery loop: *Build → Ship → Measure*

**Discovery answers**
- Is this valuable? Does it solve a real job?
- Is this usable? Can the user achieve progress?
- Is this viable? Can we sustain it?

**Takeaway**
Discovery is not pre-work — it is how we build the *right* thing.

</details>

---

<details>
<summary><strong>Product Discovery – Why</strong></summary>

**Common pain**
- Teams build technically correct solutions that miss the real job

| Without Discovery | With Discovery |
|------------------|----------------|
| Feature requests | Job-based hypotheses |
| Vague goals (“add dashboard”) | Clear outcomes (“help Owner Olivia diagnose incidents faster”) |
| Big bets, slow learning | Small experiments, fast evidence |

**Takeaway**
Discovery reduces waste, builds confidence, and aligns teams around learning.

</details>

---

<details>
<summary><strong>Product Discovery – 1⃣ Frame a Hypothesis</strong></summary>

**Related JTBD**
“When my service begins to degrade or fail, I want to understand what’s happening and why, so I can restore service health quickly and reduce customer impact.”

**Template**
We believe that [persona] needs [job-to-be-done]  
so that [desired outcome].  
We’ll know this is true when [signal / measure].

**Hypothesis**
We believe that **Owner Olivia** needs **a single, correlated view of logs, metrics, and traces during incidents**  
so that **she can diagnose issues quickly without jumping between tools or guessing root cause**.

We’ll know this is true when **Olivia resolves incidents faster and relies on the correlated view as her primary triage tool**.

</details>

---

<details>
<summary><strong>Product Discovery – 2⃣ Identify Assumptions</strong></summary>

Break assumptions into three types:
- **Value** – Does Olivia care?
- **Usability** – Can she use it under pressure?
- **Feasibility** – Can we build it with current constraints?

| Assumption | Type | Evidence | Action |
|-----------|------|----------|--------|
| Olivia jumps between multiple tools today | Value | Interviews | Keep |
| Correlated view is more useful than dashboards | Value | Weak | Test first |
| Signals can be stitched reliably | Feasibility | Partial | Test |
| Low-noise presentation is possible | Usability | Unknown | Test |

</details>

---

<details>
<summary><strong>Product Discovery – 3⃣ Design Lean Experiments</strong></summary>

**Goal**
Generate evidence quickly and cheaply.

**Experiment**
High-touch usability test using a manually prepared **Correlated Incident Snapshot**.

**Method**
1. Select 2–3 recent incidents.
2. Manually assemble:
   - timeline of events
   - key logs
   - trace exemplar
   - latency & error metrics
3. Ask Olivia to diagnose using *only* the snapshot.

**Success signal**
- Faster time to understanding
- Fewer tool switches
- Higher confidence

</details>

---

<details>
<summary><strong>Product Discovery – 4⃣ Collect & Interpret Evidence</strong></summary>

**Feedback**
“This saves me from clicking through five tools just to understand what happened.”

**Learning**
The value is **correlation and clarity**, not more dashboards.

**Reframed JTBD**
“Help me understand what’s happening during an incident without searching through multiple tools.”

</details>

---

<details>
<summary><strong>Product Discovery – 5⃣ Share & Decide</strong></summary>

Hold short discovery reviews:
- What did we learn?
- What decision did we make?
- What do we test next?

| Hypothesis | Result | Decision |
|-----------|--------|----------|
| Unified correlated view is valuable | Strong signal | Proceed |
| Real-time perfection is required | Weak | Defer |
| Charts over guided views | Disproven | Simplify |

**Reward learning**, especially killed or reframed ideas.

</details>

---

<details>
<summary><strong>Product Discovery – Takeaways</strong></summary>

- Start with assumptions, not features
- Test the riskiest beliefs first
- Evidence beats opinions
- Learning *is* progress

</details>
