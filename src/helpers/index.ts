export function  formatCurrency(amount:number){
    return new Intl.NumberFormat('en-US' ,{style: "currency", currency: "USD"}).format(amount)
} 


export function formatDate(date:string):string{
    const dateObj = new Date(date)
     const option: Intl.DateTimeFormatOptions = {
        weekday:'long',
        year:'numeric',
        month:'long',
        day:'numeric',


     }

    return new Intl.DateTimeFormat('es-ES', option).format(dateObj)
}