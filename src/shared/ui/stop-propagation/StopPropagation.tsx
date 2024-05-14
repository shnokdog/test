import React, { FC, PropsWithChildren } from "react";

export const StopPropagation: FC<PropsWithChildren> = ({children}) => {
    return (
        <div onClick={e => e.stopPropagation()}>
            {children}
        </div>
    );
};
