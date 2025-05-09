package com.application.healthhive.home;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {
	
	   @GetMapping("/home")
	    public String homePage() {
	        return "welcome"; // This resolves to /WEB-INF/views/sample.jsp
	    }

}
