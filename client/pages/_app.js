import React from "react"
import '../styles/tailwind.css'
import MainLayout from '../components/MainLayout'

export default function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout ? Component.Layout : React.Fragment

  return (
    <MainLayout className="testing">
      <Component {...pageProps} />
    </MainLayout>
  )
}
