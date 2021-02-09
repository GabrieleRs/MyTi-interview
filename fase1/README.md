## Fase 1
Risolvi il seguente problema con uno script nel linguaggio di programmazione che preferisci.

```
I primi dodici numeri della sequenza di Fibonacci sono:
1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144

Il 12° numero è il primo della sequenza a essere di 3 cifre. Quale è il primo numero della sequenza ad avere 1000 cifre? risposta: 4782
```
**Lanciare il programma con nodejs installato**
```
node es1.js
```

**Lanciare il programma da docker(non serve avere nodejs installato)**
```
#build immagine e avvio container
docker build -t fase1 .
docker run -it fase1

#stop e rimozione container/immagine
docker ps (per vedere il nome del container)
docker stop <nome container>
docker rm <nome container>
docker rmi fase1

```

