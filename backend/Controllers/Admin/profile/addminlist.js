const adminmodel = require("../../../Models/Adminaccount");

exports.adminlist = async (req, res) => {
      try {
          const adminList = await adminmodel.find();
  
        
          const plainadminList = adminList.map((admin) => admin.toObject());
  
          res.status(200).json({ message: "adminlist", plainadminList });
      } catch (error) {
          console.error("Error:", error);
          res.status(500).json({ message: "An error occurred", error: error.message });
      }
  };
  