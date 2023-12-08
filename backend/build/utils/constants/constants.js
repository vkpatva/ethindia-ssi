"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsumerJSON = exports.RECORDS_PER_PAGE = exports.REGEXP = void 0;
// Reg ex list
exports.REGEXP = {
    DATE_FORMAT: /^([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))$/,
    DATE_TIME_FORMAT: /^\d\d\d\d-(0?[1-9]|1[0-2])-(0?[1-9]|[12][0-9]|3[01]) (00|0[1-9]|1[0-9]|2[0-3]):([0-9]|[0-5][0-9]):([0-9]|[0-5][0-9])$/,
    PASSWORD_REGEXP: /^[\S\s]{6,50}$/,
    ALPHA_NUMERIC_REGEXP: /^[A-Za-z0-9 ]*$/,
    ALPHABETS_REGEXP: /^[A-Za-z ]*$/,
    EMAIL_ADDRESS_REGEXP: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    URL: /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/
};
exports.RECORDS_PER_PAGE = 10;
exports.ConsumerJSON = [
    {
        inputs: [
            {
                internalType: 'address',
                name: 'router',
                type: 'address'
            },
            {
                internalType: 'address',
                name: '_streamToken',
                type: 'address'
            }
        ],
        stateMutability: 'nonpayable',
        type: 'constructor'
    },
    {
        inputs: [],
        name: 'EmptyArgs',
        type: 'error'
    },
    {
        inputs: [],
        name: 'EmptySecrets',
        type: 'error'
    },
    {
        inputs: [],
        name: 'EmptySource',
        type: 'error'
    },
    {
        inputs: [],
        name: 'NoInlineSecrets',
        type: 'error'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'sender',
                type: 'address'
            }
        ],
        name: 'NotWhitelisted',
        type: 'error'
    },
    {
        inputs: [],
        name: 'OnlyRouterCanFulfill',
        type: 'error'
    },
    {
        inputs: [
            {
                internalType: 'bytes32',
                name: 'requestId',
                type: 'bytes32'
            }
        ],
        name: 'UnexpectedRequestID',
        type: 'error'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'artist',
                type: 'address'
            }
        ],
        name: 'ArtistRemoved',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'artist',
                type: 'address'
            }
        ],
        name: 'ArtistWhitelisted',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'bytes32',
                name: 'requestId',
                type: 'bytes32'
            },
            {
                indexed: false,
                internalType: 'string',
                name: 'songId',
                type: 'string'
            }
        ],
        name: 'DataRequestMade',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'bytes32',
                name: 'requestId',
                type: 'bytes32'
            },
            {
                indexed: false,
                internalType: 'bytes',
                name: 'response',
                type: 'bytes'
            },
            {
                indexed: false,
                internalType: 'bytes',
                name: 'err',
                type: 'bytes'
            }
        ],
        name: 'DataResponse',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'address',
                name: 'artist',
                type: 'address'
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'tokensMinted',
                type: 'uint256'
            },
            {
                indexed: false,
                internalType: 'string',
                name: 'songId',
                type: 'string'
            }
        ],
        name: 'MintStreamToken',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'from',
                type: 'address'
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'to',
                type: 'address'
            }
        ],
        name: 'OwnershipTransferRequested',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'from',
                type: 'address'
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'to',
                type: 'address'
            }
        ],
        name: 'OwnershipTransferred',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'bytes32',
                name: 'id',
                type: 'bytes32'
            }
        ],
        name: 'RequestFulfilled',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'bytes32',
                name: 'id',
                type: 'bytes32'
            }
        ],
        name: 'RequestSent',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'address',
                name: 'artist',
                type: 'address'
            },
            {
                indexed: false,
                internalType: 'string',
                name: 'songId',
                type: 'string'
            }
        ],
        name: 'SongAdded',
        type: 'event'
    },
    {
        inputs: [],
        name: 'acceptOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'string',
                name: 'songId',
                type: 'string'
            },
            {
                internalType: 'address',
                name: 'artistAddress',
                type: 'address'
            }
        ],
        name: 'addSong',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '_address',
                type: 'address'
            }
        ],
        name: 'addWhitelistedAddress',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'newStreamToken',
                type: 'address'
            }
        ],
        name: 'changeStreamToken',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'string',
                name: 'songId',
                type: 'string'
            }
        ],
        name: 'getPaid',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'bytes32',
                name: 'requestId',
                type: 'bytes32'
            },
            {
                internalType: 'bytes',
                name: 'response',
                type: 'bytes'
            },
            {
                internalType: 'bytes',
                name: 'err',
                type: 'bytes'
            }
        ],
        name: 'handleOracleFulfillment',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [],
        name: 'owner',
        outputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '_address',
                type: 'address'
            }
        ],
        name: 'removeWhitelistedAddress',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'bytes32',
                name: '',
                type: 'bytes32'
            }
        ],
        name: 'requestIdToSongId',
        outputs: [
            {
                internalType: 'string',
                name: '',
                type: 'string'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'bytes32',
                name: '',
                type: 'bytes32'
            }
        ],
        name: 'responses',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'string',
                name: 'source',
                type: 'string'
            },
            {
                internalType: 'bytes',
                name: 'encryptedSecretsUrls',
                type: 'bytes'
            },
            {
                internalType: 'uint8',
                name: 'donHostedSecretsSlotID',
                type: 'uint8'
            },
            {
                internalType: 'uint64',
                name: 'donHostedSecretsVersion',
                type: 'uint64'
            },
            {
                internalType: 'string[]',
                name: 'args',
                type: 'string[]'
            },
            {
                internalType: 'bytes[]',
                name: 'bytesArgs',
                type: 'bytes[]'
            },
            {
                internalType: 'uint64',
                name: 'subscriptionId',
                type: 'uint64'
            },
            {
                internalType: 'uint32',
                name: 'gasLimit',
                type: 'uint32'
            },
            {
                internalType: 'bytes32',
                name: 'donID',
                type: 'bytes32'
            }
        ],
        name: 'sendRequest',
        outputs: [
            {
                internalType: 'bytes32',
                name: 'requestId',
                type: 'bytes32'
            }
        ],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'bytes',
                name: 'request',
                type: 'bytes'
            },
            {
                internalType: 'uint64',
                name: 'subscriptionId',
                type: 'uint64'
            },
            {
                internalType: 'uint32',
                name: 'gasLimit',
                type: 'uint32'
            },
            {
                internalType: 'bytes32',
                name: 'donID',
                type: 'bytes32'
            }
        ],
        name: 'sendRequestCBOR',
        outputs: [
            {
                internalType: 'bytes32',
                name: 'requestId',
                type: 'bytes32'
            }
        ],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'string',
                name: '',
                type: 'string'
            }
        ],
        name: 'songIdTotalPaid',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'string',
                name: '',
                type: 'string'
            }
        ],
        name: 'songToArtist',
        outputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'streamToken',
        outputs: [
            {
                internalType: 'contract StreamToken',
                name: '',
                type: 'address'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'string',
                name: '',
                type: 'string'
            }
        ],
        name: 'totalPlays',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'to',
                type: 'address'
            }
        ],
        name: 'transferOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address'
            }
        ],
        name: 'whitelistedAddresses',
        outputs: [
            {
                internalType: 'bool',
                name: '',
                type: 'bool'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    }
];
//# sourceMappingURL=constants.js.map