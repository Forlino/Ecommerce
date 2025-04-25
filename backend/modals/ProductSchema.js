const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Introduzca el nombre del producto"],
    },
    description: {
        type: String,
        required: [true, "Introduzca la descripcion"],
    },
    price: {
        type: Number,
        required: [true, "Introduzca precio"],
        maxLength: [8, "No se exceda de 8 caracteres"],
    },
    ratings: {
        type: Number,
        default: 0,
    },
    images: [
        {
            public_id: {
                type: String,
                required: true,
            },
            url: {
                type: String,
                required: true,
            }
        }
    ],
    category: {
        type: String,
        required: [8, "Ingresa categoria del producto"],
    },
    Stock: {
        type: Number,
        required: [8, "Ingresa categoria del producto"],
        maxLength: [4, "No se exceda de 8 caracteres"],
        default: 1,
    },
    numOfReviews: {
        type: Number,
        default: 0,
    },
    reviews: [
        {
            userRevId: {
                type: mongoose.Schema.ObjectId,
                ref: "user",
                required: true,
            },
            name: {
                type: String,
                required: true,
            },
            rating: {
                type: Number,
                required: true,
            },
            comment: {
                type: String,
                required: true,
            }
        }
    ],
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "user",
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.models.product || mongoose.model("product", ProductSchema);