/* 
for i in {15..17} 
do
ranNum=$[$RANDOM%2+1]
for((x=1;x<=$ranNum;x++))
do
touch may$i-$x.js
sleep 1
git add *
sleep 1
git commit -m "message" --date='2022-05-'$i
sleep 2
git push
sleep 2
done
done
*/ 
//above code to backdate