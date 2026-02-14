# Minimal Productspeak (with Owner Olivia Example)

This document defines an **extreme lightweight version of "Product Speak"** — just enough shared language and structure to align teams, avoid feature-first thinking, and support fast, confident decisions.

The goal is not completeness. The goal is clarity with minimal ceremony.

---

## The Minimal Stack (3 artifacts, 1 habit)

### 1. Lean Persona (½ page)
**Purpose:** Make the primary user concrete without turning personas into marketing fiction.

**Minimum fields:**
- Role / context (not demographics)
- Primary goal
- One key constraint
- How success is judged

**Explicitly exclude:**
- Names, photos, quotes
- Backstories
- Demographics unless they directly affect behavior

**Example:**
```
- Role: Service owner responsible for a customer-facing production service
- Goal: Keep the service reliable and recover quickly when things go wrong
- Constraint: Limited time during incidents; not an observability specialist
- Success looks like: Issues are detected and understood quickly, without jumping between tools
```

> If the persona isn’t referenced in real discussions or decisions, it isn’t doing work.

---

### 2. JTBD Lite (Problem Statement)
**Purpose:** Anchor conversations on outcomes without requiring full JTBD rigor.

**Required format (one sentence):**
> When <situation>, I want to <make progress>, so I can <outcome>.

**Optional (only if useful):**
- Why now
- Competing alternative

**Example:**
```
When my service begins to degrade or fail,
I want to understand what’s happening and why using correlated signals,
so I can restore service health quickly and reduce customer impact.
```
> If it takes more than two minutes to write, it’s too heavy.

---

### 3. Problem Backlog (JTBD as a list)
**Purpose:** Replace feature backlogs with prioritized problems.

Each item includes:
- JTBD sentence
- Pain score: High / Medium / Low
- Confidence level: High / Medium / Low

No solutions. No acceptance criteria.

#### Problem Backlog — *Owner Olivia*

```
[H / H] Understand incidents quickly using correlated logs, metrics, and traces
[H / M] Detect service degradation before customers notice
[M / M] Reduce time spent maintaining dashboards and alerts
```

---

## Simple Discovery (Signal, Not Research)

Discovery is **not a phase** and **not a ceremony** in this model.

### The only rule
> Every meaningful problem must be backed by at least one real signal.

**Valid signals include:**
- User conversation
- Support ticket cluster
- Incident review
- Observed usage pattern
- Internal dogfooding pain

#### Discovery Signal — *Owner Olivia*

```
Signal: During an incident review, Olivia reported spending the first 15 minutes switching between dashboards, logs, and traces to understand what failed (incident review, Jan 12).
```

No transcripts. No decks. No synthesis documents.

---

## How the Pieces Fit Together

```
Persona → frames relevance
JTBD → defines the problem
Discovery signal → proves it exists
Problem backlog → forces prioritization
```

This loop is the **entire Product Speak core**.

---

## What This Model Intentionally Excludes

To stay lightweight, this model does **not** require:
- Full persona sets
- Emotional / social JTBD breakdowns
- Formal discovery plans

These tools may be used selectively, but are never defaults.

---

## Guardrail Heuristic

If an artifact:
- is not referenced in weekly discussions, or
- does not change a decision,

**delete it**.

Product Speak only works when it is *spoken*, not documented.

---

## One-Sentence Definition

> *We know who we’re building for, the job they're trying to get done, and we’ve seen evidence that it matters.*
