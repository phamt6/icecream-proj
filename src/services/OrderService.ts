import { plainToClass } from 'class-transformer';
import { validateOrReject } from 'class-validator';
import RequestBodyDto from 'includes/RequestBodyDto';

interface Order {
    boxCount: number, 
    packCount: number, 
    barCount: number, 
    totalPrice: number
}

export default class OrderService {
    private data: any;
    
    constructor(data: any) {
        this.data = data;
    }

    /**
     * throws an Error of Invalid Input if found invalid inputs
     * calculate boxCount, packCount, barCount, totalPrice for API resp
     * 
     * @returns {Object} contains all info required as API resp
     */
    async makeOrder(): Promise<Order | Error> {
        return new Promise(async (resolve, reject) => {
            const reqBody = plainToClass(RequestBodyDto, this.data);
            
            try {
                await validateOrReject(reqBody);
            }
            catch(errors) {
                reject(errors);
            }

            const { count, barPrice, packPrice, boxPrice, packSize, boxSize } = reqBody;

            let n = count;
            const boxCount = Math.floor(n / boxSize);
            n = n % boxSize;
            const packCount = n === 0 ? 0 : Math.floor(n / packSize);
            const barCount = n === 0 ? 0 : n % packSize;
            const totalPrice = boxCount * boxPrice + packCount * packPrice + barCount * barPrice;
            
            resolve({ 
                boxCount, 
                packCount, 
                barCount, 
                totalPrice 
            });
        })      
    }
}