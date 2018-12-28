<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<%
   response.setHeader( "Pragma", "no-cache" );
   response.setHeader( "Cache-Control", "no-cache" );
   response.setDateHeader( "Expires", 0 );
%>
	<meta charset="UTF-8">
	<title>CV maker</title>
	<link rel="stylesheet" type="text/css" href="style.css">
	<link href="https://fonts.googleapis.com/css?family=Quicksand:500" rel="stylesheet">
	<script src="js/jquery-1.7.1.min.js"></script>
	
	<script type="text/javascript">
		$(window).on('scroll', function(){
			if($(window).scrollTop()){
				$('nav').addClass('black');
			}
			else{
				$('nav').removeClass('black');
			}
		})
	</script>
</head>
<body>
	<div class="wrapper">
		<nav>
			<div class="logo"> CV MAKER </div>
			<ul>
				<li> <a class="active" href="#">Home</a></li>
				<li> <a href="#login">Login</a></li>
				<li> <a href="#register">Register</a></li>
				<li> <a href="#contact">Contact</a></li>
			</ul>
		</nav>
		<section class="sec1"> </section>
		<section class="content">
			<div id="login">
				<div id="login-container">
				<h1> LOG IN</h1>
				<form action="Login" method="POST">
					<div class="tbox">
						<input type="text" placeholder="username" name="username" value="">
					</div>	
					<div class="tbox">
						<input type="password" placeholder="password" name="password" value="">
					</div>
					<input class="btn" type="submit" value = "Log In" >					
			    </form>
				</div>
			</div>
		 </section>
		 <section class="content">
			<div id="register">
				<div id="register-container">
					<h1> REGISTER</h1>
					<form action="Register" method="POST">
						<div class="tbox">
							<input type="text" placeholder="username" name="username" value="">
						</div>	
						<div class="tbox">
							<input type="password" placeholder="password" name="password" value="">
						</div>
						<input class="register-btn" type="submit" value = "Register" >					
			    	</form>
				</div>
			</div>
		 </section>	 
		 <section class="content">
		 	<div id="contact">
		 		<div class="address">
		 		    <br><br><br><br><br><br><br><br><br>
		 			<p>Email: abcd@cvmaker.com </p>
		 			<p>Mobile: +1 234 567 89 </p>
		 			<p>Address: CityA, CountryB </p>
		 		</div>
		 		<div class="icon">
		 		<img src="icon.png" height="180" width="200" alt="CV maker">
		 		</div>
		 	</div>
		 </section>
	</div>
</body>
</html>