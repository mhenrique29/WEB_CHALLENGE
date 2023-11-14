import Image from 'next/image';
import Footer from './components/footer';
import Header from './components/header';
import guincho from '../public/assets/guincho.svg'
import lampada from '../public/assets/lampada.png'
import fluxograma from '../public/assets/fluxograma_frontend.png'

import styles from './styles.module.scss'

export default function Page() {
  return(
    <div className={styles.homePage}>
      <Header />
      <section className={styles.secTitProjeto}>
        <div className={styles.fundoTitulo}>
          <h1>TECH SPLINTER</h1>
        </div>
      </section>

      <section className={styles.secProblema}>
        <h2>O Problema</h2>
        <div className={styles.divProblema}>
          <div className={styles.divTextos}>
            <p>
              Melhorar a assertividade da escolha de modal (tipo de guincho) para atendimento de veículos pesados. Atualmente o processo de escolha do modal de atendimento para veículos pesados gera esforço operacional (humano) para realizar o acionamento do melhor modal (tipo de guincho). Em média 2K atendimentos, sendo que 60% necessita de atuação humana para escolha do melhor modal e mesmo com essa atuação, há entre 10 e 15% de retrabalhos gerados por necessidade de apoio ao atendimento (outro tipo de guincho foi requerido pelo prestador já no local).
            </p>
          </div>
          <div className={styles.divImgsTexto}>
            <Image src={guincho} alt="imagem guincho" className={styles.imgsTextos} />
          </div>			
        </div>

        <h2>A Solução</h2>
        <div className={styles.divProblema}>
          <div className={styles.divImgsTexto}>
            <Image src={lampada} alt="imagem guincho" className={styles.imgsTextos} />
          </div>
          <div className={styles.divTextos}>
            <p>
              Deve-se pontuar, de início, que com o nosso inovador projeto, ocorrerá por meio de uma das plataformas disponíveis para o cliente acessar. A entrada de dados será feita através de um questionário eficiente, mais preciso e detalhado que o atual. Com os dados em mãos e com o uso de I.A, será feita uma classificação para melhor escolha de modal de acordo com o problema que foi exposto anteriormente pelo motorista afetado. Dessa forma, o serviço chamará a melhor escolha para determinado caso sem a necessidade de contato humano, que pode ser alocado para outras áreas de maneira mais eficiente. O projeto também mostrará a localização em tempo real do guincho, para acalmar o cliente que provavelmente se encontraria numa situação estressante e impaciente.
            </p>
          </div>			
		    </div>
	    </section>

      <section className={styles.secFluxo}>
        <h2>Fluxo do Projeto</h2>
        <div className={styles.divFluxo}>
          <Image src={fluxograma} alt="fluxo do projeto"/>
        </div>
      </section>	
      <Footer />
    </div>
  )
}