import Footer from '../components/footer';
import Header from '../components/header';

import styles from './styles.module.scss';

export default function Page() {
  return(
    <main className={styles.guinchoPage}>
      <Header />
      <section className={styles.secForm}>
        <h1>Preencha o Formulário para acionar o Guincho</h1>
        <div className={styles.divForm}>
          <form>
            <div className={styles.elementosForm}>
              <input type="number" name="cpf" placeholder="CPF" />
              <input type="text" name="placa" placeholder="Placa do Veículo" />
              <input type="number" name="peso" placeholder="Peso do Veículo (Kg)" />
              <input type="number" name="altura" placeholder="Altura do Veículo (Metros)" />
              <input type="number" name="comprimento" placeholder="Comprimento do Veículo (Metros)" />
              
              <div className={styles.inptAlteracoes}>
                <span> O Veículo possui alterações? </span>
                <label htmlFor="sim">Sim</label>
                <input type="radio" name="alteracao" id="sim"/>
                
                <label htmlFor="nao">Não</label>
                <input type="radio" name="alteracao" id="nao"/>
              </div>
              
              <textarea name="problema" placeholder="Descrição do problema em poucas palavras"></textarea>

              <br/>				

              <input type="submit" value="Enviar" className={styles.btnEnviar} />
            </div>
          </form>
        </div>

        <div>
          <p>Está página tem o objetivo de simular um caso de perguntas e respostas sobre o problema que o usuário teve com o seu veículo, através de um formulário web</p>
        </div>
      </section>
      <Footer />
    </main>   
  )
}