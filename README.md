
~~~bash
git clone git@github.com:rixo/repro-systemjs.git
cd repro-systemjs
yarn
yarn start
~~~

Open http://localhost:10001.

Console output:

~~~
foo
foobar
baz
~~~

Expected output:

~~~
foo
foobar
foobarbaz
~~~
