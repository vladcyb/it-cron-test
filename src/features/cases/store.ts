import { createEffect, createEvent, createStore } from 'effector'

import type { State } from './types'
import { Case, CasesGroupedFilterItem } from '@/entities/cases'
import { DataModel } from '@/entities/data-model'
import { axiosInstance } from '@/shared/api'

export const fetchCasesFx = createEffect(async () => {
  const response = await axiosInstance.get<DataModel<Case[]>>('cases')
  return response.data
})

export const fetchFiltersFx = createEffect(async () => {
  const response =
    await axiosInstance.get<DataModel<CasesGroupedFilterItem[]>>('filters')
  return response.data
})

export const toggleFilterSelection = createEvent<string>()
export const resetFilters = createEvent()

const initialState: State = {
  cases: [],
  filters: [],
  selectedFilters: new Set<string>(),
}

export const $casesStore = createStore<State>(initialState)
  .on(fetchCasesFx.doneData, (state, data) => ({
    ...state,
    cases: data.Data,
  }))
  .on(fetchFiltersFx.doneData, (state, data) => ({
    ...state,
    filters: data.Data,
  }))
  .on(toggleFilterSelection, (state, filterId) => {
    const newFilters = new Set(state.selectedFilters)
    if (newFilters.has(filterId)) {
      newFilters.delete(filterId)
    } else {
      newFilters.add(filterId)
    }
    return {
      ...state,
      selectedFilters: newFilters,
    }
  })
  .on(resetFilters, (state) => ({
    ...state,
    selectedFilters: new Set(),
  }))
