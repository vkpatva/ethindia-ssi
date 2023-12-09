export const abi = [
	{
		inputs: [
			{ internalType: 'address', name: 'router', type: 'address' },
			{ internalType: 'address', name: '_streamToken', type: 'address' }
		],
		stateMutability: 'nonpayable',
		type: 'constructor'
	},
	{ inputs: [], name: 'EmptyArgs', type: 'error' },
	{ inputs: [], name: 'EmptySecrets', type: 'error' },
	{ inputs: [], name: 'EmptySource', type: 'error' },
	{ inputs: [], name: 'NoInlineSecrets', type: 'error' },
	{ inputs: [{ internalType: 'address', name: 'sender', type: 'address' }], name: 'NotWhitelisted', type: 'error' },
	{ inputs: [], name: 'OnlyRouterCanFulfill', type: 'error' },
	{ inputs: [{ internalType: 'bytes32', name: 'requestId', type: 'bytes32' }], name: 'UnexpectedRequestID', type: 'error' },
	{
		anonymous: false,
		inputs: [
			{ indexed: true, internalType: 'address', name: 'from', type: 'address' },
			{ indexed: true, internalType: 'address', name: 'to', type: 'address' }
		],
		name: 'OwnershipTransferRequested',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{ indexed: true, internalType: 'address', name: 'from', type: 'address' },
			{ indexed: true, internalType: 'address', name: 'to', type: 'address' }
		],
		name: 'OwnershipTransferred',
		type: 'event'
	},
	{ anonymous: false, inputs: [{ indexed: true, internalType: 'bytes32', name: 'id', type: 'bytes32' }], name: 'RequestFulfilled', type: 'event' },
	{ anonymous: false, inputs: [{ indexed: true, internalType: 'bytes32', name: 'id', type: 'bytes32' }], name: 'RequestSent', type: 'event' },
	{
		anonymous: false,
		inputs: [
			{ indexed: true, internalType: 'address', name: 'user', type: 'address' },
			{ indexed: true, internalType: 'bytes32', name: 'requestId', type: 'bytes32' }
		],
		name: 'claimRequestMade',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{ indexed: true, internalType: 'bytes32', name: 'requestId', type: 'bytes32' },
			{ indexed: false, internalType: 'bytes', name: 'response', type: 'bytes' },
			{ indexed: false, internalType: 'bytes', name: 'err', type: 'bytes' }
		],
		name: 'claimResponse',
		type: 'event'
	},
	{ anonymous: false, inputs: [{ indexed: true, internalType: 'address', name: 'user', type: 'address' }], name: 'employmentVCIssued', type: 'event' },
	{
		anonymous: false,
		inputs: [
			{ indexed: true, internalType: 'address', name: 'user', type: 'address' },
			{ indexed: false, internalType: 'string', name: 'reason', type: 'string' }
		],
		name: 'employmentVCVerified',
		type: 'event'
	},
	{ anonymous: false, inputs: [{ indexed: true, internalType: 'address', name: 'user', type: 'address' }], name: 'issuranceVCIssued', type: 'event' },
	{
		anonymous: false,
		inputs: [
			{ indexed: true, internalType: 'address', name: 'user', type: 'address' },
			{ indexed: false, internalType: 'string', name: 'reason', type: 'string' }
		],
		name: 'issuranceVCVerified',
		type: 'event'
	},
	{ anonymous: false, inputs: [{ indexed: true, internalType: 'address', name: 'user', type: 'address' }], name: 'labVCIssued', type: 'event' },
	{
		anonymous: false,
		inputs: [
			{ indexed: true, internalType: 'address', name: 'user', type: 'address' },
			{ indexed: false, internalType: 'string', name: 'reason', type: 'string' }
		],
		name: 'labVCVerified',
		type: 'event'
	},
	{ anonymous: false, inputs: [{ indexed: true, internalType: 'address', name: 'user', type: 'address' }], name: 'nationalVCIssued', type: 'event' },
	{
		anonymous: false,
		inputs: [
			{ indexed: true, internalType: 'address', name: 'user', type: 'address' },
			{ indexed: false, internalType: 'string', name: 'reason', type: 'string' }
		],
		name: 'nationalVCVerified',
		type: 'event'
	},
	{ inputs: [], name: 'acceptOwnership', outputs: [], stateMutability: 'nonpayable', type: 'function' },
	{ inputs: [{ internalType: 'address', name: '_address', type: 'address' }], name: 'addWhitelistedAddress', outputs: [], stateMutability: 'nonpayable', type: 'function' },
	{ inputs: [], name: 'claimToken', outputs: [{ internalType: 'contract ClaimToken', name: '', type: 'address' }], stateMutability: 'view', type: 'function' },
	{ inputs: [], name: 'empVCIssue', outputs: [], stateMutability: 'nonpayable', type: 'function' },
	{ inputs: [{ internalType: 'string', name: 'message', type: 'string' }], name: 'empVCVerified', outputs: [], stateMutability: 'nonpayable', type: 'function' },
	{
		inputs: [
			{ internalType: 'bytes32', name: 'requestId', type: 'bytes32' },
			{ internalType: 'bytes', name: 'response', type: 'bytes' },
			{ internalType: 'bytes', name: 'err', type: 'bytes' }
		],
		name: 'handleOracleFulfillment',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{ inputs: [], name: 'insuranceIssued', outputs: [], stateMutability: 'nonpayable', type: 'function' },
	{ inputs: [{ internalType: 'string', name: 'message', type: 'string' }], name: 'insuranceVCVerified', outputs: [], stateMutability: 'nonpayable', type: 'function' },
	{ inputs: [], name: 'labVCIssue', outputs: [], stateMutability: 'nonpayable', type: 'function' },
	{ inputs: [{ internalType: 'string', name: 'message', type: 'string' }], name: 'laboratoryCVerified', outputs: [], stateMutability: 'nonpayable', type: 'function' },
	{ inputs: [{ internalType: 'string', name: 'message', type: 'string' }], name: 'natVCVerified', outputs: [], stateMutability: 'nonpayable', type: 'function' },
	{ inputs: [], name: 'nationalIdIssue', outputs: [], stateMutability: 'nonpayable', type: 'function' },
	{ inputs: [], name: 'owner', outputs: [{ internalType: 'address', name: '', type: 'address' }], stateMutability: 'view', type: 'function' },
	{ inputs: [{ internalType: 'address', name: '_address', type: 'address' }], name: 'removeWhitelistedAddress', outputs: [], stateMutability: 'nonpayable', type: 'function' },
	{
		inputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
		name: 'requestIdToSender',
		outputs: [{ internalType: 'address', name: '', type: 'address' }],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{ internalType: 'string', name: 'source', type: 'string' },
			{ internalType: 'bytes', name: 'encryptedSecretsUrls', type: 'bytes' },
			{ internalType: 'uint8', name: 'donHostedSecretsSlotID', type: 'uint8' },
			{ internalType: 'uint64', name: 'donHostedSecretsVersion', type: 'uint64' },
			{ internalType: 'string[]', name: 'args', type: 'string[]' },
			{ internalType: 'bytes[]', name: 'bytesArgs', type: 'bytes[]' },
			{ internalType: 'uint64', name: 'subscriptionId', type: 'uint64' },
			{ internalType: 'uint32', name: 'gasLimit', type: 'uint32' },
			{ internalType: 'bytes32', name: 'donID', type: 'bytes32' }
		],
		name: 'sendRequest',
		outputs: [{ internalType: 'bytes32', name: 'requestId', type: 'bytes32' }],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{ internalType: 'bytes', name: 'request', type: 'bytes' },
			{ internalType: 'uint64', name: 'subscriptionId', type: 'uint64' },
			{ internalType: 'uint32', name: 'gasLimit', type: 'uint32' },
			{ internalType: 'bytes32', name: 'donID', type: 'bytes32' }
		],
		name: 'sendRequestCBOR',
		outputs: [{ internalType: 'bytes32', name: 'requestId', type: 'bytes32' }],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{ inputs: [{ internalType: 'address', name: 'to', type: 'address' }], name: 'transferOwnership', outputs: [], stateMutability: 'nonpayable', type: 'function' },
	{
		inputs: [{ internalType: 'address', name: '', type: 'address' }],
		name: 'whitelistedAddresses',
		outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
		stateMutability: 'view',
		type: 'function'
	}
]

export const nftAbi = [
	{ inputs: [{ internalType: 'address', name: 'initialOwner', type: 'address' }], stateMutability: 'nonpayable', type: 'constructor' },
	{
		inputs: [
			{ internalType: 'address', name: 'sender', type: 'address' },
			{ internalType: 'uint256', name: 'tokenId', type: 'uint256' },
			{ internalType: 'address', name: 'owner', type: 'address' }
		],
		name: 'ERC721IncorrectOwner',
		type: 'error'
	},
	{
		inputs: [
			{ internalType: 'address', name: 'operator', type: 'address' },
			{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }
		],
		name: 'ERC721InsufficientApproval',
		type: 'error'
	},
	{ inputs: [{ internalType: 'address', name: 'approver', type: 'address' }], name: 'ERC721InvalidApprover', type: 'error' },
	{ inputs: [{ internalType: 'address', name: 'operator', type: 'address' }], name: 'ERC721InvalidOperator', type: 'error' },
	{ inputs: [{ internalType: 'address', name: 'owner', type: 'address' }], name: 'ERC721InvalidOwner', type: 'error' },
	{ inputs: [{ internalType: 'address', name: 'receiver', type: 'address' }], name: 'ERC721InvalidReceiver', type: 'error' },
	{ inputs: [{ internalType: 'address', name: 'sender', type: 'address' }], name: 'ERC721InvalidSender', type: 'error' },
	{ inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }], name: 'ERC721NonexistentToken', type: 'error' },
	{ inputs: [{ internalType: 'address', name: 'owner', type: 'address' }], name: 'OwnableInvalidOwner', type: 'error' },
	{ inputs: [{ internalType: 'address', name: 'account', type: 'address' }], name: 'OwnableUnauthorizedAccount', type: 'error' },
	{
		anonymous: false,
		inputs: [
			{ indexed: true, internalType: 'address', name: 'owner', type: 'address' },
			{ indexed: true, internalType: 'address', name: 'approved', type: 'address' },
			{ indexed: true, internalType: 'uint256', name: 'tokenId', type: 'uint256' }
		],
		name: 'Approval',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{ indexed: true, internalType: 'address', name: 'owner', type: 'address' },
			{ indexed: true, internalType: 'address', name: 'operator', type: 'address' },
			{ indexed: false, internalType: 'bool', name: 'approved', type: 'bool' }
		],
		name: 'ApprovalForAll',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{ indexed: false, internalType: 'uint256', name: '_fromTokenId', type: 'uint256' },
			{ indexed: false, internalType: 'uint256', name: '_toTokenId', type: 'uint256' }
		],
		name: 'BatchMetadataUpdate',
		type: 'event'
	},
	{ anonymous: false, inputs: [{ indexed: false, internalType: 'uint256', name: '_tokenId', type: 'uint256' }], name: 'MetadataUpdate', type: 'event' },
	{
		anonymous: false,
		inputs: [
			{ indexed: true, internalType: 'address', name: 'previousOwner', type: 'address' },
			{ indexed: true, internalType: 'address', name: 'newOwner', type: 'address' }
		],
		name: 'OwnershipTransferred',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{ indexed: true, internalType: 'address', name: 'from', type: 'address' },
			{ indexed: true, internalType: 'address', name: 'to', type: 'address' },
			{ indexed: true, internalType: 'uint256', name: 'tokenId', type: 'uint256' }
		],
		name: 'Transfer',
		type: 'event'
	},
	{ inputs: [{ internalType: 'address', name: 'minter', type: 'address' }], name: 'addMinter', outputs: [], stateMutability: 'nonpayable', type: 'function' },
	{
		inputs: [
			{ internalType: 'address', name: 'to', type: 'address' },
			{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }
		],
		name: 'approve',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'address', name: 'owner', type: 'address' }],
		name: 'balanceOf',
		outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
		name: 'getApproved',
		outputs: [{ internalType: 'address', name: '', type: 'address' }],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{ internalType: 'address', name: 'owner', type: 'address' },
			{ internalType: 'address', name: 'operator', type: 'address' }
		],
		name: 'isApprovedForAll',
		outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
		stateMutability: 'view',
		type: 'function'
	},
	{ inputs: [], name: 'name', outputs: [{ internalType: 'string', name: '', type: 'string' }], stateMutability: 'view', type: 'function' },
	{ inputs: [], name: 'owner', outputs: [{ internalType: 'address', name: '', type: 'address' }], stateMutability: 'view', type: 'function' },
	{
		inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
		name: 'ownerOf',
		outputs: [{ internalType: 'address', name: '', type: 'address' }],
		stateMutability: 'view',
		type: 'function'
	},
	{ inputs: [{ internalType: 'address', name: 'minter', type: 'address' }], name: 'removeMinter', outputs: [], stateMutability: 'nonpayable', type: 'function' },
	{ inputs: [], name: 'renounceOwnership', outputs: [], stateMutability: 'nonpayable', type: 'function' },
	{
		inputs: [
			{ internalType: 'address', name: 'to', type: 'address' },
			{ internalType: 'uint256', name: 'tokenId', type: 'uint256' },
			{ internalType: 'string', name: 'uri', type: 'string' }
		],
		name: 'safeMint',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{ internalType: 'address', name: 'from', type: 'address' },
			{ internalType: 'address', name: 'to', type: 'address' },
			{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }
		],
		name: 'safeTransferFrom',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{ internalType: 'address', name: 'from', type: 'address' },
			{ internalType: 'address', name: 'to', type: 'address' },
			{ internalType: 'uint256', name: 'tokenId', type: 'uint256' },
			{ internalType: 'bytes', name: 'data', type: 'bytes' }
		],
		name: 'safeTransferFrom',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{ internalType: 'address', name: 'operator', type: 'address' },
			{ internalType: 'bool', name: 'approved', type: 'bool' }
		],
		name: 'setApprovalForAll',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'bytes4', name: 'interfaceId', type: 'bytes4' }],
		name: 'supportsInterface',
		outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
		stateMutability: 'view',
		type: 'function'
	},
	{ inputs: [], name: 'symbol', outputs: [{ internalType: 'string', name: '', type: 'string' }], stateMutability: 'view', type: 'function' },
	{
		inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
		name: 'tokenURI',
		outputs: [{ internalType: 'string', name: '', type: 'string' }],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{ internalType: 'address', name: 'from', type: 'address' },
			{ internalType: 'address', name: 'to', type: 'address' },
			{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }
		],
		name: 'transferFrom',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{ inputs: [{ internalType: 'address', name: 'newOwner', type: 'address' }], name: 'transferOwnership', outputs: [], stateMutability: 'nonpayable', type: 'function' }
]
