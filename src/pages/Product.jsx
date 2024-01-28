import React from "react";
import MainLayout from "../Layouts/MainLayout";
import กำไรมุก from './กำไร 1.jpg';
import กำไรดาว from './กำไร 2.jpg';
import กำไรดอกไม้ from './กำไร 3.jpg';
import กำไรหัวใจ from './กำไร 4.jpg';
import กำไรเพชร from './กำไร 5.jpg';
import กำไรการ์ตูน from './กำไร 6.jpg';


const Product = (props) => {
  const product = [
    {
      image: กำไรมุก,
      name: "Pearl Bracelet",
      price: "1,289.-",
      details: "ไข่มุกแวววาว เปล่งประกาย",
    },
    {
      image: กำไรดาว,
      name: "Star Bracelet",
      price: "1,179.-",
      details: "เป็นตัวแทนแห่งชายและหญิง พลังงานคู่ตรงข้าม",
    },
    {
      image: กำไรดอกไม้,
      name: "Flower Bracelet",
      price: "1,099.-",
      details: "มีความอ่อนหวาน ละมุน",
    },
    {
      image: กำไรหัวใจ,
      name: "Heart Bracelet",
      price: "1,200.-",
      details: "อำนาจแห่งความรักที่ยิ่งใหญ่",
    },
    {
      image: กำไรเพชร,
      name: "Diamond Bracelet",
      price: "2,590.-",
      details: "มีความคิดสร้างสรรค์ รักสวยรักงาม",
    },
    {
      image: กำไรการ์ตูน,
      name: "Cartoon Bracelet",
      price: "1,590.-",
      details: "ชอบความอนิเมะ ชื่นชอบระลึกตัวละครในดิสนีย์",
    },
  ];

  return (
    <MainLayout>
      <div style={{ marginTop: 20 }}>
        {product.map((c) => (
          <ProductCard
            name={c.name}
            price={c.price}
            details={c.details}
            image={c.image}
          />
        ))}
      </div>
    </MainLayout>
  );
};

const ProductCard = (props) => {
  return (
    <>
      <div style={divStyle}>
      <img src={props.image} alt={props.name} style={{ display: 'block', margin: '0 auto', maxWidth: '50%', height: 'auto', marginBottom: 20 }} />
        <p style={textStyle}>{props.name}</p>
        <p style={textStyle}>Price: {props.price}</p>
        <p style={textStyle}>Details: {props.details}</p>
      </div>
    </>
  );
};

const divStyle = {
  border: "1px solid black",
  borderRadius: 5,
  padding: 20,
  marginLeft: "20%",
  marginRight: "20%",
  marginBottom: 15,
  fontWeight: "bold",
  fontFamily: "courier",
};

const textStyle = {
  marginBottom: 10,
};


export default Product;