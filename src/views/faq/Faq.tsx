"use client";

import * as React from "react";
// import { MainFooter } from '@/components/base/MainFooter';
import { Header } from "@/views/faq/components";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ReactNode, useState } from "react";
import { clsx } from "clsx";
import { X } from "lucide-react";
import Image from "next/image";

export function Faq() {
  type ReactElementWithChildren = React.ReactElement<{ children?: ReactNode }>;

  const content: {
    categoryName: string;
    iconImage: string;
    items: { question: string; answer: ReactElementWithChildren }[];
  }[] = [
    {
      categoryName: "All Questions",
      iconImage: "/images/faq/question.png",
      items: [
        {
          question: "What is Pallapay?",
          answer: (
            <div className="space-y-3">
              <p>
                Pallapay is a leading crypto payment gateway provider, enabling
                businesses of all sizes to accept cryptocurrency payments
                effortlessly. Our secure platform allows merchants to charge in
                fiat currency while customers pay with USDT, Ethereum, USDC, and
                other cryptocurrencies. Pallapay ensures seamless, real-time
                crypto-to-fiat conversions and instant fiat settlements, making
                payment processing fast and reliable.
              </p>
              <p>
                Trusted across industries like retail, hospitality, e-commerce,
                gaming, and trading platforms, Pallapay offers easy integration
                with no crypto knowledge required. Start accepting crypto
                payments today with Pallapay’s innovative crypto payment gateway
                solutions designed to grow your business globally.
              </p>
            </div>
          ),
        },
        {
          question: "Who can use Pallapay crypto payment gateway?",
          answer: (
            <div className="space-y-3">
              Pallapay provides a comprehensive crypto payment gateway for
              businesses and individuals alike. Whether you're a large
              enterprise, small business owner, or freelancer, Pallapay offers
              flexible cryptocurrency payment solutions tailored to your needs.
              Accept crypto payments easily through secure payment links,
              seamless API integration, or Pallapay’s reliable Crypto POS
              machines with no crypto knowledge required.
            </div>
          ),
        },
        {
          question: "What are the fees for using Pallapay?",
          answer: (
            <div className="space-y-3">
              <p>
                Pallapay offers zero transaction fees for businesses accepting
                cryptocurrency payments. Our crypto payment gateway is designed
                to be cost-effective, transparent, and accessible for merchants
                of all sizes.
              </p>
              <p>
                While no transaction fees are charged, any applicable service or
                settlement fees are clearly outlined on our platform—no hidden
                costs, ever. With Pallapay, you benefit from clear,
                straightforward pricing that supports your business growth
                without unexpected charges.
              </p>
            </div>
          ),
        },
        {
          question: "How to get started with Pallapay",
          answer: (
            <div className="space-y-3">
              <p>
                To begin using Pallapay’s crypto payment services, you’ll first
                need to create an account by signing up{" "}
                <a
                  className="text-blue-600 underline"
                  href="https://dashboard.pallapay.com/auth/register"
                >
                  here
                </a>
                . Setting up a personal account requires only a valid physical
                ID—once submitted, you'll be able to access your dashboard and
                start exploring our services right away.
              </p>
              <p>
                For businesses, Pallapay offers a streamlined business
                verification process. After creating your account, you can
                register your business by uploading the necessary documentation,
                such as your trade license, company registration, and proof of
                ownership. Once verified, you’ll gain access to our full suite
                of business tools, including payment links, API integration, and
                the Pallapay Crypto POS system.
              </p>
              <p>
                Whether you're an individual or a business, our onboarding
                process is designed to be fast, transparent, and fully compliant
                with regulatory standards.
              </p>
            </div>
          ),
        },
        {
          question: "What cryptocurrencies does Pallapay support?",
          answer: (
            <div className="space-y-3">
              <p>
                Pallapay supports a wide range of popular cryptocurrencies to
                provide maximum flexibility for both businesses and their
                customers. Accepted digital assets include leading stablecoins
                like USDT, USDC, and DAI, along with widely-used
                cryptocurrencies such as Ethereum (ETH), Tron (TRX), BNB, and
                many more.
              </p>
              <p>
                By offering support for multiple crypto options, Pallapay
                enables your customers to pay with their preferred
                cryptocurrencies, ensuring a faster, more inclusive checkout
                experience. Whether you're accepting crypto online, in-store, or
                via API integration, Pallapay guarantees secure, real-time
                transactions with instant crypto-to-fiat settlement.
              </p>
            </div>
          ),
        },
        {
          question: "How can I get the Pallapay crypto POS machine?",
          answer: (
            <div className="space-y-3">
              <p>
                To order your Pallapay Crypto POS machine, your business must
                first complete the verification process. Once verified, simply
                log in to your dashboard and navigate to the “POS Devices”
                section. Click “Request for POS” and follow the on-screen
                instructions to place your order.
              </p>
              <p>
                Pallapay’s secure POS terminals allow you to accept crypto
                payments in-store, with real-time crypto-to-fiat conversion and
                instant settlement—perfect for retail, hospitality, and
                on-location businesses.
              </p>
            </div>
          ),
        },
        {
          question: "Can customers pay in crypto while I receive fiat?",
          answer: (
            <div className="space-y-3">
              Yes. With Pallapay, your customers can pay in cryptocurrency,
              while you receive the equivalent amount in fiat currency
              instantly. Pallapay handles the crypto-to-fiat conversion in real
              time.
            </div>
          ),
        },
        {
          question: "Is Pallapay available internationally?",
          answer: (
            <div className="space-y-3">
              Yes. While Pallapay operates globally, certain services like fiat
              settlement may be limited to supported regions. Please check your
              dashboard or contact support for region-specific options.
            </div>
          ),
        },
        {
          question: "How secure is Pallapay?",
          answer: (
            <div className="space-y-3">
              Pallapay uses industry-standard encryption and security protocols
              to ensure every transaction is safe, private, and fully compliant
              with regulatory requirements.
            </div>
          ),
        },
        {
          question: "How fast are crypto-to-fiat settlements?",
          answer: (
            <div className="space-y-3">
              <p>
                With Pallapay, settlements are processed in real time—meaning as
                soon as a customer completes a cryptocurrency payment, the
                equivalent fiat amount is instantly credited to your Pallapay
                account. This eliminates the delays typically associated with
                traditional payment processing or manual crypto conversions.
              </p>
              <p>
                Whether you're a retailer, hotel, online store, or service
                provider, our instant settlement feature ensures you receive
                funds immediately, improving your cash flow and simplifying
                reconciliation. Pallapay’s advanced system ensures reliability,
                speed, and full transparency in every transaction—helping your
                business operate more efficiently with no exposure to crypto
                market volatility.
              </p>
            </div>
          ),
        },
        {
          question: "How can I track my payments?",
          answer: (
            <div className="space-y-3">
              All transactions are recorded in your Pallapay dashboard with
              real-time status updates, payment history, and settlement
              summaries.
            </div>
          ),
        },
        {
          question: "What is Pallapay payment link?",
          answer: (
            <div className="space-y-3">
              <p>
                Pallapay Payment Link is a simple, secure, and integration-free
                way to accept cryptocurrency payments from your customers. It is
                a unique URL that you can generate directly from your Pallapay
                dashboard in just a few clicks with no website, technical setup,
                or API integration required.
              </p>
              <p>
                Perfect for freelancers, service providers, social sellers, and
                small businesses, payment links allow you to:
              </p>
              <ol className="list-disc pl-4">
                <li>
                  Request payments by generating invoices and send them to your
                  customers via email
                </li>
                <li>
                  Customize the payment amount in fiat while the customer pays
                  in crypto
                </li>
                <li>Track payment status in real time from your dashboard</li>
                <li>
                  Receive instant fiat settlements once the crypto payment is
                  completed
                </li>
              </ol>
              <p>
                Whether you're collecting invoices, selling services, or taking
                deposits, Pallapay Payment Links offer a fast and flexible
                solution for accepting crypto payments anywhere, anytime.
              </p>
            </div>
          ),
        },
        {
          question: "Can I become a distributor for Pallapay gift cards?",
          answer: (
            <div className="space-y-3">
              Yes. If you're interested in distributing Pallapay Crypto Gift
              Cards in your region, contact our support team to explore
              partnership opportunities and wholesale pricing.
            </div>
          ),
        },
        {
          question: "How does Pallapay handle underpayments?",
          answer: (
            <div className="space-y-3">
              <p>
                Pallapay's system is designed to accurately detect and manage
                overpayments and underpayments in cryptocurrency transactions.
              </p>
              <p>
                If a customer sends less than the required cryptocurrency
                amount, the transaction will remain incomplete. Pallapay’s
                payment gateway will automatically notify the customer of the
                underpayment and provide an option to send the remaining amount
                within a limited time frame to complete the transaction. If the
                full amount is not received in time, the merchant will be
                notified of the unpaid transaction, and the customer will
                receive a refund notification for the original amount, minus any
                applicable network fees.
              </p>
              <p>
                All refund processes are securely and entirely handled by
                Pallapay, ensuring efficiency, accuracy, and peace of mind.
              </p>
            </div>
          ),
        },
        {
          question: "How does Pallapay handle overpayments?",
          answer: (
            <div className="space-y-3">
              <p>
                Pallapay's system is designed to accurately detect and manage
                overpayments and underpayments in cryptocurrency transactions.
              </p>
              <p>
                If a customer sends more than the required cryptocurrency
                amount, the excess funds are automatically flagged by the
                Pallapay system. The merchant will be notified of a completed
                transaction, and the customer will receive a notification
                detailing the overpaid amount. A secure refund link will be
                generated and sent to the customer immediately to claim the
                excess amount, ensuring transparency and trust in every
                transaction.
              </p>
              <p>
                All refund processes are securely and entirely handled by
                Pallapay, ensuring efficiency, accuracy, and peace of mind.
              </p>
            </div>
          ),
        },
        {
          question: "Do crypto payments with Pallapay have chargebacks?",
          answer: (
            <div className="space-y-3">
              <p>
                One of the key advantages of using the Pallapay Crypto Payment
                Gateway is the complete elimination of chargebacks. Traditional
                payment methods like credit cards and bank transfers often
                expose merchants to chargeback risks—where customers dispute
                transactions and request a reversal, often resulting in lost
                revenue and operational headaches.
              </p>
              <p>
                With Pallapay, all cryptocurrency transactions are final and
                irreversible once confirmed on the blockchain. This means:
              </p>
              <ol className="list-disc pl-4">
                <li>Zero chargeback risk</li>
                <li>Greater security for merchants</li>
                <li>Reduced fraud exposure</li>
                <li>Improved cash flow stability</li>
              </ol>
              <p>
                By accepting crypto payments through Pallapay, you protect your
                business from fraudulent disputes and gain full control over
                your revenue without relying on third-party banks or
                intermediaries.
              </p>
            </div>
          ),
        },
        {
          question: "How are refunds on completed transactions processed?",
          answer: (
            <div className="space-y-3">
              <p>
                Unlike traditional payment gateways, refunds through Pallapay
                are entirely managed by the merchant. Merchants can easily issue
                refunds in fiat, or in crypto via their Pallapay dashboard. This
                gives businesses full control and flexibility while maintaining
                transparency and security in every transaction.
              </p>
            </div>
          ),
        },
        {
          question:
            "Can I use Pallapay to accept crypto payments in my website?",
          answer: (
            <div className="space-y-3">
              Can I Use Pallapay to Accept Crypto Payments on My Website?
              <p>
                Yes, absolutely! Pallapay makes it easy to integrate crypto
                payments directly into your website.
              </p>
              <p>
                Once you’ve signed up and completed the verification process,
                you can generate your API key from your Pallapay dashboard. With
                our powerful API, you can:
              </p>
              <ol className="list-disc pl-4 py-1">
                <li>Create new crypto payment requests</li>
                <li>Track real-time payment statuses</li>
                <li>Receive automatic updates for customer transactions</li>
                <li>Monitor your account balances</li>
                <li>And much more</li>
              </ol>
              <p>
                For step-by-step integration instructions, please refer to our
                official{" "}
                <a
                  className="text-blue-600 underline"
                  target="_blank"
                  href="https://docs.pallapay.com"
                >
                  API documentation page
                </a>
                . Start accepting crypto payments securely and efficiently with
                Pallapay today—no crypto knowledge required.
              </p>
            </div>
          ),
        },
        {
          question:
            "How can I add the Pallapay crypto payment gateway to my WooCommerce store?",
          answer: (
            <div className="space-y-3">
              <p>
                Integrating Pallapay with your WooCommerce store is simple and
                seamless:
              </p>
              <ol className="list-disc pl-4 py-1">
                <li>
                  Download the Pallapay WooCommerce Plugin{" "}
                  <a
                    className="text-blue-600 underline"
                    target="_blank"
                    href="https://github.com/pallapay/pallapay-woocommerce-plugin"
                  >
                    from this link
                  </a>
                  .
                </li>
                <li>
                  Install and activate the plugin on your WordPress dashboard.
                </li>
                <li>
                  Enter your Pallapay API credentials in the plugin settings.
                </li>
                <li>
                  Enable the gateway, and you're ready to accept crypto payments
                  at checkout!
                </li>
                <li>
                  Your customers will now have the option to pay using major
                  cryptocurrencies like USDT, ETH, and more—while you receive
                  fiat instantly.
                </li>
              </ol>
            </div>
          ),
        },
      ],
    },
    {
      categoryName: "Withdrawal",
      iconImage: "/images/faq/money.png",
      items: [
        {
          question: "Can customers pay in crypto while I receive fiat?",
          answer: (
            <div className="space-y-3">
              Yes. With Pallapay, your customers can pay in cryptocurrency,
              while you receive the equivalent amount in fiat currency
              instantly. Pallapay handles the crypto-to-fiat conversion in real
              time.
            </div>
          ),
        },
        {
          question: "How fast are crypto-to-fiat settlements?",
          answer: (
            <div className="space-y-3">
              <p>
                With Pallapay, settlements are processed in real time—meaning as
                soon as a customer completes a cryptocurrency payment, the
                equivalent fiat amount is instantly credited to your Pallapay
                account. This eliminates the delays typically associated with
                traditional payment processing or manual crypto conversions.
              </p>
              <p>
                Whether you're a retailer, hotel, online store, or service
                provider, our instant settlement feature ensures you receive
                funds immediately, improving your cash flow and simplifying
                reconciliation. Pallapay’s advanced system ensures reliability,
                speed, and full transparency in every transaction—helping your
                business operate more efficiently with no exposure to crypto
                market volatility.
              </p>
            </div>
          ),
        },
      ],
    },
    {
      categoryName: "Gift Card",
      iconImage: "/images/faq/giftcard.png",
      items: [
        {
          question: "What is a Pallapay Crypto Gift Card?",
          answer: (
            <div className="space-y-3">
              Pallapay Prepaid gift card is a multi-functional card that
              bridging the world of crypto and real-world purchases. Whether
              you’re looking to convert crypto to spendable funds or buy crypto
              conveniently, Pallapay makes it fast, secure, and easy.
            </div>
          ),
        },
        {
          question: "How can I buy a Pallapay Crypto Gift Card?",
          answer: (
            <div className="space-y-3">
              You can purchase a gift card directly from your Pallapay dashboard
              using any supported cryptocurrency or at any Pallapay trusted
              partner location using cash or card.
            </div>
          ),
        },
        {
          question: "Can I sell my Pallapay Crypto Gift Card for cash?",
          answer: (
            <div className="space-y-3">
              Yes. You can sell your gift card at any Pallapay trusted partner
              location for cash or transfer the funds directly to your bank
              account.
            </div>
          ),
        },
        {
          question: "Which cryptocurrencies can I use to buy a gift card?",
          answer: (
            <div className="space-y-3">
              Pallapay supports a wide range of cryptocurrencies, including
              USDT, USDC, Bitcoin (BTC), Ethereum (ETH), XRP, Solana (SOL), and
              more.
            </div>
          ),
        },
        {
          question: "Is it safe to use a Pallapay Crypto Gift Card?",
          answer: (
            <div className="space-y-3">
              Yes. All transactions are secure, and your funds are protected.
              The gift card can only be used through Pallapay’s dashboard or
              authorized trusted partners.
            </div>
          ),
        },
        {
          question: "Are there limits on how much I can load onto a gift card?",
          answer: (
            <div className="space-y-3">
              Limits may vary depending on your country’s regulations and
              Pallapay’s policies. Please check your dashboard or trusted
              partner location for the maximum load limits.
            </div>
          ),
        },
      ],
    },
    {
      categoryName: "Account",
      iconImage: "/images/faq/folder.png",
      items: [
        {
          question: "How to get started with Pallapay",
          answer: (
            <div className="space-y-3">
              <p>
                To begin using Pallapay’s crypto payment services, you’ll first
                need to create an account by signing up{" "}
                <a
                  className="text-blue-600 underline"
                  href="https://dashboard.pallapay.com/auth/register"
                >
                  here
                </a>
                . Setting up a personal account requires only a valid physical
                ID—once submitted, you'll be able to access your dashboard and
                start exploring our services right away.
              </p>
              <p>
                For businesses, Pallapay offers a streamlined business
                verification process. After creating your account, you can
                register your business by uploading the necessary documentation,
                such as your trade license, company registration, and proof of
                ownership. Once verified, you’ll gain access to our full suite
                of business tools, including payment links, API integration, and
                the Pallapay Crypto POS system.
              </p>
              <p>
                Whether you're an individual or a business, our onboarding
                process is designed to be fast, transparent, and fully compliant
                with regulatory standards.
              </p>
            </div>
          ),
        },
        {
          question: "Is Pallapay available internationally?",
          answer: (
            <div className="space-y-3">
              Yes. While Pallapay operates globally, certain services like fiat
              settlement may be limited to supported regions. Please check your
              dashboard or contact support for region-specific options.
            </div>
          ),
        },
      ],
    },
    {
      categoryName: "Technical",
      iconImage: "/images/faq/archive.png",
      items: [
        {
          question:
            "Can I use Pallapay to accept crypto payments in my website?",
          answer: (
            <div>
              Can I Use Pallapay to Accept Crypto Payments on My Website?
              <p>
                Yes, absolutely! Pallapay makes it easy to integrate crypto
                payments directly into your website.
              </p>
              <p>
                Once you’ve signed up and completed the verification process,
                you can generate your API key from your Pallapay dashboard. With
                our powerful API, you can:
              </p>
              <ol className="list-disc pl-4 py-1">
                <li>Create new crypto payment requests</li>
                <li>Track real-time payment statuses</li>
                <li>Receive automatic updates for customer transactions</li>
                <li>Monitor your account balances</li>
                <li>And much more</li>
              </ol>
              <p>
                For step-by-step integration instructions, please refer to our
                official{" "}
                <a
                  className="text-blue-600 underline"
                  target="_blank"
                  href="https://docs.pallapay.com"
                >
                  API documentation page
                </a>
                . Start accepting crypto payments securely and efficiently with
                Pallapay today—no crypto knowledge required.
              </p>
            </div>
          ),
        },
        {
          question:
            "How can I add the Pallapay crypto payment gateway to my WooCommerce store?",
          answer: (
            <div>
              <p>
                Integrating Pallapay with your WooCommerce store is simple and
                seamless:
              </p>
              <ol className="list-disc pl-4 py-1">
                <li>
                  Download the Pallapay WooCommerce Plugin{" "}
                  <a
                    className="text-blue-600 underline"
                    target="_blank"
                    href="https://github.com/pallapay/pallapay-woocommerce-plugin"
                  >
                    from this link
                  </a>
                  .
                </li>
                <li>
                  Install and activate the plugin on your WordPress dashboard.
                </li>
                <li>
                  Enter your Pallapay API credentials in the plugin settings.
                </li>
                <li>
                  Enable the gateway, and you're ready to accept crypto payments
                  at checkout!
                </li>
                <li>
                  Your customers will now have the option to pay using major
                  cryptocurrencies like USDT, ETH, and more—while you receive
                  fiat instantly.
                </li>
              </ol>
            </div>
          ),
        },
      ],
    },
  ];

  const searchNode = (children: ReactNode, searchText: string): boolean => {
    if (
      children === null ||
      children === undefined ||
      typeof children === "boolean"
    ) {
      return false;
    }

    // string or number
    if (typeof children === "string" || typeof children === "number") {
      return String(children).toLowerCase().includes(searchText.toLowerCase());
    }

    // array of nodes
    if (Array.isArray(children)) {
      return children.some((child) => searchNode(child, searchText));
    }

    // React element
    if (React.isValidElement(children)) {
      const element = children as React.ReactElement<{ children?: ReactNode }>;

      if (element.props?.children) {
        return searchNode(element.props.children, searchText);
      }
    }

    return false;
  };
  /**
   * Checks if a React element contains a specific string anywhere in its children,
   * including nested elements.
   * @param element The top-level React element to check.
   * @param searchText The string to search for.
   * @returns {boolean} True if the search text is found, otherwise false.
   */
  const hasSpecificText = (
    element: ReactElementWithChildren,
    searchText: string,
  ) => {
    if (!element || !element.props) {
      return false;
    }
    return searchNode(element.props.children, searchText);
  };

  const [selectedCategory, setSelectedCategory] = useState(
    content[0].categoryName,
  );
  const [searchValue, setSearchValue] = useState("");

  return (
    <>
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <div className="container -translate-y-14 sm:-translate-y-22">
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-7 text-black">
          {content.map((category) => (
            <div
              key={`category_${category.categoryName}`}
              className={clsx(
                "flex flex-col items-center justify-center text-center px-4 py-5 rounded-2xl cursor-pointer transition-all duration-300 bg-[#353C45] text-white shadow-[0_0px_40px_rgba(0,0,0,0.15)] hover:shadow-[0_0px_40px_rgba(0,0,0,0.30)]",
                category.categoryName === selectedCategory
                  ? "border-2  border-transparent bg-origin-border [background-clip:padding-box,border-box] [background-image:linear-gradient(#353C45,#353C45),linear-gradient(to_bottom,rgba(255,255,255,1),rgba(255,255,255,0))]"
                  : "border-2 border-transparent",
              )}
              onClick={() => {
                setSelectedCategory(category.categoryName);
                setSearchValue("");
              }}
            >
              <Image
                alt={category.categoryName}
                src={category.iconImage}
                width={80}
                height={80}
                className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
              />

              <div className="mt-3 text-base sm:text-lg">
                {category.categoryName}
              </div>
            </div>
          ))}
        </div>
        <div className="text-white mt-10">
          <div className="text-2xl font-semibold flex gap-4.5 items-center">
            <div>
              {searchValue != "" ? `Search: ${searchValue}` : selectedCategory}
            </div>
            {searchValue != "" && (
              <div
                className="mt-1 text-neutral-400 cursor-pointer"
                onClick={() => setSearchValue("")}
              >
                <X />
              </div>
            )}
          </div>
          <div className="mt-1">
            <Accordion
              type="single"
              collapsible
              className="w-full border-b border-gray-800"
            >
              {searchValue == ""
                ? content
                    .find(
                      (category) => category.categoryName == selectedCategory,
                    )
                    ?.items.map((item, index) => (
                      <AccordionItem
                        className="border-b border-gray-800"
                        key={`item_${item.question}_${index}`}
                        value={`item_${item.question}_${index}`}
                      >
                        <AccordionTrigger>{item.question}</AccordionTrigger>
                        <AccordionContent>{item.answer}</AccordionContent>
                      </AccordionItem>
                    ))
                : content[0].items.map(
                    (item, index) =>
                      (item.question
                        .toLowerCase()
                        .includes(searchValue.toLowerCase()) ||
                        hasSpecificText(
                          item.answer,
                          searchValue.toLowerCase(),
                        )) && (
                        <AccordionItem
                          key={`item_${content[0].categoryName + item.question + index}`}
                          value={`item_${content[0].categoryName + item.question + index}`}
                        >
                          <AccordionTrigger>{item.question}</AccordionTrigger>
                          <AccordionContent>{item.answer}</AccordionContent>
                        </AccordionItem>
                      ),
                  )}
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
}
