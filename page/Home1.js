import React from 'react'
import Banner from '../components/Banner'
import Header from '../components/Header'
import styles from '../styles/header/Home.module.css'
import Image from "next/image";
import Footer from '../components/Footer';

export default function Home1() {
  return (
    <div>    
        <Banner/>
{/* Interno Contenuti */}
        <div>
        <div>
         
        </div>
{/* Contenuto Taxi */}
        <div className={styles.div}>
{/* Immage */}
        <div className={styles.zindexImage}>
          <img className={styles.itemImg} quality={75}
          alt="See von Kreuzlinge und konstanz"
          src="/Taxi auto.jpg"
          height="500px"
          width="700px"
          layout="fill"
          objectFit="cover"/>
      
        </div>
       
{/* Testo */}
      <div className={styles.itemPlacerText}>
        <div className={styles.itemText}>
                   <h1>Taxi</h1>
                   <p className="text">Von kann Ziil-taxi mich abholen?</p>
                   <li className="light-text">umkreis von kreuzlingen bis maximal 5 km </li>
                   <p className="text">Von kann Ziil-taxi mich abholen?</p>
                   <li className="light-text">umkreis von kreuzlingen bis maximal 5 km </li>
                   <p className="text">Von kann Ziil-taxi mich abholen?</p>
                   <li className="light-text">umkreis von kreuzlingen bis maximal 5 km </li>
                </div>
      </div>
{/* Fine */}
          </div>
          <div className={styles.div}>  
{/* Testo */}
      <div className={styles.itemPlacerText}>
        <div className={styles.itemText2}>
                   <h1>FLUGHAFEN TRASFERT</h1>
                   <p className="text">Von wo kann Ziil-taxi mich abholen?</p>
                   <li className="light-text">umkreis von kreuzlingen bis maximal 5 km </li>
                   <p className="text">Kann Ziil-Taxi mich von Zürich flughafen abholen?</p>
                   <li className="light-text">Natürlich</li>
                   <p className="text">Wir sind zu 6 ist das ein problem für Sie?</p>
                   <li className="light-text">Nein, nach dem vereinbarung wir werden Sie mit ein Mercedes Vito <br/>
                       abholen bis zu 7 sitzpläze, <p className="link-text">Hier klicken um das auto zu sehn >.</p> </li>
                </div>
      </div>

      {/* Immage */}
      <div className={styles.zindexImage}>
          <img className={styles.itemImg} quality={75}
          alt="See von Kreuzlinge und konstanz"
          src="/Flughafen-Zuerich_big_01.jpg"
          height="500px"
          width="700px"
          layout="fill"
          objectFit="cover"/>
      
        </div>
{/* Fine */}
          </div> 
          <div className={styles.div}>
{/* Immage */}
        <div className={styles.zindexImage}>
          <img className={styles.itemImg} quality={75}
          alt="See von Kreuzlinge und konstanz"
          src="/Taxi auto.jpg"
          height="500px"
          width="700px"
          layout="fill"
          objectFit="cover"/>
        </div>
       
{/* Testo */}
      <div className={styles.itemPlacerText}>
        <div className={styles.itemText}>
                   <h1>Taxi</h1>
                   <p className="text">Maximal gewicht?</p>
                   <li className="light-text">30 kg </li>
                   <p className="text">Was kann ziil-taxi mitbringen?</p>
                   <li className="light-text">Dokumente, Formulare, Pakete, Blumen, Fotos, Geschenke, usw… </li>
                   <p className="text">Bis wo kann mein packet Ziil-Taxi liefern?</p>
                   <li className="light-text">max-30km umkreis kreuzlingen </li>
                </div>
      </div>
{/* Fine */}
          </div>                          
        </div>
        <Footer/>
    </div>
  )
}
