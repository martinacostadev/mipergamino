import React from "react"
import '../styles/tailwind.css'
import 'react-multi-carousel/lib/styles.css'
import Router from 'next/router'
import MainLayout from '../components/MainLayout'

export default function MyApp({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
      <div>
        
      </div>
      <div id="modalgoncy"></div>
    </MainLayout>
  )
}
