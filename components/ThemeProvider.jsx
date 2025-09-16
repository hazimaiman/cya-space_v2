"use client"
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'

const ThemeContext = createContext({ theme: 'light', toggle: () => {} })

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light') // default to day mode

  // initialize from localStorage if present
  useEffect(() => {
    try {
      const stored = localStorage.getItem('theme')
      if (stored === 'light' || stored === 'dark') setTheme(stored)
    } catch {}
  }, [])

  // apply class to <html> and persist
  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') root.classList.add('dark')
    else root.classList.remove('dark')
    try { localStorage.setItem('theme', theme) } catch {}
  }, [theme])

  const value = useMemo(() => ({ theme, toggle: () => setTheme(t => (t === 'light' ? 'dark' : 'light')) }), [theme])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  return useContext(ThemeContext)
}

