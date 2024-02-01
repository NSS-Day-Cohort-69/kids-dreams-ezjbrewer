import { getCelebrities } from "./database.js"

const celebrities = getCelebrities()

document.addEventListener(
    "click",
    (celebrityClicked) => {
        const celebrityItem = celebrityClicked.target
        const celebrityId = parseInt(celebrityItem.dataset.id)
        if (celebrityItem.dataset.type === "celebrity") {
            for (const celebrity of celebrities) {
                if (celebrityId === celebrity.id) {
                    window.alert(`${celebrity.name} is a ${celebrity.sport} star`)
                }
            }
        }
    }
)

// Declare event listener
    // Declare celebrityItem
    // Declare celebrityId
    // If statement to verify type
        // For of loop to access getCelebrities()
            // If statement to match ids
                // Window alert with celebrity name and sport


export const Celebrities = () => {
    let html = "<ol>"

    for (const celebrity of celebrities) {
        html += `<li 
                    data-id="${celebrity.id}" 
                    data-type="celebrity"
                    data-sport="${celebrity.sport}"
                    id="star--${celebrity.id}">
                    ${celebrity.name}
                </li>`
    }

    html += "</ol>"
    return html
}
