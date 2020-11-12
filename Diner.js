let greeting = function () {
    return "Welcome to Myra's Diner!";
    };
    
    console.log(greeting());
    
    
    let menu;
    let question = prompt("Would you like to see a menu?");
    switch(question) {
      case "yes":
        text = "Excellent choice! my food is the BEST.";
        break;
      case "no":
        text = "Get out no food for you!";
        break;
      
      default:
        text = "I do not understand, Get out no food for you!";
        break;
    }
    console.log(text);
    
    let menuTime;
    let questionTime = prompt("It is time to choose a main dish. Would you like Beef, Chicken, or Fish?");
    switch(questionTime) {
      case "Beef":
        text = "Excellent choice! The Beef is grassfed and fresh. It will cost you $20.00 please pay now.";
        break;
      case "Chicken":
        text = "Our Chicken is the best, you are very cool. It will cost you $16.00 please pay now";
        break;
      case "Fish":
        text = "This is the way. Your meal is on the house. Good Bye.";
        break;
      default:
        text = "I do not understand, Get out no food for you!";
        break;
    }
    
    console.log(text);
    
    let sideItemTime;
    let questionTimeSideItem = prompt("It is time to choose a side dish. Would you like French Fries, Salad, or Macaroni?")
    switch(questionTimeSideItem) {
      case "French Fries":
        text = "French Fries are delicious, great choice they are $2.00 extra to your meal";
        break;
      case "Salad":
        text = "Salad has been contaminated with radioactive goo you now have the Coronavirus, please go home and stay there for 14 days.";
        break;
      case "Macaroni":
        text = "You are clearly a person of culture. Fine choice indeed. Macaroni and cheese is the best food in all of the land. That will be an additional $16.00 to your meal.";
        break;
      default:
        text = "I do not understand, Get out no food for you!";
        break;
    }
    
    console.log(text);
    
    
    let totalTime;
    let totalTimePay = prompt("Hello I am a robot from outerspace I will be your cashier today. It is time to pay. Please tell me your main dish and side dish. I am case sensitive. For example 'Beef AND Salad'. Good bye")
    switch(totalTimePay) {
      case "Beef AND French Fries":
        text = "Your total is $22.00 Thank you for being a customer at Myra's Diner.";
        break;
      case "Beef AND Salad":
        text = "I am so sorry you found radioative goo in your salad. You still have to pay for the beef though! That will be $20.00. Have a nice day.";
        break;
      case "Beef AND Macaroni":
        text = "You smell great! Your total is $36.00. Good bye coolest person in the world. Please return and spend money again. Good bye.";
        break;
    
      case "Chicken AND French Fries":
        text = "Did you know that The term 'robot' comes from the Czech word 'Robota', that means 'Drudgery' or 'hard work' and 'forced labor... HAHA your total is $18.00 please!";
        break;
      case "Chicken AND Salad":
        text = "Radio active goo huh? You smell funny. Please pay $16.00 and go home! ";
        break;
      case "Chicken AND Macaroni":
        text = "Greetings and salutations you have impeccable taste. Your hair looks really cool. Please pay $32.00.";
        break;
    
      case "Fish AND French Fries":
        text = "Did you know that A robot may not injure a human being or, through inaction, allow a human being to come to harm? Please pay $2.00";
        break;
      case "Fish AND Salad":
        text = "Ewwww you should see a doctor about that...you pay nothing. Good bye!";
        break;
      case "Fish AND Macaroni":
        text = "Never gonna give you up, never gonna let you down...oh HAHA you caught me singing. Please pay $16.00. This is the Way.";
        break;
    
      default:
        text = "YOU DARE LIE TO SPACE ROBOT ??!?! THAT IS NOT WHAT YOU ATE AT MYRA'S DINER! YOU WILL NOW BE VAPORIZED HUMAN SCUM PEW PEW PEW PEW PEW *BOOM*!!!";
        break;
    }
    
    console.log(text);
    
    let goodbye = function () {
    return "Thank you for coming to Myra's Diner please come back again and tell your friends how much you enjoyed it here!";
    };
    
    console.log(goodbye());
    