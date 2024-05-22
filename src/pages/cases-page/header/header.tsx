import { clsx } from 'clsx'
import { useUnit } from 'effector-react'
import { useEffect, useState } from 'react'

import {
  $casesStore,
  fetchFiltersFx,
  resetFilters,
  toggleFilterSelection,
} from '@/features/cases'
import { ToggleFilters } from '@/shared/ui/toggle-filters'
import { GroupedFilters } from '@/widgets/grouped-filters'

import './header.scss'

export const Header = () => {
  const [areFiltersOpened, setAreFiltersOpened] = useState(false)

  const { filters, selectedFilters } = useUnit($casesStore)

  useEffect(() => {
    fetchFiltersFx()
  }, [])

  return (
    <>
      <div className="cases-page__header">
        <h1 className="cases-page__title">Кейсы</h1>
        <ToggleFilters
          isOpened={areFiltersOpened}
          onClick={() => setAreFiltersOpened((oldValue) => !oldValue)}
          isClear={selectedFilters.size === 0}
          onClear={resetFilters}
        />
      </div>
      <div className="cases-page__filters-container">
        <div className="cases-page__filters-rect" />
        <GroupedFilters
          className={clsx(
            'cases-page__filters',
            areFiltersOpened && 'cases-page__filters_opened',
          )}
          groupClassName="cases-page__filter-col"
          groupNameClassName="cases-page__filter-col-name"
          itemClassName="cases-page__filter-item"
          selectedItemClassName="cases-page__filter-item_selected"
          data={filters}
          selectedFilters={selectedFilters}
          onChange={toggleFilterSelection}
          getGroupKey={(item) => item.Id}
          getGroupName={(item) => item.Name}
          getFilters={(item) => item.Filters}
          getFilterKey={(item) => item.Id}
          getFilterName={(item) => item.Name}
        />
      </div>
    </>
  )
}
