# Show Ephemeral Drop Date

Show Ephemeral Drop Date: Shows the date associated with a given ephemeral drop mark. If no date exists, it returns an error message.

## Parameters

- `args`: The account to check.
- `mark`: The unique identifier for the drop.

## Return Value

- `async Text`: The date associated with the ephemeral drop mark, or an error message if no date exists.

&nbsp;

## Example Call

Here's an example call using Dfinity Motoko language:

```Javascript
  let args = ICRC1.Account("owner", "account");
  let mark = "my_mark";

  async let result = showEphemeralDropDate(args, mark);

  match !result {
    | "Mark doesn't exist." => print("Error: Mark doesn't exist."),
    | date => print("The drop date is:", date),
  };
```

Note: The example call assumes that you have already defined the `showEphemeralDropDate` function in your Motoko code, and that you are running this code in a Dfinity canister.