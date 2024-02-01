import { getChildren, getCelebrities } from "./database.js"

const children = getChildren()
const celebrities = getCelebrities()

const findCelebrityMatch = (child, celebrityArray) => {
    let celebrity = null

    for (const star of celebrityArray) {
        if (child.celebrityId === star.id) {
            celebrity = star
            return celebrity
        }
    }

}

export const Pairings = () => {
    let html = ""
    html += "<ul>"

    for (const child of children) {
        const kidsStar = findCelebrityMatch(child, celebrities)
        html += `
            <li>
                ${child.name} will be making memories with ${kidsStar.name}, a ${kidsStar.sport} star, by ${child.wish}
            </li>
        `
    }

    html += "</ul>"

    return html
}

