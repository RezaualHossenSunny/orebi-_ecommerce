import React from 'react'
import Container from '../Layout/Container'
import Flex from '../Layout/Flex'
import footer from '../../assets/Logo.png'
const Footer = () => {
    return (
        <div className='py-24 bg-[#F5F5F3]'>
            <Container>
                <Flex className='justify-between py-14'>
                    <div className='w-1/5'>
                        <h2 className='font-dm text-primary font-bold text-base'>MENU</h2>
                        <p className='text-second font-sm font-dm font-normal mt-4'>Home</p>
                        <p className='text-second font-sm font-dm font-normal mt-2'>Shop</p>
                        <p className='text-second font-sm font-dm font-normal mt-2'>Journal</p>
                        <p className='text-second font-sm font-dm font-normal mt-2'>Contact</p>
                    </div>
                    <div className='w-1/5'>
                        <h2 className='font-dm text-primary font-bold text-base'>SHOP</h2>
                        <p className='text-second font-sm font-dm font-normal mt-4'>Category 1</p>
                        <p className='text-second font-sm font-dm font-normal mt-2'>Category 2</p>
                        <p className='text-second font-sm font-dm font-normal mt-2'>Category 3</p>
                        <p className='text-second font-sm font-dm font-normal mt-2'>Category 4</p>
                    </div>
                    <div className='w-1/5'>
                        <h2 className='font-dm text-primary font-bold text-base'>HELP</h2>
                        <p className='text-second font-sm font-dm font-normal mt-4'>Privacy Policy</p>
                        <p className='text-second font-sm font-dm font-normal mt-2'>Shipping</p>
                        <p className='text-second font-sm font-dm font-normal mt-2'>Special E-shop</p>
                        <p className='text-second font-sm font-dm font-normal mt-2'>Terms & Conditions</p>
                    </div>
                    <div className='w-1/5'>
                        <h2 className='font-bold font-dm text-primary text-base w-[186px]'>(052) 611-5711
                            company@domain.com</h2>

                            <p className='text-second font-sm font-dm font-normal mt-4'>575 Crescent Ave. Quakertown, PA 18951</p>
                    </div>
                    <div className='w-1/5 '>
                        <img src={ footer}/>
                    </div>
                </Flex>
                 {/* lastpart footer */}
                <div className='py-16'>

                <Flex className='justify-between'>
                    <div className='w-2/4'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="92" height="16" viewBox="0 0 92 16" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M35.9214 3.86071C34.8607 3.86071 34 2.98214 34 1.92143C34 0.860714 34.8607 0 35.9214 0C36.9821 0 37.8429 0.860714 37.8429 1.92143C37.8429 2.98214 36.9821 3.86071 35.9214 3.86071ZM37.5821 16H34.2643V5.31786H37.5821V16ZM46.6893 16H50H50.0036V10.1321C50.0036 7.26071 49.3857 5.05 46.0286 5.05C44.4143 5.05 43.3321 5.93571 42.8893 6.775H42.8429V5.31786H39.6607V16H42.975V10.7107C42.975 9.31786 43.2393 7.97143 44.9643 7.97143C46.6643 7.97143 46.6893 9.56071 46.6893 10.8V16Z" fill="#262626"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M91.9171 4.6922C91.8566 3.41292 91.5644 2.27973 90.6272 1.3461C89.6935 0.412472 88.5604 0.120267 87.2811 0.0561247C85.9626 -0.0187082 82.0107 -0.0187082 80.6922 0.0561247C79.4165 0.116704 78.2833 0.408909 77.3461 1.34254C76.4089 2.27617 76.1203 3.40935 76.0561 4.68864C75.9813 6.00713 75.9813 9.95902 76.0561 11.2775C76.1167 12.5568 76.4089 13.69 77.3461 14.6236C78.2833 15.5572 79.4129 15.8494 80.6922 15.9136C82.0107 15.9884 85.9626 15.9884 87.2811 15.9136C88.5604 15.853 89.6935 15.5608 90.6272 14.6236C91.5608 13.69 91.853 12.5568 91.9171 11.2775C91.992 9.95902 91.992 6.01069 91.9171 4.6922ZM88.2503 4.67795C88.7777 4.67795 89.2053 4.2539 89.2053 3.72294C89.2053 3.19555 88.7777 2.76793 88.2503 2.76793C87.7229 2.76793 87.2953 3.19555 87.2953 3.72294C87.2953 4.25033 87.7194 4.67795 88.2503 4.67795ZM83.9884 3.89042C81.722 3.89042 79.894 5.71848 79.894 7.98485C79.894 10.2512 81.722 12.0793 83.9884 12.0793C86.2548 12.0793 88.0829 10.2512 88.0829 7.98485C88.0829 5.71848 86.2548 3.89042 83.9884 3.89042ZM83.9884 10.6468C82.5238 10.6468 81.3265 9.45301 81.3265 7.98486C81.3265 6.5167 82.5203 5.32294 83.9884 5.32294C85.4566 5.32294 86.6503 6.5167 86.6503 7.98486C86.6503 9.45301 85.453 10.6468 83.9884 10.6468ZM88.6958 14.2102C89.3978 13.9287 89.9359 13.3906 90.2138 12.6922C90.5714 11.7936 90.5515 9.828 90.5386 8.55383C90.5365 8.34247 90.5345 8.15014 90.5345 7.98486C90.5345 7.81954 90.5365 7.62724 90.5386 7.41595C90.5515 6.14245 90.5714 4.17914 90.2138 3.27751C89.9323 2.5755 89.3942 2.03742 88.6958 1.75947C87.7943 1.4038 85.8192 1.42275 84.5454 1.43497C84.3388 1.43695 84.1506 1.43875 83.9884 1.43875C83.8231 1.43875 83.6308 1.4368 83.4195 1.43466C82.146 1.42176 80.1827 1.40187 79.2811 1.75947C78.5791 2.04098 78.041 2.57906 77.763 3.27751C77.4074 4.17893 77.4263 6.15406 77.4385 7.42787C77.4405 7.63451 77.4423 7.8227 77.4423 7.98486C77.4423 8.15017 77.4404 8.34247 77.4382 8.55376C77.4253 9.82725 77.4054 11.7906 77.763 12.6922C78.0445 13.3942 78.5826 13.9323 79.2811 14.2102C80.1825 14.5659 82.1576 14.547 83.4314 14.5347C83.6381 14.5328 83.8263 14.531 83.9884 14.531C84.1537 14.531 84.346 14.5329 84.5573 14.535C85.8308 14.548 87.7941 14.5678 88.6958 14.2102Z" fill="#262626"/>
<path d="M2.39687 16V8.84375H0V6H2.39687V3.75938C2.39687 1.325 3.88438 0 6.05625 0C7.09688 0 7.99062 0.078125 8.25 0.1125V2.65625H6.74375C5.5625 2.65625 5.33437 3.21875 5.33437 4.04063V6H8L7.63438 8.84375H5.33437V16" fill="#262626"/>
</svg>
                    </div>
                    <div className='w-2/4 flex justify-end'>
                        <p className='text-second font-sm font-dm font-normal'>2020 Orebi Minimal eCommerce Figma Template by Adveits</p>
                    </div>
                    
                </Flex>

                </div>
            </Container>

        </div>
    )
}

export default Footer