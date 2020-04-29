pragma solidity ^0.6.6;

contract Election 
{

    struct Candidate {
        string candidate;
        uint id;
        uint votes;
    }

    mapping(uint => Candidate) public candidates;

    uint public candidatesCount;

    // Constructor
   constructor() public
    {
        AddCandidate("Scha muhfuckin ly");
        AddCandidate("Benny Blockchain");
    }

    function AddCandidate(string memory _name) private {
        candidatesCount++;
        candidates[candidatesCount] = Candidate(_name, candidatesCount, 0);
    }
}