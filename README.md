# Instalation
- npm install --force


# Configurasi

- ketika sudah melakukan npm start --force, click ctrl + p, lalu ketik index.d.ts, lalu hapus "export interface Action<T = any> {
  type: T
}" (dikarenakan settingan adalah default dari redux jadi setiap selesai npm install --force lakukan cara ini)

- Atau jika ctrl + p tidak muncul bisa melalui directory node_modules, index.d.ts

![typedataglobal](https://user-images.githubusercontent.com/63132957/171201107-b099f282-5c28-48ea-93a7-7cc4d06ca1fd.png)

- Alasan dikarenakan saya sudah mendeklarasikan type data / format untuk action secara manual

![deklarasi type data manual](https://user-images.githubusercontent.com/63132957/171201082-512c85b3-186f-425c-8ad1-872392f41b45.png)

- perbedaan format ketika "export interface Action<T = any> {
  type: T
}" tidak di hapus dan di hapus

- format action Dihapus 
![typedatasaya](https://user-images.githubusercontent.com/63132957/171200980-d98f6aa0-08a8-4104-8a1e-311f4ad06b7d.png)

- format action tidak di hapus
![typedatageneral](https://user-images.githubusercontent.com/63132957/171201030-eebef192-b9f0-4eb5-b3b5-04561076ad16.png)

#hasil
![result](https://user-images.githubusercontent.com/63132957/171216707-2c07d6bc-63c7-4958-b55f-bab8527f079e.png)


