# OpenSpec Schema

The OpenSpec schema defines how requirements and acceptance criteria are represented.

## Fields
- **id**: Unique identifier (string, required)  
- **title**: Short descriptive name  
- **type**: requirement | policy | feature | contract  
- **criteria**: list of acceptance criteria  
- **references**: optional links to related specs  

## Example
```yaml
id: LEGAL-202
title: Payment Terms
type: contract
criteria:
  - Invoices are due within 30 days
  - Late payments accrue 5% monthly fee
references:
  - COMPLIANCE-101
```
