# Buttons Component
This is a reusable buttons component for React that supports different types of buttons. You can easily switch between button types by changing the classname.

## Installation

You can install this package using npm:

```bash
npm install animated-buttons
```

## Usage
To use this component in your React app, simply import it and render it:
```bash
import React from 'react';
import { Button } from 'animated-buttons';

function App() {
  return (
    <div>
      <Button/>
    </div>
  );
}
```

## Available Props
```bash

<Button
className={}
style={}
type={}
value={}
isDisabled={}
/>
```

Props | Datatype | required*| Default Value|
---|---|---|---|
className | String | No | "default-btn" |
style | string  | No | none |
type | string | No | "submit" |
value | string | yes | none |
isDisabled | boolean | No | yes


### Contributing
Contributions are always welcome! If you have an idea for a new feature or find a bug, please open an issue or submit a pull request.

### License
This package is licensed under the MIT License.

### Credits
This package was inspired by many other open source React components. Thank you to all the developers who have contributed to the React community!
