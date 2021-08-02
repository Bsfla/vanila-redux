import { useState } from 'react';
import Counter from "./components/counter";

const App = () => {
    const [value, setValue] = useState('');

    const onIncrease = () => {
        setValue(value + 1);
    };

    return (
        <div>
            <Counter value={value} onIncrease={onIncrease} />
        </div>
    );
}

export default App;