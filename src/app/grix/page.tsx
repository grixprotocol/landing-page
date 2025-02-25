'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function GrixPage() {
	const router = useRouter();

	useEffect(() => {
		router.replace('/#grix');
	}, [router]);

	return null;
}
