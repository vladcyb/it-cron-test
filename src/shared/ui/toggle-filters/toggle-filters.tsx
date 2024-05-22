import { clsx } from 'clsx'

import './toggle-filters.scss'

type Props = {
  className?: string
  isOpened: boolean
  onClick: () => void
  isClear: boolean
  onClear: () => void
}

export const ToggleFilters = ({
  className,
  isOpened,
  onClick,
  isClear,
  onClear,
}: Props) => (
  <div
    className={clsx(
      'toggle-filters',
      isOpened && 'toggle-filters_opened',
      !isClear && 'toggle-filters_selected',
      className,
    )}
  >
    {!isClear && (
      <>
        <button className="toggle-filters__clear-text" onClick={onClear}>
          Очистить
        </button>
        <div className="toggle-filters__clear-line" />
      </>
    )}
    <button className="toggle-filters__rect" onClick={onClick} />
    <div className="toggle-filters__line" />
    <button className="toggle-filters__text" onClick={onClick}>
      Фильтры
    </button>
  </div>
)
