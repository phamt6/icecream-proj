class OrderService {
    constructor(data) {
        this.data = data;
    }

    makeOrder(){
        const { count, barPrice, packPrice, boxPrice, packSize, boxSize } = this.data;
        const boxCount = Math.floor(count / boxSize);
        const packCount = Math.floor((count % boxSize) / packSize);
        const barCount = (count % boxSize) % packSize;
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