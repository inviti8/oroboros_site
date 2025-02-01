# **Mint From Tokens**

### `mintFromTokens`

This method mints new tokens from the caller's account. It first checks if the token is frozen, and if so, it raises an error. Then it checks if the caller has already minted a token, and if so, it raises an error. If both conditions are met, it mints the tokens and updates the relevant maps.

## **Parameters**

- `args`: The arguments for the mint operation, including the coin type and amount to mint.
- `coin`: The type of coin to mint (ICP, ETH, or BTC).
- `amount`: The amount of coins to mint.
- `source_subaccount`: The subaccount from which to transfer funds.
- `mintMark`: An optional mark for the minted tokens.

## **Return Value**

- `ICRC1.TransferResult`: The method returns information about the minting operation.

&nbsp;

## **Example Call**

To construct a call to this method using Dfinity Motoko language:

```Motoko
import OroTypes "OroTypes";

public shared ({ caller }) func sampleMintMethod() : async ICRC1.TransferResult {

    let args = {
      coin: 'ICP',
      target: caller,
      source_subaccount: null,
      mintMark: null,
      amount: 10n
    };
    
    return await OroTypes.mintFromToken(args);
};



```

Note: A principal reference is required to call this method