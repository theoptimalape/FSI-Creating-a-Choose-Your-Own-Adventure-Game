// Your Code Here+
// let firstAnswer  = window.prompt('Do you head left or right?')
// if(firstAnswer === 'left'){
//     let secondAnswer = window.prompt(`You come across a stray cat. 
// It scampers off down a small hole, just large enough for you to crawl through. 
// Do you follow it, or continue on your path?`)
//     if (secondAnswer === 'follow it') {
//         let secondAnswer = window.prompt('You follow the cat to a colony of cats, nestled in a fort of warm blankets and subsisting off of inexplicably warm soup. They are content with you staying, but you wonder if you should alert the world to this magical safe haven.')
//         if(secondAnswer === 'stay') {
//             let secondAnswer = window.prompt('You live happily amongs the cats for the rest of your days.')
//         } else if (secondAnswer === 'spread the word') {
//             let secondAnswer = window.alert('After leaving the cat colony, you are never able to find it again; without proof, no one believes your story, which passes into legend nonetheless.')
//         }

//     }
// } else if(firstAnswer === 'right') {
//     let secondAnswer = window.prompt(`You come across a snoring dragon. 
// On the other side of him, you see a shiny chest of treasure. Another path would 
// lead you away from the dragon altogether. Which path do you take?`)

// }

let firstAnswer = window.prompt('Do you head left or right?')
console.log(firstAnswer);
    if(firstAnswer ==="left"){
        let secondAnswer = window.prompt('You come across a stray cat. It scampers off down a small hole, just large enough for you to crawl through. Do you follow it, or continue on your path?')
        if(secondAnswer === 'follow it'){
            let secondAnswer = window.prompt('You follow the cat to a colony of cats, nestled in a fort of warm blankets and subsisting off of inexplicably warm soup. They are conrighttent with you staying, but you wonder if you should alert the world to this magical safe haven.')
            if(secondAnswer === 'stay'){
                let secondAnswer = window.prompt('You live happily among the cats for the rest of your days.')
            } else if(secondAnswer === 'spread the word'){
                let secondAnswer = window.prompt('After leaving the cat colony, you are never able to find it again; without proof, no one believes your story, which  passes into legend nonetheless.')
            }        
        }
}   else if(firstAnswer === 'right'){
        let secondAnswer = window.prompt('You come across a snoring dragon. On the other side of him, you see a shiny chest of treasure. Another path would lead  you away from the dragon altogether. Which path do you take?')
            if(secondAnswer === 'treasure'){
                let secondAnswer = window.prompt('You accidentally step on the dragons tail; causing it to awaken in a fit of rage. You can run away, or stay and fight the dragon. Which do you do?')
                if(secondAnswer === 'run away'){
                    let secondAnswer = window.prompt('Dragons are fast. Especially mad ones. You dead...')
                }
                if(secondAnswer === 'fight'){
                    let secondAnswer = window.prompt('You dead...')
                }
            }
            else if(secondAnswer === 'escape'){
                let secondAnswer = window.prompt('You escape safely, and return home to your life of poverty.')
            }
}



