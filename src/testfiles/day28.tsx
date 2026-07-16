import React, {useState, useContext} from "react";
 interface ThemeContextType{
    theme: 'light' | 'dark';
    toggleTheme: () => void;
 }

 export const ThemeContext = React.createContext<ThemeContextType | undefined>(undefined);

 interface ThemeProviderProps {
    children: React.ReactNode;
 }

 
 export const ThemeProvider: ({children}:ThemeProviderProps) => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');
    const toggleTheme = () => { 
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));   
 } ;

 return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
        {children}
    </ThemeContext.Provider>
 );