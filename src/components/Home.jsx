import { Box, Container, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../assets/image1.jpg'
import img2 from '../assets/image2.jpg'
import img3 from '../assets/image3.jpg'
import img4 from '../assets/image4.jpg'
import img5 from '../assets/image5.jpg'


const headingOptions = {
    pos: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%,-50%)",
    textTransform: "uppercase",
    p: "4",
    size: "4xl"
}
const Home = () => {
    return (
        <Box>
            <MyCarousel />
            <Container maxW={'container.xl'} minH={'100vh'} p={'16'}>
                <Heading textTransform={'uppercase'} py={"2"} w={'fit-content'} borderBottom={'2px solid'} >Services</Heading>
                <Stack h="full" p={"4"} alignItems={"center"} direction={['column', 'row']}>
                    <img src={img5} h={['40', '400']} filter={'hue-rotate(-130deg)'} />
                    <Text  letterSpacing={'widest'} lineHeight={"190%"} p={['4','16']} textAlign={'center'}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae assumenda labore ipsam ut et sit eveniet expedita inventore odit omnis reprehenderit at accusantium exercitationem facilis, laboriosam eius rerum quo! Dolorum nobis vitae ducimus temporibus minima et deserunt quod molestiae doloribus rerum, tempore qui, voluptate eius eveniet excepturi obcaecati! Nostrum dolores aspernatur sint excepturi expedita saepe facilis dolore, reiciendis maiores ipsa pariatur qui, autem mollitia perspiciatis necessitatibus? 
                    </Text>
                </Stack>
            </Container>
        </Box>
    )
}
const MyCarousel = () => (
    <Carousel autoPlay infiniteLoop interval={1000} showStatus={false} showThumbs={false} showArrows={false}>
        <Box w={"full"} h={'100vh'}>
            <img src={img1} />
            <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOptions}>Head to future</Heading>
        </Box>
        <Box w={"full"} h={'100vh'}>
            <img src={img2} />
            <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOptions}>Hello future</Heading>
        </Box>
        <Box w={"full"} h={'100vh'}>
            <img src={img3} />
            <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOptions}>Wassup Future</Heading>
        </Box>
        <Box w={"full"} h={'100vh'}>
            <img src={img4} />
            <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOptions}>Hey Future</Heading>
        </Box>
    </Carousel>
)


export default Home;