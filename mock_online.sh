#!/bin/bash
while true; do
  hour=$(date +%H)

  # กลางคืนยอดสูงขึ้น
  if [ $hour -ge 20 ] || [ $hour -le 6 ]; then
    online=$((1200000 + RANDOM % 50000))
    jackpot=$((9900000 + RANDOM % 10000))
    signup=$((1000 + RANDOM % 500))  # สมัครใหม่มากขึ้น
  else
    online=$((900000 + RANDOM % 50000))
    jackpot=$((9800000 + RANDOM % 10000))
    signup=$((500 + RANDOM % 300))   # สมัครใหม่น้อยลง
  fi

  echo "{\"online\":$online}" > "$(dirname "$0")/mock_online.json"
  echo "{\"jackpot\":$jackpot,\"time\":\"$(date '+%d %b %Y %H:%M:%S')\"}" > "$(dirname "$0")/mock_jackpot.json"
  echo "{\"new_signup\":$signup,\"updated\":\"$(date '+%d %b %Y %H:%M:%S')\"}" > "$(dirname "$0")/mock_signup.json"

  sleep 10
done
