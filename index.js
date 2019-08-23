modules.export = {

  happyHolidays: happyHolidays = () =>{
    return "Happy holidays!"
  },
  
  happyHolidaysTo: happyHolidaysTo = name =>{
    return `Happy holidays, ${name}!`
  },
  
  happyHolidayTo: happyHolidayTo = (holiday,name) =>{
    return `Happy ${holiday}, ${name}!`
  },
  
  holidayCountdown: holidayCountdown = (days,holiday)=>{
    return `It's ${days} days until ${holiday}!`
  }
}


