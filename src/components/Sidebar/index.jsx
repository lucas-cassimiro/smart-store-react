import React from "react";
import { FaTimes } from "react-icons/fa";
import * as S from "./styles"
import { Link } from "react-router-dom";

const Sidebar = ({ active }) => {
    const closeSidebar = () => {
        active(false)
    }

    return (
        <S.Container sidebar={active} >
            <FaTimes onClick={closeSidebar}/>
            <S.Content>
            <ol>
                <li>
                    <Link to="/iphones" onClick={closeSidebar}>iPhones</Link>
                </li>
                <li>
                    <Link to="/android" onClick={closeSidebar}>Androids</Link>
                </li>
                <li>
                    <Link to="/smartwatch" onClick={closeSidebar}>Smartwatchs</Link>
                </li>
                <li>
                    <Link to="/fones-de-ouvido" onClick={closeSidebar}>Fones Bluetooth</Link>
                </li>
                <li>
                    <Link to="/blackfriday" onClick={closeSidebar}>Black Friday</Link>
                </li>
            </ol>
           </S.Content>

        </S.Container>
    )
}

export default Sidebar