import app from "./app";

app.listen(app.get('port'), () => {
    console.log(`Server listening in port ${app.get('port')}`)
})