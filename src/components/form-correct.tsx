import { useState } from "react";
import Input from "./default-input";

export function FormCorrect() {
    const [composing, setComposition] = useState(false);
    const startComposition = () => setComposition(true);
    const endComposition = () => setComposition(false);

    const onKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && !composing) {
            return e.currentTarget.form?.submit();
        }
        if (e.key === 'Enter' && composing) {
            return;
        }
    };

    return (
        <>
            <form>
                <Input type="text" placeholder="text..."
                    onCompositionStart={startComposition}
                    onCompositionEnd={endComposition}
                    onKeyDown={(e) => onKeydown(e)}
                />
            </form>
        </>
    )
}
