export type Currency = {
    name: string;
    symbol: string;
    icon_url: string;
    rate_in_aed: string | null;
    price_change_24h: string;
    sell_rate_ratio: string;
    buy_rate_ratio: string;
    gift_card_fixed_fee: string;
    gift_card_percentage_fee: string;
    // gift_card_maximum_percentage_fee: string;
    gift_card_minimum_amount: string;
    gift_card_maximum_amount: string;
    otc_buy_fixed_fee: string;
    otc_sell_fixed_fee: string;
    is_fiat: boolean;
    decimal_places: number;
};

export type Network = {
    name: string;
    symbol: string;
    token_type: string | null;
    fee_currency: Currency;
    is_memo_base: boolean;
    block_confirmation_required: number;
    pos_payment_timeout: number;
};

export type Cryptocurrency = {
    name: string;
    currency: Currency;
    network: Network;
    is_token: boolean;
    network_fee_amount: string;
    is_withdraw_enabled: boolean;
    is_deposit_enabled: boolean;
    is_available_in_pos: boolean;
    is_available_in_api: boolean;
    pos_fixed_fee: string;
    pos_percentage_fee: string;
    pos_maximum_percentage_fee: string;
    pos_minimum_amount: string;
    pos_maximum_amount: string;
    api_fixed_fee: string;
    api_percentage_fee: string;
    api_maximum_percentage_fee: string;
    api_minimum_amount: string;
    api_maximum_amount: string;

    wallet_withdrawal_fixed_fee: string;
    wallet_withdrawal_percentage_fee: string;
    wallet_withdrawal_maximum_percentage_fee: string;
    wallet_withdrawal_minimum_amount: string;
    wallet_withdrawal_maximum_amount: string;

    withdrawal_fixed_fee: string;
    withdrawal_percentage_fee: string;
    withdrawal_maximum_percentage_fee: string;
    deposit_fixed_fee: string;
    deposit_percentage_fee: string;
    deposit_maximum_percentage_fee: string;
    withdrawal_min_verification_level: string;
    deposit_min_verification_level: string;
    pos_min_verification_level: string;
    api_min_verification_level: string;
    muv: string;
};

export type WalletConfig = {
    cryptocurrency: Cryptocurrency;
    min_deposit: string;
}

export type SwapPair = {
    symbol: string;
    source_currency: Currency;
    source_network: Network | null;
    destination_currency: Currency;
    destination_network: Network | null;
    minimum_source_amount: string;
    fixed_fee: string;
    percentage_fee: string;
};
