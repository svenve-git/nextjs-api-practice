import "../styles/globals.css"
import { AppProps } from "next/app"
import { ThemeProvider } from "styled-components"

const theme = {
  colors: {
    primary: "#2389df",
    secondary: "#923sou",
  },
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
