# Update Generator Logo

Update the logo URL for a given Mark. Hook for generators to update their existing logo image if needed.

## Parameters

- `args`: The account to set the logo for.
- `markType`: The type of mark containing the logo URL.

## Return Value

- `async Bool`: Returns `true` if the logo is updated successfully, and `false` otherwise.

&nbsp;

## Example Call

Here's an example call using Dfinity Motoko language:

```Javascript
import OroTypes "OroTypes";

func testUpdateGeneratorLogo() {
  let account = ICRC1.Account.fromPrincipal(Principal.fromText("owner"));
  let markType = Types.MarkType{
    mark: "My_Mark",
    logoUrl: "https://example.com/image.png"
  };
  let result = updateGeneratorLogo(account, markType);
  switch (result) {
    case (true) {
      print("Logo updated successfully");
    }
    case (false) {
      print("Error updating logo");
    }
  }
}
```

In this example, we first create an `ICRC1.Account` instance from a principal reference. Then, we create a `Types.MarkType` instance with the desired logo URL and mark name. Finally, we call the `updateGeneratorLogo` method with these two parameters and check its return value using a `switch` statement.