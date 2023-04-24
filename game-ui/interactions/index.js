window.onload = function(){

    //listen if user clicked item slot close button, if so, move the item slot 
    let item_slot = document.getElementById("item_slot");
    let item_slot_button = document.getElementById("item_slot_button");

    item_slot_button.addEventListener('click', closeItemSlot);

    function closeItemSlot (){
        console.log(item_slot.offsetLeft);

        if(close_flag == false){
            item_slot.style.transform = "translateX(200px)";
            item_slot.style.transitionDuration = "1s";
            item_slot.style.opacity = "0%";
    
            item_slot_button.style.transform = "translateX(100px)";
            item_slot_button.style.transitionDuration = "1s";
            close_flag = true;
        }else if(close_flag == true){
            item_slot.style.transform = "translateX(0px)";
            item_slot.style.transitionDuration = "1s";
            item_slot.style.opacity = "100%";

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

}

