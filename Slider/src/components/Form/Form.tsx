import { useState } from "react"
import { Button } from "../../styles/button"
import { Input } from "../../styles/input"
import { useAppDispatch } from "../../store/store"
import { addCard } from "../../store/features/ActionCardSlice"

export const Form = () => {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState<string>('');

  const handleAddCard = (title: string) => {
    if (value !== '') {
      dispatch(addCard(title));
      setValue('');
    }
  }

  return (
    <>
      <Input placeholder='New Card' value={value} onChange={(e) => setValue(e.target.value as string)}/>
      <Button $unfull onClick={() => handleAddCard(value)}>Add</Button>
    </>
  )
}