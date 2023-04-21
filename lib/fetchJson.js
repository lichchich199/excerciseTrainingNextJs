export const fetcherListOrder = async () => {
    const res =  await fetch('/api/order/list')
    return await res.json();
 }