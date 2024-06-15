import { Card } from './components/Card/Card';
import { Form } from './components/Form/Form';
import { Slider } from './components/Slider/Slider';
import { useAppSelector } from './store/store';
import GlobalStyles, { Container } from './styles/global';
import { Section } from './styles/mainSection';

function App() {
  const baseCard = useAppSelector(state => state.baseCard);
  
  return (
    <>
      <GlobalStyles />
      <Container>
        <Section>
          {baseCard && <Card isBase data={baseCard}/>}
          <Slider />
        </Section>
        <Form />
      </Container>
    </>
  )
}

export default App
