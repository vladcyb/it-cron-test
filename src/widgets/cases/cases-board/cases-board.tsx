import { clsx } from 'clsx'
import { useUnit } from 'effector-react'
import { useMemo } from 'react'

import { Case } from '@/entities/cases'
import { $casesStore } from '@/features/cases'

import './cases-board.scss'

type Props = {
  className?: string
}

type CaseWithIndex = Case & {
  index: number
}

export const CasesBoard = ({ className }: Props) => {
  const { cases, selectedFilters } = useUnit($casesStore)

  const numberedItems: CaseWithIndex[] = useMemo(
    () =>
      cases
        .filter(
          (item) =>
            !selectedFilters.size ||
            item.Filters.some((item) => selectedFilters.has(item.Id)),
        )
        .map((item, index) => ({ ...item, index })),
    [cases, selectedFilters],
  )

  const borderIndex = Math.floor(numberedItems.length / 2)

  const leftColumnItems = numberedItems.slice(0, borderIndex)
  const rightColumnItems = numberedItems.slice(borderIndex)

  return (
    <div className={clsx(className, 'cases-board')}>
      {renderColumn({
        columnClassName: 'cases-board__left',
        items: leftColumnItems,
      })}
      {renderColumn({
        columnClassName: 'cases-board__right',
        items: rightColumnItems,
      })}
    </div>
  )
}

type RenderColumnProps = {
  columnClassName: string
  items: CaseWithIndex[]
}

function renderColumn({ columnClassName, items }: RenderColumnProps) {
  const lightColors = new Set(['FFFFFF', 'F6F6F6', 'F7EDDD'])

  return (
    <div className={columnClassName}>
      {items.map((item) => {
        const {
          Id: id,
          index,
          CaseColor: backgroundColor,
          Image: image,
          Title: title,
          Filters: filters,
        } = item
        const classNameMod =
          (index / 2) % 3 === 0 ? 'small' : index % 3 === 1 ? 'big' : 'medium'

        return (
          <div className="cases-board__item" key={id}>
            <div
              className={clsx(
                'cases-board__item-wrapper',
                `cases-board__item-wrapper_${classNameMod}`,
              )}
              style={{
                backgroundColor: backgroundColor
                  ? `#${backgroundColor}`
                  : 'green',
              }}
            >
              <img className="cases-board__item-image" src={image} alt="" />
              <div
                className="cases-board__item-description"
                style={{
                  color: lightColors.has(backgroundColor) ? '#131212' : 'white',
                }}
              >
                <div className="cases-board__item-description-title">
                  {title}
                </div>
                <div className="cases-board__item-description-filters">
                  {filters.map((item) => item.Name).join(', ')}
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
