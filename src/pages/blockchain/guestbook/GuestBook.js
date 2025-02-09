import { ethers, BrowserProvider, parseEther, formatEther} from "ethers";
import React, { useEffect, useState } from "react";
import './guestbook.css';

const CONTRACT_ADDRESS = "0xF1c4f7CC01F9030d090F8F671063F19BEeE20B74";
const ABI = [
    "function leaveMessage(string _message) public",
    "function getMessages() public view returns (tuple(address sender, string message, uint256 timestamp)[])", 
    "event NewMessage(address indexed sender, string message, uint256 timestamp)"
  ];
  

export default function App() {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    loadMessages();
  }, []);

  const loadMessages = async () => {
    try {
        setLoading(true);

        const provider = new ethers.JsonRpcProvider("https://eth-sepolia.g.alchemy.com/v2/xDXR90i03JJlMg4lyngguvF7ABekfxGz");

        const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, provider);
        const msgs = await contract.getMessages();
        console.log(msgs);
        setMessages(msgs);
        setLoading(false);
    } catch (e) {
        setLoading(false);
        if (e.code === "NETWORK_ERROR") {
            setError("Network error: Unable to connect to the blockchain.");
          } else if (e.message.includes("Metamask is not installed")) {
            setError("Metamask is not installed. Please install it to use the app.");
          } else if (e.message.includes("Please connect to the Sepolia network")) {
            setError(e.message); // Utilise le message d'erreur du réseau
          } else if (e.code === "CALL_EXCEPTION") {
            setError("Error calling the contract. Please verify the contract address and ABI.");
          } else {
            console.log(e);
            setError("Unexpected error while loading messages. Please try again later.");
          }
    }
  };

  const sendMessage = async () => {
    if (typeof window.ethereum !== 'undefined') {
    try {

      
        setSending(true);
        console.log("Requesting Metamask connection...");
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        if (accounts.length === 0) {
            setError("Please connect to Metamask to send a message.");
            setSending(false);
            return;
        }
        console.log("Metamask connected.");
        console.log("Account:", accounts[0]);
    
        const provider = new BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        console.log("Signer address:", await signer.getAddress());
  
      
        const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);
  
      if (!message || message.trim() === "") {
        setError("Message cannot be empty");
        setSending(false);
        return;
      }

        const balance = await provider.getBalance(await signer.getAddress());
        console.log("Balance:", formatEther(balance));

        if (balance < parseEther("0.001")) {
          setError("You don't have enough ETH to send the message. Please add some ETH to your account. You can get some ETH from the Sepolia faucet for free.");
          setSending(false);
          return;
        }
        console.log("Sending message...");
  
        const tx = await contract.leaveMessage(message);
          
          console.log("Transaction sent:", tx.hash);

          await tx.wait();
          console.log("Transaction confirmed");
          setMessage("");
      
      loadMessages();
    } catch (e) {
      console.error("Error sending message:", e);
  
      if (e.code === 4001) {
        
        setError("Transaction rejected by the user");
      } else if (e.code === "NETWORK_ERROR") {
        
        setError("Network error: Unable to connect to the blockchain.");
      } else if (e.code === "CALL_EXCEPTION") {
        
        setError("Error calling the contract. Please verify the contract address and ABI.");
      } else {
        console.log(e);
        setError("Unexpected error while sending message. Please try again later.");
      } 
    } finally {
        setSending(false);
      }
    } else {
      setError("Metamask is not installed. Please install it to use the app.");
    }
  };
  

  return (
    <div className="guestbook"> 
      <h1 className="guestbookh1">Blockchain Guestbook</h1>
      <div className="messages">
        {messages.map((msg, index) => (
          <div className="message" key={index}><div>
            <p className="sender">{msg.sender}</p>
            <p>{msg.message}</p>
            </div></div>
        ))}
      </div>
      <p className="loading">{loading && "Loading messages..."}</p>
      <form>
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
        <button onClick={(e) => {e.preventDefault(); sendMessage();} }>
            Leave Message</button>
        <p className="error">{error}</p>
        <p className="sending">{sending && "Sending message, this may take a few seconds... Please confirm the transaction in Metamask."}</p>
        
      </form>

     
    </div>
  );
}
