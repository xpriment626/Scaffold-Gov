import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import {
    VOTING_PERIOD,
    VOTING_DELAY,
    QUORUM_PERCENTAGE,
} from "../utils-hardhat-config";

const deployGovContract: DeployFunction = async (
    hre: HardhatRuntimeEnvironment
) => {
    const { getNamedAccounts, deployments } = hre;
    const { deploy, log, get } = deployments;
    const { deployer } = await getNamedAccounts();

    const timelock = await get("TimeLock");
    const token = await get("GovernorToken");

    log("Initialising Governance Contract...");

    const contract = await deploy("GovernorContract", {
        from: deployer,
        args: [
            token.address,
            timelock.address,
            VOTING_PERIOD,
            VOTING_DELAY,
            QUORUM_PERCENTAGE,
        ],
        log: true,
    });

    log("Deployed Governance Contract:", contract.address);
};

export default deployGovContract;
