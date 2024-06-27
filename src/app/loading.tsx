'use client';
import { GridLoader } from "react-spinners";



export default function Loading() {
    return (
      <div className="absolute top-0 w-full h-screen left-0 flex  items-center justify-center">
      <GridLoader 
       color="white"
      />
      </div>
    )
  }