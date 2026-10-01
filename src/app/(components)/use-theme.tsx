"use client";

import { useEffect, useState } from "react";

export function useTheme() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const stored = localStorage.getItem('raylf-theme');
    if (stored) {
      setTheme(stored as 'dark' | 'light');
    }
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute('data-theme', theme);
    localStorage.setItem('raylf-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const themeIcon = theme === 'dark' ? 'fa-solid fa-moon' : 'fa-solid fa-sun';

  return { theme, toggleTheme, themeIcon };
}