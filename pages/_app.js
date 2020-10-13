import React from "react"
import '../styles/tailwind.css'
import MainLayout from '../components/MainLayout'

export default function MyApp({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
      <div id="modalgoncy">
        
      </div>
    </MainLayout>
  )
}
