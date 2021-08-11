import { getRequests } from "./dataAccess.js"

export const Requests = () => {
    const requests = getRequests()

    let html = `
        <ul>
            ${
                requests.map( request => `<li> ${request.description} </li>`)
            }
        </ul>
    `

    return html
}
