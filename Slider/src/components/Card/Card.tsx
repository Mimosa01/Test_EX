import { FC } from "react";
import { CardHeader, CardWrapper, StyledCard } from "../../styles/card"
import { TestData } from "../../testData";
import { Button } from "../../styles/button";
import { useAppDispatch } from "../../store/store";
import { baseCard, deleteCard } from "../../store/features/ActionCardSlice";

interface PropsCard {
  isBase?: boolean;
  data: TestData;
  onClick?: () => void;
}

export const Card: FC<PropsCard> = (props) => {
  const dispatch = useAppDispatch();

  const handleDelete = (id: number) => {
    dispatch(deleteCard(id))
  }

  const handleBase = (id: number) => {
    dispatch(baseCard(id));
  }

  const handler = props.onClick ? props.onClick : () => handleDelete(props.data.id);

  return (
    <StyledCard>
      {props.isBase && <h1>Base Card</h1>}
      <CardHeader>
        {props.data.title}
      </CardHeader>
      <CardWrapper $down={true}>
        <Button $delete onClick={handler}>delete</Button>
        {!props.isBase && <Button onClick={() => handleBase(props.data.id)}>base</Button>}
      </CardWrapper>
    </StyledCard>
  )
}