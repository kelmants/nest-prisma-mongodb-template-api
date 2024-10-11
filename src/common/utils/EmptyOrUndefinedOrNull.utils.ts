export function isEmptyOrUndefinedOrNull(value: string | null | undefined | object | Array<any>): boolean {
  if (value === null || value === undefined) {
    return true;
  }

  // Check for empty string
  if (typeof value === 'string' && value.length === 0) {
    return true;
  }

  // Check for empty object or array
  if ((typeof value === 'object' || value.length === 0) && Object.keys(value).length === 0) {
    return true;
  }

  return false;
}
