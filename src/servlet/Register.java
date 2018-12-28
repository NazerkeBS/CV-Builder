package servlet;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import model.User;


@WebServlet("/Register")
public class Register extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public Register() {
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        
	
        String username = request.getParameter("username");
        String password = request.getParameter("password");
        try{
        
        /* load a driver for MySql */
        Class.forName("com.mysql.cj.jdbc.Driver");

        /* create connection with the database */ 
        Connection  connection = DriverManager.getConnection
                     ("jdbc:mysql://localhost:3306/UserDB?useUnicode=true&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=UTC","tanulo","asd123");
  	
		 PreparedStatement ps=connection.prepareStatement
              ("insert into Users(username,password) values(?,?)");

		 ps.setString(1, username);
		 ps.setString(2, password);
		 int i=ps.executeUpdate();
    
		User user = new User(username, password);
	    if(i>0){
		    	
	    	String msg  = "Thank you for signing up,  " + user.getUsername();
	    	request.setAttribute("message", msg);
	    	RequestDispatcher rdispatcher = request.getRequestDispatcher("/index-login.jsp");
	        rdispatcher.forward(request, response);
	        
        }     
          
        }
        catch(Exception e)
        {
            e.printStackTrace();
        }
	
      }
}
