import React, { Dispatch, FC, PropsWithChildren, SetStateAction, useEffect } from "react";
import { StopPropagation } from "@shared/ui/stop-propagation";
import { StyledWrapper } from "./ModalStyles";
import disableScroll from 'disable-scroll';

export interface ModalProps extends PropsWithChildren {
    isVisible: boolean;
    setVisible: Dispatch<SetStateAction<boolean>>;
}

export const Modal: FC<ModalProps> = ({ children, isVisible, setVisible }) => {
    function onClick() {
        setVisible(prevState => {
            return !prevState;
        })
    }

    useEffect(() => {
        isVisible ? disableScroll.on() : disableScroll.off();
    }, [isVisible])

    return (isVisible &&
        <StyledWrapper onClick={onClick}>
            <StopPropagation>
                {children}
            </StopPropagation>
        </StyledWrapper>);
};
