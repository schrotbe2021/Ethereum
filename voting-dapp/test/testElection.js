const Election = artifacts.require("Election");

contract("Test for Election", function(accounts) {
    var electionInstance;

    it("inittialized two candidates", function() {
        return Election.deployed().then(function(instance) {
            return instance.candidatesCount();
        }).then(function(count) {
            assert.equal(count, 2);
        }); 
    });

    it("Correct cnadidates", function() {
        return Election.deployed().then(function(i) {
            electionInstance = i;
            return electionInstance.candidates(1);
        }).then(function(candidate) {
            assert.equal(candidate[0], "Scha muhfuckin ly", "Correct name");
            assert.equal(candidate[1], 1, "Correct id");
            assert.equal(candidate[2], 0, "correct vote count");
            return electionInstance.candidates(2);
        }).then(function(candidate) {
            assert.equal(candidate[0], "Benny Blockchain", "Correct name");
            assert.equal(candidate[1], 2, "Correct id");
            assert.equal(candidate[2], 0, "correct vote count");
        });
    });
});