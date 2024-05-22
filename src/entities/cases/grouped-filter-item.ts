import { FilterItem } from './filter-item'

export type GroupedFilterItem = FilterItem & {
  Filters: FilterItem[]
}
