modules.export = {

  var happyHolidays = () =>{
    return "Happy holidays!"
  }
  
  var happyHolidaysTo = name =>{
    return `Happy holidays, ${name}!`
  }
  
  var happyHolidayTo = (holiday,name) =>{
    return `Happy ${holiday}, ${name}!`
  }
  
  var holidayCountdown = (days,holiday)=>{
    return `It's ${days} days until ${holiday}!`
  }
}
// Testing
console.log(happyHolidays())
console.log(happyHolidaysTo("Hamidou"))
console.log(happyHolidayTo("thanksgiving","Anne"))
console.log(holidayCountdown(3,"christmas"))



