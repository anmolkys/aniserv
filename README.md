
# waifu.api

An API that provides you with 5000+ images of your fav waifus

Made for fun and not being used for commercial purposes.


## API Reference


#### Returned object


item = {
    id , Character , url
}

base_URL = https://waifuserv.onrender.com/ (slowed down because free servers)

#### Get Random Image

```http
  GET base_URL 
```

#### Return 1 object by ID

Takes an :id as parameter and returns details of that specific ID


```http
  GET base_URL/char/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `number` | 1 - 5155 |


#### Return n objects randomly

```http
  GET base_URL/end/:number
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `n`      | `number` | 1 - 5155 |

#### Return waifu(s) by Name search


```http
  GET base_URL/search/:name
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | whitespace should be removed |


## Authors

- [@anmolkys](https://www.github.com/anmolkys)

