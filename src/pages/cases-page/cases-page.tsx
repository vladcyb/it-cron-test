import { useState } from 'react'

import { Footer } from '@/shared/ui/footer'
import { ToggleFilters } from '@/shared/ui/toggle-filters'
import { CasesBoard } from '@/widgets/cases/cases-board'

import './cases-page.scss'

export const CasesPage = () => {
  const [areFiltersOpened, setAreFiltersOpened] = useState(false)
  const [areFiltersClear, setAreFiltersClear] = useState(true)

  return (
    <div className="cases-page">
      <div className="cases-page__rect" />
      <header className="cases-page__header">
        <h1 className="cases-page__title">Кейсы</h1>
        <ToggleFilters
          isOpened={areFiltersOpened}
          onClick={() => setAreFiltersOpened((oldValue) => !oldValue)}
          isClear={areFiltersClear}
          clear={() => setAreFiltersClear(true)}
        />
      </header>
      <div className="cases-page__section-rect" />
      <CasesBoard className="cases-page__board" />
      <Footer />
    </div>
  )
}
