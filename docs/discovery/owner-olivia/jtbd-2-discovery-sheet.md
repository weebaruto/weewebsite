# [Owner Olivia](../../personas/persona-owner-olivia.md) – Discovery Sheet

## Related Jobs-To-Be-Done

**JTBD‑2 — Detect and Diagnose Issues Quickly**
***When*** my service begins to degrade or fail
***I want to*** understand what’s happening and why using correlated signals
***so I can*** restore service health quickly and reduce customer impact.

---

## 1. Hypothesis Statement
We believe that **Owner Olivia** needs **a single, correlated view of logs, metrics, and traces during incidents**,
so that **she can diagnose issues quickly without jumping between tools or guessing root cause**.
We’ll know this is true when **she consistently uses the correlated incident view during triage and resolves issues faster than with her current workflow**.

---

## 2. Top 3 Riskiest Assumptions

| Assumption | Type | Risk Reason |
|-----------|------|-------------|
| Olivia prefers correlated, incident‑focused insights over traditional dashboards | Value | If not true, the feature will not solve her biggest pain |
| We can reliably stitch logs, metrics, and traces together in real time | Feasibility | Requires strong data quality and OTel consistency |
| Incident signals can be distilled into a clear, low‑noise experience | Usability | Too much data or noise will overwhelm users |

---

## 3. Lean Experiment (Single Test)

**Experiment Type:** High‑touch usability test using a manually prepared “correlated incident snapshot” during active or simulated incidents.

**Method:**
1. Select 2–3 real incidents from the past 30 days.
2. Manually compile a single view showing:
   • timeline of events
   • trace exemplar
   • key log lines
   • error-rate and latency graphs
3. During an incident simulation, ask Olivia to troubleshoot using *only* the snapshot.
4. Measure time to understanding and perceived clarity.

**What It Tests:**
- Whether correlated context shortens debugging time (Value)
- Whether the format is intuitive and trusted (Usability)
- Whether data can be extracted and stitched manually today (Feasibility)

**Success Signal:**
- Olivia identifies root cause significantly faster
- She expresses high confidence in the unified view
- She stops switching tools during the exercise

**Failure Signal:**
- She still needs dashboards or raw logs
- Snapshot is perceived as unclear or incomplete
- She distrusts the correlations or signals

---

## 4. Evidence Summary

**Observed Feedback (simulated expected):**
“This is exactly what I need during an incident. It saves me from clicking through five tools just to figure out what happened.”

**Interpretation:**
Olivia values **clarity, correlation, and a single place to start debugging** more than detailed dashboards.

**Learning:**
The real need is a **Correlated Incident View**—a guided, consolidated snapshot of everything that matters in the first 5 minutes of an incident.

**Reframed JTBD:**
“Help me understand what’s happening during an incident without searching through multiple tools.”

---

## 5. Decision

**Outcome:** Hypothesis **validated enough** to proceed.**

**Decision:**
Move forward with designing & building a **Correlated Incident View (MVP)**.

**Reasoning:**
- Strong qualitative signal that this reduces cognitive load
- Matches Olivia’s top frustrations (tool‑sprawl, slow diagnosis, missing context)
- Data availability seems sufficient for an MVP
- High value and high adoption probability

**Next Step:**
Create Feature Issue: **“Correlated Incident View (MVP)”**
