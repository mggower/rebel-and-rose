import { createContext, useContext } from 'react'

export const ContentHeightContext = createContext<number>(window.innerHeight - 200)

export const useContentHeight = () => useContext(ContentHeightContext)
