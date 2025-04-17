'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import './App.css'
import GlobalBackground from './component/GlobalBackground.jsx';
import NavBar from './component/navbar.jsx'
import HeadComponent from './component/headComponent.jsx'
import Footer from './component/footer.jsx'
import AboutUs from './component/AboutUs.jsx'

function App() {
  return (
    <GlobalBackground>
      <NavBar/>
      <HeadComponent/>
      <AboutUs/>
      <Footer/>
    </GlobalBackground>
  );
}

export default App;
