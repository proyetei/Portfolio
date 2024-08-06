import { subTitle } from "@/fonts/font";
import CustomText from "./TitleText";
import Image from "next/image";
import { motion } from "framer-motion"
export default function Intro(){
    return(
        <motion.div
        initial={{y: 100, opacity: 0,}}
        animate={{
          y: 0,
          opacity: 1,
          transition: {duration: 0.5, ease: 'easeInOut'}
        }}
        exit={{
          opacity: 0,
          transition: {duration: 0.25, ease: 'easeInOut'}
        }}>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
            <div className="flex flex-col gap-4 items-center justify-center">
                <div className={`${subTitle.className} flex flex-row items-end text-3xl gap-3 my-4`}> Hi, I&apos;m <CustomText text="PROYETEI"/> </div>
                <p className="md:text-2xl text-lg text-indigo-400"> Efficient problem solver and self-starter, seasoned in fast-paced working environments </p>
                <p className="md:text-xl text-sm my-4">I am a <span className="text-indigo-400"> 4th year Computer Science </span> student at <span className="text-indigo-400"> McMaster University </span>, graduating in May 2025.
                I have contributed to major feature launches <span className="text-indigo-400"> impacting 200K+ people </span> and automating systems in customer-facing consoles with high traffic.</p>
            </div>
            <div className="flex items-center justify-center ">
                <Image src="/proyetei.jpg" alt="proyetei" width={450} height={450} className="drop-shadow-pink" />
            </div>
        </div>
        </motion.div>
    )
}