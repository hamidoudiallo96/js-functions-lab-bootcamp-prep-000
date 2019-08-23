modules.export = {

  happyHolidays: function(){
    return "Happy holidays!"
  },
  
  happyHolidaysTo: function(name){
    return `Happy holidays, ${name}!`
  },
  
  happyHolidayTo: function(holiday,name){
    return `Happy ${holiday}, ${name}!`
  },
  
  holidayCountdown: function(days,holiday){
    return `It's ${days} days until ${holiday}!`
  }
}


