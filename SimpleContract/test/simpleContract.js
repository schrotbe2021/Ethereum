const SimpleContract = artifacts.require("SimpleContract");

contract('SimpleContract', () => {
    it('Deploy smart contract properly', async () => {
        const simpleContract = await SimpleContract.deployed();
        assert(simpleContract.address !== "");
    });
});