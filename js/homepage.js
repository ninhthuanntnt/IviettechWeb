$(document).ready(function(){
	$('#simple_menu').slicknav({
	label: '',
	duration: 300,
	prependTo:'#mobile_menu'});
}); 

$(document).ready(function(){
	$('#reg').click(function(){
		var name = $('#name').val();
		var email = $('#email').val();
		var tel = $('#telephone').val();
		var subject = $('#subject').val();
		var check = 0; 
		if(name == ''){
			$('#message_error').text('Vui lòng nhập tên');
			check = 1;
		}
		if(email == ''){
			$('#message_error1').text('Vui lòng nhập email');
			check = 1;
		}
		if(tel == ''){
			$('#message_error2').text('Vui lòng nhập số điện thoại');
			check = 1;
		}
		if(subject == 0){
			$('#message_error3').text('Vui lòng chọn khóa học');
			check = 1;
		}
		if(check == 1){
			$('#error_reg').text('Đăng ký chưa thành công. Bạn vui lòng đăng ký lại hoặc liên lạc với chúng tôi qua số: 05113 888 279. Xin cảm ơn.');
			$('#error_reg').css('border', '2px solid yellow');
			$('#error_reg').css('margin-bottom','2%')
		}
	});
});