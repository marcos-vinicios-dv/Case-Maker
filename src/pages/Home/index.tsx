import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Slider } from '../../components/Slider';

import Presets from '../Presets';

import { Container, InformationSection, LandingPage } from './styles';

const Home = () => {
  const [selectedCaseId, setSelectedCaseId] = useState('');

  function handleSelectCase(caseId: string) {
    setSelectedCaseId(caseId);

    const serialCaseId = JSON.stringify(caseId);

    localStorage.setItem('@caseMaker:case', serialCaseId);
  }

  return (
    <>
      <Container>
        <LandingPage>
          <InformationSection>
            <h1>
              Crie um <span>Gabinete</span> <br />
              com seu próprio <span>Estilo</span>
            </h1>
            <p>
              Selecione um gabinete entre as opções para começar a customizar.
            </p>
            <Link to={`/customizar/${selectedCaseId ? selectedCaseId : 0}`}>
              <button type="button">Customizar</button>
            </Link>
          </InformationSection>
          <Slider
            selectedCaseId={selectedCaseId}
            onSelectedCaseId={handleSelectCase}
          />
        </LandingPage>
        <Presets />
      </Container>
    </>
  );
};

export default Home;
