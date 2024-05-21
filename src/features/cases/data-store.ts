import { createEffect, createStore } from 'effector'

import type { State } from './types'
import { Case } from '@/entities/cases'
import axiosInstance from '@/shared/api/axios-instance'

export const fetchCasesFx = createEffect(async () => {
  const response = await axiosInstance.get<{ Data?: Case[] }>('cases')
  return response.data
})

export const $casesStore = createStore<State>({ data: [] }).on(
  fetchCasesFx.doneData,
  (_, data) => ({
    data: data.Data ?? [],
  }),
)
