import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { ethers } from "hardhat";

const deployVault: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
    const { getNamedAccounts, deployments } = hre;
    const { deploy, log } = deployments;
    const { deployer } = await getNamedAccounts();

    log("Initialising Vault...");

    const vault = await deploy("Vault", {
        from: deployer,
        args: [],
        log: true,
    });

    const timelock = await ethers.getContract("TimeLock");
    const vaultAddress = await ethers.getContractAt("Vault", vault.address);

    // The next section uses the deployed vault to transfer ownership to the timelock
    const ownershipTx = await vaultAddress.transferOwnership(timelock.address);
    await ownershipTx.wait(1);

    log("DAO: Successful Deployment and Setup!");
};

export default deployVault;
