export function hasIntersection<T1 = unknown, T2 = unknown>(
  set1: Set<T1>,
  set2: Set<T2>,
): boolean {
  const [smallerSet, largerSet] =
    set1.size < set2.size ? [set1, set2] : [set2, set1]

  for (const element of smallerSet) {
    if (largerSet.has(element as any)) {
      return true
    }
  }
  return false
}
