const validate=()=>{
    //set all tags inside 
    
    

    let allTags={
        user:document.getElementsByTagName('input')[0],
        secName:document.getElementsByTagName('input')[1],
        email:document.getElementsByTagName('input')[2],
        pswrd:document.getElementsByTagName('input')[3],
        cnfirm:document.getElementsByTagName('input')[4]
    }
    //now destructure it 
    const {user , secName ,email, pswrd ,cnfirm}=allTags;
   //event handler for the reset password 
    pswrd.addEventListener('keyup',(e)=>{
        let val=e.target.value;
        //now get element of the error field
        const err=document.querySelector('.pass_error');
        //match for letters and integers
        let exp= /^[a-zA-Z0-9]+$/
        if(val.match(exp)){
            
            err.innerHTML=`strong `
            err.style.color=`green`

            //check the legnth 
            if(val.length <= 6){
                err.innerHTML=`weak password`
                err.style.color=`red`
            }

        }else if(val === '' || val === null){
            err.innerHTML='cant be empty'
            err.style.color='red'
        }
         else {
            
            let errMsg=err.innerHTML=`password should only container letters and digits`;
            err.style.color=`red`
            return false;
        }
        
    })

    //now validation for the other input field
    cnfirm.addEventListener('keyup',e=>{
        var cnErr=document.querySelector('.confirm_error');
        val=e.target.value;;
        let equalise=pswrd.value;
            //now let make it same as the other
            val==equalise ? 
            cnErr.innerHTML='password matched' 
            : cnErr.innerHTML='dosnt match'
            //you can add color
    })

    //now email validation
    email.addEventListener('keyup',e => {
        let val=e.target.value;
        let reg=/^[a-zA-Z0-9]+\@gmail\.com$/
        let mail=document.querySelector('.emalErr');
            //now check if it match
            if(val.match(reg)){
                mail.innerHTML='valid email'
                mail.style.color='green'
            }else if(val === '' || val === null){
                mail.innerHTML='cant be empty'
                mail.style.color='red'
            }
            else {
                mail.innerHTML='not a valid email address ';
                mail.style.color='red'
            }
    })

}
window.addEventListener('load',validate())
