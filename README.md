﻿# DaySplit
### Despre
DaySplit este o platformă online care permite administrarea și organizarea activităților, proiectelor și evenimentelor într-un mod extrem de ușor de utilizat.

Demo: [daysplit.artur99.net]

### Versiune
1.0.2

### Tehnologii utilizate
* [Composer]
* [Node.js]
* [Bower]
* [Grunt]
* [Silex Micro Framework]
* [jQuery]
* [Underscore.js]
* [MaterializeCSS]

### Limbaje utilizate
* HTML (+twig)
* CSS
* JavaScript
* PHP (mvc)
* SQL (dbal)
* ApacheConf

### Instalare
Cerințe: `git`, `composer`, `node.js`.

Fișierul de configurații se află în `app/conf.yaml`.

```sh
$ git init
$ git pull https://github.com/artur99/daysplit.git
$ npm install -g bower grunt-cli
$ npm update
$ bower update
$ grunt
$ composer install
$ mysql -u root -p < db_structure.sql
```

### Screenshots
<a href="http://i.imgur.com/rJWaUht.gif"><img src="http://i.imgur.com/rJWaUht.gif" width="600"></a><br>
<a href="http://i.imgur.com/VR8HmGt.png"><img src="http://i.imgur.com/VR8HmGt.png" width="400"></a>
<a href="http://i.imgur.com/se4TGPd.png"><img src="http://i.imgur.com/se4TGPd.png" width="400"></a>



### Dezvoltare

```sh
$ grunt prep
$ grunt watch
```

### Pluginuri

* Facebook API
* Google Maps API

### Facilități

* Protecție împotriva SQL injection, Cross-site Scripting, Cross-site request forgery
* Încărcare rapidă - CSS/JS minificat
* Transferul fișierelor compresat (`deflate`)
* Material Design
* Responsive Layout
* Foarte flexibil și ușor de utilizat
* Pagini de eroare
* Scurtături tastatură


### Linceță: MIT

   [Composer]: <https://getcomposer.org/>
   [node.js]: <http://nodejs.org>
   [bower]: <http://bower.io/>
   [materializecss]: <http://materializecss.com/>
   [Silex Micro Framework]: <http://silex.sensiolabs.org/>
   [grunt]: <http://gruntjs.com/>

   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [keymaster.js]: <https://github.com/madrobby/keymaster>
   [jQuery]: <http://jquery.com>
   [Underscore.js]: <http://underscorejs.org/>
   [Gulp]: <http://gulpjs.com>
   [daysplit.artur99.net]: <http://daysplit.artur99.net/account>
