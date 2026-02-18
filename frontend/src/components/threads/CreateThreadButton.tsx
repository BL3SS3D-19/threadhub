interface CreateThreadButtonProps {
    onClick?: () => void;
}

export function CreateThreadButton({ onClick }: CreateThreadButtonProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            className="rounded-full bg-[#170fdb] px-4 py-2 text-sm font-medium text-white shadow-md shadow-[#170fdb] transition hover:bg-[#fff] hover:text-[#170fdb]"
        >
            + Nueva Conversacion
        </button>
    );
}