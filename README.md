# express-api

- La API está alojada en http://185.254.207.115:8080/
- No tiene autenticación.

# Endpoints

## Documentos

### Index - [GET /documents](http://185.254.207.115:8080/documents)

### Create - [POST /documents](http://185.254.207.115:8080/documents)

- Parámetros requeridos: 
  - attachment - file
  - documentType - string [Privado, Draft, Público]
  - name - string
  - owner - string (id)
 
### Obtener - [GET /documents/:id](http://185.254.207.115:8080/documents)

### Descargar - [GET /documents/:id/download](http://185.254.207.115:8080/documents)

### Eliminar - [DELETE /documents/:id](http://185.254.207.115:8080/documents)

### Buscar - [GET /documents/search?name=date=owner=](http://185.254.207.115:8080/documents)

- Query params
  - name
  - date 
  - owner (id)

### Update - [PUT /documents/:id](http://185.254.207.115:8080/documents)

- Parámetros requeridos: 
  - attachment - file
  - documentType - string [Privado, Draft, Público]
  - name - string
  - owner - string (id)

- Parámetros opcionales: 
  - description - string
 
 ### Asociar usuarios - [PUT /documents/:id/users](http://185.254.207.115:8080/documents)

- Parámetros requeridos: 
  - users - array of users ids

 ### Nota
 
 Adicionalmente cree endpoints para crear, obtener y listar usuarios y owners. 
 
 ## Owners
 
 ### Index - [GET /owners](http://185.254.207.115:8080/owners)

 ### Create - [POST /documents](http://185.254.207.115:8080/owners)

 - Parámetros requeridos: 
   - name - string
   - lastName - string
 
 ### Obtener - [GET /documents/:id](http://185.254.207.115:8080/owners)

 ## Users

 ### Index - [GET /users](http://185.254.207.115:8080/users)

 ### Create - [POST /users](http://185.254.207.115:8080/users)

 - Parámetros requeridos: 
   - name - string
   - lastName - string
   - idNumber - string
 
 ### Obtener - [GET /users/:id](http://185.254.207.115:8080/users)



