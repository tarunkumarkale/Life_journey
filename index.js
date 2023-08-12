let isDOBopen=false  //notshow 
let dateOfBirth;
const settingIcon=document.getElementById('settingIcon')
const SettingContent=document.getElementById('settingContent')
const initailstage=document.getElementById('initialText')
const finalstage=document.getElementById('afterDOBButton')
const dobButton=document.getElementById('dobButton')
const yearel=document.getElementById('year')
const monthel=document.getElementById('month')
const dayel=document.getElementById('day')
const hourel=document.getElementById('hour')
const minel=document.getElementById('min')
const secondel=document.getElementById('second')


// toggle

const toggleDob=()=>{
 
    // Toggle the "hide" class based on the value of isDOBopen
    if (isDOBopen) {
        SettingContent.classList.add('hide');  // css display none
    } else {
        SettingContent.classList.remove('hide');  // class remove display none
    }

    // Update the value of isDOBopen
    isDOBopen = !isDOBopen;

    // Log the current value of isDOBopen
    console.log(isDOBopen);
 // matlab  show ka result uska oppsite hoga then uppper jakae   save krna hoga
 
}

// jab me icon me click kr ruga tab  yyeh hoga  work

const maketwodigit=(number)=>{
    return  number>9 ? number : `0${number}` 
}

///////////////////////////////////////////
const updateage=()=>{
    const currentDate = new Date();
    const dateDiff = currentDate - dateOfBirth;
    const year = Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 365));
    const month = Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 30.44)) % 12; // Adjusted days per month
    const day = Math.floor(dateDiff / (1000 * 60 * 60 * 24)) % 30; // Adjusted days per month
    const hour = Math.floor(dateDiff / (1000 * 60 * 60)) % 24;
    const min = Math.floor(dateDiff / (1000 * 60)) % 60;
    const second = Math.floor(dateDiff / 1000) % 60;
    
  console.log(year,month,day,hour,min,second)

  yearel.innerHTML=maketwodigit(year)
  monthel.innerHTML=maketwodigit(month)
  dayel.innerHTML=maketwodigit(day)
  hourel.innerHTML=maketwodigit(hour)
  minel.innerHTML=maketwodigit(min)
  secondel.innerText=maketwodigit(second)

}




const setDob=()=>{
    let dateString=dobInput.value;
    dateOfBirth = dateString ? new Date(dateString) : null;

    

 
// if date of birth milli  button dabane pe intial stage ki hading hidw
if(dateOfBirth){
    initailstage.classList.add('hide')
    finalstage.classList.remove('hide') 
   
    setInterval(()=>{ updateage()},1000)
}
else{
    finalstage.classList.add('hide')    // final text gayab
    initailstage.classList.remove('hide') // insital text apper
}

console.log(dateOfBirth)

}



setDob()



settingIcon.addEventListener('click',toggleDob)
dobButton.addEventListener('click',setDob)
 





