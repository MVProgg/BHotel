clear

cd ./../packages

echo "stage 1"
cd ./package.interfaces
if foobar_loc="$(type -p "yarn")" || [[ -z $foobar_loc ]]; then
    yarn &&
    npx tsc &&
    echo "builded successfully!"
    echo ' '
    cd ./../
else
    npm install &&
    npm run build &&
    echo "builded successfully!"
    echo ' '
    cd ./../
fi

echo "stage 2"
cd ./package.authentication
if foobar_loc="$(type -p "yarn")" || [[ -z $foobar_loc ]]; then
    yarn &&
    npx tsc &&
    echo "builded successfully!"
    echo ' '
    cd ./../
else
    npm install &&
    npm run build &&
    echo "builded successfully!"
    echo ' '
    cd ./../
fi

echo "stage 3"
cd ./package.identify
if foobar_loc="$(type -p "yarn")" || [[ -z $foobar_loc ]]; then
    yarn &&
    npx tsc &&
    echo "builded successfully!"
    echo ' '
    cd ./../
else
    npm install &&
    npm run build &&
    echo "builded successfully!"
    echo ' '
    cd ./../
fi

cd ./../services/server

echo "stage 4"
cd ./service.identify
if foobar_loc="$(type -p "yarn")" || [[ -z $foobar_loc ]]; then
    yarn &&
    npx tsc &&
    echo "builded successfully!"
    echo ' '
    cd ./../
else
    npm install &&
    npm run build &&
    echo "builded successfully!"
    echo ' '
    cd ./../
fi

echo "stage 5"
pwd
cd ./service.authentication
if foobar_loc="$(type -p "yarn")" || [[ -z $foobar_loc ]]; then
    yarn &&
    npx tsc &&
    echo "builded successfully!"
    echo ' '
    cd ./../
else
    npm install &&
    npm run build &&
    echo "builded successfully!"
    echo ' '
    cd ./../
fi