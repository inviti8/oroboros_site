# Create Ephemeral Drop Event

Create a drop event with specified parameters.

## Parameters

- `amount`: The amount of Oro to be burned as payment for drop creation.
- `date`: The date of the event in the format 'YYYY-MM-DD HH:MM:SS.SSS'.
- `dropValue`: The value of the drop in atomic units.
- `slotCount`: The number of slots for the event.
- `mark`: The unique identifier for the event.
- `imgUrl`: The URL of the image associated with the event.

### Return Value

- `ICRC2.TransferFromResponse`

## Example Call

In Motoko, you can construct a call to this method using the following code:

```mo
import OroTypes "OroTypes";

let response = await OroTypes.createEphemeralDropEvent(
  amount: Nat.from(1000), // burn 1000 Oro
  date: "2023-03-01 12:00:00.000", // event date
  dropValue: Nat.from(500), // drop value in atomic units
  slotCount: Nat.from(5), // number of slots for the event
  mark: "unique-mark", // unique identifier for the event
  imgUrl: "https://example.com/image.png" // URL of the image associated with the event
);
```

Note that you will need to replace `Nat.from(1000)` with your actual amount value, and similarly for the other parameters.