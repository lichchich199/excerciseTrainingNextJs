export const handleSortDataOrders = (listOrder, fieldName, sortValue) => {
    var sortedOrders = listOrder;
    if(sortValue === 'asc') {
        if(fieldName === 'orderNumber') {
            sortedOrders = listOrder.sort((a,b) => (parseInt(a[fieldName]) > parseInt(b[fieldName])) ? 1 : ((parseInt(b[fieldName]) > parseInt(a[fieldName])) ? -1 : 0))
        } else if(fieldName === 'orderStatus') {
            sortedOrders = listOrder.sort((a,b) => ((a[fieldName]) > (b[fieldName])) ? 1 : (((b[fieldName]) > (a[fieldName])) ? -1 : 0))
        } else {
            // date
            sortedOrders = listOrder.sort((a,b) => (new Date(a[fieldName]) > new Date(b[fieldName])) ? 1 : ((new Date(b[fieldName]) > new Date(a[fieldName])) ? -1 : 0))
            
        }
    } else {
        if(fieldName === 'orderNumber') {
            sortedOrders = listOrder.sort((a,b) => (parseInt(a[fieldName]) > parseInt(b[fieldName])) ? -1 : ((parseInt(b[fieldName]) > parseInt(a[fieldName])) ? 1 : 0))
        } else if(fieldName === 'orderStatus') {
            sortedOrders = listOrder.sort((a,b) => ((a[fieldName]) > (b[fieldName])) ? -1 : (((b[fieldName]) > (a[fieldName])) ? 1 : 0))
        } else {
            sortedOrders = listOrder.sort((a,b) => (new Date(a[fieldName]) > new Date(b[fieldName])) ? -1 : ((new Date(b[fieldName]) > new Date(a[fieldName])) ? 1 : 0))
        }

    }
    return sortedOrders
}

export const handleSearchOrders = (listOrder, objectFilter) => {
    var listOrderSearched = listOrder;
    console.log(objectFilter.orderDay)
    if(objectFilter.orderDay) {
        var dateSearch = new Date(objectFilter.orderDay);
        listOrderSearched = listOrderSearched.filter((order) => {
            // let dataDBConvert = convertShortDateToISODate(order.orderDay);
            // let dateDB = new Date(dataDBConvert);
            let dateDB = new Date(order.orderDay);
            return dateSearch.getTime() === dateDB.getTime()
        })
    }
    if(objectFilter.fee) {
        listOrderSearched = listOrderSearched.filter((order) => {
            return objectFilter.fee === order.fee
        })
    }
    if(objectFilter.orderStatus) {
        listOrderSearched = listOrderSearched.filter((order) => {
            return objectFilter.orderStatus === order.orderStatus
        })
    }
    return listOrderSearched
}
// export const padTo2Digits = (num) => {
//     return num.toString().padStart(2, '0');
//   }

// export const convertShortDateToISODate = (shortDate) => {
//     const [year, month, date] = shortDate ? shortDate.split('/') : [];
//     return `${year}-${padTo2Digits(month || '')}-${padTo2Digits(date || '')}`
// }