const HelloWorld = artifacts.require("HelloWorld");

contract("Hello world test", accounts =>{

    it("Returns hello world", async () =>{
        let contract = await HelloWorld.deployed();
        let msg = await contract.getString();
        console.log(msg)
        assert.equal(msg, "Hello world");
    });

})