clear

cd ./../packages

echo "building packages"

for pkg in interfaces authentication identify; do 

    echo "[package.${pkg}]"

    cd "./package.${pkg}"

    yarn build

    echo "builded successfully"

    cd ..
done;