import React from 'react'
import MainLayout from '../Layouts/MainLayout';
import photo from './ไทยแฮนเมด.jpg';

const Home = () => {
  return (
    <MainLayout>
    <div className="Home" style={{ textAlign: 'left' }}></div>
      <h2>ไทยแฮนด์เมด</h2>
      <hr/>
      <img src={photo} className="App-photo" width="1500" height="800"  alt="photo" />
      <h2>เราคือผู้ผลิตและจำหน่าย กำไรแฮนด์เมด 100% </h2>
      <h3>“ราคาจับต้องได้ ขายปลีกและขายส่ง “</h3>
      <h3>ลูกค้าสามารถเอาไปทำเป็นผลิตภัณฑ์ได้หลายชนิดตั้งแต่เครื่องประดับ กำไร และอื่นๆอีกมากมาย 
        แล้วแต่คุณลูกค้าจะมีไอเดียสร้างสรรค์ค่ะ หรือเครื่องใช้ที่ทำจากเครื่องประดับ สวยงามมากมาย มีทั้งขายปลีก-ขายส่ง </h3>
    </MainLayout>
  )
}

export default Home