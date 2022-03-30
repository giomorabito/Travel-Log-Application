function convertDate(dateString){
    dateString = new Date(dateString);
    return dateString.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "2-digit" })
}

export default convertDate;