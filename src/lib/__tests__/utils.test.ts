import { cn } from '@/lib/utils';

describe('utils', () => {
  describe('cn', () => {
    it('should combine multiple className strings', () => {
      const result = cn('class1', 'class2');
      expect(result).toBe('class1 class2');
    });

    it('should filter out falsy values', () => {
      const result = cn('class1', false && 'class2', null, undefined, 0, '', 'class3');
      expect(result).toBe('class1 class3');
    });

    it('should handle conditional classes', () => {
      const isActive = true;
      const isPrimary = false;

      const result = cn('base-class', isActive && 'active', isPrimary && 'primary');

      expect(result).toBe('base-class active');
    });

    it('should handle array inputs', () => {
      const result = cn(['class1', 'class2']);
      expect(result).toBe('class1 class2');
    });
  });
});
