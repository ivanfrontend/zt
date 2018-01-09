
$("#showForm").on("click", function(){	
	$(".wrappFormNone").toggleClass("activ");
	var text = $(this).text();
	if(text == 'Закрыть'){
		$("#showForm").text('Заказать шампунь и тоник Parusan');
	}else{
		$(".qw1").text('Закрыть');
	}
})

	$(".buttonClass2").on("click", function(){

	console.log(counter);
	if($(".tel2").val() != ''){
		$(".wrappFormNone").removeClass("activ");
		$("#showForm").text('Заказать шампунь и тоник Parusan');
	}
	if( $(".tel2").val() === ''){
		alert("вы не указали номер телефона");
	}
	 console.log( $(".tel2").val());
	
	$(".tel2").val('');

})

