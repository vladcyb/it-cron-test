import { CaseFilterItem } from '@/entities/cases'

export type Case = {
  CaseColor: string
  FeaturesTitle: string | null
  Filters: CaseFilterItem[]
  FriendlyURL: string
  Id: string
  Image: string
  Title: string
}
