module.exports = {
    mutipleMongooseToObject: (mongooseArrays) => {
        return mongooseArrays.map(mongoose => mongoose.toObject());
    },
    mongooseToObject: (mongooseArrays) => {
        return mongooseArrays ? mongooseArrays.toObject() : mongooseArrays;
    }
}