function swapText(ballNumber) {
                
    let ball = document.querySelector(`.${ballNumber}`); //currente .ball_ object being clicked on
    if (ball.classList.contains('ballClicked')) {
        return; // Exit early if the ball is already active
    }
    toggleOff(); //makes sure to toggle off any other clicked button before clicking the new button
    ball.classList.add('ballClicked');

    const extra_desc = document.querySelector('.js-extra-desc');
    const extra_title = extra_desc.querySelector('.js-extra-title');
    const extra_time = document.querySelector('.js-extra-time');
    
    if(ballNumber === 'ball1') { //ball for KUSA
        const newTitle = 'KOREAN UNDERGRADUATE STUDENT ASSOCIATION';
        const newTime = 'August 2021 - April 2023'
        
        const previousExists = swapDesc(extra_desc); //just comparing titles but still swapping the entire description extracurricular description container
        if(previousExists) {
            setTimeout(function() { //USE setTimeout BECAUSE JAVASCRIPT TIMING DOESN'T WAIT FOR AN ANIMATION TO FINISH BEFORE EXECUTING A SINGLE LINE CODE
                extra_desc.classList.remove('ballDescRemove'); //so we can do it again later/remove the effects
            },  300);
        }
        
        
        extra_desc.classList.add('ballDesc');
        const ballDesc = document.querySelector('.ballDesc');
        if(previousExists) { //if previous exists you want to wait for the previous desc to fade out before fading the new thing in. else, it means it's the first click of a new refresh so show the desc immediately
            setTimeout(function() {
                extra_title.innerText = newTitle;
                extra_time.innerHTML = newTime;
            }, 300);
        }
        else {
            extra_title.innerHTML = newTitle;
            extra_time.innerHTML = newTime;
        }
        
    }
    else if(ballNumber === 'ball2') {
        const newTitle = 'FRESHMAN LEADERSHIP COUNCIL';
        const extra_title = document.querySelector('.js-extra-title');
        const previousExists = swapDesc(extra_desc); //use the entire innerHTML contents of the extra-desc box to determine fade
        if(previousExists) {
            setTimeout(function() { //USE setTimeout BECAUSE JAVASCRIPT TIMING DOESN'T WAIT FOR AN ANIMATION TO FINISH BEFORE EXECUTING A SINGLE LINE CODE
                extra_desc.classList.remove('ballDescRemove'); //so we can do it again later/remove the effects
            },  300);
        }
        
        
        extra_desc.classList.add('ballDesc');
        const ballDesc = document.querySelector('.ballDesc');
        if(previousExists) { //if previous exists you want to wait for the previous desc to fade out before fading the new thing in. else, it means it's the first click of a new refresh so show the desc immediately
            setTimeout(function() {
                extra_title.innerHTML = newTitle;
            }, 300);
        }
        else {
            extra_title.innerHTML = newTitle;
        }
        
        
    }
    else {
        const newTitle = 'INTER-RESIDENCE HALL ASSOCIATAION';
        const extra_title = document.querySelector('.js-extra-title');
        const previousExists = swapDesc(extra_desc); //use the entire innerHTML contents of the extra-desc box to determine fade
        if(previousExists) {
            setTimeout(function() { //USE setTimeout BECAUSE JAVASCRIPT TIMING DOESN'T WAIT FOR AN ANIMATION TO FINISH BEFORE EXECUTING A SINGLE LINE CODE
                extra_desc.classList.remove('ballDescRemove'); //so we can do it again later/remove the effects
            },  300);
        }
        
        
        extra_desc.classList.add('ballDesc');
        const ballDesc = document.querySelector('.ballDesc');
        if(previousExists) { //if previous exists you want to wait for the previous desc to fade out before fading the new thing in. else, it means it's the first click of a new refresh so show the desc immediately
            setTimeout(function() {
                extra_title.innerHTML = newTitle;
            }, 300);
        }
        else {
            extra_title.innerHTML = newTitle;
        }
    }
}

function toggleOff() {
    const previousButton = document.querySelector('.ballClicked');
    if(previousButton) {
        previousButton.classList.remove('ballClicked'); //the . DOESN'T go before this one but yes with the query
    } //add fade out to current text thne remove it
}

function swapDesc(newText) { //checks if this is the first time a ball is clicked -> if not, then fade out (via adding ballDescRemove)
    const previousText = document.querySelector('.ballDesc');
    if(previousText) {
        if(previousText.innerHTML !== newText) {
            previousText.classList.add('ballDescRemove');
            return true; //return true indicates that there was a previous click (ie. not the first click, ie. do the fade out animation)
        }
    }
    return false;
}