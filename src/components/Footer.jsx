import React from "react";
import { Box, Button, Container, Heading, HStack, Input, Stack, Text, VStack } from "@chakra-ui/react";
import {AiOutlineSend} from 'react-icons/ai'

const Footer = () =>{
    return(
        <Box bgColor={'blackAlpha.900'} minH={'10'} p='5' color={'white'}>
            <Stack direction={['column','row']}>
                <VStack alignItems={"stretch"} w={"full"} px={"4"}>
                    <Heading size={'sm'} textTransform={'uppercase'} textAlign={["center","left"]}>
                        Subscribe for updates.
                    </Heading>
                <HStack borderBottom={'2px solid white'} py="2">
                    <Input placeholder="Enter Email" border={"none"} borderRadius={"none"} outline={"none"} marginLeft={"5"} focusBorderColor={"none"}/>
                    <Button p={"0"} variant={'ghost'} colorScheme={'purple'} borderRadius={"0px 20px 20px 0px"}>
                        <AiOutlineSend size={20}/>
                    </Button>
                </HStack>
                </VStack>
                <VStack w={"full"} borderLeft={['none', '0.5px solid white']} borderRight={['none', '0.5px solid white']}>
                    <Heading size={"md"} textTransform={"uppercase"} textAlign={"center"}>Video Hub</Heading>
                    <Text>All Rights Recieved</Text> 
                </VStack>
                <VStack w={"full"} >
                    <Heading size={'md'} textTransform={'uppercase'}>Social media</Heading>
                    <Button variant={"link"} colorScheme={"twitter"}>Twitter</Button>
                    <Button variant={"link"} colorScheme={"red"}>Instagram</Button>
                </VStack>
            </Stack>
        </Box>
    )
}
export default Footer;