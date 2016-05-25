Pokretanje i podesavanje monga. 

U folderu gde je instaliran mongo, gde ima folder bin i jos neke stvari,
napraviti folder "data" pa u tom folderu folder "db".

Nakon toga pokrenuti terminal kao ADMINISTRATOR! obavezno i pozicionirati se u

bin fajl sto je u mongu tamo gde si napravio i data fajl.

Nakon pozicioniranja u terminal ukucati :  mongod --dbpath "C:\Program Files\MongoDB\Server\3.2\data\db" 
naravno ako nije u program filesu nego negde drugde navesti tacnu putanju. :D

Nakon toga mongo server je pusten, pa ce pokretanjem programa i baza biti kreirana u robomongu sto mozes i proveriti.

Bitno je samo da napravis jednu instancu/konekciju u robomongu pre toga da ima za sta da se nakaci!