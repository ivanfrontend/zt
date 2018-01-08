console.log('123');
var counter = false;
$("#showForm").on("click", function(){	
	$(".wrappFormNone").toggleClass("activ");
	
	if(counter === false){
		counter = true;
	}else{
		counter = false;
	}
	console.log(counter);
	if(counter === false){
		$("#showForm").text('Заказать шампунь и тоник Parusan');
	}else{
		$("#showForm").text('Закрыть');
	}

})

$(".buttonClass2").on("click", function(event){
	event.preventDefault();
	if($(".tel2").val() != ''){
		$(".wrappFormNone").removeClass("activ");

	}
	if( $(".tel2").val() === ''){
		alert("вы не указали номер телефона");
	}
	 console.log( $(".tel2").val());
	
	$(".tel2").val('');

})



// $(".buttonClass").on("click", function(event){
// 	event.preventDefault();
// if( $(".tel").val() === ''){
// 		var text = "вы не указали номер телефона";
// 		$(".errorTel").text(text);
// 	}else{
// 		$(".errorTel").val('');
// 	}
// 	console.log('456');
	
// })


// $('tel').change(function(){
//   alert('Элемент foo получил фокус.');
// });
