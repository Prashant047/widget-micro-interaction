'use client';
import { Sprout, Pencil, Coffee, Car } from "lucide-react"
import { motion, LayoutGroup, AnimatePresence  } from 'framer-motion';
import { useState } from 'react';

const widgetIconMap = {
  'sprout': <Sprout/>,
  'car': <Car/>,
  'coffee': <Coffee/>,
  'pencil': <Pencil/>
};

const drawrVariant = {
  close: {
  },
  open: {
  }
};

const buttonContVariant = {
  close: {
    y: '120%'
  },
  open: {
    y: 0
  }
};

export default function Home() {

  const [active, setActive] = useState<string| null>(null);
  const nothingSelected = active === null;
  const setToNull = () => setActive(null);

  return (
    <main>
      <div className="mx-auto mt-[150px] mb-7 bg-neutral-800 w-[200px] h-[200px] rounded-[25px] text-neutral-200 overflow-hidden">
        <LayoutGroup>
          <AnimatePresence mode="popLayout">
            {nothingSelected?(
              <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className="h-full grid grid-cols-2 grid-rows-2 place-items-center">
                <motion.div whileHover={{scale: 1.05}} whileTap={{scale:0.9}} key="sprout" onClick={() => setActive('sprout')} layoutId="sprout" className="h-16 w-16 border-2 flex items-center justify-center rounded-full cursor-pointer">
                  <Sprout/>
                </motion.div>
                <motion.div  whileHover={{scale: 1.05}} whileTap={{scale:0.9}} key="pencil"  onClick={() => setActive('pencil')}layoutId="pencil" className="h-16 w-16 border-2 flex items-center justify-center rounded-full cursor-pointer">
                  <Pencil/>
                </motion.div>
                <motion.div whileHover={{scale: 1.05}} whileTap={{scale:0.9}} key="coffee"  onClick={() => setActive('coffee')} layoutId="coffee" className="h-16 w-16 border-2 flex items-center justify-center rounded-full cursor-pointer">
                  <Coffee/>
                </motion.div>
                <motion.div whileHover={{scale: 1.05}} whileTap={{scale:0.9}} key="car"  onClick={() => setActive('car')} layoutId="car" className="h-16 w-16 border-2 flex items-center justify-center rounded-full cursor-pointer">
                  <Car/>
                </motion.div>
              </motion.div>
            ):(
              <motion.div 
                className="h-full p-4 rounded-[25px]"
                variants={drawrVariant}
                initial="close"
                animate="open"
                exit="close"
                key={`drawr`}
              >
                <motion.div 
                  key={active} 
                  layoutId={active}  
                  transition={{ease: [0.32, 0.72, 0, 1]}}
                  className="h-16 w-16 mb-4 mx-auto border-2 flex items-center justify-center rounded-full"
                >
                  {/* @ts-ignore */}
                  {widgetIconMap[active]}
                </motion.div>
                <div className="overflow-hidden">
                  <motion.div 
                    className="flex flex-col text-neutral-800 gap-2"
                    variants={buttonContVariant}
                    transition={{ ease:[0.32, 0.72, 0, 1]}}
                  >
                    <button onClick={setToNull} className="bg-green-500 py-2 rounded-lg font-bold hover:bg-green-500/90 transition">complete</button>
                    <button onClick={setToNull} className="bg-neutral-200 py-2 rounded-lg font-bold hover:bg-neutral-200/90 transition">open app</button>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </LayoutGroup>
      </div>
      <div className="px-4">
        <p className="text-center">
          widget micro-interaction with <b>framer-motion</b> layout animations
        </p>
        <p className="text-center text-neutral-500">
          click or hover over the icons
        </p>
      </div>
    </main>
  )
}
