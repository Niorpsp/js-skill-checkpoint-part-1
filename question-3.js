// Question #3
/*
- สมมุติว่ามี Variable `userPassword` ที่บรรจุรหัสผ่านของผู้ใช้งาน
- ให้เขียนฟังก์ชัน `checkPasswordStrength` ซึ่งรับ `userPassword` เป็น Argument และ Return ผลลัพธ์ออกมาเป็น String ตามเงื่อนไขต่อไปนี้

    จำนวนตัวอักษรใน userPassword               น้อยกว่า 6
            น้อยกว่า 6	                       “Weak”
            ตั้งแต่ 6 จนถึง 10                   “Medium”
            มากกว่า 10                        “Strong”
ตัวอย่างเช่น

ถ้า userPassword มีค่าเป็น "ssswnalWadqQ" ฟังก์ชันจะ Return ค่า "Strong"

let userPassword = "ssswnalWadqQ"                                               
console.log(checkPasswordStrength(userPassword)); // "Strong"

ถ้า userPassword มีค่าเป็น "TechUp" ฟังก์ชันจะ Return ค่า "Medium"

let userPassword = "TechUp"
console.log(checkPasswordStrength(userPassword)); // "Medium"

ถ้า userPassword มีค่าเป็น "abcde" ฟังก์ชันจะ Return ค่า "Weak"

let userPassword = "abcde"
console.log(checkPasswordStrength(userPassword)); // "Weak"

*/
let userPassword = "";

// เริ่มเขียนโค้ดตรงนี้                                                                                       //เขียนไว้อ่านเองกัน งง

function checkPasswordStrength(userPassword) {                                                         //ฟังก์ชันไว้ดูความยากง่ายของรหัสผ่าน

  let passwordLength = userPassword.length;                                                             //นับรหัสว่ายาวกี่ตัว 

  if (passwordLength < 6) {                                                                             //รหัสสั้นกว่า 6 ตัว
    return "Weak";                                                                                      //ถ้าน้อยกว่า 6 ตัวจะขึ้น weak(ง่าย)
  } else if (passwordLength >= 6 && passwordLength <= 10) {                                             //ถ้ารหัสมี 6-10 ตัว
    return "Medium";                                                                                    //ถ้าอยู่ 6-10 ตัวจะขึ้น medium(ปานกลาง)
  } else {                                                                                              //ถ้าเกิน 10 ตัว
    return "Strong";                                                                                    //ถ้าอยู่ 10 ตัวขึ้นไปจะขึ้น strong(ยาก)
  }
}                                                                               //ดูไปดูมาเขียนเอง งง เองไว้มาแก้หลังทำข้ออื่นเสร็จ ห้ามลืม