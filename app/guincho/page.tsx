"use client";

import { FormEvent, useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

import styles from './styles.module.scss';


export default function Page() {
  const [transitBoard, setTransitBoard] = useState("");
  const [category, setCategory] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [qntLoad, setQntLoad] = useState("");
  const [problemType, setProblemType] = useState('acidente_colisao');
  const [problemLocalization, setProblemLocalization] = useState('terreno_descida');
  const [modal, setModal] = useState<string>("");

  const generateTransitBoard = () => {
    const boards = [
      "ABC-1234",
      "XYZ-5678",
      "DEF-9876",
      "MNO-4321",
      "GHI-6543",
      "QRS-7890",
      "VWX-2109",
      "JKL-8765",
      "RST-5432",
      "PQR-1098"
    ];

    var board = boards[Math.floor(Math.random() * boards.length)];
    setTransitBoard(board);

    fillData(board);
  }

  async function fetchCarData(placa: string) {
    try {
      const response = await fetch('https://raw.githubusercontent.com/EduardoShoiti/db_json/master/dados.json');
      const data = await response.json();
      return data[placa] || null;
    } catch (error) {
      console.error('Erro ao buscar dados do carro:', error);
      return null;
    }
  }

  const fillData = async (board: string) => {
    const carData = await fetchCarData(board);

    if (carData) {
      setCategory(carData.categoria);
      setWeight(carData.peso);
      setHeight(carData.altura);
      setLength(carData.comprimento);
      setWidth(carData.largura);
    } else {
      setCategory("");
      setWeight("");
      setHeight("");
      setLength("");
      setWidth("");
    }
  }

  const prevision = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const payload = {
      "Peso_Toneladas": parseFloat(weight),
      "Altura_Metros": parseFloat(height),
      "Comprimento_Metros": parseFloat(length),
      "Largura_Metros": parseFloat(width),
      "Qtd_Carga_Extra": parseFloat(qntLoad),
      "Categoria_Tarifaria": category,
      "Tipo_Problema": problemType,
      "Local_Problema": problemLocalization
    };

    const data = await fetch('https://eduardoshoiti.pythonanywhere.com/api/predict', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    const json = await data.json();

    setModal(json.prediction);
  }

  const resetFlow = () => {
    setTransitBoard("");
    setCategory("");
    setWeight("");
    setHeight("");
    setLength("");
    setWidth("");
    setQntLoad("");
    setProblemType("acidente_colisao");
    setProblemLocalization("terreno_descida");
    setModal("");
  }

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.box}>
        <h1>Simulação Porto</h1>

        <br />

        <form onSubmit={prevision}>
          <div className={styles.divGerar} onClick={generateTransitBoard}>
            <div className={styles.gerarPlaca} id="gerarPlaca">Gerar placa cadastrada</div>
          </div>

          <div className={styles.campos}>
            <label>Placa Veículo:</label>

            <input 
              type="text" 
              value={transitBoard}
              disabled
              placeholder="ex: def-9876"
              required 
            />
            <br />
          </div>

          <div className={styles.campos}>
            <label htmlFor="Qtd_Carga_Extra">Qtd Carga Extra:</label>
            <input type="number" step="0.01" value={qntLoad} onChange={(e) => setQntLoad(e.target.value)} placeholder="Em Toneladas" required />
            <br />
          </div>

          <div className={styles.campos}>
            <label htmlFor="Tipo_Problema">Tipo Problema:</label>

            <select id="Tipo_Problema" name="Tipo_Problema" value={problemType} onChange={(e) => setProblemType(e.target.value)}>
              <option value="acidente_colisao">Acidente | Colisão</option>
              <option value="bateria_descarregada">Bateria Descarregada</option>
              <option value="chave_quebrada">Chave Quebrada</option>
              <option value="combustivel">Combustível</option>
              <option value="correia_motor">Correia do Motor</option>
              <option value="correia_pneu">Correia do Pneu</option>
              <option value="direcao">Direção</option>
              <option value="eixo_quebrado">Eixo Quebrado</option>
              <option value="eletrico">Elétrico</option>
              <option value="freios">Freios</option>
              <option value="fusivel_sensor">Fusível | Sensor</option>
              <option value="iluminacao">Iluminação</option>
              <option value="motor_outro">Motor Outro</option>
              <option value="oleo_vazamento">Óleo | Vazamento</option>
              <option value="pane_mecanica">Pane Mecânica</option>
              <option value="pneu_furado">Pneu Furado</option>
              <option value="radiador">Radiador</option>
              <option value="roda_travada">Roda Travada</option>
              <option value="suspensao">Suspensão</option>
              <option value="tombado">Tombado</option>
              <option value="transmissao">Transmissão</option>
            </select>

            <br />
          </div>

          <div className={styles.campos}>
            <label>Local Problema:</label>
            <select value={problemLocalization} onChange={(e) => setProblemLocalization(e.target.value)}>
                <option value="terreno_descida">Terreno Descida</option>
                <option value="terreno_inclinado">Terreno Inclinado</option>
                <option value="terreno_plano">Terreno Plano</option>
                <option value="terreno_subida">Terreno Subida</option>
            </select>

            <br />
          </div>

          <div className={`${styles.campos} ${styles.btn}`}>
            <button type="submit" className={styles.btnEnviar}>Prever</button>
          </div>
        </form>
        
      </div>
    
      <div className={`${styles.resultado} ${!modal && styles.invisivel}`}>
        <p>Veículo adequado:</p>
        <h2>{modal}</h2>
        <button onClick={resetFlow}>Executar outra previsão</button>
      </div>
    </div>
  )
}