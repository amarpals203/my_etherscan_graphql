// Get latest Ethereum price
// Get block confirmation time

const { RESTDataSource } = require("apollo-datasource-rest");

//Vitalik's Ethereum Address
const eth_address = "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045";

//Etherscan Data Source Class
class EtherDataSource extends RESTDataSource {
    constructor() {
            super();

            this.baseURL = "https://api.etherscan.io/api";
        }
        // Ether balance by address
    async etherBalanceByAddress() {
            return this.get(
                `?module=account&action=balance&address=${eth_address}&tag=latest&apikey=${process.env.ETHERSCAN_API}`
            );
        }
        // Get latest Ethereum price from Etherscan API
    async getLatestEthereumPrice() {
        return this.get(
            `?module=stats&action=ethprice&apikey=${process.env.ETHERSCAN_API}`
        );
    }

    // Get average Ethereum block confirmation time from Etherscan API
    async getBlockConfirmationTime() {
        return this.get(
            `?module=gastracker&action=gasestimate&gasprice=2000000000&apikey=${process.env.ETHERSCAN_API}`
        );
    }

    // Get latest Ethereum price from Etherscan API
    async getLatestEthereumPrice() {
        return this.get(
            `?module=stats&action=ethprice&apikey=${process.env.ETHERSCAN_API}`
        );
    }

    // Get average Ethereum block confirmation time from Etherscan API
    async getBlockConfirmationTime() {
            return this.get(
                `?module=gastracker&action=gasestimate&gasprice=2000000000&apikey=${process.env.ETHERSCAN_API}`
            );
        }
        // Total supply of ether
    async totalSupplyOfEther() {
        return this.get(
            `?module=stats&action=ethsupply&apikey=${process.env.ETHERSCAN_API}`
        );
    }

    //Paste Code Here For New API Endpoints    // Get latest Ethereum price from Etherscan API
    async getLatestEthereumPrice() {
        return this.get(
            `?module=stats&action=ethprice&apikey=${process.env.ETHERSCAN_API}`
        );
    }

    // Get average Ethereum block confirmation time from Etherscan API
    async getBlockConfirmationTime() {
            return this.get(
                `?module=gastracker&action=gasestimate&gasprice=2000000000&apikey=${process.env.ETHERSCAN_API}`
            );
        }
        // Get latest ethereum price
    async getLatestEthereumPrice() {
            return this.get(
                `?module=stats&action=ethprice&apikey=${process.env.ETHERSCAN_API}`
            );
        }
        // Get estimated block confirmationtime
    async getBlockConfirmationTime() {
        return this.get(
            `?module=gastracker&action=gasestimate&gasprice=2000000000&apikey=${process.env.ETHERSCAN_API}`
        );
    }
}

module.exports = EtherDataSource;