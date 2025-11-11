import { createContext, useContext } from 'react'

type SetState<T> = React.Dispatch<React.SetStateAction<T>>

export interface DropdownContext {
  isOpen: boolean
  activeIndex: number | null
  setIsOpen: SetState<boolean>
  setActiveIndex: SetState<number | null>
  getItemProps: (userProps?: React.HTMLProps<HTMLElement>) => Record<string, unknown>
}

export const DropdownContext = createContext<DropdownContext>({} as DropdownContext)

export function useDropdownContext() {
  return useContext(DropdownContext)
}
