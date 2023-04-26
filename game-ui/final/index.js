/*
.c_character:hover{
    background: rgb(2,0,36);
    background: radial-gradient(circle, rgba(2,0,36,1) 3%, rgba(121,9,22,1) 18%, rgba(0,212,255,0) 75%);
}
*/
window.onload = function(){

    //listen if user clicked item slot close button, if so, move the item slot 
    let item_slot = document.getElementById("item_slot");
    let item_slot_button = document.getElementById("item_slot_button");
    let items = document.getElementsByClassName("stored_items");
    let finished_dialog = 0;

    item_slot_button.addEventListener('click', closeItemSlot);
    for (let i = 0; i < items.length; i++){
        items[i].addEventListener('click', itemOption);
    }

    function closeItemSlot (){

        if(close_flag == false){
            item_slot.style.transform = "translateX(200px)";
            item_slot.style.transitionDuration = "1s";
            item_slot.style.opacity = "0%";
                for (let i = 0; i < items.length; i++){
                        items[i].style.transform = "translateX(200px)";
                        items[i].style.transitionDuration = "1s";
                        items[i].style.opacity = "0%";
                }

    
            item_slot_button.style.transform = "translateX(100px)";
            item_slot_button.style.transitionDuration = "1s";
            close_flag = true;
        }else if(close_flag == true){
            item_slot.style.transform = "translateX(0px)";
            item_slot.style.transitionDuration = "1s";
            item_slot.style.opacity = "100%";
            for (let i = 0; i < items.length; i++){
                    items[i].style.transform = "translateX(0px)";
                    items[i].style.transitionDuration = "1s";
                    items[i].style.opacity = "100%";
            }
            item_slot_button.style.transform = "translateX(0px)";
            item_slot_button.style.transitionDuration = "1s";
            close_flag = false;
        }
    }

    let c_popup = document.getElementById("c_popup");
    let c_popup_content = document.getElementById("c_content");
    let c_character = document.getElementById("character");
    let close_button = document.getElementById("c_close");

    c_character.addEventListener('click', openPopUp);
    close_button.addEventListener('click', closePopUp);

    function openPopUp (){

        c_popup.style.visibility = 'visible';
        c_popup_content.style.visibility = 'visible';

        let character_img = document.getElementById("character_img");
        let anger_option = document.getElementById("anger_inducing");
        let worry_option = document.getElementById("empathatic");
        let calm_option = document.getElementById("calm_option");
        let funny_option = document.getElementById("funny_option");
        let end_dialog = document.getElementById("end_dialog");
        let old_dialog = document.getElementById("popup_dialog");
        let new_dialog = document.getElementById("change_dialog");

        if (finished_dialog > 0){
            character_img.src = "angry.png";
            old_dialog.style.display = "none";
            new_dialog.style.display = "block";
            new_dialog.innerHTML = "She does not want to talk to you";

            anger_option.style.display = "none";
            worry_option.style.display = "none";
            end_dialog.innerHTML = "Return to the scene";
            end_dialog.style.display = "block";
        }

        anger_option.onclick = function(){
            finished_dialog = finished_dialog + 1;
            character_img.src="angry.png";
            old_dialog.style.display = "none";
            new_dialog.style.display = "block";
            new_dialog.innerHTML = "She doesn't seem happy with what you said" 
                                + "<br>"
                                + "<br>"
                                + "She glares at you and speaks in a stern voice, 'You know what? I don't need your advice. Go AWAY.'"
            anger_option.style.display = "none";
            worry_option.style.display = "none";
            end_dialog.innerHTML = "Ok, whatever";
            end_dialog.style.display = "block";
        }
        worry_option.onclick = function(){
            character_img.src="worried.png";
            old_dialog.style.display = "none";
            new_dialog.style.display = "block";
            new_dialog.innerHTML = "Listening to your panic, she might have calmed down a little bit" 
                                + "<br>"
                                + "Still shaken by what's happening, the woman tries to speak coherently with a shivering voice, 'I-- I don't even know. I pushed the table a bit and it broke all of a sudden- now-'"
                                + "<br>"
                                + "She still can't seem to find the explanation for what's happening at the moment"
            new_dialog.style.fontSize = "large";
            anger_option.style.display = "none";
            calm_option.style.display = "block";
            calm_option.innerHTML = "Well, maybe this is some elaborate trick? Not sure why it's happening but it doesn't seem so dangerous";

            worry_option.style.display = "none";
            funny_option.style.display = "block";
            funny_option.innerHTML = "Huh, you'd think a ghost would do something more than just hold a broken bottle in the air";
            
        }
        calm_option.onclick = function(){
            old_dialog.style.display = "none";
            new_dialog.style.display = "block";
            new_dialog.innerHTML = "She seemed to have calmed down";
            calm_option.style.display = "none";
            funny_option.style.display = "none";
            end_dialog.innerHTML = "Leave the conversation"
            end_dialog.style.display = "block";

        }
        funny_option.onclick = function(){
            character_img.src = "glad.png";
            old_dialog.style.display = "none";
            new_dialog.style.display = "block";
            new_dialog.innerHTML = "She giggles at your comment"
                                + "<br>"
                                + "<br>"
                                + "'Yeah, I guess so. Hah kind of a funny ghost if you think about it that way'";
            calm_option.style.display = "none";
            funny_option.style.display = "none";
            end_dialog.innerHTML = "Leave the conversation"
            end_dialog.style.display = "block";
        }
        end_dialog.onclick = function(){
            closePopUp();
            character_img.src = "character_detail.png";
            old_dialog.style.display = "block";
            new_dialog.style.display = "none";

            anger_option.style.display = "block";
            worry_option.style.display = "block";
            end_dialog.style.display = "none";
        }

    }

    function closePopUp() {
        c_popup.style.visibility = 'hidden';
        c_popup_content.style.visibility = 'hidden';
    }

    let i_popup = document.getElementById("i_popup");
    let i_popup_content = document.getElementById("i_content");
    let c_item = document.getElementById("item");
    let i_close_button = document.getElementById("i_close");

    c_item.addEventListener('click', i_openPopUp);
    i_close_button.addEventListener('click', i_closePopUP)

    function i_openPopUp (){
        i_popup.style.visibility = 'visible';
        i_popup_content.style.visibility = 'visible';
    }

    function i_closePopUP() {
        i_popup.style.visibility = 'hidden';
        i_popup_content.style.visibility = 'hidden';
    }


    let i_item_false = document.getElementById("item_false");
    i_item_false.onclick = function (){
        i_popup.style.visibility = 'hidden';
        i_popup_content.style.visibility = 'hidden';
    }

    let i_item_true = document.getElementById("item_true");
    let warning = document.getElementById("warning_popup");
    let warning_content = document.getElementById("warning_content");
    i_item_true.onclick = function (){
        if(item_flag == false){
            i_popup.style.visibility = 'hidden';
            i_popup_content.style.visibility = 'hidden';
    
            document.getElementById("broken_glass").style.visibility = "visible";
            item_flag = true;
        }else{
            warning.style.visibility = "visible";
            warning_content.style.visibility = "visible";

            let w_close_button = document.getElementById("w_close");
            w_close_button.addEventListener('click', w_closePopUp)

            function w_closePopUp (){
                warning.style.visibility = "hidden";
                warning_content.style.visibility = "hidden";

                i_popup.style.visibility = 'hidden';
                i_popup_content.style.visibility = 'hidden';
            }

        }
    }


    function itemOption(){

        let option = document.getElementById("item_remove");
        let option_content = document.getElementById("item_content");

        option.style.visibility = 'visible';
        option_content.style.visibility = 'visible';

        let delete_item = document.getElementById("delete_item");
        let keep_item = document.getElementById("keep_item");
        let close_button = document.getElementById("ir_close");

        delete_item.onclick = function(){
            for (i = 0; i < items.length; i++){
                items[i].style.visibility = 'hidden';
            }
            option.style.visibility = 'hidden';
            option_content.style.visibility = 'hidden';
            item_flag = false;
        }

        keep_item.onclick = function(){
            option.style.visibility = 'hidden';
            option_content.style.visibility = 'hidden';
            item_flag = true;
        }

        close_button.onclick = function(){
            option.style.visibility = 'hidden';
            option_content.style.visibility = 'hidden';
            item_flag = true;
        }

    }

}