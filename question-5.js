// Question #5
/*
สมมุติว่ามี Variable products ที่บรรจุข้อมูลสินค้าในตะกร้าสินค้า และ                                           
Variable promotionCode ที่บรรจุ String โค้ดส่วนลด               
- ให้เขียนฟังก์ชันชื่อ `calculateTotalPrice` ที่รับ `products` และ `promotionCode` เป็น Argument             
- โดยที่ฟังก์ชันจะ Return ผลลัพธ์ออกมาเป็น มูลค่ารวมของจำนวนสินค้าทั้งหมดในตะกร้าสินค้า           โดยที่จะต้องสามารถคำนวนมูลค่าพร้อมโค้ดส่วนลดได้ตามเงื่อนไขต่อไปนี้                                            
โค้ดส่วนลด	ส่วนลด
"SALE20"	ลด 20% จากมูลค่ารวมของสินค้าในตะกร้า
"SALE50"	ลด 50% จากมูลค่ารวมของสินค้าในตะกร้า
ไม่มี	ไม่ได้รับส่วนลด

- ตัวอย่างเช่น
    - ถ้า `promotionCode` มีค่าเป็น `""` ฟังก์ชันจะ Return ค่า `85`
    - ถ้า `promotionCode` มีค่าเป็น `"SALE20"` ฟังก์ชันจะ Return ค่า `68`
    - ถ้า `promotionCode` มีค่าเป็น `"SALE50"` ฟังก์ชันจะ Return ค่า `42.5`
*/

const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];

const promotionCode = "SALE20";                                                                 //ใส่โค้ดส่วนลด
// เริ่มเขียนโค้ดตรงนี้                                                                     //ตอนแรกลืมใส่ว่าอยู่ทำไมไม่ลด (ต้องจำให้แม่น)

function calculateTotalPrice(products, promotionCode) {                                         //คำนวณราคาสินค้า กับ ส่วนลด 

  let totalPrice = 0;                                                                           //รวมราคาทั้งหมดไว้

for (const item of products) {                                                                  //วนดูเสื้อผ้าในสต็อก

    let itemPrice = item.price * item.quantity;                                                 //ราคาสินค้าต่อชิ้น กับ จำนวน
    totalPrice += itemPrice;                                                                    //รวมราคาทั้งหมด
  }

  if (promotionCode === "SALE20") {                                                             //ถ้าใช้โค้ด sale20%
    totalPrice = totalPrice * 0.8;                                                              //ลดราคา 20% (0.8มาจากที่คุณอิ่มสอนในคลาส)
  }                                                                                             //price = price * 0.8 หรือเอา 80 หาร 100
  else if (promotionCode === "SALE50") {                                                        //ถ้าใช้โค้ด sale50%
    totalPrice = totalPrice * 0.5;                                                              //ลดราคา 50% (0.5มาจากที่คุณอิ่มสอนในคลาส)
  }                                                                                             //price = price * 0.5 หรือเอา 50 หาร 100
  return totalPrice;                                                                            //ส่งค่ากลับไป ช่อง 41 (รวมราคาทั้งหมด)
}
console.log(calculateTotalPrice(products, promotionCode));                                      //แสดงผลลัพธ์ทั้งหมด 