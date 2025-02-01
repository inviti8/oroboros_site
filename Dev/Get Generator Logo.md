# Get Generator Logo

## Parameters

- `mark`: The mark for which you want to retrieve the generator logo (Text)

## Return Value

- `?Text`: The method returns an optional natural number representing a url to a png.

&nbsp;

## Example Call

Here's an example call using Dfinity Motoko language:

```Motoko
import OroTypes "OroTypes";

//grab the image
let imgUrl = OroTypes.getGeneratorLogo("MY MARK");

if(imgUrl != null){
//do something with the image url.
};
```