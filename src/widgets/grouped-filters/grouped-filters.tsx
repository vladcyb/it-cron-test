import { clsx } from 'clsx'
import { Key } from 'react'

import './grouped-filters.scss'

type Props<T extends Key> = {
  className?: string
  colClassName?: string
  colNameClassName?: string
  itemClassName?: string
  selectedItemClassName?: string
  selectedFilters: T[]
  onChange: (filterArray: T[]) => void
  data: Array<{
    key: Key
    name: string
    items: Array<{
      key: T
      name: string
    }>
  }>
}

export const GroupedFilters = <T extends Key>({
  className,
  data,
  itemClassName,
  colClassName,
  colNameClassName,
  selectedFilters,
  selectedItemClassName,
  onChange,
}: Props<T>) => (
  <div className={clsx('grouped-filters', className)}>
    {data.map((filterGroup) => (
      <div className={colClassName} key={filterGroup.key}>
        <div className={colNameClassName}>{filterGroup.name}</div>
        <div key={filterGroup.name}></div>
        {filterGroup.items.map((item) => {
          const selectedIndex = selectedFilters.indexOf(item.key)

          return (
            <button
              className={clsx(
                'grouped-filters__item',
                selectedIndex !== -1 && selectedItemClassName,
                itemClassName,
              )}
              onClick={() => {
                const newFilters = [...selectedFilters]
                if (selectedIndex !== -1) {
                  newFilters.splice(selectedIndex, 1)
                } else {
                  newFilters.push(item.key)
                }
                onChange(newFilters)
              }}
              key={item.key}
            >
              {item.name}
            </button>
          )
        })}
      </div>
    ))}
  </div>
)
