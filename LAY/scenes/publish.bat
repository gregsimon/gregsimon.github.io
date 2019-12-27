

copy ..\..\..\gags\scenes\54\*.html 54\
copy ..\..\..\gags\scenes\54\*.png 54\
copy ..\..\..\gags\scenes\54\*.jpg 54\
git add 54\*.*

copy ..\..\..\gags\scenes\64\*.html 64\
copy ..\..\..\gags\scenes\64\*.png 64\
copy ..\..\..\gags\scenes\64\*.jpg 64\
git add 64\*.*

copy ..\..\..\gags\scenes\70\*.html 70\
copy ..\..\..\gags\scenes\70\*.png 70\
copy ..\..\..\gags\scenes\70\*.jpg 70\
git add 70\*.*

copy ..\..\..\gags\scenes\100\*.html 100\
copy ..\..\..\gags\scenes\100\*.png 100\
copy ..\..\..\gags\scenes\100\*.jpg 100\
git add 100\*.*

copy ..\..\..\gags\scenes\110\*.html 110\
copy ..\..\..\gags\scenes\110\*.png 110\
copy ..\..\..\gags\scenes\110\*.jpg 110\
git add 110\*.*

git commit -a -m "updating content"
git push origin master
