## Fase 3

Crea nel linguaggio di programmazione che preferisci un webservice REST (può girare in locale) in grado di ricevere richieste:

- `POST` per la creazione di un nuovo `Student`
- `GET` per il retrieve di tutti gli `Student` creati

Gli studenti che vengono creati possono essere salvati in un array/list di appoggio che vive solo per la durata dell'esecuzione del server.

Non è necessario creare un'interfaccia per fare le chiamate `POST` e `GET`, è sufficiente un esempio di utilizzo in [Postman](https://www.getpostman.com) o [cURL](https://curl.haxx.se/docs/manpage.html)

**Avviare il server con nodejs installato**
```
npm install
npm start
```

**Avviare il server con Docker (non serve avere nodejs installato)**
```
#build immagine e avvio container
docker build -t fase3 .
docker run -dp 3000:3000 fase3

#stop e rimozione container/immagine
docker ps (per vedere il nome del container)
docker stop <nome container>
docker rm <nome container>
docker rmi fase3
```

**Testare il webservice**
```
Lista studenti:
curl --request GET \
  --url http://localhost:3000/students

Creazione studente:
curl --request POST \
  --url http://localhost:3000/students \
  --header 'Content-Type: application/json' \
  --data '{
	"firstname": "Bob",
	"lastname": "Ross",
	"birthdate": "01/91/1942",
	"grades": "AAABBB"
}'
```