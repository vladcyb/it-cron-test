import { Case, CasesGroupedFilterItem } from '@/entities/cases'

export type State = {
  cases: Case[]
  filters: CasesGroupedFilterItem[]
  selectedFilters: Set<string>
}
