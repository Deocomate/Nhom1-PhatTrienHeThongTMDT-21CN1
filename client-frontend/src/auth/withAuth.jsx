// auth/withAuth.jsx
import {useRouter} from 'next/navigation';
import {useAuth} from './AuthProvider';
import {useEffect} from 'react';

const withAuth = (WrappedComponent) => {
    const Wrapper = (props) => {
        const {user, loading} = useAuth();
        const router = useRouter();

        useEffect(() => {
            if (!loading && !user) {
                router.push('/login'); // Chuyển hướng nếu chưa đăng nhập
            }
        }, [user, loading, router]);

        if (loading) {
            return <p>Loading...</p>; // Hoặc một component loading thích hợp
        }

        if (!user) {
            return null;  // Không render component nếu chưa đăng nhập (đã redirect)
        }

        return <WrappedComponent {...props} />;
    };

    return Wrapper;
};

export default withAuth;