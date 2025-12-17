import { ean13, isEAN13 } from './ean.js';
// Assume ean and validateEAN13 functions are imported or defined in this scope.
// import { ean, validateEAN13 } from './ean-functions';

// =========================================================================
//                  TESTS FOR EAN-13 BARCODE GENERATION (ean)
// =========================================================================

describe('ean() EAN-13 Generation', () => {
  // Test cases for successful generation and validation
  test.each([
    ['Default Prefix ("00")', '00', 13],
    ['Short Prefix ("50")', '50', 13],
    ['Long Prefix (10 digits)', '1234567890', 13],
    ['Max Prefix (12 digits)', '999999999999', 13],
  ])(
    'should generate a valid EAN-13 code for %s',
    (name, prefix, expectedLength) => {
      const barcode = ean13(prefix);

      // 1. Check Length
      expect(barcode.length).toBe(expectedLength);

      // 2. Check Prefix
      expect(barcode.startsWith(prefix)).toBe(true);

      // 3. Check Mathematical Validity (The core test for the generator)
      expect(isEAN13(barcode)).toBe(true);
    }
  );

  // Test cases for expected errors on bad input
  test.each([
    ['empty string', ''],
    ['too long (13 digits)', '1234567890123'],
    ['non-digit characters', 'ABC123'],
  ])('should throw an error for invalid prefix: %s', (name, invalidPrefix) => {
    // We expect the generator to fail gracefully if given an unusable prefix

    expect(() => ean13(invalidPrefix as any)).toThrow();
  });
});

describe('validateEAN13() EAN-13 Validation', () => {
  test.each([
    // Codes that are valid and should pass
    ['Valid Code 1 (400...)', '4006381333931', true],
    ['Valid Code 3 (890...)', '8904071855663', true],
    // The newly corrected valid codes
    ['Valid Code 2 (ISBN Corrected)', '9780201379624', true],
    ['Valid Code with Zero Checksum (Corrected)', '0000000000213', false],
    ['Valid Code ending in 5', '0000000000215', true],

    // Codes that are mathematically incorrect and should fail
    ['INVALID: Original ISBN test', '9780201379621', false], // Now correctly expects false (PASS)
    ['INVALID: Original Zero Checksum test', '0000000000210', false], // Now correctly expects false (PASS)
    ['Invalid Checksum (Should be 1, is 2)', '4006381333932', false],
    ['Transposition Error (39->93)', '4006381339331', false],

    // Invalid Format Tests
    ['Invalid Length (12 digits)', '400638133393', false],
    ['Invalid Length (14 digits)', '40063813339311', false],
    ['Contains Letters', 'A006381333931', false],
    ['Non-string input (number)', 4006381333931, false],
    ['Null input', null, false],
  ])('should return %s for code: %s', (name, eanCode, expected) => {
    expect(isEAN13(eanCode as string)).toBe(expected);
  });
});
