import axios from 'axios';

export async function getAllPriceList(){
    try{     
        const price = await axios.post('http://api.inkustudio.com/user/getAllPriceList').then(
            price => {
                sessionStorage.setItem('userPriceList', JSON.parse(price.data.data))
                console.log(price, 'yes')
                }
                
            )
            return price;
        }
        catch(err){
                console.log(err, 'price')
            }
        }