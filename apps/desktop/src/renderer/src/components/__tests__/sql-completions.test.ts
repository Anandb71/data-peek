import { describe, it, expect } from 'vitest'
import { SQL_FUNCTIONS, SQL_TYPES } from '@/constants/sql-completions'

describe('SQL completions', () => {
  describe('ClickHouse functions', () => {
    it('should include ClickHouse functions with exact casing', () => {
      const names = SQL_FUNCTIONS.map((fn) => fn.name)
      expect(names).toContain('uniqExact')
      expect(names).toContain('toStartOfInterval')
      expect(names).toContain('multiIf')
      expect(names).toContain('arrayJoin')
      expect(names).toContain('topK')
    })
  })

  describe('ClickHouse types', () => {
    it('should include ClickHouse types', () => {
      expect(SQL_TYPES).toContain('UInt256')
      expect(SQL_TYPES).toContain('Int128')
      expect(SQL_TYPES).toContain('LowCardinality')
      expect(SQL_TYPES).toContain('DateTime64')
      expect(SQL_TYPES).toContain('Enum16')
    })
  })

  describe('Existing entries', () => {
    it('should still include shared functions and types', () => {
      const names = SQL_FUNCTIONS.map((fn) => fn.name)
      expect(names).toContain('COUNT')
      expect(names).toContain('PRINTF')
      expect(SQL_TYPES).toContain('INTEGER')
    })
  })

  describe('Uniqueness and shape', () => {
    it('should not have duplicate function names case-insensitively', () => {
      const lower = SQL_FUNCTIONS.map((fn) => fn.name.toLowerCase())
      expect(new Set(lower).size).toBe(lower.length)
    })

    it('should not have duplicate types case-insensitively', () => {
      const lower = SQL_TYPES.map((type) => type.toLowerCase())
      expect(new Set(lower).size).toBe(lower.length)
    })

    it('should have non-empty name, signature, and description on every function', () => {
      for (const fn of SQL_FUNCTIONS) {
        expect(fn.name.length).toBeGreaterThan(0)
        expect(fn.signature.length).toBeGreaterThan(0)
        expect(fn.description.length).toBeGreaterThan(0)
      }
    })
  })
})
