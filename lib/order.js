
export async function geDataOrders() {
    console.log('jj')
    const result = await fetch('http://localhost:3001/api/order/list').catch(err => {
        console.log('list-getServerSideProps-line 61 => error fetch api list')
        throw(err)
    })
    console.log('hihiiiiii',result);
    return result
}