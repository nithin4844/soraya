import { useState, useEffect } from 'react'
import Navbar  from './components/Navbar'
import Hero    from './components/Hero'
import About   from './components/About'
import Services     from './components/Services'
import Testimonials from './components/Testimonials'
import BookCTA      from './components/BookCTA'
import Footer  from './components/Footer'
import Modal   from './components/Modal'
import Floats  from './components/Floats'

export default function App() {
  const [modal, setModal]         = useState(false)
  const [preset, setPreset]       = useState('')

  useEffect(() => {
    document.body.style.overflow = modal ? 'hidden' : ''
  }, [modal])

  const open  = (treatment = '') => {
    setPreset(typeof treatment === 'string' ? treatment : '')
    setModal(true)
  }
  const close = () => setModal(false)

  return (
    <>
      <Navbar onBook={open} />
      <main>
        <Hero     onBook={open} />
        <About    onBook={open} />
        <Services onBook={open} />
        <Testimonials />
        <BookCTA  onBook={open} />
      </main>
      <Footer onBook={open} />
      <Floats />
      {modal && <Modal onClose={close} preset={preset} />}
    </>
  )
}
