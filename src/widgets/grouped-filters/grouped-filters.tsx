import { clsx } from 'clsx'
import { Key, ReactNode } from 'react'

import './grouped-filters.scss'

type Props<
  GroupType,
  ItemType,
  GroupKeyType extends Key,
  ItemKeyType extends Key,
> = {
  className?: string
  groupClassName?: string
  groupNameClassName?: string
  itemClassName?: string
  selectedItemClassName?: string
  selectedFilters: Set<ItemKeyType>
  onChange: (key: ItemKeyType) => void

  /* Список групп */
  data: GroupType[]

  /* Получить ключ группы */
  getGroupKey: (group: GroupType) => GroupKeyType

  /* Получить название группы */
  getGroupName: (group: GroupType) => ReactNode

  /* Получить список фильтров */
  getFilters: (group: GroupType) => ItemType[]

  /* Получить ключ фильтра */
  getFilterKey: (filter: ItemType) => ItemKeyType

  /* Получить название фильтра */
  getFilterName: (filter: ItemType) => ReactNode
}

export const GroupedFilters = <
  ColumnType,
  ItemType,
  GroupKeyType extends Key = Key,
  FilterKeyType extends Key = Key,
>({
  className,
  data,
  itemClassName,
  groupClassName,
  groupNameClassName,
  selectedFilters,
  selectedItemClassName,
  onChange,
  getGroupKey,
  getGroupName,
  getFilters,
  getFilterKey,
  getFilterName,
}: Props<ColumnType, ItemType, GroupKeyType, FilterKeyType>) => (
  <div className={clsx('grouped-filters', className)}>
    {data.map((group) => (
      <div className={groupClassName} key={getGroupKey(group)}>
        <div className={groupNameClassName}>{getGroupName(group)}</div>
        {getFilters(group).map((filter) => {
          const filterKey = getFilterKey(filter)

          return (
            <button
              className={clsx(
                'grouped-filters__item',
                selectedFilters.has(filterKey) && selectedItemClassName,
                itemClassName,
              )}
              onClick={() => onChange(filterKey)}
              key={filterKey}
            >
              {getFilterName(filter)}
            </button>
          )
        })}
      </div>
    ))}
  </div>
)
