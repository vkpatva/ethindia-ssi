// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.20;
import { FunctionsClient } from "@chainlink/contracts/src/v0.8/functions/dev/v1_0_0/FunctionsClient.sol";
import { ConfirmedOwner } from "@chainlink/contracts/src/v0.8/shared/access/ConfirmedOwner.sol";
import { FunctionsRequest } from "@chainlink/contracts/src/v0.8/functions/dev/v1_0_0/libraries/FunctionsRequest.sol";
import { ClaimToken } from "./ClaimToken.sol";

contract PolygonIdEvent is FunctionsClient, ConfirmedOwner {
    error UnexpectedRequestID(bytes32 requestId);
    error NotWhitelisted(address sender);

    event nationalVCIssued(address indexed user);
    event employmentVCIssued(address indexed user);
    event labVCIssued(address indexed user);
    event issuranceVCIssued(address indexed user);
    event nationalVCVerified(address indexed user, string reason);
    event employmentVCVerified(address indexed user, string reason);
    event labVCVerified(address indexed user, string reason);
    event issuranceVCVerified(address indexed user, string reason);
    event claimRequestMade(address indexed user, bytes32 indexed requestId);
    event claimResponse(bytes32 indexed requestId, bytes response, bytes err);

    using FunctionsRequest for FunctionsRequest.Request;

    mapping(address => bool) public whitelistedAddresses;
    mapping(bytes32 => address) public requestIdToSender;
    ClaimToken public claimToken;

    constructor(address router, address _streamToken) FunctionsClient(router) ConfirmedOwner(msg.sender) {
        claimToken = ClaimToken(_streamToken);
    }

    modifier onlyWhitelisted() {
        require(whitelistedAddresses[msg.sender], "Not whitelisted");
        _;
    }

    function addWhitelistedAddress(address _address) external onlyOwner {
        whitelistedAddresses[_address] = true;
    }

    function removeWhitelistedAddress(address _address) external onlyOwner {
        whitelistedAddresses[_address] = false;
    }

    function nationalIdIssue() external {
        emit nationalVCIssued(msg.sender);
    }

    function empVCIssue() external {
        emit employmentVCIssued(msg.sender);
    }

    function labVCIssue() external {
        emit labVCIssued(msg.sender);
    }

    function insuranceIssued() external {
        emit issuranceVCIssued(msg.sender);
    }

    function natVCVerified(string memory message) external {
        emit nationalVCVerified(msg.sender, message);
    }

    function empVCVerified(string memory message) external {
        emit employmentVCVerified(msg.sender, message);
    }

    function laboratoryCVerified(string memory message) external {
        emit labVCVerified(msg.sender, message);
    }

    function insuranceVCVerified(string memory message) external {
        emit issuranceVCVerified(msg.sender, message);
    }

    function sendRequest(
        string memory source,
        bytes memory encryptedSecretsUrls,
        uint8 donHostedSecretsSlotID,
        uint64 donHostedSecretsVersion,
        string[] memory args,
        bytes[] memory bytesArgs,
        uint64 subscriptionId,
        uint32 gasLimit,
        bytes32 donID
    ) external onlyWhitelisted returns (bytes32 requestId) {
        FunctionsRequest.Request memory req;
        req.initializeRequestForInlineJavaScript(source);
        if (encryptedSecretsUrls.length > 0) req.addSecretsReference(encryptedSecretsUrls);
        else if (donHostedSecretsVersion > 0) {
            req.addDONHostedSecrets(donHostedSecretsSlotID, donHostedSecretsVersion);
        }
        if (args.length > 0) req.setArgs(args);
        if (bytesArgs.length > 0) req.setBytesArgs(bytesArgs);
        bytes32 s_lastRequestId = _sendRequest(req.encodeCBOR(), subscriptionId, gasLimit, donID);
        requestIdToSender[s_lastRequestId] = msg.sender;
        emit claimRequestMade(msg.sender, s_lastRequestId);
        return s_lastRequestId;
    }

    function sendRequestCBOR(
        bytes memory request,
        uint64 subscriptionId,
        uint32 gasLimit,
        bytes32 donID
    ) external onlyWhitelisted returns (bytes32 requestId) {
        bytes32 s_lastRequestId = _sendRequest(request, subscriptionId, gasLimit, donID);
        return s_lastRequestId;
    }

    function fulfillRequest(bytes32 requestId, bytes memory response, bytes memory err) internal override {
        emit claimResponse(requestId, response, err);
        uint256 claimAmount = uint256(bytes32(response));
        claimToken.mint(msg.sender, claimAmount);
    }
}
