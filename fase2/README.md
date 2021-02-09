## Fase 2

Descrivi nel linguaggio di programmazione che preferisci un oggetto:

- `Student` con le seguenti proprietà: `firstname` : string, `lastname` : string, `birthdate` : string, `grades` : string

Crea dei metodi d'appoggio sul modello `Student` per calcolare `age` e `avg_grade`

**Lanciare il programma con nodejs installato**
```
node es2.js
```

**Lanciare il programma da docker(non serve avere nodejs installato)**
```
#build immagine e avvio container
docker build -t fase2 .
docker run fase2

#stop e rimozione container/immagine
docker ps (per vedere il nome del container)
docker stop <nome container>
docker rm <nome container>
docker rmi fase2

```