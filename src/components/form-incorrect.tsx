import Input from "./default-input";

export function FormIncorrect() {
    const onKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            return e.currentTarget.form?.submit();
        }

    };

    return (
        <>
            <form>
                <Input type="text" placeholder="text..."
                    onKeyDown={(e) => onKeydown(e)}
                />
            </form>
        </>
    )
}
