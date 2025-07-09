"use client"
import { useState, useEffect } from 'react';
import Navbar from "@/app/components/Navbar"
import Header from "@/app/components/Header"
import Services from "@/app/components/Services"
import Footer from "@/app/components/Footer"
import Contact from "@/app/components/Contact"
import Loader from '@/app/components/Loader';


export default function Home() {
const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen">
    {loading && <Loader />}
     <Navbar/>
     <Header/>
     <Services/>
     <Contact/>
     <Footer/>
    </div>
  );
}
