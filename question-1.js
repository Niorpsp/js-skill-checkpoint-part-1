// Question #1
// เรามี Array ของ Object myTodo ที่บรรจุรายการภารกิจ (To-dos) ที่ต้องทำในวันหนึ่ง โดย Object แต่ละอันจะมี Key 2 ตัว ได้แก่ id และ todo ตามตัวอย่างด้านล่าง
  /* - ให้เขียนโปรแกรมดังนี้                                                                      สรุปโจทย์ให้ตัวเองเพื่อไว้อ่านให้เข้าใจ
    1) เพิ่ม Object ใหม่เข้าไปใน `myTodo` ซึ่งมี `id` เป็น `5` และมี `todo` เป็น `"Walk the dog"`      //ต้องเพิ่ม Todo ตัวใหม่

    2) แก้ไขชื่อ Object ที่มี `id` เป็น `4` เพื่อให้ `todo` ของ Object นั้นมีค่าเป็น `"Go to the gym"`    //ให้แก้ Todo id เป็นไปยิม
    
    3) ลบ Object สุดท้ายใน Array ออก                                                         //ลบ Todo ออก
    
    4) นำ `myTodo` มาแสดงบนหน้าจอ Console                                                   //แสดง Todo ออกมาทั้งหมด
    
    5) ให้นำข้อมูลใน Object สุดท้ายมาแสดงบนหน้าจอ Console ในรูปแบบ                               //แสดง Todo ตัวสุดท้ายให้ได้
    `"To-do id: <ค่าของ id>, <ค่าของ todo>"` (ห้าม Hard-Code ค่าเข้าไปใน String โดยตรง)
    */

const myTodo = [
  { id: 1, todo: "Buy groceries" },
  { id: 2, todo: "Finish homework" },
  { id: 3, todo: "Call mom" },
  { id: 4, todo: "Wash dishes" },
];
// เริ่มเขียนโค้ดตรงนี้
// เขียนอธิบายให้ตัวเองอ่านเข้าใจเวลาทำ ไม่งั้น งง 

  myTodo.push({                                             // ทำข้อ 1 แล้วคือการเพิ่ม todo ตัวใหม่
    id:5,                                                     
    todo: "Walk the dog"                                    // มาจากโจทย์ 
  });

for (const item of myTodo) {                                //โจทย์ข้อ 2 
  if (item.id ===4) {                                       //หา todo ที่ id 4 และแก้เป็นไปยิม
    item.todo = "Go to the gym"                             //เปลี่ยนจากล้างจานให้เป็น ไปยิม
  }
}
  myTodo.pop();                                             //โจทย์ข้อ 3 ให้ลบตัวสุดท้ายออก

  console.log(myTodo);                                      //โจทย์ข้อ 4 แสดง todo ออกมาทั้งหมด

  const lastTodo = myTodo[myTodo.length - 1];               //แสดง todo ตัวสุดท้ายออกมา
    
console.log(                                                //แสดงผลลัพธ์ทั้งหมด 
  `To-do id: ${lastTodo.id}, ${lastTodo.todo}`
);