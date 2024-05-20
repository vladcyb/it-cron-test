import { type CaseFilter } from './case-filter'

export type Case = {
  Id: string
  Image: string
  Title: string
  CaseColor: string
  FeaturesTitle: string | null
  FriendlyURL: string
  Filters: CaseFilter[]
}
