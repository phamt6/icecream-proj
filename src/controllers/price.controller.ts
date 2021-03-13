import { Request, Response } from 'express';
import OrderService from 'services/OrderService';

const getErrorTexts = (errors) => {
    let errorTexts = [];
    for (const errorItem of errors) {
        errorTexts = errorTexts.concat(errorItem.constraints);
    }
    return errorTexts;
}

const priceController = async (req: Request, res: Response) => {
    const orderService = new OrderService(req.body);
    try {
        const order = await orderService.makeOrder();
        res.status(200).json(order);
    }
    catch (errors) {      
        res.status(500).json(getErrorTexts(errors));
    }
}

export default priceController;