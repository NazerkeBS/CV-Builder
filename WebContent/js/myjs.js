/*convert HTML page to PDF using jsPDF API licensed by https://parall.ax/products/jspdf */
function html_resume_to_pdf() {
	var doc = new jsPDF();
	
	doc.setFont('helvetica')
	doc.setFontType('bold')
	doc.setFontSize(24)
	
	doc.text(80, 20, 'Resume');
    
	doc.setFont('times')
	doc.setFontType('normal')
	doc.setFontSize(12)
	
	
	doc.text(100,30, 'Email: ')
	doc.setFontType('italic')
	var email = document.getElementById("email").value
	doc.text(120, 30, email)
	
	doc.setFontType('normal')
	doc.text(100,35, 'Address: ')
	doc.setFontType('italic')
	var address = document.getElementById("address").value
	doc.text(120, 35, address)
	doc.setFontType('normal')
	doc.text(100,40, 'Mobile: ')
	doc.setFontType('italic')
	var phone = document.getElementById("phone").value
	doc.text(120, 40, phone)
	
	var src = document.getElementById("output").src;
	doc.setFontType('normal')
	doc.setDrawColor(0, 0, 128)
	doc.setLineWidth(0.3)
	doc.line(20, 63, 190, 63)
	
	doc.setFont('times')
	doc.setFontType('normal')
	
	doc.setFontSize(16)
	doc.text(20,70, 'Personal Information')
	
	doc.setFontSize(14)
	doc.text(30, 80, 'Name:')
	var fullname  = document.getElementById('fullname').value
	doc.text(60, 80, fullname)
	
	doc.setLineWidth(0.3)
	doc.line(20, 85, 190, 85)
	
	doc.setFontSize(16)
	doc.text(20, 92, 'Educational Information')
	
	doc.setFontSize(14)
	doc.text(30,100, 'Degree: ')
	var degree = document.getElementById('degree').value
	doc.text(60, 100, degree)
	
	doc.text(30, 108, 'Major: ')
	var major  = document.getElementById('major').value
	doc.text(60, 108, major)
	doc.text(30, 116, 'GPA: ')
	var gpa =  document.getElementById('gpa').value 
	gpa = gpa + ''
	doc.text(60, 116, gpa)
	
	doc.setLineWidth(0.3)
	doc.line(20, 120, 190, 120)
	
	doc.setFontSize(16)
	doc.text(20, 126, 'Work Experience')
	
	doc.setFontSize(14)
	doc.text(30, 138, 'Job Title: ')
	var jobtitle = document.getElementById('jobtitle').value
	doc.text(80, 138, jobtitle)
	
	doc.text(30, 146, 'Company Name: ')
	var companyname = document.getElementById('companyname').value
	doc.text(80, 146, companyname)
	
	doc.text(30, 154, 'Duration: ')
	var start = document.getElementById('start').value
	var end  = document.getElementById('end').value
	var present  = document.getElementById('present').value
	start = start + ''
	end  = end  + ''
	if(present == 'present'){
		var duration  = start + ' - present'
		doc.text(80, 154, duration)
	}else{
		var duration = start + '  -  ' + end
		doc.text(80, 154, duration)
	}
	
	if(document.getElementById('jobtitle1') != null){
		doc.setFontSize(14)
		doc.text(30, 164, 'Job Title: ')
		var jobtitle1 = document.getElementById('jobtitle1').value
		doc.text(80, 164, jobtitle1)
		doc.text(30, 172, 'Company Name: ')
		var companyname1 = document.getElementById('companyname1').value
		doc.text(80, 172,companyname1)
		doc.text(30, 178, 'Duration: ')
		var duration1 = document.getElementById('duration1').value
		doc.text(80, 178, duration1)
		
		doc.setLineWidth(0.3)
		doc.line(20, 184, 190, 186)
	
		doc.setFontSize(16)
		doc.text(20, 194, 'Technical Projects')
	
		doc.setFontSize(14)
		doc.text(30, 204, 'short description: ')
		var techprojectOne  = document.getElementById('techprojectOne').value
		doc.text(80, 204, techprojectOne)
	
	
		doc.text(30, 212, 'short description: ')
		var techprojectTwo  = document.getElementById('techprojectTwo').value
		doc.text(80, 212, techprojectTwo)
	
		doc.setLineWidth(0.3)
		doc.line(20, 218, 190, 218)
	
		doc.setFontSize(16)
		doc.text(20, 228, 'Honours & Awards')
		doc.setFontSize(14)
		doc.text(30, 236, 'Award: ')
		var award = document.getElementById('award').value
		doc.text(60, 236, award)
	
	
		doc.setLineWidth(0.3)
		doc.line(20, 242, 190, 242)
	
		doc.setFontSize(16)
		doc.text(20, 248, 'References')
		doc.setFontSize(14)
	
		doc.text(30, 254, 'Soft Skills: ')
		var reference = document.getElementById('reference').value
		doc.text(80, 254, reference)
		if (document.getElementById('ref1')!= null){
			doc.text(30, 262, 'Soft Skills: ')
			var ref= document.getElementById('ref1').value
			doc.text(80, 262, ref)
		}
    
		if (document.getElementById('ref2') != null){
			doc.text(30, 270, 'Soft Skills: ')
			var ref= document.getElementById('ref2').value
			doc.text(80, 270, ref)
		}
	
		if (document.getElementById('ref3') != null){
			doc.text(30, 278, 'Soft Skills: ')
			var ref= document.getElementById('ref3').value
			doc.text(80, 278, ref)
		}
		
	}else{
		
		doc.setLineWidth(0.3)
		doc.line(20, 160, 190, 160)
	
		doc.setFontSize(16)
		doc.text(20, 166, 'Technical Projects')
	
		doc.setFontSize(14)
		doc.text(30, 174, 'short description: ')
		var techprojectOne  = document.getElementById('techprojectOne').value
		doc.text(80, 174, techprojectOne)
	
	
		doc.text(30, 182, 'short description: ')
		var techprojectTwo  = document.getElementById('techprojectTwo').value
		doc.text(80, 182, techprojectTwo)
	
		doc.setLineWidth(0.3)
		doc.line(20, 189, 190, 189)
	
		doc.setFontSize(16)
		doc.text(20, 195, 'Honours & Awards')
		doc.setFontSize(14)
		doc.text(30, 203, 'Award: ')
		var award = document.getElementById('award').value
		doc.text(60, 203, award)
	
	
		doc.setLineWidth(0.3)
		doc.line(20, 209, 190, 210)
	
		doc.setFontSize(16)
		doc.text(20, 215, 'References')
		doc.setFontSize(14)
	
		doc.text(30, 225, 'Soft Skills: ')
		var reference = document.getElementById('reference').value
		doc.text(80, 225, reference)
		if (document.getElementById('ref1')!= null){
			doc.text(30, 233, 'Soft Skills: ')
			var ref= document.getElementById('ref1').value
			doc.text(80, 233, ref)
		}
    
		if (document.getElementById('ref2') != null){
			doc.text(30, 241, 'Soft Skills: ')
			var ref= document.getElementById('ref2').value
			doc.text(80, 241, ref)
		}
	
		if (document.getElementById('ref3') != null){
			doc.text(30, 249, 'Soft Skills: ')
			var ref= document.getElementById('ref3').value
			doc.text(80, 249, ref)
		}
		
	}
    /* convert image into pdf using addImage() function and save pdf as resume.pdf to local machine*/
	var img = new Image;
	 img.onload = function() {
		doc.addImage(this, 20, 10, 35, 45);
		doc.save("resume.pdf");    
	};
	img.crossOrigin = "";  
	img.src = src;
     
}