

copy /y ..\..\..\gags\scenes\54\*.html 54\
copy /y ..\..\..\gags\scenes\54\*.png 54\
copy /y ..\..\..\gags\scenes\54\*.jpg 54\
git add 54\*.*

copy /y ..\..\..\gags\scenes\64\*.html 64\
copy /y ..\..\..\gags\scenes\64\*.png 64\
copy /y ..\..\..\gags\scenes\64\*.jpg 64\
git add 64\*.*

copy /y ..\..\..\gags\scenes\70\*.html 70\
copy /y ..\..\..\gags\scenes\70\*.png 70\
copy /y ..\..\..\gags\scenes\70\*.jpg 70\
git add 70\*.*

copy /y ..\..\..\gags\scenes\100\*.html 100\
copy /y ..\..\..\gags\scenes\100\*.png 100\
copy /y ..\..\..\gags\scenes\100\*.jpg 100\
git add 100\*.*

copy /y ..\..\..\gags\scenes\119\*.html 119\
copy /y ..\..\..\gags\scenes\119\*.png 119\
copy /y ..\..\..\gags\scenes\119\*.jpg 119\
git add 119\*.*

git commit -a -m "updating content"
git push origin master
