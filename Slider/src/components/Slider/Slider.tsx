import { useEffect, useState } from "react";
import { useRef } from "react";
import { useAppSelector } from "../../store/store";
import { Arrow } from "../../styles/button"
import { SliderContainer, StyledSliderList, Wrapper } from "../../styles/slider"
import { Oops } from "../../styles/global";
import { Card } from "../Card/Card";

export const Slider = () => {
  const listCards = useAppSelector(state => state.data);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState<number>(0);
  const [widthCard, setWidthCard] = useState<number>(0);
  const [rightBtnShow, setRightBtnShow] = useState<boolean>(false);
  const [leftBtnShow, setLeftBtnShow] = useState<boolean>(false);
  const paddingContainer = wrapperRef.current ? 
                            (containerRef!.current!.offsetWidth! - wrapperRef!.current!.offsetWidth!) / 2 : 0;

  const handleMoveLeft = () => {
    setOffset(prev => prev - widthCard - paddingContainer);
  }

  const handleMoveRight = () => {
    if ((offset + widthCard + paddingContainer) > 0) return

    setOffset(prev => prev + widthCard + paddingContainer);
  }

  useEffect(() => {
    const child = wrapperRef.current?.children[wrapperRef.current?.children.length - 1];
    
    if (child) {
      if (child?.tagName !== 'SPAN') {
        setWidthCard(child?.clientWidth);
      }
    }

    if ((wrapperRef!.current!.clientWidth > (listCards.length * widthCard)) ||
      (listCards.length * widthCard) + offset < wrapperRef!.current!.clientWidth
    ) {
      setLeftBtnShow(false);
    } else {
      setLeftBtnShow(true);
    }

    if ((offset + widthCard + paddingContainer) > 0) {
      setRightBtnShow(false);
    } else {
      setRightBtnShow(true);
    }

  }, [widthCard, listCards, offset, containerRef.current?.clientWidth, paddingContainer])

  return (
    <SliderContainer>
      {leftBtnShow && 
        <Arrow onClick={handleMoveLeft}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z" fill="black"/>
          </svg>
        </Arrow>
      }

      <StyledSliderList ref={containerRef}>
        <Wrapper ref={wrapperRef} style={{transform: `translateX(${offset}px)`}}>
          {listCards.length > 0 ?
            listCards.map((item) => (
              <Card data={item} key={item.id}/>
            )) :
            <Oops>Ничего нет</Oops>
          }
        </Wrapper>
      </StyledSliderList>

      {rightBtnShow &&
        <Arrow $isRight onClick={handleMoveRight}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z" fill="black"/>
          </svg>
        </Arrow>
      }
    </SliderContainer>
  )
}