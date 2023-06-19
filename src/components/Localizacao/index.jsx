import React from "react";

import { Location } from "../../pages/Location";

import { FaTimes } from "react-icons/fa";

import * as S from "./styles"

const Localizacao = ({ active }) => {
    const closeLocation = () => {
        active(false)
    }

    return (
        <S.Container sidebar={active}>
            <FaTimes onClick={closeLocation}/>
            <Location/>
        </S.Container>
    )



}

export default Localizacao