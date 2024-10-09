'use client'
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense, useState, useEffect } from 'react';
import './layout.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { isDesktop, isMobile } from 'react-device-detect';


function StudentInfoLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="col-lg-9" style={{ width: '100%' }}>
            
        </div>
    );
}

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <StudentInfoLayout>{children}</StudentInfoLayout>
        </Suspense>
    );
}
