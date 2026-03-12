import React from "react";
import Image from "next/image";

const WhyShouldBuyEthereumTurkey = ({
  purpose = "Buy",
}: {
  purpose?: string;
}) => {
  return (
    <section className="container relative text-gray-300 p-6 md:p-20  selection:bg-[#7a6431] selection:text-white">
      <div className="absolute w-full  h-full top-0 left-0">
        <div className=" absolute top-[12%] left-[-3%] w-[55px] h-[50px] bg-gradient-to-b from-[#353C45] via-[#181A20] to-[#010101] rounded-full blur-[1px] particle-move-1"></div>
        <div className=" absolute top-[43%]! w-[236px] h-[227px] rotate-[-16deg] bg-gradient-to-b from-[#353C45] via-[#181A20] to-[#010101] rounded-full blur-[10px] particle-move-2"></div>
        <div className=" absolute bottom-[7%] left-[-12.5%] w-[162px] h-[170px] rotate-[-112deg] bg-gradient-to-b from-[#353C45] via-[#181A20] to-[#010101] rounded-full blur-[5px] particle-move-3"></div>
      </div>
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="absolute -top-15 right-0 z-10">
          <div className="relative w-24 h-24 md:w-32 md:h-32 flex items-center justify-center">
            <Image
              src="/images/turkey/gold-logo-cryptocurrency.png"
              alt="Ethereum Gold Icon"
              width={650}
              height={650}
              className="absolute w-[80%] h-auto object-contain "
            />
          </div>
        </div>

        <header className="text-left mb-12">
          <h1 className="text-2xl md:text-3xl font-semibold text-white mb-4 tracking-tight">
            Why you should {purpose} Ethereum in the trustable exchange?
          </h1>
        </header>

        <div className="text-left space-y-12 text-sm md:text-base leading-relaxed">
          <article>
            <h2 className="text-left text-white font-semibold mb-4 flex items-baseline gap-2">
              1. Ethereum provides real-world applications
            </h2>
            <p className="mb-4 text-left">
              Perhaps the key ingredient to Ethereum's success is its inclusion
              of smart contracts since its inception . Way back in 2013, Vitalik
              Buterin saw the importance of providing ways for a cryptocurrency
              network to execute transactions immediately upon some agreed-upon
              conditions being met. This functionality spurred a range of
              real-world applications that extend from finance to insurance,
              healthcare, and other large sectors waiting to be disrupted. Being
              an open-source, decentralized blockchain has its advantages for
              those holding ETH tokens. As Ethereum becomes the go-to platform
              upon which developers build dApps or crypto-focused projects,
              Ethereum's network effect grows. Accordingly, the utility Ethereum
              provides is real and tangible. Other cryptocurrencies struggle
              with this concept. While other cryptocurrencies do possess
              currency-like features, decentralized finance and the real-world
              applications that Ethereum has unlocked is a game changer in so
              many respects. The fact that Ethereum powers an incredible number
              of important, high-profile crypto projects right now leads
              investors to the idea that owning the basic building blocks of the
              cryptocurrency ecosystem is a good idea. Indeed, that's a hard
              concept to argue against.
            </p>
          </article>

          {/* Section 2 */}
          <article>
            <h2 className="text-white font-semibold mb-4 flex items-baseline gap-2">
              2. Ethereum will be (more) green very shortly
            </h2>
            <p className="mb-4">
              Perhaps one of the biggest arguments against cryptocurrency
              ownership or acceptance as of late is the sheer amount of energy
              required to power these blockchain networks. Even one of the most
              bullish influencers in the crypto world, Elon Musk, took to
              Twitter to push for change on this issue. Ethereum's rise as one
              of the earliest cryptocurrencies meant a proof-of-work crypto
              mining model was necessary. Miners, or those verifying
              transactions across the blockchain, needed to be rewarded for
              doing so. After all, there are costs to adding the computing power
              necessary to make a network to begin with. However, with the
              crypto world having seemingly evolved to near-ubiquitous status
              among investors, Ethereum looks to change its ways. The
              cryptocurrency network announced an Ethereum Improvement Proposal
              3554 (or EIP-3554, for short) to switch to a proof-of-stake model.
              By allowing Ethereum users to stake their existing Ethereum tokens
              to verify transactions, a significant energy reduction is seen
              across the blockchain. Those who stake their tokens will be
              rewarded in a similar way (via more ETH tokens). However, the
              amount of energy consumed across the blockchain will drop
              dramatically, a good thing for those looking to make passive
              income from their holdings without putting up the capital for
              mining rigs and handling the ongoing power costs associated with
              mining. The total energy reduction across the Ethereum network is
              estimated by the Ethereum foundation to be roughly 99.95%. This
              move is expected to vastly improve the social costs of crypto
              mining (and indirectly, crypto ownership). Those looking to own a
              greener, leaner cryptocurrency may start shifting toward mega-cap
              Ethereum as the primary choice over Bitcoin for this reason alone.
            </p>
          </article>

          <article>
            <h2 className="text-white font-semibold mb-4 flex items-baseline gap-2">
              3. Ethereum powers the NFT world
            </h2>
            <p>
              Perhaps the biggest buzzword in the crypto world right now is NFT
              (non-fungible token). NFTs rose to popularity over the past year,
              due to the rapid rise in the valuations of these digital assets.
              Famously, a non-fungible token was sold earlier this year for a
              whopping $69 million. These sorts of price tags tend to invite
              speculators to the party quickly. As it happens, Ethereum powers
              some of the biggest and most well-known NFT marketplaces right
              now. Among these, opensea.io has seen incredible volume of late.
              NFT investors appear to like the flexibility of using Ethereum to
              trade their artwork. However, other cryptocurrencies such as
              Solana (SOL -10.60%) are popping up as competitors in the race for
              NFT market share. Will Ethereum be able to crowd out the
              competition in these growing crypto markets? Time will tell.
              However, investors looking to bet on the biggest and most robust
              ecosystem certainly have their fair share of reasons to consider
              Ethereum right now.
            </p>
          </article>
        </div>
        <div className="fixed top-1/2 right-10 w-64 h-64 bg-black/40 rounded-full blur-3xl -z-10 pointer-events-none" />
      </div>
    </section>
  );
};

export default WhyShouldBuyEthereumTurkey;
