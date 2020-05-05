function city (object) {
   if(object.age > 1000)  {
    if(object.capital == true) {
    	console.log("Стародавня столиця [object.name]");
    }
   }
    
     if(object.age < 1000)  {
       if(object.capital == true) {
    		console.log("Молода столиця [object.name]");
       }
     }
    
     		if(object.age > 1000)  {
    			if(object.capital == false) {
    				console.log("Стародавнє місто [object.name]");
          }
        }
    
    
            if(object.age < 1000)  {
    			    if(object.capital == false) {
    				   	console.log("Місто [object.name]");
              }
            }
    }
  
  
  city(kyiv);
  
   var kyiv = { 
    name: "Kyiv",
    capital: true,
    age: 1538
  }