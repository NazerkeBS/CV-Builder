
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
<title>CV builder</title>
<link rel="stylesheet" type="text/css" href="style.css">
	<link href="https://fonts.googleapis.com/css?family=Quicksand:500" rel="stylesheet">
	<script src="https://code.jquery.com/jquery-3.2.1.js">
	</script>
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
				<li> <a href="index.jsp">Home</a></li>
				<li> <a href="#">Login</a></li>
				<li> <a href="index.jsp#register">Register</a></li>
				<li> <a href="index.jsp#contact">Contact</a></li>
			</ul>
		</nav>
		
			<div id="login">
				<div id="login-container-index">
				
				 <% Object name  = request.getAttribute("message");
				        if(name != null){ %>
				        <p><%=request.getAttribute("message")%> </p>
				    <% } %>
				    
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
		
</div>
</body>
</html>