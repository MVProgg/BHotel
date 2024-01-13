clear

npm i -g yarn

cd ./../packages

echo "installing packages and dependencies"

for pkg in interfaces authentication identify; do 

    echo "[package.${pkg}]"

    cd "./package.${pkg}"

    yarn

    echo "install successfully"

    cd ..
done;