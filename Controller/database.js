// import the required model 
const User = require("../Models/User");
const Address = require("../Models/Address");

// controller for create or update the detials 
exports.CreateData = async (req, res) => {
    try{
        // fetch the data from the body 
        const {
            name , email , street , city , state , country
        } = req.body

        console.log("all data --> ", name , email , street , city , state , country);

        // check if all the data is present or not 
        if( !name || !email || !street || !city || !state || !country){
            return res.status(400).json({
                success:false,
                message:"All the fields are required",
            })
        }

        // check if the user is already exist or not 
        const userDetails = await User.findOne({email : email});

        if(userDetails){
            // user already created , update the details here 
            // check if the name is also comes 
            if(name){
                
            }
            // create a new Addrees and add its id to user 
            const newAddresssData = await Address.create({
                street,
                city,
                state,
                country,
            })

            // add this id in the user 
            userDetails.address.push(newAddresssData._id);

            await userDetails.save();

            // updated user details 
            const updatedUserDetails = await User.findOne({email}).populate("address");
            // return the success response 
            return res.status(200).json({
                success:true,
                message:"New Address Added Successfully",
                data : updatedUserDetails,
            })

        }
        // user doesn't exist, --> create the new user and add the details 
        const newUser = await User.create({
            name:name,
            email:email
        })

        if(!newUser){
            return res.status(403).json({
                success:false,
                message:"Failure occur while create new user",
            })
        }
        // create the address and add the data 
        const newAddres = await Address.create({
            street,
            city,
            state,
            country
        })

        newUser.address.push(newAddres._id);
        await newUser.save();

        const updatedUser = await User.findOne({email}).populate("address");

        return res.status(200).json({
            success:true,
            message:"User created successfully",
            data : updatedUser
        })


    } catch(error){
        console.log("Error in internal server --> ", error);
        return res.status(500).json({
            success:false,
            message:"Internal Failure Occur" ,
            error:error.message
        })
    }
}
