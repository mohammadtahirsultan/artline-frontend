import Dashboard from '@/admin/Dashboard'
import { isAuthenticated } from '@/utils/auth';
import withAuth from '@/utils/withAuth';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'

const Anas = () => {

    const router = useRouter();

    useEffect(() => {
        // Redirect to login if the user is not authenticated
        if (!isAuthenticated()) {
            router.push('/login');
        }
    }, [router]);
    return (
        <div>
            <Dashboard />
        </div>
    )
}

export default withAuth(Anas);

