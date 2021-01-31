rm -rf **/**/node_modules
mkdir aula04
cp -r aula03 aula04
cd aula04

for item in `ls`;
do
  echo $item
  cd $item
  yarn
  cd ..
done
