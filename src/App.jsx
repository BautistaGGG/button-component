/* eslint-disable react/no-unescaped-entities */
// El diseño tiene 22 BOTONES, es decir, 22 REUSABLE-COMPONENTS
import './App.css'
import Button from "./components/Button"

function App() {

  return (
    <>
      <h1>Buttons</h1>
      <main>
        <section className='dos-btns'>
          <Button text="Default" bgColor="#E0E0E0" textColor="#3F3F3F" radius="6px" border="none" width="81px" height="36px"/>
          <Button text="Default" bgColor="#AEAEAE" textColor="#3F3F3F" radius="6px" border="none" width="81px" height="36px"/>
        </section>

        <section className='dos-btns'>
          <Button text="Default" bgColor="#ffffff" textColor="#3D5AFE" radius="6px" border="1px solid #3D5AFE" width="81px" height="36px"/>
          <Button text="Default" bgColor="#2962FF1A" textColor="#3D5AFE" radius="6px" border="1px solid #3D5AFE" width="81px" height="36px"/>
        </section>

        <section className='dos-btns'>
          <Button text="Default" bgColor="#ffffff" textColor="#3D5AFE" radius="6px" border="none" width="81px" height="36px"/>
          <Button text="Default" bgColor="#2962FF1A" textColor="#3D5AFE" radius="6px" border="none" width="81px" height="36px"/>
        </section>

        <section>     
          <Button text="Default" bgColor="#3D5AFE" textColor="#ffffff" radius="6px" border="none" width="81px" height="36px"/>
        </section>

        <section className='dos-btns'>
          <Button text="Disabled" bgColor="#E0E0E0" textColor="#9E9E9E" radius="6px" border="none" width="81px" height="36px"/>
          <Button text="Disabled" bgColor="#ffffff" textColor="#9E9E9E" radius="6px" border="none" width="81px" height="36px"/>
        </section>

        <section className='abajoDeDisabled'>
          <Button text="Default" bgColor="#2962FF" textColor="#ffffff" radius="6px" border="none" width="81px" height="36px"/>
          <Button text="Default" bgColor="#2962FF" textColor="#ffffff" radius="6px" border="none" width="81px" height="36px"/>
        </section>

        <section className='tres-btns'>
          <Button text="Default" bgColor="#2962FF" textColor="#ffffff" radius="6px" border="none" width="81px" height="36px"/>
          <Button text="Default" bgColor="#2962FF" textColor="#ffffff" radius="6px" border="none" width="81px" height="36px"/>
          <Button text="Default" bgColor="#2962FF" textColor="#ffffff" radius="6px" border="none" width="81px" height="36px"/>
        </section>

        <section className='cuatro-btns'>
          <Button text="Default" bgColor="#E0E0E0" textColor="#3F3F3F" radius="6px" border="none" width="81px" height="36px"/>
          <Button text="Default" bgColor="#2962FF" textColor="#ffffff" radius="6px" border="none" width="81px" height="36px"/>
          <Button text="Secondary" bgColor="#455A64" textColor="#ffffff" radius="6px" border="none" width="81px" height="36px"/>
          <Button text="Default" bgColor="#9A0007" textColor="#ffffff" radius="6px" border="none" width="81px" height="36px"/>
        </section>

        <section className='cuatro-btns'>
          <Button text="Default" bgColor="#AEAEAE" textColor="#3F3F3F" radius="6px" border="none" width="81px" height="36px"/>
          <Button text="Default" bgColor="#0039CB" textColor="#ffffff" radius="6px" border="none" width="81px" height="36px"/>
          <Button text="Secondary" bgColor="#1C313A" textColor="#ffffff" radius="6px" border="none" width="81px" height="36px"/>
          <Button text="Default" bgColor="#9A0007" textColor="#ffffff" radius="6px" border="none" width="81px" height="36px"/>
        </section>
      </main>
    </>
  )
}

export default App
