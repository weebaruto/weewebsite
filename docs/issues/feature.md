## 📌 Feature Request
Please complete all required fields. This form enforces the Product Operating Model workflow:
Persona → JTBD → Discovery → Feature → Delivery.

### Problem Statement
Owner Olivia cannot quickly diagnose production issues without switching between multiple tools.
This increases MTTR, cognitive load, and customer impact during incidents.

### Related Persona
Owner Olivia

### Related JTBD
Olivia — JTBD‑2: Detect and Diagnose Issues Quickly

### Discovery Cycle Link
[jtbd-2-discovery-sheet.md](../discovery/owner-olivia/jtbd-2-discovery-sheet.md)

### Evidence Supporting This Feature
- Olivia: “I just want one place to start when something breaks.”
- Discovery showed Olivia ignores dashboards during incidents and looks for clear signals.
- Concierge tests demonstrated faster diagnosis using a correlated incident snapshot.

### Proposed Solution (Initial)
Implement a **Correlated Incident View** that provides:
- Timeline of key events
- Relevant logs, metrics, and traces
- Clear starting point for diagnosis
- Minimal noise and opinionated defaults

### Acceptance Criteria
- [x] Helps Olivia identify likely root cause faster
- [x] Reduces tool switching during incidents
- [x] Aligns with JTBD and discovery evidence
- [x] Can be validated with real incident workflows

### Related Issues
#123 (telemetry ingestion)
#456 (trace correlation improvements)

### Priority
priority:high

---
### ✔️ Before submitting
- Ensure discovery evidence supports the feature
- Ensure JTBD reference is correct
- Ensure persona alignment
- Ensure solution addresses real incident behavior
