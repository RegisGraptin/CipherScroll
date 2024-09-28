# CipherScroll - New CTF platform on-chain
> Build for: Level Up - Scroll Hackathon


## Presentation

CipherScroll is a new DApp allowing you to do catpure the flags challenges on-chain. Meaning that each time you are solving a challenge, you can at the same time build your reputation on-chain.

## How does it work

A user will have to connect with his wallet. Then, he will have to choose a challenge. He will have to find the flag and submit it. Once he submit it, on the user front end, it will generate a ZK proof that the user know the solution using Noir. Then, he will need to create a transaction with this proof and send it to the smart contract deployed on Scroll.

## Future improvment

- Use hashing in Noir to avoid flag leakage.
- Manage replay attack if someone use the same proof already submitted on-chain.

## Video presentation

https://www.loom.com/share/8647de4f71c74dd6a9901921d796d7e8?sid=9cafaa12-ae53-40b1-8d8e-ebc6f6260329