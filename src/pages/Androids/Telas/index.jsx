
import React, { useEffect, useState } from "react";

import { AndroidsDesktop } from "./AndroidsDesktop";
import { AndroidsMobile } from "./AndroidsMobile";


export function Telas() {
    const [windowWidth, setWindowWidth] = useState(
      document.documentElement.clientWidth
    );
  
    useEffect(() => {
      function updateTableComponentBasedInWindowWidth() {
        const currentWidth = document.documentElement.clientWidth;
        setWindowWidth(currentWidth);
      }
      window.addEventListener("resize", updateTableComponentBasedInWindowWidth);
  
      return () => {
        window.removeEventListener(
          "resize",
          updateTableComponentBasedInWindowWidth
        );
      };
    }, []);
  
    return windowWidth > 768 ? <AndroidsDesktop /> : <AndroidsMobile/>;
  }