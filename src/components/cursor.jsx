import React from 'react';
import {motion} from 'framer-motion'
import { useGlobalContext } from '../context';
 
function Cursor() {
    const {variants,cursorVariant} = useGlobalContext();
    
  return (
    <motion.div
        className='cursor'
        variants={variants}
        animate={cursorVariant}
    />
  )
}

export default Cursor