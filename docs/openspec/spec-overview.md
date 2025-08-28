# OpenSpec Specification Overview

OpenSpec defines requirements and acceptance criteria in a structured, machine-readable format.  
This document explains the structure, keywords, and conventions.

## Structure
- **Spec Node**: the smallest unit of intent  
- **Requirement**: a condition that must be satisfied  
- **Acceptance Criteria**: measurable or testable conditions that prove completion  
- **Reference**: a link to another spec node or external artifact  

## Conventions
- Specs should be written in plain Markdown with YAML frontmatter for metadata  
- Each requirement has a unique identifier  
- Acceptance criteria are listed as bullet points under the requirement  

## Example
```yaml
id: FEATURE-101
title: User Login
type: requirement
```

**Acceptance Criteria**  
- User can log in with valid credentials  
- Login attempts with invalid credentials are rejected
