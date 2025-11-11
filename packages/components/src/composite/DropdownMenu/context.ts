import { createContext, useContext } from 'react'

type SetState<T> = React.Dispatch<React.SetStateAction<T>>

export interface DropdownContextValue {
  isOpen: boolean
  activeIndex: number | null
  setIsOpen: SetState<boolean>
  setActiveIndex: SetState<number | null>
  getItemProps: (userProps?: React.HTMLProps<HTMLElement>) => Record<string, unknown>
}

export const DropdownContext = createContext<DropdownContextValue>({} as DropdownContextValue)

export const useDropdownContext = () => useContext(DropdownContext)
