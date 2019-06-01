<?php 
$fio = $_POST['name'];
$phone = $_POST['phone'];
$problem = $_POST['problem'];

mail("example@mail.net", "Заявка с сайта", "Имя:".$fio.". Телефон: ".$phone.". Проблема:".$problem. "From: sasha182199@gmail.com \r\n");
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>TOPGARAGE</title>
</head>
<body>
	<link rel="stylesheet" href="assets/css/style.css">
	<div class="banner">
			<div class="banner_inside_overlay">
				<div class="banner_main_text">
					<p>Данные успешно отправлены</p>
				</div>
				<div class="banner_button"><a style='width:250px;' class="scroll_form" href="/">Вернуться на главную</a></div>
			</div>
		</div>
</body>
</html>
