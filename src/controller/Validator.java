package controller;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class Validator {
	
	public static boolean checkUser(String username,String password) {
		boolean exists = false;
		try
		{
			/* load a driver for MySql */
			Class.forName("com.mysql.cj.jdbc.Driver");

			/* create a connection with the database */ 
			Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/UserDB?useUnicode=true&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=UTC","tanulo","asd123");
			PreparedStatement ps =connection.prepareStatement("select * from Users where username = ? and password = ?");
			ps.setString(1, username);
			ps.setString(2, password);
			ResultSet rs = ps.executeQuery();
			exists = rs.next();
        
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
     return exists;                 
  }  
}
