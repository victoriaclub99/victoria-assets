# Mock Backend Workflow

## 1. Shell Script (mock_online.sh)
- สร้างไฟล์ mock_online.json และ mock_jackpot.json
- อัปเดตตัวเลขทุก 10 วินาที
- ใช้ช่วงเวลา (กลางคืนยอดสูงขึ้น)

## 2. Frontend JS
- fetch mock_online.json และ mock_jackpot.json ทุก 10 วินาที
- อัปเดตตัวเลขในหน้าเว็บแบบอัตโนมัติ

## 3. Deploy
- รัน shell script บน server หรือ local
- ให้ web server สามารถอ่านไฟล์ .json ได้

## ตัวอย่างการรัน
```bash
nohup bash mock_online.sh &
```
