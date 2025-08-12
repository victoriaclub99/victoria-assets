#!/bin/bash
while true; do
  hour=$(date +%H)
  # กลางคืน 20:00-06:00 ยอดสูงขึ้น
  if [ $hour -ge 20 ] || [ $hour -le 6 ]; then
    online=$((1200000 + RANDOM % 50000))
    jackpot=$((9900000 + RANDOM % 10000))
  else
    online=$((900000 + RANDOM % 50000))
    jackpot=$((9800000 + RANDOM % 10000))
  fi
  echo "{\"online\":$online}" > "$(dirname "$0")/mock_online.json"
  echo "{\"jackpot\":$jackpot,\"time\":\"$(date '+%d %b %Y %H:%M:%S')\"}" > "$(dirname "$0")/mock_jackpot.json"
  sleep 10
done
