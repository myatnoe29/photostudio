$(document).ready(function(){
	$("#send_msg").click(function(){
		let name = $("#name").val();
		let email = $("#email").val();
		let phone = $("#phone").val();
		let message = $("#message").val();

		if (name && email && phone) 
		{

		let contact_info = {
			name : name,
			email : email,
			phone : phone,
			message : message
		};

		let contact_info_list = localStorage.getItem('contact_info_list');
		if(!contact_info_list)
		{
			contact_info_list='{"contact_info_list":[]}';
		}

		let contact_info_listobj = JSON.parse(contact_info_list);
		contact_info_listobj.contact_info_list.push(contact_info);
		localStorage.setItem('contact_info_list',JSON.stringify(contact_info_listobj));
		

		}

	})

})