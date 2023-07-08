//PRIMARY FUNCTIONS

const ball = document.querySelector('.ball1');
ball.classList.add('ballClicked');

const extra_desc = document.querySelector('.js-extra-desc');
const extra_title = extra_desc.querySelector('.js-extra-title');
const extra_time = document.querySelector('.js-extra-time');
const extra_info = document.querySelector('.js-extra-info');

extra_desc.classList.add('ballDesc');

extra_title.innerHTML = 'KOREAN UNDERGRADUATE STUDENT ASSOCIATION';
extra_time.innerHTML = '<i>August 2021 - April 2023</i>';
extra_info.innerText = 'Having dedicated 2 years of my undergraduate experience to KUSA, I\'ve had the opportunity to be on UF\'s KUSA board as an Athletic Director and as a Korean Language Program Chair. Both posiitions have allowed me to interact further with people of Korean heritage and those who hold an interest in Korean culture at UF, I\'ve also had the fortune of working alongside co-chairs to make events such as Running Man and Language Workshops possible through cooperation and planning.';








function swapText(ballNumber) {
                
    let ball = document.querySelector(`.${ballNumber}`); //currente .ball_ object being clicked on
    if (ball.classList.contains('ballClicked')) {
        return; //exit early if the ball is already active
    }
    toggleOff(); //makes sure to toggle off any other clicked button before clicking the new button
    ball.classList.add('ballClicked');

    const extra_desc = document.querySelector('.js-extra-desc');
    const extra_title = extra_desc.querySelector('.js-extra-title');
    const extra_time = document.querySelector('.js-extra-time');
    const extra_info = document.querySelector('.js-extra-info');
    
    
    if(ballNumber === 'ball1') { //ball for KUSA
        const newTitle = 'KOREAN UNDERGRADUATE STUDENT ASSOCIATION';
        const newTime = '<i>August 2021 - April 2023</i>'
        const newInfo = 'Having dedicated 2 years of my undergraduate experience to KUSA, I\'ve had the opportunity to be on UF\'s KUSA board as an Athletic Director and as a Korean Language Program Chair. Both posiitions have allowed me to interact further with people of Korean heritage and those who hold an interest in Korean culture at UF, I\'ve also had the fortune of working alongside co-chairs to make events such as Running Man and Language Workshops possible through cooperation and planning.';
        
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
                extra_info.innerText = newInfo; //the reason it sticks when the other 2 balls are empty is bc you're directly changing the class from the html file, you're not doing anything with the classList
            }, 300);
        }
        else {
            extra_title.innerHTML = newTitle;
            extra_time.innerHTML = newTime;
            extra_info.innerText = newInfo;
        }
        
    }
    else if(ballNumber === 'ball2') {
        const newTitle = 'FRESHMAN LEADERSHIP COUNCIL';
        const newTime = '<i>August 2021 - April 2022</i>'
        const newInfo = 'A select cohort of 50 students from the incoming Freshman class, this organization strives to grow its council members as well as the Gainesville community through civic engagement, and personal and professional developement. I was extremely fortunate to be given the opportunity to be a part of the 2021-2022 council, which has also allowed me to take part in 2 committees that focused on the rampant food insecurity problem in Gainesville as well as students\' mental health awareness on-campus.';

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
                extra_title.innerText = newTitle;
                extra_time.innerHTML = newTime;
                extra_info.innerText = newInfo;
            }, 300);
        }
        else {
            extra_title.innerText = newTitle;
            extra_time.innerHTML = newTime;
            extra_info.innerText = newInfo;
        }
        
        
    }
    else {
        const newTitle = 'INTER-RESIDENCE HALL ASSOCIATAION';
        const newTime = '<i>August 2021 - April 2022</i>'
        const newInfo = 'Being a first-generation college student, the residence halls at UF helped to acclimate me into life on-campus. As a result, I was introduced to my residence area\'s council, which planned events and logistics for multiple dormitories. Serving as Treasurer of the Murphree Area Council, I was given the opportunity to plan the spending of \$2,650 as well as give the task of managing the ledger throughout the year to keep track of expenses.';


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
                extra_title.innerText = newTitle;
                extra_time.innerHTML = newTime;
                extra_info.innerText = newInfo;
            }, 300);
        }
        else {
            extra_title.innerText = newTitle;
            extra_time.innerHTML = newTime;
            extra_info.innerText = newInfo;
        }
    }
}

function moveBalls() {
    const ball_container = document.querySelector('.ball-container');
    ball_container.classList.add('moveBalls');
    console.log('eh'); 
}

function scrollToSection(sectionId) { //self-explanatory
    var section = document.getElementById(sectionId);
    var headerHeight = document.querySelector('header').offsetHeight;
    var sectionTop = section.offsetTop - headerHeight;
  
    window.scrollTo({
      top: sectionTop,
      behavior: 'smooth'
    });
  }

//SECONDARY FUNCTIONS

function toggleOff() { //for toggling off other balls whenever you click on a new ball
    const previousButton = document.querySelector('.ballClicked');
    if(previousButton) {
        previousButton.classList.remove('ballClicked'); //the . DOESN'T go before this one but yes with the query
    } //add fade out to current text thne remove it
}

function swapDesc(newText) { //checks if this is the first time a ball is clicked -> if not, then fade out the extracurricular desc(via adding ballDescRemove)
    const previousText = document.querySelector('.ballDesc');
    if(previousText) {
        if(previousText.innerHTML !== newText) {
            previousText.classList.add('ballDescRemove');
            return true; //return true indicates that there was a previous click (ie. not the first click, ie. do the fade out animation)
        }
    }
    return false;
}
