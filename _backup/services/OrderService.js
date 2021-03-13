class OrderService {
    constructor(data) {
        this.data = data;
    }

    /**
     * iterate through this.data to check for required params
     * all object values are expected to be positive numbers
     * 
     * @memberof OrderMakerService
     * @returns {Boolean} true if reqBody contains invalid inputs
     */
     hasInvalidInputs(){
        const requiredParams = ['count', 'barPrice', 'packPrice', 'boxPrice', 'packSize', 'boxSize'];

        const hasRequiredParams = requiredParams.every(param => {
            return this.data.hasOwnProperty(param) && typeof(this.data[param]) === 'number' && this.data[param] > 0
        });

        return Boolean(!hasRequiredParams
            || this.data.count % 1 !== 0
            || this.data.packSize % 1 !== 0
            || this.data.boxSize % 1 !== 0
         );
    }

    /**
     * throws an Error of Invalid Input if found invalid inputs
     * calculate boxCount, packCount, barCount, totalPrice for API resp
     * 
     * @memberof OrderMakerService
     * @returns {Object} contains all info required as API resp
     */
    makeOrder(){
        if (this.hasInvalidInputs()) throw new Error('Invalid Input');

        const { count, barPrice, packPrice, boxPrice, packSize, boxSize } = this.data;
        let n = count;
        const boxCount = Math.floor(n / boxSize);
        n = n % boxSize;
        const packCount = n === 0 ? 0 : Math.floor(n / packSize);
        const barCount = n === 0 ? 0 : n % packSize;
        const totalPrice = boxCount * boxPrice + packCount * packPrice + barCount * barPrice;
        
        return { 
            boxCount, 
            packCount, 
            barCount, 
            totalPrice 
        };
    }
}

module.exports = OrderService;