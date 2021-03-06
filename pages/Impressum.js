import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import styles from '../styles/header/Impressum.module.css'
import Footer from '../components/Footer'

export default function Impressum() {
  return (
    <div className="">
      <Head>
        <title>ZIIL-TAXI: Homepage</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    {/* Header */}
    <Header/>
    <div className={styles.ImpressumDiv}>
        <div className={styles.textConte}>
          <h2>IMPRESSUM</h2>
          <h4>
            Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für
            die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können
            wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir für
            eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
            verantwortlich. Wir sind als Diensteanbieter jedoch nicht
            verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
            überwachen oder nach Umständen zu forschen, die auf eine
            rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung
            oder Sperrung der Nutzung von Informationen nach den allgemeinen
            Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist
            jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten
            Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
            Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            Haftung für Links Unser Angebot enthält Links zu externen Webseiten
            Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können
            wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die
            Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder
            Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden
            zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
            Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht
            erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten
            Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung
            nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir
            derartige Links umgehend entfernen. Urheberrecht Die durch die
            Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
            unterliegen dem schweizer Urheberrecht. Die Vervielfältigung,
            Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
            Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
            jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite
            sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
            Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
            wurden, werden die Urheberrechte Dritter beachtet. Insbesondere
            werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie
            trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten
            wir um einen entsprechenden Hinweis. Bei Bekanntwerden von
            Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
            Datenschutz Die Nutzung unserer Webseite ist in der Regel ohne
            Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten
            personenbezogene Daten (beispielsweise Name, Anschrift oder
            E-Mailadressen) erhoben werden, erfolgt dies, soweit möglich, stets
            auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche
            Zustimmung nicht an Dritte weitergegeben. Sämtliche Kundendaten, die
            sich auf unseren Servern befinden, werden nicht an Dritte weiter
            gegeben. Wir weisen darauf hin, dass die Datenübertragung im
            Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken
            aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff
            durch Dritte ist nicht möglich. Der Nutzung von im Rahmen der
            Impressumspflicht veröffentlichten Kontaktdaten durch Dritte zur
            Übersendung von nicht ausdrücklich angeforderter Werbung und
            Informationsmaterialien wird hiermit ausdrücklich widersprochen. Die
            Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte
            im Falle der unverlangten Zusendung von Werbeinformationen, etwa
            durch Spam-Mails, vor
          </h4>
          <h2>Kontakt:</h2>
          <h4>Finkerstrasse 1, 8280 Kreuzlingen, Schweiz,Tel:+41 0794001111</h4>
          <h2>Registereintrag: </h2>
            <h4>CH-440.1.031.135-4</h4>
          <h4>Einzelfirma</h4>
          <h2>Brache</h2>
          <h4>Personen- und Güterbeförderung</h4>
          <h2>
            Lezte Meldung
          </h2>
          <h4>29.11.2019</h4>
        </div>
      </div>
    {/* Banner */}

    <Footer/>
    </div>
  )
}