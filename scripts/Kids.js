import { getChildren } from "./database.js"

const children = getChildren()

document.addEventListener(
    "click",
    (childClicked) => {
        const childItem = childClicked.target
        const childId = parseInt(childItem.dataset.id)
        if (childItem.dataset.type === "child") {
            for (const child of children) {
                if (childId === child.id) {
                    window.alert(`${child.name}'s wish is to ${child.wish}`)
                }
            }
        }
    }
)

// Declare event listener
    // Declare childListItem
    // Declare child id
    // If statement to verify type
        // For of loop to access getChildren()
            // If statement to match id's
                // Window alert the child's wish with name


export const Kids = () => {
    let html = "<ol>"

    for (const child of children) {
        html += `<li data-id="${child.id}" data-type="child" data-wish="${child.wish}">${child.name}</li>`
    }

    html += "</ol>"
    return html
}

