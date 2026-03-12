"use client";

import * as React from "react";
import { MainFooter } from "@/components/base/MainFooter";
import { MainNav } from "@/components/base/MainNav";
import { CheckIcon, CopyIcon } from "lucide-react";
import { useState } from "react";

export function OfficialWalletAddresses() {
  const [doneId, setDoneId] = useState<string | null>(null);

  const pallapayWallets: {
    network: string;
    wallets: { title: string; address: string; explorerLink: string }[];
  }[] = [
    {
      network: "Ethereum",
      wallets: [
        {
          title: "Ethereum Wallet 1",
          address: "0xdcD7d433BBfD24B68b7c07EEc5141f563181101c",
          explorerLink:
            "https://etherscan.io/address/0xdcD7d433BBfD24B68b7c07EEc5141f563181101c",
        },
        {
          title: "Ethereum Hot Wallet 1",
          address: "0x42448325f1Ec40636FC3b946Ae6885dD170e3C8b",
          explorerLink:
            "https://etherscan.io/address/0x42448325f1Ec40636FC3b946Ae6885dD170e3C8b",
        },
        {
          title: "Ethereum Internal Wallet 1",
          address: "0x930cE8113301fC26F9840d77A906AC2eE2d96EB2",
          explorerLink:
            "https://etherscan.io/address/0x930cE8113301fC26F9840d77A906AC2eE2d96EB2",
        },
        {
          title: "Ethereum Internal Wallet 2",
          address: "0xa589d64d86144ef14940f3f89d18c5d700e32d41",
          explorerLink:
            "https://etherscan.io/address/0xa589d64d86144ef14940f3f89d18c5d700e32d41",
        },
      ],
    },
    {
      network: "Tron",
      wallets: [
        {
          title: "Tron Wallet 1",
          address: "TVsKes2Nifc5SwjafSZ3Sny863otcYZ27f",
          explorerLink:
            "https://tronscan.org/#/address/TVsKes2Nifc5SwjafSZ3Sny863otcYZ27f",
        },
        {
          title: "Tron Hot Wallet 1",
          address: "TAvErAdnyu8apFtvUfqrbeZLo2yNnbTUGW",
          explorerLink:
            "https://tronscan.org/#/address/TAvErAdnyu8apFtvUfqrbeZLo2yNnbTUGW",
        },
        {
          title: "Tron Internal Wallet 1",
          address: "TRasqo23J2xAuiWMwuGQpQagBGynxtoeh9",
          explorerLink:
            "https://tronscan.org/#/address/TRasqo23J2xAuiWMwuGQpQagBGynxtoeh9",
        },
        {
          title: "Tron Internal Wallet 2",
          address: "TYvcvnH4rLUFcbzJ3KbMaqaMCAAxpdwgYz",
          explorerLink:
            "https://tronscan.org/#/address/TYvcvnH4rLUFcbzJ3KbMaqaMCAAxpdwgYz",
        },
      ],
    },
    {
      network: "BSC",
      wallets: [
        {
          title: "BSC Wallet 1",
          address: "0xdcD7d433BBfD24B68b7c07EEc5141f563181101c",
          explorerLink:
            "https://bscscan.com/address/0xdcD7d433BBfD24B68b7c07EEc5141f563181101c",
        },
        {
          title: "BSC Hot Wallet 1",
          address: "0x42448325f1Ec40636FC3b946Ae6885dD170e3C8b",
          explorerLink:
            "https://bscscan.com/address/0x42448325f1Ec40636FC3b946Ae6885dD170e3C8b",
        },
        {
          title: "BSC Internal Wallet 1",
          address: "0x930cE8113301fC26F9840d77A906AC2eE2d96EB2",
          explorerLink:
            "https://bscscan.com/address/0x930cE8113301fC26F9840d77A906AC2eE2d96EB2",
        },
        {
          title: "BSC Internal Wallet 2",
          address: "0xa589d64d86144ef14940f3f89d18c5d700e32d41",
          explorerLink:
            "https://bscscan.com/address/0xa589d64d86144ef14940f3f89d18c5d700e32d41",
        },
      ],
    },
    {
      network: "BITCOIN",
      wallets: [
        {
          title: "BTC Wallet 1",
          address: "bc1qyj39jatva2eywdlccg9v8zwhktvq6p4epnaq2r",
          explorerLink:
            "https://blockchair.com/bitcoin/address/bc1qyj39jatva2eywdlccg9v8zwhktvq6p4epnaq2r",
        },
      ],
    },
    {
      network: "DOGE",
      wallets: [
        {
          title: "Doge Wallet 1",
          address: "DDjVrHkLwAnMxoNVWGTDiXziyBUrrCfEX6",
          explorerLink:
            "https://blockchair.com/dogecoin/address/DDjVrHkLwAnMxoNVWGTDiXziyBUrrCfEX6",
        },
      ],
    },
    {
      network: "SOLANA",
      wallets: [
        {
          title: "SOL Wallet 1",
          address: "CU954sURkBcAt6oWjwTL4E5imdchQDNgFcoDL4aR3swP",
          explorerLink:
            "https://solscan.io/account/CU954sURkBcAt6oWjwTL4E5imdchQDNgFcoDL4aR3swP",
        },
      ],
    },
    {
      network: "CARDANO",
      wallets: [
        {
          title: "ADA Wallet 1",
          address:
            "addr1qyauyzlhg3cd5xq2ax9sahuzrekjf8e20j33f923xlkhk9j79mgv0m6ql84s7qkll390ehrcmdhjwn8n74k5e92gkm2sqym9qn",
          explorerLink:
            "https://cardanoscan.io/address/addr1qyauyzlhg3cd5xq2ax9sahuzrekjf8e20j33f923xlkhk9j79mgv0m6ql84s7qkll390ehrcmdhjwn8n74k5e92gkm2sqym9qn",
        },
      ],
    },
  ];
  return (
    <>
      <MainNav hasBackground={true} />
      <div className="container text-black mt-18">
        <div>
          <h2 className="text-3xl font-semibold">
            Pallapay Official Wallet Addresses
          </h2>
          <h3 className="text-base font-semibold mt-2">
            Pallapay is a licensed crypto payment gateway and exchange platform.
            The following addresses are owned and controlled by us and are used
            for customer deposits, withdrawals, and operations.
          </h3>

          <div className="mt-8 space-y-5">
            {pallapayWallets.map((pallapayWallet) => (
              <div
                key={pallapayWallet.network}
                className="px-7 py-6 rounded-md border"
              >
                <h4 className="text-xl font-semibold">
                  {pallapayWallet.network} Wallets
                </h4>
                <div className="mt-2 divide-y lg:divide-none divide-black">
                  {pallapayWallet.wallets.map((wallet) => (
                    <div className="grid lg:grid-cols-10 lg:gap-5 mt-1 pb-3 pt-1.5 lg:py-0 lg:py-0">
                      <div className="col-span-2">{wallet.title}</div>
                      <div className="col-span-4">
                        <div className="sm:hidden">
                          {(wallet.address.match(/.{1,20}/g) || []).map(
                            (section) => (
                              <>
                                {section}
                                <br />
                              </>
                            ),
                          )}
                        </div>
                        <div className="hidden sm:block">
                          {wallet.address.length > 46
                            ? (wallet.address.match(/.{1,40}/g) || []).map(
                                (section) => (
                                  <>
                                    {section}
                                    <br />
                                  </>
                                ),
                              )
                            : wallet.address}
                        </div>
                      </div>
                      <div className="col-span-4 lg:text-right">
                        <button
                          className="inline-block hover:text-blue-600 cursor-pointer mr-5"
                          onClick={() => {
                            if (
                              setDoneId !=
                              ((wallet.address + wallet.title) as any)
                            ) {
                              navigator.clipboard.writeText(wallet.address);
                              setDoneId(wallet.address + wallet.title);
                              setTimeout(() => {
                                setDoneId(null);
                              }, 2000);
                            }
                          }}
                        >
                          {wallet.address + wallet.title == doneId ? (
                            <>
                              <CheckIcon className="w-4 h-4 stroke-2 inline text-green-600" />
                              <span className="pl-1 inline text-green-600">
                                Copied
                              </span>
                            </>
                          ) : (
                            <>
                              <CopyIcon className="w-4 h-4 inline" />
                              <span className="pl-1 inline">Copy</span>
                            </>
                          )}
                        </button>
                        <a
                          className="underline hover:text-blue-600"
                          href={wallet.explorerLink}
                          target="_blank"
                        >
                          Open in Explorer
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <MainFooter className="!mt-24" hasCreateAccountSection={true} />
    </>
  );
}
