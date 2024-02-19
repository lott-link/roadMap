import { useState, useEffect } from 'react'
import styles from './Home.module.css'
import { particleOptions } from './particle';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function Home() {
  const [show,setShow] = useState({0:true,1:false,2:false,3:false})
  const [closing,setClosing] = useState({0:false,1:false,2:false,3:false})
  const [darkMode,setDarkMode] = useState(false)
  const handleShow = (index)=>{
    if(show[index]){
      setClosing({...closing,[index]:true})
      setTimeout(()=>{
        setShow({...show,[index]:false})
      },130)
    }
    else{
      setShow({0:false,1:false,2:false,3:false,[index]:true})
      setClosing({...closing,[index]:false})
    }
  }

  const [ init, setInit ] = useState(false);

  useEffect(() => {
      initParticlesEngine(async (engine) => {
          await loadSlim(engine);
      }).then(() => {
          setInit(true);
      });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.jumbotron}>
      { init && <Particles
            id="tsparticles"
            options={particleOptions}/>
          }
       
        <nav className={`${styles.nav} ${darkMode && styles.navDark }`}>
          <div className={styles.navIcon}><img src='/lottlinkGreen.svg' alt="" /></div>
          <div className={styles.navItems}>
            <div><a href="https://github.com/lott-link/" target="_blank" rel="noreferrer"><div>Github</div></a></div>
            <div><a href="http://docs.lott.link" target="_blank" rel="noreferrer"><div>Doc</div></a></div>
            <div><a href="#roadmap"><div>Road Map</div></a></div>
            <div className={styles.dappBtn}><a href="https://dapp.lott.link" target="_blank" rel="noreferrer"><div>Dapp</div></a></div>
            <div className={styles.switchContainer}>
              <label className={styles.switch}>
                <input type="checkbox" onChange={()=>setDarkMode(!darkMode)} />
                <span className={styles.slider}></span>
              </label>
            </div>
          </div>
        </nav>
        <div className={styles.jumboText}>
          <h1>
              <span>A New Generation Of NFTs</span>
              <br />
              <span>Your reputation within a proper NFT</span> 
          </h1>
        </div>
        <div className={styles.jumboSearch}>
          <div className={styles.jumboPara}>
            <div>
              <div>We are HERE.</div>
              <div>on The Most Decentralized Chains</div>
              <div>with Open source Solidity Contracts V1</div>
              <div>with the most secure open Identity</div>
              <div>Governance by DAOs</div>
            </div>
            <div>
              <div>WE Give U</div>  
              <div>1000 Dai or 10.000.000 lott</div> 
              <div>If you find any hackable misstake in test contract</div> 
              <div>on rinkeby : address@rinkeby </div> 
            </div>
          </div>
          <div className={styles.jumboButtons}>
            <button><a href="https://docs.lott.link/" target="_blank" rel="noreferrer">see Our Doc</a></button>
            <button><a href="https://discord.gg/FmwJ2nRv36" target="_blank" rel="noreferrer">join Our TEAM</a></button>
          </div>
        </div>
      </div>
      <div className={`${styles.mainCards} ${darkMode && styles.mainCardsDark}`}>
          <div className={`${styles.mainCardsHeader} ${darkMode && styles.mainCardsHeaderDark}`}>
             <h2><span className={!darkMode ? styles.span : styles.spanDark}>M</span>ake money with web3</h2>
          </div>
          <div className={styles.mainCardsContainer}>
            {/* artist card */}
            <div className={`${styles.mainCardsCard} ${darkMode && styles.mainCardsCardDark}`}>
              <div className={styles.cardIconContainer}>
                <div className={styles.cardArtistIcon}></div>
                <div className={styles.cardTitle}>Artists</div>
              </div>
              <div className={styles.cardText}>
              You can publish your art on an interactive NFT. 
              It is like your art printed on a lottery card in a massive number.
              At first, we will store your work on a licence contract with your
              setup of rarity and price, and for each sale, you will
              receive money on your ID card.you can know more about it and
              ask for an invitation from other artist on Discord.
              </div>
              <div className={styles.discord}><a href="https://discord.gg/FmwJ2nRv36" target="_blank" rel="noreferrer">
                  <img src="/discord.svg" alt="" />
                </a> </div>
            </div>
            {/* developer card */}
            <div className={`${styles.mainCardsCard} ${darkMode && styles.mainCardsCardDark}`}>
              <div className={styles.cardIconContainer}>
                <div className={styles.cardBackDeveloperIcon}></div>
                <div className={styles.cardTitle}>Back End Developers</div>
              </div>
              <div className={styles.cardText}>
              we provide open-source contracts related to 
              each other, which means you can make your
               contracts related to the ecosystem. You must 
               follow some simple rules to benefit everybody 
               in the system. after testing your contract, you 
               will be part of DAO, and your contract will change 
               on the DAO decision. You can benefit from 
               the P2P marketing strategy.
              </div>
              <div className={styles.discord}><a href="https://discord.gg/FmwJ2nRv36" target="_blank" rel="noreferrer">
                  <img src="/discord.svg" alt="" />
                </a></div>
            </div>
            {/* developer card */}
            <div className={`${styles.mainCardsCard} ${darkMode && styles.mainCardsCardDark}`}>
              <div className={styles.cardIconContainer}>
                <div className={styles.cardDeveloperIcon}></div>
                <div className={styles.cardTitle}>Front End Developers</div>
              </div>
              <div className={styles.cardText}>
              in P2P marketing strategy, we have a share of 
              sales for DAPP. So you can develop a different
               and enjoyable DAPP for each of our contracts 
               and get your share. It is all about Your innovation
                on how user experience can improve when other 
                users use your DAPP instead of other DAPPs. If 
                you already have a site, you can use iframe 
                Dapp on your website and be part of the sales team. 
              </div>
              <div className={styles.discord}><a href="https://discord.gg/FmwJ2nRv36" target="_blank" rel="noreferrer">
                  <img src="/discord.svg" alt="" />
                </a></div>
            </div>
            {/* introducer card */}
            <div className={`${styles.mainCardsCard} ${darkMode && styles.mainCardsCardDark}`}>
              <div className={styles.cardIconContainer}>
                <div className={styles.cardIntroducerIcon}></div>
                <div className={styles.cardTitle}>Introducers</div>
              </div>
              <div className={styles.cardText}>
              Introduce the web3 products, and get 
              your commission from selling different 
              products on the ecosystem. It is easy. 
              You should get your referral link and 
              send it to your customer. You can invite 
              other people and manage your Own Sales 
              team if you sell well. But at first, 
              you must join some other team leader. 
              find him or her in Discord.  
              </div>
              <div className={styles.discord}>
                <a href="https://discord.gg/FmwJ2nRv36" target="_blank" rel="noreferrer">
                  <img src="/discord.svg" alt="" />
                </a>
              </div>
            </div>
          </div>
      </div>
      <div className={`${styles.qaContainer} ${darkMode && styles.qaContainerDark}`}>
        <div className={`${styles.qaBg} ${darkMode && styles.qaBgDark}`}>
          <div className={styles.dots1}></div>
          <div className={styles.dots2}></div>
        </div>
        <div className={`${styles.qaHeader} ${darkMode && styles.qaHeaderDark}`}>
          <h2><span className={!darkMode ? styles.span : styles.spanDark}>Q</span> & A</h2>
        </div>
        <div className={`${styles.qaMain} ${darkMode && styles.qaMainDark}`}>
          {
          qaObj.map((acc,index)=>(
          <div className={styles.accordion} key={index}>
            <div className={`${styles.accordionHeader} ${darkMode && (show[index] ? styles.accordionHeaderDarkOpen : styles.accordionHeaderDark)}`} onClick={()=>handleShow(index)}>
              <div className={`${styles.accordionHeaderCh1} ${darkMode && (show[index] ? "" : styles.accordionHeaderCh1Dark)}`}>{acc.question}</div>
              <div className={styles.accordionHeaderCh2}>{show[index] ? "-" : "+"}</div>
            </div>
            {show[index] &&
            <div className={`${styles.accordionBody} ${darkMode && styles.accordionBodyDark} ${show[index] && styles.animationShow } ${closing[index] && styles.animationHide}`}>
              {acc.answer}
            </div>
            }
          </div>))
          }
        </div>
      </div>
      <div className={`${styles.roadMapContainer} ${darkMode && styles.roadMapContainerDark}`} id='roadmap'>
        <div className={`${styles.roadMapHeader} ${darkMode && styles.roadMapHeaderDark}`}>
          <h2><span className={!darkMode ? styles.span : styles.spanDark}>Ro</span>ad Map</h2>
        </div>
        <div className={styles.timelineContainer}>
          <div className={styles.timelineLine}></div>
          {
            timelineObj.map((card,index)=>(
              <div key={index} className={`${styles.timelineCardContainer} ${(card.index%2)===1 ? styles.paddingLeft : styles.paddingRight}`} 
              >
                <div className={`${styles.timelineCard} ${darkMode && styles.timelineCardDark}`}>
                  <div className={`${styles.timelineCardText} ${darkMode && styles.timelineCardTextDark}`}>
                  {card.text}
                  {index=== 4 && <div className='text-white text-center rounded-md py-1 m-1 bg-blue-600 w-1/2 mx-auto z-50 cursor-pointer'><a href='http://powernft.lott.link' target="_blank" rel="noreferrer">PowerNFT</a></div>}
                  {index=== 5 && <div className='text-white text-center rounded-md py-1 m-1 bg-blue-600 w-1/2 mx-auto z-50 cursor-pointer'><a href='http://chanceroom.lott.link' target="_blank" rel="noreferrer">Chance Room</a></div>}
                  </div>
                </div>
                <div className={`${(card.index%2)===1 ? styles.marginRight : styles.marginLeft}`}>
                  <div className={`${styles.timelineLineText}`}>{card.title}</div>
                  <div className={styles.blueLine}></div>
                </div>
                <div className={`${styles.timelineCardNumeber} ${styles["num"+(card.index)]}`}></div>
              </div>
            ))
          }
        </div>
      </div>
      <div className={`${styles.footerContainer} ${darkMode && styles.footerContainerDark}`}>
          <img src="/lottlink.svg" alt="" />
          <img src="/chainlink.svg" alt="" />
          <img src="/avalanche.svg" alt="" />
          <img src="/openzeppelin.svg" alt="" />
          <img src="/moralis.svg" alt="" />
          <img src="/polygon.svg" alt="" />
          <img src="/ethereum.svg" alt="" />
      </div>
    </div>
  )
}
const timelineObj = [
  {index:1,title:"Public NFT Minter",text:"It is a simple ERC721 contract that anyone can mint their NFT in it. The minter can automatically produce your Token URI, or you put it in manually."},
  {index:2,title:"Chance Run VI",text:"Everyone can create a Chance-room with a seat or time limit with a pre-set entry price and commission. If you want to join the Chance-room, you must buy a seat, and at the end of the room (when all the seat sell or time ends), a random number gets from the VRF Chainlink, and one of the seat owners win (1-commission) of all funds, the commission will send to the creator of the room."},
  {index:3,title:"Cross-Chain-NFT V1",text:"It is the first bridge for NFT (ERC721) that can lock the NFT and mint its clone on other networks. The clone NFT can release the main NFT whenever they want. The cross-chain transaction cost is calculated automatically."},
  {index:4,title:"IDCard Upgradeable",text:"ID Card is an interactive NFT that acts as an account. It has a unique username for each NFT, and the owner can withdraw the activity reward. It also has off-chain info that can be used for account profiles or web UI. All of the account activity will be stored in this contract, so it is easier for users to change their wallet accounts without fear of losing their historical action just by transferring this NFT to another address. It also works as an open-source on-chain DB that anyone quickly finds each other with a username instead of an address."},
  {index:5,title:"Lottery V1",text:"Lifetime NFT lottery is built with interactive NFT. You can buy a card with a value, and in each round, your card has a chance of winning. If your card wins, multiply your card value by round Power and add to your NFT withdraw the balance. If you have an ID Card, you can have a special link to invite other people to buy cards and get a commission for each sale on your ID Card."},
  {index:6,title:"Chance Room V2",text:"in this version, the contract can lock ERC20 and ERC721 as collateral. It means that the room's creator put an NFT or Token as collateral, and one of the participants in the room wins the collateral randomly."},
  {index:7,title:"Lottery V2",text:"in this version, we add a collectional art license to PowerNFT, which mean that artist can publish their collection in this contract and add some value to the cart. It may have some extra game feature about burning a collection card or forgetting about the prize and growing the value of community collection values."},
  {index:8,title:"Lott token AirDrop",text:"in this step, we will airdrop Lott token to the community and tell them about tokenomics. We will have priority for the active user in presell tokens. So be better to be more active to have more chances of getting the LOTT token."},
  {index:9,title:"DAO contracts",text:"in this step, we transfer all contracts ownership to the DAO contract. It means that all communities have the power of voting in the system with the Lott token. In this version, the owner of the Lott token can decide about the more fouth contract they want to buy, and the Lott token can only mint with general satisfaction."},
  {index:10,title:"Lottery V3",text:"in this version, the card has one chance of winning in one round, and we add liquidity to the lottery game, so there is a jackpot in this game with the chance of winning billion of dollars. It is more similar to a lottery card in the real world."}]

const qaObj = [
  {question:"What is interactive NFT?",answer:"It is an NFT with some function on it that only the owner of NFT can call these functions. So your NFT goes live, and you can interact with it."},
  {question:"What is an ID CARD?",answer:"It is a unique name that attaches to interactive NFT. You can think of it as a mail Address. It helps other people find us more accessible than a weird wallet address. You can transfer your ID CART to any wallet address with no ID CART, which means each wallet address can have only one ID CARD. After creating your ID CARD, all your income will be stored in this unique NFT, and the owner of ID CARD can withdraw the balance of the ID CARD."},
  {question:"What is P2P marketing?",answer:"Peer-to-peer (P2P) marketing encourages customers to engage other customers by advocating a product or service to friends or associates."},
  {question:"What is Lott.Link?",answer:"It is just an interface for our world. All of our smart contracts are open source and deployed on EVMs. We, Will, governance our contracts with DAO."},
  {question:"Who are we?",answer:"We are some incredible developers who are building the decentralized world's future. We warmly welcome cool people that want to join us."},
  {question:"What do we do?",answer:"We developed smart contracts that connect and make an ecosystem for artists, content providers, front-end developers, EVM developers, and marketers who share their participants."},
  {question:"What is our product?",answer:"We publish different kinds of interactive NFT with different features and content. Our P2P marketing strategy will provide a decentralized economic ecosystem for all participants. Our first focus is on publishing NFT-Lottery distributed in the P2P way, and we welcome new ideas that want to publish NFT with P2P distribution."},
]
