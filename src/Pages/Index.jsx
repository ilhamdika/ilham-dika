import React from 'react'
import TypeIt from "typeit-react";
import { useEffect, useState } from "react";
import { DotLoader } from "react-spinners"
import Button from "../components/Button";
import Card from "../components/Card";
import HeroImg from "../assets/images/landing.png"
import HeroImg2 from "../assets/images/landing2.png"
import Foto from "../assets/images/foto.jpeg"
import { Link } from 'react-router-dom';

export const Index = () => {
    const [loading,setLoading]=useState(false)
    useEffect(()=>{
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        },1000)
    },[])

  return (
    <>
    {
            loading ? <div className="flex justify-center items-center h-screen">
                <DotLoader color={'#a9dbd2'} loading={loading} size={150} />
            </div> :
        <div>
            {/* Hero Content */}
            <div className="flex justify-center items-center py-36">
                <div className="">
                    <img src={Foto} alt="IMG-20211017-123751" border="0" className='rounded-full w-64 h-64' data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500"/>
                    {/* <h1 className="dark:text-white justify-center items-center flex mt-2">
                        Hi, internet
                    </h1> */}
                    <TypeIt className="dark:dark:text-white justify-center items-center flex text-2xl font-thin mt-2" data-aos="zoom-out-up">
                        Ilham Dika Permana
                    </TypeIt>
                    <TypeIt className="dark:text-white justify-center items-center flex text-4xl mt-3 font-medium">
                        Web Developer
                    </TypeIt>
                    <div className="flex justify-center items-center mt-3">
                        <Button className="dark:text-white blue w-52">
                            <Link to="/about">
                                About Me
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>

            {/* card */}
            <div className="flex flex-col h-screen laptop:flex-row dekstop:flex-row tablet:flex-row mobile:h-auto" >
                {[1,2,3].map(i=> (
                <Card
                key={i}
                thumbnail={'https://static.vecteezy.com/system/resources/previews/000/330/430/original/vector-pencil-line-black-icon.jpg'}
                title={'Web Developer'}
                description={'Create a website for information, business etc., which can be accessed digitally'}
                />
                ))}
            </div>
            
            
            <div className="grid grid-cols-2 laptop:flex-row dekstop:flex-row mobile:grid-cols-1 mt-3">
                    <div className="">
                        <img src={HeroImg2} alt="IMG-20211017-123751" border="0" className='w-auto h-auto' data-aos="zoom-out-up" data-aos-duration="1000" data-aos-delay="200"/>
                    </div>
                    <div className="">
                        <p className="dark:text-white mx-8 laptop:py-36 mobile:mt-2 mobile:mx-auto" data-aos="zoom-in-left" data-aos-duration="1000" data-aos-delay="200">I am a fresh graduate of S1 Informatics Engineering who is always motivated and able to work together in a team or work individually. Now looking for a position as a web developer. Someone who is thorough, structured, and nimble when doing tasks. Ambitious to learn and grow from the experiences I've had.</p>
                    </div>

            </div>

            <div className="justify-center items-center py-36">
                <h1 className="dark:text-white text-center text-3xl font-semibold" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1000">
                    something I want to write about
                </h1>
                <p className="dark:text-white text-center mt-7" data-aos="fade-up"
     data-aos-duration="3000">
                            “ I also want to continue learning and growing in technical skills related to my work, such as web programming. Web technologies continue to evolve rapidly, and by staying up-to-date and learning, I can take on new challenges in this field. I want to continue to improve my understanding of programming languages, frameworks, and related tools so that I can create innovative and efficient web solutions. Overall, the drive to grow and continually learn is important in achieving success in any field. By maintaining a passion for learning and identifying areas in which I would like to develop, I can improve my skills, gain new knowledge, and reach higher personal and professional goals. “
                </p>
            </div>
    
        </div>
}
    </>
  )
}

export default Index
