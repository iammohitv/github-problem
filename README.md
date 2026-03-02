# 📦 Conflict Lab – Merge Conflict Interview Test

## Overview

This is a short merge-conflict resolution exercise.

Your task is to open a Pull Request from:

feature/conflict-lab → main

There are multiple intentional conflicts across several files.

You must resolve them correctly.

---

# 🎯 Objective

After resolving conflicts:

- All tests must pass
- API behavior must match the specification below
- No conflict markers should remain
- Documentation must match the actual behavior

---

# ✅ Final Required Behavior

After the merge, the system must behave exactly as follows:

## API

Base path:
```
/api/v1
```

Health endpoint:
```
GET /api/v1/health
```

Response:
```json
{
  "status": "ok",
  "version": "1.0.0"
}
```

---

## Configuration Defaults

Final defaults must be:

```
PORT=3000
LOG_LEVEL=info
NEW_DASHBOARD=false
API_BASE=/api/v1
```

---

## Logging

- Logging must respect `LOG_LEVEL`
- Default log level must be `info`
- Logging should not break application behavior

---

# 🧪 Running the Project

Install dependencies:

```bash
npm install
```

Run tests:

```bash
npm test
```

Tests must pass after your merge.

---

# 📌 Important Notes

Conflicts affect multiple areas:

- API path
- JSON response structure
- Default configuration values
- Tests
- README documentation

Be careful to keep all of the following aligned:

- src/config.js
- src/routes.js
- src/server.js
- .env.example
- test/health.test.js
- README.md

---

# ⚠️ Hints

- Do not blindly accept “Current” or “Incoming” everywhere.
- Think about what the final system behavior should be.
- If tests fail, check:
  - API path consistency
  - JSON response structure
  - Default values

Keep changes minimal. This is not a refactor.

---

# ❌ Do NOT

- Delete files to avoid conflicts
- Remove tests
- Leave conflict markers (<<<<<<<, =======, >>>>>>>)
- Change required final behavior

---

# ⏱ Expected Time

10–15 minutes

---

# 📋 What We Evaluate

We look for:

- Correct conflict resolution decisions
- Consistency across files
- Clean merge
- Ability to follow specification under time constraint
- Clear PR explanation of decisions

---

# ✔ Success Criteria

After resolving conflicts:

- `/api/v1/health` works
- It returns:
  ```json
  { "status": "ok", "version": "1.0.0" }
  ```
- Tests pass
- Documentation matches implementation
