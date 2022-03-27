import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { ethers } from "hardhat";
import { ZERO_ADDRESS } from "../utils-hardhat-config";

const governanceSetup: DeployFunction = async (
    hre: HardhatRuntimeEnvironment
) => {
    const { getNamedAccounts, deployments } = hre;
    const { log } = deployments;
    const { deployer } = await getNamedAccounts();

    // Use ethers to get contract and set caller to deployer
    const timelock = await ethers.getContract("TimeLock", deployer);
    const governor = await ethers.getContract("GovernorContract", deployer);

    log("Initialising Governance Roles...");

    // Governance roles can be found inside TimelockController contract
    const proposer = await timelock.PROPOSER_ROLE();
    const executor = await timelock.EXECUTOR_ROLE();
    const admin = await timelock.TIMELOCK_ADMIN_ROLE();

    const grantProposer = await timelock.grantRole(proposer, governor.address);
    await grantProposer.wait(1);
    const grantExecutor = await timelock.grantRole(executor, ZERO_ADDRESS);
    await grantExecutor.wait(1);

    /*
    Once the appropriate roles have been assigned, the next section revokes timelock admin role
    from the deployer address to maintain decentralisation.
    */

    const revokeAdmin = await timelock.revokeRole(admin, deployer);
    await revokeAdmin.wait(1);

    log("All Roles Complete");
};

export default governanceSetup;
