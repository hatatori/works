import button from "./button.js"
import message from "./message.js"

let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODQvc2lnbi1pbi9jdXN0b21lciIsImlhdCI6MTY3NTQzOTIxMiwiZXhwIjoxNjc1NzU3MjEyLCJuYmYiOjE2NzU0MzkyMTIsImp0aSI6IkttdklqYVJsaUNwYlBHV3IiLCJzdWIiOiJhNmUwYTc3ZS1jZTc3LTRiNDAtOGU3MS0xOTQ2YTU4MTRjNmUiLCJwcnYiOiI1ZTM5YjMzMDk4NGNhODVlNjlmMGIwOGYyM2M4NzFmNzM1ZTE1NjI0IiwibmFtZSI6IkVhcm5lc3QgUm93ZSIsImVtYWlsIjoiYnJpZGllX2JveWVyNzdAaG90bWFpbC5jb20ifQ.mAUjlu5IGInHbHBqXFyKK9t9lvg4EWRC44nfkM4bG-E"

let token_string = window.location.search.split("t=").at(-1)

let connection = {
    // amount: 33,
    // color: 1,

    // token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vYXBpLWhvbW9sb2cucHJpbWViZXRzLmJldC9zaWduLWluL2N1c3RvbWVyIiwiaWF0IjoxNjc1NjI4MDQxLCJleHAiOjE2NzU3MTQ0NDEsIm5iZiI6MTY3NTYyODA0MSwianRpIjoiUjI0M0FqcmFNbjhZRXhieiIsInN1YiI6IjZkMzM4MGYyLWZjMjMtNDY2ZS1hNWM0LTlkZDdjNjg3NzkyYiIsInBydiI6IjVlMzliMzMwOTg0Y2E4NWU2OWYwYjA4ZjIzYzg3MWY3MzVlMTU2MjQiLCJuYW1lIjoiQmxhbmNoZSBNY0dseW5uIiwiZW1haWwiOiJhcm5vLnN0b2tlc0B5YWhvby5jb20ifQ.SFzwHi7fBScBfzGOzkk7QE9EnTeNAdK54XBIjkETUKA",
    token: token_string == "" ? token : token_string,

    bet(amount, color){

        fetch("https://api-homolog.primebets.bet/games/double/bet",{
            method:"POST",
            headers:{ 
                "accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": "Bearer "+this.token
            },
            body: JSON.stringify({amount:amount,color:color})
        })
        .then(e=>{ 
            if(e.status == 400 || e.status == 403){
                message.normal("Algo saiu errado")
            }
        })

    }
}

export default connection