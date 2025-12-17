import { InvalidPrefixError } from '@vnode/errors';

/**
 * Generate Ean barcode
 * @param prefix organization prefix
 * @returns
 */
export function ean13(prefix = '00'): string {
  // FIX: Set default value here. If 'undefined' is passed, it becomes '00'.
  if (prefix === undefined) {
    prefix = '00';
  }

  if (
    typeof prefix !== 'string' ||
    !/^\d+$/.test(prefix) ||
    prefix.length > 12
  ) {
    throw new InvalidPrefixError(
      'EAN-13 prefix must be a string of digits, 12 characters or less.'
    );
  }

  // --- 1. Generate the base 12 digits ---
  let baseDigits = prefix;
  const requiredLength = 12;

  // Pad the remaining digits randomly until we have 12
  while (baseDigits.length < requiredLength) {
    // Generate a random digit (0-9)
    const randomDigit = Math.floor(Math.random() * 10);
    baseDigits += randomDigit.toString();
  }

  // Ensure we only use the first 12 digits (in case the prefix was already 12)
  baseDigits = baseDigits.substring(0, 12);

  // --- 2. Calculate the EAN-13 Checksum Digit ---
  let sum = 0;

  // The EAN-13 Checksum Algorithm:
  // Positions are counted 1-12, from left to right.
  for (let i = 0; i < 12; i++) {
    const digit = parseInt(baseDigits[i], 10);

    // The weight applied depends on the digit's position (index + 1)
    // If the position is odd (1st, 3rd, 5th, etc., i=0, 2, 4...), the weight is 1.
    // If the position is even (2nd, 4th, 6th, etc., i=1, 3, 5...), the weight is 3.
    const weight = (i + 1) % 2 !== 0 ? 1 : 3;
    sum += digit * weight;
  }

  // The checksum is the difference between the sum and the next highest multiple of 10.
  // Checksum = (10 - (Sum MOD 10)) MOD 10. The outer MOD 10 handles the case where the remainder is 0.
  const remainder = sum % 10;
  const checksum = (10 - remainder) % 10;

  // --- 3. Return the full EAN-13 number ---
  return baseDigits + checksum.toString();
}

export function isEAN13(code: string) {
  // 1. Basic validation check: Must be 13 digits and contain only numbers.
  if (typeof code !== 'string' || !/^\d{13}$/.test(code)) {
    return false;
  }

  // --- 2. Calculate the checksum from the first 12 digits ---
  let sum = 0;
  const base12 = code.substring(0, 12);

  // Apply the EAN-13 Checksum Algorithm:
  // Positions 1, 3, 5, 7, 9, 11 (odd positions) are weighted 1.
  // Positions 2, 4, 6, 8, 10, 12 (even positions) are weighted 3.
  for (let i = 0; i < 12; i++) {
    const digit = parseInt(base12[i], 10);

    // i+1 gives the position number (1st, 2nd, etc.)
    const weight = (i + 1) % 2 !== 0 ? 1 : 3;
    sum += digit * weight;
  }

  // The calculated checksum is (10 - (Sum MOD 10)) MOD 10
  const remainder = sum % 10;
  const calculatedChecksum = (10 - remainder) % 10;

  // --- 3. Compare the calculated checksum with the EAN's last digit ---
  const providedChecksum = parseInt(code[12], 10);

  return calculatedChecksum === providedChecksum;
}
