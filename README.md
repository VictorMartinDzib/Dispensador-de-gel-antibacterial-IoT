# Dispensador-de-gel-antibacterial-IoT
Esta es una aplicación con la cual se activa o desactiva un circuito arduino el cual se encarga de automatizar un dispensador de gel antibacterial

La aplicacion apaga y enciende el circuito desde cualquier lugar con acceso a internet.

El circuito es un dispensador de gel antibacterial con dos servomotores que se encargan de presionar el boton para
que expulse una pequeña porcion de gel antibacterial.
El sensor se activa con un sensor ultrasonico al detectar la presencia de las manos de una persona
Al momento de expulsar el gel, el circuito manda informacion a la base de datos en firebase el cual realiza un conteo
de las personas que han utilizado el gel, esto con la intencion de conocer datos estadisticos sobre su uso.

La base de datos utlizada fue Firebase realtime
y el framework para la aplicacion fue Ionic 5

para el circuito se utilizo la placa NodeMCU con el modulo de WiFi Esp8266 integrado

La aplicacion es muy sencilla y la informacion carga en tiempo real.

![alt text](https://raw.githubusercontent.com/VictorMartinDzib/Dispensador-de-gel-antibacterial-IoT/master/RECURSOS_EXTERNOS/cap1.jpeg)

Vista principal: <br/>
![alt text](https://raw.githubusercontent.com/VictorMartinDzib/Dispensador-de-gel-antibacterial-IoT/master/RECURSOS_EXTERNOS/cap2.jpeg)


