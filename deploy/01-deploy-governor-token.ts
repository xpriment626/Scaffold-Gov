import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { ethers } from "hardhat";

const deployGovToken: DeployFunction = async (
    hre: HardhatRuntimeEnvironment
) => {
    const { getNamedAccounts, deployments, network } = hre;
    const { deploy, log } = deployments;
    const { deployer } = await getNamedAccounts();

    log("Deploying Governor Token...");

    const token = await deploy("GovernorToken", {
        from: deployer,
        args: [],
        log: true,
    });

    log("Deployment Complete:", token.address);

    await delegate(token.address, deployer);

    log("Delegation Complete!");
};

const delegate = async (tokenAddress: string, delegatedAccount: string) => {
    const token = await ethers.getContractAt("GovernorToken", tokenAddress);
    const tx = await token.delegate(delegatedAccount);
    await tx.wait(1);
    const checkpoint = await token.numCheckpoints(delegatedAccount);

    console.log("Checkpoint:", checkpoint);
};

export default deployGovToken;
