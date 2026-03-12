"use client";

import * as React from "react";
// import { MainFooter } from "@/components/base/MainFooter";
import { MainNav } from "@/components/base/MainNav";
import { Button } from "@/components/ui/button";
import { AboutUsSection } from "@/components/base/AboutUsSection";
// import InteractiveGradientCard from "@/components/base/InteractiveGradientCard";
import { ArrowUpRight, Check, Github } from "lucide-react";
// import gamepadAnimation from "../../../lottie/gamepad.json";
// import onlineSupermarketAnimation from "../../../lottie/online-supermarket.json";
// import slotMachineAnimation from "../../../lottie/slot-machine.json";
// import stockTradingAnimation from "../../../lottie/stock-trading.json";
// import { LottieOnHover } from "@/components/lottie-show-on-hover";
// import { Link } from "@/lib/inertia-shims";
import { CodeBlock, CopyBlock, irBlack } from "react-code-blocks";
import { useState } from "react";
import { clsx } from "clsx";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import Image from "next/image";
import { BestSuitedFor } from "../main/components";
import Link from "next/link";
import { useTranslations } from "next-intl";

export function PaymentApi() {
  const [selectedCodeItem, setSelectedCodeItem] = useState<number>(0);
  const t = useTranslations('paymentApi');

  const codeItems: {
    title: string;
    language?: string;
    code?: string;
    github?: string;
    installation?: string;
  }[] = [
    {
      title: "Full Example (Python)",
      language: "python",
      code:
        "timestamp = str(round(datetime.now().timestamp()))\n" +
        'secret_key = "YOUR_SECRET_KEY"\n' +
        'path = "/api/v1/api/ping"\n' +
        'url = "https://app.pallapay.com" + path\n' +
        " \n" +
        'prepared_str = "GET" + path + timestamp\n' +
        "signature_str = hmac.new(\n" +
        "    bytes(secret_key, 'latin-1'),\n" +
        "    msg=bytes(prepared_str, 'latin-1'),\n" +
        "    digestmod=hashlib.sha256\n" +
        ").hexdigest().lower()\n" +
        " \n" +
        "headers = {\n" +
        '    "Accept": "application/json",\n' +
        "    'X-Palla-Api-Key': \"YOUR_API_KEY\",\n" +
        "    'X-Palla-Sign': signature_str,\n" +
        "    'X-Palla-Timestamp': timestamp\n" +
        "}\n" +
        " \n" +
        "response = requests.get(url=url, headers=headers)\n" +
        "result = json.loads(response.text)\n" +
        "print(result)\n" +
        " \n" +
        "# {'data': {'result': 'pong'}, 'message': 'Operation was successful', 'is_successful': True}",
    },
    {
      title: "Python SDK",
      language: "python",
      code:
        "from pallapay.client import PallapayClient\n" +
        " \n" +
        'api_key = "TEST_API_KEY"\n' +
        'secret_key = "TEST_API_KEY"\n' +
        " \n" +
        "# Create payment link\n" +
        "pallapay_client = PallapayClient(apiKey=api_key, secret_key=secret_key)\n" +
        "created_payment = pallapay_client.create_payment(\n" +
        '    symbol="AED",\n' +
        '    amount="10",\n' +
        '    ipn_success_url="https://my_website.com/payment/success",\n' +
        '    ipn_failed_url="https://my_website.com/payment/failed",\n' +
        '    payer_email_address="johndoe@gmail.com",\n' +
        '    webhook_url="https://my_website.com/webhook",  # Optional\n' +
        '    payer_first_name="John",  # Optional\n' +
        '    payer_last_name="Doe",  # Optional\n' +
        '    note="YOUR CUSTOM NOTE",  # Optional\n' +
        '    order_id="YOUR_UNIQUE_ORDER_ID",  # Optional\n' +
        ")\n" +
        " \n" +
        "print(created_payment.payment_link)\n" +
        "# https://dashboard.pallapay.com/payment/fd423e12ff9d4a33a14fcba6a4df54e2",
      github: "https://github.com/pallapay/pallapay-python-sdk",
      installation: "pip install pallapay-python-sdk",
    },
    {
      title: "PHP SDK",
      language: "php",
      code:
        "use Pallapay\\PallapaySDK\\PallapayClient;\n" +
        " \n" +
        '$apiKey = "YOUR_API_KEY";\n' +
        '$secretKey = "YOUR_SECRET_KEY";\n' +
        "$pallapayClient = new PallapayClient($apiKey, $secretKey);\n" +
        " \n" +
        "$createdPayment = $pallapayClient->payment()->create(\n" +
        "    'AED',\n" +
        "    '100',\n" +
        "    'johndoe@gmail.com',\n" +
        "    'https://yourwebsite.com/success',\n" +
        "    'https://yourwebsite.com/failed',\n" +
        "    'https://yourwebsite.com/webhook', // Optional\n" +
        "    'John', // Optional\n" +
        "    'Doe', // Optional\n" +
        "    'My Custom Note', // Optional\n" +
        "    'Order ID' // Optional\n" +
        ");\n" +
        " \n" +
        'echo $createdPayment["data"]["payment_link"];\n' +
        "# https://dashboard.pallapay.com/payment/fd423e12ff9d4a33a14fcba6a4df54e2",
      github: "https://github.com/pallapay/pallapay-php-sdk",
      installation: "composer require pallapay/pallapay-php-sdk",
    },
    {
      title: "Woocommerce Plugin",
      github: "https://github.com/pallapay/pallapay-woocommerce-plugin",
    },
    {
      title: "Magento2 Plugin",
      github: "https://github.com/pallapay/pallapay-magento2-plugin",
    },
  ];
  return (
    <div className="bg-black">
      <MainNav hasBackground={true} />
      <div className="container lg:pt-14 pg:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-10 lg:gap-6">
          <div className="lg:col-span-5 flex items-center row-start-2 lg:row-start-1">
            <div>
              <div className="text-2xl leading-[2.4rem] sm:text-4xl sm:leading-[3rem] lg:text-5xl lg:leading-[3.5rem] font-semibold">
                {t('heroTitle')}
              </div>
              <div className="text-xl md:text-lg mt-5">
                {t('heroDesc')}
              </div>
              <div className="flex gap-3 mt-6">
                <a href="https://dashboard.pallapay.com/auth/register">
                  <Button className="text-black bg-amber-400 hover:bg-amber-500 cursor-pointer">
                    {t('createAccount')}
                  </Button>
                </a>
                <a href="https://docs.pallapay.com">
                  <Button variant="outline" className="bg-transparent text-amber-400 hover:text-amber-400 hover:bg-amber-400/10 border-amber-400 cursor-pointer">
                    {t('checkApiDocs')}
                  </Button>
                </a>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 row-start-1">
            <div className="relative mt-8 mx-auto sm:w-[70%] lg:w-full">
              <div className="absolute left-0 bottom-[10%] w-[90%] h-[60%] bg-[#363636] rounded-[150%] blur-[100px]"></div>
              <ParallaxProvider>
                <Parallax
                  rotate={[-20, 20]}
                  speed={-3}
                  className="absolute top-10 -right-10 sm:right-6"
                >
                  <div className="w-[95px] h-[90px] md:w-[120px] md:h-[110px] rotate-[16deg] bg-gradient-to-b from-[#353C45] via-[#181A20] via-50% to-[#010101] rounded-[150%] blur-[8px]"></div>
                </Parallax>
                <Parallax
                  rotate={[-20, 20]}
                  speed={-3}
                  className="absolute -bottom-0 left-0"
                >
                  <div className="w-[120px] h-[105px] md:w-[180px] md:h-[170px] rotate-[16deg] bg-gradient-to-b from-[#353C45] via-[#181A20] via-50% to-[#010101] rounded-[150%] blur-[10px]"></div>
                </Parallax>
                <Parallax
                  rotate={[0, 0]}
                  speed={-8}
                  className="relative -mt-10 sm:mt-0"
                >
                  <Image
                    alt="Payment API"
                    src="/images/api/api-intergration-settings.png"
                    height={250}
                    width={400}
                    className="mx-0 md:mx-14 mb-4"
                  />
                </Parallax>
                {/* <Parallax speed={10} className="relative -mt-10 sm:mt-0">
                                    <img alt="Payment API" src="/images/api/hero/api.png" />
                                </Parallax> */}
              </ParallaxProvider>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="grid md:grid-cols-12 gap-7 sm:gap-10 lg:gap-18 mt-20! md:mt-16!">
          <div className="col-span-6">
            <ParallaxProvider>
              <Parallax rotate={[-20, 20]} speed={-3} className="absolute ">
                <div className="w-[95px] h-[90px] md:w-[120px] md:h-[110px] rotate-[16deg] bg-gradient-to-b from-[#353C45] via-[#181A20] via-50% to-[#010101] rounded-[150%] blur-[8px]"></div>
              </Parallax>
              <div className="relative">
                <Parallax
                  rotate={[-20, 20]}
                  speed={-3}
                  className="absolute   top-44 right-0  m-auto"
                >
                  <div className="w-[120px] h-[105px] md:w-[180px] md:h-[170px] rotate-[16deg] bg-gradient-to-b from-[#353C45] via-[#181A20] via-50% to-[#010101] rounded-[150%] blur-[10px]"></div>
                </Parallax>
              </div>
              <Parallax
                rotate={[0, 0]}
                speed={-8}
                // className="absolute top-10 -right-10 sm:right-6"
              >
                <Image
                  alt="Development"
                  src="/images/api/payment-setting-desktop.png"
                  // className="mx-auto"
                  height={400}
                  width={400}
                />
              </Parallax>
            </ParallaxProvider>
          </div>
          <div className="col-span-6 flex items-center">
            <div className="mx-auto md:mx-0">
              <h4 className="text-2xl lg:text-3xl font-semibold">
                {t('ultimateApiTitle')}
              </h4>
              <div className="mt-5 lg:mt-10 space-y-3">
                <div className="flex gap-4 items-center text-xl md:text-lg ">
                  <div className="text-black bg-amber-400 rounded-full flex w-7 h-7 items-center justify-center">
                    <Check size={20} strokeWidth={2.8} />
                  </div>
                  <div>{t('easyIntegration')}</div>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="text-black bg-amber-400 rounded-full flex w-7 h-7 items-center justify-center">
                    <Check size={20} strokeWidth={2.8} />
                  </div>
                  <div>{t('userFriendlyApi')}</div>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="text-black bg-amber-400 rounded-full flex w-7 h-7 items-center justify-center">
                    <Check size={20} strokeWidth={2.8} />
                  </div>
                  <div>{t('allCheckouts')}</div>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="text-black bg-amber-400 rounded-full flex w-7 h-7 items-center justify-center">
                    <Check size={20} strokeWidth={2.8} />
                  </div>
                  <div>{t('noHiddenFees')}</div>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="text-black bg-amber-400 rounded-full flex w-7 h-7 items-center justify-center">
                    <Check size={20} strokeWidth={2.8} />
                  </div>
                  <div>{t('noCryptoExperience')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-24! text-center">
        {/* <h4 className="text-2xl lg:text-3xl font-semibold"></h4> */}
        <BestSuitedFor title={t('industriesTitle')} />
        {/* <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-10 lg:gap-10 mt-12 sm:mt-16">
          <Link href="/industries/gaming">
            <InteractiveGradientCard className="bg-[#181A20] flex items-center justify-center pb-2 sm:pb-4 sm:pt-1">
              <div>
                <div className="flex w-full justify-center">
                  <LottieOnHover
                    animationData={gamepadAnimation}
                    width={110}
                    height={110}
                  />
                </div>
                <div className="text-lg sm:text-xl font-semibold mt-2 sm:mt-5">
                  Gaming
                </div>
              </div>
            </InteractiveGradientCard>
          </Link>
          <Link href="/industries/casinos">
            <InteractiveGradientCard className="bg-[#181A20] flex items-center justify-center pb-2 sm:pb-4 sm:pt-1">
              <div>
                <div className="flex w-full justify-center">
                  <LottieOnHover
                    animationData={slotMachineAnimation}
                    width={110}
                    height={110}
                  />
                </div>
                <div className="text-lg sm:text-xl font-semibold mt-2 sm:mt-5">
                  Casinos
                </div>
              </div>
            </InteractiveGradientCard>
          </Link>
          <Link href="/industries/trading-platforms">
            <InteractiveGradientCard className="bg-[#181A20] flex items-center justify-center pb-2 sm:pb-4 sm:pt-1">
              <div>
                <div className="flex w-full justify-center">
                  <LottieOnHover
                    animationData={stockTradingAnimation}
                    width={110}
                    height={110}
                  />
                </div>
                <div className="text-lg sm:text-xl font-semibold mt-2 sm:mt-5">
                  Trading Platforms
                </div>
              </div>
            </InteractiveGradientCard>
          </Link>
          <Link href="/industries/ecommerce">
            <InteractiveGradientCard className="bg-[#181A20] flex items-center justify-center pb-2 sm:pb-4 sm:pt-1">
              <div>
                <div className="flex w-full justify-center">
                  <LottieOnHover
                    animationData={onlineSupermarketAnimation}
                    width={110}
                    height={110}
                  />
                </div>
                <div className="text-lg sm:text-xl font-semibold mt-2 sm:mt-5">
                  E-commerce
                </div>
              </div>
            </InteractiveGradientCard>
          </Link>
        </div> */}
      </div>

      <div className="container mt-24!">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative ">
            <div className="p-10 z-2 rounded-t-2xl bg-linear-to-b from-(--primary-grey) to-black relative">
              <div className="text-lg font-semibold text-amber-400">
                {t('pluginsTitle')}
              </div>
              <div className="mt-5 lg:text-lg lg:pr-22 pb-24 lg:pb-0">
                {t('pluginsDesc')}
              </div>
            </div>
            <a href="https://docs.pallapay.com/sdk_and_plugins">
              <div className="bg-[#353C4590] hover:bg-[#353C45] p-5 rounded-2xl w-fit absolute right-0 bottom-0 z-2 text-amber-400 border-2 border-[#353C4590] hover:border-amber-400">
                <ArrowUpRight size={40} strokeWidth={1.25} />
              </div>
            </a>
            <div className="absolute w-full h-full top-0 left-0 corner-rounded-card backdrop-blur-[20px] rounded-2xl"></div>
          </div>
          <div className="relative">
            <div className="p-10 z-2 rounded-t-2xl bg-linear-to-b from-(--primary-grey) to-black relative">
              <div className="text-lg font-semibold text-amber-400">
                {t('apiForBusinessTitle')}
              </div>
              <div className="mt-5 lg:text-lg lg:pr-22 pb-24 lg:pb-0">
                {t('apiForBusinessDesc')}
              </div>
            </div>
            <a href="https://docs.pallapay.com">
              <div className="bg-[#353C4590] hover:bg-[#353C45] p-5 rounded-2xl w-fit absolute right-0 bottom-0 z-2 text-amber-400 border-2 border-[#353C4590] hover:border-amber-400">
                <ArrowUpRight size={40} strokeWidth={1.25} />
              </div>
            </a>
            <div className="absolute w-full h-full top-0 left-0 corner-rounded-card backdrop-blur-[20px] rounded-2xl"></div>
          </div>
        </div>
      </div>

      <div className="container mt-24!">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          <div className="col-span-4 text-white lg:text-xl space-y-7 relative pb-14 md:pb-0">
            <div className="absolute top-0 left-[4px] w-[1px] h-full bg-gradient-to-b from-[#353C4540] via-25% via-[#353C45] to-[#353C4540] hidden md:block"></div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-5 md:block md:grid-cols-none  md:gap-y-0">
              {codeItems.map((codeItem, index) => (
                <div
                  key={index}
                  className="flex gap-3 items-center relative mt-8"
                >
                  <div
                    className={clsx(
                      "min-w-[10px] min-h-[10px] rounded-full bg-neutral-600",
                      {
                        ["min-w-[12px] min-h-[12px] bg-white"]:
                          selectedCodeItem == index,
                      },
                    )}
                  ></div>
                  {!codeItem.language && !codeItem.code ? (
                    <a
                      href={codeItem.github ?? "#"}
                      target="_blank"
                      className={clsx({
                        ["text-neutral-600"]: index != selectedCodeItem,
                      })}
                    >
                      {codeItem.title}
                    </a>
                  ) : (
                    <div
                      className={clsx("cursor-pointer", {
                        ["text-neutral-600"]: index != selectedCodeItem,
                      })}
                      onClick={() => setSelectedCodeItem(index)}
                    >
                      {codeItem.title}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div
              className={clsx(
                "absolute bottom-5 text-neutral-600 text-sm pl-5",
                { ["mb-6"]: Boolean(codeItems[selectedCodeItem].github) },
              )}
            >
              More Integrations Coming Soon ...
            </div>
          </div>
          <div className="col-span-8 text-sm">
            {codeItems[selectedCodeItem].installation && (
              <div className="mb-4">
                <CopyBlock
                  language="sell"
                  text={codeItems[selectedCodeItem].installation}
                  theme={irBlack}
                  customStyle={{
                    borderRadius: "14px",
                    border: "3px solid #353C4595",
                    padding: "10px 15px",
                  }}
                />
              </div>
            )}
            <CodeBlock
              theme={irBlack}
              text={codeItems[selectedCodeItem].code}
              language="python"
              showLineNumbers={true}
              customStyle={{
                height: "500px",
                overflowY: "scroll",
                borderRadius: "14px",
                background: "#353C4560",
                padding: "22px 0px",
              }}
            />
            <div className="mt-3">
              {codeItems[selectedCodeItem].github && (
                <a
                  href={codeItems[selectedCodeItem].github}
                  target="_blank"
                  className="flex gap-2 items-center w-fit text-white py-2 px-3 bg-neutral-600/40 rounded-lg select-none"
                >
                  <Github size={20} />
                  {codeItems[selectedCodeItem].github}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-20! sm:mt-28!">
        <h3 className="text-2xl sm:leading-[3.2rem] lg:text-3xl lg:leading-[3.4rem] font-semibold sm:w-[65%] lg:w-[50%] mx-auto text-center">
          {t('morePaymentSolutions')}
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-8 mt-8 sm:mt-12 text-center lg:w-[75%] mx-auto">
          <Link href="/products/payment-link">
            <div className="bg-[#292B31] hover:bg-neutral-900 flex items-center justify-center rounded-3xl px-5 py-5 sm:py-10">
              <div>
                <Image
                  alt="Website"
                  src="/images/products/website.png"
                  width={80}
                  height={80}
                  className="max-w-[95%] sm:max-w-[65%] mx-auto"
                />
                <div className="text-lg sm:text-xl font-semibold mt-2 sm:mt-5">
                  {t('paymentLinks')}
                </div>
              </div>
            </div>
          </Link>
          <Link href="/products/fiat-settlement">
            <div className="bg-[#292B31] hover:bg-neutral-900 flex items-center justify-center rounded-3xl px-5 py-5 sm:py-10">
              <div>
                <Image
                  alt="Fiat settlements"
                  src="/images/products/money.png"
                  width={80}
                  height={80}
                  className="max-w-[95%] sm:max-w-[65%] mx-auto"
                />
                <div className="text-lg sm:text-xl font-semibold mt-2 sm:mt-5">
                  {t('fiatSettlement')}
                </div>
              </div>
            </div>
          </Link>
          <div className="col-span-2 sm:col-span-1">
            <Link href="/crypto-pos-machine">
              <div className="bg-[#292B31] hover:bg-neutral-900 flex items-center justify-center rounded-3xl px-5 py-5 sm:py-10">
                <div>
                  <Image
                    alt="Crypto POS Machine"
                    src="/images/products/pos.png"
                    width={80}
                    height={80}
                    className="max-w-[55%] sm:max-w-[65%] mx-auto"
                  />
                  <div className="text-lg sm:text-xl font-semibold mt-2 sm:mt-5">
                    {t('posMachine')}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <AboutUsSection className="!pt-0 sm:!pt-0 -mt-4" />
      {/* <MainFooter
        className="!mt-8 sm:!mt-24"
        hasCreateAccountSection={true}
        createAccountSectionType="SOLID"
      /> */}
    </div>
  );
}
