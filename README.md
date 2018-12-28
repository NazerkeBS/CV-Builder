
<h2> Online CV maker </h2>
<ul>
  <li> Overview</li>
  <li> Installation </li>
  <li> Future Work </li>
</ul>
<h3> Overview </h3>
<p> This is a dynamic web application hosted on Apache Tomcat Server (version 9.0). This is a project for Application Development course in my university. The system enables user to create online resume by filling in the form and enables the user to download  one-page CV to local machine</p>
<h3> Installation and Deployment </h3>
<p> I used a few tools: Apache Tomcat Server (v9.0), MySQL Connector (8.0.12), jQuery (1.7), jsPDF API (https://parall.ax/products/jspdf). </p>
<p> git clone https://github.com/NazerkeBS/cv-maker.git </p> 
<p> download the server (v9.0) to your local machine https://tomcat.apache.org/download-90.cgi</p>
<p> you need Eclipse Java EE IDE in order to be able to create a new server; https://www.eclipse.org/downloads/packages/release/kepler/sr2/eclipse-ide-java-ee-developers  </p>
<p> create a new server in the eclipse ide and browse to the dowloaded apache server(v9.0) path </p>
<p> create a new JSP page in eclipse ide</p>
<p> download MySQL Connector jar file (8.0.12) and put this file into WEB-INF/lib</p>
<p> go to MySQL workbench and create a new connection, name can be anything. Mine: username: tanulo, password: asd123</p>
<p> create a new table which has username and password fields in  MySQL, call it Users</p>
<p> download jQuery (1.7) </p>
<p> start the server and run the index.jsp page in any browser</p>
<h3> Future Work </h3>
<p>Since this CV in pdf is in one-page format, user cannot create two-page resume as well as uploading an image is mandatory. </p>
