mkdir  "new-project"
start "" "new-project"
cd "new-project"
echo html index> index.html
mkdir "src"
cd "src"
mkdir "css"
mkdir "js"
mkdir "images"
cd css
mkdir "dist"
mkdir "scss"
cd "scss"
mkdir "templates"
mkdir "mains"
echo .scss{} > main.scss
cd ../
cd ../
cd "js"
echo var i = 0; > main.js
cd ../
cd ../
code .
