const Order = require('../models/Order');

module.exports = {
    //add order
    placeOrder: async (req, res)=> {
        const newOrder = new Order(req.body);

        try {
            await newOrder.save();
            
            const orderId = newOrder._id;
            res.status(201).json({status: true, message: "Order placed successfully",orderId: orderId});
        } catch (error) {
          res.status(500).json({status: true, message:error.message});
        }
    },

    //get user orders
    getUserOrders: async (req, res) => {
        const userId = req.user.id;
        const {paymentStatus, orderStatus} = req.query;

        let query = {userId};

        if(paymentStatus){
            query.paymentStatus = paymentStatus;
        }

        if(orderStatus){
            query.orderStatus = orderStatus;
        }


        try {
          const orders =  await Order.find(query)
          .populate({
            path: 'orderItems.foodId',
            select: "imageUrl title rating time"
          })  

          res.status(200).json(orders)
        } catch (error) {
            res.status(500).json({status: false, message: error.message});
        }
    }
}