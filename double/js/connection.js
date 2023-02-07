let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vYXBpLWhvbW9sb2cucHJpbWViZXRzLmJldC9zaWduLWluL2N1c3RvbWVyIiwiaWF0IjoxNjc1NzM3NDU3LCJleHAiOjE2NzYxNjk0NTcsIm5iZiI6MTY3NTczNzQ1NywianRpIjoiVDhiOUM5QjFrVjI2MDlKVyIsInN1YiI6IjZjY2NjM2ZhLTM0NTMtNDliYy1iNGFmLTQwZGVkZmFiOTk5MyIsInBydiI6IjVlMzliMzMwOTg0Y2E4NWU2OWYwYjA4ZjIzYzg3MWY3MzVlMTU2MjQiLCJuYW1lIjoiQmVybmFkZXR0ZSBLc2hsZXJpbiIsImVtYWlsIjoiYXZhX3RpbGxtYW4yMEB5YWhvby5jb20ifQ.JIynfH0Bej_l1ogxHNYifu7I913m7sLv6G_KKsBNda0"

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
        // .then(e=>{ stats.hud_off() })

    }
}

export default connection