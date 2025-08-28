# OpenSpec Validation

Validation ensures specs are consistent and unambiguous.

## Rules
1. Every spec must have a unique `id`.  
2. `criteria` must be written as clear, testable statements.  
3. Circular references between specs should be avoided.  
4. Specs should be grouped by domain (software, legal, compliance).  

## Tools
- A CLI validator will be provided to lint OpenSpec files  
- Future integrations will support CI pipelines
