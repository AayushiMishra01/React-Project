

import React, { useEffect, useState } from 'react'
import { getMode, mean, median } from './Mean'

export default function Home() {
    const[inputs,setInputs]=useState([])
    const[meanValue,setMeanValue]=useState(0)
    const[medianValue,setMedianValue]=useState(0)
    const[modeValue,setModeValue]=useState(0)
    useEffect(()=>{
       setMeanValue( mean(inputs))
       setMedianValue(median(inputs))
       setModeValue( getMode(inputs))
    },[inputs])
  return (
    <div>
              Home Component
              <input type="text" placeholder="enter comma seperated numbers" onChange={(e)=>setInputs(e.target.value.split(","))}></input>
              <div>
                  <div>Mean: {meanValue}</div>
                  <div>Median: {medianValue}</div>
                      <div>Mode: {modeValue}</div>
              </div>
            </div>
  )
}

