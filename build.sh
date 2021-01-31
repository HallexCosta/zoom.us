rm -rf **/**/**/node_modules
cp -r aula04 build

cd build

cd peer-server
yarn
cd ..

cd server
yarn
cd ..

cd public
yarn
cd ..

echo "Successfully generate project on folder 'build' with all dependencies"