import { Filter } from './filter'

export type Case = {
  CaseColor: string
  FeaturesTitle: string | null
  Filters: Filter[]
  FriendlyURL: string
  Id: string
  Image: string
  Title: string
}
