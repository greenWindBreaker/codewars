//solution166
// YouTube had a like and a dislike button, which allowed users to express their opinions about particular content. It was set up in such a way that you cannot like and dislike a video at the same time. There are two other interesting rules to be noted about the interface: Pressing a button, which is already active, will undo your press. If you press the like button after pressing the dislike button, the like button overwrites the previous "Dislike" state. The same is true for the other way round.
// likeOrDislike([Dislike]) => Dislike
// likeOrDislike([Like,Like]) => Nothing
// likeOrDislike([Dislike,Like]) => Like
// likeOrDislike([Like,Dislike,Dislike]) => Nothing
// If the list is empty, return Nothing
//Create a function that takes in a list of button inputs and returns the final state.

// Like, Dislike, Nothing come from Preloaded

function likeOrDislike(buttons) {
    let state = 'Nothing';
  
    for (let i = 0; i < buttons.length; i++) {
      if (buttons[i] === state) {
        state = 'Nothing'
      } else {
        state = buttons[i]
      }
    }
  
    return state
}

//version2
// function likeOrDislike(buttons) {
//     return buttons.reduce( (state,button) => button===state ?   Nothing : button , Nothing );
// }

console.log(likeOrDislike(['dislike','like','like','dislike','like','like','dislike','like','like','dislike']))//dislike