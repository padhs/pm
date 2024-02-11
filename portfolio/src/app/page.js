'use client';
// this is used for lottie-player for client side rendering

import './Style.css';
import Image from 'next/image';
import mailNavBar from '../../public/mailNavBar.png';
import whatsapp from '../../public/whatsappNavBar.png';
import linkedin from '../../public/linkedinNarBar.png';
import github from '../../public/gitNavBar.png';
import substack from '../../public/subsNavBar.png';
import headerpic from '../../public/Header_pic.jpeg';
import Button from '@mui/material/Button';
import React, {useRef} from "react";
import AboutMe from '../../public/about_me_pic.jpeg';

export default function Home() {

    const ref = useRef(null);
    React.useEffect(() => {
        import('@lottiefiles/lottie-player');
    })

  return (
    <main className='mainClass'>
        <div className='navbar'>
            <div className='emojiIcon'>
                🙋🏻‍♂️
            </div>
            <div className='menuActionButtons'>
                <div className='menuButton'>
                    Home
                </div>
                <div className='menuButton'>
                    Resume
                </div>
                <div className='menuButton'>
                    Contact
                </div>
            </div>
            <div className='socialNavBarIcons'>
                <div className='mailNavBarIconDiv'>
                    <Image src={mailNavBar} alt='mail' className='mailNavBarIcon'/>
                </div>
                <div className='mailNavBarIconDiv'>
                    <Image src={whatsapp} alt='mail' className='mailNavBarIcon'/>
                </div>
                <div className='mailNavBarIconDiv'>
                    <Image src={linkedin} alt='mail' className='mailNavBarIcon'/>
                </div>
                <div className='mailNavBarIconDiv'>
                    <Image src={github} alt='mail' className='mailNavBarIcon'/>
                </div>
                <div className='mailNavBarIconDiv'>
                    <Image src={substack} alt='mail' className='mailNavBarIcon'/>
                </div>
            </div>
        </div>
        <div className='mainPage'>
            <div className='mainContent'>
                <div className='heyIntro'>
                    <strong>
                        Hey, I am Arosek Padhi.
                    </strong>
                </div>
                <div className='productTeardown'>
                    <strong>
                        I am a product manager and I create Product Case Studies and Teardowns.
                    </strong>
                </div>
                <div className='subProductTeardown'>
                    <strong>
                        I have done many product related articles. To see some of my works, head down and immerse
                        yourself into the world of producting !
                    </strong>
                </div>
                <div className='contactMeButtonMainPage'>
                    <Button
                        className='contactMeButton'
                        variant='contained'>
                        <strong>contact me</strong>
                    </Button>
                </div>
            </div>
            <div className='headerImageContainer'>
            <Image
                    src={headerpic}
                    alt='headerpic'
                    className='headerImage'
                />
            </div>
        </div>
        <div className='myWorkSection'>
            <div className='seeMyCodeSection'>
                <div className='animationAndWork'>
                    <div className='uniqueLottieAnimation'>
                        <lottie-player
                            ref={ref}
                            autoplay
                            loop
                            mode='normal'
                            src='https://lottie.host/950ddbad-115d-4972-95f5-4b6432f71fc8/xCUKegt9sI.json'
                        />
                    </div>
                    <div className='seeMyCode'>
                        <strong>
                            Head down to the place where I have done all my product teardowns and case studies of different products. <br/>I assure you, it will be amazing.
                        </strong>
                    </div>
                </div>
                <div className='animationAndWork'>
                    <div className='lottieAnimationForCode'>
                        <lottie-player
                            ref={ref}
                            autoplay
                            loop
                            mode='normal'
                            src='https://lottie.host/c65e28f9-6228-49d3-bf39-817425c8f241/E7UpDkE7VU.json'
                        />
                    </div>
                    <div className='seeMyCode'>
                        <strong>
                            Dive deep down into the world of my codes and my work and see a whole new side of yourself.
                        </strong>
                    </div>
                </div>
                <div className='animationAndWork'>
                    <div className='lottieAnimationForCode'>
                        <lottie-player
                            ref={ref}
                            autoplay
                            loop
                            mode='normal'
                            src='https://lottie.host/faa850f6-a380-41d3-b508-78f438007b10/Ctl39wA2Ky.json'
                        />
                    </div>
                    <div className='seeMyCode'>
                        <strong>
                            Dive deep down into the world of my codes and my work and see a whole new side of yourself.
                        </strong>
                    </div>
                </div>
            </div>
        </div>
        <div className='aboutMeSection'>
            <div className='aboutmePicContainer'>
                <Image
                    src={AboutMe}
                    alt='aboutmePic'
                />
            </div>
            <div className='aboutMeInfo'>
                <div className='aboutMeHeading'>
                    <strong>
                        About Me
                    </strong>
                </div>
                <div className='aboutMeSubInfo'>
                    This is the information about me and this is how you are going to know about me, my works and all things related. 🚀
                </div>
            </div>
        </div>
        <div className='footer'>
            <div>

            </div>
            <div className='footerMenu'>

            </div>
        </div>
    </main>
  );
}
