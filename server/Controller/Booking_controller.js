const Bookingtable = require('../Models/Booking_model')

const Createbooking = async (req, res) => {
    try {
        const { fname, email, phone, address, quantity, totalamount, productId } = req.body;
        const uid = req.userid
        const newbooking = new Bookingtable({
            fullname: fname,
            email,
            phone,
            address,
            quantity,
            productId,
            totalamount,
            userId: uid
        })
        const savebooking = await newbooking.save()
        res.status(201).json({ message: "Booking created successfully", bdata: savebooking })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "server error", error })
    }
}

const getAllbooking = async (req, res) => {
    try {
        const bookings = await Bookingtable.find()
            .populate("userId", "name address phone")
            .populate("productId", "product_name product_price product_quantity")
        console.log(bookings)
        res.status(200).json({ message: " all bookings", bdata: bookings })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "server error", error })

    }
}

const updateStatus = async (req, res) => {
    try {
        const { newstatus } = req.body;
        const updatedbooking = await Bookingtable.findByIdAndUpdate(req.params.id, { bookingstatus: newstatus }, { new: true })
        if (!updatedbooking) {
            res.status(404).json({ message: "booking not found" })
        }
        res.status(200).json({ message: "status updated", ubooking: updatedbooking })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "server error", error })
    }
}
const getuserbookings = async (req, res) => {
    try {
        const uid = req.userid
        const bookings = await Bookingtable.find({ userId: uid })
            .populate("userId", "name address phone")
            .populate("productId", "product_name product_price product_quantity")
        res.status(200).json({ message: "bookings found", bdata: bookings })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "server error", error })
    }
}


module.exports = { Createbooking, getAllbooking, updateStatus, getuserbookings }



