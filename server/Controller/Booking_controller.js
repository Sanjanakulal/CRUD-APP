const Bookingtable = require('../Models/Booking_model')

const Createbooking = async() =>{
    try {
        const {fname,email,phone,address,quantity}= req.body;
        const newbooking = new Bookingtable({
            fullname:fname,
            email,
            phone,
            address,
            quantity
        })
        const savebooking = await newbooking.save()
        res.status(201).json({message:"Booking created successfully",bdata:savebooking})
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "server error", error })
    }
}

module.exports ={Createbooking}



