# Delete Ephemeral Drop Event

Delete a specific ephemeral drop event.

## Parameters

- `account`: The account of the generator making the request.
- `mark`: The unique identifier for the event to be deleted.

## Return Value

- `bool`:  The method returns a boolean indicating whether the operation was successful.

&nbsp;

## Example Call

Here's an example call using Dfinity Motoko language:

```Javascript
import OroTypes "OroTypes";

let myAccount = ...
let myMark = ...

let result = await OroTypes.deleteEphemeralDropEvent(myAccount, myMark);
```

&nbsp;