'use client';
// this is used for lottie-player for client side rendering

import './Style.css';
import Image from 'next/image';
import linkedin from '../../public/linkedinNarBar.png';
import github from '../../public/gitNavBar.png';
import headerpic from '../../public/Header_pic.jpeg';
import Button from '@mui/material/Button';
import React, {useRef} from "react";
import AboutMe from '../../public/about_me_pic.jpeg';
import subStackFooter from '../../public/stack.png';
import gmail from '../../public/gmail.png';
import Tooltip from '@mui/material/Tooltip';


export default function Home() {

    const ref = useRef(null);
    React.useEffect(() => {
        import('@lottiefiles/lottie-player');
    })

  return (
    <main className='mainClass'>
        <div className='navbar'>
            <div className='emojiIcon'>
                <a href="">
                    🙋🏻‍♂️
                </a>
            </div>
            <div className='menuActionButtons'>
                <div className='menuButton'>
                    <a href="">
                        <h4>Home</h4>
                    </a>
                </div>
                <div className='menuButton'>
                    <a href="https://drive.google.com/file/d/18S0MzC0gF3tIfz_gfostruWMaqgriQI-/view?usp=sharing">
                        <h4>Resume</h4>
                    </a>
                </div>
                <div className='menuButton'>
                    <div className='contactNumber'>
                        <h4>Contact</h4>
                        <div className='contactOnHover'>
                            🇮🇳 9439698531
                        </div>
                    </div>
                </div>
            </div>
            <div className='socialNavBarIcons'>
                <div className='mailNavBarIconDiv'>
                    <a href="mailto:arosekpadhi@gmail.com?subject=Arosek%2C I want to Connect">
                        <Image src={gmail} alt='mail' className='mailNavBarIcon'/>
                    </a>
                </div>
                <div className='mailNavBarIconDiv'>
                    <a href="https://linkedin.com/in/arosekp">
                        <Image src={linkedin} alt='mail' className='mailNavBarIcon'/>
                    </a>
                </div>
                <div className='mailNavBarIconDiv'>
                    <a href="https://github.com/padhs">
                    <Image src={github} alt='mail' className='mailNavBarIcon'/>
                    </a>
                </div>
                <div className='mailNavBarIconDiv'>
                    <a href="https://padhs.substack.com">
                        <Image src={subStackFooter} alt='mail' className='mailNavBarIcon'/>
                    </a>
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
                        I am a product manager, I do Product Case Studies and Teardowns.
                    </strong>
                </div>
                <div className='subProductTeardown'>
                    <strong>
                        I have done many product related articles. To see some of my works, head down and immerse
                        yourself into the world of producting !
                    </strong>
                </div>
                <div className='contactMeButtonMainPage'>
                    <Tooltip title='🇮🇳 9439698531' arrow>
                        <Button
                            className='contactMeButton'
                            variant='contained'>
                            <strong>contact me</strong>
                        </Button>
                    </Tooltip>
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
                            Head down to the place where I have done all my product teardowns and case studies of different products. I assure you, <>{'it\'ll'}</> be amazing.
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
                    className='aboutmePic'
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
                    This is the information about me and this is how you are going to know about me, my works and all things related.
                    <br/> <>{'Let\'s'}</> goooo! 🚀
                </div>
            </div>
        </div>
        <div className='footer'>
            <div className='nameandPM'>
                <div className='footerName'>
                    <strong>Arosek Padhi</strong>
                </div>
                <div className='productManager'>
                    Product Manager
                </div>
            </div>
            <div className='footerContent'>
                <div className='talk'>
                    <strong>
                        <>{'Let\'s'}</> Talk!
                    </strong>
                </div>
                <div className='footerTalkInfo'>
                    I am always open to connect with people in tech, learn more about product management and discuss navigating this rewarding career path.
                </div>
                <div className='footerIconMenu'>
                    <div className='footerIconForConnecting'>
                        <a href="https://linkedin.com/in/arosekp">
                            <Image
                                className='linkedInIconFooter'
                                src={linkedin}
                                alt='linkedin'
                            />
                        </a>
                    </div>
                    <div className='footerIconForConnecting'>
                        <a href="mailto:arosekpadhi@gmail.com?subject=Arosek%2C I want to Connect">
                            <Image
                                className='linkedInIconFooter'
                                src={gmail}
                                alt='linkedin'
                            />
                        </a>
                    </div>
                    <div className='footerIconForConnecting'>
                        <a href="https://padhs.substack.com">
                            <Image
                                className='linkedInIconFooter'
                                src={subStackFooter}
                                alt='linkedin'
                            />
                        </a>
                    </div>
                    <div className='footerIconForConnecting'>
                        <a href="https://github.com/padhs">
                            <Image
                                className='linkedInIconFooter'
                                src={github}
                                alt='linkedin'
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className='love'>
            Made with ❤️ by Arosek Padhi
        </div>
    </main>
  );
}
