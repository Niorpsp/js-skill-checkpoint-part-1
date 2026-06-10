// Question #4
/*
สมมุติว่ามี Variable inventory ที่บรรจุข้อมูลสินค้าในคลังสินค้า เช่น ราคาสินค้า (price) และจำนวนสินค้าในคลังสินค้า (quantity) ซึ่งมีโครงสร้างข้อมูลดังนี้
- ให้เขียนโปรแกรมในการหาสินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้า
- เช่น ถ้า `inventory` มีค่าเป็นแบบนี้
*/
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];
// เริ่มเขียนโค้ดตรงนี้
                                                                                              //หาของที่มีจำนวนในสต็อกน้อยที่สุดก่อน
let minQuantity = inventory[0].quantity;                                                      //เอาตัวแรกไว้เป็นตัวตั้งต้น
let minProductName = inventory[0].name;                                                       //เก็บชื่อ

for (const fruit of inventory) {                                                              //ดูผลไม้ในสต็อก

  if(fruit.quantity < minQuantity) {                                                          //เช็คผลไม้ว่าจำนวนต่ำกว่าไหม

      minQuantity = fruit.quantity;                                                           //ถ้าเจอเปลี่ยนจำนวนน้อยที่สุดใหม่
      minProductName = fruit.name;                                                            //จำชื่อผลไม้นั้นไว้
  }
}
console.log(                                                                                  //แสดงผลลัพธ์ทั้งหมด 
  `สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ ${minProductName} ซึ่งมี ${minQuantity} ชิ้น`
);