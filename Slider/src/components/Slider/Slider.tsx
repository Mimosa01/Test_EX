import { useEffect, useState } from "react";
import { useRef } from "react";
import { useAppSelector } from "../../store/store";
import { Arrow } from "../../styles/button"
import { SliderContainer, StyledSliderList } from "../../styles/slider"
import { Oops } from "../../styles/global";
import { Card } from "../Card/Card";

export const Slider = () => {
  const listCards = useAppSelector(state => state.data);
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [rightEnd, setRightEnd] = useState<boolean>(false);

  const handleMove = (direction: number) => {
    if ((currentSlide + direction) > listCards.length - 1 || (currentSlide + direction) < 0) return

    setCurrentSlide((prev) => prev + direction);
  }

  useEffect(() => {
    const visible = containerRef.current?.offsetWidth;
    const child = containerRef.current?.children[containerRef.current?.children.length - 1];
    const rect = child?.tagName !== 'span' ? child?.getBoundingClientRect() : undefined;

    if (rect) {
      if (rect.left >= 0 && rect.right <= visible!) {
        setRightEnd(false);
        return;
      }
      setRightEnd(true);
    }
  }, [currentSlide, listCards])

  return (
    <SliderContainer>
      {currentSlide > 0 && 
        <Arrow onClick={() => handleMove(-1)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z" fill="black"/>
          </svg>
        </Arrow>
      }

      <StyledSliderList ref={containerRef}>
        {listCards.length > 0 ?
          listCards.map((item, index) => (
            <Card data={item} key={item.id} isHide={index < currentSlide && true}/>
          )) :
          <Oops>Ничего нет</Oops>
        }
      </StyledSliderList>

      {rightEnd && 
        <Arrow $isRight onClick={() => handleMove(1)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z" fill="black"/>
          </svg>
        </Arrow>
      }
    </SliderContainer>
  )
}