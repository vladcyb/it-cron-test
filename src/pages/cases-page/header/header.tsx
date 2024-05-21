import { clsx } from 'clsx'
import { useState } from 'react'

import { filtersMock } from './filters-mock'
import { ToggleFilters } from '@/shared/ui/toggle-filters'
import { GroupedFilters } from '@/widgets/grouped-filters'

import './header.scss'

export const Header = () => {
  const [areFiltersOpened, setAreFiltersOpened] = useState(false)
  const [selectedFilters, setSelectedFilters] = useState<number[]>([])

  return (
    <>
      <div className="cases-page__header">
        <h1 className="cases-page__title">Кейсы</h1>
        <ToggleFilters
          isOpened={areFiltersOpened}
          onClick={() => setAreFiltersOpened((oldValue) => !oldValue)}
          isClear={!selectedFilters.length}
          clear={() => setSelectedFilters([])}
        />
      </div>
      <div className="cases-page__filters-container">
        <div className="cases-page__filters-rect" />
        <GroupedFilters
          className={clsx(
            'cases-page__filters',
            areFiltersOpened && 'cases-page__filters_opened',
          )}
          colClassName="cases-page__filter-col"
          colNameClassName="cases-page__filter-col-name"
          itemClassName="cases-page__filter-item"
          selectedItemClassName="cases-page__filter-item_selected"
          data={filtersMock.map((item) => ({ key: item.name, ...item }))}
          selectedFilters={selectedFilters}
          onChange={setSelectedFilters}
        />
      </div>
    </>
  )
}
