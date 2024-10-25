function toggleChatbox() {
    const chatbox = document.getElementById('chatbox-container');
    const chatboxIcon = document.getElementById('chatbox-icon');

    // Toggle chatbox visibility
    chatbox.classList.toggle('hidden');
    chatbox.style.display = chatbox.style.display === 'none' ? 'flex' : 'none';

    // Toggle chatbox icon visibility
    if (chatbox.style.display === 'flex') {
        chatboxIcon.style.display = 'none';
    } else {
        chatboxIcon.style.display = 'block';
    }

}





    // let chatboxsend = document.getElementsByClassName('.chatbox-send');
    // let chatboxinput = document.getElementsByClassName('.chatbox-input');
    // let chatmessage = document.querySelectorAll('.chat-message');

    // chatboxsend.addEventListener("click", function{
    // chatboxinput.innerHTML = chatmessage.innerHTML
    //  })

