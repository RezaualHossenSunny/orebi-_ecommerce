
import React from 'react'
import Container from './../Layout/Container';
import Flex from './../Layout/Flex';
import { TbNumber2Small } from "react-icons/tb";
import { FaCarSide } from "react-icons/fa";
const Additional = () => {
    return (
        <div className='border-b border-[#F0F0F0] py-7 mt-[-12px]'>
            <Container>
                <Flex className='justify-between '>
                    <div className='flex items-center'>
                        <TbNumber2Small className='text-4xl ' />
                        <p className='gap-x-4 font-dm text-second text-base font-normal'>Two years warranty</p>
                    </div>

                    <div className='flex items-center'>

                        <FaCarSide className='text-4xl ' />
                        <p className='font-dm text-second text-base font-normal ml-4'>Free shipping</p>
                    </div>

                    <div className='flex items-center'>

                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M9.98165 1.62584e-05C7.30952 0.00481465 4.88335 1.0578 3.09214 2.76957L1.65206 1.32949C1.04238 0.719815 0 1.15159 0 2.01377V7.41937C0 7.95385 0.433266 8.38711 0.967742 8.38711H6.37335C7.23552 8.38711 7.6673 7.34473 7.05766 6.73506L5.37419 5.05159C6.61871 3.88631 8.22907 3.24082 9.93992 3.22606C13.6656 3.19389 16.8062 6.20901 16.774 10.0584C16.7434 13.7101 13.7829 16.7742 10 16.7742C8.34165 16.7742 6.77431 16.1824 5.53911 15.0986C5.34786 14.9308 5.05903 14.941 4.87911 15.1209L3.27984 16.7201C3.08339 16.9166 3.0931 17.2369 3.29927 17.4231C5.0725 19.0247 7.42234 20 10 20C15.5228 20 20 15.5229 20 10.0001C20 4.48361 15.4981 -0.00986277 9.98165 1.62584e-05Z" fill="#262626" />
                        </svg>
                        <p className='font-dm text-second text-base font-normal ml-4'>Free shipping</p>
                    </div>



                </Flex>
            </Container>
        </div>
    )
}

export default Additional