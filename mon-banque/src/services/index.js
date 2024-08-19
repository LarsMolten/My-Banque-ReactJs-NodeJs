import axios from "axios";

export function getClient() {
    return new Promise(() => {
        axios.get("http://localhost:4000")
        .then(console.log)
        .catch(console.error)
    })
}