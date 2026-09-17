import { Head } from '@inertiajs/react';

interface Menu {
    id: number;
    created_at: string;
    updated_at: string;
}

export default function Index({ menus }: { menus: Menu[] }) {
    return (
        <>
            <Head title="Menús" />

            <div className="p-6">
                <h1 className="text-xl font-semibold">Menús</h1>
            </div>
        </>
    );
}
