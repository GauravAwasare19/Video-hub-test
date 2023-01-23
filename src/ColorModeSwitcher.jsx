import React from "react";
import { FaMoon, FaSun } from 'react-icons/fa';
import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react"

export const ColorModeSwitcher = props =>{
    const { toggleColorMode } = useColorMode();
    const SwitchIcon = useColorModeValue(FaMoon, FaSun);

    return(
        <IconButton 
          variant="ghost"
          color="current"
          pos={'fixed'}
          top={'4'}
          right={'4'}
          zIndex={"overlay"}
          onClick={toggleColorMode}
          icon={<SwitchIcon/>}
          {...props}
        />
    )
}

export default ColorModeSwitcher;