var socket = io.connect('http://192.168.0.11:3001/',{'forceNew':true});

socket.on('messages',(data) =>{
   console.log(data);
   render(data);
});

function render(data){

	var html = data.map((message,index)=>{
        return(`

        	  <div class="message">
                 <strong>${message.nickname}</strong>
                 <p>${message.text}</p>

        	  </div>

        	`);
	}).join(' ');

	var div_msg=document.getElementById('messages');
	 div_msg.innerHTML=html;
	 div_msg.scrollTop =div_msg.scrollHeight;


}

function addMessage(e) {
	var payload = {
		  nickname:document.getElementById('nickname').value,
		  text:document.getElementById('text').value
	};

	document.getElementById('nickname').style.display="none";
	socket.emit('add-message', payload);

	return false;
}