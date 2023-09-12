import './style.scss'
import '../../commom/commom.scss'


import FooterComponent from '../../components/footer'

import guincho from '../../assets/images/guincho.svg'
import lampada from '../../assets/images/lampada.png'
import fluxograma from '../../assets/images/fluxograma_frontend.png'
import dani from '../../assets/images/dani.jpg'
import eduardo from '../../assets/images/eduardo.jpg'
import marco from '../../assets/images/marcos.jpeg'
import marcela from '../../assets/images/marcela.jpg'
import nathalia from '../../assets/images/nathalia.jpeg'

export default function Index(){

    return(
        <body className='home-page'>
           
	<section className="sec-tit-projeto">
		<div className="fundo-titulo">
			<h1>TECH SPLINTER</h1>
		</div>
	</section>

	<section className="sec-problema">
		<h2> O Problema </h2>

		<div className="div-problema">
			<div className="div-textos">
				<p>
					Melhorar a assertividade da escolha de modal (tipo de guincho) para atendimento de veículos pesados. Atualmente o processo de escolha do modal de atendimento para veículos pesados gera esforço operacional (humano) para realizar o acionamento do melhor modal (tipo de guincho). Em média 2K atendimentos, sendo que 60% necessita de atuação humana para escolha do melhor modal e mesmo com essa atuação, há entre 10 e 15% de retrabalhos gerados por necessidade de apoio ao atendimento (outro tipo de guincho foi requerido pelo prestador já no local).
				</p>
			</div>
			<div className="div-imgs-texto">
				<img src={guincho} alt="imagem guincho" className="imgs-textos"/>
			</div>			
		</div>

		<h2> A Solução </h2>

		<div className="div-problema">
			<div className="div-imgs-texto">
				<img src={lampada} alt="imagem guincho" className="imgs-textos"/>
			</div>
			<div className="div-textos">
				<p>
					Deve-se pontuar, de início, que com o nosso inovador projeto, ocorrerá por meio de uma das plataformas disponíveis para o cliente acessar. A entrada de dados será feita através de um questionário eficiente, mais preciso e detalhado que o atual. Com os dados em mãos e com o uso de I.A, será feita uma classificação para melhor escolha de modal de acordo com o problema que foi exposto anteriormente pelo motorista afetado. Dessa forma, o serviço chamará a melhor escolha para determinado caso sem a necessidade de contato humano, que pode ser alocado para outras áreas de maneira mais eficiente. O projeto também mostrará a localização em tempo real do guincho, para acalmar o cliente que provavelmente se encontraria numa situação estressante e impaciente.
				</p>
			</div>			
		</div>

	</section>

	<section className="sec-fluxo">
		<h2> Fluxo do Projeto </h2>
		<div className="div-fluxo">
			<img src={fluxograma} alt="fluxo do projeto"/>
		</div>
	</section>	
	<section className="sec-form">
		<h1>Preencha o Formulário para acionar o Guincho</h1>
		<div className="div-form">
			<form action="" method="post" autocomplete="off">
                <div className='elementos-form'>
                    <input type="number" name="cpf" placeholder="CPF" />
					<input type="text" name="placa" placeholder="Placa do Veículo" />
					<input type="number" name="peso" placeholder="Peso do Veículo (Kg)" />
					<input type="number" name="altura" placeholder="Altura do Veículo (Metros)" />
					<input type="number" name="comprimento" placeholder="Comprimento do Veículo (Metros)" />
                    <div className='inpt-alteracoes'>
                        <span> O Veículo possui alterações? </span>
						<label for="sim">Sim</label><input type="radio" name="alteracao" id="sim"/>
						<label for="nao">Não</label><input type="radio" name="alteracao" id="nao"/>
                    </div>
                    <textarea name="problema" placeholder="Descrição do problema em poucas palavras"></textarea>

					<br/>				

					<input type="submit" value="Enviar" className="btn-enviar"></input>
                </div>
            </form>
		</div>
		<div>
			<p>Está página tem o objetivo de simular um caso de perguntas e respostas sobre o problema que o usuário teve com o seu veículo, através de um formulário web</p>
		</div>
	</section>
	<section className="sec-tit-projeto">
		<div className="fundo-titulo">
			<h1>The Ideal Team</h1>
		</div>
	</section>

	<section className="sec-cards">
		<h2>Nossa Equipe</h2>

		<div className="div-cards">

			<div className="card-pessoal dani">
				<div className="image">
					<img src={dani} alt="Daniele" className="imagem-pessoal"/>
				</div>

				<div className="texto-infos">
					<span className="nome">Daniele Vargas</span>
					<span className="RM">99400</span>
				</div>
			</div>

			<div className="card-pessoal edu">
				<div className="image">
					<img src={eduardo} alt="Eduardo" className="imagem-pessoal"/>
				</div>

				<div className="texto-infos">
					<span className="nome">Eduardo Shoiti</span>
					<span className="RM">98704</span>
				</div>
			</div>

			<div className="card-pessoal marcos">
				<div className="image">
					<img src={marco} alt="Marcos" className="imagem-pessoal"/>
				</div>

				<div className="texto-infos">
					<span className="nome">Marcos Henrique</span>
					<span className="RM"></span>
				</div>
			</div>

			<div className="card-pessoal marcela">
				<div className="image">
					<img src={marcela} alt="Marcela" className="imagem-pessoal"/>
				</div>

				<div className="texto-infos">
					<span className="nome">Marcela Silva</span>
					<span className="RM">552051</span>
				</div>
			</div>

			<div className="card-pessoal nat">
				<div className="image">
					<img src={nathalia} alt="Nathalia" className="imagem-pessoal"/>
				</div>

				<div className="texto-infos">
					<span className="nome">Nathalia Braga</span>
					<span className="RM"></span>
				</div>
			</div>

		</div>

		<h4 className='repositorio'><a href="https://github.com/mhenrique29/WEB_CHALLENGE" target='blank'>Repositório GitHub</a></h4>

	</section>
    <FooterComponent />
        </body>
    )
}