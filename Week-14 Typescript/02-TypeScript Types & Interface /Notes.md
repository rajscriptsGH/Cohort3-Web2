# function

# Interfaces

# implement

# Abstract

- An abstract class is like a blueprint.
  It cannot be instantiated directly — it's meant to be extended by other classes.

- It can:

  - Have abstract methods (no body → must be implemented by subclass)

  - Have normal methods (with logic)

  - Contain properties

## Abstract Class vs Interface

┌──────────────────────────────────────┬────────────────────────────┬────────────────────────────┐
│ Feature │                                Abstract Class                   Interface 
├──────────────────────────────────────┼────────────────────────────┼────────────────────────────┤
│ Can contain logic?                     ✅ Yes                         ❌ No 
├──────────────────────────────────────┼────────────────────────────┼────────────────────────────┤
│ Can declare methods?                 │ ✅ Yes (abstract & concrete)   ✅ Yes (signatures only) │
├──────────────────────────────────────┼────────────────────────────┼────────────────────────────┤
│ Instantiable?                          ❌ No (only via subclass)      ❌ No 
├──────────────────────────────────────┼────────────────────────────┼────────────────────────────┤
│ Multiple inheritance support           ❌ No                          ✅ Yes 
├──────────────────────────────────────┼────────────────────────────┼────────────────────────────┤
│ Used by                                `extends` (by subclass)      `implements` (by class) 
├──────────────────────────────────────┼────────────────────────────┼────────────────────────────┤
│ Use case                             │ Logic + structure reuse    │  Type contract / structure │
├──────────────────────────────────────┼────────────────────────────┼────────────────────────────┤
│ Access modifiers                     │ ✅ Yes (public/private/etc)│   ❌ No                    │
├──────────────────────────────────────┼────────────────────────────┼────────────────────────────┤
│ Default property values allowed?     │ ✅ Yes                     │   ❌ No                    │
└──────────────────────────────────────┴────────────────────────────┴────────────────────────────┘
