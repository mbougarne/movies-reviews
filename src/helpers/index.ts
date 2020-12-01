/**
 * Convert minutes to hours
 * @param minutes time in minutes
 */
export const timeConverter = (minutes: number ) : string => {
  const hours = Math.floor(minutes / 60);
  const m = minutes % 60;
  
  return `${hours}h ${m}m`;
}

/**
 * Convert the movie budget or revenue to millions or thousands 
 * @param amount 
 */
export const budgetRevenueConverter = (amount: number) : string => {

  if(amount == 0)
  {
    return '0M';
  }

  return (Math.abs(Number(amount)) >= 1.0e+6)
    ? Math.round(Math.abs(Number(amount)) / 1.0e+6 ) + "M"
    : Math.round(Math.abs(Number(amount)) / 1.0e+3 ) + "K";
}

/**
 * Get full year of the movie or show 
 * @param date in string format
 */
export const getYearOfDate = (date: string) : number | never => {
  
  try {

    const d: Date = new Date(date);
    return d.getFullYear();

  } catch (error) {
    
    throw Error(error.message);
    
  }

}