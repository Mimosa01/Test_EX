import { Card } from './components/Card/Card';
import { Form } from './components/Form/Form';
import { Slider } from './components/Slider/Slider';
import { deleteBaseCard } from './store/features/ActionCardSlice';
import { useAppDispatch, useAppSelector } from './store/store';
import GlobalStyles, { Container } from './styles/global';
import { Section } from './styles/mainSection';

function App() {
  const baseCard = useAppSelector(state => state.baseCard);
  const dispatch = useAppDispatch();

  const handleDeleteBaseCard = () => {
    dispatch(deleteBaseCard());
  }
  
  return (
    <>
      <GlobalStyles />
      <Container>
        <Section>
          {baseCard && <Card isBase data={baseCard} onClick={handleDeleteBaseCard} />}
          <Slider />
        </Section>
        <Form />
      </Container>
    </>
  )
}

export default App
