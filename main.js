function setup() {
    if (screen.width < 700){

        document.getElementById("heading").style.fontSize = "25px";
        document.getElementById("heading").style.top = "175px";

        document.getElementById("click-button").style.top = "310px";
        document.getElementById("click-button").style.right = "44px";
        document.getElementById("click-button").style.width = "235px";
        document.getElementById("click-button").style.height = "fit-content";

        document.getElementById("date-input").style.width = "235px";
        document.getElementById("date-input").style.fontSize = "20px";
        document.getElementById("date-input").style.top = "260px";
        document.getElementById("date-input").style.height = "fit-content";

        document.getElementById("instruction").style.fontSize = "20px";
        document.getElementById("instruction").style.top = "225px";
        document.getElementById("instruction").style.right = "0px";
        document.getElementById("instruction").style.width = "235px";
        
        document.getElementById("loading-component").style.top = "340px";

        document.getElementById("age-output").style.fontSize = "20px";
        document.getElementById("age-output").style.right = "33px";

    } else if (screen.width > 700 && screen.width < 950){
     
        document.getElementById("heading").style.fontSize = "35px";
        document.getElementById("heading").style.top = "195px";
        document.getElementById("heading").style.right = "35px";

        document.getElementById("click-button").style.top = "330px";
        document.getElementById("click-button").style.right = "35px";
        document.getElementById("click-button").style.width = "270px";
        document.getElementById("click-button").style.height = "fit-content";

        document.getElementById("date-input").style.width = "330px";
        document.getElementById("date-input").style.fontSize = "20px";
        document.getElementById("date-input").style.top = "290px";
        document.getElementById("date-input").style.right = "35px";
        document.getElementById("date-input").style.height = "fit-content";

        document.getElementById("instruction").style.fontSize = "20px";
        document.getElementById("instruction").style.top = "260px";
        document.getElementById("instruction").style.right = "20px";
        document.getElementById("instruction").style.width = "235px";
        
        document.getElementById("loading-component").style.top = "311px";
        document.getElementById("loading-component").style.right = "320px";
        document.getElementById("loading-component").style.width = "fit-content";

        document.getElementById("age-output").style.fontSize = "30px";
        document.getElementById("age-output").style.right = "33px";
    }
}

function calculate() {
    var input = document.getElementById("date-input").value;
    var results = "";
    
    var day1 = input.slice(8, 10);
    var month1 = input.slice(5, 7);
    var year1 = input.slice(0, 4);

    var date = new Date();
    var day2 = date.getDate();
    var month2 = 1 + date.getMonth();
    var year2 = date.getFullYear();
    var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];


    if(day1 > day2){
        day2 = day2 + month[month2 - 1];
        month2 = month2 - 1;
    }
    if(month1 > month2){
        month2 = month2 + 12;
        year2 = year2 - 1;
    }

    var dayM = day2 - day1;
    var monthM = month2 - month1;
    var yearM = year2 - year1;

    if (yearM <= 0){
        if (dayM == 1){
            results = monthM + " Months and " + dayM + " Day";
        } else if (monthM == 1 && dayM == 1){
            results = monthM + " Month and " + dayM + " Day";
        } else if (monthM == 1){
            results = monthM + " Month and " + dayM + " Days";
        } else {
            results = monthM + " Months and " + dayM + " Days";
        }
    }
    if (monthM <= 0){
        if (dayM == 1){
            results = yearM + " Years and " + dayM + " Day";
        } else if (yearM == 1 && dayM == 1){
            results = yearM + " Year and " + dayM + " Day";
        } else if (yearM == 1){
            results = yearM + " Year and " + dayM + " Days";
        } else {
            results = yearM + " Years and " + dayM + " Days";
        }
    }
    if (dayM <= 0){
        if (monthM == 1){
            results = yearM + " Years and " + monthM + " Month";
        } else if (yearM == 1 && monthM == 1){
            results = yearM + " Year and " + monthM + " Month";
        } else if (yearM == 1){
            results = yearM + " Year and " + monthM + " Months";
        } else {
            results = yearM + " Years and " + monthM + " Months";
        }
    }
    if (yearM <= 0 && monthM <= 0){
        if (dayM == 1){
            results = dayM + " Day";
        } else {
            results = dayM + " Days";
        }
    }
    if (year1 <= 0 && dayM <= 0){
        if (monthM == 1){
            results = monthM + " Month";
        } else {
            results = monthM + " Months";
        }
    }
    if (monthM <= 0 && dayM <= 0){
        if (yearM == 1){
            results = yearM + " Year";
        } else {
            results = yearM + " Years";
        }
    }
    if (yearM > 0 && monthM > 0 && dayM > 0) {
        results = yearM + " Years, " + monthM + " Months and " + dayM + " Days";
    }

    document.getElementById("loading-component").style.visibility = "visible";
    setTimeout(function(){
        document.getElementById("age-output").innerHTML = results;
        document.getElementById("loading-component").style.visibility = "hidden";
    }, 2000);
}