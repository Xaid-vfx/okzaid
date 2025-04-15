'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';

const Village3D = dynamic(() => import('@/components/3d/Village3D'), {
    ssr: false,
});

export default function ClashOfClansPage() {
    return (
        <div className="w-full h-screen">
            <Suspense fallback={
                <div className="w-full h-screen flex items-center justify-center bg-gradient-to-b from-blue-300 to-blue-500">
                    <div className="text-center p-8">
                        <h2 className="text-2xl font-bold text-white mb-4">Loading Village...</h2>
                        <p className="text-white">Preparing your COC-themed portfolio experience</p>
                    </div>
                </div>
            }>
                <Village3D />
            </Suspense>
        </div>
    );
} 