import Image from 'next/image';

import Header from '../components/header';
import Footer from '../components/footer';
import dani from '../../public/assets/dani.jpg';
import eduardo from '../../public/assets/eduardo.jpg';
import marco from '../../public/assets/marcos.jpeg';
import marcela from '../../public/assets/marcela.jpg';
import nathalia from '../../public/assets/nathalia.jpeg';

import styles from './styles.module.scss';
  
export default function Page() {
  return(
    <main className={styles.equipePage}>
      <Header />

      <section className={styles.secTitProjeto}>
        <div className={styles.fundoTitulo}>
          <h1>The Ideal Team</h1>
        </div>
      </section>
  
      <section className={styles.secCards}>
        <h2>Nossa Equipe</h2>
    
        <div className={styles.divCards}>
          <div className={`${styles.cardPessoal} ${styles.dani}`}>
            <div className={styles.image}>
              <Image src={dani} alt="Daniele" className={styles.imagemPessoal} />
            </div>
    
            <div className={styles.textoInfos}>
              <span className={styles.nome}>Daniele Vargas</span>
              <span className={styles.RM}>99400</span>
            </div>
          </div>
    
          <div className={`${styles.cardPessoal} ${styles.edu}`}>
            <div className={styles.image}>
              <Image src={eduardo} alt="Eduardo" className={styles.imagemPessoal} />
            </div>
    
            <div className={styles.textoInfos}>
              <span className={styles.nome}>Eduardo Shoiti</span>
              <span className={styles.RM}>98704</span>
            </div>
          </div>

          <div className={`${styles.cardPessoal} ${styles.marcos}`}>
            <div className={styles.image}>
              <Image src={marco} alt="Marcos" className={styles.imagemPessoal} />
            </div>
    
            <div className={styles.textoInfos}>
              <span className={styles.nome}>Marcos Henrique</span>
              <span className={styles.RM}>98348</span>
            </div>
          </div>
    
          <div className={`${styles.cardPessoal} ${styles.marcela}`}>
            <div className={styles.image}>
              <Image src={marcela} alt="Marcela" className={styles.imagemPessoal} />
            </div>
    
            <div className={styles.textoInfos}>
              <span className={styles.nome}>Marcela Silva</span>
              <span className={styles.RM}>552051</span>
            </div>
          </div>
    
          <div className={`${styles.cardPessoal} ${styles.nat}`}>
            <div className={styles.image}>
              <Image src={nathalia} alt="Nathalia" className={styles.imagemPessoal} />
            </div>
    
            <div className={styles.textoInfos}>
              <span className={styles.nome}>Nathalia Braga</span>
              <span className={styles.RM}>552221</span>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}