import React, { useState, useEffect } from "react";
import Web3 from "web3";
import hotelTokenABI from "./hotelTokenABI"; // 确保该文件的导出格式正确
import hotelBookingABI from "./hotelBookingABI"; // 确保该文件的导出格式正确

const hotelTokenAddress = "0x7c01a66a51FA9a5e126D0950717e8d873da50d03"; // HotelToken合约地址
const hotelBookingAddress = "0x5e548731fB78433dc14958b7B8a0e896f7ffB17C"; // HotelBooking合约地址
const RATE = 1000; // 兑换比例：1 ETH = 1000 代币

export default function App() {
    const [account, setAccount] = useState("");
    const [rooms, setRooms] = useState([]);
    const [tokenBalance, setTokenBalance] = useState(0);
    const [web3, setWeb3] = useState(null);

    useEffect(() => {
    async function loadBlockchainData() {
        // 检查是否安装了 MetaMask 或其他以太坊钱包
        if (typeof window.ethereum !== "undefined") {
            const web3Instance = new Web3(window.ethereum);
            setWeb3(web3Instance);

            try {
                // 请求用户授权
                const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
                setAccount(accounts[0]);

                // 初始化合约
                const tokenContract = new web3Instance.eth.Contract(hotelTokenABI, hotelTokenAddress);
                const bookingContract = new web3Instance.eth.Contract(hotelBookingABI, hotelBookingAddress);

                // 获取用户的代币余额
                const balance = await tokenContract.methods.balanceOf(accounts[0]).call();
                setTokenBalance(web3Instance.utils.fromWei(balance, "ether"));

                // 获取所有房间信息
                const fetchedRooms = await bookingContract.methods.getAllRooms().call();
                setRooms(fetchedRooms);

                console.log("账户:", accounts[0]);
                console.log("代币余额:", balance);
                console.log("房间信息:", fetchedRooms);
                
            } catch (error) {
                console.error("加载区块链数据时出错:", error);
            }

            // 监听账户或网络更改
            window.ethereum.on("accountsChanged", (accounts) => {
                if (accounts.length > 0) {
                    setAccount(accounts[0]);
                    loadBlockchainData(); // 重新加载数据
                } else {
                    setAccount(""); // 用户没有连接任何账户
                }
            });

            window.ethereum.on("chainChanged", (chainId) => {
                // 当链 ID 变化时重新加载页面
                window.location.reload();
            });
            
        } else {
            alert("请安装 MetaMask 扩展！");
        }
    }

    loadBlockchainData();
}, []); // 确保依赖项为空数组，除非你想在特定状态更新时重新加载数据


    const buyTokens = async () => {
        if (!web3) {
            alert("Web3 未加载，请确保连接了 MetaMask！");
            return;
        }

        try {
            await web3.eth.sendTransaction({
                from: account,
                to: hotelTokenAddress,
                value: web3.utils.toWei("0.1", "ether"), // 可根据需要调整ETH金额
            });
            alert("代币购买成功！");
        } catch (error) {
            console.error("购买代币时出错:", error);
        }
    };

    const bookRandomRoom = async () => {
        if (!web3) {
            alert("Web3 未加载，请确保连接了 MetaMask！");
            return;
        }

        try {
            const availableRooms = rooms.filter(room => room.isAvailable);
            if (availableRooms.length === 0) {
                alert("没有空房间！");
                return;
            }

            const randomRoom = availableRooms[Math.floor(Math.random() * availableRooms.length)];
            const checkInDate = Math.floor(Date.now() / 1000);
            const checkOutDate = checkInDate + 86400; // 住一天

            const bookingContract = new web3.eth.Contract(hotelBookingABI, hotelBookingAddress);
            await bookingContract.methods.bookRoomByCategory(randomRoom.category, checkInDate, checkOutDate).send({ from: account });
            alert(`成功订房，房间号: ${randomRoom.id}`);
        } catch (error) {
            console.error("订房时出错:", error);
        }
    };

    return (
        <div className="App">
            <h1>酒店预订DApp</h1>
            <p>连接的账户: {account}</p>
            <p>代币余额: {tokenBalance} HTK</p>
            
            <button onClick={buyTokens}>使用ETH购买代币</button>
            <button onClick={bookRandomRoom}>预订随机空房</button>
            
            <div className="rooms">
                {rooms.length > 0 ? (
                    rooms.map(room => (
                        <div key={room.id} className="room-card">
                            <h2>{room.category}</h2>
                            <p>每晚价格: {web3.utils.fromWei(room.pricePerNight, "ether")} HTK</p>
                            <p>房间状态: {room.isAvailable ? "空闲" : "已预订"}</p>
                        </div>
                    ))
                ) : (
                    <p>暂无房间信息</p>
                )}
            </div>
        </div>
    );
}
