import React from "react";
import { Container, Content } from "./styles"
import { FaTimes } from "react-icons/fa";
import * as S from "./styles"
import { Link } from "react-router-dom";

const Sidebar = ({ active }) => {
    const closeSidebar = () => {
        active(false)
    }

    return (
        <S.Container sidebar={active}>
            <FaTimes onClick={closeSidebar} />
            <S.Content>
            <ol>
                <li>
                    <Link to="/iphones">iPhones</Link>
                </li>
                <li>
                    <Link to="/android">Androids</Link>
                </li>
                <li>
                    <Link to="/smartwatch">Smartwatchs</Link>
                </li>
                <li>
                    <Link to="/fones-de-ouvido">Fones Bluetooth</Link>
                </li>
                <li>
                    <Link to="/blackfriday">Black Friday</Link>
                </li>
            </ol>
           </S.Content>

        </S.Container>
    )
}

export default Sidebar