import mongoose from "mongoose";

const { Schema, model } = mongoose;

const OrderSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    restaurant: {
        type: Schema.Types.ObjectId,
        ref: "Restaurant",
        required: true,
    },
    deliveryman: {
        type: Schema.Types.ObjectId,
        ref: "Delivery",
    },
    paymentId: {
        type:Schema.Types.ObjectId,
        ref: "Payment",
        required: true,
    },
    deliveryAddress: {
        type: Schema.Types.ObjectId,
        ref: "DeliveryAddress",
        required: true,
    }, 
    orderStatus: {
        type: String,
        enum: ["Preparing","Ready","Delivered","Out for delivery"], 
        default: "Preparing",
    },
    orderItems: [
        {
            item: {
                type: Schema.Types.ObjectId,
                ref: "MenuItem",
                required: true,
            },
            quantity: {
                type: Number,
                required: true,
            },
        },
    ],
    totalAmount: {
        type: Number,
        required: true
    },
    
}, {
    timestamps: true,
});

const OrderModel = model("Order", OrderSchema);

export default OrderModel;