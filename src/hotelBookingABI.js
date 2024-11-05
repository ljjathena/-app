const hotelBookingABI = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_token",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "roomId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "guest",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint8",
				"name": "rating",
				"type": "uint8"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "comment",
				"type": "string"
			}
		],
		"name": "ReviewAdded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "roomId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "category",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "pricePerNight",
				"type": "uint256"
			}
		],
		"name": "RoomAdded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "roomId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "isAvailable",
				"type": "bool"
			}
		],
		"name": "RoomAvailabilityChanged",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "roomId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "guest",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "checkInDate",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "checkOutDate",
				"type": "uint256"
			}
		],
		"name": "RoomBooked",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "TokensWithdrawn",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "roomId",
				"type": "uint256"
			},
			{
				"internalType": "uint8",
				"name": "rating",
				"type": "uint8"
			},
			{
				"internalType": "string",
				"name": "comment",
				"type": "string"
			}
		],
		"name": "addReview",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "enum HotelBooking.RoomCategory",
				"name": "category",
				"type": "uint8"
			},
			{
				"internalType": "uint256",
				"name": "pricePerNight",
				"type": "uint256"
			}
		],
		"name": "addRoom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "enum HotelBooking.RoomCategory",
				"name": "category",
				"type": "uint8"
			},
			{
				"internalType": "uint256",
				"name": "checkInDate",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "checkOutDate",
				"type": "uint256"
			}
		],
		"name": "bookRoomByCategory",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "buyTokens",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAllRooms",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "enum HotelBooking.RoomCategory",
						"name": "category",
						"type": "uint8"
					},
					{
						"internalType": "uint256",
						"name": "pricePerNight",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "isAvailable",
						"type": "bool"
					},
					{
						"components": [
							{
								"internalType": "address",
								"name": "guest",
								"type": "address"
							},
							{
								"internalType": "uint8",
								"name": "rating",
								"type": "uint8"
							},
							{
								"internalType": "string",
								"name": "comment",
								"type": "string"
							}
						],
						"internalType": "struct HotelBooking.Review[]",
						"name": "reviews",
						"type": "tuple[]"
					}
				],
				"internalType": "struct HotelBooking.Room[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "roomId",
				"type": "uint256"
			}
		],
		"name": "getBookingDetails",
		"outputs": [
			{
				"internalType": "address",
				"name": "guest",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "checkInDate",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "checkOutDate",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "category",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "roomId",
				"type": "uint256"
			}
		],
		"name": "getRoomDetails",
		"outputs": [
			{
				"internalType": "string",
				"name": "category",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "pricePerNight",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "isAvailable",
				"type": "bool"
			},
			{
				"components": [
					{
						"internalType": "address",
						"name": "guest",
						"type": "address"
					},
					{
						"internalType": "uint8",
						"name": "rating",
						"type": "uint8"
					},
					{
						"internalType": "string",
						"name": "comment",
						"type": "string"
					}
				],
				"internalType": "struct HotelBooking.Review[]",
				"name": "reviews",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "roomBookings",
		"outputs": [
			{
				"internalType": "address",
				"name": "guest",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "roomId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "checkInDate",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "checkOutDate",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "roomCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "rooms",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "enum HotelBooking.RoomCategory",
				"name": "category",
				"type": "uint8"
			},
			{
				"internalType": "uint256",
				"name": "pricePerNight",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "isAvailable",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "roomId",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "isAvailable",
				"type": "bool"
			}
		],
		"name": "setRoomAvailability",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "token",
		"outputs": [
			{
				"internalType": "contract IERC20",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "tokenContractAddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "withdrawTokens",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]
export default hotelBookingABI;