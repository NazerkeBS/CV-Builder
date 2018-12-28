package servlet;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import controller.Validator;

@WebServlet("/Login")
public class Login extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public Login() {
    }

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/html;charset=UTF-8");
        
        String username = request.getParameter("username");
        String password = request.getParameter("password");
        
        if(Validator.checkUser(username, password))
        {
            RequestDispatcher rs = request.getRequestDispatcher("steps.html");
            rs.forward(request, response);
        }
        else
        {
           String msg = "username or password is incorrect. Try again";
           request.setAttribute("message", msg);
           RequestDispatcher rdispatcher = request.getRequestDispatcher("index-login.jsp");
           rdispatcher.forward(request, response);
        }
    }  
	}


