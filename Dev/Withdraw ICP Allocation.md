# Withdraw ICP Allocation

Withdraw Generator Allocated ICP Tokens. The Generators holding period must be complete in order to withdraw.

## **Parameters**

- `caller`: The principal that is trying to withdraw.

## **Return Value**

- `ICPTypes.Result_2`: A result type containing information about the withdrawal operation.

&nbsp;

## **Example Call**

Here's an example call using Dfinity Motoko language:

```Motoko
import OroTypes "OroTypes";

const principal = Principal.fromText("principal_id");
const result = await OroTypes.withdrawICPAllocation(caller);
```

In this example, we construct a call to the `withdrawICPAllocation` method by creating a `Principal` object from the text representation of the principal ID. We then call the method with the created principal as an argument and store the result in the `result` variable. The actual code for constructing the call may vary depending on your specific use case, but this should give you a general idea of how to do it using Dfinity Motoko language.