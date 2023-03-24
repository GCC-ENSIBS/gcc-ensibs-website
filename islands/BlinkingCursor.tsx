import {useState, useEffect} from "preact/hooks";

export default function BlinkingCursor() {
    const [showCursor, setShowCursor] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setShowCursor(showCursor => !showCursor);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            {showCursor && <span className="cursor bg-white rounded-sm px-2 py-2 ml-2">{"  "}</span>}
        </div>
    );
}
