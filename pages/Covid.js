import Head from 'next/head'
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import styles from '../styles/header/Covid.module.css'

function Covid() {
  return (
    <div className="">
      <Head>
        <title>Covid bag</title>
        <meta name="description" content="Wie siehts mit Covid aus? hier erfahren Sie was sie brauchen"/>
        <link rel="canonical" href="https://www.ziil-taxi.ch/Covid" />
      </Head>

      <Header/>
      <div>
        <div className={styles.CovidDiv}>
          <img className="imgCovid" src="covid-payment.png" />
          <div>
            <h1>Unsere Trennwände schützen Sie vor Viren</h1>
            <a>wwww.bag.admin.ch </a>
            <h2>Zahlung Methode</h2>
            <div className="ImgCV">
              <img className="paymentImg" src="v-pay.jpg" height="80" />
              <img className="paymentImg" src="mastercard.png" height="80" />
              <img className="paymentImg" src="visa.jpg" height="80" />
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Covid