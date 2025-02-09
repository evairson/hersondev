const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");


module.exports = buildModule("GuestBookDeployment", (m) => {

    const guestBook = m.contract("Guestbook", []); 
  
    return { guestBook }; 
});